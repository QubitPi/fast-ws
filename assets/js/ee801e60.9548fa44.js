"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3452],{3815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(5893),a=t(1151);const o={slug:"weak-references",title:"Understanding Weak References",authors:"jiaqi",tags:["Java"]},s=void 0,i={permalink:"/jersey-webservice-template/blog/weak-references",editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/blog/2023-11-24-java-weak-reference.md",source:"@site/blog/2023-11-24-java-weak-reference.md",title:"Understanding Weak References",description:"Strong References",date:"2023-11-24T00:00:00.000Z",formattedDate:"November 24, 2023",tags:[{label:"Java",permalink:"/jersey-webservice-template/blog/tags/java"}],readingTime:8.01,hasTruncateMarker:!1,authors:[{name:"Jack",title:"Maintainer of Jersey Webservice Template",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"weak-references",title:"Understanding Weak References",authors:"jiaqi",tags:["Java"]},unlisted:!1,nextItem:{title:"What is Java EE",permalink:"/jersey-webservice-template/blog/java-ee"}},c={authorsImageUrls:[void 0]},l=[{value:"Strong References",id:"strong-references",level:2},{value:"When Strong References are Too Strong",id:"when-strong-references-are-too-strong",level:2},{value:"Weak References",id:"weak-references",level:2},{value:"Reference Queues",id:"reference-queues",level:2},{value:"Different Degrees of Weakness",id:"different-degrees-of-weakness",level:2},{value:"Soft References",id:"soft-references",level:2},{value:"Phantom References",id:"phantom-references",level:2}];function h(e){const n={code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"strong-references",children:"Strong References"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"strong reference"})," is an ordinary Java reference, the kind you use every day. For example, the code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"StringBuffer buffer = new StringBuffer();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["creates a new ",(0,r.jsx)(n.code,{children:"StringBuffer"})," and stores a strong reference to it in the variable ",(0,r.jsx)(n.code,{children:"buffer"}),". Yes, yes, this is kiddie\nstuff, but bear with me. ",(0,r.jsx)(n.em,{children:'The important part about strong references -- the part that makes them "strong" -- is how they\ninteract with the garbage collector'}),". Specifically, if an object is reachable via a chain of strong references (strongly\nreachable), it is not eligible for garbage collection. As you don't want the garbage collector destroying objects you're\nworking on, this is normally exactly what you want."]}),"\n",(0,r.jsx)(n.h2,{id:"when-strong-references-are-too-strong",children:"When Strong References are Too Strong"}),"\n",(0,r.jsxs)(n.p,{children:["It's not uncommon for an application to use classes that it can't reasonably extend. The class might simply be marked\n",(0,r.jsx)(n.code,{children:"final"}),", or it could be something more complicated, such as an interface returned by a factory method backed by an\nunknown (and possibly even unknowable) number of concrete implementations. Suppose you have to use a class ",(0,r.jsx)(n.code,{children:"Widget"})," and,\nfor whatever reason, it isn't possible or practical to extend ",(0,r.jsx)(n.code,{children:"Widget"})," to add new functionality."]}),"\n",(0,r.jsxs)(n.p,{children:["What happens when you need to keep track of extra information about the object? In this case, suppose we find ourselves\nneeding to keep track of each Widget's serial number, but the Widget class doesn't actually have a serial number\nproperty -- and because Widget isn't extensible, we can't add one. No problem at all, that's what ",(0,r.jsx)(n.code,{children:"HashMaps"})," are for:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"serialNumberMap.put(widget, widgetSerialNumber);\n"})}),"\n",(0,r.jsx)(n.p,{children:"This might look okay on the surface, but the strong reference to widget will almost certainly cause problems. We have to\nknow (with 100% certainty) when a particular Widget's serial number is no longer needed, so we can remove its entry from\nthe map. Otherwise we're going to have a memory leak (if we don't remove Widgets when we should) or we're going to\ninexplicably find ourselves missing serial numbers (if we remove Widgets that we're still using). If these problems\nsound familiar, they should: they are exactly the problems that users of non-garbage-collected languages face when\ntrying to manage memory, and we're not supposed to have to worry about this in a more civilized language like Java."}),"\n",(0,r.jsx)(n.p,{children:"Another common problem with strong references is caching, particular with very large structures like images. Suppose you\nhave an application which has to work with user-supplied images, like the web site design tool I work on. Naturally you\nwant to cache these images, because loading them from disk is very expensive and you want to avoid the possibility of\nhaving two copies of the (potentially gigantic) image in memory at once. Because an image cache is supposed to prevent\nus from reloading images when we don't absolutely need to, you will quickly realize that the cache should always contain\na reference to any image which is already in memory. With ordinary strong references, though, that reference itself will\nforce the image to remain in memory, which requires you (just as above) to somehow determine when the image is no longer\nneeded in memory and remove it from the cache, so that it becomes eligible for garbage collection. Once again you are\nforced to duplicate the behavior of the garbage collector and manually determine whether or not an object should be in\nmemory."}),"\n",(0,r.jsx)(n.h2,{id:"weak-references",children:"Weak References"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"weak reference"}),", simply put, is a reference that isn't strong enough to force an object to remain in memory. Weak\nreferences allow you to leverage the garbage collector's ability to determine reachability for you, so you don't have to\ndo it yourself. You create a weak reference like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"WeakReference weakWidget = new WeakReference(widget);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["and then elsewhere in the code you can use ",(0,r.jsx)(n.code,{children:"weakWidget.get()"})," to get the actual Widget object. Of course the weak\nreference isn't strong enough to prevent garbage collection, so you may find (if there are no strong references to the\nwidget) that ",(0,r.jsx)(n.code,{children:"weakWidget.get()"})," suddenly starts returning ",(0,r.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:['To solve the "widget serial number" problem above, the easiest thing to do is use the built-in ',(0,r.jsx)(n.code,{children:"WeakHashMap"})," class.\n",(0,r.jsx)(n.code,{children:"WeakHashMap"})," works exactly like ",(0,r.jsx)(n.code,{children:"HashMap"}),", except that the keys (not the values!) are referred to using weak\nreferences. If a ",(0,r.jsx)(n.code,{children:"WeakHashMap"})," key becomes garbage, its entry is removed automatically. This avoids the pitfalls\ndescribed earlier and requires no changes other than the switch from ",(0,r.jsx)(n.code,{children:"HashMap"})," to a ",(0,r.jsx)(n.code,{children:"WeakHashMap"}),". If you're following\nthe standard convention of referring to your maps via the Map interface, no other code needs to even be aware of the\nchange."]}),"\n",(0,r.jsx)(n.h2,{id:"reference-queues",children:"Reference Queues"}),"\n",(0,r.jsxs)(n.p,{children:["Once a ",(0,r.jsx)(n.code,{children:"WeakReference"})," starts returning ",(0,r.jsx)(n.code,{children:"null"}),", the object it pointed to has become garbage and the ",(0,r.jsx)(n.code,{children:"WeakReference"}),"\nobject is pretty much useless. This generally means that some sort of cleanup is required; ",(0,r.jsx)(n.code,{children:"WeakHashMap"}),", for example,\nhas to remove such defunct entries to avoid holding onto an ever-increasing number of dead ",(0,r.jsx)(n.code,{children:"WeakReferences"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ReferenceQueue"})," class makes it easy to keep track of dead references. If you pass a ",(0,r.jsx)(n.code,{children:"ReferenceQueue"})," into a weak\nreference's constructor, the reference object will be automatically inserted into the reference queue when the object to\nwhich it pointed becomes garbage. You can then, at some regular interval, process the ",(0,r.jsx)(n.code,{children:"ReferenceQueue"})," and perform\nwhatever cleanup is needed for dead references."]}),"\n",(0,r.jsx)(n.h2,{id:"different-degrees-of-weakness",children:"Different Degrees of Weakness"}),"\n",(0,r.jsxs)(n.p,{children:['Up to this point I\'ve just been referring to "weak references", but there are actually ',(0,r.jsx)(n.strong,{children:"4 degrees of reference\nstrength"})," (in order from strongest to weakest):"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"strong"}),"\n",(0,r.jsx)(n.li,{children:"soft"}),"\n",(0,r.jsx)(n.li,{children:"weak"}),"\n",(0,r.jsx)(n.li,{children:"phantom"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We've already discussed strong and weak references, so let's take a look at the other two."}),"\n",(0,r.jsx)(n.h2,{id:"soft-references",children:"Soft References"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"soft reference"})," is exactly like a weak reference, except that it is less eager to throw away the object to which it\nrefers. An object which is only weakly reachable will be discarded at the next garbage collection cycle, but an object\nwhich is softly reachable will generally stick around for a while."]}),"\n",(0,r.jsxs)(n.p,{children:["Soft references aren't required to behave any differently than weak references, but in practice softly reachable objects\nare generally retained as long as memory is in plentiful supply. ",(0,r.jsx)(n.strong,{children:"This makes them an excellent foundation for a\ncache"}),", such as the image cache described above, since you can let the garbage collector worry about both how reachable\nthe objects are and how badly it needs the memory they are consuming."]}),"\n",(0,r.jsx)(n.h2,{id:"phantom-references",children:"Phantom References"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"phantom reference"})," is quite different than either soft reference or weak reference. Its grip on its object is so\ntenuous that you can't even retrieve the object - its ",(0,r.jsx)(n.code,{children:"get()"})," method always returns ",(0,r.jsx)(n.code,{children:"null"}),". ",(0,r.jsxs)(n.strong,{children:["The only use for such a\nreference is keeping track of when it gets enqueued into a ",(0,r.jsx)(n.code,{children:"ReferenceQueue"}),", as at that point you know the object to\nwhich it pointed is dead"]}),". How is that different from weak reference, though?"]}),"\n",(0,r.jsxs)(n.p,{children:["The difference is in exactly when the enqueuing happens. ",(0,r.jsx)(n.code,{children:"WeakReferences"}),' are enqueued as soon as the object to which\nthey point becomes weakly reachable. This is before finalization or garbage collection has actually happened; in theory\nthe object could even be "resurrected" by an unorthodox ',(0,r.jsx)(n.code,{children:"finalize()"})," method, but the ",(0,r.jsx)(n.code,{children:"WeakReference"})," would remain dead.\n",(0,r.jsx)(n.code,{children:"PhantomReferences"})," are enqueued only when the object is physically removed from memory, and the ",(0,r.jsx)(n.code,{children:"get()"})," method always\nreturns ",(0,r.jsx)(n.code,{children:"null"}),' specifically to prevent you from being able to "resurrect" an almost-dead object.']}),"\n",(0,r.jsxs)(n.p,{children:["What good are ",(0,r.jsx)(n.code,{children:"PhantomReferences"}),"? I'm only aware of two serious cases for them: first, they allow you to determine\nexactly when an object was removed from memory. They are in fact the only way to determine that. This isn't generally\nthat useful, but might come in handy in certain very specific circumstances like manipulating large images: if you know\nfor sure that an image should be garbage collected, you can wait until it actually is before attempting to load the next\nimage, and therefore make the dreaded ",(0,r.jsx)(n.code,{children:"OutOfMemoryError"})," less likely."]}),"\n",(0,r.jsxs)(n.p,{children:["Second, phantom references avoid a fundamental problem with finalization: ",(0,r.jsx)(n.code,{children:"finalize()"}),' methods can "resurrect" objects\nby creating new strong references to them. So what, you say? Well, the problem is that an object which overrides\n',(0,r.jsx)(n.code,{children:"finalize()"}),' must now be determined to be garbage in at least two separate garbage collection cycles in order to be\ncollected. When the first cycle determines that it is garbage, it becomes eligible for finalization. Because of the\n(slim, but unfortunately real) possibility that the object was "resurrected" during finalization, the garbage collector\nhas to run again before the object can actually be removed. And because finalization might not have happened in a timely\nfashion, an arbitrary number of garbage collection cycles might have happened while the object was waiting for\nfinalization. This can mean serious delays in actually cleaning up garbage objects, and is why you can get\n',(0,r.jsx)(n.code,{children:"OutOfMemoryErrors"})," even when most of the heap is garbage."]}),"\n",(0,r.jsxs)(n.p,{children:["With phantom reference, this situation is impossible -- when a ",(0,r.jsx)(n.code,{children:"PhantomReference"})," is enqueued, there is absolutely no\nway to get a pointer to the now-dead object (which is good, because it isn't in memory any longer). Because\n",(0,r.jsx)(n.code,{children:"PhantomReference"})," cannot be used to resurrect an object, the object can be instantly cleaned up during the first\ngarbage collection cycle in which it is found to be phantomly reachable. You can then dispose whatever resources you\nneed to at your convenience."]}),"\n",(0,r.jsxs)(n.p,{children:["Arguably, the ",(0,r.jsx)(n.code,{children:"finalize()"})," method should never have been provided in the first place. phantom references are definitely\nsafer and more efficient to use, and eliminating ",(0,r.jsx)(n.code,{children:"finalize()"})," would have made parts of the VM considerably simpler. But,\nthey're also more work to implement, so I confess to still using ",(0,r.jsx)(n.code,{children:"finalize()"})," most of the time. The good news is that at\nleast you have a choice."]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(7294);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);