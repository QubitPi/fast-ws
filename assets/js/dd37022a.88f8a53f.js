"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79],{8914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(5893),r=n(1151);const i={slug:"bearer-authentication",title:"Bearer Authentication",authors:"jiaqi",tags:["Security"]},o=void 0,s={permalink:"/jersey-webservice-template/blog/bearer-authentication",editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/blog/2023-11-23-bearer-authentication.md",source:"@site/blog/2023-11-23-bearer-authentication.md",title:"Bearer Authentication",description:"Bearer authentication (also called token authentication) is an",date:"2023-11-23T00:00:00.000Z",formattedDate:"November 23, 2023",tags:[{label:"Security",permalink:"/jersey-webservice-template/blog/tags/security"}],readingTime:.635,hasTruncateMarker:!1,authors:[{name:"Jack",title:"Maintainer of Jersey Webservice Template",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"bearer-authentication",title:"Bearer Authentication",authors:"jiaqi",tags:["Security"]},unlisted:!1,prevItem:{title:"Understanding Weak References",permalink:"/jersey-webservice-template/blog/weak-references"},nextItem:{title:'Tired of Null Pointer Exceptions? Consider Using Java SE 8\'s "Optional"',permalink:"/jersey-webservice-template/blog/java-optional"}},c={authorsImageUrls:[void 0]},l=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Bearer authentication"})," (also called ",(0,a.jsx)(t.strong,{children:"token authentication"}),") is an\n",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication",children:"HTTP authentication scheme"}),' that involves security tokens called bearer tokens. The name\n"Bearer authentication" can be understood as "give access to the bearer of this token." The bearer token is a cryptic\nstring, usually generated by the server in response to a login request. The client must send this token in the\n',(0,a.jsx)(t.code,{children:"Authorization"})," header when making requests to protected resources:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"Authorization: Bearer <token>\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The Bearer authentication scheme was originally created as part of ",(0,a.jsx)(t.a,{href:"https://swagger.io/docs/specification/authentication/oauth2/",children:"OAuth 2.0"})," in ",(0,a.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc6750",children:"RFC 6750"}),", but\nis sometimes also used on its own. Similarly to ",(0,a.jsx)(t.a,{href:"https://swagger.io/docs/specification/authentication/basic-authentication/",children:"Basic authentication"}),", Bearer authentication\nshould only be used over HTTPS (SSL)."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var a=n(7294);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);