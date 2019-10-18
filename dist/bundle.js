module.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("codemirror/lib/codemirror")},function(e,t){e.exports=require("codemirror/lib/codemirror.css")},function(e,t){e.exports=require("codemirror/theme/3024-day.css")},function(e,t){e.exports=require("codemirror/theme/material.css")},function(e,t,r){var o=r(6);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0};r(8)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".m-codemirror {\n  position: relative;\n  overflow: hidden;\n  border: #d7d7d7 solid 1px;\n}\n.m-codemirror .codemirror-tip-day,\n.m-codemirror .codemirror-tip-night {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 999;\n  background: #fff;\n  width: 200px;\n  box-shadow: rgba(119, 119, 119, 0.2) 0px 0px 7px, rgba(0, 0, 0, 0) 1px 1px 0px inset, rgba(0, 0, 0, 0) -1px -1px 0px inset;\n  font-size: 12px;\n}\n.m-codemirror .codemirror-tip-day ul,\n.m-codemirror .codemirror-tip-night ul {\n  margin: 0;\n  padding: 0;\n  max-height: 226px;\n  overflow: auto;\n}\n.m-codemirror .codemirror-tip-day ul li,\n.m-codemirror .codemirror-tip-night ul li {\n  list-style: none;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.m-codemirror .codemirror-tip-day ul li:hover,\n.m-codemirror .codemirror-tip-night ul li:hover {\n  background: #63acff;\n  color: #fff;\n}\n.m-codemirror .codemirror-tip-day ul .cm-active,\n.m-codemirror .codemirror-tip-night ul .cm-active {\n  background: #63acff;\n  color: #fff;\n}\n.m-codemirror .cm-s-3024-day span.cm-field-keyword {\n  color: #FF9800;\n}\n.m-codemirror .cm-s-3024-day span.cm-function-keyword {\n  color: #03A9F4;\n}\n.m-codemirror .cm-s-3024-day span.cm-nomal-keyword {\n  color: #F44336;\n  border-bottom: #F44336 1px dotted;\n}\n.m-codemirror .cm-s-3024-day span.cm-boolean-keyword {\n  color: #673AB7;\n}\n.m-codemirror .cm-s-3024-day span.cm-string {\n  color: #cdab53;\n}\n.m-codemirror .cm-s-3024-day span.cm-comment {\n  color: #9E9E9E;\n}\n.m-codemirror .cm-s-material span.cm-field-keyword {\n  color: #FF9800;\n}\n.m-codemirror .cm-s-material span.cm-function-keyword {\n  color: #03A9F4;\n}\n.m-codemirror .cm-s-material span.cm-nomal-keyword {\n  color: #F44336;\n  border-bottom: #F44336 1px dotted;\n}\n.m-codemirror .cm-s-material span.cm-boolean-keyword {\n  color: #7689f3;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var n=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[r].concat(i).concat([n]).join("\n")}var a;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<e.length;n++){var a=e[n];"number"==typeof a[0]&&o[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){var o,n,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=o.apply(this,arguments)),n}),c=function(e){var t={};return function(e){if(void 0===t[e]){var r=function(e){return document.querySelector(e)}.call(this,e);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),s=null,l=0,u=[],d=r(9);function f(e,t){for(var r=0;r<e.length;r++){var o=e[r],n=i[o.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](o.parts[a]);for(;a<o.parts.length;a++)n.parts.push(b(o.parts[a],t))}else{var c=[];for(a=0;a<o.parts.length;a++)c.push(b(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:c}}}}function p(e,t){for(var r=[],o={},n=0;n<e.length;n++){var i=e[n],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(c):r.push(o[a]={id:a,parts:[c]})}return r}function m(e,t){var r=c(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===e.insertAt)o?o.nextSibling?r.insertBefore(t,o.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),u.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=c(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,n)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function y(e){var t=document.createElement("style");return e.attrs.type="text/css",v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function b(e,t){var r,o,n,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=l++;r=s||(s=y(t)),o=w.bind(null,r,a,!1),n=w.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",v(t,e.attrs),m(e,t),t}(t),o=function(e,t,r){var o=r.css,n=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&n;(t.convertToAbsoluteUrls||i)&&(o=d(o));n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var a=new Blob([o],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,r,t),n=function(){h(r),r.href&&URL.revokeObjectURL(r.href)}):(r=y(t),o=function(e,t){var r=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),n=function(){h(r)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=p(e,t);return f(r,t),function(e){for(var o=[],n=0;n<r.length;n++){var a=r[n];(c=i[a.id]).refs--,o.push(c)}e&&f(p(e,t),t);for(n=0;n<o.length;n++){var c;if(0===(c=o[n]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var g,S=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function w(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=S(t,n);else{var i=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,o=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?e:(n=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(e,t,r){"use strict";r.r(t);var o,n=r(0),i=r.n(n),a=r(1);(o=a).defineMode("defineScript",function(){var e=[">=","<=","!=","=",">","<","+","-","*","/","(",")",";",",",":","{","}"];return{token:function(t){if(t.eatSpace())return null;if(t.match("//"))return t.skipToEnd(),"comment";for(var r=0;r<e.length;r++)if(t.match(e[r]))return"mark-keyword";if(t.match("true")||t.match("false"))return"boolean-keyword";if(t.match(/^[0-9\.+-]/,!1)){if(t.match(/^[+-]?0x[0-9a-fA-F]+/))return"number";if(t.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/))return"number";if(t.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))return"number"}if(t.match(/^"([^"]|(""))*"/))return"string";if(t.match(/^'([^']|(''))*'/))return"string";for(var o=localStorage.codemirrorFieldList?JSON.parse(localStorage.codemirrorFieldList):[],n=0;n<o.length;n++)if(t.match(o[n]))return"field-keyword";for(var i=localStorage.codemirrorMethodList?JSON.parse(localStorage.codemirrorMethodList):[],a=0;a<i.length;a++)if(t.match(i[a]))return"function-keyword";for(var c=localStorage.codemirrorNormalList?JSON.parse(localStorage.codemirrorNormalList):[],s=0;s<c.length;s++)if(t.match(c[s]))return"function-keyword";return t.next(),"nomal-keyword"}}}),o.defineMIME("text/x-defineScript","defineScript");r(2),r(3),r(4),r(5);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"default",function(){return p});var p=function(e){function t(e){var r,o,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,n=l(t).call(this,e),r=!n||"object"!==c(n)&&"function"!=typeof n?u(o):n,f(u(r),"state",{posLeft:0,posTop:0,tipShow:!1,tipShowType:null,dropList:[],blurFlag:!1,fieldList:[],methodList:[],normalList:[]}),f(u(r),"setLocalStorage",function(){var e=r.props,t=e.fieldList,o=void 0===t?[]:t,n=e.methodList,i=void 0===n?[]:n,a=e.normalList,c=void 0===a?[]:a;localStorage.codemirrorFieldList=r.getLoacalList(o,"@"),localStorage.codemirrorMethodList=r.getLoacalList(i,"#"),localStorage.codemirrorNormalList=r.getLoacalList(c,"")}),f(u(r),"getLoacalList",function(e,t){var o=Object.assign([],e);o.sort(function(e,t){return e.name.length>t.name.length?-1:e.name.length<t.name.length?1:0});for(var n=[],i=0;i<o.length;i++)n.push("".concat(t).concat(o[i].name));var a={};return"@"===t&&(a.fieldList=o),"#"===t&&(a.methodList=o),""===t&&(a.normalList=o),r.setState(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){f(e,t,r[t])})}return e}({},a)),JSON.stringify(n)}),f(u(r),"listenner",function(e){var t=e.target.className;if("string"==typeof t){if(["codemirror-tip-day","codemirror-tip-night"].find(function(e){return t.includes(e)}))return!1;var o=e.path,n=!1;o.forEach(function(e){if(e.className){if("string"!=typeof e.className)return;(e.className.includes("CodeMirror-line")||e.className.includes("CodeMirror-linenumber"))&&(n=!0)}}),n?r.setState({blurFlag:!0}):r.setState({blurFlag:!1,tipShow:!1}),"CodeMirror-scroll"===t&&r.setState({blurFlag:!0})}}),f(u(r),"cursorActivity",function(e){var t=r.props,o=t.readOnly,n=t.fieldList,i=void 0===n?[]:n,a=t.methodList,c=void 0===a?[]:a;if(!o){var s=e.getCursor(),l=e.cursorCoords(s),u=e.getLine(s.line).substring(0,s.ch),d=u.lastIndexOf("@",s.ch),f=u.lastIndexOf("#",s.ch);if(i.length>0&&-1!==d&&d>f){var p=u.substring(d+1,s.ch);r.props.fieldList.find(function(e){return e.name.includes(p)})?(r.setState({posLeft:l.left,posTop:l.top+20,tipShow:!0,tipShowType:"@"}),r.search(p,"@")):r.setState({tipShow:!1,tipShowType:null})}if(c.length>0&&-1!==f&&f>d){var m=u.substring(f+1,s.ch);r.props.methodList.find(function(e){return e.name.includes(m)})?(r.setState({posLeft:l.left,posTop:l.top+20,tipShow:!0,tipShowType:"#"}),r.search(m,"#")):r.setState({tipShow:!1,tipShowType:null})}u.includes("@")||u.includes("#")||r.setState({tipShow:!1,tipShowType:null})}}),f(u(r),"enterFuc",function(e){for(var t="cm-field-li",o="cm-active",n=document.querySelectorAll(".".concat(t)),i=n.length,a=0,c=0;c<i;c++)n[c].className.includes(o)&&(a=c);if("up"===e)n[a].className=t,0===a?n[a].className="".concat(o," ").concat(t):n[a-1].className="".concat(o," ").concat(t);else if("down"===e)n[a].className=t,a===i-1?n[a].className="".concat(o," ").concat(t):n[a+1].className="".concat(o," ").concat(t);else if("enter"===e){var s=document.querySelector(".".concat(o)),l=r.state.tipShowType;r.handleClick({name:s.innerText,value:s.attributes.data.value},l),setTimeout(function(){r.setState({tipShow:!1,tipShowType:null})},100)}document.querySelector(".".concat(o)).scrollIntoViewIfNeeded()}),f(u(r),"defaultFirst",function(){var e=document.querySelectorAll(".".concat("cm-field-li"));if(e.length>0){for(var t=0;t<e.length;t++)e[t].className="cm-field-li";e[0].className="".concat("cm-active"," ").concat("cm-field-li")}}),r.ref=i.a.createRef(),r}var r,o,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,n["PureComponent"]),r=t,(o=[{key:"componentDidMount",value:function(){var e,t=this,r=this.props,o=r.defaultValue,n=void 0===o?"":o,i=r.readOnly,c=void 0!==i&&i,s=r.theme,l=void 0===s?"night":s,u=r.lineNumber,d=void 0===u||u,f=r.height,p=void 0===f?300:f,m=this.ref.current;this.setLocalStorage(),"night"===l&&(e="material"),"day"===l&&(e="3024-day"),this.CodeMirrorEditor=a.fromTextArea(m,{mode:"defineScript",theme:e,lineNumbers:d,readOnly:!!c&&"nocursor"}),this.CodeMirrorEditor.setValue(n),this.CodeMirrorEditor.setSize("auto",p),this.CodeMirrorEditor.on("cursorActivity",function(e){t.cursorActivity(e)}),this.CodeMirrorEditor.on("changes",function(e){if(t.props.onChange){var r=t.state,o={fieldList:r.fieldList,methodList:r.methodList,normalList:r.normalList,errorMsg:document.body.querySelector(".cm-nomal-keyword")?"存在错误代码":null};t.props.onChange(e.getValue(),o)}}),this.CodeMirrorEditor.on("focus",function(e){t.cursorActivity(e),t.setState({blurFlag:!0})}),document.body.addEventListener("click",this.listenner),this.CodeMirrorEditor.addKeyMap({Up:function(e){t.state.tipShow?t.enterFuc("up"):e.execCommand("goLineUp")},Down:function(e){t.state.tipShow?t.enterFuc("down"):e.execCommand("goLineDown")},Enter:function(e){t.state.tipShow?t.enterFuc("enter"):e.execCommand("newlineAndIndent")}})}},{key:"componentDidUpdate",value:function(e){var t=e.defaultValue,r=this.props.defaultValue;t!==r&&this.CodeMirrorEditor.setValue(r);var o=e.height,n=this.props.height;o!==n&&n&&this.CodeMirrorEditor.setSize("auto",n)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.listenner)}},{key:"search",value:function(e,t){var r=this.props,o=r.fieldList,n=r.methodList,i=[];("@"===t?o:n).forEach(function(t){t.name.includes(e)&&i.push(t)}),this.setState({dropList:i}),this.defaultFirst()}},{key:"handleClick",value:function(e,t){var r=this.CodeMirrorEditor.getCursor(),o=this.CodeMirrorEditor.getLine(r.line).substring(0,r.ch).lastIndexOf(t,r.ch);this.CodeMirrorEditor.setSelection({line:r.line,ch:o+1},{line:r.line,ch:r.ch});var n="@"===t?e.name:e.value;this.CodeMirrorEditor.replaceSelection(n),this.CodeMirrorEditor.setCursor(r.line,o+1+n.length),this.CodeMirrorEditor.focus(),this.setState({tipShow:!1,tipShowType:null})}},{key:"render",value:function(){var e=this,t=this.state,r=t.posLeft,o=t.posTop,n=t.tipShow,a=t.dropList,c=this.props.theme;return i.a.createElement("div",{className:"m-codemirror"},i.a.createElement("textarea",{ref:this.ref}),i.a.createElement("div",{className:"codemirror-tip-".concat(c),style:{left:"".concat(r,"px"),top:"".concat(o,"px"),display:n?"inline-block":"none"}},i.a.createElement("ul",{className:"cm-field-ul"},a&&a.length>0&&a.map(function(t,r){return i.a.createElement("li",{key:r,className:0===r?"cm-active cm-field-li":"cm-field-li",data:t.value,onClick:function(){var r=e.state.tipShowType;e.handleClick(t,r)}},t.name)}))))}}])&&s(r.prototype,o),p&&s(r,p),t}()}]);