module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("codemirror/lib/codemirror")},function(e,t){e.exports=require("codemirror/lib/codemirror.css")},function(e,t){e.exports=require("codemirror/theme/3024-day.css")},function(e,t){e.exports=require("codemirror/theme/3024-night.css")},function(e,t,r){var n=r(6);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0};r(8)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".m-codemirror {\n  position: relative;\n  overflow: hidden;\n  border: #d7d7d7 solid 1px;\n}\n.m-codemirror .codemirror-tipbox {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 999;\n  background: #fff;\n  width: 200px;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  border: 1px solid #ccc;\n  font-size: 12px;\n  padding: 2px 0;\n}\n.m-codemirror .codemirror-tipbox .codemirror-tipbox-search {\n  padding: 0 10px;\n  border-bottom: dashed #ccc 1px;\n}\n.m-codemirror .codemirror-tipbox .codemirror-tipbox-search input {\n  width: 100%;\n  outline: none;\n  border: none;\n  height: 28px;\n}\n.m-codemirror .codemirror-tipbox .codemirror-tipbox-nodata {\n  text-align: center;\n  height: 30px;\n  line-height: 30px;\n  color: #ccc;\n}\n.m-codemirror .codemirror-tipbox ul {\n  margin: 0;\n  padding: 0;\n  max-height: 226px;\n  overflow: auto;\n}\n.m-codemirror .codemirror-tipbox ul li {\n  list-style: none;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.m-codemirror .codemirror-tipbox ul li:hover {\n  background: #eee;\n}\n.m-codemirror .codemirror-tipbox ul .cm-active {\n  background: #eee;\n}\n.m-codemirror .codemirror-tipbox ul .cm-func-active {\n  background: #eee;\n}\n.m-codemirror .cm-s-3024-day span.cm-field-keyword,\n.m-codemirror .cm-s-3024-night span.cm-field-keyword {\n  color: #FF9800;\n}\n.m-codemirror .cm-s-3024-day span.cm-nomal-keyword,\n.m-codemirror .cm-s-3024-night span.cm-nomal-keyword {\n  color: #F44336;\n  border-bottom: #F44336 1px dotted;\n}\n.m-codemirror .cm-s-3024-day span.cm-boolean-keyword,\n.m-codemirror .cm-s-3024-night span.cm-boolean-keyword {\n  color: #673AB7;\n}\n.m-codemirror .ant-tag {\n  margin: 3px 8px 3px 0;\n}\n.ant-popover-arrow {\n  background-color: #fff;\n}\n.ant-popover-inner-content .codemirror-tip {\n  max-width: 200px;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(c=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(i).concat([o]).join("\n")}var c;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var c=e[o];"number"==typeof c[0]&&n[c[0]]||(r&&!c[2]?c[2]=r:r&&(c[2]="("+c[2]+") and ("+r+")"),t.push(c))}},t}},function(e,t,r){var n,o,i={},c=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),a=function(e){var t={};return function(e){if(void 0===t[e]){var r=function(e){return document.querySelector(e)}.call(this,e);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),s=null,u=0,l=[],d=r(9);function f(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=i[n.id];if(o){o.refs++;for(var c=0;c<o.parts.length;c++)o.parts[c](n.parts[c]);for(;c<n.parts.length;c++)o.parts.push(y(n.parts[c],t))}else{var a=[];for(c=0;c<n.parts.length;c++)a.push(y(n.parts[c],t));i[n.id]={id:n.id,refs:1,parts:a}}}}function p(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[c]?n[c].parts.push(a):r.push(n[c]={id:c,parts:[a]})}return r}function m(e,t){var r=a(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),l.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function b(e){var t=document.createElement("style");return e.attrs.type="text/css",v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function y(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=u++;r=s||(s=b(t)),n=w.bind(null,r,c,!1),o=w.bind(null,r,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",v(t,e.attrs),m(e,t),t}(t),n=function(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=d(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var c=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(c),a&&URL.revokeObjectURL(a)}.bind(null,r,t),o=function(){h(r),r.href&&URL.revokeObjectURL(r.href)}):(r=b(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){h(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=c()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=p(e,t);return f(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var c=r[o];(a=i[c.id]).refs--,n.push(a)}e&&f(p(e,t),t);for(o=0;o<n.length;o++){var a;if(0===(a=n[o]).refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete i[a.id]}}}};var g,x=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function w(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,r){"use strict";r.r(t);var n,o=r(0),i=r.n(o),c=r(1);(n=c).defineMode("defineScript",function(){var e=[">=","<=","!=","=",">","<","+","-","*","/","(",")",";",",",":","{","}"];return{token:function(t){if(t.eatSpace())return null;if(t.match("//"))return t.skipToEnd(),"comment";for(var r=0;r<e.length;r++)if(t.match(e[r]))return"mark-keyword";if(t.match("true")||t.match("false"))return"boolean-keyword";if(t.match(/^[0-9\.+-]/,!1)){if(t.match(/^[+-]?0x[0-9a-fA-F]+/))return"number";if(t.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/))return"number";if(t.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))return"number"}if(t.match(/^"([^"]|(""))*"/))return"string";if(t.match(/^'([^']|(''))*'/))return"string";for(var n=localStorage.codemirrorFieldList?localStorage.codemirrorFieldList.split(","):[],o=0;o<n.length;o++)if(t.match(n[o]))return"field-keyword";return t.match("@")?"field-keyword":(t.next(),"nomal-keyword")}}}),n.defineMIME("text/x-defineScript","defineScript");r(2),r(3),r(4),r(5);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"default",function(){return p});var p=function(e){function t(e){var r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=u(t).call(this,e),r=!o||"object"!==a(o)&&"function"!=typeof o?l(n):o,f(l(r),"state",{posLeft:0,posTop:0,tipShow:!1,inputValue:"",copyFieldList:[],blurFlag:!1}),f(l(r),"listenner",function(e){var t=e.target.className;if("string"==typeof t){if(["codemirror-tag","codemirror-tipbox-search-input","codemirror-tipbox-search","codemirror-tipbox","codemirror-tipbox-nodata"].find(function(e){return t.includes(e)}))return!1;var n=e.path,o=!1;n.forEach(function(e){if(e.className){if("string"!=typeof e.className)return;(e.className.includes("CodeMirror-line")||e.className.includes("CodeMirror-linenumber"))&&(o=!0)}}),o?r.setState({blurFlag:!0}):r.setState({blurFlag:!1,tipShow:!1}),"CodeMirror-scroll"===t&&r.setState({blurFlag:!0})}}),f(l(r),"cursorActivity",function(e){if(!r.props.readOnly){var t=e.getCursor(),n=e.cursorCoords(t),o=e.getLine(t.line).substring(0,t.ch);if(o.includes("@")){var i=o.lastIndexOf("@",t.ch),c=o.substring(i+1,t.ch);if(r.props.fieldList.find(function(e){return e.name.includes(c)})){r.setState({posLeft:n.left,posTop:n.top+20,tipShow:!0});var a={target:{value:c}};r.search(a)}else r.setState({tipShow:!1})}o.includes("@")||o.includes("#")||r.setState({tipShow:!1})}}),f(l(r),"enterFuc",function(e,t){var n="cm-field-li",o="cm-active";"#"===t&&(n="cm-func-li",o="cm-func-active");for(var i=document.querySelectorAll(".".concat(n)),c=i.length,a=0,s=0;s<c;s++)i[s].className.includes(o)&&(a=s);if("up"===e)i[a].className=n,0===a?i[a].className="".concat(o," ").concat(n):i[a-1].className="".concat(o," ").concat(n);else if("down"===e)i[a].className=n,a===c-1?i[a].className="".concat(o," ").concat(n):i[a+1].className="".concat(o," ").concat(n);else if("enter"===e){var u=document.querySelector(".".concat(o));r.handleClick({name:u.innerText}),setTimeout(function(){r.setState({tipShow:!1,inputValue:""})},100)}document.querySelector(".".concat(o)).scrollIntoViewIfNeeded()}),f(l(r),"defaultFirst",function(e){var t="cm-field-li",r="cm-active";"#"===e&&(t="cm-func-li",r="cm-func-active");var n=document.querySelectorAll(".".concat(t));if(n.length>0){for(var o=0;o<n.length;o++)n[o].className=t;n[0].className="".concat(r," ").concat(t)}});for(var i=e.fieldList,c=[],s=0;s<i.length;s++)c.push("@".concat(i[s].name));return localStorage.codemirrorFieldList=c,r}var r,n,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o["PureComponent"]),r=t,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props,r=t.defaultCode,n=t.fieldList,o=t.id,i=t.readOnly,a=t.theme;this.setState({copyFieldList:Object.assign([],n)});var s=document.getElementById(o);this.CodeMirrorEditor=c.fromTextArea(s,{mode:"defineScript",theme:a||"3024-day",lineNumbers:!0,readOnly:!!i&&"nocursor"}),this.CodeMirrorEditor.setValue(r),this.CodeMirrorEditor.on("cursorActivity",function(t){e.cursorActivity(t)}),this.CodeMirrorEditor.on("changes",function(t){e.props.onChange&&e.props.onChange(t.getValue())}),this.CodeMirrorEditor.on("focus",function(t){e.cursorActivity(t),e.setState({blurFlag:!0})}),document.body.addEventListener("click",this.listenner),this.CodeMirrorEditor.addKeyMap({Up:function(t){e.state.tipShow?e.enterFuc("up","@"):t.execCommand("goLineUp")},Down:function(t){e.state.tipShow?e.enterFuc("down","@"):t.execCommand("goLineDown")},Enter:function(t){e.state.tipShow?e.enterFuc("enter","@"):t.execCommand("newlineAndIndent")}})}},{key:"componentDidUpdate",value:function(e){var t=e.defaultCode,r=this.props.defaultCode;t!==r&&this.CodeMirrorEditor.setValue(r)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.listenner)}},{key:"search",value:function(e){var t=this.props.fieldList,r=e.target.value,n=[];t.forEach(function(e){e.name.includes(r)&&n.push(e)}),this.setState({copyFieldList:n}),this.defaultFirst("@")}},{key:"handleClick",value:function(e){var t=this.CodeMirrorEditor.getCursor(),r=this.CodeMirrorEditor.getLine(t.line).substring(0,t.ch).lastIndexOf("@",t.ch);this.CodeMirrorEditor.setSelection({line:t.line,ch:r+1},{line:t.line,ch:t.ch}),this.CodeMirrorEditor.replaceSelection(e.name),this.CodeMirrorEditor.setCursor(t.line,r+1+e.name.length),this.CodeMirrorEditor.focus(),this.setState({tipShow:!1,inputValue:""})}},{key:"render",value:function(){var e=this,t=this.props,r=t.id,n=t.height,o=this.state,c=o.posLeft,a=o.posTop,s=o.tipShow,u=o.copyFieldList;return i.a.createElement("div",{className:"m-codemirror",style:n?{height:n}:{}},i.a.createElement("textarea",{id:r}),i.a.createElement("div",{className:"codemirror-tipbox",style:{left:"".concat(c,"px"),top:"".concat(a,"px"),display:s?"inline-block":"none"}},i.a.createElement("ul",{className:"cm-field-ul"},u&&u.length>0&&u.map(function(t,r){return i.a.createElement("li",{key:r,className:0===r?"cm-active cm-field-li":"cm-field-li",onClick:function(){return e.handleClick(t)}},t.name)})),!u||0===u.length&&i.a.createElement("div",{className:"codemirror-tipbox-nodata"},"无数据")))}}])&&s(r.prototype,n),p&&s(r,p),t}()}]);