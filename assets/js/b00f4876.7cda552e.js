(self.webpackChunkeasy_hooks=self.webpackChunkeasy_hooks||[]).push([[776],{5141:(t,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>o});var e=n(5571),u=n(757).A;const o=function(){return u(e.A,null,(function(){var t=n(1099).A;return u(t,null)}))}},1099:(t,r,n)=>{"use strict";n.d(r,{A:()=>c});var e=n(1493),u=n(8317),o=(n(6540),n(6995)),a=n.n(o),l=n(757).A;function c(){var t=(0,e.A)(0),r=t[0],n=t[1];t[2];return(0,u.A)((function(){setInterval((function(){n((function(t){return t+1}))}),1e3)})),l("div",{className:a().usageContainer},"state: ",r)}},1493:(t,r,n)=>{"use strict";n.d(r,{A:()=>o});var e=n(6222),u=n(6540);const o=function(t){var r=(0,e._)((0,u.useState)(t),2),n=r[0],o=r[1],a=(0,u.useRef)(t),l=(0,u.useCallback)((function(){return a.current}),[]);return[n,(0,u.useCallback)((function(t){if("function"==typeof t){var r=t(l());return a.current=r,void o(r)}var n=t;a.current=n,o(n)}),[]),l]}},8317:(t,r,n)=>{"use strict";n.d(r,{A:()=>u});var e=n(6540);const u=function(t){(0,e.useEffect)((function(){t&&t()}),[])}},5571:(t,r,n)=>{"use strict";n.d(r,{A:()=>a});n(6540);var e=n(8160),u=n(757).A,o=n(6540).Fragment;function a(t){var r=t.children,n=t.fallback;return(0,e.A)()?u(o,null,null==r?void 0:r()):null!=n?n:null}},6995:t=>{t.exports={}},6222:(t,r,n)=>{"use strict";function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function u(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,u,o=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(e=n.next()).done)&&(o.push(e.value),!r||o.length!==r);a=!0);}catch(c){l=!0,u=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw u}}return o}}(t,r)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(r,{_:()=>u})}}]);