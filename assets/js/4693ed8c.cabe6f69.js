"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[204],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:5,title:"Setting Up Sentry.io"},i=void 0,o={unversionedId:"sentry",id:"sentry",title:"Setting Up Sentry.io",description:"Sentry is a developer-first error tracking and performance monitoring platform that helps developers see what actually",source:"@site/docs/sentry.md",sourceDirName:".",slug:"/sentry",permalink:"/jersey-ws-template/docs/sentry",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentry.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Setting Up Sentry.io"},sidebar:"tutorialSidebar",previous:{title:"CI/CD",permalink:"/jersey-ws-template/docs/ci-cd"}},c={},p=[{value:"Hiding Sentry DSN",id:"hiding-sentry-dsn",level:3}],l={toc:p},u="wrapper";function d(e){let{components:t,...s}=e;return(0,a.kt)(u,(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sentry is a developer-first error tracking and performance monitoring platform that helps developers see what actually\nmatters, solve quicker, and learn continuously about their applications."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/getsentry/sentry/raw/master/.github/screenshots/projects.png",width:"270"}),(0,a.kt)("img",{src:"https://github.com/getsentry/sentry/raw/master/.github/screenshots/issue-details.png",width:"270"}),(0,a.kt)("img",{src:"https://github.com/getsentry/sentry/raw/master/.github/screenshots/transaction-summary.png",width:"270"}),(0,a.kt)("img",{src:"https://github.com/getsentry/sentry/raw/master/.github/screenshots/releases.png",width:"270"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The logging framework has to be ",(0,a.kt)("b",null,"Logback"),", which is the logging library used in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/jersey-ws-template"},"jersey-ws-template")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"Error loading setup-sentry-1.png",src:r(9454).Z,width:"3584",height:"1221"}),"\n",(0,a.kt)("img",{alt:"Error loading setup-sentry-2.png",src:r(7118).Z,width:"3136",height:"2220"}),"\n",(0,a.kt)("img",{alt:"Error loading setup-sentry-3.png",src:r(2141).Z,width:"2937",height:"1998"}))),(0,a.kt)("h3",{id:"hiding-sentry-dsn"},"Hiding ",(0,a.kt)("a",{parentName:"h3",href:"https://docs.sentry.io/platforms/java/guides/logback/#dsn-configuration"},"Sentry DSN")),(0,a.kt)("p",null,"It is recommended to simply define ",(0,a.kt)("strong",{parentName:"p"},"SENTRY_DSN")," environment variable via CI/CD so that Sentry SDK can pick it up\nautomatically"))}d.isMDXComponent=!0},9454:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/setup-sentry-1-d2ab7d5034c2a0fc366d57cace94e335.png"},7118:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/setup-sentry-2-1e9c5aad5e215a9a65df1bc47f7a9c58.png"},2141:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/setup-sentry-3-ea30e953ef4449a964eb2791e0b8c230.png"}}]);