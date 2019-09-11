/*
 * @Author: liubo
 * @CreatDate: 2019-02-25 10:59:46
 * @Describe: 自定义codemirror mode
 */

import * as CodeMirror from "codemirror/lib/codemirror";

(function(mod) {
	mod(CodeMirror);
})(function(CodeMirror) {
	"use strict";

	CodeMirror.defineMode("defineScript", function() {

		const markList = [">=", "<=", "!=", "=", ">", "<", "+", "-", "*", "/",
			"(", ")", ";", ",", ":", "{", "}"];

		return {
			token: function(stream) {
				// 空白空间
				if (stream.eatSpace()) return null;

				// 处理单行注释
				if (stream.match("//")) {
					stream.skipToEnd(); // "//"后面全部包进comment
					return "comment";
				}

				// 处理符号
				for (let i = 0; i < markList.length; i++) {
					if (stream.match(markList[i])) {
						return "mark-keyword";
					}
				}

				// 处理布尔 true，false
				if (stream.match("true") || stream.match("false")) return "boolean-keyword";

				// 处理数字文本
				if (stream.match(/^[0-9\.+-]/, false)) {
					if (stream.match(/^[+-]?0x[0-9a-fA-F]+/)) { return "number"; }
					if (stream.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/)) { return "number"; }
					if (stream.match(/^[+-]?\d+([EeDd][+-]?\d+)?/)) { return "number"; }
				}

				// 处理string
				if (stream.match(/^"([^"]|(""))*"/)) { return "string"; }
				if (stream.match(/^'([^']|(''))*'/)) { return "string"; }

				// 处理@相关内容
				const fieldKeywordArray = localStorage.codemirrorFieldList
					? localStorage.codemirrorFieldList.split(",") : [];
				for (let i = 0; i < fieldKeywordArray.length; i++) {
					if (stream.match(fieldKeywordArray[i])) {
						return "field-keyword";
					}
				}
				if (stream.match("@")) { return "field-keyword"; }

				// 处理未检测到的项目
				stream.next();
				return "nomal-keyword";
			}
		};
	});

	CodeMirror.defineMIME("text/x-defineScript", "defineScript");

});
