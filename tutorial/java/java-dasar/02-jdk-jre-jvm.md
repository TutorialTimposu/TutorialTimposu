---
sidebar_position: 4
title: 'JDK, JRE dan JVM'
---

# JDK, JRE dan JVM

Sebelum melakukan instalasi Java, sebaiknya perlu terlebih dahulu memahami apa itu Java Development Kit (JDK), Java Runtime Environment (JRE) dan Java Virtual Manchine (JVM).

## Java Virtual Manchine (JVM)

JVM adalah mesin virtual yang menyediakan lingkungan runtime yang dibutuhkan agar bytecode/program/binary Java dapat dieksekusi/dijalankan. JVM juga dapat menjalankan program-program yang ditulis dalam bahasa pemrograman lain yang dikompilasi ke bytecode Java (contoh Kotlin, Scala  dll).

JVM tersedia untuk banyak platform perangkat keras dan sistem operasi. Dengan kata lain JVM adalah mesin virtual yang bertugas untuk menjalankan aplikasi Java. 

## Java Runtime Environment (JRE)

JRE adalah kumpulan paket aplikasi yang digunakan untuk menjalankan aplikasi Java. Paket dalam JRE berisi library, JVM dan paket-paket lain yang dibutuhkan.

![JRE](/img/java/jre.png "paket JRE")
 
## Java Development Kit (JDK)

JDK adalah kumpulan paket aplikasi yang digunakan untuk membuat/mengembangkan aplikasi Java. Paket dalam JDK berisi JRE dan paket-paket lain yang dibutuhkan untuk  mengembangkan aplikasi Java seperti Java Compiler (javac), Java Documentation (javadoc) dll.

![JDK](/img/java/jdk.png "paket JDK")

## Pilih yang mana?

Dari penjelasan di atas dapat disimpulkan bahwa paket JDK adalah paket yang diperlukan untuk mengembangkan/membuat aplikasi Java, karena paket tersebut juga sudah termasuk JRE yang di dalamnya terdapat JVM. Berbeda apabila kita hanya ingin menjalankan aplikasi Java tanpa harus membuatnya, yang diperlukan cukup JRE saja.

JDK itu sendiri ada banyak versi distribusinya, itu dikarenakan Oracle (dulunya Sun Microsystems) mengeluarkan spesifikasi JDK yang bebas bagi siapapun untuk mengimplementasikannya untuk membuat versi JDK mereka sendiri. Beberapa perusahaan yang mengimplementasikan JDK adalah sebagai berikut:

* Oracle dengan [OracleJDK](https://www.oracle.com/java/technologies/downloads/) dan [OpenJDK](https://jdk.java.net/).
* Amazon dengan [Correto](https://aws.amazon.com/corretto/).
* Alibaba dengan [Dragonwell](https://dragonwell-jdk.io/).
* Microsoft dengan [Microsoft OpenJDK](https://www.microsoft.com/openjdk).
* dan masih banyak lagi bisa dilihat [disini](https://sdkman.io/jdks).

:::tip
Pada dasarnya setiap distribusi JDK secara garis besar hampir sama saja, yang membedakannya adalah, ada paket tambahan yang berbeda tiap distribusi JDK sesuai dengan keinginan pembuat JDK itu masing-masing. Selain itu perbedaan lain yaitu lisensi, karena tidak semua distribusi dapat digunakan secara bebas.

Saran kami gunakan versi yang OpenJDK apabila ingin bebas menggunakannya, karna distribusi [OpenJDK](https://jdk.java.net/) bersifat free dan opensource.
:::

## Proses Development Program Java

![Proses Development Program Java](/img/java/proses-java.png)

Dari proses diatas dapat dijabarkan bahwa source kode java ditulis dengan format ekstensi file ```.java```, kemudian dicompile dan menghasilkan file Java Binary baru dengan ekstensi ```.class```, yang kemudian dapat dijalankan. Selain itu file ```.class``` dapat dicompress menjadi Java Archive dengan ekstensi ```.jar```, file dengan ekstensi tersebut juga dapat di run oleh JRE.