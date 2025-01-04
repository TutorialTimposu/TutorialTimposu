---
slug: menulis-versi-rilis-software
title: Cara Menulis Versi Rilis pada Software - Semantic Versioning & Changelog
authors: topekox
tags: [blog, version, log]
---
[Semantic Versioning](https://semver.org/) adalah best practice dari prinsip penulisan versi software, yang bertujuan untuk menjelaskan dasar perubahan pada perilisan produk software. Ini sudah menjadi standar dalam template library, terutama dalam project open source. Perilisan versi software dibagi menjadi pola tiga bagian utama yaitu:

* **Major**
* **Minor**
* **Patch**

Selain ketiga bagian versi di atas, sebenarnya masih ada versi **Pre-release** version, yaitu versi yang dirilis sebagai uji coba sebelum final rilis. Ini sebenarnya tidak wajib, tergantung kebutuhan.

<!--truncate-->

![Unsplash](https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)


## Major

Major version adalah versi utama. Major version yang mengalami perubahan signifikan pada aplikasi dan tidak kompatibilitas pada versi sebelumnya. Ini berarti bahwa jika Anda memperbarui kode Major lama anda ke versi Major utama yang baru, kode lama anda mungkin tidak lagi berfungsi dengan versi paket yang baru. Major version akan di-upgrade saat merilis versi dengan banyak perubahan, seperti perombakan code, perubahan requirement, ada fitur yang dihapus, penambahan fitur secara besar-besaran, atau perubahan yang tidak backward-compatible dengan versi Major sebelumnya. Jadi, ketika user melakukan upgrade Major version, user akan menghadapi kemungkinan error karena tidak backward-compatible pada software mereka. Contohnya ketika menggunakan Angular 15.0.0 lalu upgrade ke Angular 18.0.0 maka kemungkinan besar akan menghadapi error dan perlu penyesuaian agar kompatibel dengan versi terbaru. Seperti pada Angular 15.0.0 requirement minimalnya adalah Nodejs 14.20.0, sedangkan pada Angular 18.0.0 requirement minimalnya adalah Nodejs 18.19.1. Jadi, user juga perlu upgrade Nodejs saat upgrade Angular.

## Minor

Minor version adalah versi perubahan yang backward-compatible. Minor version akan di-upgrade saat merilis fitur yang tidak berdampak error pada existing software, dan akan di-reset ke "0" saat Major version rilis. Jadi, ketika user ketika melakukan upgrade Minor version, user bisa menikmati fitur baru dan aman dari error. Kalaupun ada rencana perubahan yang tidak backward-compatible, maka di Minor version perlu diberi warning, bukan langsung dihapus. Contoh kasus dalam Java misalnya kita ingin mengganti sebuah function/method, maka kita tidak boleh hapus function tersebut di Minor version. Kita harus mempertahankan function tersebut dan diberi tanda `@Depcreated`, lalu bikin function baru. Jadi, nantinya kita handle dua function di Minor version terbaru. Sehingga user yang menggunakan produk kita aplikasinya masih backward-compatible, tapi dengan warning agar mereka aware terhadap function baru. Function yang deprecated itu boleh dihapus saat Major version rilis. Intinya, di Minor version perubahan boleh dilakukan tapi harus backward-compatible. Contohnya pada AssertJ, ketika sebelumnya menggunakan AssertJ versi 3.16.0 lalu upgrade ke versi 3.17.0, user bisa menggunakan fitur baru `BDDAssertions.thenNoException()` pada assertion unit test, dan upgrade tersebut tidak akan menyebabkan error.

## Patch

Patch version adalah versi yang di-upgrade ketika merilis bugfix, improvement, atau refactor yang masih backward-compatible dengan versi sebelumnya, dan akan di-reset ke "0" saat Minor version atau Major version rilis. Jadi, saat user melakukan upgrade Patch version, tidak ada perubahan terkait fitur, kecuali perbaikan performa atau bugfixes dari versi sebelumnya. Misalnya ada perubahan algoritmanya yang diganti. Atau sebelumnya ada error pada case tertentu, setelah di-upgrade jadi tidak ada error. Tapi, jika fixing tersebut membutuhkan fitur baru, maka itu dirilis pada Minor version, bukan Patch version. Misalnya, bugs tersebut diperbaiki dengan cara membuat class baru, maka itu tidak bisa dirilis di Patch version, tapi di Minor version dan class yang lama diberi tanda `@Deprecated`. Contoh rilis Patch version adalah pada library date-fns versi 3.0.5 ada bugs pada function `areIntervalsOverlapping()`, lalu di versi 3.0.6 bugs tersebut diperbaiki.

## Pre-release

Selain itu, ada versi namanya Pre-release version, yaitu versi yang dirilis sebagai uji coba sebelum final rilis. Ini sebenarnya ini tidak wajib, tergantung kebutuhan. Pre-release ini tujuannya untuk kebutuhan testing, bukan untuk production, karena masih uji coba dan ada kemungkinan dibatalkan sebelum rilis jika dinilai belum layak / belum stabil. Pre-release ini ditulis dengan suffix "-alpha", "-beta", atau "-rc" (release candidate), beserta incremental number di belakangnya tergantung kesepakatan. Misalnya, sebelum merilis versi 3.1.0, maka sebagai uji coba versi 3.1.0-alpha1 yang dirilis. Jika ada fase uji coba tingkat selanjutnya, maka bisa ditulis 3.1.0-beta1. Atau jika menggunakan "-rc", maka penulisannya jadi 3.1.0-rc1. Setelah melewati fase uji coba dan dinyatakan layak dirilis, barulah versi 3.1.0 tanpa suffix Pre-release dirilis. Contohnya library SLF4J, sebelum merilis versi 2.0.0, mereka merilis versi 2.0.0-alpha1, 2.0.0-alpha2, 2.0.0-beta1, 2.0.0-beta2, hingga versi 2.0.0 rilis

## Contoh Kasus Semantic Versioning

Contoh simulasi menggunakan Semantics Versioning adalah sebagai berikut:

* Saat pertama rilis: `1.0.0`;
* Ada bugfix suatu function: `1.0.1`;
* Ada improvement performa: `1.0.2`;
* Ada penambahan function baru yang backward-comaptible: `1.1.0`;
* Ada bugfix terhadap function baru: `1.1.1`;
* Ada function yang deprecated dan perlu diganti dengan yang baru: `1.2.0`;
* Uji coba versi baru dengan perombakan dari versi sebelumnya: `2.0.0-alpha`;
* Fitur Pre-release passed semua testing dan layak dirilis: `2.0.0`;
* Ada improvement performa dari rilis sebelumnya: `2.0.1`;
* Ada penambahan function baru lagi: `2.1.0`;
* Begitu seterusnya...

## Changelog

[Changelog](https://keepachangelog.com/id-ID/1.0.0/) adalah sebuah file yang berisi daftar perubahan yang diurutkan secara kronologis untuk setiap versi dari sebuah proyek. Tujuan dari membuat changelog adalahntuk mempermudah pengguna dan kontributor melihat perubahan apa saja yang terjadi antara setiap rilis (atau versi) dari sebuah proyek. Siapa yang membutuhkan changelog? Baik pengguna ataupun pengembang, setiap orang yang menggunakan perangkat lunak adalah manusia yang peduli tentang apa yang ada di dalam perangkat lunak tersebut. Ketika perangkat lunak berubah, mereka ingin tahu apa yang berubah dan mengapa.

Prinsip-prinsip Dasar pembuatan Changelog:

* Changelog ditulis untuk manusia, bukan mesin.
* Harus ada catatan untuk setiap versi.
* Setiap tipe perubahan yang sama harus dikelompokkan.
* Versi dan seksi harus dapat dirujuk.
* Versi yang terakhir harus ditulis di paling atas.
* Tanggal rilis setiap versi harus ditulis.
* Berikan informasi jika kalian menggunakan [Semantic Versioning](https://semver.org/).

Jenis-jenis perubahan dalam Changelog:

* Added/Ditambahkan untuk fitur yang baru.
* Changed/Diubah untuk perubahan di fitur yang sudah ada.
* Deprecated/Akan Dihilangkan untuk fitur yang akan dihapus dalam waktu dekat.
* Removed/Dihilangkan untuk fitur yang sudah dihapus.
* Fixed/Diperbaiki untuk setiap perbaikan bugs.
* Security/Keamanan jika ada celah keamanan.

:::info
Sisakan bagian `Unreleased/Belum Dirilis` di bagian paling atas file changelog untuk mencatat perubahan yang akan datang. Hal ini berguna untuk dua hal: Orang-orang bisa melihat perubahan apa saja yang akan datang. Saat waktu rilis datang, tinggal pindahkan bagian `Unreleased/Belum Dirilis` ke catatan rilis versi baru di bawah.
:::

:::info
Tidak ada aturan baku dalam menamai file changelog, cukup berikan nama yang mudah dikenali oleh orang-orang supaya mudah untuk dibaca. Tapi nama file changelog yang umum digunakan `CHANGELOG.md`, beberapa proyek menggunakan `README`, `CONTRIBUTING`, `HISTORY`, `NEWS`, `RELEASE` dsb.
:::

Berikut adalah contoh isi file changelog yang dibuat dalam format `markdown` dengan nama file `CHANGELOG.md`:

```md title="CHANGELOG.md"
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- v1.1 Brazilian Portuguese translation.
- v1.1 German Translation
- v1.1 Spanish translation.
- v1.1 Italian translation.
- v1.1 Polish translation.
- v1.1 Ukrainian translation.

### Changed

- Use frontmatter title & description in each language version template
- Replace broken OpenGraph image with an appropriately-sized Keep a Changelog 
  image that will render properly (although in English for all languages)
- Fix OpenGraph title & description for all languages so the title and 
description when links are shared are language-appropriate

### Removed

- Trademark sign previously shown after the project description in version 
0.3.0

## [1.1.1] - 2023-03-05

### Added

- Arabic translation (#444).
- v1.1 French translation.
- v1.1 Dutch translation (#371).
- v1.1 Russian translation (#410).
- v1.1 Japanese translation (#363).
- v1.1 Norwegian Bokmål translation (#383).
- v1.1 "Inconsistent Changes" Turkish translation (#347).
- Default to most recent versions available for each languages.
- Display count of available translations (26 to date!).
- Centralize all links into `/data/links.json` so they can be updated easily.

### Fixed

- Improve French translation (#377).
- Improve id-ID translation (#416).
- Improve Persian translation (#457).
- Improve Russian translation (#408).
- Improve Swedish title (#419).
- Improve zh-CN translation (#359).
- Improve French translation (#357).
- Improve zh-TW translation (#360, #355).
- Improve Spanish (es-ES) transltion (#362).
- Foldout menu in Dutch translation (#371).
- Missing periods at the end of each change (#451).
- Fix missing logo in 1.1 pages.
- Display notice when translation isn't for most recent version.
- Various broken links, page versions, and indentations.

### Changed

- Upgrade dependencies: Ruby 3.2.1, Middleman, etc.

### Removed

- Unused normalize.css file.
- Identical links assigned in each translation file.
- Duplicate index file for the english version.

## [1.1.0] - 2019-02-15

### Added

- Danish translation (#297).
- Georgian translation from (#337).
- Changelog inconsistency section in Bad Practices.

### Fixed

- Italian translation (#332).
- Indonesian translation (#336).

## [1.0.0] - 2017-06-20

### Added

- New visual identity by [@tylerfortune8](https://github.com/tylerfortune8).
- Version navigation.
- Links to latest released version in previous versions.
- "Why keep a changelog?" section.
- "Who needs a changelog?" section.
- "How do I make a changelog?" section.
- "Frequently Asked Questions" section.
- New "Guiding Principles" sub-section to "How do I make a changelog?".
- Simplified and Traditional Chinese translations from [@tianshuo](https://github.com/tianshuo).
- German translation from [@mpbzh](https://github.com/mpbzh) & [@Art4](https://github.com/Art4).
- Italian translation from [@azkidenz](https://github.com/azkidenz).
- Swedish translation from [@magol](https://github.com/magol).
- Turkish translation from [@emreerkan](https://github.com/emreerkan).
- French translation from [@zapashcanon](https://github.com/zapashcanon).
- Brazilian Portuguese translation from [@Webysther](https://github.com/Webysther).
- Polish translation from [@amielucha](https://github.com/amielucha) & [@m-aciek](https://github.com/m-aciek).
- Russian translation from [@aishek](https://github.com/aishek).
- Czech translation from [@h4vry](https://github.com/h4vry).
- Slovak translation from [@jkostolansky](https://github.com/jkostolansky).
- Korean translation from [@pierceh89](https://github.com/pierceh89).
- Croatian translation from [@porx](https://github.com/porx).
- Persian translation from [@Hameds](https://github.com/Hameds).
- Ukrainian translation from [@osadchyi-s](https://github.com/osadchyi-s).

### Changed

- Start using "changelog" over "change log" since it's the common usage.
- Start versioning based on the current English version at 0.3.0 to help
  translation authors keep things up-to-date.
- Rewrite "What makes unicorns cry?" section.
- Rewrite "Ignoring Deprecations" sub-section to clarify the ideal
  scenario.
- Improve "Commit log diffs" sub-section to further argument against
  them.
- Merge "Why can’t people just use a git log diff?" with "Commit log
  diffs".
- Fix typos in Simplified Chinese and Traditional Chinese translations.
- Fix typos in Brazilian Portuguese translation.
- Fix typos in Turkish translation.
- Fix typos in Czech translation.
- Fix typos in Swedish translation.
- Improve phrasing in French translation.
- Fix phrasing and spelling in German translation.

### Removed

- Section about "changelog" vs "CHANGELOG".

## [0.3.0] - 2015-12-03

### Added

- RU translation from [@aishek](https://github.com/aishek).
- pt-BR translation from [@tallesl](https://github.com/tallesl).
- es-ES translation from [@ZeliosAriex](https://github.com/ZeliosAriex).

## [0.2.0] - 2015-10-06

### Changed

- Remove exclusionary mentions of "open source" since this project can
  benefit both "open" and "closed" source projects equally.

## [0.1.0] - 2015-10-06

### Added

- Answer "Should you ever rewrite a change log?".

### Changed

- Improve argument against commit logs.
- Start following [SemVer](https://semver.org) properly.

## [0.0.8] - 2015-02-17

### Changed

- Update year to match in every README example.
- Reluctantly stop making fun of Brits only, since most of the world
  writes dates in a strange way.

### Fixed

- Fix typos in recent README changes.
- Update outdated unreleased diff link.

## [0.0.7] - 2015-02-16

### Added

- Link, and make it obvious that date format is ISO 8601.

### Changed

- Clarified the section on "Is there a standard change log format?".

### Fixed

- Fix Markdown links to tag comparison URL with footnote-style links.

## [0.0.6] - 2014-12-12

### Added

- README section on "yanked" releases.

## [0.0.5] - 2014-08-09

### Added

- Markdown links to version tags on release headings.
- Unreleased section to gather unreleased changes and encourage note
  keeping prior to releases.

## [0.0.4] - 2014-08-09

### Added

- Better explanation of the difference between the file ("CHANGELOG")
  and its function "the change log".

### Changed

- Refer to a "change log" instead of a "CHANGELOG" throughout the site
  to differentiate between the file and the purpose of the file — the
  logging of changes.

### Removed

- Remove empty sections from CHANGELOG, they occupy too much space and
  create too much noise in the file. People will have to assume that the
  missing sections were intentionally left out because they contained no
  notable changes.

## [0.0.3] - 2014-08-09

### Added

- "Why should I care?" section mentioning The Changelog podcast.

## [0.0.2] - 2014-07-10

### Added

- Explanation of the recommended reverse chronological release ordering.

## [0.0.1] - 2014-05-31

### Added

- This CHANGELOG file to hopefully serve as an evolving example of a
  standardized open source project CHANGELOG.
- CNAME file to enable GitHub Pages custom domain.
- README now contains answers to common questions about CHANGELOGs.
- Good examples and basic guidelines, including proper date formatting.
- Counter-examples: "What makes unicorns cry?".

[unreleased]: https://github.com/olivierlacan/keep-a-changelog/compare/v1.1.1...HEAD
[1.1.1]: https://github.com/olivierlacan/keep-a-changelog/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/olivierlacan/keep-a-changelog/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.3.0...v1.0.0
[0.3.0]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.8...v0.1.0
[0.0.8]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.7...v0.0.8
[0.0.7]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/olivierlacan/keep-a-changelog/releases/tag/v0.0.1
```

## Referensi

* [https://ferry.vercel.app/blog/prinsip-menulis-versi-pada-software-semantics-versioning](https://ferry.vercel.app/blog/prinsip-menulis-versi-pada-software-semantics-versioning)
* [https://gist.github.com/juampynr/4c18214a8eb554084e21d6e288a18a2c](https://gist.github.com/juampynr/4c18214a8eb554084e21d6e288a18a2c)
* [https://keepachangelog.com/](https://keepachangelog.com/id-ID/1.0.0/)
* [https://semver.org/](https://semver.org/lang/id/)