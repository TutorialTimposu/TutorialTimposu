"use strict";(self.webpackChunktimposu=self.webpackChunktimposu||[]).push([[7860],{7921:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var s=e(1527),t=e(4848),l=e(8453);const o={slug:"java-anonymous-class",title:"Apa itu Java Anonymous Class",authors:"topekox",tags:["java"]},i=void 0,r={authorsImageUrls:[void 0]},u=[{value:"Membuat class anonymous",id:"membuat-class-anonymous",level:2},{value:"Referensi",id:"referensi",level:2}];function c(a){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Anonymous class atau class anomim adalah class yang tidak memiliki nama dan biasanya hanya digunakan sekali pakai. Class ini berguna untuk membuat kode yang ringkas dan bersih. Gunakan kelas anonim jika kita perlu menggunakan kelas lokal hanya sekali saja."}),"\n",(0,t.jsx)(n.h2,{id:"membuat-class-anonymous",children:"Membuat class anonymous"}),"\n",(0,t.jsx)(n.p,{children:"Pada contoh berikut kita akan membuat class anonymous dalam inner class:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public class DemoAnonymousClass {\n\n\tinterface Hello {\n\t\tvoid sayHello(String name);\n\t}\n\t\n\tpublic static void main(String[] args) {\n\t\tHello helloUcup = new Hello() {\n\n\t\t\t@Override\n\t\t\tpublic void sayHello(String name) {\n\t\t\t\tSystem.out.println("Halo " + name);\n\t\t\t}\n\t\t};\n\t\thelloUcup.sayHello("Ucup"); // output: Halo Ucup\n\t}\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Pada contoh di atas anonymous class adalah sebuah expression, yang berarti kita membuat class dalam sebuah expression."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Hello helloUcup = new Hello() {\n\t@Override\n\tpublic void sayHello(String name) {\n\t\tSystem.out.println("Halo " + name);\n\t}\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"referensi",children:"Referensi"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html",children:"https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html"})}),"\n"]})]})}function m(a={}){const{wrapper:n}={...(0,l.R)(),...a.components};return n?(0,t.jsx)(n,{...a,children:(0,t.jsx)(c,{...a})}):c(a)}},8453:(a,n,e)=>{e.d(n,{R:()=>o,x:()=>i});var s=e(6540);const t={},l=s.createContext(t);function o(a){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof a?a(n):{...n,...a}}),[n,a])}function i(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(t):a.components||t:o(a.components),s.createElement(l.Provider,{value:n},a.children)}},1527:a=>{a.exports=JSON.parse('{"permalink":"/blog/java-anonymous-class","source":"@site/blog/2023-10-03-java-anonymous-class.md","title":"Apa itu Java Anonymous Class","description":"Anonymous class atau class anomim adalah class yang tidak memiliki nama dan biasanya hanya digunakan sekali pakai. Class ini berguna untuk membuat kode yang ringkas dan bersih. Gunakan kelas anonim jika kita perlu menggunakan kelas lokal hanya sekali saja.","date":"2023-10-03T00:00:00.000Z","tags":[{"inline":true,"label":"java","permalink":"/blog/tags/java"}],"readingTime":0.7,"hasTruncateMarker":true,"authors":[{"name":"Ucup TopekoX","title":"TimposuLabs creator","imageURL":"https://topekox.github.io/assets/images/avatar.jpeg","key":"topekox","page":null}],"frontMatter":{"slug":"java-anonymous-class","title":"Apa itu Java Anonymous Class","authors":"topekox","tags":["java"]},"unlisted":false,"prevItem":{"title":"Cara Menulis Versi Rilis pada Software - Semantic Versioning & Changelog","permalink":"/blog/menulis-versi-rilis-software"},"nextItem":{"title":"Apa itu Java Recursive Method","permalink":"/blog/java-recursive-method"}}')}}]);