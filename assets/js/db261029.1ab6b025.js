"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7701],{1055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(8040),o=n(5246);const r={slug:"put-vs-post",title:"PUT v.s. POST",authors:"jiaqi",tags:["Webservice"]},i=void 0,a={permalink:"/blog/put-vs-post",editUrl:"https://github.com/QubitPi/fast-ws/tree/master/docs/blog/2021-04-25-put-vs-post.md",source:"@site/blog/2021-04-25-put-vs-post.md",title:"PUT v.s. POST",description:"[//]: # (Copyright 2025 Jiaqi Liu. All rights reserved.)",date:"2021-04-25T00:00:00.000Z",formattedDate:"April 25, 2021",tags:[{label:"Webservice",permalink:"/blog/tags/webservice"}],readingTime:1.285,hasTruncateMarker:!0,authors:[{name:"Jack",title:"Maintainer of FastWS",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"put-vs-post",title:"PUT v.s. POST",authors:"jiaqi",tags:["Webservice"]},unlisted:!1,prevItem:{title:"Java 8 Stream",permalink:"/blog/java-stream"},nextItem:{title:"JQPL",permalink:"/blog/jpql"}},c={authorsImageUrls:[void 0]},l=[];function p(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["We should choose between PUT and POST based on ",(0,s.jsx)(t.a,{href:"http://en.wikipedia.org/wiki/Idempotent",children:"idempotence"})," of the action."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"PUT"})," implies putting a resource - completely replacing whatever is available at the given URL with a different thing.\nBy definition, a PUT is idempotent. Do it as many times as you like, and the result is the same. ",(0,s.jsx)(t.code,{children:"x=5"})," is idempotent.\nYou can PUT a resource whether it previously exists, or not (eg, to Create, or to Update)!"]}),"\n",(0,s.jsxs)(t.p,{children:["**POST updates a resource, adds a subsidiary resource, or causes a change. A POST is not idempotent, in the way that\n",(0,s.jsx)(t.code,{children:"x++"})," is not idempotent."]}),"\n",(0,s.jsx)(t.p,{children:'By this argument, PUT is for creating when you know the URL of the thing you will create. POST can be used to create\nwhen you know the URL of the "factory" or manager for the category of things you want to create.'}),"\n",(0,s.jsx)(t.p,{children:"so:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"POST /expense-report\n"})}),"\n",(0,s.jsx)(t.p,{children:"or:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"PUT /expense-report/10929\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},5246:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(2340);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);