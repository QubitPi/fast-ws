"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7228],{4723:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var a=r(8040),i=r(5246);const n={slug:"provider",title:"Provider v.s. @Provider",authors:"jiaqi",tags:["Java"]},o=void 0,s={permalink:"/blog/provider",editUrl:"https://github.com/QubitPi/fast-ws/tree/master/docs/blog/2022-09-24-provider.md",source:"@site/blog/2022-09-24-provider.md",title:"Provider v.s. @Provider",description:"[//]: # (Copyright 2025 Jiaqi Liu. All rights reserved.)",date:"2022-09-24T00:00:00.000Z",formattedDate:"September 24, 2022",tags:[{label:"Java",permalink:"/blog/tags/java"}],readingTime:1.045,hasTruncateMarker:!0,authors:[{name:"Jack",title:"Maintainer of FastWS",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"provider",title:"Provider v.s. @Provider",authors:"jiaqi",tags:["Java"]},unlisted:!1,prevItem:{title:"(RestAssured) Match JSON Ignoring Order",permalink:"/blog/restassured-json"},nextItem:{title:"Bearer Authentication",permalink:"/blog/bearer-authentication"}},c={authorsImageUrls:[void 0]},d=[];function l(e){const t={a:"a",code:"code",em:"em",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"Provider"})," is an interface defined in ",(0,a.jsx)(t.a,{href:"https://qubitpi.github.io/javax-inject/api/javax/inject/Provider.html",children:"JSR 330"}),". It is part of the ",(0,a.jsx)(t.em,{children:"general"})," dependency\ninjection concept in Java."]}),"\n",(0,a.jsxs)(t.p,{children:["Whether we are on Java SR or EE, Provider will always be loadable from classpath. For example, the ",(0,a.jsx)(t.a,{href:"https://qubitpi.github.io/glassfish-hk2/",children:"HK2"})," is an\nimplementation of JSR-330 in a JavaSE environment and it conforms to the JSR 330 standard by loading the\n",(0,a.jsx)(t.a,{href:"https://qubitpi.github.io/javax-inject/api/javax/inject/Provider.html",children:"Provider"})," in its implementations."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"@Provider"}),", on the other hand, is a\n",(0,a.jsx)(t.a,{href:"https://github.com/jakartaee/rest/blob/master/jaxrs-api/src/main/java/jakarta/ws/rs/ext/Provider.java",children:(0,a.jsx)(t.em,{children:"Java EE/Jakarta EE concept"})}),".\nIf we are developing Java EE applications, we can use both (",(0,a.jsx)(t.code,{children:"Provider"})," & ",(0,a.jsx)(t.code,{children:"@Provider"}),") at the same time."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},5246:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var a=r(2340);const i={},n=a.createContext(i);function o(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);