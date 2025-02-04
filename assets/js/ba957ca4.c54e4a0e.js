"use strict";(self.webpackChunktimposu=self.webpackChunktimposu||[]).push([[5111],{9340:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var i=e(4255),r=e(4848),t=e(8453);const s={slug:"menulis-versi-rilis-software",title:"Cara Menulis Versi Rilis pada Software - Semantic Versioning & Changelog",authors:"topekox",tags:["blog","version","log"]},o=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Major",id:"major",level:2},{value:"Minor",id:"minor",level:2},{value:"Patch",id:"patch",level:2},{value:"Pre-release",id:"pre-release",level:2},{value:"Contoh Kasus Semantic Versioning",id:"contoh-kasus-semantic-versioning",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Referensi",id:"referensi",level:2}];function h(a){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"})," adalah best practice dari prinsip penulisan versi software, yang bertujuan untuk menjelaskan dasar perubahan pada perilisan produk software. Ini sudah menjadi standar dalam template library, terutama dalam project open source. Perilisan versi software dibagi menjadi pola tiga bagian utama yaitu:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Major"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Minor"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Patch"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Selain ketiga bagian versi di atas, sebenarnya masih ada versi ",(0,r.jsx)(n.strong,{children:"Pre-release"})," version, yaitu versi yang dirilis sebagai uji coba sebelum final rilis. Ini sebenarnya tidak wajib, tergantung kebutuhan."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Unsplash"})}),"\n",(0,r.jsx)(n.h2,{id:"major",children:"Major"}),"\n",(0,r.jsx)(n.p,{children:"Major version adalah versi utama. Major version yang mengalami perubahan signifikan pada aplikasi dan tidak kompatibilitas pada versi sebelumnya. Ini berarti bahwa jika Anda memperbarui kode Major lama anda ke versi Major utama yang baru, kode lama anda mungkin tidak lagi berfungsi dengan versi paket yang baru. Major version akan di-upgrade saat merilis versi dengan banyak perubahan, seperti perombakan code, perubahan requirement, ada fitur yang dihapus, penambahan fitur secara besar-besaran, atau perubahan yang tidak backward-compatible dengan versi Major sebelumnya. Jadi, ketika user melakukan upgrade Major version, user akan menghadapi kemungkinan error karena tidak backward-compatible pada software mereka. Contohnya ketika menggunakan Angular 15.0.0 lalu upgrade ke Angular 18.0.0 maka kemungkinan besar akan menghadapi error dan perlu penyesuaian agar kompatibel dengan versi terbaru. Seperti pada Angular 15.0.0 requirement minimalnya adalah Nodejs 14.20.0, sedangkan pada Angular 18.0.0 requirement minimalnya adalah Nodejs 18.19.1. Jadi, user juga perlu upgrade Nodejs saat upgrade Angular."}),"\n",(0,r.jsx)(n.h2,{id:"minor",children:"Minor"}),"\n",(0,r.jsxs)(n.p,{children:['Minor version adalah versi perubahan yang backward-compatible. Minor version akan di-upgrade saat merilis fitur yang tidak berdampak error pada existing software, dan akan di-reset ke "0" saat Major version rilis. Jadi, ketika user ketika melakukan upgrade Minor version, user bisa menikmati fitur baru dan aman dari error. Kalaupun ada rencana perubahan yang tidak backward-compatible, maka di Minor version perlu diberi warning, bukan langsung dihapus. Contoh kasus dalam Java misalnya kita ingin mengganti sebuah function/method, maka kita tidak boleh hapus function tersebut di Minor version. Kita harus mempertahankan function tersebut dan diberi tanda ',(0,r.jsx)(n.code,{children:"@Depcreated"}),", lalu bikin function baru. Jadi, nantinya kita handle dua function di Minor version terbaru. Sehingga user yang menggunakan produk kita aplikasinya masih backward-compatible, tapi dengan warning agar mereka aware terhadap function baru. Function yang deprecated itu boleh dihapus saat Major version rilis. Intinya, di Minor version perubahan boleh dilakukan tapi harus backward-compatible. Contohnya pada AssertJ, ketika sebelumnya menggunakan AssertJ versi 3.16.0 lalu upgrade ke versi 3.17.0, user bisa menggunakan fitur baru ",(0,r.jsx)(n.code,{children:"BDDAssertions.thenNoException()"})," pada assertion unit test, dan upgrade tersebut tidak akan menyebabkan error."]}),"\n",(0,r.jsx)(n.h2,{id:"patch",children:"Patch"}),"\n",(0,r.jsxs)(n.p,{children:['Patch version adalah versi yang di-upgrade ketika merilis bugfix, improvement, atau refactor yang masih backward-compatible dengan versi sebelumnya, dan akan di-reset ke "0" saat Minor version atau Major version rilis. Jadi, saat user melakukan upgrade Patch version, tidak ada perubahan terkait fitur, kecuali perbaikan performa atau bugfixes dari versi sebelumnya. Misalnya ada perubahan algoritmanya yang diganti. Atau sebelumnya ada error pada case tertentu, setelah di-upgrade jadi tidak ada error. Tapi, jika fixing tersebut membutuhkan fitur baru, maka itu dirilis pada Minor version, bukan Patch version. Misalnya, bugs tersebut diperbaiki dengan cara membuat class baru, maka itu tidak bisa dirilis di Patch version, tapi di Minor version dan class yang lama diberi tanda ',(0,r.jsx)(n.code,{children:"@Deprecated"}),". Contoh rilis Patch version adalah pada library date-fns versi 3.0.5 ada bugs pada function ",(0,r.jsx)(n.code,{children:"areIntervalsOverlapping()"}),", lalu di versi 3.0.6 bugs tersebut diperbaiki."]}),"\n",(0,r.jsx)(n.h2,{id:"pre-release",children:"Pre-release"}),"\n",(0,r.jsx)(n.p,{children:'Selain itu, ada versi namanya Pre-release version, yaitu versi yang dirilis sebagai uji coba sebelum final rilis. Ini sebenarnya ini tidak wajib, tergantung kebutuhan. Pre-release ini tujuannya untuk kebutuhan testing, bukan untuk production, karena masih uji coba dan ada kemungkinan dibatalkan sebelum rilis jika dinilai belum layak / belum stabil. Pre-release ini ditulis dengan suffix "-alpha", "-beta", atau "-rc" (release candidate), beserta incremental number di belakangnya tergantung kesepakatan. Misalnya, sebelum merilis versi 3.1.0, maka sebagai uji coba versi 3.1.0-alpha1 yang dirilis. Jika ada fase uji coba tingkat selanjutnya, maka bisa ditulis 3.1.0-beta1. Atau jika menggunakan "-rc", maka penulisannya jadi 3.1.0-rc1. Setelah melewati fase uji coba dan dinyatakan layak dirilis, barulah versi 3.1.0 tanpa suffix Pre-release dirilis. Contohnya library SLF4J, sebelum merilis versi 2.0.0, mereka merilis versi 2.0.0-alpha1, 2.0.0-alpha2, 2.0.0-beta1, 2.0.0-beta2, hingga versi 2.0.0 rilis'}),"\n",(0,r.jsx)(n.h2,{id:"contoh-kasus-semantic-versioning",children:"Contoh Kasus Semantic Versioning"}),"\n",(0,r.jsx)(n.p,{children:"Contoh simulasi menggunakan Semantics Versioning adalah sebagai berikut:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Saat pertama rilis: ",(0,r.jsx)(n.code,{children:"1.0.0"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Ada bugfix suatu function: ",(0,r.jsx)(n.code,{children:"1.0.1"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Ada improvement performa: ",(0,r.jsx)(n.code,{children:"1.0.2"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Ada penambahan function baru yang backward-comaptible: ",(0,r.jsx)(n.code,{children:"1.1.0"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Ada bugfix terhadap function baru: ",(0,r.jsx)(n.code,{children:"1.1.1"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Ada function yang deprecated dan perlu diganti dengan yang baru: ",(0,r.jsx)(n.code,{children:"1.2.0"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Uji coba versi baru dengan perombakan dari versi sebelumnya: ",(0,r.jsx)(n.code,{children:"2.0.0-alpha"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Fitur Pre-release passed semua testing dan layak dirilis: ",(0,r.jsx)(n.code,{children:"2.0.0"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Ada improvement performa dari rilis sebelumnya: ",(0,r.jsx)(n.code,{children:"2.0.1"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Ada penambahan function baru lagi: ",(0,r.jsx)(n.code,{children:"2.1.0"}),";"]}),"\n",(0,r.jsx)(n.li,{children:"Begitu seterusnya..."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://keepachangelog.com/id-ID/1.0.0/",children:"Changelog"})," adalah sebuah file yang berisi daftar perubahan yang diurutkan secara kronologis untuk setiap versi dari sebuah proyek. Tujuan dari membuat changelog adalahntuk mempermudah pengguna dan kontributor melihat perubahan apa saja yang terjadi antara setiap rilis (atau versi) dari sebuah proyek. Siapa yang membutuhkan changelog? Baik pengguna ataupun pengembang, setiap orang yang menggunakan perangkat lunak adalah manusia yang peduli tentang apa yang ada di dalam perangkat lunak tersebut. Ketika perangkat lunak berubah, mereka ingin tahu apa yang berubah dan mengapa."]}),"\n",(0,r.jsx)(n.p,{children:"Prinsip-prinsip Dasar pembuatan Changelog:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Changelog ditulis untuk manusia, bukan mesin."}),"\n",(0,r.jsx)(n.li,{children:"Harus ada catatan untuk setiap versi."}),"\n",(0,r.jsx)(n.li,{children:"Setiap tipe perubahan yang sama harus dikelompokkan."}),"\n",(0,r.jsx)(n.li,{children:"Versi dan seksi harus dapat dirujuk."}),"\n",(0,r.jsx)(n.li,{children:"Versi yang terakhir harus ditulis di paling atas."}),"\n",(0,r.jsx)(n.li,{children:"Tanggal rilis setiap versi harus ditulis."}),"\n",(0,r.jsxs)(n.li,{children:["Berikan informasi jika kalian menggunakan ",(0,r.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Jenis-jenis perubahan dalam Changelog:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Added/Ditambahkan untuk fitur yang baru."}),"\n",(0,r.jsx)(n.li,{children:"Changed/Diubah untuk perubahan di fitur yang sudah ada."}),"\n",(0,r.jsx)(n.li,{children:"Deprecated/Akan Dihilangkan untuk fitur yang akan dihapus dalam waktu dekat."}),"\n",(0,r.jsx)(n.li,{children:"Removed/Dihilangkan untuk fitur yang sudah dihapus."}),"\n",(0,r.jsx)(n.li,{children:"Fixed/Diperbaiki untuk setiap perbaikan bugs."}),"\n",(0,r.jsx)(n.li,{children:"Security/Keamanan jika ada celah keamanan."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Sisakan bagian ",(0,r.jsx)(n.code,{children:"Unreleased/Belum Dirilis"})," di bagian paling atas file changelog untuk mencatat perubahan yang akan datang. Hal ini berguna untuk dua hal: Orang-orang bisa melihat perubahan apa saja yang akan datang. Saat waktu rilis datang, tinggal pindahkan bagian ",(0,r.jsx)(n.code,{children:"Unreleased/Belum Dirilis"})," ke catatan rilis versi baru di bawah."]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Tidak ada aturan baku dalam menamai file changelog, cukup berikan nama yang mudah dikenali oleh orang-orang supaya mudah untuk dibaca. Tapi nama file changelog yang umum digunakan ",(0,r.jsx)(n.code,{children:"CHANGELOG.md"}),", beberapa proyek menggunakan ",(0,r.jsx)(n.code,{children:"README"}),", ",(0,r.jsx)(n.code,{children:"CONTRIBUTING"}),", ",(0,r.jsx)(n.code,{children:"HISTORY"}),", ",(0,r.jsx)(n.code,{children:"NEWS"}),", ",(0,r.jsx)(n.code,{children:"RELEASE"})," dsb."]})}),"\n",(0,r.jsxs)(n.p,{children:["Berikut adalah contoh isi file changelog yang dibuat dalam format ",(0,r.jsx)(n.code,{children:"markdown"})," dengan nama file ",(0,r.jsx)(n.code,{children:"CHANGELOG.md"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",metastring:'title="CHANGELOG.md"',children:'# Changelog\r\n\r\nAll notable changes to this project will be documented in this file.\r\n\r\nThe format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),\r\nand this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).\r\n\r\n## [Unreleased]\r\n\r\n### Added\r\n\r\n- v1.1 Brazilian Portuguese translation.\r\n- v1.1 German Translation\r\n- v1.1 Spanish translation.\r\n- v1.1 Italian translation.\r\n- v1.1 Polish translation.\r\n- v1.1 Ukrainian translation.\r\n\r\n### Changed\r\n\r\n- Use frontmatter title & description in each language version template\r\n- Replace broken OpenGraph image with an appropriately-sized Keep a Changelog \r\n  image that will render properly (although in English for all languages)\r\n- Fix OpenGraph title & description for all languages so the title and \r\ndescription when links are shared are language-appropriate\r\n\r\n### Removed\r\n\r\n- Trademark sign previously shown after the project description in version \r\n0.3.0\r\n\r\n## [1.1.1] - 2023-03-05\r\n\r\n### Added\r\n\r\n- Arabic translation (#444).\r\n- v1.1 French translation.\r\n- v1.1 Dutch translation (#371).\r\n- v1.1 Russian translation (#410).\r\n- v1.1 Japanese translation (#363).\r\n- v1.1 Norwegian Bokm\xe5l translation (#383).\r\n- v1.1 "Inconsistent Changes" Turkish translation (#347).\r\n- Default to most recent versions available for each languages.\r\n- Display count of available translations (26 to date!).\r\n- Centralize all links into `/data/links.json` so they can be updated easily.\r\n\r\n### Fixed\r\n\r\n- Improve French translation (#377).\r\n- Improve id-ID translation (#416).\r\n- Improve Persian translation (#457).\r\n- Improve Russian translation (#408).\r\n- Improve Swedish title (#419).\r\n- Improve zh-CN translation (#359).\r\n- Improve French translation (#357).\r\n- Improve zh-TW translation (#360, #355).\r\n- Improve Spanish (es-ES) transltion (#362).\r\n- Foldout menu in Dutch translation (#371).\r\n- Missing periods at the end of each change (#451).\r\n- Fix missing logo in 1.1 pages.\r\n- Display notice when translation isn\'t for most recent version.\r\n- Various broken links, page versions, and indentations.\r\n\r\n### Changed\r\n\r\n- Upgrade dependencies: Ruby 3.2.1, Middleman, etc.\r\n\r\n### Removed\r\n\r\n- Unused normalize.css file.\r\n- Identical links assigned in each translation file.\r\n- Duplicate index file for the english version.\r\n\r\n## [1.1.0] - 2019-02-15\r\n\r\n### Added\r\n\r\n- Danish translation (#297).\r\n- Georgian translation from (#337).\r\n- Changelog inconsistency section in Bad Practices.\r\n\r\n### Fixed\r\n\r\n- Italian translation (#332).\r\n- Indonesian translation (#336).\r\n\r\n## [1.0.0] - 2017-06-20\r\n\r\n### Added\r\n\r\n- New visual identity by [@tylerfortune8](https://github.com/tylerfortune8).\r\n- Version navigation.\r\n- Links to latest released version in previous versions.\r\n- "Why keep a changelog?" section.\r\n- "Who needs a changelog?" section.\r\n- "How do I make a changelog?" section.\r\n- "Frequently Asked Questions" section.\r\n- New "Guiding Principles" sub-section to "How do I make a changelog?".\r\n- Simplified and Traditional Chinese translations from [@tianshuo](https://github.com/tianshuo).\r\n- German translation from [@mpbzh](https://github.com/mpbzh) & [@Art4](https://github.com/Art4).\r\n- Italian translation from [@azkidenz](https://github.com/azkidenz).\r\n- Swedish translation from [@magol](https://github.com/magol).\r\n- Turkish translation from [@emreerkan](https://github.com/emreerkan).\r\n- French translation from [@zapashcanon](https://github.com/zapashcanon).\r\n- Brazilian Portuguese translation from [@Webysther](https://github.com/Webysther).\r\n- Polish translation from [@amielucha](https://github.com/amielucha) & [@m-aciek](https://github.com/m-aciek).\r\n- Russian translation from [@aishek](https://github.com/aishek).\r\n- Czech translation from [@h4vry](https://github.com/h4vry).\r\n- Slovak translation from [@jkostolansky](https://github.com/jkostolansky).\r\n- Korean translation from [@pierceh89](https://github.com/pierceh89).\r\n- Croatian translation from [@porx](https://github.com/porx).\r\n- Persian translation from [@Hameds](https://github.com/Hameds).\r\n- Ukrainian translation from [@osadchyi-s](https://github.com/osadchyi-s).\r\n\r\n### Changed\r\n\r\n- Start using "changelog" over "change log" since it\'s the common usage.\r\n- Start versioning based on the current English version at 0.3.0 to help\r\n  translation authors keep things up-to-date.\r\n- Rewrite "What makes unicorns cry?" section.\r\n- Rewrite "Ignoring Deprecations" sub-section to clarify the ideal\r\n  scenario.\r\n- Improve "Commit log diffs" sub-section to further argument against\r\n  them.\r\n- Merge "Why can\u2019t people just use a git log diff?" with "Commit log\r\n  diffs".\r\n- Fix typos in Simplified Chinese and Traditional Chinese translations.\r\n- Fix typos in Brazilian Portuguese translation.\r\n- Fix typos in Turkish translation.\r\n- Fix typos in Czech translation.\r\n- Fix typos in Swedish translation.\r\n- Improve phrasing in French translation.\r\n- Fix phrasing and spelling in German translation.\r\n\r\n### Removed\r\n\r\n- Section about "changelog" vs "CHANGELOG".\r\n\r\n## [0.3.0] - 2015-12-03\r\n\r\n### Added\r\n\r\n- RU translation from [@aishek](https://github.com/aishek).\r\n- pt-BR translation from [@tallesl](https://github.com/tallesl).\r\n- es-ES translation from [@ZeliosAriex](https://github.com/ZeliosAriex).\r\n\r\n## [0.2.0] - 2015-10-06\r\n\r\n### Changed\r\n\r\n- Remove exclusionary mentions of "open source" since this project can\r\n  benefit both "open" and "closed" source projects equally.\r\n\r\n## [0.1.0] - 2015-10-06\r\n\r\n### Added\r\n\r\n- Answer "Should you ever rewrite a change log?".\r\n\r\n### Changed\r\n\r\n- Improve argument against commit logs.\r\n- Start following [SemVer](https://semver.org) properly.\r\n\r\n## [0.0.8] - 2015-02-17\r\n\r\n### Changed\r\n\r\n- Update year to match in every README example.\r\n- Reluctantly stop making fun of Brits only, since most of the world\r\n  writes dates in a strange way.\r\n\r\n### Fixed\r\n\r\n- Fix typos in recent README changes.\r\n- Update outdated unreleased diff link.\r\n\r\n## [0.0.7] - 2015-02-16\r\n\r\n### Added\r\n\r\n- Link, and make it obvious that date format is ISO 8601.\r\n\r\n### Changed\r\n\r\n- Clarified the section on "Is there a standard change log format?".\r\n\r\n### Fixed\r\n\r\n- Fix Markdown links to tag comparison URL with footnote-style links.\r\n\r\n## [0.0.6] - 2014-12-12\r\n\r\n### Added\r\n\r\n- README section on "yanked" releases.\r\n\r\n## [0.0.5] - 2014-08-09\r\n\r\n### Added\r\n\r\n- Markdown links to version tags on release headings.\r\n- Unreleased section to gather unreleased changes and encourage note\r\n  keeping prior to releases.\r\n\r\n## [0.0.4] - 2014-08-09\r\n\r\n### Added\r\n\r\n- Better explanation of the difference between the file ("CHANGELOG")\r\n  and its function "the change log".\r\n\r\n### Changed\r\n\r\n- Refer to a "change log" instead of a "CHANGELOG" throughout the site\r\n  to differentiate between the file and the purpose of the file \u2014 the\r\n  logging of changes.\r\n\r\n### Removed\r\n\r\n- Remove empty sections from CHANGELOG, they occupy too much space and\r\n  create too much noise in the file. People will have to assume that the\r\n  missing sections were intentionally left out because they contained no\r\n  notable changes.\r\n\r\n## [0.0.3] - 2014-08-09\r\n\r\n### Added\r\n\r\n- "Why should I care?" section mentioning The Changelog podcast.\r\n\r\n## [0.0.2] - 2014-07-10\r\n\r\n### Added\r\n\r\n- Explanation of the recommended reverse chronological release ordering.\r\n\r\n## [0.0.1] - 2014-05-31\r\n\r\n### Added\r\n\r\n- This CHANGELOG file to hopefully serve as an evolving example of a\r\n  standardized open source project CHANGELOG.\r\n- CNAME file to enable GitHub Pages custom domain.\r\n- README now contains answers to common questions about CHANGELOGs.\r\n- Good examples and basic guidelines, including proper date formatting.\r\n- Counter-examples: "What makes unicorns cry?".\r\n\r\n[unreleased]: https://github.com/olivierlacan/keep-a-changelog/compare/v1.1.1...HEAD\r\n[1.1.1]: https://github.com/olivierlacan/keep-a-changelog/compare/v1.1.0...v1.1.1\r\n[1.1.0]: https://github.com/olivierlacan/keep-a-changelog/compare/v1.0.0...v1.1.0\r\n[1.0.0]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.3.0...v1.0.0\r\n[0.3.0]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.2.0...v0.3.0\r\n[0.2.0]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.1.0...v0.2.0\r\n[0.1.0]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.8...v0.1.0\r\n[0.0.8]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.7...v0.0.8\r\n[0.0.7]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.6...v0.0.7\r\n[0.0.6]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.5...v0.0.6\r\n[0.0.5]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.4...v0.0.5\r\n[0.0.4]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.3...v0.0.4\r\n[0.0.3]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.2...v0.0.3\r\n[0.0.2]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.1...v0.0.2\r\n[0.0.1]: https://github.com/olivierlacan/keep-a-changelog/releases/tag/v0.0.1\n'})}),"\n",(0,r.jsx)(n.h2,{id:"referensi",children:"Referensi"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://ferry.vercel.app/blog/prinsip-menulis-versi-pada-software-semantics-versioning",children:"https://ferry.vercel.app/blog/prinsip-menulis-versi-pada-software-semantics-versioning"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://gist.github.com/juampynr/4c18214a8eb554084e21d6e288a18a2c",children:"https://gist.github.com/juampynr/4c18214a8eb554084e21d6e288a18a2c"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://keepachangelog.com/id-ID/1.0.0/",children:"https://keepachangelog.com/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://semver.org/lang/id/",children:"https://semver.org/"})}),"\n"]})]})}function u(a={}){const{wrapper:n}={...(0,t.R)(),...a.components};return n?(0,r.jsx)(n,{...a,children:(0,r.jsx)(h,{...a})}):h(a)}},8453:(a,n,e)=>{e.d(n,{R:()=>s,x:()=>o});var i=e(6540);const r={},t=i.createContext(r);function s(a){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof a?a(n):{...n,...a}}),[n,a])}function o(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(r):a.components||r:s(a.components),i.createElement(t.Provider,{value:n},a.children)}},4255:a=>{a.exports=JSON.parse('{"permalink":"/blog/menulis-versi-rilis-software","source":"@site/blog/2024-02-24-menulis-versi-software.md","title":"Cara Menulis Versi Rilis pada Software - Semantic Versioning & Changelog","description":"Semantic Versioning adalah best practice dari prinsip penulisan versi software, yang bertujuan untuk menjelaskan dasar perubahan pada perilisan produk software. Ini sudah menjadi standar dalam template library, terutama dalam project open source. Perilisan versi software dibagi menjadi pola tiga bagian utama yaitu:","date":"2024-02-24T00:00:00.000Z","tags":[{"inline":true,"label":"blog","permalink":"/blog/tags/blog"},{"inline":true,"label":"version","permalink":"/blog/tags/version"},{"inline":true,"label":"log","permalink":"/blog/tags/log"}],"readingTime":10.65,"hasTruncateMarker":true,"authors":[{"name":"Ucup TopekoX","title":"TimposuLabs creator","imageURL":"https://topekox.github.io/assets/images/avatar.jpeg","key":"topekox","page":null}],"frontMatter":{"slug":"menulis-versi-rilis-software","title":"Cara Menulis Versi Rilis pada Software - Semantic Versioning & Changelog","authors":"topekox","tags":["blog","version","log"]},"unlisted":false,"prevItem":{"title":"Apa itu Java Reflection","permalink":"/blog/java-reflection"},"nextItem":{"title":"Apa itu Java Anonymous Class","permalink":"/blog/java-anonymous-class"}}')}}]);