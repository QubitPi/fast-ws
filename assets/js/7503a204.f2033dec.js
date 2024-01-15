"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3799],{265:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=i(5893),t=i(1151);const o={sidebar_position:7,title:"Logging & Audit",description:"Configuring logging & audit"},a=void 0,r={id:"elide/audit",title:"Logging & Audit",description:"Configuring logging & audit",source:"@site/docs/elide/audit.md",sourceDirName:"elide",slug:"/elide/audit",permalink:"/jersey-webservice-template/docs/elide/audit",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/elide/audit.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Logging & Audit",description:"Configuring logging & audit"},sidebar:"tutorialSidebar",previous:{title:"Async API",permalink:"/jersey-webservice-template/docs/elide/clientapis/asyncapi"},next:{title:"OpenAPI",permalink:"/jersey-webservice-template/docs/elide/openapi"}},l={},d=[{value:"Logging",id:"logging",level:2},{value:"Elide JPQL/HQL Logging",id:"elide-jpqlhql-logging",level:3},{value:"Query Latency Logging",id:"query-latency-logging",level:3},{value:"Elide Error Response Logging",id:"elide-error-response-logging",level:3},{value:"Elide Error Response Entity Bodies",id:"elide-error-response-entity-bodies",level:3},{value:"Hibernate SQL Logging",id:"hibernate-sql-logging",level:3},{value:"Analytic Query Logging",id:"analytic-query-logging",level:3},{value:"Audit",id:"audit",level:2},{value:"Core Concepts",id:"core-concepts",level:3},{value:"Annotations",id:"annotations",level:3},{value:"Example",id:"example",level:3},{value:"Customizing Logging",id:"customizing-logging",level:3},{value:"Logger Implementation",id:"logger-implementation",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,s.jsx)(n.p,{children:"Elide emits a number of useful log messages that can aid in debugging. This section will cover common configurations to\ncapture Elide's most useful messages. It will also cover common logging tasks outside Elide including HTTP\nrequest/response logging, request tracing, and database query logging. All examples use logback. However, most of the\nconcepts apply regardless of the logging framework used."}),"\n",(0,s.jsx)(n.h3,{id:"elide-jpqlhql-logging",children:"Elide JPQL/HQL Logging"}),"\n",(0,s.jsxs)(n.p,{children:["When using the JPA or Hibernate datastores, Elide generates\n",(0,s.jsx)(n.a,{href:"https://docs.oracle.com/html/E13946_04/ejb3_langref.html",children:"HQL/JPQL"})," queries that are sent to the\n",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Object-relational_mapping",children:"ORM"})," layer. These queries are similar to SQL but they use the\nmodel names instead of physical table names."]}),"\n",(0,s.jsx)(n.p,{children:"To enable logging to see these queries, set the following property (based on the data store) to DEBUG:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'\x3c!-- Log JPA Datastore JPQL Statements --\x3e\n<logger name="com.yahoo.elide.datastores.jpql.query.DefaultQueryLogger" level="DEBUG" />\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'\x3c!-- Log Hibernate 5 Datastore HQL Statements --\x3e\n<logger name="com.yahoo.elide.datastores.hibernate5.porting.SessionWrapper level="DEBUG" />\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'\x3c!-- Log Hibernate 3 Datastore HQL Statements --\x3e\n<logger name="com.yahoo.elide.datastores.hibernate3.porting.SessionWrapper level="DEBUG" />\n'})}),"\n",(0,s.jsx)(n.p,{children:"This will enable logs similar to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Query Hash: 1839872383  HQL Query: SELECT example_models_ArtifactGroup FROM example.models.ArtifactGroup AS example_models_ArtifactGroup\n"})}),"\n",(0,s.jsx)(n.h3,{id:"query-latency-logging",children:"Query Latency Logging"}),"\n",(0,s.jsx)(n.p,{children:"To get information about how long Elide JPQL or analytic queries are taking, we can enable timings:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'\x3c!-- Log SQL/JPQL Query Latencies --\x3e\n<logger name="com.yahoo.elide.core.utils.TimedFunction" level="DEBUG" />\n'})}),"\n",(0,s.jsx)(n.p,{children:"This will enable logs similar to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Query Hash: 1839872383        Time spent: 14\n"})}),"\n",(0,s.jsx)(n.p,{children:"Not the query hash matches the JPQL log statement. The time spent is given in milliseconds."}),"\n",(0,s.jsx)(n.h3,{id:"elide-error-response-logging",children:"Elide Error Response Logging"}),"\n",(0,s.jsx)(n.p,{children:"To get extra information why a particular error was returned to a client, enable the following properties to DEBUG:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'\x3c!-- Log HTTP Error Explanations --\x3e\n<logger name="com.yahoo.elide.graphql.QueryRunner" level="DEBUG" />\n<logger name="com.yahoo.elide.Elide" level="DEBUG" />\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This is particularly helpful to understand what permissions in a complex permission rule have passed, failed, or were\nnot evaluated. For example, the following indicates that ",(0,s.jsx)(n.em,{children:"'User is Admin'"})," permission rule failed:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"ForbiddenAccessException: Message=CreatePermission: CREATE PERMISSION WAS INVOKED ON PersistentResource{type=post, id=2}\nWITH CHANGES ChangeSpec { resource=PersistentResource{type=post, id=2}, field=abusiveContent, original=false,\nmodified=true} FOR EXPRESSION [FIELD((User is Admin FAILED))]    Mode=Optional[ALL_CHECKS]    Expression=[Optional\n[CREATE PERMISSION WAS INVOKED ON PersistentResource{type=post, id=2} WITH CHANGES ChangeSpec {\nresource=PersistentResource{type=post, id=2}, field=abusiveContent, original=false, modified=true} FOR EXPRESSION\n[FIELD((User is Admin FAILED))]]]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"elide-error-response-entity-bodies",children:"Elide Error Response Entity Bodies"}),"\n",(0,s.jsx)(n.p,{children:"It is also possible to return these verbose messages as an entity body in HTTP requests that failed due to\nAuthorization:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-HTTP",children:'HTTP/1.1 403 Forbidden\nDate: Sat, 14 Dec 2019 03:33:08 GMT\nContent-Type: application/vnd.api+json\nContent-Length: 291\nServer: Jetty(9.4.24.v20191120)\n\n{\n    "errors": [\n        "CreatePermission: CREATE PERMISSION WAS INVOKED ON PersistentResource{type=post, id=2} WITH CHANGES ChangeSpec\n        { resource=PersistentResource{type=post, id=2}, field=abusiveContent, original=false, modified=true} FOR\n        EXPRESSION [FIELD((User is Admin FAILED))]"\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"By default these descriptions are disabled. They can be turned on in Elide Settings"}),"\n",(0,s.jsx)(n.h3,{id:"hibernate-sql-logging",children:"Hibernate SQL Logging"}),"\n",(0,s.jsx)(n.p,{children:"We can configure Hibernate to display the SQL commands it runs including the parameters it binds to prepared statements:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'\x3c!-- Log Hibernate SQL Statements --\x3e\n<logger name="org.hibernate.SQL" level="DEBUG" />\n<logger name="org.hibernate.type.descriptor.sql.BasicBinder" level="TRACE" />\n'})}),"\n",(0,s.jsx)(n.p,{children:"This will produce logs like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"select products0_.group_name as group_na4_1_0_, products0_.name as name1_1_0_, products0_.name as name1_1_1_,\nproducts0_.commonName as commonNa2_1_1_, products0_.description as descript3_1_1_, products0_.group_name as\ngroup_na4_1_1_ from ArtifactProduct products0_ where products0_.group_name=?\nbinding parameter [1] as [VARCHAR] - [com.yahoo.elide]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Be sure to configure Hibernate to show SQL in the JDBC configuration as well:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'@Override\npublic Properties getDatabaseProperties() {\n    Properties options = new Properties();\n    ...\n\n    options.put("hibernate.show_sql", "true");\n    return options;\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"analytic-query-logging",children:"Analytic Query Logging"}),"\n",(0,s.jsxs)(n.p,{children:["Analytic queries are logged by the ",(0,s.jsx)(n.code,{children:"AggregationDataStore"})," directly. To log the generated SQL and other information,\nenable the following property to DEBUG:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'\x3c!-- Log Analytic SQL Queries --\x3e\n<logger name="com.yahoo.elide.datastores.aggregation.core.Slf4jQueryLogger" level="DEBUG" />\n'})}),"\n",(0,s.jsx)(n.p,{children:"Result log files will look like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'30-10-2020 16:23:12.301 [task-1] [Elide, 1f7de407f8554500] DEBUG c.y.e.d.a.core.Slf4jQueryLogger.log - QUERY ACCEPTED:\n{"id":"5c9a1f64-09fa-451c-87f7-c0bcb2b76135","user":"Unknown","apiVersion":"","path":"/downloads","headers":{}}\n30-10-2020 16:23:12.327 [task-1] [Elide, 1f7de407f8554500] DEBUG c.y.e.d.a.core.Slf4jQueryLogger.log - QUERY RUNNING:\n{"id":"5c9a1f64-09fa-451c-87f7-c0bcb2b76135","queries":["SELECT SUM(dynamicconfig_models_Downloads.downloads) AS\ndownloads,dynamicconfig_models_Downloads_artifactProduct.name AS product,dynamicconfig_models_Downloads_artifactGroup.\nname AS groupy,dynamicconfig_models_Downloads.date AS date FROM downloads AS dynamicconfig_models_Downloads LEFT JOIN\nArtifactProduct AS dynamicconfig_models_Downloads_artifactProduct ON dynamicconfig_models_Downloads.product_id =\ndynamicconfig_models_Downloads_artifactProduct.name LEFT JOIN ArtifactGroup AS\ndynamicconfig_models_Downloads_artifactGroup ON dynamicconfig_models_Downloads.group_id =\ndynamicconfig_models_Downloads_artifactGroup.name  GROUP BY dynamicconfig_models_Downloads_artifactProduct.name,\ndynamicconfig_models_Downloads_artifactGroup.name, dynamicconfig_models_Downloads.date   LIMIT 500 OFFSET 0"],\n"isCached":false}\n30-10-2020 16:23:12.338 [task-1] [Elide, 1f7de407f8554500] DEBUG c.y.e.d.a.core.Slf4jQueryLogger.log - QUERY COMPLETE:\n{"id":"5c9a1f64-09fa-451c-87f7-c0bcb2b76135","status":200,"error":null}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"audit",children:"Audit"}),"\n",(0,s.jsx)(n.p,{children:"Elide provides an Audit mechanism that assigns semantic meaning to CRUD operations for the purposes of logging and\naudit. For example, we may want to log when users change their password or when an account is locked. Both actions are\nmutations on a user entity that update different fields. Audit can assign these actions to parameterized, human readable\nlogging statements that can be logged to a file, written to a database, etc."}),"\n",(0,s.jsx)(n.h3,{id:"core-concepts",children:"Core Concepts"}),"\n",(0,s.jsxs)(n.p,{children:["A model's ",(0,s.jsx)(n.strong,{children:"lineage"})," is the path taken through the entity relationship graph to reach it. A model and every prior model\nin its lineage are fully accessible to parameterize audit logging in Elide."]}),"\n",(0,s.jsx)(n.h3,{id:"annotations",children:"Annotations"}),"\n",(0,s.jsxs)(n.p,{children:["Elide audits operations on classes and class fields marked with the ",(0,s.jsx)(n.code,{children:"Audit"})," annotation."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Audit"})," annotation takes several arguments:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The CRUD action performed (CREATE, DELETE, or UPDATE)."}),"\n",(0,s.jsx)(n.li,{children:"An operation code which uniquely identifies the semantic meaning of the action."}),"\n",(0,s.jsxs)(n.li,{children:["The statement to be logged. This is a template string that allows '","' variable substitution."]}),"\n",(0,s.jsxs)(n.li,{children:["An ordered list of ",(0,s.jsx)(n.a,{href:"https://uel.java.net/",children:"Unified Expression Language"})," expressions that are used to substitute '","'\nin the log statement. Elide binds the model that is being audited and every model in its lineage to variables that\nare accessible to the UEL expressions. The variable names map to model's type (typically the class name)."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Let's say we have a simple ",(0,s.jsx)(n.em,{children:"user"})," entity with a ",(0,s.jsx)(n.em,{children:"password"})," field. We want to audit whenever the password is changed. The\nuser is accessed via the URL path '/company/53/user/21'. We could annotate this action as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'@Entity\n@Include\npublic class User {\n\n    @Audit(action = Audit.Action.UPDATE,\n           operation = 572,\n           logStatement = "User {0} from company {1} changed password.",\n           logExpressions = {"${user.userid}", "${company.name}"})\n    private String password;\n    private String userid;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Elide binds the ",(0,s.jsx)(n.code,{children:"User"})," object to the variable name ",(0,s.jsx)(n.em,{children:"user"})," and the ",(0,s.jsx)(n.code,{children:"Company"})," object to the variable name ",(0,s.jsx)(n.em,{children:"company"}),". The\n",(0,s.jsx)(n.code,{children:"Company"})," object is bound because it belongs to the ",(0,s.jsx)(n.code,{children:"User"})," object's lineage."]}),"\n",(0,s.jsx)(n.h3,{id:"customizing-logging",children:"Customizing Logging"}),"\n",(0,s.jsx)(n.p,{children:"Customizing audit functionality in Elide requires two steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Define audit annotations on JPA entity classes and fields."}),"\n",(0,s.jsxs)(n.li,{children:["Provide a Logger implementation to customize the handling of audit triggers. The default logger simply logs to\n",(0,s.jsx)(n.a,{href:"http://www.slf4j.org/",children:"slf4j"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"logger-implementation",children:"Logger Implementation"}),"\n",(0,s.jsx)(n.p,{children:"A customized logger extends the following abstract class:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public abstract class AuditLogger {\n\n    public void log(LogMessage message);\n    public abstract void commit() throws IOException;\n}\n"})})]})}function g(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var s=i(7294);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);