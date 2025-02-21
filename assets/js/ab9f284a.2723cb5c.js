"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3936],{5354:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var l=s(8040),t=s(5246);const a={slug:"oracle-programming",title:"Programming Oracle Database",authors:"jiaqi",tags:["Oracle","Database","JPA"]},r=void 0,o={permalink:"/blog/oracle-programming",editUrl:"https://github.com/QubitPi/fast-ws/tree/master/docs/blog/2020-08-28-oracle-programming/index.md",source:"@site/blog/2020-08-28-oracle-programming/index.md",title:"Programming Oracle Database",description:"[//]: # (Copyright 2025 Jiaqi Liu. All rights reserved.)",date:"2020-08-28T00:00:00.000Z",formattedDate:"August 28, 2020",tags:[{label:"Oracle",permalink:"/blog/tags/oracle"},{label:"Database",permalink:"/blog/tags/database"},{label:"JPA",permalink:"/blog/tags/jpa"}],readingTime:7.485,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of FastWS",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"oracle-programming",title:"Programming Oracle Database",authors:"jiaqi",tags:["Oracle","Database","JPA"]},unlisted:!1,prevItem:{title:"Programming MySQL",permalink:"/blog/mysql-programming"},nextItem:{title:"Reading and Writing Avro Files from the Command Line",permalink:"/blog/read-avro-command-line"}},c={authorsImageUrls:[void 0]},d=[{value:"Shell",id:"shell",level:2},{value:"Run Oracle SQL script and Exit Afterwards",id:"run-oracle-sql-script-and-exit-afterwards",level:3},{value:"Shell Commands",id:"shell-commands",level:3},{value:"Display UTF8",id:"display-utf8",level:4},{value:"Spool SQL Query Output to HTML format in SQLPLUS Oracle",id:"spool-sql-query-output-to-html-format-in-sqlplus-oracle",level:4},{value:"Show Tables",id:"show-tables",level:4},{value:"Show Tables Owned By the Current User",id:"show-tables-owned-by-the-current-user",level:5},{value:"Show Tables Accessible By the Current User",id:"show-tables-accessible-by-the-current-user",level:5},{value:"Show All Tables in the Oracle Database",id:"show-all-tables-in-the-oracle-database",level:5},{value:"Comparing Dates",id:"comparing-dates",level:4},{value:"Show Last Command Run",id:"show-last-command-run",level:4},{value:"Get A List of All Tables",id:"get-a-list-of-all-tables",level:4},{value:"Scripting",id:"scripting",level:2},{value:"WHENEVER SQLERROR",id:"whenever-sqlerror",level:3},{value:"Drop All User Tables",id:"drop-all-user-tables",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Double Quotes v.s. Single Quotes",id:"double-quotes-vs-single-quotes",level:3},{value:"Oracle: ORA-00955: name is already used by an existing object",id:"oracle-ora-00955-name-is-already-used-by-an-existing-object",level:3},{value:"Cause 1",id:"cause-1",level:4},{value:"Cause 2",id:"cause-2",level:4},{value:"ORA-02261: such unique or primary key already exists in the table",id:"ora-02261-such-unique-or-primary-key-already-exists-in-the-table",level:3},{value:"Change varchar Column to CLOB",id:"change-varchar-column-to-clob",level:3}];function i(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"shell",children:"Shell"}),"\n",(0,l.jsx)(n.h3,{id:"run-oracle-sql-script-and-exit-afterwards",children:"Run Oracle SQL script and Exit Afterwards"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"exit | sqlplus -S $user/$pwd@//$server:$port/$service_name @script.sql\n"})}),"\n",(0,l.jsxs)(n.p,{children:["One example value of ",(0,l.jsx)(n.code,{children:"$service_name"}),' could be "ORCL". Note that there is a ',(0,l.jsx)(n.code,{children:"@"})," symble preceding the script\npath(",(0,l.jsx)(n.code,{children:"script.sql"}),")"]}),"\n",(0,l.jsx)(n.h3,{id:"shell-commands",children:"Shell Commands"}),"\n",(0,l.jsx)(n.h4,{id:"display-utf8",children:"Display UTF8"}),"\n",(0,l.jsxs)(n.p,{children:["Whenever a client program (such as ",(0,l.jsx)(n.code,{children:"sqlplus"}),") connects to the database, it tells the database what characterset it is\nusing. Some environments may have a very restricted characterset and use something like US7ASCII so they don't get\nanything that can upset them."]}),"\n",(0,l.jsx)(n.p,{children:"As you can see in the following example, what is output by a query is dependent on the NLS_LANG setting of a client."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"C:\\>set NLS_LANG=.US7ASCII\nC:\\>sqlplus ???/???@xe\n\nSQL*Plus: Release 10.2.0.1.0 - Production on Wed Nov 3 09:31:32 2010\n> select chr(193) from dual;\n\nC\n-\n?\n\n> quit\n\nC:\\>set NLS_LANG=.AL32UTF8\nC:\\>sqlplus ???/???@xe\n\nSQL*Plus: Release 10.2.0.1.0 - Production on Wed Nov 3 09:31:49 2010\n> select chr(193) from dual;\n\nC\n-\n\u2534\n"})}),"\n",(0,l.jsx)(n.p,{children:"If your client is Windows, then try the above. If it is a unix(ish) platform, try"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"export NLS_LANG=.AL32UTF8\n"})}),"\n",(0,l.jsx)(n.h4,{id:"spool-sql-query-output-to-html-format-in-sqlplus-oracle",children:"Spool SQL Query Output to HTML format in SQLPLUS Oracle"}),"\n",(0,l.jsx)(n.p,{children:"In SQLPLUS:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"set pages 500\nSET MARKUP HTML ON\nspool report1.html\nSelect * from hr.departments where department_id < 20;\nspool off\n"})}),"\n",(0,l.jsx)(n.p,{children:'This would generate a "report1.html" file in the directory where SQLPLUS command was invoked and the file looks like\nthe following:'}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Error loading sqlplus-html.png",src:s(5971).A+""})}),"\n",(0,l.jsx)(n.h4,{id:"show-tables",children:"Show Tables"}),"\n",(0,l.jsxs)(n.p,{children:["If you have worked with MySQL, you may be familiar with the ",(0,l.jsx)(n.code,{children:"SHOW TABLES"})," command that lists all tables in a database:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW TABLES;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Unfortunately, Oracle ",(0,l.jsx)(n.strong,{children:"does not"})," directly support the ",(0,l.jsx)(n.code,{children:"SHOW TABLES"})," command. However, you can list all tables in a\ndatabase by querying from various data dictionary views."]}),"\n",(0,l.jsx)(n.h5,{id:"show-tables-owned-by-the-current-user",children:"Show Tables Owned By the Current User"}),"\n",(0,l.jsxs)(n.p,{children:["To show tables ",(0,l.jsx)(n.strong,{children:"owned"})," by the current user, you query from the ",(0,l.jsx)(n.code,{children:"user_tables"})," view."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT table_name\nFROM user_tables\nORDER BY table_name;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Note that this view does not show the ",(0,l.jsx)(n.code,{children:"OWNER"})," column. Also, the user_tables table ",(0,l.jsx)(n.strong,{children:"does not"})," contain the other tables\nthat are ",(0,l.jsx)(n.strong,{children:"accessible"})," by the current user."]}),"\n",(0,l.jsx)(n.h5,{id:"show-tables-accessible-by-the-current-user",children:"Show Tables Accessible By the Current User"}),"\n",(0,l.jsxs)(n.p,{children:["To show all tables that are currently ",(0,l.jsx)(n.strong,{children:"accessible"})," by the current user, regardless of owners, you query from the\n",(0,l.jsx)(n.code,{children:"all_tables"})," view:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT table_name\nFROM all_tables\nORDER BY table_name;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["If you want to show all tables of a specific owner, you add the ",(0,l.jsx)(n.code,{children:"OWNER"})," column in the ",(0,l.jsx)(n.code,{children:"WHERE"})," clause as shown in the\nfollowing query:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT *\nFROM all_tables\nWHERE OWNER = 'OT'\nORDER BY table_name;\n"})}),"\n",(0,l.jsx)(n.h5,{id:"show-all-tables-in-the-oracle-database",children:"Show All Tables in the Oracle Database"}),"\n",(0,l.jsxs)(n.p,{children:["To show ",(0,l.jsx)(n.strong,{children:"all tables"})," in the entire Oracle Database, you query from the ",(0,l.jsx)(n.code,{children:"dba_tables"})," view as follows:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT table_name\nFROM dba_tables;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["You will get the following error message if you don't have access to the ",(0,l.jsx)(n.code,{children:"dba_tables"})," view:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ORA-00942: table or view does not exist\n"})}),"\n",(0,l.jsxs)(n.p,{children:["In this case, you should request your database administrator to grant your account either privileges on the ",(0,l.jsx)(n.code,{children:"dba_tables"}),"\nview, or ",(0,l.jsx)(n.code,{children:"SELECT ANY DICTIONARY"})," privilege, or ",(0,l.jsx)(n.code,{children:"SELECT_CATALOG_ROLE"})," privilege."]}),"\n",(0,l.jsx)(n.h4,{id:"comparing-dates",children:(0,l.jsx)(n.a,{href:"https://stackoverflow.com/a/34061999",children:"Comparing Dates"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"Select count(*) From Employee\nWhere to_char(employee_date_hired, 'YYYMMMDDD') > 19940620\n"})}),"\n",(0,l.jsx)(n.p,{children:"or"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"Select count(*) From Employee\nemployee_date_hired > TO_DATE('20-06-1994', 'DD-MM-YYYY');\n"})}),"\n",(0,l.jsx)(n.h4,{id:"show-last-command-run",children:(0,l.jsx)(n.a,{href:"https://stackoverflow.com/a/51193086",children:"Show Last Command Run"})}),"\n",(0,l.jsx)(n.p,{children:"The 'l' command will show the last run command"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SQL> l\n    1* select owner, count(1) from dba_tables group by owner\nSQL>\n"})}),"\n",(0,l.jsx)(n.p,{children:"To get more than that, turn on history"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SQL> set history on\nSQL> history\n  1  select * from dual;\n  2  select sysdate from dual;\n  3  show history\n"})}),"\n",(0,l.jsx)(n.h4,{id:"get-a-list-of-all-tables",children:(0,l.jsx)(n.a,{href:"https://stackoverflow.com/a/205746",children:"Get A List of All Tables"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT OWNER, TABLE_NAME\nFROM DBA_TABLES;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["This is assuming that you have access to the ",(0,l.jsx)(n.code,{children:"DBA_TABLES"})," data dictionary view. If you do not have those privileges but\nneed them, you can request that the DBA explicitly grants you privileges on that table, or, that the DBA grants you the\n",(0,l.jsx)(n.code,{children:"SELECT ANY DICTIONARY"})," privilege or the ",(0,l.jsx)(n.code,{children:"SELECT_CATALOG_ROLE"})," role (either of which would allow you to query any data\ndictionary table). Of course, you may want to exclude certain schemas like ",(0,l.jsx)(n.code,{children:"SYS"})," and ",(0,l.jsx)(n.code,{children:"SYSTEM"})," which have large numbers\nof Oracle tables that you probably don't care about."]}),"\n",(0,l.jsxs)(n.p,{children:["Alternatively, if you do not have access to ",(0,l.jsx)(n.code,{children:"DBA_TABLES"}),", you can see all the tables that your account has access to\nthrough the ",(0,l.jsx)(n.code,{children:"ALL_TABLES"})," view:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT OWNER, TABLE_NAME\nFROM ALL_TABLES;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Although, that may be a subset of the tables available in the database (",(0,l.jsx)(n.code,{children:"ALL_TABLES"})," shows you the information for all\nthe tables that your user has been granted access to)."]}),"\n",(0,l.jsxs)(n.p,{children:["If you are only concerned with the tables that you own, not those that you have access to, you could use ",(0,l.jsx)(n.code,{children:"USER_TABLES"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT TABLE_NAME\nFROM USER_TABLES;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Since ",(0,l.jsx)(n.code,{children:"USER_TABLES"})," only has information about the tables that you own, it does not have an ",(0,l.jsx)(n.code,{children:"OWNER"})," column - the owner,\nby definition, is you."]}),"\n",(0,l.jsxs)(n.p,{children:["Oracle also has a number of legacy data dictionary views -- ",(0,l.jsx)(n.code,{children:"TAB"}),", ",(0,l.jsx)(n.code,{children:"DICT"}),", ",(0,l.jsx)(n.code,{children:"TABS"}),", and ",(0,l.jsx)(n.code,{children:"CAT"})," for example -- that could\nbe used. In general, I would not suggest using these legacy views unless you absolutely need to backport your scripts to\nOracle 6. Oracle has not changed these views in a long time so they often have problems with newer types of objects. For\nexample, the ",(0,l.jsx)(n.code,{children:"TAB"})," and ",(0,l.jsx)(n.code,{children:"CAT"})," views both show information about tables that are in the user's recycle bin while the\n",(0,l.jsx)(n.code,{children:"[DBA|ALL|USER]_TABLES"})," views all filter those out. ",(0,l.jsx)(n.code,{children:"CAT"})," also shows information about materialized view logs with a\n",(0,l.jsx)(n.code,{children:"TABLE_TYPE"}),' of "TABLE" which is unlikely to be what you really want. ',(0,l.jsx)(n.code,{children:"DICT"})," combines tables and synonyms and doesn't\ntell you who owns the object."]}),"\n",(0,l.jsx)(n.h2,{id:"scripting",children:"Scripting"}),"\n",(0,l.jsx)(n.h3,{id:"whenever-sqlerror",children:"WHENEVER SQLERROR"}),"\n",(0,l.jsxs)(n.p,{children:["When you have a script that has syntax errors, the script won't exit with error while executing the line that has the\nsyntax error. We would like to, instead, halt the execution at that point for the script tuning purposes. To do that\n",(0,l.jsx)(n.code,{children:"WHENEVER SQLERROR"})," could be used."]}),"\n",(0,l.jsx)(n.p,{children:"The commands in the following script cause SQL*Plus to exit and return the SQL error code if the SQL UPDATE command\nfails:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"WHENEVER SQLERROR EXIT SQL.SQLCODE\nUPDATE EMP_DETAILS_VIEW SET SALARY = SALARY*1.1;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"drop-all-user-tables",children:"Drop All User Tables"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"BEGIN\n   FOR cur_rec IN (SELECT object_name, object_type\n                   FROM user_objects\n                   WHERE object_type IN\n                             ('TABLE',\n                              'VIEW',\n                              'MATERIALIZED VIEW',\n                              'PACKAGE',\n                              'PROCEDURE',\n                              'FUNCTION',\n                              'SEQUENCE',\n                              'SYNONYM',\n                              'PACKAGE BODY'\n                             ))\n   LOOP\n      BEGIN\n         IF cur_rec.object_type = 'TABLE'\n         THEN\n            EXECUTE IMMEDIATE 'DROP '\n                              || cur_rec.object_type\n                              || ' \"'\n                              || cur_rec.object_name\n                              || '\" CASCADE CONSTRAINTS';\n         ELSE\n            EXECUTE IMMEDIATE 'DROP '\n                              || cur_rec.object_type\n                              || ' \"'\n                              || cur_rec.object_name\n                              || '\"';\n         END IF;\n      EXCEPTION\n         WHEN OTHERS\n         THEN\n            DBMS_OUTPUT.put_line ('FAILED: DROP '\n                                  || cur_rec.object_type\n                                  || ' \"'\n                                  || cur_rec.object_name\n                                  || '\"'\n                                 );\n      END;\n   END LOOP;\n   FOR cur_rec IN (SELECT *\n                   FROM all_synonyms\n                   WHERE table_owner IN (SELECT USER FROM dual))\n   LOOP\n      BEGIN\n         EXECUTE IMMEDIATE 'DROP PUBLIC SYNONYM ' || cur_rec.synonym_name;\n      END;\n   END LOOP;\nEND;\n/\n"})}),"\n",(0,l.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,l.jsx)(n.h3,{id:"double-quotes-vs-single-quotes",children:"Double Quotes v.s. Single Quotes"}),"\n",(0,l.jsx)(n.p,{children:"Unlike MySQL which makes double and single quotes interchangeable."}),"\n",(0,l.jsx)(n.h3,{id:"oracle-ora-00955-name-is-already-used-by-an-existing-object",children:"Oracle: ORA-00955: name is already used by an existing object"}),"\n",(0,l.jsx)(n.h4,{id:"cause-1",children:"Cause 1"}),"\n",(0,l.jsx)(n.p,{children:"You probably have another object with the same name, for example, 'person'"}),"\n",(0,l.jsxs)(n.p,{children:["You can find it by quering ",(0,l.jsx)(n.code,{children:"person"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM user_objects WHERE object_name = 'person';\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Then drop it (replace ",(0,l.jsx)(n.code,{children:"TYPE_OF_OBJECT"})," by the type of the object from the above query):"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DROP TYPE_OF_OBJECT person\n"})}),"\n",(0,l.jsx)(n.h4,{id:"cause-2",children:"Cause 2"}),"\n",(0,l.jsxs)(n.p,{children:["You simply have a stupid ",(0,l.jsx)(n.code,{children:"/"})," at the end of your statement, such as"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE some_schema.person (\n    ...\n);\n/\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Note the ",(0,l.jsx)(n.code,{children:"/"})," at the end of the query statement"]}),"\n",(0,l.jsx)(n.h3,{id:"ora-02261-such-unique-or-primary-key-already-exists-in-the-table",children:"ORA-02261: such unique or primary key already exists in the table"}),"\n",(0,l.jsxs)(n.p,{children:["You simply have a stupid ",(0,l.jsx)(n.code,{children:"/"})," at the end of your statement, such as"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE BRANCH(\nBRA_CODE NUMBER NOT NULL PRIMARY KEY,\nBRA_NAME VARCHAR(15),\nBRA_ADDR VARCHAR(30),\n CITY_ID NUMBER);\n\nALTER TABLE BRANCH ADD CONSTRAINT UNIQUE_BRANCH_NAME UNIQUE (BRA_NAME);\n\\\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Note the ",(0,l.jsx)(n.code,{children:"/"})," at the end of the query statement"]}),"\n",(0,l.jsx)(n.h3,{id:"change-varchar-column-to-clob",children:"Change varchar Column to CLOB"}),"\n",(0,l.jsx)(n.p,{children:"Given that the operation of moving from a varchar column to a CLOB is disallowed, the most straightforward way would be\nto create a new column and move the data from the old column to the new column:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE atable ADD (tmpdetails  CLOB);\nUPDATE atable SET tmpdetails=details;\nCOMMIT;\nALTER TABLE atable DROP COLUMN details;\nALTER TABLE atable RENAME COLUMN tmpdetails TO details;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},5971:(e,n,s)=>{s.d(n,{A:()=>l});const l="data:image/png;base64,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"},5246:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var l=s(2340);const t={},a=l.createContext(t);function r(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);