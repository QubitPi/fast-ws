"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5577],{4410:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=t(4848),r=t(8453),i=t(1470),o=t(9365);const s={sidebar_position:7,title:"Data Stores",description:"A boundary between Webservice and Database"},l=void 0,c={id:"elide/datastores",title:"Data Stores",description:"A boundary between Webservice and Database",source:"@site/docs/elide/datastores.mdx",sourceDirName:"elide",slug:"/elide/datastores",permalink:"/jersey-webservice-template/docs/elide/datastores",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/elide/datastores.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Data Stores",description:"A boundary between Webservice and Database"},sidebar:"tutorialSidebar",previous:{title:"Analytic Query Support",permalink:"/jersey-webservice-template/docs/elide/analytics"},next:{title:"Client APIs",permalink:"/jersey-webservice-template/docs/category/client-apis"}},d={},u=[{value:"Included Stores",id:"included-stores",level:2},{value:"JPA Data Store",id:"jpa-data-store",level:3},{value:"Multiplex Data Store",id:"multiplex-data-store",level:3},{value:"Noop Data Store",id:"noop-data-store",level:3},{value:"Search Data Store",id:"search-data-store",level:3},{value:"Aggregation Data Store",id:"aggregation-data-store",level:3},{value:"Overriding the Store",id:"overriding-the-store",level:2},{value:"Overriding in Spring Boot",id:"overriding-in-spring-boot",level:3},{value:"Overriding in Elide Standalone",id:"overriding-in-elide-standalone",level:3},{value:"Custom Stores",id:"custom-stores",level:2},{value:"Enabling In-Memory Filtering, Sorting, or Pagination",id:"enabling-in-memory-filtering-sorting-or-pagination",level:3},{value:"Multiple Stores",id:"multiple-stores",level:2},{value:"Spring Boot",id:"spring-boot",level:3},{value:"Elide Standalone",id:"elide-standalone",level:3}];function p(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"A data store is responsible for:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"Reading and writing entity models to/from a persistence layer."}),"\n",(0,n.jsx)(a.li,{children:"Providing transactions that make all persistence operations atomic in a single request."}),"\n",(0,n.jsx)(a.li,{children:"Implementing filtering, sorting, and pagination."}),"\n",(0,n.jsx)(a.li,{children:"Declaring the entities it manages persistence for."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"If a data store is unable to fully implement filtering, sorting, or pagination, it can instead rely on the Elide\nframework to perform these functions in memory.  By default, however, Elide pushes these responsibilities to the store."}),"\n",(0,n.jsx)(a.h2,{id:"included-stores",children:"Included Stores"}),"\n",(0,n.jsx)(a.p,{children:"Elide comes bundled with a number of data stores:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"Hashmap Data Store - Data is persisted in a hash table on the JVM heap."}),"\n",(0,n.jsx)(a.li,{children:"JPA Data Store - A data store that can map operations on a data model to an underlying relational database (ORM) or\nnosql persistence layer (OGM). The JPA Data Store can work with any JPA provider."}),"\n",(0,n.jsx)(a.li,{children:"Multiplex Data Store - A multiplex store that delegates persistence to different underlying stores depending on the\ndata model."}),"\n",(0,n.jsx)(a.li,{children:"Noop Data Store - A store which does nothing, allowing business logic in computed attributes and life cycle hooks to\nentirely implement CRUD operations on the model."}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/paion-data/elide/tree/master/elide-datastore/elide-datastore-search",children:"Search Data Store"})," - A store\nwhich provides full text search on text fields while delegating other requests to another provided store."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"analytics",children:"Aggregation Data Store"})," - A store which provides computation of groupable measures (similar to SQL group\nby). The aggregation store has custom annotations that map an Elide model to native SQL queries against a JDBC\ndatabase."]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["The Hashmap Data Store is included as part of ",(0,n.jsx)(a.code,{children:"elide-core"})," while other data stores can be included through the\nfollowing artifact dependencies:"]}),"\n",(0,n.jsx)(a.h3,{id:"jpa-data-store",children:"JPA Data Store"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.paiondata.elide</groupId>\n    <artifactId>elide-datastore-jpa</artifactId>\n    <version>${elide.version}</version>\n</dependency>\n"})}),"\n",(0,n.jsx)(a.h3,{id:"multiplex-data-store",children:"Multiplex Data Store"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.paiondata.elide</groupId>\n    <artifactId>elide-datastore-multiplex</artifactId>\n    <version>${elide.version}</version>\n</dependency>\n"})}),"\n",(0,n.jsx)(a.h3,{id:"noop-data-store",children:"Noop Data Store"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.paiondata.elide</groupId>\n    <artifactId>elide-datastore-noop</artifactId>\n    <version>${elide.version}</version>\n</dependency>\n"})}),"\n",(0,n.jsx)(a.h3,{id:"search-data-store",children:"Search Data Store"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.paiondata.elide</groupId>\n    <artifactId>elide-datastore-search</artifactId>\n    <version>${elide.version}</version>\n</dependency>\n"})}),"\n",(0,n.jsx)(a.h3,{id:"aggregation-data-store",children:"Aggregation Data Store"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.paiondata.elide</groupId>\n    <artifactId>elide-datastore-aggregation</artifactId>\n    <version>${elide.version}</version>\n</dependency>\n"})}),"\n",(0,n.jsx)(a.h2,{id:"overriding-the-store",children:"Overriding the Store"}),"\n",(0,n.jsx)(a.h3,{id:"overriding-in-spring-boot",children:"Overriding in Spring Boot"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://github.com/paion-data/elide/tree/master/elide-spring/elide-spring-boot-autoconfigure",children:"Elide Spring Boot"})," by default will configure a JPA Data Store with the default transaction manager and\nentity manager and manage all the entities associated with the entity manager."]}),"\n",(0,n.jsxs)(a.p,{children:["If not all entities should be managed then this can be customized by using the ",(0,n.jsx)(a.code,{children:"@EnableJpaDataStore"})," annotation."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"@Configuration\n@EnableJpaDataStore(managedClasses = { Author.class, Book.class } )\npublic class ElideConfiguration { ... }\n"})}),"\n",(0,n.jsxs)(a.p,{children:["To completely override the auto configured store, define a ",(0,n.jsx)(a.code,{children:"DataStore"})," bean:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"@Configuration\npublic class ElideConfiguration {\n    @Bean\n    public DataStore dataStore(EntityManagerFactory entityManagerFactory, PlatformTransactionManager transactionManager,\n            ElideConfigProperties settings) {\n        EntityManagerSupplier entityManagerSupplier = new EntityManagerProxySupplier();\n        JpaTransactionSupplier jpaTransactionSupplier = new PlatformJpaTransactionSupplier(\n                    new DefaultTransactionDefinition(), transactionManager,\n                    entityManagerFactory, settings.getJpaStore().isDelegateToInMemoryStore());\n        return new JpaDataStore(entityManagerSupplier, jpaTransactionSupplier, entityManagerFactory::getMetamodel);\n    }\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"overriding-in-elide-standalone",children:"Overriding in Elide Standalone"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://github.com/paion-data/elide/tree/master/elide-standalone",children:"Elide Standalone"})," is configured by default with the JPA Data Store."]}),"\n",(0,n.jsxs)(a.p,{children:["To change the store, one of two possible functions should be overridden depending on whether the ",(0,n.jsx)(a.code,{children:"AggregationDataStore"}),"\nis enabled:"]}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(o.A,{value:"AggregationDataStore-disabled",label:"AggregationDataStore disabled",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"/**\n * Initializes the Elide {@link DataStore} service with the specified {@link EntityManagerFactory}.\n *\n * @param entityManagerFactory  An object used to initialize JPA\n *\n * @return a new instance\n */\n@NotNull\nprivate DataStore buildDataStore(@NotNull final EntityManagerFactory entityManagerFactory) {\n    return new JpaDataStore(\n            entityManagerFactory::createEntityManager,\n            em -> new NonJtaTransaction(em, TXCANCEL),\n            entityManagerFactory::getMetamodel\n    );\n}\n"})})}),(0,n.jsx)(o.A,{value:"AggregationDataStore-enabled",label:"AggregationDataStore enabled",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"/**\n * Gets the DataStore for Elide.\n *\n * @param metaDataStore MetaDataStore object.\n * @param aggregationDataStore AggregationDataStore object.\n * @param entityManagerFactory EntityManagerFactory object.\n * @return DataStore object initialized.\n */\n@Override\npublic DataStore getDataStore(MetaDataStore metaDataStore, AggregationDataStore aggregationDataStore,\n        EntityManagerFactory entityManagerFactory) {\n    DataStore jpaDataStore = new JpaDataStore(\n            () -> { return entityManagerFactory.createEntityManager(); },\n            (em) -> { return new NonJtaTransaction(em, ElideStandaloneSettings.TXCANCEL); });\n\n    DataStore dataStore = new MultiplexManager(jpaDataStore, metaDataStore, aggregationDataStore);\n\n    return dataStore;\n}\n"})})})]}),"\n",(0,n.jsx)(a.h2,{id:"custom-stores",children:"Custom Stores"}),"\n",(0,n.jsxs)(a.p,{children:["Custom stores can be written by implementing the ",(0,n.jsx)(a.code,{children:"DataStore"})," and ",(0,n.jsx)(a.code,{children:"DataStoreTransaction"})," interfaces."]}),"\n",(0,n.jsx)(a.h3,{id:"enabling-in-memory-filtering-sorting-or-pagination",children:"Enabling In-Memory Filtering, Sorting, or Pagination"}),"\n",(0,n.jsx)(a.p,{children:"If a Data Store is unable to fully implement sorting, filtering, or pagination, the Elide framework can perform\nthese functions in-memory instead."}),"\n",(0,n.jsxs)(a.p,{children:["The Data Store Transaction can inform Elide of its capabilities (or lack thereof) by returning a ",(0,n.jsx)(a.code,{children:"DataStoreIterable"})," for\nany collection loaded:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"/**\n * Returns data loaded from a DataStore.   Wraps an iterable but also communicates to Elide\n * if the framework needs to filter, sort, or paginate the iterable in memory before returning to the client.\n * @param <T> The type being iterated over.\n */\npublic interface DataStoreIterable<T> extends Iterable<T> {\n\n    /**\n     * Returns the underlying iterable.\n     * @return The underlying iterable.\n     */\n    Iterable<T> getWrappedIterable();\n\n\n    /**\n     * Whether the iterable should be filtered in memory.\n     * @return true if the iterable needs sorting in memory.  false otherwise.\n     */\n    default boolean needsInMemoryFilter() {\n        return false;\n    }\n\n    /**\n     * Whether the iterable should be sorted in memory.\n     * @return true if the iterable needs sorting in memory.  false otherwise.\n     */\n    default boolean needsInMemorySort() {\n        return false;\n    }\n\n    /**\n     * Whether the iterable should be paginated in memory.\n     * @return true if the iterable needs pagination in memory.  false otherwise.\n     */\n    default boolean needsInMemoryPagination() {\n        return false;\n    }\n}\n\n"})}),"\n",(0,n.jsx)(a.h2,{id:"multiple-stores",children:"Multiple Stores"}),"\n",(0,n.jsx)(a.p,{children:"A common pattern in Elide is the need to support multiple data stores. Typically, one data store manages most models,\nbut some models may require a different persistence backend or have other needs to specialize the behavior of the store."}),"\n",(0,n.jsxs)(a.p,{children:["The Multiplex Data Store (",(0,n.jsx)(a.code,{children:"MultiplexManager"}),") in Elide manages multiple stores - delegating calls to the appropriate\nstore which is responsible for a particular model. By default it will apply compensating transactions to undo failures\nif multiple stores are involved in the multiplex transaction and an error occurs after transactions to some of the\nstores were already committed."]}),"\n",(0,n.jsx)(a.h3,{id:"spring-boot",children:"Spring Boot"}),"\n",(0,n.jsxs)(a.p,{children:["If there are multiple JPA Data Stores required the ",(0,n.jsx)(a.code,{children:"@EnableJpaDataStore"})," annotation can be used to configure them."]}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Annotation Element"}),(0,n.jsx)(a.th,{children:"Description"}),(0,n.jsx)(a.th,{children:"Default"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:"entityManagerFactoryRef"})}),(0,n.jsxs)(a.td,{children:["(Optional) The bean name of the ",(0,n.jsx)(a.code,{children:"EntityManagerFactory"})," bean to be used."]}),(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:"entityManagerFactory"})})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:"transactionManagerRef"})}),(0,n.jsxs)(a.td,{children:["(Optional) The bean name of the ",(0,n.jsx)(a.code,{children:"PlatformTransactionManager"})," bean to be used."]}),(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:"transactionManager"})})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:"managedClasses"})}),(0,n.jsxs)(a.td,{children:["(Optional) The entities to manage, otherwise all the entities associated with the ",(0,n.jsx)(a.code,{children:"EntityManagerFactory"}),"."]}),(0,n.jsx)(a.td,{})]})]})]}),"\n",(0,n.jsxs)(a.p,{children:["Spring Boot will auto configure the default ",(0,n.jsx)(a.code,{children:"JpaTransactionManager"})," or ",(0,n.jsx)(a.code,{children:"JtaTransactionManager"})," with the\n",(0,n.jsx)(a.code,{children:"transactionManager"})," bean name and the ",(0,n.jsx)(a.code,{children:"EntityManagerFactory"})," with the ",(0,n.jsx)(a.code,{children:"entityManagerFactory"})," bean name."]}),"\n",(0,n.jsxs)(a.p,{children:["The following shows sample configuration with 2 ",(0,n.jsx)(a.code,{children:"EntityManagerFactory"})," and 2 ",(0,n.jsx)(a.code,{children:"JpaTransactionManager"})," where each\n",(0,n.jsx)(a.code,{children:"EntityManagerFactory"})," participates in separate transactions:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'@Configuration\n@EnableJpaDataStore(entityManagerFactoryRef = "entityManagerFactory1", transactionManagerRef = "transactionManager1")\n@EnableJpaDataStore(entityManagerFactoryRef = "entityManagerFactory2", transactionManagerRef = "transactionManager2")\npublic class ElideConfiguration {\n    @Bean\n    public LocalContainerEntityManagerFactoryBean entityManagerFactory1(EntityManagerFactoryBuilder builder,\n        DefaultListableBeanFactory beanFactory, DataSource dataSource1) {\n        Map<String, Object> vendorProperties = new HashMap<>();\n        vendorProperties.put(AvailableSettings.HBM2DDL_AUTO, "create-drop");\n        vendorProperties.put(AvailableSettings.JTA_PLATFORM, new NoJtaPlatform());\n        final LocalContainerEntityManagerFactoryBean emf = builder.dataSource(dataSource1)\n                .packages("example.models.jpa.v1").properties(vendorProperties).build();\n        return emf;\n    }\n\n    @Bean\n    public LocalContainerEntityManagerFactoryBean entityManagerFactory2(EntityManagerFactoryBuilder builder,\n        DefaultListableBeanFactory beanFactory, DataSource dataSource2) {\n        Map<String, Object> vendorProperties = new HashMap<>();\n        vendorProperties.put(AvailableSettings.HBM2DDL_AUTO, "create-drop");\n        vendorProperties.put(AvailableSettings.JTA_PLATFORM, new NoJtaPlatform());\n        final LocalContainerEntityManagerFactoryBean emf = builder.dataSource(dataSource2)\n                .packages("example.models.jpa.v2").properties(vendorProperties).build();\n        return emf;\n    }\n\n    @Bean\n    public PlatformTransactionManager transactionManager1(EntityManagerFactory entityManagerFactory1) {\n        return new JpaTransactionManager(entityManagerFactory1);\n    }\n\n    @Bean\n    public PlatformTransactionManager transactionManager2(EntityManagerFactory entityManagerFactory2) {\n        return new JpaTransactionManager(entityManagerFactory2);\n    }\n\n    @Bean\n    public DataSource dataSource1() {\n        return DataSourceBuilder.create().url("jdbc:h2:mem:db1;DB_CLOSE_DELAY=-1").username("sa").password("").build();\n    }\n\n    @Bean\n    public DataSource dataSource2() {\n        return DataSourceBuilder.create().url("jdbc:h2:mem:db2;DB_CLOSE_DELAY=-1").username("sa").password("").build();\n    }\n\n    @Bean\n    public EntityManagerFactoryBuilder entityManagerFactoryBuilder(\n            ObjectProvider<PersistenceUnitManager> persistenceUnitManager,\n            ObjectProvider<EntityManagerFactoryBuilderCustomizer> customizers) {\n        EntityManagerFactoryBuilder builder = new EntityManagerFactoryBuilder(new HibernateJpaVendorAdapter(),\n                new HashMap<>(), persistenceUnitManager.getIfAvailable());\n        customizers.orderedStream().forEach((customizer) -> customizer.customize(builder));\n        return builder;\n   }    \n}\n'})}),"\n",(0,n.jsxs)(a.p,{children:["The following shows sample configuration with 2 ",(0,n.jsx)(a.code,{children:"EntityManagerFactory"})," and a ",(0,n.jsx)(a.code,{children:"JtaTransactionManager"})," where both\n",(0,n.jsx)(a.code,{children:"EntityManagerFactory"})," participates in a single transaction:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'@Configuration\n@EnableJpaDataStore(entityManagerFactoryRef = "entityManagerFactory1")\n@EnableJpaDataStore(entityManagerFactoryRef = "entityManagerFactory2")\npublic class ElideConfiguration {\n    @Bean\n    public LocalContainerEntityManagerFactoryBean entityManagerFactory1(EntityManagerFactoryBuilder builder,\n        DefaultListableBeanFactory beanFactory, DataSource dataSource1, JtaTransactionManager transactionManager) {\n        Map<String, Object> vendorProperties = new HashMap<>();\n        vendorProperties.put(AvailableSettings.HBM2DDL_AUTO, "create-drop");\n        vendorProperties.put(AvailableSettings.JTA_PLATFORM, new SpringJtaPlatform(transactionManager));\n        final LocalContainerEntityManagerFactoryBean emf = builder.dataSource(dataSource1)\n                .packages("example.models.jpa.v1").properties(vendorProperties).jta(true).build();\n        return emf;\n    }\n\n    @Bean\n    public LocalContainerEntityManagerFactoryBean entityManagerFactory2(EntityManagerFactoryBuilder builder,\n        DefaultListableBeanFactory beanFactory, DataSource dataSource2, JtaTransactionManager transactionManager) {\n        Map<String, Object> vendorProperties = new HashMap<>();\n        vendorProperties.put(AvailableSettings.HBM2DDL_AUTO, "create-drop");\n        vendorProperties.put(AvailableSettings.JTA_PLATFORM, new SpringJtaPlatform(transactionManager));\n        final LocalContainerEntityManagerFactoryBean emf = builder.dataSource(dataSource2)\n                .packages("example.models.jpa.v2").properties(vendorProperties).jta(true).build();\n        return emf;\n    }\n\n    @Bean\n    public DataSource dataSource1() {\n        XADataSource xaDataSource = DataSourceBuilder.create().url("jdbc:h2:mem:db1;DB_CLOSE_DELAY=-1")\n                .driverClassName("org.h2.Driver").type(org.h2.jdbcx.JdbcDataSource.class).username("sa")\n                .password("").build();\n        AtomikosDataSourceBean atomikosDataSource = new AtomikosDataSourceBean();\n        atomikosDataSource.setXaDataSource(xaDataSource);\n        return atomikosDataSource;\n    }\n\n    @Bean\n    public DataSource dataSource2() {\n        XADataSource xaDataSource = DataSourceBuilder.create().url("jdbc:h2:mem:db2;DB_CLOSE_DELAY=-1")\n                .driverClassName("org.h2.Driver").type(org.h2.jdbcx.JdbcDataSource.class).username("sa")\n                .password("").build();\n        AtomikosDataSourceBean atomikosDataSource = new AtomikosDataSourceBean();\n        atomikosDataSource.setXaDataSource(xaDataSource);\n        return atomikosDataSource;\n    }\n\n    @Bean\n    public EntityManagerFactoryBuilder entityManagerFactoryBuilder(\n            ObjectProvider<PersistenceUnitManager> persistenceUnitManager,\n            ObjectProvider<EntityManagerFactoryBuilderCustomizer> customizers) {\n        EntityManagerFactoryBuilder builder = new EntityManagerFactoryBuilder(new HibernateJpaVendorAdapter(),\n                new HashMap<>(), persistenceUnitManager.getIfAvailable());\n        customizers.orderedStream().forEach((customizer) -> customizer.customize(builder));\n        return builder;\n    }\n}\n'})}),"\n",(0,n.jsxs)(a.p,{children:["If customizations are required to the ",(0,n.jsx)(a.code,{children:"MultiplexManager"})," used or to add other data stores the\n",(0,n.jsx)(a.code,{children:"DataStoreBuilderCustomizer"})," can be used:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"@Configuration\npublic class ElideConfiguration {\n    @Bean\n    public DataStoreBuilderCustomizer dataStoreBuilderCustomizer() {\n        return builder -> {\n            builder\n                .dataStore(new MyCustomDataStore())\n                .multiplexer(dataStores -> {\n                        return new MultiplexManager(ObjectCloners::clone,\n                                dataStore -> !(dataStore instanceof JpaDataStore), dataStores);\n                    });\n        };\n    }\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["To completely override the auto configured store and setup the Multiplex Data Store, define a ",(0,n.jsx)(a.code,{children:"DataStore"})," bean:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"@Configuration\npublic class ElideConfiguration {\n    @Bean\n    public DataStore dataStore(EntityManagerFactory entityManagerFactory, PlatformTransactionManager transactionManager,\n            ElideConfigProperties settings) {\n        EntityManagerSupplier entityManagerSupplier = new EntityManagerProxySupplier();\n        JpaTransactionSupplier jpaTransactionSupplier = new PlatformJpaTransactionSupplier(\n                    new DefaultTransactionDefinition(), transactionManager,\n                    entityManagerFactory, settings.getJpaStore().isDelegateToInMemoryStore());\n        //Store 1 manages Book, Author, and Publisher\n        DataStore store1 = new JpaDataStore(entityManagerSupplier, jpaTransactionSupplier,\n                ClassType.of(Book.class), \n                ClassType.of(Author.class),\n                ClassType.of(Publisher.class));\n\n        //Store 2 is a custom store that manages Manufacturer\n        DataStore store2 = new MyCustomDataStore(...);\n\n        //Return the new multiplex store...\n        return new MultiplexManager(store1, store2);\n    }\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"elide-standalone",children:"Elide Standalone"}),"\n",(0,n.jsxs)(a.p,{children:["To set up the Multiplex Data Store, override the ",(0,n.jsx)(a.code,{children:"getDataStore"})," function:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"/**\n * Gets the DataStore for elide when aggregation store is disabled.\n * @param entityManagerFactory EntityManagerFactory object.\n * @return DataStore object initialized.\n */\n@Override\npublic DataStore getDataStore(EntityManagerFactory entityManagerFactory) {\n    //Store 1 manages Book, Author, and Publisher\n    DataStore store1 = new JpaDataStore(\n            () -> { return entityManagerFactory.createEntityManager(); },\n            (em) -> { return new NonJtaTransaction(em, ElideStandaloneSettings.TXCANCEL); },\n            Book.class, Author.class, Publisher.class\n    );\n\n    //Store 2 is a custom store that manages Manufacturer\n    DataStore store2 = new MyCustomDataStore(...);\n\n    //Create the new multiplex store...\n    return new MultiplexManager(store1, store2);\n}\n"})})]})}function g(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9365:(e,a,t)=>{t.d(a,{A:()=>o});t(6540);var n=t(53);const r={tabItem:"tabItem_Ymn6"};var i=t(4848);function o(e){let{children:a,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,o),hidden:t,children:a})}},1470:(e,a,t)=>{t.d(a,{A:()=>v});var n=t(6540),r=t(53),i=t(3104),o=t(6347),s=t(205),l=t(7485),c=t(1682),d=t(9466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}(t);return function(e){const a=(0,c.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function g(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:t}=e;const r=(0,o.W6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(r.location.search);a.set(i,e),r.replace({...r.location,search:a.toString()})}),[i,r])]}function m(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,i=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[c,u]=h({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,i]=(0,d.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),y=(()=>{const e=c??m;return g({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function S(e){let{className:a,block:t,selectedValue:n,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const a=e.currentTarget,t=l.indexOf(a),r=s[t].value;r!==n&&(c(a),o(r))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;a=l[t]??l[l.length-1];break}}a?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a),children:s.map((e=>{let{value:a,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function j(e){let{lazy:a,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function x(e){const a=m(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,f.jsx)(S,{...e,...a}),(0,f.jsx)(j,{...e,...a})]})}function v(e){const a=(0,b.A)();return(0,f.jsx)(x,{...e,children:u(e.children)},String(a))}},8453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>s});var n=t(6540);const r={},i=n.createContext(r);function o(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);