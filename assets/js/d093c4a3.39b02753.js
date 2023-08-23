"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:6,title:"Elide Middleware"},o=void 0,l={unversionedId:"elide",id:"elide",title:"Elide Middleware",description:"Template can delegate JPA persistence to [Elide].",source:"@site/docs/elide.md",sourceDirName:".",slug:"/elide",permalink:"/jersey-ws-template/docs/elide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/elide.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Elide Middleware"},sidebar:"tutorialSidebar",previous:{title:"Setting Up Sentry.io",permalink:"/jersey-ws-template/docs/sentry"}},p={},s=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Elide Instance is Null in Dependency Injection",id:"elide-instance-is-null-in-dependency-injection",level:3},{value:"Entity Missing Default Constructor",id:"entity-missing-default-constructor",level:3},{value:"How to Exclude GraphQL Feature",id:"how-to-exclude-graphql-feature",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Template can delegate JPA persistence to ",(0,r.kt)("a",{parentName:"p",href:"https://elide.io/"},"Elide"),"."),(0,r.kt)("p",null,"Configuring Elide requires 2 ",(0,r.kt)("a",{parentName:"p",href:"https://qubitpi.github.io/jersey/ioc.html"},"bindings"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/Elide.java"},"Elide")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/ElideSettings.java"},"ElideSettings"))," with 2 extra sub-bindings:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EntityDictionary")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DataStore"))))),(0,r.kt)("p",null,"The binding is referencing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yahoo/elide/tree/master/elide-standalone"},"Elide Standalone")," in the following way:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Error loading resource-binding.png",src:n(1434).Z,width:"3844",height:"768"})),(0,r.kt)("p",null,"To inject Elide model package, simply put the models in a separate JAR and include it as a dependency in POM. If the\nmodel package is internal and cannot be visible publicly, either make the webservice project private or public with\nenv variable masking, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>${env.MODEL_PACKAGE_JAR_GROUP_ID}</groupId>\n        <artifactId>${env.MODEL_PACKAGE_JAR_ARTIFACT_ID}</artifactId>\n        <version>${env.MODEL_PACKAGE_JAR_VERSION}</version>\n    </dependency>\n</dependencies>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export MODEL_PACKAGE_JAR_GROUP_ID=com.mycompnay\nexport MODEL_PACKAGE_JAR_ARTIFACT_ID=my-model-package\nexport MODEL_PACKAGE_JAR_VERSION=1.0.7\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The jetty-base should be initialized with"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar $JETTY_HOME/start.jar --add-module=annotations,server,http,deploy,servlet,webapp,resources,jsp,websocket\n")),(0,r.kt)("p",{parentName:"admonition"},"In addition, before running webservice, the environment variable ",(0,r.kt)("strong",{parentName:"p"},"MODEL_PACKAGE_NAME")," must be set. For example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export MODEL_PACKAGE_NAME=com.mycompnay.models\n"))),(0,r.kt)("p",null,"Example POST via JSON API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://localhost:8080/v1/data/EntityType \\\n  -H "Content-Type: application/vnd.api+json" \\\n  -H "Accept: application/vnd.api+json" \\\n  -d \'{"data": {"type": "EntityType", "id": "elide-demo"}}\'\n')),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"elide-instance-is-null-in-dependency-injection"},"Elide Instance is Null in Dependency Injection"),(0,r.kt)("p",null,"When we start webservice in Jetty, we might see ",(0,r.kt)("inlineCode",{parentName:"p"},"elide.doScans();")," fails because ",(0,r.kt)("inlineCode",{parentName:"p"},"elide")," instance is null.\n",(0,r.kt)("inlineCode",{parentName:"p"},"elide.doScans();")," executes in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/jersey-ws-template/blob/jpa/src/main/java/com/qubitpi/ws/jersey/template/application/ResourceConfig.java"},"ResourceConfig")," through named binding. This works in some machines but might not in all.\nIf this happens, simply ",(0,r.kt)("strong",{parentName:"p"},"migrate ",(0,r.kt)("inlineCode",{parentName:"strong"},"elide.doScans();")," into ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/QubitPi/jersey-ws-template/blob/jpa/src/main/java/com/qubitpi/ws/jersey/template/application/BinderFactory.java"},"BinderFactory"))),(0,r.kt)("h3",{id:"entity-missing-default-constructor"},"Entity Missing Default Constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"13:17:52.396 [main] INFO  o.h.m.i.EntityInstantiatorPojoStandard - HHH000182: No default (no-argument) constructor for\nclass: ... (class must be instantiated by Interceptor)\n")),(0,r.kt)("h3",{id:"how-to-exclude-graphql-feature"},"How to Exclude GraphQL Feature"),(0,r.kt)("p",null,"To optionally disable GraphQL endpoints, simply exclude corresponding dependencies in POM. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.yahoo.elide</groupId>\n            <artifactId>elide-core</artifactId>\n            <version>7.0.0-pr6</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>com.yahoo.elide</groupId>\n                    <artifactId>elide-graphql</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n")))}u.isMDXComponent=!0},1434:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/resource-binding-a76a8c2e48eecad8bd8b41264f9ed46c.png"}}]);