/*
 * @Author: liubo
 * @CreatDate: 2019-02-19 18:24:32
 * @Describe: 编辑器组件
 */

import { PureComponent } from "react";
import * as CodeMirror from "codemirror/lib/codemirror";
import "./defineScript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/3024-day.css";
import "codemirror/theme/3024-night.css";
import "./index.less";

export default class Codemirror extends PureComponent {

    state = {
    	posLeft: 0,
    	posTop: 0,
    	tipShow: false,
    	inputValue: "",
    	copyFieldList: [],
    	blurFlag: false
    };

    constructor(props) {
    	super(props);
    	const { fieldList } = props;
    	let codemirrorFieldList = [];
    	for (let i = 0; i < fieldList.length; i++) {
    		codemirrorFieldList.push(`@${fieldList[i].name}`);
    	}
    	localStorage.codemirrorFieldList = codemirrorFieldList;
    }

    componentDidMount() {
    	const { defaultCode, fieldList, id, readOnly, theme } = this.props;
    	this.setState({
    		copyFieldList: Object.assign([], fieldList)
    	});
    	let myTextarea = document.getElementById(id);
    	this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
    		mode: "defineScript",
    		theme: theme ? theme : "3024-day",
    		lineNumbers: true,
    		readOnly: readOnly ? "nocursor" : false
    	});
    	this.CodeMirrorEditor.setValue(defaultCode);
    	this.CodeMirrorEditor.on("cursorActivity", (cm) => {
    		this.cursorActivity(cm);
    	});
    	this.CodeMirrorEditor.on("changes", (cm) => {
    		if (this.props.onChange) {
    			this.props.onChange(cm.getValue());
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
    				this.enterFuc("up", "@");
    			} else {
    				cm.execCommand("goLineUp");
    			}
    		},
    		"Down": (cm) => {
    			const { tipShow } = this.state;
    			if (tipShow) {
    				this.enterFuc("down", "@");
    			} else {
    				cm.execCommand("goLineDown");
    			}
    		},
    		"Enter": (cm) => {
    			const { tipShow } = this.state;
    			if (tipShow) {
    				this.enterFuc("enter", "@");
    			} else {
    				cm.execCommand("newlineAndIndent");
    			}
    		}
    	});
    }

    componentDidUpdate(prevProps) {
    	const code = prevProps.defaultCode;
    	const nextCode = this.props.defaultCode;
    	if (code !== nextCode) {
    		this.CodeMirrorEditor.setValue(nextCode);
    	}
    }

    componentWillUnmount() {
    	document.body.removeEventListener("click", this.listenner);
    }

    listenner = (e) => {
    	const targetClassName = e.target.className;
    	if (typeof (targetClassName) !== "string") return;
    	const list = [
    		"codemirror-tag",
    		"codemirror-tipbox-search-input",
    		"codemirror-tipbox-search",
    		"codemirror-tipbox",
    		"codemirror-tipbox-nodata"
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
    			tipShow: false
    		});
    	}
    	if (targetClassName === "CodeMirror-scroll") {
    		this.setState({ blurFlag: true });
    	}
    }

    cursorActivity = (cm) => {
    	const { readOnly } = this.props;
    	if (readOnly) return;
    	const getCursor = cm.getCursor();
    	const pos = cm.cursorCoords(getCursor);
    	const getLineInfo = cm.getLine(getCursor.line);
    	const cursorBeforeOneChar = getLineInfo.substring(0, getCursor.ch);
    	if (cursorBeforeOneChar.includes("@")) {
    		const lastIndex = cursorBeforeOneChar.lastIndexOf("@", getCursor.ch);
    		const content = cursorBeforeOneChar.substring(lastIndex + 1, getCursor.ch);
    		const { fieldList } = this.props;
    		const findObj = fieldList.find(item => item.name.includes(content));
    		if (findObj) {
    			this.setState({
    				posLeft: pos.left,
    				posTop: pos.top + 20,
    				tipShow: true
    			});
    			const e = { target: { value: content } };
    			this.search(e);
    		} else {
    			this.setState({
    				tipShow: false
    			});
    		}
    	}
    	if (!cursorBeforeOneChar.includes("@") && !cursorBeforeOneChar.includes("#")) {
    		this.setState({
    			tipShow: false
    		});
    	}
    }

    search(e) {
    	const { fieldList } = this.props;
    	const inputValue = e.target.value;
    	let list = [];
    	fieldList.forEach((item) => {
    		if (item.name.includes(inputValue)) {
    			list.push(item);
    		}
    	});
    	this.setState({
    		copyFieldList: list
    	});
    	this.defaultFirst("@");
    }

    handleClick(item) {
    	const getCursor = this.CodeMirrorEditor.getCursor();
    	const getLineInfo = this.CodeMirrorEditor.getLine(getCursor.line);
    	const cursorBeforeOneChar = getLineInfo.substring(0, getCursor.ch);
    	const lastIndex = cursorBeforeOneChar.lastIndexOf("@", getCursor.ch);
    	this.CodeMirrorEditor.setSelection(
    		{ line: getCursor.line, ch: lastIndex + 1 },
    		{ line: getCursor.line, ch: getCursor.ch },
    	);
    	this.CodeMirrorEditor.replaceSelection(item.name);
    	this.CodeMirrorEditor.setCursor(getCursor.line, lastIndex + 1 + item.name.length);
    	this.CodeMirrorEditor.focus();
    	this.setState({
    		tipShow: false,
    		inputValue: ""
    	});
    }

    enterFuc = (type, status) => {
    	let findLi = "cm-field-li";
    	let active = "cm-active";
    	if (status === "#") {
    		findLi = "cm-func-li";
    		active = "cm-func-active";
    	}
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
    		this.handleClick({ name: node.innerText });
    		setTimeout(() => {
    			this.setState({
    				tipShow: false,
    				inputValue: ""
    			});
    		}, 100);
    	}
    	document.querySelector(`.${active}`).scrollIntoViewIfNeeded();
    }

    defaultFirst = (status) => {
    	let findLi = "cm-field-li";
    	let active = "cm-active";
    	if (status === "#") {
    		findLi = "cm-func-li";
    		active = "cm-func-active";
    	}
    	const nodeList = document.querySelectorAll(`.${findLi}`);
    	if (nodeList.length > 0) {
    		for (let i = 0; i < nodeList.length; i++) {
    			nodeList[i].className = findLi;
    		}
    		nodeList[0].className = `${active} ${findLi}`;
    	}
    }

    render() {
    	const { id, height } = this.props;
    	const { posLeft, posTop, tipShow, copyFieldList } = this.state;

    	return (
    		<div className="m-codemirror" style={height ? { height: height } : {}}>
    			<textarea id={id}></textarea>
    			{/* @弹框 */}
    			<div
    				className="codemirror-tipbox"
    				style={{
    					left: `${posLeft}px`,
    					top: `${posTop}px`,
    					display: tipShow ? "inline-block" : "none"
    				}}
    			>
    				<ul className="cm-field-ul">
    					{
    						copyFieldList && copyFieldList.length > 0 &&
                            copyFieldList.map((item, index) => {
                            	return (
                            		<li
                            			key={index}
                            			className={index === 0 ? "cm-active cm-field-li" : "cm-field-li"}
                            			onClick={() => this.handleClick(item)}
                            		>
                            			{item.name}
                            		</li>
                            	);
                            })
    					}
    				</ul>
    				{
    					!copyFieldList || copyFieldList.length === 0 &&
                        <div className="codemirror-tipbox-nodata">无数据</div>
    				}
    			</div>
    		</div>
    	);
    }
}

