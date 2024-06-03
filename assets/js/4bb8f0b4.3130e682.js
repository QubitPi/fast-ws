"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4619],{7967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=n(4848),i=n(8453);const r={sidebar_position:14,title:"Development"},o=void 0,l={id:"elide/development",title:"Development",description:"Overview",source:"@site/docs/elide/development.md",sourceDirName:"elide",slug:"/elide/development",permalink:"/jersey-webservice-template/docs/elide/development",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/elide/development.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"Development"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/jersey-webservice-template/docs/elide/configuration"},next:{title:"Design",permalink:"/jersey-webservice-template/docs/elide/design"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"Building",id:"building",level:3},{value:"Release Versions",id:"release-versions",level:3},{value:"Integration Tests",id:"integration-tests",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"The following guide is intended to help developers who maintain or want to make changes to the Elide framework."}),"\n",(0,s.jsx)(t.h3,{id:"building",children:"Building"}),"\n",(0,s.jsx)(t.p,{children:"Elide is built using maven.  Because elide is a mono-repo with interdependencies between modules, it is recommended to\nfully build and install the project at least once:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"mvn clean install\n"})}),"\n",(0,s.jsx)(t.p,{children:"Thereafter, individual modules can be built whenever making changes to them.  For example, the following command would\nrebuild only elide-core:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"mvn clean install -f elide-core\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Pull requests and release builds leverage ",(0,s.jsx)(t.a,{href:"https://docs.github.com/en/actions",children:"GitHub Actions"}),". PR builds simply run the\ncomplete build along with code coverage:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"mvn -B install -DrepoToken=${{ secrets.COVERALLS_REPO_TOKEN }}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"release-versions",children:"Release Versions"}),"\n",(0,s.jsxs)(t.p,{children:["Elide follows ",(0,s.jsx)(t.a,{href:"https://semver.org/",children:"semantic versioning"})," for its releases. Minor and patch versions only have the\nfollowing version components:"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"MAJOR.MINOR.PATCH"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"integration-tests",children:"Integration Tests"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"elide-integration-tests"})," module runs API tests against an embedded Jetty application with an H2 database for\npersistence. Integration tests are run for the JPA, hibernate, and inmemory stores. The module produce a 'test-jar'\nartifact that is then referenced for each data store module (jpa, hibernate, etc) that runs the corresponding tests."]}),"\n",(0,s.jsx)(t.p,{children:"Not every tests works for every store, and JUnit tags are leveraged to isolate the tests appropriate for each target."}),"\n",(0,s.jsx)(t.p,{children:"When run in an IDE, the inmemory store is leveraged. To tests against a different data store, the IDE must be configured\nto:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Set a property that selects the\n",(0,s.jsx)(t.a,{href:"https://github.com/paion-data/elide/blob/master/elide-core/src/main/java/com/paiondata/elide/core/datastore/test/DataStoreTestHarness.java",children:"DataStoreTestHarness"}),"\nwhich in turn initializes the data store to test."]}),"\n",(0,s.jsx)(t.li,{children:"Sets the classpath appropriately to the data store submodule that is being tested."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The following screenshot demonstrates configuring these two settings for the 'FilterIT' tests in IntelliJ:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Configuring IT Tests In Intellij",src:n(3568).A+"",width:"1070",height:"501"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3568:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/intellij-config-edeafb6002fc78aca2bfebedd3783ae7.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);