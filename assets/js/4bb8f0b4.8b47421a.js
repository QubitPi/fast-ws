"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4992],{1491:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(5893),t=i(1151);const a=i.p+"assets/images/docker-compose-749d540691d73211a4b0ec613229bf30.png",r={sidebar_position:10,title:"Development",description:"For developers who maintain or want to make changes to the Jersey Webservice Template"},o=void 0,l={id:"elide/development",title:"Development",description:"For developers who maintain or want to make changes to the Jersey Webservice Template",source:"@site/docs/elide/development.md",sourceDirName:"elide",slug:"/elide/development",permalink:"/jersey-webservice-template/docs/elide/development",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/elide/development.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Development",description:"For developers who maintain or want to make changes to the Jersey Webservice Template"},sidebar:"tutorialSidebar",previous:{title:"Performance",permalink:"/jersey-webservice-template/docs/elide/performance"},next:{title:"Configuration",permalink:"/jersey-webservice-template/docs/configuration"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Running Tests",id:"running-tests",level:2},{value:"Packaging",id:"packaging",level:2},{value:"Running Webservice in Docker Compose",id:"running-webservice-in-docker-compose",level:2},{value:"Step 1: Defining Data Models",id:"step-1-defining-data-models",level:3},{value:"Step 2: Spinning Up Docker Compose",id:"step-2-spinning-up-docker-compose",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Database Does Not Have My Model Packages&#39;s Bean Table",id:"database-does-not-have-my-model-packagess-bean-table",level:4},{value:"Entity Missing Default Constructor",id:"entity-missing-default-constructor",level:3},{value:"How to Exclude GraphQL Feature",id:"how-to-exclude-graphql-feature",level:3},{value:"Unknown database &#39;elide&#39;",id:"unknown-database-elide",level:3},{value:"Querying Webservice",id:"querying-webservice",level:2},{value:"GraphQL Queries through GraphiQL",id:"graphql-queries-through-graphiql",level:3},{value:"Install GraphiQL (on Mac)",id:"install-graphiql-on-mac",level:4},{value:"Quering GraphQL Endpoint",id:"quering-graphql-endpoint",level:4},{value:"TypeScript/JavaScript Axios",id:"typescriptjavascript-axios",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The following guide is intended to help developers who maintain or want to make changes to the\n",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/jersey-webservice-template/",children:"Jersey Webservice Template"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/jersey-webservice-template/",children:"Jersey Webservice Template"})," (",(0,s.jsx)(n.em,{children:"JWT"}),") delegates JPA capabilities to ",(0,s.jsx)(n.a,{href:"https://elide.io/",children:"Elide"})," and configures Elide through 2 required\nElide ",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/jersey/ioc.html",children:"bindings"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/Elide.java",children:"Elide"})})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://github.com/yahoo/elide/blob/master/elide-core/src/main/java/com/yahoo/elide/ElideSettings.java",children:"ElideSettings"})})," with 2 extra sub-bindings:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"EntityDictionary"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"DataStore"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The binding is referencing ",(0,s.jsx)(n.a,{href:"https://github.com/yahoo/elide/tree/master/elide-standalone",children:"Elide Standalone"})," in the following way:"]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["Although the Jersey binder wraps HK2 binder, we\n",(0,s.jsxs)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-template/pull/29/files#diff-afa024cc2643aaf681db505cac24b8601c94931290718993392e7726001b1559L39-R40",children:["must pick the ",(0,s.jsx)(n.em,{children:"Jersey binder"})," for binding Elide resources"]}),",\notherwise, dependency injection will flaky and not right."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Error loading resource-binding.png",src:i(9492).Z+"",width:"4614",height:"1326"})}),"\n",(0,s.jsx)(n.h2,{id:"running-tests",children:"Running Tests"}),"\n",(0,s.jsxs)(n.p,{children:["The IT tests will run against an ",(0,s.jsx)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-template-jpa-data-models/blob/master/src/main/java/com/qubitpi/ws/jersey/template/models/Book.java",children:"example model"})," so make sure the following environment variable is set to point to this\nmodel:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export TEST_MODEL_PACKAGE_NAME=com.qubitpi.ws.jersey.template.models\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, download the ",(0,s.jsx)(n.a,{href:"data-model",children:"data model"})," to ",(0,s.jsx)(n.em,{children:"CLASSPATH"})," by setting up the following ",(0,s.jsx)(n.code,{children:"~/.m2/settings.xml"})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/jersey-webservice-template/",children:"JWT"})," ships with an example ",(0,s.jsx)(n.code,{children:"settings.xml"})," which contains exactly the same settings as the one below. As an\nalternative, we could simply run"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd jersey-webservice-template\ncp settings.xml.example ~/.m2/settings.xml\n"})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"\n          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0\n                      http://maven.apache.org/xsd/settings-1.0.0.xsd">\n\n    <profiles>\n        <profile>\n            <id>data-models</id>\n            <properties>\n                <model.package.jar.group.id>com.qubitpi</model.package.jar.group.id>\n                <model.package.jar.artifact.id>\n                   jersey-webservice-template-jpa-data-models\n                </model.package.jar.artifact.id>\n                <model.package.jar.version>1.0.0</model.package.jar.version>\n            </properties>\n        </profile>\n    </profiles>\n\n    <activeProfiles>\n        <activeProfile>data-models</activeProfile>\n    </activeProfiles>\n</settings>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then execute the following commands to run both unit and integration tests:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn clean verify\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For IT tests, we use ",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/testcontainers-java/",children:"Testcontainers"})," instead of ",(0,s.jsx)(n.a,{href:"https://mysql.jcabi.com/",children:"jcabi-mysql"})," because the latter is hard to configure and debug and\n",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/testcontainers-java/",children:"Testcontainers"})," support more types of db, such as mongo"]}),"\n",(0,s.jsx)(n.h2,{id:"packaging",children:"Packaging"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn clean package\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/WAR_(file_format)",children:"WAR file"})," named ",(0,s.jsx)(n.strong,{children:"jersey-webservice-template-1.0-SNAPSHOT.war"})," will\nbe generated under ",(0,s.jsx)(n.em,{children:"target"})," directory for\n",(0,s.jsx)(n.a,{href:"../development#running-webservice-in-standalone-jetty-production",children:"running in Jetty"})]}),"\n",(0,s.jsx)(n.h2,{id:"running-webservice-in-docker-compose",children:"Running Webservice in Docker Compose"}),"\n",(0,s.jsxs)(n.p,{children:["Jersey Webservice Template can run in ",(0,s.jsx)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-template/blob/jpa-elide/docker-compose.yml",children:"Docker Compose"})," for the following purposes"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Decoupling frontend and backend developments"}),"\n",(0,s.jsx)(n.li,{children:"Making it easy to run E2E testing of Jersey Webservice Template-backed application in CI/CD"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Docker Compose is intended for local development and testing purposes ONLY! ",(0,s.jsx)(n.em,{children:"It is strongly discouraged to run it in\nproduction!"})]})}),"\n","\n","\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsx)("img",{src:a,width:"50%",alt:"Error Loading docker-compose.png"})}),"\n",(0,s.jsx)(n.h3,{id:"step-1-defining-data-models",children:"Step 1: Defining Data Models"}),"\n",(0,s.jsxs)(n.p,{children:["To inject ",(0,s.jsx)(n.a,{href:"https://github.com/yahoo/elide/tree/master/elide-standalone#create-models",children:"Elide model package"}),", simply put\nthe models in a separate JAR and include it as a dependency in POM. If the model package is internal and cannot be\nvisible publicly, either make project private or public with model package dependency info\n",(0,s.jsx)(n.a,{href:"https://maven.apache.org/examples/injecting-properties-via-settings.html",children:"injected via settings.xml"}),", for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<project>\n    ...\n\n    <dependencies>\n        <dependency>\n            <groupId>${model.package.jar.group.id}</groupId>\n            <artifactId>${model.package.jar.artifact.id}</artifactId>\n            <version>${model.package.jar.version}</version>\n        </dependency>\n    </dependencies>\n\n    ...\n</project>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["with a corresponding ",(0,s.jsx)(n.code,{children:"~/.m2/settings.xml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"\n          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0\n                      http://maven.apache.org/xsd/settings-1.0.0.xsd">\n\n    <profiles>\n        <profile>\n            <id>data-models</id>\n            <properties>\n                <model.package.jar.group.id>com.mycompnay</model.package.jar.group.id>\n                <model.package.jar.artifact.id>my-model-package</model.package.jar.artifact.id>\n                <model.package.jar.version>1.0.7</model.package.jar.version>\n            </properties>\n        </profile>\n    </profiles>\n\n\n    <activeProfiles>\n        <activeProfile>data-models</activeProfile>\n    </activeProfiles>\n\n    <servers>\n        ...\n    </servers>\n</settings>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Lastly, if IntelliJ IDE is used for developing ",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/jersey-webservice-template/",children:"JWT"}),", please make sure to let IDE pick up the ",(0,s.jsx)(n.code,{children:"~/.m2/settings.xml"})," by\nunchecking the ",(0,s.jsx)(n.em,{children:"Use settings from .mvn/maven.config"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Error loading load-m2-settings.png",src:i(386).Z+"",width:"3584",height:"2240"})}),"\n",(0,s.jsx)(n.h3,{id:"step-2-spinning-up-docker-compose",children:"Step 2: Spinning Up Docker Compose"}),"\n",(0,s.jsx)(n.p,{children:"Simply run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/QubitPi/jersey-webservice-template.git\ncd jersey-webservice-template\ngit checkout jpa-elide\nmvn clean package\nMODEL_PACKAGE_NAME=com.mycompany.models docker compose up --build --force-recreate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The following ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/compose/environment-variables/",children:"Docker Compose environment variables"})," can be ",(0,s.jsx)(n.a,{href:"https://stackoverflow.com/a/58900415",children:"passed"})," into Docker\nCompose file:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["(",(0,s.jsx)(n.strong,{children:"required"}),") ",(0,s.jsx)(n.code,{children:"MODEL_PACKAGE_NAME"})," is the package in config JAR that contains all\n",(0,s.jsx)(n.a,{href:"https://elide.io/pages/guide/v7/02-data-model.html",children:"elide models"}),". In the example above, we assign the package\n",(0,s.jsx)(n.code,{children:"com.mycompany.models"})," to it"]}),"\n",(0,s.jsxs)(n.li,{children:["(optional) ",(0,s.jsx)(n.code,{children:"MYSQL_INIT_SCRIPT_PATH"})," is the path (absolute or relative) to the\n",(0,s.jsx)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-template/blob/jpa-elide/mysql-init.sql",children:"MySQL init script"}),". ",(0,s.jsxs)(n.em,{children:["By default, its value is ",(0,s.jsx)(n.code,{children:"./mysql-init.sql"})]}),". This option is very useful\nwhen Docker Compose is running inside Docker (Docker-in-Docker), in which case ",(0,s.jsx)(n.code,{children:"MYSQL_INIT_SCRIPT_PATH"})," is not the\npath in Docker but the path on the host machine. Exposing this mount source allows Docker Compose to successfully\npick up the MySQL init script from within the Docker-in-Docker."]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"The MySQL database, if running correctly, can be accessed from host machine via"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mysql -h localhost -P 3306 -D elide --protocol=tcp -u root -proot\n"})}),(0,s.jsxs)(n.p,{children:["Note all data is in ",(0,s.jsx)(n.code,{children:"elide"})," database which we have specified to use in the command above."]})]}),"\n",(0,s.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.h4,{id:"database-does-not-have-my-model-packagess-bean-table",children:"Database Does Not Have My Model Packages's Bean Table"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"If tests is running in IntelliJ IDE"}),", make sure the model package JAR it is in IDE's ",(0,s.jsx)(n.strong,{children:"External Libraries"})]}),"\n",(0,s.jsxs)(n.p,{children:["Otherwise, the dependency injection didn't find a bean class under the package specified by\n",(0,s.jsx)(n.a,{href:"#step-1-defining-data-models",children:"JWT_MODEL_PACKAGE_NAME"})]}),"\n",(0,s.jsx)(n.h3,{id:"entity-missing-default-constructor",children:"Entity Missing Default Constructor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[main] INFO  o.h.m.i.EntityInstantiatorPojoStandard - HHH000182: No default (no-argument) constructor for\nclass: ... (class must be instantiated by Interceptor)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Simply add a no-args constructor to the bean class."}),"\n",(0,s.jsx)(n.h3,{id:"how-to-exclude-graphql-feature",children:"How to Exclude GraphQL Feature"}),"\n",(0,s.jsx)(n.p,{children:"To optionally disable GraphQL endpoints, exclude corresponding dependencies in POM. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"        <dependency>\n            <groupId>com.yahoo.elide</groupId>\n            <artifactId>elide-core</artifactId>\n            <version>7.0.0-pr6</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>com.yahoo.elide</groupId>\n                    <artifactId>elide-graphql</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"unknown-database-elide",children:"Unknown database 'elide'"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Error loading unknown-database.png",src:i(8448).Z+"",width:"3584",height:"2240"})}),"\n",(0,s.jsxs)(n.p,{children:["Docker Compose mounts a ",(0,s.jsx)(n.a,{href:"https://github.com/QubitPi/jersey-webservice-template/blob/jpa-elide/mysql-init.sql",children:"database init script"}),' which creates a database named "elide". The Docker Compose uses the\nofficial MySQL Docker image, which would pick up this script to initialize database. All should happen automatically\nwhen we "docker compose up".']}),"\n",(0,s.jsxs)(n.p,{children:["Given that, one possibility we still see this error is some problematic Docker volume from previous runs is corrupting\nour current database. ",(0,s.jsx)(n.a,{href:"https://stackoverflow.com/a/39765233",children:(0,s.jsx)(n.strong,{children:"We should clear database volume and try again"})})]}),"\n",(0,s.jsx)(n.h2,{id:"querying-webservice",children:"Querying Webservice"}),"\n",(0,s.jsx)(n.h3,{id:"graphql-queries-through-graphiql",children:"GraphQL Queries through GraphiQL"}),"\n",(0,s.jsx)(n.h4,{id:"install-graphiql-on-mac",children:"Install GraphiQL (on Mac)"}),"\n",(0,s.jsxs)(n.p,{children:["via ",(0,s.jsx)(n.a,{href:"https://formulae.brew.sh/cask/graphiql",children:"Homebrew"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install --cask graphiql\n"})}),"\n",(0,s.jsx)(n.h4,{id:"quering-graphql-endpoint",children:"Quering GraphQL Endpoint"}),"\n",(0,s.jsx)(n.p,{children:"Let's crete a book:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  book(op: UPSERT, data:{title: "Pride & Prejudice"}) {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Error loading graphiql-mutation-example.png",src:i(4153).Z+"",width:"3584",height:"945"})}),"\n",(0,s.jsx)(n.p,{children:"We can create few more books, sort and paginate them with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'{\n  book(sort: "-id", first: "1", after: "0") {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n    pageInfo {\n      totalRecords\n      startCursor\n      endCursor\n      hasNextPage\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"typescriptjavascript-axios",children:"TypeScript/JavaScript Axios"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Note that any serialization of TS/JS object (",(0,s.jsx)(n.code,{children:"someObject"}),") should be done with\n",(0,s.jsx)(n.code,{children:"JSON.stringify(someObject).replace(/\"/g, '\\\\\"')"}),", otherwise the GraphQL query won't be parsed properly by webservice."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import axios from "axios";\n\nconst JERSEY_WEBSERVICE_TEMPLATE_GRAPHQL_API_ENDPOINT = "https://myservice.com/v1/data";\n\nexport class Client {\n  public saveOrUpdate(book: Book, userId: string, accessToken: string): Promise<any> {\n    const someJsonField = JSON.stringify({ field1: book.field1, field2: book.field2 }).replace(/"/g, \'\\\\"\');\n\n    return this.postGraphQLQuery(\n      `\n      mutation saveGraph {\n        graph(op: UPSERT, data: {\n          id: "${book.id}"\n          title: "${book.title}"\n          authorId: "${book.authorId}"\n          jsonField: "${someJsonField}"\n        }) {\n          edges {\n            node {\n              id\n              title\n              author\n            }\n          }\n        }\n      }\n      `,\n      accessToken\n    );\n  }\n\n  public getBooksByAuthorId(authorId: string, accessToken: string) {\n    return this.postGraphQLQuery(\n      `\n      query getBooksByAuthorId {\n        book(filter:"authorId==${authorId}") {\n          edges {\n            node {\n              id\n              title\n            }\n          }\n        }\n      }\n      `,\n      accessToken\n    );\n  }\n\n  private postGraphQLQuery(query: string, accessToken: string): Promise<any> {\n    return axios\n      .post(JERSEY_WEBSERVICE_TEMPLATE_GRAPHQL_API_ENDPOINT, { query: query }, this.getHeaders(accessToken))\n      .then((response) => {\n        return response;\n      });\n  }\n\n  private getHeaders(token: string) {\n    return {\n      headers: {\n        Accept: "application/json",\n        "Content-Type": "application/json",\n        Authorization: "Bearer " + token,\n      },\n    };\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Error loading graphiql-query-example.png",src:i(1315).Z+"",width:"3584",height:"1130"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4153:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/graphiql-mutation-example-747c388455a51d3a6bb4f1aa9242f3b7.png"},1315:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/graphiql-query-example-0d46b23372447e19258d690477ac279a.png"},386:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/load-m2-settings-8c90138e53bba78c2a44ea1c6304f377.png"},9492:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/resource-binding-2533e561b79d9ea06fb735525b6077df.png"},8448:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/unknown-database-01a0d2d915d7ddbf95566de69d90b46a.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var s=i(7294);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);