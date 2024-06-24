"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2554],{7237:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=t(4848),i=t(8453),r=t(1470),s=t(9365);const l={sidebar_position:1,title:"Getting Started",description:"Standing up a CRUD webservice in a minute"},o=void 0,d={id:"crud/index",title:"Getting Started",description:"Standing up a CRUD webservice in a minute",source:"@site/docs/crud/index.mdx",sourceDirName:"crud",slug:"/crud/",permalink:"/jersey-webservice-template/docs/crud/",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/crud/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started",description:"Standing up a CRUD webservice in a minute"},sidebar:"tutorialSidebar",previous:{title:"CRUD Webservice",permalink:"/jersey-webservice-template/docs/category/crud-webservice"},next:{title:"Elide Library Documentation",permalink:"/jersey-webservice-template/docs/category/elide-library-documentation"}},c={},u=[{value:"So You Want An API?",id:"so-you-want-an-api",level:2},{value:"Instantiating the Template",id:"instantiating-the-template",level:2},{value:"Creating Models",id:"creating-models",level:2},{value:"Loading Data Models",id:"loading-data-models",level:2},{value:"Running",id:"running",level:2},{value:"Writing Data",id:"writing-data",level:2},{value:"Inserting Data",id:"inserting-data",level:3},{value:"Looking at Our Data",id:"looking-at-our-data",level:3},{value:"Modifying Data",id:"modifying-data",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Invalid API Version",id:"invalid-api-version",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/badge/EC2-%E2%89%A5t2.small-FF9902?style=for-the-badge&logo=amazonec2&logoColor=white",alt:"AWS EC2 min size"})})}),"\n",(0,a.jsx)(n.h2,{id:"so-you-want-an-api",children:"So You Want An API?"}),"\n",(0,a.jsx)(n.admonition,{title:"Please make sure JDK 17, Maven, and Docker Engine have been installed \ud83e\udd17",type:"info",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["We offer ",(0,a.jsx)(n.a,{href:"../setup#installing-java--maven-on-mac",children:"instruction"})," on how to install JDK 17 and Maven"]}),"\n",(0,a.jsxs)(n.li,{children:["We also offer ",(0,a.jsx)(n.a,{href:"../setup#installing-docker-engine",children:"links to Docker Engine installation"})]}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"instantiating-the-template",children:"Instantiating the Template"}),"\n",(0,a.jsxs)(n.p,{children:["Please visit ",(0,a.jsx)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-template",children:"JWT GitHub"})," and either"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["clone the repo with ",(0,a.jsx)(n.code,{children:"git clone https://github.com/QubitPi/jersey-webservice-template.git"})," and switch to the\n",(0,a.jsx)(n.code,{children:"jpa-elide"})," branch using ",(0,a.jsx)(n.code,{children:"git checkout jpa-elide"}),", or"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"make it a template instantiation with our own webservice name by doing the following:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Error loading instantiation-1.png",src:t(9502).A+"",width:"3584",height:"836"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:['Please make sure the "',(0,a.jsx)(n.strong,{children:"Include all branches"}),'" is checked']})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Error loading instantiation-2.png",src:t(9877).A+"",width:"2120",height:"840"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"creating-models",children:"Creating Models"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://qubitpi.github.io/jersey-webservice-template/",children:"Jersey Webservice Template"})," models are some of the most important code in any webservice project. Our models are the\nview of our data that we wish to expose. In this example we will be modeling a ",(0,a.jsx)(n.em,{children:"book"})," since most people have a\nhigh-level familiarity with books in life."]}),"\n",(0,a.jsxs)(n.p,{children:["Our ",(0,a.jsx)(n.em,{children:"Book"})," model looks something like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import com.yahoo.elide.annotation.Include;\n\nimport jakarta.persistence.Entity;\nimport jakarta.persistence.GeneratedValue;\nimport jakarta.persistence.Id;\nimport jakarta.persistence.Table;\n\n@Entity\n@Table(name = "book")\n@Include(rootLevel = true, name = "book", description = "book entity", friendlyName = "book")\npublic class Book {\n\n    @Id\n    @GeneratedValue\n    public long id;\n\n    public String title = "";\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Models are usually packaged as ",(0,a.jsx)(n.strong,{children:"JAR"})," file in a separate Maven project. Here is a complete\n",(0,a.jsx)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-template-jpa-data-models",children:"example"})]})}),"\n",(0,a.jsxs)(n.p,{children:["In the end, run ",(0,a.jsx)(n.code,{children:"mvn clean install"})," to install our model"]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["From this point on, we assume ",(0,a.jsx)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-template-jpa-data-models",children:"this example data model"})," is used, which can\nbe installed locally using the following commands:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/QubitPi/jersey-webservice-template-jpa-data-models.git\ncd jersey-webservice-template-jpa-data-models\nmvn clean install\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"loading-data-models",children:"Loading Data Models"}),"\n",(0,a.jsxs)(n.p,{children:["So now we have some models, but without an API it is not very useful. Now we need to instruct our ",(0,a.jsx)(n.em,{children:"my-webservice"})," to\nload ",(0,a.jsx)(n.a,{href:"#creating-models",children:"data models"})," via Maven config file, i.e. ",(0,a.jsx)(n.strong,{children:"settings.xml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"\n          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0\n                      http://maven.apache.org/xsd/settings-1.0.0.xsd">\n\n    <profiles>\n        <profile>\n            <id>jwt-data-models</id>\n            <properties>\n                <model.package.jar.group.id>io.github.qubitpi</model.package.jar.group.id>\n                <model.package.jar.artifact.id>jersey-webservice-template-jpa-data-models</model.package.jar.artifact.id>\n                <model.package.jar.version>1.0.1</model.package.jar.version>\n            </properties>\n        </profile>\n    </profiles>\n\n    <activeProfiles>\n        <activeProfile>jwt-data-models</activeProfile>\n    </activeProfiles>\n</settings>\n'})}),"\n",(0,a.jsx)(n.h2,{id:"running",children:"Running"}),"\n",(0,a.jsxs)(n.p,{children:["With data models defined, can run ",(0,a.jsx)(n.em,{children:"my-webservice"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd my-webservice\nmvn clean package --settings settings.xml\nMODEL_PACKAGE_NAME=io.github.qubitpi.ws.jersey.template.models docker compose up --build --force-recreate\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that the ",(0,a.jsx)(n.code,{children:"settings.xml"})," is the ",(0,a.jsx)(n.a,{href:"#loading-data-models",children:"Maven config file for loading the data model"})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"io.github.qubitpi.ws.jersey.template.models"})," is the name of the model in the aforementioned\n",(0,a.jsx)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-template-jpa-data-models",children:"data model project"})]})}),"\n",(0,a.jsx)(n.p,{children:"If everything runs successfully, we should be able to see the following output at end of the command line output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"web-1  | 2024-06-24 06:55:18.427:INFO :oejsh.ContextHandler:main: Started o.e.j.w.WebAppContext@2892dae4{ROOT.war,/,file:///tmp/jetty-0_0_0_0-8080-ROOT_war-_-any-18385652298504253014/webapp/,AVAILABLE}{/jetty-base/webapps/ROOT.war}\nweb-1  | 2024-06-24 06:55:18.447:INFO :oejs.AbstractConnector:main: Started ServerConnector@56b48163{HTTP/1.1, (http/1.1)}{0.0.0.0:8080}\nweb-1  | 2024-06-24 06:55:18.459:INFO :oejs.Server:main: Started Server@71d44a3{STARTING}[11.0.15,sto=5000] @13768ms\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"A MySQL database container has also started alongside and is accessible via"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"`mysql -h localhost -D minerva -P 3306 --protocol=tcp -u root -proot`\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"writing-data",children:"Writing Data"}),"\n",(0,a.jsx)(n.h3,{id:"inserting-data",children:"Inserting Data"}),"\n",(0,a.jsx)(n.p,{children:"We have defined our views on the database and exposed those views over HTTP. Next let's use cURL to put data in the\ndatabase."}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(s.A,{value:"jsonapi",label:"JSON-API",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8080/v1/data/book \\\n    -H "Content-Type: application/vnd.api+json" \\\n    -H "Accept: application/vnd.api+json" \\\n    -d \'{"data": {"type": "book", "attributes": { "title": "Pride and Prejudice" }}}\'\n'})})}),(0,a.jsx)(s.A,{value:"graphql",label:"GraphQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/v1/data" \\\n    -H "Content-Type: application/json" \\\n    -H "Accept: application/json"  \\\n    -d \'{ "query" : "mutation { book(op: UPSERT, data:{title: \\"Pride & Prejudice\\"}) { edges { node { id title } } } }" }\'\n'})})}),(0,a.jsx)(s.A,{value:"graphql-query",label:"(GraphQL) Query",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  book(op: UPSERT, data:{title: "Pride & Prejudice"}) {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"When we run that cURL call we should see a bunch of JSON returned, that is our newly inserted object!"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(s.A,{value:"jsonapi",label:"JSON-API",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n   "data":{\n      "type":"book",\n      "id":"1",\n      "attributes":{\n         "title":"Pride and Prejudice"\n      }\n   }\n}\n'})})}),(0,a.jsx)(s.A,{value:"graphql",label:"GraphQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n   "data":{\n      "book":{\n         "edges":[\n            {\n               "node":{\n                  "id":"4",\n                  "title":"Pride & Prejudice"\n               }\n            }\n         ]\n      }\n   }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"looking-at-our-data",children:"Looking at Our Data"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsxs)(s.A,{value:"browser",label:"Web Browser",default:!0,children:[(0,a.jsxs)(n.p,{children:["Simply open up our favorite browser and hit ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"http://localhost:8080/v1/data/book",children:"http://localhost:8080/v1/data/book"})})]}),(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["It is recommended to view result with some\n",(0,a.jsx)(n.a,{href:"https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa",children:"JSON formatter"})," browser\nextension for better viewing experience"]})})]}),(0,a.jsx)(s.A,{value:"json-api",label:"JSON-API",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl "http://localhost:8080/v1/data/book"\n'})})}),(0,a.jsx)(s.A,{value:"graphql",label:"GraphQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/v1/data" \\\n    -H "Content-Type: application/json" \\\n    -H "Accept: application/json"  \\\n    -d \'{ "query" : "{ book { edges { node { id title } } } }" }\'\n'})})}),(0,a.jsx)(s.A,{value:"graphql-query",label:"(GraphQL) Query",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"{\n  book {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"modifying-data",children:"Modifying Data"}),"\n",(0,a.jsx)(n.p,{children:"Notice that, when we created it, we did not set any of the attributes of our new book record. Updating our data to help\nour users is just as easy as it is to add new data. Let's update our model with the following cURL call."}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(s.A,{value:"jsonapi",label:"JSON-API",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH http://localhost:8080/v1/data/book/1 \\\n    -H "Content-Type: application/vnd.api+json" \\\n    -H "Accept: application/vnd.api+json" \\\n    -d \'{"data": {"type": "book", "id": "1", "attributes": { "title": "Emma" }}}\'\n'})})}),(0,a.jsx)(s.A,{value:"graphql",label:"GraphQL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:8080/v1/data" \\\n    -H "Content-Type: application/json" \\\n    -H "Accept: application/json"  \\\n    -d \'{ "query" : "mutation { book(op: UPSERT, data: {id: \\"1\\", title: \\"Emma\\"}) { edges { node { id title } } } }" }\'\n'})})}),(0,a.jsx)(s.A,{value:"graphql-query",label:"(GraphQL) Query",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  book(op: UPSERT, data: {id: "1", title: "Emma"}) {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,a.jsx)(n.h3,{id:"invalid-api-version",children:"Invalid API Version"}),"\n",(0,a.jsx)(n.p,{children:"This could be the Elide version difference between used data model repository and Jersey Webservice Template. Ideally\nthey should use the exact same Elide version"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var a=t(53);const i={tabItem:"tabItem_Ymn6"};var r=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(6540),i=t(53),r=t(3104),s=t(6347),l=t(205),o=t(7485),d=t(1682),c=t(9466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[d,u]=m({queryString:t,groupId:i}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),j=(()=>{const e=d??g;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{j&&o(j)}),[j]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=t(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==a&&(d(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...r,className:(0,i.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(f,{...e,...n})]})}function y(e){const n=(0,b.A)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(n))}},9502:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/instantiation-1-8a45c5a0f1bc5f7232d08bfb82f1336b.png"},9877:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/instantiation-2-20664380f27ede09ea7e61fe278aa40b.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var a=t(6540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);