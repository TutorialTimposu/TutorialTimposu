"use strict";(self.webpackChunktimposu=self.webpackChunktimposu||[]).push([[8609],{3238:(a,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>e,toc:()=>o});const e=JSON.parse('{"id":"java-generic/generic-invariant","title":"Java Generic Invariant","description":"Secara default sifat generic adalah invariant , yang artinya tidak boleh di subtitusi dengan subtype(class child) atau supertype(class parent) , misalnya saat kita membuat object MyClass, maka tidak sama dengan MyClass, walaupun String adalah turunan dari Object , dan begitupun sebaliknya.","source":"@site/tutorial/java/java-generic/04-generic-invariant.md","sourceDirName":"java-generic","slug":"/java-generic/generic-invariant","permalink":"/java/java-generic/generic-invariant","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"Java Generic Invariant"},"sidebar":"tutorialSidebar","previous":{"title":"Java Generic Method","permalink":"/java/java-generic/generic-method"},"next":{"title":"Java Generic Covariant","permalink":"/java/java-generic/generic-covariant"}}');var i=n(4848),s=n(8453);const r={sidebar_position:7,title:"Java Generic Invariant"},c=void 0,l={},o=[];function u(a){const t={code:"code",em:"em",p:"p",pre:"pre",...(0,s.R)(),...a.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Secara default sifat generic adalah ",(0,i.jsx)(t.em,{children:"invariant"})," , yang artinya tidak boleh di subtitusi dengan subtype(class child) atau supertype(class parent) , misalnya saat kita membuat object ",(0,i.jsx)(t.code,{children:"MyClass<String>"}),", maka tidak sama dengan ",(0,i.jsx)(t.code,{children:"MyClass<Object>"}),", walaupun ",(0,i.jsx)(t.em,{children:"String"})," adalah turunan dari ",(0,i.jsx)(t.em,{children:"Object"})," , dan begitupun sebaliknya."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"void doInvariant(MyClass<Object> data) {\n\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Contoh:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'public class DemoInvariant {\n\t\n\tstatic class MyClass<T> {\n\t\t\n\t\tprivate T value;\n\t\t\n\t\tpublic MyClass(T value) {\n\t\t\tthis.value = value;\n\t\t}\n\t\t\n\t\tpublic T getValue() {\n\t\t\treturn value;\n\t\t}\n\t\t\n\t\tpublic void setValue(T value) {\n\t\t\tthis.value = value;\n\t\t}\n\t\t\n\t}\n\n\tpublic static void doInvariant(MyClass<Object> data) {\n\t\tSystem.out.println(data.getValue());\n\t}\n\t\n\tpublic static void main(String[] args) {\n\t\tMyClass<String> strData = new MyClass<>("Halo semua...");\n//\t\tdoInvariant(strData); // ERROR\n\t\tSystem.out.println(strData.getValue());\n\t\t\n\t\tMyClass<Object> objData = new MyClass<>(3000);\n//\t\tMyClass<Integer> intData = objData; // ERROR\n\t\tdoInvariant(objData);\n\t}\n\t\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Output:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Halo semua...\n3000\n"})}),"\n",(0,i.jsx)(t.p,{children:"Jadi dari program diatas, tidak ada hubungan Polimorfisme  dan Inheritance di Generic Java."})]})}function d(a={}){const{wrapper:t}={...(0,s.R)(),...a.components};return t?(0,i.jsx)(t,{...a,children:(0,i.jsx)(u,{...a})}):u(a)}},8453:(a,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var e=n(6540);const i={},s=e.createContext(i);function r(a){const t=e.useContext(s);return e.useMemo((function(){return"function"==typeof a?a(t):{...t,...a}}),[t,a])}function c(a){let t;return t=a.disableParentContext?"function"==typeof a.components?a.components(i):a.components||i:r(a.components),e.createElement(s.Provider,{value:t},a.children)}}}]);