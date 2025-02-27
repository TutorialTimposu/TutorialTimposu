---
sidebar_position: 1
title: 'Apa itu Apache Maven?'
---

![Maven](https://miro.medium.com/v2/resize:fit:640/format:webp/1*7tyxCHXG4LXkwQZm5zCwVQ.png)

## Build Tools

Biasanya dalam membuat aplikasi di Java dengan IDE seperti Intellij Idea, Netbeans atau Eclipse adalah dengan cara membuat project langsung di IDE tersebut dengan struktur project default sesuai dengan yang IDE tersebut telah tentukan. Artinya ketika misalkan create project di Netbans, maka project tersebut hanya bisa dibaca di Netbeans saja begitupun kalau createnya di Eclipse. Lalu bagaimana jika beberapa programmer bekerja bersama-sama dan programmer-programmer tersebut terbiasa menggunakan IDE yang berbeda? Salah satu solusinya adalah dengan menggunakan Build Tools atau Build Automation Tools.

Build Automation adalah proses meng-otomatisasi tahapan pembuatan software dan hal-hal yang berhubungan dengannya, seperti: 

* Kompilasi source code menjadi binary  code.
* Mem-package binary code menjadi distribution file.
* Membuat dokumentasi.
* Menjalankan automated test.
* Manajemen dependency.

Ada banyak Build Tools yang tersedia untuk mempbuat project Java, listnya bisa dilihat [disini](https://en.wikipedia.org/wiki/List_of_build_automation_software). Salah satu dari List of Build Tools tersebut yang cukup populer adalah [Apache Maven](https://maven.apache.org/index.html).

## Apache Maven

Apache Maven adalah Java Build Tools yang menggunakan konsep Project Object Model (POM). POM tersebut berisi informasi dan konfigurasi yang digunakan Maven untuk membuat project. Pada dasarnya POM adalah sebuath XML File yang terdapat di dalam project Maven dan di dalam File inilah konfigurasi dari project kita berada. Ada banyak keunggulan dari penggunakan Maven ini, diantaranya adalah Maven membuat struktur project sendiri sehingga project tersebut akan dapat dibuka dengan berbagai IDE dikarenakan Maven mendefinisikan projectnya sendiri.

Selain itu memanage Dependency dengan Maven menjadi mudah. Biasanya dalam mendevelop aplikasi Java membutuhkan dependency file Jar dari luar default jar yang tersedia pada JDK yang berisi Class-class untuk kemudian kita panggil. Artinya aplikasi kita dependent terhadap class-class tersebut. Class-class tersebut pun terkadang dependent terhadap class lain diluar jar packagenya. Dengan Maven hanya tinggal definisikan saja di File `pom.xml` dependency nya maka Maven akan otomatis mendownload file-file jar tersebut ke Repository sehingga dapat kita gunakan. Hal tersebut berbeda dengan mengimport File Jar secara manual yang biasanya digunakan jika mencreate project langsung dari IDE. File-file jar hasil download tersebut dapat dilihat di Folder `<Home Directory>/.m2/repository`. Dalam Folder tersebut terdapat Folder-folder yang berisi file jar yang telah kita download beserta file-file lainnya.

Apache Maven mendukung build automation untuk banyak teknologi, seperti :

* Java
* Kotlin
* Groovy
* Scala
* dan lain-lain

:::info
Website Resmi Apache Maven: https://maven.apache.org
:::

## Baca Juga

* https://maven.apache.org/guides/getting-started/index.html
* https://medium.com/@acep.abdurohman90/mengenal-maven-sebagai-java-build-tools-5ba752f75812
* https://docs.google.com/presentation/d/1s-LEPwfLfOVLcfcbtlGQAk1W1gwhUeVgilX-0-g97U4/edit#slide=id.p