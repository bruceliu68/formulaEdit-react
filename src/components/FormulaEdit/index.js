/*
 * @Author: liubo
 * @CreatDate: 2019-02-19 18:24:32
 * @Describe: 计算公式编辑器组件
 */

import React, { PureComponent } from "react";
import * as CodeMirror from "codemirror/lib/codemirror";
import "./defineScript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/3024-day.css";
import "codemirror/theme/material.css";
import "./index.less";

export default class FormulaEdit extends PureComponent {

	state = {
		posLeft: 0,
		posTop: 0,
		tipShow: false,
		tipShowType: null, // @, #
		dropList: [],
		blurFlag: false,
		fieldList: [],
		methodList: [],
		normalList: []
	};

	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}

	setLocalStorage = () => {
		const { fieldList = [], methodList = [], normalList = [] } = this.props;
		// 字段存本地，供分词高亮使用
		localStorage.codemirrorFieldList = this.getLoacalList(fieldList, "@");
		localStorage.codemirrorMethodList = this.getLoacalList(methodList, "#");
		localStorage.codemirrorNormalList = this.getLoacalList(normalList, "");
	}

	getLoacalList = (list, type) => {
		const copyList = Object.assign([], list);
		// 排序，把长的放前面
		copyList.sort((a, b) => {
			if (a.name.length > b.name.length) {
				return -1;
			}
			if (a.name.length < b.name.length) {
				return 1;
			}
			return 0;
		});
		let codemirrorList = [];
		for (let i = 0; i < copyList.length; i++) {
			codemirrorList.push(`${type}${copyList[i].name}`);
		}
		let obj = {};
		if (type === "@") obj.fieldList = copyList;
		if (type === "#") obj.methodList = copyList;
		if (type === "") obj.normalList = copyList;
		this.setState({ ...obj });
		return JSON.stringify(codemirrorList);
	}

	componentDidMount() {
		const { defaultValue = "", readOnly = false, theme = "night", lineNumber = true, height = 300 } = this.props;
		const { current } = this.ref;

		this.setLocalStorage();

		let turnTheme;
		if (theme === "night") turnTheme = "material";
		if (theme === "day") turnTheme = "3024-day";
		this.CodeMirrorEditor = CodeMirror.fromTextArea(current, {
			mode: "defineScript",
			theme: turnTheme,
			lineNumbers: lineNumber,
			readOnly: readOnly ? "nocursor" : false
		});
		this.CodeMirrorEditor.setValue(defaultValue);
		this.CodeMirrorEditor.setSize("auto", height);
		this.CodeMirrorEditor.on("cursorActivity", (cm) => {
			this.cursorActivity(cm);
		});
		this.CodeMirrorEditor.on("changes", (cm) => {
			if (this.props.onChange) {
				const { fieldList, methodList, normalList } = this.state;
				const errorkeyword = document.body.querySelector(".cm-nomal-keyword");
				const data = {
					fieldList,
					methodList,
					normalList,
					errorMsg: errorkeyword ? "存在错误代码" : null
				};
				this.props.onChange(cm.getValue(), data);
			}
		});
		this.CodeMirrorEditor.on("focus", (cm) => {
			this.cursorActivity(cm);
			this.setState({ blurFlag: true });
		});
		document.body.addEventListener("click", this.listenner);
		this.CodeMirrorEditor.addKeyMap({
			"Up": (cm) => {
				const { tipShow } = this.state;
				if (tipShow) {
					this.enterFuc("up");
				} else {
					cm.execCommand("goLineUp");
				}
			},
			"Down": (cm) => {
				const { tipShow } = this.state;
				if (tipShow) {
					this.enterFuc("down");
				} else {
					cm.execCommand("goLineDown");
				}
			},
			"Enter": (cm) => {
				const { tipShow } = this.state;
				if (tipShow) {
					this.enterFuc("enter");
				} else {
					cm.execCommand("newlineAndIndent");
				}
			}
		});
	}

	componentDidUpdate(prevProps) {
		const code = prevProps.defaultValue;
		const nextCode = this.props.defaultValue;
		if (code !== nextCode) {
			this.CodeMirrorEditor.setValue(nextCode);
		}
		const preHeight = prevProps.height;
		const nextHeight = this.props.height;
		if (preHeight !== nextHeight && nextHeight) {
			this.CodeMirrorEditor.setSize("auto", nextHeight);
		}
	}

	componentWillUnmount() {
		document.body.removeEventListener("click", this.listenner);
	}

	listenner = (e) => {
		const targetClassName = e.target.className;
		if (typeof (targetClassName) !== "string") return;
		const list = [
			"codemirror-tip-day",
			"codemirror-tip-night"
		];
		const returnFalse = list.find(item => targetClassName.includes(item));
		if (returnFalse) return false;
		const targetPath = e.path;
		let flag = false;
		targetPath.forEach(item => {
			if (item.className) {
				if (typeof (item.className) !== "string") return;
				if (item.className.includes("CodeMirror-line") ||
					item.className.includes("CodeMirror-linenumber")
				) {
					flag = true;
				}
			}
		});
		if (flag) {
			this.setState({ blurFlag: true });
		} else {
			this.setState({
				blurFlag: false,
				tipShow: false,
			});
		}
		if (targetClassName === "CodeMirror-scroll") {
			this.setState({ blurFlag: true });
		}
	}

	cursorActivity = (cm) => {
		const { readOnly, fieldList = [], methodList = [] } = this.props;
		if (readOnly) return;
		const getCursor = cm.getCursor();
		const pos = cm.cursorCoords(getCursor);
		const getLineInfo = cm.getLine(getCursor.line);
		const cursorBeforeOneChar = getLineInfo.substring(0, getCursor.ch);
		const lastIndex = cursorBeforeOneChar.lastIndexOf("@", getCursor.ch);
		const lastIndex2 = cursorBeforeOneChar.lastIndexOf("#", getCursor.ch);
		if (fieldList.length > 0 && lastIndex !== -1 && lastIndex > lastIndex2) { // 监测@
			const content = cursorBeforeOneChar.substring(lastIndex + 1, getCursor.ch);
			const { fieldList } = this.props;
			const findObj = fieldList.find(item => item.name.includes(content));
			if (findObj) {
				this.setState({
					posLeft: pos.left,
					posTop: pos.top + 20,
					tipShow: true,
					tipShowType: "@"
				});
				this.search(content, "@");
			} else {
				this.setState({
					tipShow: false,
					tipShowType: null
				});
			}
		}
		if (methodList.length > 0 && lastIndex2 !== -1 && lastIndex2 > lastIndex) { // 监测#
			const content = cursorBeforeOneChar.substring(lastIndex2 + 1, getCursor.ch);
			const { methodList } = this.props;
			const findObj = methodList.find(item => item.name.includes(content));
			if (findObj) {
				this.setState({
					posLeft: pos.left,
					posTop: pos.top + 20,
					tipShow: true,
					tipShowType: "#"
				});
				this.search(content, "#");
			} else {
				this.setState({
					tipShow: false,
					tipShowType: null
				});
			}
		}
		if (!cursorBeforeOneChar.includes("@") && !cursorBeforeOneChar.includes("#")) {
			this.setState({
				tipShow: false,
				tipShowType: null
			});
		}
	}

	search(val, type) {
		const { fieldList, methodList } = this.props;
		let list = [];
		const searchList = type === "@" ? fieldList : methodList;
		searchList.forEach((item) => {
			if (item.name.includes(val)) {
				list.push(item);
			}
		});
		this.setState({
			dropList: list
		});
		this.defaultFirst();
	}

	handleClick(item, type) {
		const getCursor = this.CodeMirrorEditor.getCursor();
		const getLineInfo = this.CodeMirrorEditor.getLine(getCursor.line);
		const cursorBeforeOneChar = getLineInfo.substring(0, getCursor.ch);
		const lastIndex = cursorBeforeOneChar.lastIndexOf(type, getCursor.ch);
		this.CodeMirrorEditor.setSelection(
			{ line: getCursor.line, ch: lastIndex + 1 },
			{ line: getCursor.line, ch: getCursor.ch },
		);
		let content = type === "@" ? item.name : item.value;
		this.CodeMirrorEditor.replaceSelection(content);
		this.CodeMirrorEditor.setCursor(getCursor.line, lastIndex + 1 + content.length);
		this.CodeMirrorEditor.focus();
		this.setState({
			tipShow: false,
			tipShowType: null
		});
	}

	enterFuc = (type) => {
		let findLi = "cm-field-li";
		let active = "cm-active";
		const nodeList = document.querySelectorAll(`.${findLi}`);
		const length = nodeList.length;
		let index = 0;
		for (let i = 0; i < length; i++) {
			if (nodeList[i].className.includes(active)) {
				index = i;
			}
		}
		if (type === "up") {
			nodeList[index].className = findLi;
			if (index === 0) {
				nodeList[index].className = `${active} ${findLi}`;
			} else {
				nodeList[index - 1].className = `${active} ${findLi}`;
			}
		} else if (type === "down") {
			nodeList[index].className = findLi;
			if (index === length - 1) {
				nodeList[index].className = `${active} ${findLi}`;
			} else {
				nodeList[index + 1].className = `${active} ${findLi}`;
			}
		} else if (type === "enter") {
			const node = document.querySelector(`.${active}`);
			const { tipShowType } = this.state;
			this.handleClick({
				name: node.innerText,
				value: node.attributes.data.value
			}, tipShowType);
			setTimeout(() => {
				this.setState({
					tipShow: false,
					tipShowType: null
				});
			}, 100);
		}
		document.querySelector(`.${active}`).scrollIntoViewIfNeeded();
	}

	defaultFirst = () => {
		let findLi = "cm-field-li";
		let active = "cm-active";
		const nodeList = document.querySelectorAll(`.${findLi}`);
		if (nodeList.length > 0) {
			for (let i = 0; i < nodeList.length; i++) {
				nodeList[i].className = findLi;
			}
			nodeList[0].className = `${active} ${findLi}`;
		}
	}

	render() {
		const { posLeft, posTop, tipShow, dropList } = this.state;
		const { theme } = this.props;

		return (
			<div className="m-codemirror">
				<textarea ref={this.ref}></textarea>
				{/* @弹框 */}
				<div
					className={`codemirror-tip-${theme}`}
					style={{
						left: `${posLeft}px`,
						top: `${posTop}px`,
						display: tipShow ? "inline-block" : "none"
					}}
				>
					<ul className="cm-field-ul">
						{
							dropList && dropList.length > 0 &&
							dropList.map((item, index) => {
								return (
									<li
										key={index}
										className={index === 0 ? "cm-active cm-field-li" : "cm-field-li"}
										data={item.value}
										onClick={() => {
											const { tipShowType } = this.state;
											this.handleClick(item, tipShowType);
										}}
									>
										{item.name}
									</li>
								);
							})
						}
					</ul>
				</div>
			</div>
		);
	}
}

