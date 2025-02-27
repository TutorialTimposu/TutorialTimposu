---
sidebar_position: 4
title: 'Struktur Project Maven'
---

Secara default maven akan membuatkan kita struktur project seperti di bawah ini:

```
belajar-apache-maven/
├── pom.xml
└── src
    ├── main
    │   └── java
    │       └── com
    │           └── timposulabs
    │               └── belajar
    │                   └── App.java
    └── test
        └── java
            └── com
                └── timposulabs
                    └── belajar
                        └── AppTest.java
```

* Direktori `src/main/java` berisi source code program java. Disinilah tempat kita menulis kode program utama kita.
* Direktori `src/test/java` berisi source code program java untuk testing.
* File `pom.xml` adalah Project Object Model, atau POM, file XML yang berisi konfigurasi proyek yang digunakan dalam Maven.

:::info
Untuk Standard Directory Layout maven selengkapnya bisa kunjungi: https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html
:::

## Pom.xml

File `pom.xml` atau POM, adalha file XML yang berisi konfigurasi proyek yang digunakan dalam Maven.

Isi file `pom.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.timposulabs</groupId>
  <artifactId>belajar-apache-maven</artifactId>
  <version>1.0-SNAPSHOT</version>

  <name>belajar-apache-maven</name>
  <!-- FIXME change it to the project's website -->
  <url>http://www.example.com</url>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.release>17</maven.compiler.release>
  </properties>

  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.junit</groupId>
        <artifactId>junit-bom</artifactId>
        <version>5.11.0</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>

  <dependencies>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter-api</artifactId>
      <scope>test</scope>
    </dependency>
    <!-- Optionally: parameterized tests support -->
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter-params</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <pluginManagement><!-- lock down plugins versions to avoid using Maven defaults (may be moved to parent pom) -->
      <plugins>
        <!-- clean lifecycle, see https://maven.apache.org/ref/current/maven-core/lifecycles.html#clean_Lifecycle -->
        <plugin>
          <artifactId>maven-clean-plugin</artifactId>
          <version>3.4.0</version>
        </plugin>
        <!-- default lifecycle, jar packaging: see https://maven.apache.org/ref/current/maven-core/default-bindings.html#Plugin_bindings_for_jar_packaging -->
        <plugin>
          <artifactId>maven-resources-plugin</artifactId>
          <version>3.3.1</version>
        </plugin>
        <plugin>
          <artifactId>maven-compiler-plugin</artifactId>
          <version>3.13.0</version>
        </plugin>
        <plugin>
          <artifactId>maven-surefire-plugin</artifactId>
          <version>3.3.0</version>
        </plugin>
        <plugin>
          <artifactId>maven-jar-plugin</artifactId>
          <version>3.4.2</version>
        </plugin>
        <plugin>
          <artifactId>maven-install-plugin</artifactId>
          <version>3.1.2</version>
        </plugin>
        <plugin>
          <artifactId>maven-deploy-plugin</artifactId>
          <version>3.1.2</version>
        </plugin>
        <!-- site lifecycle, see https://maven.apache.org/ref/current/maven-core/lifecycles.html#site_Lifecycle -->
        <plugin>
          <artifactId>maven-site-plugin</artifactId>
          <version>3.12.1</version>
        </plugin>
        <plugin>
          <artifactId>maven-project-info-reports-plugin</artifactId>
          <version>3.6.1</version>
        </plugin>
      </plugins>
    </pluginManagement>
  </build>
</project>
```

__Penjelasan__

Minimum konfigurasi dalam file POM adalah sebagai berikut:

* `project` root
* `modelVersion` - should be set to 4.0.0
* `groupId` - Id dari project group.
* `artifactId` - Id dari arifact (project).
* `version` - versi dari artifact dalam group tertentu.

Berikut informasi beberapa tag dalam `pom.xml`

* Informasi Project berisi tentang informasi project sesuai yang kita buat saat generate project:

```xml
<groupId>com.timposulabs</groupId>
<artifactId>belajar-apache-maven</artifactId>
<version>1.0-SNAPSHOT</version>

<name>belajar-apache-maven</name>
<!-- FIXME change it to the project's website -->
<url>http://www.example.com</url>
```

* Tag properties berisi informasi properti project contoh versi Java yang digunakan.

```xml
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.release>17</maven.compiler.release>
</properties>
```

* Tag depedencies berisi informasi depedency yang digunakan dalam project kita.

```xml
<dependencies>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-api</artifactId>
        <scope>test</scope>
    </dependency>
    <!-- Optionally: parameterized tests support -->
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-params</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

## Baca Juga

* https://maven.apache.org/guides/introduction/introduction-to-the-pom.html