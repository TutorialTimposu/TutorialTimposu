---
sidebar_position: 8
title: 'Maven Properties'
---

Maven mendukung properties untuk menyimpan data konfigurasi. Fitur ini akan sangat memudahkan kita kedepannya, dibandingkan melakukan hardcode di konfigurasi maven.

Maven menyimpan konfigurasi properties pada tag `<properties>` di dalam `pom.xml`.

```xml
<properties>
	<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
	<maven.compiler.release>17</maven.compiler.release>
</properties>
```

Dalam tag properties tersebut, nantinya dapat di baca ke dalam tag lain yang berada dalam konfigurasi `pom.xml`. Contoh yang serig digunakan adalah menuliskan versi dependency yang digunakan sehingga nantinya ketika melakukan upgrade versi cukup mengganti value yang ada dalam properties tersebut.

Contoh:

```xml
<properties>
	<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
	<maven.compiler.release>17</maven.compiler.release>

	<junit.version>5.11.0</junit.version>
	<gson.version>2.12.1</gson.version>
</properties>
```

Kita tinggal memasukan path variable dalam tag dependency:

```xml
<dependency>
	<groupId>com.google.code.gson</groupId>
	<artifactId>gson</artifactId>
	<version>${gson.version}</version>
</dependency>
```

Sehingga apabila melakukan update version cukup mengganti di tag properties untuk versinya, dan tidak perlu melakukannya secara manual menggantinya satu per satu.

