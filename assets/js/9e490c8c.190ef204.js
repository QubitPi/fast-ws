"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1212],{5328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(4848),r=n(8453);const a={sidebar_position:12,title:"Performance",description:"Tips on improving webservice performance"},s=void 0,o={id:"elide/performance",title:"Performance",description:"Tips on improving webservice performance",source:"@site/docs/elide/performance.md",sourceDirName:"elide",slug:"/elide/performance",permalink:"/jersey-webservice-template/docs/elide/performance",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/elide/performance.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Performance",description:"Tips on improving webservice performance"},sidebar:"tutorialSidebar",previous:{title:"Test",permalink:"/jersey-webservice-template/docs/elide/test"},next:{title:"Configuration",permalink:"/jersey-webservice-template/docs/elide/configuration"}},l={},c=[{value:"N+1 Problem",id:"n1-problem",level:2},{value:"Overview",id:"overview",level:3},{value:"Solution",id:"solution",level:3},{value:"Security Checks",id:"security-checks",level:2},{value:"ORM-isms",id:"orm-isms",level:2},{value:"Database-isms",id:"database-isms",level:2},{value:"Text Search",id:"text-search",level:2},{value:"JPQL Fragment Override",id:"jpql-fragment-override",level:3},{value:"Bespoke Field Sets",id:"bespoke-field-sets",level:2},{value:"AggregationDataStore Cache",id:"aggregationdatastore-cache",level:2},{value:"With Spring Configuration",id:"with-spring-configuration",level:3},{value:"With Standalone Configuration",id:"with-standalone-configuration",level:3},{value:"Query Versions",id:"query-versions",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"n1-problem",children:"N+1 Problem"}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["The N+1 problem is a performance issue where an ORM issues a large number of database queries to fetch a parent/child\nrelationship. The ORM issues a single query to hydrate the parent and then ",(0,i.jsx)(t.em,{children:"N"})," queries to hydrate the children."]}),"\n",(0,i.jsx)(t.p,{children:"Most ORMs solve this problem by providing a number of different fetching strategies that are enabled when a proxy object\nor collection is hydrated. These strategies fall into one of two categories:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"A join is used to fetch both the parent and the children in a single query. The ORM populates its session cache with\nall entities fetched in the join. Joining works well for fetching singular relationships. It is important to note\nthat a singular join that fetches an entire subgraph (spanning multiple relationships) is impractical and would break\nrow based pagination (offset & limit). Furthermore, large joins put considerable memory stress on the ORM server\nbecause of the width of the records."}),"\n",(0,i.jsx)(t.li,{children:"Instead of a single query per element of a collection, the number of queries is reduced by fetching multiple children\nin fewer queries."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These strategies may or not be available to the developer depending on how the ORM is leveraged. If the developer\ninteracts with a proxy object directly, all fetch strategies are available. However, the SQL queries generated from\nproxy objects cannot be customized with additional filters, sorting, or pagination."}),"\n",(0,i.jsx)(t.p,{children:"Alternatively, the developer can have complete control over the query by writing JPQL or Criteria queries. However, only\njoin fetching is available through these APIs."}),"\n",(0,i.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(t.p,{children:"Because Elide has to work well under a wide variety of circumstances, it has adopted a hybrid solution for ORM based\ndata stores."}),"\n",(0,i.jsx)(t.p,{children:"Whenever Elide traverses a to-one relationship, it returns the ORM proxy object directly. In most cases, these\nrelationships should already exist inside the session and result in no extra database queries."}),"\n",(0,i.jsx)(t.p,{children:"Whenever Elide traverses a to-many relationship, Elide determines if it is loading a single collection (1 query) or a\ncollection of collections (N+1 queries). In the latter case, it returns the ORM proxy directly and performs all\nfiltering, sorting, and pagination in memory. Otherwise, it constructs a custom JPQL query that will fetch the\ncollection - joining with all the client requested to-one relationships to prefetch them."}),"\n",(0,i.jsx)(t.p,{children:"In general, it is recommended to configure the ORM with batch fetching so the ORM will efficiently hydrate proxy\ncollections (batch fetching turns N queries into (N / batch size) queries)."}),"\n",(0,i.jsx)(t.h2,{id:"security-checks",children:"Security Checks"}),"\n",(0,i.jsx)(t.p,{children:"Elide provides different flavors of security checks for performance reasons. In general, it is expensive to execute\nservers side functions for every entity row hydrated from the database. Because Elide is handling the results of each\nquery in a single thread, the CPU cost of these checks can add extra latency to our queries."}),"\n",(0,i.jsx)(t.p,{children:"To work around this, Elide provides two different kinds of security checks:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"User Checks"})," - User checks are evaluated once per request rather than per entity row."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Filter Expression Checks"})," - Filter Expression Checks generate filter expressions that are pushed to the persistence\nlayer and executed in the database."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For data reads from the database, it is recommended to use User Checks and Filter Expression Checks wherever possible."}),"\n",(0,i.jsx)(t.h2,{id:"orm-isms",children:"ORM-isms"}),"\n",(0,i.jsxs)(t.p,{children:["Beware to-one relationships where the entity doesn't own the relationship (",(0,i.jsx)(t.code,{children:"mappedBy"})," is specified) ",(0,i.jsx)(t.em,{children:"and"})," ",(0,i.jsx)(t.code,{children:"optional"})," is\nset to true. The ORM must ",(0,i.jsx)(t.strong,{children:"ALWAYS"})," fetch these relationships when hydrating a proxy (leading to N+1 queries depending\non how the ORM is configured).  The ORM has no way of knowing if the relationship is null or non-null without issuing\nanother database query."]}),"\n",(0,i.jsx)(t.h2,{id:"database-isms",children:"Database-isms"}),"\n",(0,i.jsx)(t.p,{children:"It is highly recommended to collocate Elide servers and the database in the same data center or region to reduce the\nlatency of database queries from Elide."}),"\n",(0,i.jsx)(t.p,{children:"It is also recommended to segregate Elide read only transactions (data fetches) to run against a read-only replica of\nthe database for optimal read performance."}),"\n",(0,i.jsx)(t.h2,{id:"text-search",children:"Text Search"}),"\n",(0,i.jsx)(t.p,{children:"By default, text search (INFIX operator) is accomplished in Elide through a JPQL query similar to:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT id, field1, field2, ... FROM table WHERE field1 like CONCAT('%', searchTerm, '%')\n"})}),"\n",(0,i.jsx)(t.p,{children:"For case insensitive searches, Elide will add a lower case function to both the search field and the search value."}),"\n",(0,i.jsx)(t.p,{children:"There are a number of limitations to this approach:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"If the database is using a b-tree index to index the search column, a preceding wildcard ('%') will disable the use\nof the index. The query will result in a full table scan."}),"\n",(0,i.jsx)(t.li,{children:"Databases have limited support for functional indices. Use of lower or upper case functions may also disable the use\nof an index."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Elide provides two capabilities to work around these issues for large tables that require text search:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Elide supports the ",(0,i.jsx)(t.a,{href:"#jpql-fragment-override",children:"ability to override the JPQL fragment"})," that is generated for any\noperator on any field in any entity model. This makes it possible to disable the use of lower/upper case functions on\na database column if the database column is already case insensitive. It is also possible to use custom SQL dialects\nto leverage full text index support (where available)."]}),"\n",(0,i.jsxs)(t.li,{children:["Elide supports a\n",(0,i.jsx)(t.a,{href:"https://github.com/yahoo/elide/tree/master/elide-datastore/elide-datastore-search",children:"Text Search Data Store"})," that can\nwrap another ORM data store. Whenever possible, the text search data store can delegate queries to a local Lucene\nindex or a Elasticsearch cluster rather than the default data store."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"jpql-fragment-override",children:"JPQL Fragment Override"}),"\n",(0,i.jsx)(t.p,{children:"To override the JPQL fragment Elide generates for a filter operator, we must define a JPQL Predicate Generator:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"@FunctionalInterface\npublic interface JPQLPredicateGenerator {\n\n    /**\n     * Generate a JPQL fragment for a particular filter operator.\n     *\n     * @param predicate The filter predicate\n     * @param aliasGenerator Given a path, returns a JPQL alias for that path.\n     *\n     * @return A JPQL fragment.\n     */\n    String generate(FilterPredicate predicate, Function<Path, String> aliasGenerator);\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"And then register it with Elide for the filter operator we want to modify. This can either be done globally:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'FilterTranslator.registerJPQLGenerator(\n        Operator.NOTNULL,\n        (predicate, aliasGenerator) -> {\n            return String.format("%s IS NOT NULL", aliasGenerator.apply(predicate.getPath()));\n        }\n);\n'})}),"\n",(0,i.jsx)(t.p,{children:"Or the override can be registered for a specific model attribute:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'FilterTranslator.registerJPQLGenerator(\n        Operator.NOTNULL,\n        Book.class,\n        "title",\n        (predicate, aliasGenerator) -> {\n            return String.format("%s IS NOT NULL", aliasGenerator.apply(predicate.getPath()));\n        }\n);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"bespoke-field-sets",children:"Bespoke Field Sets"}),"\n",(0,i.jsx)(t.p,{children:"By default JSON-API fetches every relationship in an entity unless a client restricts what it asks for through sparse\nfields. These relationship fetches result in extra database queries. It is recommended to either use GraphQL or educate\nclients to use sparse fields in JSON-API whenever possible."}),"\n",(0,i.jsx)(t.h2,{id:"aggregationdatastore-cache",children:"AggregationDataStore Cache"}),"\n",(0,i.jsx)(t.p,{children:"AggregationDataStore supports caching QueryEngine results. By default, a simple in-memory Caffeine-based cache is\nconfigured, with a size limit of 1024 entries, but we can provide our own implementation."}),"\n",(0,i.jsx)(t.p,{children:"For the cache to apply to a query, there are two requirements:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"AggregationDataStore"})," must be supplied with a cache implementation."]}),"\n",(0,i.jsxs)(t.li,{children:["The query being executed doesn't have ",(0,i.jsx)(t.code,{children:"bypassingCache"})," set."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"with-spring-configuration",children:"With Spring Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["The configuration property ",(0,i.jsx)(t.code,{children:"elide.aggregation-store.query-cache.max-size"})," controls the size of the default cache\nimplementation. Setting the value to be zero or negative disables the cache."]}),"\n",(0,i.jsxs)(t.p,{children:["The configuration property ",(0,i.jsx)(t.code,{children:"elide-aggregation-store.query-cache.expiration"})," sets the default item expiration."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"elide:\n  aggregation-store:\n    enabled: true\n    query-cache:\n      enabled: true\n      max-size: 1000\n      expiration: 10m\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To provide our own cache implementation, inject it as a ",(0,i.jsx)(t.code,{children:"com.paiondata.elide.datastores.aggregation.cache.Cache"})," bean."]}),"\n",(0,i.jsx)(t.h3,{id:"with-standalone-configuration",children:"With Standalone Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["To control the default size of the cache or the item expiration, override the following ",(0,i.jsx)(t.code,{children:"ElideStandaloneSettings"})," methods:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"public abstract class Settings implements ElideStandaloneSettings {\n    @Override\n    public ElideStandaloneAnalyticSettings getAnalyticProperties() {\n        return new ElideStandaloneAnalyticSettings() {\n            @Override\n            public Integer getQueryCacheMaximumEntries() {\n                return 1000;\n            }\n            @Override\n            public Long getDefaultCacheExpirationMinutes() {\n                return 10L;\n            }\n        };\n    }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To provide our own cache implementation, override ",(0,i.jsx)(t.code,{children:"ElideStandaloneSettings.getQueryCache"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"query-versions",children:"Query Versions"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"AggregationDataStore"})," can prepend a table/data version to each cache entry key. This will prevent the cache from\nreturning stale data. Elide supports the ",(0,i.jsx)(t.code,{children:"VersionQuery"})," annotation which specifies a SQL query to run that returns the\nversion for a particular table:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'@Include\n@FromTable(name = "stats")\n@VersionQuery(sql = "SELECT COUNT(*) FROM stats")\npublic class Stats {\n    // fields\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Returning a row count should work for tables that are insert-only. In most cases, a more sophisticated query will be\nneeded, such as one that returns a table modification timestamp."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(6540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);