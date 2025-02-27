---
sidebar_position: 10
title: 'Multi Module Project'
---

Saat aplikasi kita sudah sangat besar, kadang ada baiknya kita buat aplikasi dalam bentuk modular. Misal kita pisahkan module model, controller, view, service, repository, dan lain-lain. Untungnya, Maven mendukung pembuatan project multi module.

Untuk membuat module baru, di dalam project yang sudah ada, kita hanya tinggal membuat folder baru, lalu menambahkan setting `pom.xml` di folder tersebut. Module harus memiliki parent, dimana parent nya adalah project diatas folder tersebut. Selanjutnya, di parent nya pun, module harus di include.

Contoh misalnya kita mempunyai sebuah project (parrent) yang akan dipecah menjadi beberapa module yakni `app` dan `data` (child).

## 1️⃣ Membuat direktori module

Tahap pertama adalah membuat direktori di project kita yaitu direktori `app` dan `data`, dan memimdahkan file code `Person.java` ke dalam module `data`, dan class main `App.java` ke dalam module `app`, sehingga strukturnya sebagai berikut:

```
belajar-apache-maven
├── app
│   ├── pom.xml
│   └── src
│       ├── main
│       │   └── java
│       │       └── com
│       │           └── timposulabs
│       │               └── belajar
│       │                   └── App.java
│       └── test
│           └── java
│               └── com
│                   └── timposulabs
│                       └── belajar
│                           └── AppTest.java
├── data
│   ├── pom.xml
│   └── src
│       └── main
│           └── java
│               └── com.timposulabs.belajar
│                   └── Person.java
└── pom.xml
```

## 2️⃣ Konfigurasi `pom.xml` pada module `app`

Untuk konfigurasi `pom.xml` pada module `app` adalah sebagai berikut:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<parent>
		<groupId>com.timposulabs</groupId>
		<artifactId>belajar-apache-maven</artifactId>
		<version>1.0-SNAPSHOT</version>
	</parent>
	
	<artifactId>app</artifactId>
</project>
```

Yang perlu menjadi perhatian adalah pada tag `<parent>` sebagai project parrentnya dan `<artifactId>` sebagai nama modulenya.

## 3️⃣ Konfigurasi `pom.xml` pada module `data`

Konfigurasinya sama seperti pada module `app` yang membedakan cuma pada nama module `<artifactId>`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<parent>
		<groupId>com.timposulabs</groupId>
		<artifactId>belajar-apache-maven</artifactId>
		<version>1.0-SNAPSHOT</version>
	</parent>
	
	<artifactId>data</artifactId>
</project>
```

## 4️⃣ Konfigurasi `pom.xml` pada parrent

Untuk parent yang perlu diubah pada `<packaging>` menjadi `pom` dan mendaftarkan dan menambahan nama modules pada tag `<modules>`:

```xml
<groupId>com.timposulabs</groupId>
<artifactId>belajar-apache-maven</artifactId>
<version>1.0-SNAPSHOT</version>
<packaging>pom</packaging>

<name>belajar-apache-maven</name>
<!-- FIXME change it to the project's website -->
<url>http://www.example.com</url>

<modules>
	<module>app</module>
	<module>data</module>
</modules>
...
```

## 5️⃣ Include Antar Module

Jika ingin melakukan include module ke dalam module lainnya kita perlu memasukan dependency ke dalam `pom.xml` yang membutukan dependency tersebut, misalnya module `app` membutuhkan dependency `data` maka dalam `pom.xml` dalam `app` perlu ditambahkan dependencinya:

```xml
<dependencies>
	<dependency>
		<groupId>com.timposulabs</groupId>
		<artifactId>data</artifactId>
		<version>${project.version}</version>
	</dependency>
</dependencies>
```

## 6️⃣ Melakukan Build

Melakukan build project dengan perintah:

```
mvn clean package assembly:single
```

Output:

```
...
[INFO] 
[INFO] belajar-apache-maven ............................... SUCCESS [  0.454 s]
[INFO] data ............................................... SUCCESS [  0.688 s]
[INFO] app ................................................ SUCCESS [  0.558 s]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  1.881 s
[INFO] Finished at: 2025-02-27T23:00:48+08:00
[INFO] ------------------------------------------------------------------------
```

Untuk file jar hasil build yang dapat di running tergantung dengan module yang memiliki Main Class, dalam kasus di atas terdapat dalam direktori `app/target`.