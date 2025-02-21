"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8379],{1538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(8040),r=n(5246);const s={slug:"java-stream",title:"Java 8 Stream",authors:"jiaqi",tags:["Java"]},i=void 0,l={permalink:"/blog/java-stream",editUrl:"https://github.com/QubitPi/fast-ws/tree/master/docs/blog/2021-04-30-java-stream.md",source:"@site/blog/2021-04-30-java-stream.md",title:"Java 8 Stream",description:"[//]: # (Copyright 2025 Jiaqi Liu. All rights reserved.)",date:"2021-04-30T00:00:00.000Z",formattedDate:"April 30, 2021",tags:[{label:"Java",permalink:"/blog/tags/java"}],readingTime:2.7,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of FastWS",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"java-stream",title:"Java 8 Stream",authors:"jiaqi",tags:["Java"]},unlisted:!1,prevItem:{title:"Querydsl - A Type-Safe Query Writer for Java",permalink:"/blog/querydsl"},nextItem:{title:"PUT v.s. POST",permalink:"/blog/put-vs-post"}},o={authorsImageUrls:[void 0]},c=[{value:"Combining a Collection of Predicates",id:"combining-a-collection-of-predicates",level:2},{value:"Collecting Stream containing &quot;null&quot; to List",id:"collecting-stream-containing-null-to-list",level:2},{value:"Sorting",id:"sorting",level:2},{value:"Remove Duplicates from a List of Objects based on Property",id:"remove-duplicates-from-a-list-of-objects-based-on-property",level:2},{value:"Convert Iterable to Stream",id:"convert-iterable-to-stream",level:2},{value:"Convert Two Dimensional Array to List",id:"convert-two-dimensional-array-to-list",level:2},{value:"Preserve Order in Stream with collect",id:"preserve-order-in-stream-with-collect",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"combining-a-collection-of-predicates",children:"Combining a Collection of Predicates"}),"\n",(0,a.jsxs)(t.p,{children:["We chain a collection of Predicates by reducing them. In the following example, we have a list of predicates that we\ncombined using ",(0,a.jsx)(t.code,{children:"Predicate.and()"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'@Test\npublic void whenFilterListWithCollectionOfPredicatesUsingAnd_thenSuccess(){\n    List<Predicate<String>> allPredicates = new ArrayList<Predicate<String>>();\n    allPredicates.add(str -> str.startsWith("A"));\n    allPredicates.add(str -> str.contains("d"));\n    allPredicates.add(str -> str.length() > 4);\n\n    List<String> result = names.stream()\n        .filter(allPredicates.stream().reduce(x->true, Predicate::and))\n        .collect(Collectors.toList());\n\n    assertEquals(1, result.size());\n    assertThat(result, contains("Alexander"));\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Note that we use our base identity as:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"x->true\n"})}),"\n",(0,a.jsx)(t.p,{children:"That will be, however, different if we want to combine them using Predicate.or():"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'@Test\npublic void whenFilterListWithCollectionOfPredicatesUsingOr_thenSuccess(){\n    List<String> result = names.stream()\n        .filter(allPredicates.stream().reduce(x->false, Predicate::or))\n        .collect(Collectors.toList());\n\n    assertEquals(2, result.size());\n    assertThat(result, contains("Adam","Alexander"));\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"collecting-stream-containing-null-to-list",children:'Collecting Stream containing "null" to List'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"person.stream()\n        .sorted(Comparator.comparingInt(Person::getDriverLicense))\n        .collect(Collectors.toList());\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If this stream contains a kid who doesn't know how to drive, the ",(0,a.jsx)(t.code,{children:"Collectors.toList()"})," might see a ",(0,a.jsx)(t.code,{children:"null"})," value, which\ncauses ",(0,a.jsx)(t.code,{children:"NullPointerException"}),", because ",(0,a.jsx)(t.code,{children:"Collectors.toList()"})," gives us a list implementation that doesn't permit ",(0,a.jsx)(t.code,{children:"null"}),"\nelements. ",(0,a.jsx)(t.code,{children:"ArrayList"}),", however, permits ",(0,a.jsx)(t.code,{children:"null"})," elements according to its JavaDoc. The solution them would be"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"person.stream()\n        .sorted(Comparator.comparingInt(Person::getDriverLicense))\n        .collect(Collectors.toCollection(ArrayList::new));\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Note that the last line is changed so that the collect procedure returns an uer-specified list implementation, which is\n",(0,a.jsx)(t.code,{children:"ArrayList"})]}),"\n",(0,a.jsx)(t.h2,{id:"sorting",children:"Sorting"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'public class User {\n\n    private final String name;\n    private final int age;\n}\n\nfinal List<User> users = Arrays.asList(\n        new User("C", 30),\n        new User("D", 40),\n        new User("A", 10),\n        new User("B", 20),\n        new User("E", 50)\n);\n\nList<User> sortedList = users.stream()\n            .sorted(Comparator.comparingInt(User::getAge))\n            .collect(Collectors.toList());\n'})}),"\n",(0,a.jsx)(t.h2,{id:"remove-duplicates-from-a-list-of-objects-based-on-property",children:"Remove Duplicates from a List of Objects based on Property"}),"\n",(0,a.jsx)(t.p,{children:"You can get a stream from the List and put in in the TreeSet from which you provide a custom comparator that compares\nthe property uniquely. Then if you really need a list you can put then back this collection into an ArrayList:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"import static java.util.Comparator.comparingInt;\nimport static java.util.stream.Collectors.collectingAndThen;\nimport static java.util.stream.Collectors.toCollection;\n\n...\nList<Employee> unique = employee.stream()\n        .collect(\n                collectingAndThen(\n                        toCollection(() -> new TreeSet<>(comparingInt(Employee::getId))),\n                        ArrayList::new\n                )\n        );\n"})}),"\n",(0,a.jsx)(t.p,{children:"Given the example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'List<Employee> employee = Arrays.asList(new Employee(1, "John"), new Employee(1, "Bob"), new Employee(2, "Alice"));\n'})}),"\n",(0,a.jsx)(t.p,{children:"It will output:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"[Employee{id=1, name='John'}, Employee{id=2, name='Alice'}]\n"})}),"\n",(0,a.jsx)(t.h2,{id:"convert-iterable-to-stream",children:"Convert Iterable to Stream"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"StreamSupport.stream(iterable.spliterator(), false)\n        .filter(...)\n        .moreStreamOps(...);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"convert-two-dimensional-array-to-list",children:"Convert Two Dimensional Array to List"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"List<Foo> collection = Arrays.stream(array)  //'array' is two-dimensional\n        .flatMap(Arrays::stream)\n        .collect(Collectors.toList());\n"})}),"\n",(0,a.jsx)(t.h2,{id:"preserve-order-in-stream-with-collect",children:"Preserve Order in Stream with collect"}),"\n",(0,a.jsxs)(t.p,{children:['Say we would like to process a list such as ["blah", "blah", "yep"] and get ["blah (2 times)", "yep"], we will collect\nthem to a ',(0,a.jsx)(t.code,{children:"LinkedHashMap"})," to get the expected result:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'return messages.stream()\n        .collect(groupingBy(Function.identity(), LinkedHashMap::new, summingInt(e -> 1)))\n        .entrySet()\n        .stream()\n        .map(e -> e.getKey()+(e.getValue() == 1 ? "" : " (" + e.getValue() +" times)"))\n        .collect(toList());\n'})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5246:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(2340);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);