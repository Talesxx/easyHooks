(self.webpackChunkeasy_hooks=self.webpackChunkeasy_hooks||[]).push([[342],{7986:(e,t,n)=>{"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(n(6540));function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.default.createContext({}),p=function(e){var t=o.default.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.default.createElement(o.default.Fragment,{},t)}},f=o.default.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?o.default.createElement(m,l(l({ref:t},s),{},{components:n})):o.default.createElement(m,l({ref:t},s))}));f.displayName="MDXCreateElement",t.xA=function(e){var t=p(e.components);return o.default.createElement(u.Provider,{value:t},e.children)},t.yg=function(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return o.default.createElement.apply(null,c)}return o.default.createElement.apply(null,n)}},6345:(e,t,n)=>{"use strict";n.d(t,{A:()=>fe});var r=n(8168),o=n(8587),a=n(6540),c=n(8160),s=n(53),l=n(2612),i=n(9131);function u(){var e=(0,i.p)().prism,t=(0,l.G)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var p=n(4476),d=n(8634),f=n(8426),m=n.n(f),y=(0,d.A)(/title=(["'])(.*?)\1/,{quote:1,title:2}),g=(0,d.A)(/\{([\d,-]+)\}/,{range:1}),v={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function h(e,t){var n=e.map((function(e){var n=v[e],r=n.start,o=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function b(e,t){var n=e.replace(/\n$/,""),r=t.language,o=t.magicComments,a=t.metastring;if(a&&g.test(a)){var c=a.match(g).groups.range;if(0===o.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var s=o[0].className,l=m()(c).filter((function(e){return e>0})).map((function(e){return[e-1,[s]]}));return{lineClassNames:Object.fromEntries(l),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return h(["js","jsBlock"],t);case"jsx":case"tsx":return h(["js","jsBlock","jsx"],t);case"html":return h(["js","jsBlock","html"],t);case"python":case"py":case"bash":return h(["bash"],t);case"markdown":case"md":return h(["html","jsx","bash"],t);default:return h(Object.keys(v),t)}}(r,o),u=n.split("\n"),p=Object.fromEntries(o.map((function(e){return[e.className,{start:0,range:""}]}))),d=Object.fromEntries(o.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),f=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),y=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),b=0;b<u.length;){var k=u[b].match(i);if(k){var N=k.slice(1).find((function(e){return void 0!==e}));d[N]?p[d[N]].range+=b+",":f[N]?p[f[N]].start=b:y[N]&&(p[y[N]].range+=p[y[N]].start+"-"+(b-1)+","),u.splice(b,1)}else b+=1}n=u.join("\n");var B={};return Object.entries(p).forEach((function(e){var t=e[0],n=e[1].range;m()(n).forEach((function(e){null!=B[e]||(B[e]=[]),B[e].push(t)}))})),{lineClassNames:B,code:n}}var k=n(9915),N=n.n(k),B=n(757).A,w=["as"];function j(e){var t=e.as,n=(0,o.A)(e,w),a=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],o=e[1],a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(u());return B(t,(0,r.A)({},n,{style:a,className:(0,s.A)(n.className,N().codeBlockContainer,p.G.common.codeBlock)}))}var A=n(4601),C=n.n(A),O=n(757).A;function E(e){var t=e.children,n=e.className;return O(j,{as:"pre",tabIndex:0,className:(0,s.A)(C().codeBlockStandalone,"thin-scrollbar",n)},O("code",{className:C().codeBlockLines},t))}var L=n(6729),T={attributes:!0,characterData:!0,childList:!0,subtree:!0};function x(e,t){var n=(0,a.useState)(),r=n[0],o=n[1],c=(0,a.useCallback)((function(){var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,a.useEffect)((function(){c()}),[c]),function(e,t,n){void 0===n&&(n=T);var r=(0,L._q)(t),o=(0,L.Be)(n);(0,a.useEffect)((function(){var t=new MutationObserver(r);return e&&t.observe(e,o),function(){return t.disconnect()}}),[e,r,o])}(r,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const P={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var S={Prism:n(1258).A,theme:P};function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}var D=/\r\n|\r|\n/,M=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},W=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function H(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var z=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),_(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=I({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=I({},n,{backgroundColor:null}),o}(e.theme,e.language):void 0;return t.themeDict=n})),_(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=I({},H(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?I({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),_(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(s))}})),_(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=I({},H(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?I({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),_(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,s=[],l=[s];c>-1;){for(;(a=r[c]++)<o[c];){var i=void 0,u=t[c],p=n[c][a];if("string"==typeof p?(u=c>0?u:["plain"],i=p):(u=W(u,p.type),p.alias&&(u=W(u,p.alias)),i=p.content),"string"==typeof i){var d=i.split(D),f=d.length;s.push({types:u,content:d[0]});for(var m=1;m<f;m++)M(s),l.push(s=[]),s.push({types:u,content:d[m]})}else c++,t.push(u),n.push(i),r.push(0),o.push(i.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return M(s),l}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const R=z;var V=n(112),q=n.n(V),F=n(757).A,G=n(6540).Fragment;function $(e){var t=e.line,n=e.classNames,o=e.showLineNumbers,a=e.getLineProps,c=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var l=a({line:t,className:(0,s.A)(n,o&&q().codeLine)}),i=t.map((function(e,t){return F("span",(0,r.A)({key:t},c({token:e,key:t})))}));return F("span",l,o?F(G,null,F("span",{className:q().codeLineNumber}),F("span",{className:q().codeLineContent},i)):i,F("br",null))}var X=n(6861),Z=n(3693),J=n(757).A;function K(e){return J("svg",(0,r.A)({viewBox:"0 0 24 24"},e),J("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}var Q=n(757).A;function U(e){return Q("svg",(0,r.A)({viewBox:"0 0 24 24"},e),Q("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}var Y=n(4829),ee=n.n(Y),te=n(757).A;function ne(e){var t=e.code,n=e.className,r=(0,a.useState)(!1),o=r[0],c=r[1],l=(0,a.useRef)(void 0),i=(0,a.useCallback)((function(){(0,X.A)(t),c(!0),l.current=window.setTimeout((function(){c(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),te("button",{type:"button","aria-label":o?(0,Z.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,Z.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,Z.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.A)("clean-btn",n,ee().copyButton,o&&ee().copyButtonCopied),onClick:i},te("span",{className:ee().copyButtonIcons,"aria-hidden":"true"},te(K,{className:ee().copyButtonIcon}),te(U,{className:ee().copyButtonSuccessIcon})))}var re=n(757).A;function oe(e){return re("svg",(0,r.A)({viewBox:"0 0 24 24"},e),re("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}var ae=n(6798),ce=n.n(ae),se=n(757).A;function le(e){var t=e.className,n=e.onClick,r=e.isEnabled,o=(0,Z.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return se("button",{type:"button",onClick:n,className:(0,s.A)("clean-btn",t,r&&ce().wordWrapButtonEnabled),"aria-label":o,title:o},se(oe,{className:ce().wordWrapButtonIcon,"aria-hidden":"true"}))}var ie=n(757).A;function ue(e){var t,n,o,c,l,p,d,f,m,g,v,h=e.children,k=e.className,N=void 0===k?"":k,B=e.metastring,w=e.title,A=e.showLineNumbers,O=e.language,E=(0,i.p)().prism,L=E.defaultLanguage,T=E.magicComments,P=null!=(t=null!=O?O:null==(n=N.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:L,_=u(),I=(o=(0,a.useState)(!1),c=o[0],l=o[1],p=(0,a.useState)(!1),d=p[0],f=p[1],m=(0,a.useRef)(null),g=(0,a.useCallback)((function(){var e=m.current.querySelector("code");c?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),l((function(e){return!e}))}),[m,c]),v=(0,a.useCallback)((function(){var e=m.current,t=e.scrollWidth>e.clientWidth||m.current.querySelector("code").hasAttribute("style");f(t)}),[m]),x(m,v),(0,a.useEffect)((function(){v()}),[c,v]),(0,a.useEffect)((function(){return window.addEventListener("resize",v,{passive:!0}),function(){window.removeEventListener("resize",v)}}),[v]),{codeBlockRef:m,isEnabled:c,isCodeScrollable:d,toggle:g}),D=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(y))?void 0:n.groups.title)?t:""}(B)||w,M=b(h,{metastring:B,language:P,magicComments:T}),W=M.lineClassNames,H=M.code,z=null!=A?A:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(B);return ie(j,{as:"div",className:(0,s.A)(N,P&&!N.includes("language-"+P)&&"language-"+P)},D&&ie("div",{className:C().codeBlockTitle},D),ie("div",{className:C().codeBlockContent},ie(R,(0,r.A)({},S,{theme:_,code:H,language:null!=P?P:"text"}),(function(e){var t=e.className,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return ie("pre",{tabIndex:0,ref:I.codeBlockRef,className:(0,s.A)(t,C().codeBlock,"thin-scrollbar")},ie("code",{className:(0,s.A)(C().codeBlockLines,z&&C().codeBlockLinesWithNumbering)},n.map((function(e,t){return ie($,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:W[t],showLineNumbers:z})}))))})),ie("div",{className:C().buttonGroup},(I.isEnabled||I.isCodeScrollable)&&ie(le,{className:C().codeButton,onClick:function(){return I.toggle()},isEnabled:I.isEnabled}),ie(ne,{className:C().codeButton,code:H}))))}var pe=n(757).A,de=["children"];function fe(e){var t=e.children,n=(0,o.A)(e,de),s=(0,c.A)(),l=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t);return pe("string"==typeof l?ue:E,(0,r.A)({key:String(s)},n),l)}},9915:e=>{e.exports={codeBlockContainer:"codeBlockContainer_H2zk"}},4601:e=>{e.exports={codeBlockContent:"codeBlockContent_oNtV",codeBlockTitle:"codeBlockTitle_B9p4",codeBlock:"codeBlock_MIek",codeBlockStandalone:"codeBlockStandalone_X0_h",codeBlockLines:"codeBlockLines_NS3T",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_qn4M",buttonGroup:"buttonGroup_IyrI"}},4829:e=>{e.exports={copyButtonCopied:"copyButtonCopied_rh45",copyButtonIcons:"copyButtonIcons_fMTT",copyButtonIcon:"copyButtonIcon_H7Hs",copyButtonSuccessIcon:"copyButtonSuccessIcon_dV31"}},112:e=>{e.exports={codeLine:"codeLine_AmuD",codeLineNumber:"codeLineNumber_MujM",codeLineContent:"codeLineContent_v1uP"}},6798:e=>{e.exports={wordWrapButtonIcon:"wordWrapButtonIcon_ulXa",wordWrapButtonEnabled:"wordWrapButtonEnabled_v8fA"}},8426:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},6861:(e,t,n)=>{"use strict";function r(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var c=document.getSelection(),s=c.rangeCount>0&&c.getRangeAt(0);r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var l=!1;try{l=document.execCommand("copy")}catch(i){}return o.remove(),s&&(c.removeAllRanges(),c.addRange(s)),a&&a.focus(),l}n.d(t,{A:()=>r})}}]);