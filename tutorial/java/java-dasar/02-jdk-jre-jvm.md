---
sidebar_position: 4
title: 'JDK, JRE dan JVM'
---

Sebelum melakukan instalasi Java, sebaiknya perlu terlebih dahulu memahami apa itu Java Development Kit (JDK), Java Runtime Environment (JRE) dan Java Virtual Machine (JVM).

## Java Virtual Machine (JVM)

JVM adalah mesin virtual yang menyediakan lingkungan runtime yang dibutuhkan agar bytecode/program/binary Java dapat dieksekusi/dijalankan. JVM juga dapat menjalankan program-program yang ditulis dalam bahasa pemrograman lain yang dikompilasi ke bytecode Java (contoh Kotlin, Scala  dll).

JVM tersedia untuk banyak platform perangkat keras dan sistem operasi. Dengan kata lain JVM adalah mesin virtual yang bertugas untuk menjalankan aplikasi Java. 

## Java Runtime Environment (JRE)

JRE adalah kumpulan paket aplikasi yang digunakan untuk menjalankan aplikasi Java. Paket dalam JRE berisi kumpulan libraries, JVM dan paket-paket lain yang dibutuhkan.

![JRE](/img/java/jre.png "paket JRE")
 
## Java Development Kit (JDK)

Java Development Kit ( JDK ) adalah distribusi teknologi Java oleh Oracle Corporation. JDK mengimplementasikan Java Language Specification ( JLS ) dan Java Virtual Machine Specification ( JVMS ) dan menyediakan Standard Edition ( SE ) dari Java Application Programming Interface ( API ). JDK adalah kumpulan paket aplikasi yang digunakan untuk membuat/mengembangkan aplikasi Java. Paket dalam JDK berisi JRE dan paket-paket lain yang dibutuhkan untuk  mengembangkan aplikasi Java seperti Java Compiler (javac), Java Documentation (javadoc), Java virtual machine, debugger dll.

![JDK](/img/java/jdk.png "paket JDK")

## Pilih yang mana?

Dari penjelasan di atas dapat disimpulkan bahwa paket JDK adalah paket yang diperlukan untuk mengembangkan/membuat aplikasi Java, karena paket tersebut juga sudah termasuk JRE yang di dalamnya terdapat JVM. Berbeda apabila kita hanya ingin menjalankan aplikasi Java tanpa harus membuatnya, yang diperlukan cukup JRE saja.

JDK itu sendiri ada banyak versi distribusinya, itu dikarenakan Oracle (dulunya Sun Microsystems) mengeluarkan spesifikasi JDK yang bebas bagi siapapun untuk mengimplementasikannya untuk membuat versi JDK mereka sendiri. Beberapa perusahaan yang mengimplementasikan JDK adalah sebagai berikut:

* Oracle dengan [OracleJDK](https://www.oracle.com/java/technologies/downloads/) dan [OpenJDK](https://jdk.java.net/).
* Amazon dengan [Correto](https://aws.amazon.com/corretto/).
* Eclipse dengan [Temurin](https://adoptium.net/temurin/).
* Microsoft dengan [Microsoft OpenJDK](https://www.microsoft.com/openjdk).
* Alibaba dengan [Dragonwell](https://dragonwell-jdk.io/).
* dan masih banyak lagi bisa dilihat [disini](https://sdkman.io/jdks).

:::info
Pada dasarnya setiap distribusi JDK secara garis besar hampir sama saja, semuanya bisa digunakan untuk mengembangkan aplikasi Java, yang membedakannya biasanya dari sisi support, lisensi, fitur, target market dan updatenya, yang berbeda dari tiap masing-masing distribusi JDK.
:::

:::tip
Saran kami gunakan versi JDK yang bersifat opensource seperti OpenJDK, apabila kita ingin bebas menggunakannya, karna distribusi [OpenJDK](https://jdk.java.net/) bersifat free dan opensource.
:::

## Proses Development Program Java

![Proses Development Program Java](/img/java/proses-java.png)

Dari proses diatas dapat dijabarkan bahwa source kode java ditulis dengan format ekstensi file ```.java```, kemudian dicompile dan menghasilkan file Java Binary baru dengan ekstensi ```.class```, yang kemudian dapat dijalankan. Selain itu file ```.class``` dapat dicompress menjadi Java Archive dengan ekstensi ```.jar```, file dengan ekstensi tersebut juga dapat di run oleh JRE.

## Referensi
* [Wikipedia JDK](https://en.wikipedia.org/wiki/Java_Development_Kit)
* [https://www.turing.com/kb/java-virtual-machine#what-is-jvm?](https://www.turing.com/kb/java-virtual-machine#what-is-jvm?)