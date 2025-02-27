---
sidebar_position: 11
title: 'Dependency Management'
---

Saat project kita sudah besar, kadang kita sering menggunakan banyak dependency. Masalah dengan banyaknya dependency adalah, jika kita salah menggunakan dependency yang sama namun versinya berbeda-beda. Maven mendukung fitur dependency management, dimana kita bisa memasukkan daftar dependency di parent module beserta versinya, lalu menambahkan dependency tersebut di module tanpa harus menggunakan versinya. Secara otomatis versi dependency akan sama dengan yang ada di dependency management di parent module.

Jika dependency hanya dimasukan ke dalam tag `<depedecies>` maka semua dependeny akan dimasukan ke semua module dan tentunya ini tidak efisien dan bukan merupakan best practice, karena tidak semua module membutuhkan dependency yang didefinisikan di parent. Dengan menggunakan dependency management maka depedency yang dimasukan pada `pom.xml` di module, yang akan terpasang dimodule tersebut sesuai kebutuhan module tersebut. 

* Dependecy Management pada `pom.xml` di parrent:

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.junit</groupId>
            <artifactId>junit-bom</artifactId>
            <version>${junit.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
            <version>${gson.version}</version>
        </dependency>
        <dependency>
            <groupId>com.timposulabs</groupId>
            <artifactId>data</artifactId>
            <version>${project.version}</version>
        </dependency>
    </dependencies>
</dependencyManagement>
```

* Dependecy Management pada `pom.xml` di module yang membutuhkan dependecy yang berasal dari parent contoh pada `app`, kita tidak perlu memasukan versi dependecy karena sudah didefinisika di parent:

```xml
<dependencies>
    <dependency>
        <groupId>com.timposulabs</groupId>
        <artifactId>data</artifactId>
    </dependency>
    <dependency>
        <groupId>com.google.code.gson</groupId>
        <artifactId>gson</artifactId>
    </dependency>
</dependencies>
```

