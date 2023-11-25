"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4612],{3624:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=i(5893),a=i(1151);const t={sidebar_position:4,title:"JPA through Elide Middleware"},r=void 0,o={id:"elide",title:"JPA through Elide Middleware",description:"[//]: # (Copyright Jiaqi Liu)",source:"@site/docs/elide.md",sourceDirName:".",slug:"/elide",permalink:"/jersey-webservice-template/docs/elide",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/elide.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"JPA through Elide Middleware"},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/jersey-webservice-template/docs/development"},next:{title:"Security",permalink:"/jersey-webservice-template/docs/security"}},l={},d=[{value:"Setup",id:"setup",level:2},{value:"Running Webservice in Docker Compose",id:"running-webservice-in-docker-compose",level:2},{value:"Step 1: Defining Data Models",id:"step-1-defining-data-models",level:3},{value:"Step 2: Spinning Up Docker Compose",id:"step-2-spinning-up-docker-compose",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Database Does Not Have My Model Packages&#39;s Bean Table",id:"database-does-not-have-my-model-packagess-bean-table",level:4},{value:"Entity Missing Default Constructor",id:"entity-missing-default-constructor",level:3},{value:"How to Exclude GraphQL Feature",id:"how-to-exclude-graphql-feature",level:3},{value:"Querying Webservice",id:"querying-webservice",level:2},{value:"GraphQL Queries through GraphiQL",id:"graphql-queries-through-graphiql",level:3},{value:"Install GraphiQL (on Mac)",id:"install-graphiql-on-mac",level:4},{value:"Quering GraphQL Endpoint",id:"quering-graphql-endpoint",level:4},{value:"TypeScript/JavaScript Axios",id:"typescriptjavascript-axios",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/badge/EC2-%E2%89%A5t2.small-FF9902?style=for-the-badge&logo=amazonec2&logoColor=white",alt:"AWS EC2 min size"})})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/jersey-webservice-template/",children:"Jersey Webservice Template"})," (",(0,s.jsx)(n.em,{children:"JWT"}),") delegates JPA capabilities to ",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/elide-doc/",children:"Elide"})," and configures Elide through 2 required\nElide ",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/jersey/ioc.html",children:"bindings"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://github.com/QubitPi/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/Elide.java",children:"Elide"})})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://github.com/QubitPi/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/ElideSettings.java",children:"ElideSettings"})})," with 2 extra sub-bindings:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"EntityDictionary"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"DataStore"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The binding is referencing ",(0,s.jsx)(n.a,{href:"https://github.com/QubitPi/elide/tree/master/elide-standalone",children:"Elide Standalone"})," in the following way:"]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["Although the Jersey binder wraps HK2 binder, we\n",(0,s.jsxs)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-template/pull/29/files#diff-afa024cc2643aaf681db505cac24b8601c94931290718993392e7726001b1559L39-R40",children:["must pick the ",(0,s.jsx)(n.em,{children:"Jersey binder"})," for binding Elide resources"]}),",\notherwise, dependency injection will flaky and not right."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Error loading resource-binding.png",src:i(2252).Z+"",width:"4614",height:"1326"})}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.p,{children:["The IT tests will run against an ",(0,s.jsx)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-template-jpa-data-model/blob/master/src/main/java/com/qubitpi/ws/jersey/template/models/Book.java",children:"example model"})," so make sure the following environment variable is set to point to this\nmodel:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export TEST_MODEL_PACKAGE_NAME=com.qubitpi.ws.jersey.template.models\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, download the model to ",(0,s.jsx)(n.em,{children:"CLASSPATH"})," by setting up the ",(0,s.jsx)(n.code,{children:"~/.m2/settings.xml"})," with"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"\n          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0\n                      http://maven.apache.org/xsd/settings-1.0.0.xsd">\n\n    <profiles>\n        <profile>\n            <id>data-models</id>\n            <properties>\n                <model.package.jar.group.id>com.qubitpi</model.package.jar.group.id>\n                <model.package.jar.artifact.id>\n                   jersey-webservice-template-jpa-data-model\n                </model.package.jar.artifact.id>\n                <model.package.jar.version>1.0.0</model.package.jar.version>\n            </properties>\n        </profile>\n    </profiles>\n\n    <activeProfiles>\n        <activeProfile>data-models</activeProfile>\n    </activeProfiles>\n</settings>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then execute the following commands to run both unit and integration tests:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn clean verify\n"})}),"\n",(0,s.jsx)(n.h2,{id:"running-webservice-in-docker-compose",children:"Running Webservice in Docker Compose"}),"\n",(0,s.jsx)(n.h3,{id:"step-1-defining-data-models",children:"Step 1: Defining Data Models"}),"\n",(0,s.jsxs)(n.p,{children:["To inject ",(0,s.jsx)(n.a,{href:"https://github.com/yahoo/elide/tree/master/elide-standalone#create-models",children:"Elide model package"}),", simply put\nthe models in a separate JAR and include it as a dependency in POM. If the model package is internal and cannot be\nvisible publicly, either make project private, or make public with model package dependency info\n",(0,s.jsx)(n.a,{href:"https://maven.apache.org/examples/injecting-properties-via-settings.html",children:"injected via settings.xml"}),", for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<project>\n\n    ...\n\n    <dependencies>\n        <dependency>\n            <groupId>${model.package.jar.group.id}</groupId>\n            <artifactId>${model.package.jar.artifact.id}</artifactId>\n            <version>${model.package.jar.version}</version>\n        </dependency>\n    </dependencies>\n\n    ...\n\n    <repositories>\n        <repository>\n            <id>${model.package.repo.id}</id>\n            <name>Data model pacakge JAR repository</name>\n            <url>${model.package.repo.url}</url>\n        </repository>\n    </repositories>\n\n    ...\n\n</project>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["with a corresponding ",(0,s.jsx)(n.code,{children:"~/.m2/settings.xml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"\n          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0\n                      http://maven.apache.org/xsd/settings-1.0.0.xsd">\n\n    <profiles>\n        <profile>\n            <id>data-models</id>\n            <properties>\n                <model.package.jar.group.id>com.mycompnay</model.package.jar.group.id>\n                <model.package.jar.artifact.id>my-model-package</model.package.jar.artifact.id>\n                <model.package.jar.version>1.0.7</model.package.jar.version>\n                <model.package.repo.id>mycompany-maven-repo-id</model.package.repo.id>\n                <model.package.repo.url>\n                    https://private.mvnrepository.com/artifact/com.company/my-model-package\n                </model.package.repo.url>\n            </properties>\n        </profile>\n    </profiles>\n\n\n    <activeProfiles>\n        <activeProfile>data-models</activeProfile>\n    </activeProfiles>\n\n    <servers>\n        ...\n    </servers>\n</settings>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Lastly, if IntelliJ IDE is used for development, please make sure to let IDE pick up the ",(0,s.jsx)(n.code,{children:"~/.m2/settings.xml"})," by\nunchecking the ",(0,s.jsx)(n.em,{children:"Use settings from .mvn/maven.config"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Error loading load-m2-settings.png",src:i(7713).Z+"",width:"3584",height:"2240"})}),"\n",(0,s.jsx)(n.h3,{id:"step-2-spinning-up-docker-compose",children:"Step 2: Spinning Up Docker Compose"}),"\n",(0,s.jsxs)(n.p,{children:["Jersey Webservice Template can run in ",(0,s.jsx)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-template/blob/jpa-elide/docker-compose.yml",children:"Docker Compose"})," for the following purposes"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Decoupling frontend and backend developments"}),"\n",(0,s.jsx)(n.li,{children:"Making it easy to run E2E testing of Jersey Webservice Template-backed application in CI/CD"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Docker Compose designed here is intended for local development and testing purposes ONLY! ",(0,s.jsx)(n.em,{children:"It is strongly discouraged\nto run this Docker Compose in production!"})]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Error Loading docker-compose.png",src:i(3353).Z+"",width:"732",height:"492"})}),"\n",(0,s.jsx)(n.p,{children:"Simply run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/QubitPi/jersey-webservice-template.git\ncd jersey-webservice-template\ngit checkout jpa-elide\nmvn clean package\nMODEL_PACKAGE_NAME=$MODEL_PACKAGE_NAME docker compose up --build --force-recreate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["where the value of ",(0,s.jsx)(n.code,{children:"$MODEL_PACKAGE_NAME"})," variable is the package in config JAR that contains all\n",(0,s.jsx)(n.a,{href:"https://elide.io/pages/guide/v7/02-data-model.html",children:"elide models"}),". It can be set, for example, at command line with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export MODEL_PACKAGE_NAME=com.mycompany.data.models\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The variable will be ",(0,s.jsx)(n.a,{href:"https://stackoverflow.com/a/58900415",children:"passed"})," into Docker Compose file."]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"The MySQL database, if running correctly, can be accessed from host machine via"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mysql -h localhost -P 3306 -D elide --protocol=tcp -u root -proot\n"})}),(0,s.jsxs)(n.p,{children:["Note all data is in ",(0,s.jsx)(n.code,{children:"elide"})," database which we have specified to use in the command above."]})]}),"\n",(0,s.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.h4,{id:"database-does-not-have-my-model-packagess-bean-table",children:"Database Does Not Have My Model Packages's Bean Table"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"If tests is running in IntelliJ IDE"}),", make sure the model package JAR it is in IDE's ",(0,s.jsx)(n.strong,{children:"External Libraries"})]}),"\n",(0,s.jsxs)(n.p,{children:["Otherwise, the dependency injection didn't find a bean class under the package specified by\n",(0,s.jsx)(n.a,{href:"#step-1-defining-data-models",children:"JWT_MODEL_PACKAGE_NAME"})]}),"\n",(0,s.jsx)(n.h3,{id:"entity-missing-default-constructor",children:"Entity Missing Default Constructor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[main] INFO  o.h.m.i.EntityInstantiatorPojoStandard - HHH000182: No default (no-argument) constructor for\nclass: ... (class must be instantiated by Interceptor)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Simply add a no-args constructor to the bean class."}),"\n",(0,s.jsx)(n.h3,{id:"how-to-exclude-graphql-feature",children:"How to Exclude GraphQL Feature"}),"\n",(0,s.jsx)(n.p,{children:"To optionally disable GraphQL endpoints, exclude corresponding dependencies in POM. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"        <dependency>\n            <groupId>com.yahoo.elide</groupId>\n            <artifactId>elide-core</artifactId>\n            <version>7.0.0-pr6</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>com.yahoo.elide</groupId>\n                    <artifactId>elide-graphql</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"querying-webservice",children:"Querying Webservice"}),"\n",(0,s.jsx)(n.h3,{id:"graphql-queries-through-graphiql",children:"GraphQL Queries through GraphiQL"}),"\n",(0,s.jsx)(n.h4,{id:"install-graphiql-on-mac",children:"Install GraphiQL (on Mac)"}),"\n",(0,s.jsxs)(n.p,{children:["via ",(0,s.jsx)(n.a,{href:"https://formulae.brew.sh/cask/graphiql",children:"Homebrew"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install --cask graphiql\n"})}),"\n",(0,s.jsx)(n.h4,{id:"quering-graphql-endpoint",children:"Quering GraphQL Endpoint"}),"\n",(0,s.jsx)(n.p,{children:"Let's crete a book:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  book(op: UPSERT, data:{title: "Pride & Prejudice"}) {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Error loading graphiql-mutation-example.png",src:i(8348).Z+"",width:"3584",height:"945"})}),"\n",(0,s.jsx)(n.p,{children:"We can create few more books, sort and paginate them with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'{\n  book(sort: "-id", first: "1", after: "0") {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n    pageInfo {\n      totalRecords\n      startCursor\n      endCursor\n      hasNextPage\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"typescriptjavascript-axios",children:"TypeScript/JavaScript Axios"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Note that any serialization of TS/JS object (",(0,s.jsx)(n.code,{children:"someObject"}),") should be done with\n",(0,s.jsx)(n.code,{children:"JSON.stringify(someObject).replace(/\"/g, '\\\\\"')"}),", otherwise the GraphQL query won't be parsed properly by webservice."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import axios from "axios";\n\nconst JERSEY_WEBSERVICE_TEMPLATE_GRAPHQL_API_ENDPOINT = "https://myservice.com/v1/data";\n\nexport class Client {\n  public saveOrUpdate(book: Book, userId: string, accessToken: string): Promise<any> {\n    const someJsonField = JSON.stringify({ field1: book.field1, field2: book.field2 }).replace(/"/g, \'\\\\"\');\n\n    return this.postGraphQLQuery(\n      `\n      mutation saveGraph {\n        graph(op: UPSERT, data: {\n          id: "${book.id}"\n          title: "${book.title}"\n          authorId: "${book.authorId}"\n          jsonField: "${someJsonField}"\n        }) {\n          edges {\n            node {\n              id\n              title\n              author\n            }\n          }\n        }\n      }\n      `,\n      accessToken\n    );\n  }\n\n  public getBooksByAuthorId(authorId: string, accessToken: string) {\n    return this.postGraphQLQuery(\n      `\n      query getBooksByAuthorId {\n        book(filter:"authorId==${authorId}") {\n          edges {\n            node {\n              id\n              title\n            }\n          }\n        }\n      }\n      `,\n      accessToken\n    );\n  }\n\n  private postGraphQLQuery(query: string, accessToken: string): Promise<any> {\n    return axios\n      .post(JERSEY_WEBSERVICE_TEMPLATE_GRAPHQL_API_ENDPOINT, { query: query }, this.getHeaders(accessToken))\n      .then((response) => {\n        return response;\n      });\n  }\n\n  private getHeaders(token: string) {\n    return {\n      headers: {\n        Accept: "application/json",\n        "Content-Type": "application/json",\n        Authorization: "Bearer " + token,\n      },\n    };\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Error loading graphiql-query-example.png",src:i(9443).Z+"",width:"3584",height:"1130"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3353:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/docker-compose-749d540691d73211a4b0ec613229bf30.png"},8348:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/graphiql-mutation-example-747c388455a51d3a6bb4f1aa9242f3b7.png"},9443:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/graphiql-query-example-0d46b23372447e19258d690477ac279a.png"},7713:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/load-m2-settings-8c90138e53bba78c2a44ea1c6304f377.png"},2252:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/resource-binding-2533e561b79d9ea06fb735525b6077df.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var s=i(7294);const a={},t=s.createContext(a);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);