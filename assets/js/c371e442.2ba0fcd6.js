(self.webpackChunkeasy_hooks=self.webpackChunkeasy_hooks||[]).push([[204],{9050:(n,e,t)=>{"use strict";t.d(e,{A:()=>m});var o=t(6540);const s=function(n){(0,o.useEffect)((function(){return function(){n&&n()}}),[])};var u=t(7788),r=t.n(u),i=t(757).A;function a(n){var e=n.setText;return s((function(){e("\u7ec4\u4ef61\u88ab\u5378\u8f7d\u4e86")})),i("div",null,"\u6211\u662f\u7ec4\u4ef61")}function c(n){var e=n.setText;return s((function(){e("\u7ec4\u4ef62\u88ab\u5378\u8f7d\u4e86")})),i("div",null,"\u6211\u662f\u7ec4\u4ef62")}function m(){var n=(0,o.useState)(""),e=n[0],t=n[1],u=(0,o.useState)(!0),m=u[0],l=u[1],d=(0,o.useState)(!0),f=d[0],x=d[1];return s((function(){})),i("div",{className:r().usageContainer},m&&i(a,{setText:t}),i("button",{onClick:function(){l(!1)}},"\u70b9\u51fb\u5378\u8f7d\u7ec4\u4ef61"),i("br",null),f&&i(c,{setText:t}),i("button",{onClick:function(){x(!1)}},"\u70b9\u51fb\u5378\u8f7d\u7ec4\u4ef62"),i("br",null),i("br",null),"\u8c01\u88ab\u5378\u8f7d\u4e86:",e)}},6264:(n,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>f,contentTitle:()=>l,default:()=>b,frontMatter:()=>m,metadata:()=>d,toc:()=>x});var o,s=t(8168),u=t(8587),r=(t(6540),t(7986)),i=t(5571),a=t(2879),c=["components"],m={title:"useUnmount",sidebar_label:"useUnmount"},l=void 0,d={unversionedId:"useUnmount/index",id:"useUnmount/index",title:"useUnmount",description:"useUnmount \u7ec4\u4ef6\u5373\u5c06\u5378\u8f7d\u524d\u94a9\u5b50",source:"@site/docs/useUnmount/index.md",sourceDirName:"useUnmount",slug:"/useUnmount/",permalink:"/useUnmount/",draft:!1,tags:[],version:"current",frontMatter:{title:"useUnmount",sidebar_label:"useUnmount"},sidebar:"defaultSidebar",previous:{title:"usePageVisibility",permalink:"/usePageVisibility/"}},f={},x=[],p=(o="IcePkgDemo_docs_useUnmount_index_0",{toc:x}),T="wrapper";function b(n){var e=n.components,o=(0,u.A)(n,c);return(0,r.yg)(T,(0,s.A)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"useUnmount \u7ec4\u4ef6\u5373\u5c06\u5378\u8f7d\u524d\u94a9\u5b50"),(0,r.yg)(a.A,{code:'import { useUnmount } from \'easy-hooks\';\nimport { useState } from "react";\nimport styles from \'./index.module.less\';\n\nfunction One({setText}) {\n    useUnmount(()=>{\n        setText("\u7ec4\u4ef61\u88ab\u5378\u8f7d\u4e86");\n    })\n  return (\n    <div>\n      \u6211\u662f\u7ec4\u4ef61\n    </div>\n  )\n}\n\n\nfunction Two({setText}) {\n    useUnmount(()=>{\n        setText("\u7ec4\u4ef62\u88ab\u5378\u8f7d\u4e86");\n    })\n\n  return (\n    <div>\n      \u6211\u662f\u7ec4\u4ef62\n    </div>\n  )\n}\n\n\n\nexport default function App () {\n    const  [text, setText]  = useState("");\n    const  [showOne, setShowOne]  = useState(true);\n    const  [showTwo, setShowTwo]  = useState(true);\n    useUnmount(()=>{\n        \n    })\n\n  return (\n    <div className={styles.usageContainer}>\n      {showOne&&<One setText={setText}/>}<button onClick={()=>{setShowOne(false)}}>\u70b9\u51fb\u5378\u8f7d\u7ec4\u4ef61</button><br/>\n      {showTwo&&<Two setText={setText}/>}<button onClick={()=>{setShowTwo(false)}}>\u70b9\u51fb\u5378\u8f7d\u7ec4\u4ef62</button><br/>\n      <br/>\n      \u8c01\u88ab\u5378\u8f7d\u4e86:{text}\n    </div>\n  )\n}',mobilePreview:!1,url:"/demos/IcePkgDemo_docs_useUnmount_index_0/?",mdxType:"Previewer"},(0,r.yg)(i.A,{mdxType:"BrowserOnly"},(function(){var n=t(9050).A;return(0,r.yg)(n,{mdxType:"IcePkgDemo_docs_useUnmount_index_0"})}))))}b.isMDXComponent=!0},7788:n=>{n.exports={}}}]);