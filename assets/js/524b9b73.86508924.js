"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1746],{8955:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(5893),n=s(1151);const r={sidebar_position:10,title:"Configuration"},o=void 0,a={id:"elide/configuration",title:"Configuration",description:"[//]: # (Copyright Jiaqi Liu)",source:"@site/docs/elide/configuration.md",sourceDirName:"elide",slug:"/elide/configuration",permalink:"/jersey-webservice-template/docs/elide/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/elide/configuration.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"OpenAPI",permalink:"/jersey-webservice-template/docs/elide/openapi"},next:{title:"Performance",permalink:"/jersey-webservice-template/docs/elide/performance"}},c={},d=[{value:"Core Properties",id:"core-properties",level:2},{value:"JPA DataStore",id:"jpa-datastore",level:2},{value:"CI/CD",id:"cicd",level:2},{value:"CI/CD Chain",id:"cicd-chain",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The configurations in this page can be set from several sources in the following order:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["the ",(0,i.jsx)(t.a,{href:"https://docs.oracle.com/javase/tutorial/essential/environment/env.html",children:"operating system's environment variables"}),"; for instance, an environment variable can be set with\n",(0,i.jsx)(t.code,{children:'export OAUTH_ENABLED="true"'})]}),"\n",(0,i.jsxs)(t.li,{children:["the ",(0,i.jsx)(t.a,{href:"https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html",children:"Java system properties"}),"; for example, a Java system property can be set using\n",(0,i.jsx)(t.code,{children:'System.setProperty("OAUTH_ENABLED", "true")'})]}),"\n",(0,i.jsxs)(t.li,{children:["a ",(0,i.jsx)(t.strong,{children:".properties"})," file placed under CLASSPATH. This file can be put under ",(0,i.jsx)(t.code,{children:"src/main/resources"})," source directory with\ncontents, for example, ",(0,i.jsx)(t.code,{children:"OAUTH_ENABLED=true"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"core-properties",children:"Core Properties"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The following configurations can be placed in the properties file called ",(0,i.jsx)(t.strong,{children:"application.properties"})]})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"MODEL_PACKAGE_NAME"}),": The fully qualified package name that contains a set of Elide JPA models"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"jpa-datastore",children:"JPA DataStore"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The following configurations can be placed in the properties file called ",(0,i.jsx)(t.strong,{children:"jpadatastore.properties"})]})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DB_USER"}),": Persistence DB username (needs have both Read and Write permissions)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DB_PASSWORD"}),": The persistence DB user password."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DB_URL"}),': The persistence DB URL, such as "jdbc:mysql://localhost/elide?serverTimezone=UTC".']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DB_DRIVER"}),': The SQL DB driver class name, such as "com.mysql.jdbc.Driver".']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DB_DIALECT"}),': The SQL DB dialect name, such as "org.hibernate.dialect.MySQLDialect".']}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"cicd",children:"CI/CD"}),"\n",(0,i.jsxs)(t.p,{children:["In addition to the ones mentioned in ",(0,i.jsx)(t.a,{href:"../configuration#cicd",children:"general CI/CD configs"}),", these\n",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets",children:"GitHub Action Secrets"})," needs to be setup:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Secret Name"}),(0,i.jsx)(t.th,{children:"Definition"}),(0,i.jsx)(t.th,{children:"How to Get"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"APPLICATION_PROPERTIES"}),(0,i.jsxs)(t.td,{children:["The contents of the ",(0,i.jsx)(t.code,{children:"src/main/resources/application.properties"})," mentioned above"]}),(0,i.jsxs)(t.td,{children:["See ",(0,i.jsx)(t.a,{href:"#core-properties",children:"Core Properties"})," section above"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"JPADATASTORE_PROPERTIES"}),(0,i.jsxs)(t.td,{children:["The contents of the ",(0,i.jsx)(t.code,{children:"src/main/resources/jpadatastore.properties"})," mentioned above"]}),(0,i.jsxs)(t.td,{children:["See ",(0,i.jsx)(t.a,{href:"#jpa-datastore",children:"JPA DataStore"})," section above"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DATA_MODELS_PRIVATE_REPO_TOKEN"}),(0,i.jsx)(t.td,{children:'The GitHub Fine-grained token with at least "Read access to code and metadata" repository permissions to the Elide data models repo'}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token",children:"Creating a fine-grained personal access token"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DATA_MODELS_PRIVATE_REPO_ORG"}),(0,i.jsx)(t.td,{children:"The org/user name of the GitHub repo for Elide data models"}),(0,i.jsxs)(t.td,{children:["For ",(0,i.jsx)(t.a,{href:"https://github.com/QubitPi/jersey-webservice-template-jpa-data-models",children:"this example"}),', DATA_MODELS_PRIVATE_REPO_ORG is "QubitPi"']})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DATA_MODELS_PRIVATE_REPO_NAME"}),(0,i.jsx)(t.td,{children:"The name of the GitHub repo for Elide data models"}),(0,i.jsxs)(t.td,{children:["For ",(0,i.jsx)(t.a,{href:"https://github.com/QubitPi/jersey-webservice-template-jpa-data-models",children:"this example"}),', DATA_MODELS_PRIVATE_REPO_NAME is "jersey-webservice-template"']})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"cicd-chain",children:"CI/CD Chain"}),"\n",(0,i.jsxs)(t.p,{children:["Jersey Webservice Templates adopts the best CI/CD strategies by incorporating its sister projects, [jersey-webservice-template-jpa-data-models] and\n[jersey-webservice-template-jpa-data-models-acceptance-tests], into its CI/CD pipeline. Any PR merge into ",(0,i.jsx)(t.code,{children:"jpa-elide"})," branch will trigger the\n",(0,i.jsx)(t.a,{href:"https://github.com/QubitPi/jersey-webservice-template-jpa-data-models/actions",children:"CI/CD of its data model"}),", which then triggers\n",(0,i.jsx)(t.a,{href:"https://github.com/QubitPi/jersey-webservice-template-jpa-data-models-acceptance-tests/actions",children:"CI/CD of data model's acceptance tests"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The triggering of its direct downstream project is done through GitHub Actions. See the ",(0,i.jsx)(t.strong,{children:"triggering"})," job in [CI/CD definition file]. Basically, the triggering is proxied to\n[peter-evans/repository-dispatch]:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"  triggering:\n    name: Triggering data model CI/CD\n    runs-on: ubuntu-latest\n    steps:\n      - name: Trigger data model CI/CD\n        uses: peter-evans/repository-dispatch@v2\n        with:\n          token: ${{ secrets.MY_DATA_MODEL_CICD_TRIGGER }}\n          repository: my-org/my-data-model-repo\n          event-type: my-webservice-repo-changes\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>o});var i=s(7294);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);