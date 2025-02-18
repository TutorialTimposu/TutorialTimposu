---
slug: tips-springboot-intellijidea-community
title: Tips Menjalankan Spring Boot di Intellij IDEA Community
authors: topekox
tags: [springboot, spring, ide, intellijidea]
---

Saat ini mungkin bisa dibilang [Intellij IDEA](https://www.jetbrains.com/idea/) adalah IDE powerfull untuk mengembangkan aplikasi di ekosistem Java. Fiturnya yang lengkap dan plugin yang banyank, membuat IDE ini menjadi yang paling powerfull saat ini. IDE yang dikembangkan oleh Jetbrains ini sangat cocok untuk mengembangkan aplikasi berskala besar. Namun untuk mendapatkan fitur lengkapnya kita harus menggunakan Intellij IDEA versi Ultimate termasuk jika kita ingin menggunakan plugin untuk Spring Boot.

<!--truncate-->

Namun tenang aja sebenarnya dengan menggunakan Intellij IDEA Ultimate pun kita dapat menjalankan Spring Boot, tapi kita mungkin agak sedikit melakukan konfigurasi secara manual. Berikut tips konfigurasi Spring Boot di Intellij IDEA Community Edition.

:::info
Dalam tulisan ini saya menggunakan Apache Maven sebagai build tools.
::: 

## Menjalankan Spring Boot melalui CLI

Ketika menjalankan Spring Boot kita dapat melakukan menggunakan CLI, tanpa bantuan IDE. Kita dapat memanfaatkan CLI yang ada di IDE Intellij Community dengan menggunakan perintah:

```
mvn spring-boot:run
```

## Menjalankan Spring Boot melalui Configuration

Selain menggunakan CLI kita dapat menggunakan configuration pada menu `Edit Configuration...`, kemudian tambahkan run configuration baru dengan klik `Add new..` pilih `Maven` lalu pada bagian `Run` pilih `spring-boot:run`, lalu pilih OK atau Run untuk menjalankan.

!['Idea'](/img/general/idea1.png)

Dengan cara di atas kita dapat menjalankan Spring Boot dengan menggunakan tombol Run pada Intellij IDEA Community.

## Menambahkan Environment

Untuk menambahkan environment di Intellij IDEA Community caranya sama seperti sebeumnya masuk ke menu `Edit Configuration...` dan tambahkan Environment Variable pada bagian Java Options seperti gambah di bawah ini: 

!['Idea'](/img/general/idea2.png)

## Set Profiles

Untuk memasukan profiles ketika aplikasi Spring Boot dijalankan kita dapat memasukan nama profiles ke dalam CLI atau menu `Edit Configuration...` dengan perintah di bawah ini:

```
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

Pada menu Configuration:

!['Idea'](/img/general/idea3.png)

## Kesimpulan

Menjalankan Spring Boot di Intellij IDEA Community dapat dilakukan dengan sedikit konfigurasi karena pluginnya memang tidak tersedia di versi community, tapi dengan sedikit konfigurasi sana sini kita bisa menjalankan Spring Boot dengan menggunakan Intellij IDEA Community.