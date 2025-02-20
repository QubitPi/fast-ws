"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4816],{3916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(8040),a=t(5246);const i={slug:"java-env-properties",title:"Java System Properties & Environment Variables API's",authors:"jiaqi",tags:["Java"]},s=void 0,o={permalink:"/blog/java-env-properties",editUrl:"https://github.com/QubitPi/fast-ws/tree/master/docs/blog/2019-08-07-java-env-properties.md",source:"@site/blog/2019-08-07-java-env-properties.md",title:"Java System Properties & Environment Variables API's",description:"[//]: # (Copyright 2025 Jiaqi Liu. All rights reserved.)",date:"2019-08-07T00:00:00.000Z",formattedDate:"August 7, 2019",tags:[{label:"Java",permalink:"/blog/tags/java"}],readingTime:2.155,hasTruncateMarker:!0,authors:[{name:"Jack",title:"Maintainer of FastWS",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"java-env-properties",title:"Java System Properties & Environment Variables API's",authors:"jiaqi",tags:["Java"]},unlisted:!1,prevItem:{title:"Refer to Environment Variables in POM",permalink:"/blog/env-var-in-pom"}},l={authorsImageUrls:[void 0]},c=[{value:"System Properties",id:"system-properties",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"The Differences",id:"the-differences",level:2}];function p(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"system-properties",children:"System Properties"}),"\n",(0,r.jsxs)(n.p,{children:["The Java platform uses a ",(0,r.jsx)(n.strong,{children:"Properties"})," object to provide information about the local system and configuration, and we\ncall it ",(0,r.jsx)(n.strong,{children:"System Properties"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"System Properties include information such as the current user, the current version of the Java runtime, and the file\npath-name separator."}),"\n",(0,r.jsxs)(n.p,{children:["In the below code, we use ",(0,r.jsx)(n.code,{children:'System.getProperty("log_dir")'})," to read the value of the property ",(0,r.jsx)(n.code,{children:"log_dir"}),". We also make use\nof the default value parameter, so if the property doesn't exist, getProperty returns ",(0,r.jsx)(n.code,{children:"/tmp/log"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'String log_dir = System.getProperty("log_dir","/tmp/log");\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To update System Properties at runtime, we use the ",(0,r.jsx)(n.strong,{children:"System.setProperty"})," method:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'System.setProperty("log_dir", "/tmp/log");\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We can pass our own properties or configurations values to the application using the ",(0,r.jsx)(n.strong,{children:"propertyName"})," command line\nargument:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"java -jar jarName -DpropertyName=value\n"})}),"\n",(0,r.jsx)(n.p,{children:"For example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'java -jar app -Dfoo="bar"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,r.jsxs)(n.p,{children:["Environment Variables are key/value pairs like Properties. Many Operating Systems use Environment Variables to allow\n",(0,r.jsx)(n.em,{children:"configuration information to be passed into applications"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The way to set an environment variable differs from one operating system to another. For example, on Linux, we use"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export MY_ENV_VAR=foo\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"When creating a process, it inherits a clone environment of its parent process by default"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To obtain a single environment variable programmatically, we can call ",(0,r.jsx)(n.strong,{children:"getenv"})," with the variable name:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'String log_dir = System.getenv("log_dir");\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["getenv() returns a ",(0,r.jsx)(n.em,{children:"read-only"})," Map. Trying to add values to the map throws an UnsupportedOperationException."]})}),"\n",(0,r.jsx)(n.h2,{id:"the-differences",children:"The Differences"}),"\n",(0,r.jsx)(n.p,{children:"Although both are essentially maps that provide String values for String keys, let's look at a few differences:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"We can update Properties at runtime, while Environment Variables are an immutable copy of the Operating System's\nvariables."}),"\n",(0,r.jsx)(n.li,{children:"Properties are contained only within the Java platform, while Environment Variables are global at the Operating\nSystem level, available to all applications running on the same machine."}),"\n",(0,r.jsx)(n.li,{children:"Properties must exist when packaging the application, but we can create Environment Variables on the Operating\nSystem at almost any point."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5246:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(2340);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);