---
sidebar_position: 7
title: 'Maven Dependency'
---

Proyek  aplikasi jarang sekali berdiri sendiri, biasanya membutuhkan dukungan dari pihak lain, seperti tool atau library. Tanpa build tool seperti Apache Maven, untuk menambahkan library dari luar, kita harus melakukannya secara manual. Apache Maven mendukung dependency management, dimana kita tidak perlu me-manage secara manual proses penambahkan dependency (tool atau library) ke dalam proyek aplikasi kita.

Saat kita menambahkan dependency ke project Maven, kita harus menentukan scope dependency tersebut, ada banyak scope yang ada di Maven, namun sebenarnya hanya beberapa saja yang sering kita gunakan, seperti:
* `compile`, ini adalah  scope default. Compile artinya dependency tersebut akan digunakan untuk build project, test project dan menjalankan project.
* `test`, ini adalah scope untuk test project, hanya akan di include di bagian test project

Contoh dalam `pom.xml`:

```xml
<dependencies>

    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-api</artifactId>
        <scope>test</scope>
    </dependency>

</dependencies>
```

## Memasang Dependency

Untuk mencari dependency di maven bisa mengunjungi:

* https://search.maven.org/
* https://mvnrepository.com/

Contoh misalkan kita memasang dependecy Gson, ke dalam `pom.xml`:

```xml
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.12.1</version>
</dependency>
```

Jika menggunaka IDE biasanya akan langsung mendownload dependency tersebut. Jika dilakukan secara manual bisa menggunakan perintah:

```
mvn install
```
