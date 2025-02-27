---
sidebar_position: 5
title: 'Maven Lifecycle'
---

Maven bekerja dalam konsep lifecycle. Untuk menjalankan lifecycle, kita bisa menggunakan perintah `mvn namalifecycle`. Lifecycle akan menjalankan banyak plugin, baik itu bawaan maven, atau bisa kita tambahkan plugin lain jika mau.

Berikut default maven lifecycle:

:::info
Untuk perintah lengkap: https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#Lifecycle_Reference
:::

* `clean`, menghapus folder target (tempat menyimpan hasil kompilasi).
* `compile`, untuk melakukan kompilasi source code project.
* `test-compile`, untuk melakukan kompilasi source code project.
* `test`, untuk menjalankan unit test.
* `package`, untuk membuat distribution file aplikasi.
* `install`, untuk menginstalll project ke local repository, sehigga bisa digunakan di project lain di local.
* `deploy`,  deploy project ke remote repository di server.

## Baca Juga

* https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html
