"use strict";(self.webpackChunktimposu=self.webpackChunktimposu||[]).push([[5698],{7152:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>e,toc:()=>m});var e=a(6960),i=a(4848),r=a(8453);const d={slug:"java-comparator-interface",title:"Belajar Java Comparator",authors:"topekox",tags:["java","java comparator"]},o=void 0,s={authorsImageUrls:[void 0]},m=[{value:"Contoh",id:"contoh",level:3},{value:"Contoh 2 field",id:"contoh-2-field",level:3}];function l(t){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Pada postingan sebelumnya, kita bisa membandingkan class dengan mensortirnya dengan menggunakan ",(0,i.jsx)(n.a,{href:"/blog/java-comparable-interface",children:"comparable"}),". Dengan comparable kita dapat menggunakan class sendiri sebagai object comparable dengan mengimplementasi class Comparable, namun bagaimana dengan class milik orang lain yang ingin kita comparable. Dengan kasus seperti itu kita dapat menggunakan interface generic bernama Comparator. Interface Comparator akan mengimplementasikan method ",(0,i.jsx)(n.code,{children:"int compare(T o1, T o2)"})," yang nanti melakukan compare antara 2 objek, yang akan mengembalikan nilai bilangan bulat negatif, nol, dan bilangan bulat positif:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["negatif",":argumen"," pertama kurang dari argumen kedua."]}),"\n",(0,i.jsx)(n.li,{children:"nol: argumen pertama sama dengan argumen kedua."}),"\n",(0,i.jsx)(n.li,{children:"positif: argumen pertama lebih besar dari yang argumen kedua."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"contoh",children:"Contoh"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import java.util.Arrays;\nimport java.util.Comparator;\n\npublic class DemoComparator {\n\t\n\tstatic class Student {\n\t\t\n\t\tprivate Integer id;\n\t\tprivate String name;\n\t\t\n\t\tpublic Student(Integer id, String name) {\n\t\t\tthis.id = id;\n\t\t\tthis.name = name;\n\t\t}\n\t\t\n\t\tpublic Integer getId() {\n\t\t\treturn id;\n\t\t}\n\n\t\tpublic void setId(Integer id) {\n\t\t\tthis.id = id;\n\t\t}\n\t\t\n\t\tpublic String getName() {\n\t\t\treturn name;\n\t\t}\n\t\t\n\t\tpublic void setName(String name) {\n\t\t\tthis.name = name;\n\t\t}\n\t\t\n\t\t@Override\n\t\tpublic String toString() {\n\t\t\treturn "Student (id = " + id + ", name = " + name + ")";\n\t\t}\n\t}\n\t\n\tstatic class SortUtil implements Comparator<Student> {\n\n\t\t@Override\n\t\tpublic int compare(Student arg0, Student arg1) {\n\t\t\treturn arg0.getId() - arg1.getId();\n\t\t}\t\t\n\t}\n\t\n\tpublic static void main(String[] args) {\n\t\tStudent[] students = {\n\t\t\t\tnew Student(3, "Ade"),\n\t\t\t\tnew Student(2, "Ray"),\n\t\t\t\tnew Student(4, "Masyita"),\n\t\t\t\tnew Student(1, "Nurul")\n\t\t};\n\t\t\n\t\tSystem.out.println("Sebelum sorting");\n\t\t\n\t\tfor (Student s : students) {\n\t\t\tSystem.out.println(s.toString());\t\t\t\n\t\t}\n\t\t\n\t\tArrays.sort(students, new SortUtil());\n\t\t\n\t\tSystem.out.println("\\nSetelah sorting");\n\t\t\n\t\tfor (Student s : students) {\n\t\t\tSystem.out.println(s.toString());\t\t\t\n\t\t}\t\t\n\t}\n\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Sebelum sorting\nStudent (id = 3, name = Ade)\nStudent (id = 2, name = Ray)\nStudent (id = 4, name = Masyita)\nStudent (id = 1, name = Nurul)\n\nSetelah sorting\nStudent (id = 1, name = Nurul)\nStudent (id = 2, name = Ray)\nStudent (id = 3, name = Ade)\nStudent (id = 4, name = Masyita)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Pada contoh di atas program melakukan sorting ",(0,i.jsx)(n.code,{children:"id"})," yang dilakukan pada method ",(0,i.jsx)(n.code,{children:"compare"})," implementasi dari interface Comparator, yang akan mengurutkan ",(0,i.jsx)(n.code,{children:"id"})," dari hasil ",(0,i.jsx)(n.code,{children:"arg0.getId() - arg1.getId()"}),", yang kemudian disorting setelah dipanggil pada statement ",(0,i.jsx)(n.code,{children:"Arrays.sort(students, new SortUtil())"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"@Override\npublic int compare(Student arg0, Student arg1) {\n\treturn arg0.getId() - arg1.getId();\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"contoh-2-field",children:"Contoh 2 field"}),"\n",(0,i.jsx)(n.p,{children:"Kali ini kita akan melakukan compare dengan menggunakan 2 field:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import java.util.Arrays;\nimport java.util.Comparator;\n\npublic class DemoComparatorMultiField {\n\n\tstatic class Student {\n\n\t\tprivate Integer id;\n\t\tprivate String name;\n\n\t\tpublic Student(Integer id, String name) {\n\t\t\tthis.id = id;\n\t\t\tthis.name = name;\n\t\t}\n\n\t\tpublic Integer getId() {\n\t\t\treturn id;\n\t\t}\n\n\t\tpublic void setId(Integer id) {\n\t\t\tthis.id = id;\n\t\t}\n\n\t\tpublic String getName() {\n\t\t\treturn name;\n\t\t}\n\n\t\tpublic void setName(String name) {\n\t\t\tthis.name = name;\n\t\t}\n\n\t\t@Override\n\t\tpublic String toString() {\n\t\t\treturn "Student (id = " + id + ", name = " + name + ")";\n\t\t}\n\t}\n\n\tstatic class SortUtil implements Comparator<Student> {\n\n\t\t@Override\n\t\tpublic int compare(Student arg0, Student arg1) {\n\t\t\t// compare id\n\t\t\tint idCompare = arg0.getId().compareTo(arg1.getId());\n\n\t\t\t// compare name\n\t\t\tint nameCompare = arg0.getName().compareTo(arg1.getName());\n\n\t\t\t// akan melakukan compare dengan sortir name terlebih dahulu setelah itu sortir id\n\t\t\treturn (nameCompare == 0) ? idCompare : nameCompare;\n\t\t}\n\t}\n\n\tpublic static void main(String[] args) {\n\n\t\tStudent[] students = { \n\t\t\t\tnew Student(3, "Ade"),\n\t\t\t\tnew Student(2, "Ray"), \n\t\t\t\tnew Student(4, "Masyita"),\n\t\t\t\tnew Student(1, "Nurul"), \n\t\t\t\tnew Student(6, "Randi"), \n\t\t\t\tnew Student(7, "Masyita"), \n\t\t\t\tnew Student(5, "Restu")\n\t\t};\n\n\t\tSystem.out.println("Sebelum sorting");\n\n\t\tfor (Student s : students) {\n\t\t\tSystem.out.println(s.toString());\n\t\t}\n\n\t\tArrays.sort(students, new SortUtil());\n\n\t\tSystem.out.println("\\nSetelah sorting");\n\n\t\tfor (Student s : students) {\n\t\t\tSystem.out.println(s.toString());\n\t\t}\n\t}\n\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Sebelum sorting\nStudent (id = 3, name = Ade)\nStudent (id = 2, name = Ray)\nStudent (id = 4, name = Masyita)\nStudent (id = 1, name = Nurul)\nStudent (id = 6, name = Randi)\nStudent (id = 7, name = Masyita)\nStudent (id = 5, name = Restu)\n\nSetelah sorting\nStudent (id = 3, name = Ade)\nStudent (id = 4, name = Masyita)\nStudent (id = 7, name = Masyita)\nStudent (id = 1, name = Nurul)\nStudent (id = 6, name = Randi)\nStudent (id = 2, name = Ray)\nStudent (id = 5, name = Restu)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Pada contoh di atas method ",(0,i.jsx)(n.code,{children:"compare()"})," akan melakukan sortir yang mana akan melakukan sortir terhadap ",(0,i.jsx)(n.em,{children:"name"})," terlebih dahulu setelah itu baru sortir ",(0,i.jsx)(n.em,{children:"id"})," ."]})]})}function u(t={}){const{wrapper:n}={...(0,r.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(l,{...t})}):l(t)}},8453:(t,n,a)=>{a.d(n,{R:()=>d,x:()=>o});var e=a(6540);const i={},r=e.createContext(i);function d(t){const n=e.useContext(r);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function o(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:d(t.components),e.createElement(r.Provider,{value:n},t.children)}},6960:t=>{t.exports=JSON.parse('{"permalink":"/blog/java-comparator-interface","source":"@site/blog/2024-10-05-java-comparator-interface.md","title":"Belajar Java Comparator","description":"Pada postingan sebelumnya, kita bisa membandingkan class dengan mensortirnya dengan menggunakan comparable. Dengan comparable kita dapat menggunakan class sendiri sebagai object comparable dengan mengimplementasi class Comparable, namun bagaimana dengan class milik orang lain yang ingin kita comparable. Dengan kasus seperti itu kita dapat menggunakan interface generic bernama Comparator. Interface Comparator akan mengimplementasikan method int compare(T o1, T o2) yang nanti melakukan compare antara 2 objek, yang akan mengembalikan nilai bilangan bulat negatif, nol, dan bilangan bulat positif:","date":"2024-10-05T00:00:00.000Z","tags":[{"inline":true,"label":"java","permalink":"/blog/tags/java"},{"inline":true,"label":"java comparator","permalink":"/blog/tags/java-comparator"}],"readingTime":3.57,"hasTruncateMarker":true,"authors":[{"name":"Ucup TopekoX","title":"TimposuLabs creator","imageURL":"https://topekox.github.io/assets/images/avatar.jpeg","key":"topekox","page":null}],"frontMatter":{"slug":"java-comparator-interface","title":"Belajar Java Comparator","authors":"topekox","tags":["java","java comparator"]},"unlisted":false,"nextItem":{"title":"Belajar Java Comparable","permalink":"/blog/java-comparable-interface"}}')}}]);