---
sidebar_position: 9
title: 'Distribution File'
---

Secara default, maven mendukung pembuatan distribution file menggunakan lifecycle package. Hanya saja, hasil distribution file nya berupa file jar yang berisikan binary code dari project kita. Dependency lainnya tidak dimasukkan, sehingga tidak bisa langsung dijalankan.

## Assembly Plugin

Salah satu plugin yang bisa kita gunakan untuk membuat distribution file beserta dependency yang kita butuhkan adalah Assembly Plugin.

:::info
https://maven.apache.org/plugins/maven-assembly-plugin/usage.html
:::

Tidak hanya Assembly Plugin, sebenarnya masih banyak plugin lain yang bisa kita gunakan untuk membuat distribution file di Maven. Untuk membuat distribution file, kita bisa menggunakan perintah `mvn package assembly:single`.

## Menggunakan Assembly Plugin

Untuk melakukan konfigurasi kita perlu edit file `pom.xml`:

### 1️⃣ Pasang Konfigurasi

Pasang konfigurasi plugin dalam tag `<plugins>`

```xml
<project>
	[...]
	<build>
	[...]
	<plugins>
		<plugin>
		<!-- NOTE: We don't need a groupId specification because the group is
				org.apache.maven.plugins ...which is assumed by default.
			-->
		<artifactId>maven-assembly-plugin</artifactId>
		<version>3.7.1</version>
		<configuration>
			<descriptorRefs>
			<descriptorRef>jar-with-dependencies</descriptorRef>
			</descriptorRefs>
		</configuration>
		[...]
</project>
```

### 2️⃣ Tentukan Main Class

Secara default Maven dan Assembly Plugin ketika di Build tidak mengetahui Main Class project kita kita perlu mendefinisikannya ke dalam tag `<configuration>`:

```xml
<project>
	[...]
	<build>
	[...]
	<plugins>
		<plugin>
		<artifactId>maven-assembly-plugin</artifactId>
		<version>3.7.1</version>
		<configuration>
			[...]
			<archive>
			<manifest>
				<mainClass>com.timposulabs.belajar.App</mainClass>
			</manifest>
			</archive>
		</configuration>
		[...]
		</plugin>
		[...]
</project>
```

### 3️⃣ Build Project

Melakukan build project dengan perintah:

```
mvn clean package assembly:single
```

Hasil build terdapat dalam direktori `target/`, yang 2 file berekstensi `*.jar`, dimana yang memiliki nama file ` <nama-project>jar-with-dependencies.jar`, adalah hasil build yang sudah include dengan dependencinya.