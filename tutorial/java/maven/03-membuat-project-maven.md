---
sidebar_position: 3
title: 'Membuat Project Maven'
---

Maven mendukung pembuatan berbagai macam project dengan mudah menggunakan archetype. Archetype adalah template project yang sudah tersedia. Kita bisa menggunakan yang sudah disediakan oleh maven, pihak ke 3 atau bahkan bisa membuat template archetype sendiri.

## Membuat Project

Untuk membuat projct dengan mudah di Maven kita bisa menggunakan perintah `mvn archetype:generate` selanjutnya akan tersedia berbagai macam template project, kita menggunakan template `maven-archetype-quickstart` yang disediakan oleh maven:

Step by step pembuatan project maven menggunakan template project dari maven:

1. Generate project: `mvn archetype:generate`
2. Pilih tempate project: `maven-archetype-quickstart`
3. Pilih template yang dibuat oleh maven, `org.apache.maven.archetypes:maven-archetype-quickstart`
4. Pilih template version contoh versi `1.5`.
5. Masukan groupId contoh `com.timposulabs` (groupID adalah nama dari Group Project biasanya nama domain dari organisasi/instansi).
6. Masukan artifactId contoh `belajar-apache-maven` (artifactId adalah nama project).
7. Masukan versi project.
8. Masukan package contoh `com.timposulabs.belajar`
9. Verifikasi.

Pastikan terlebih dahulu kita berada di direktori dimana kita akan membuat project.

```
mvn archetype:generate
```

Maven akan menggenerate atau biasanya akan mendownload dependency terlebih dahulu dan akan diarahkan ke prompt seperti di bawah ini:

```
...
....
Choose a number or apply filter (format: [groupId:]artifactId, case sensitive contains): 2219: maven-archetype-quickstart
Choose archetype:
1: remote -> com.github.ywchang:maven-archetype-quickstart (Provide up-to-date java quickstart archetype)
2: remote -> com.haoxuer.maven.archetype:maven-archetype-quickstart (a simple maven archetype)
3: remote -> org.apache.maven.archetypes:maven-archetype-quickstart (An archetype which contains a sample Maven project.)
Choose a number or apply filter (format: [groupId:]artifactId, case sensitive contains): 3: 3
Choose org.apache.maven.archetypes:maven-archetype-quickstart version: 
1: 1.0-alpha-1
2: 1.0-alpha-2
3: 1.0-alpha-3
4: 1.0-alpha-4
5: 1.0
6: 1.1
7: 1.3
8: 1.4
9: 1.5
Choose a number: 9: 
[INFO] Using property: javaCompilerVersion = 17
[INFO] Using property: junitVersion = 5.11.0
Define value for property 'groupId': com.timposulabs
Define value for property 'artifactId': belajar-apache-maven
Define value for property 'version' 1.0-SNAPSHOT: 
Define value for property 'package' com.timposulabs: com.timposulabs.belajar      
Confirm properties configuration:
javaCompilerVersion: 17
junitVersion: 5.11.0
groupId: com.timposulabs
artifactId: belajar-apache-maven
version: 1.0-SNAPSHOT
package: com.timposulabs.belajar
 Y: y
[INFO] ----------------------------------------------------------------------------
[INFO] Using following parameters for creating project from Archetype: maven-archetype-quickstart:1.5
[INFO] ----------------------------------------------------------------------------
[INFO] Parameter: groupId, Value: com.timposulabs
[INFO] Parameter: artifactId, Value: belajar-apache-maven
[INFO] Parameter: version, Value: 1.0-SNAPSHOT
[INFO] Parameter: package, Value: com.timposulabs.belajar
[INFO] Parameter: packageInPathFormat, Value: com/timposulabs/belajar
[INFO] Parameter: junitVersion, Value: 5.11.0
[INFO] Parameter: package, Value: com.timposulabs.belajar
[INFO] Parameter: groupId, Value: com.timposulabs
[INFO] Parameter: artifactId, Value: belajar-apache-maven
[INFO] Parameter: javaCompilerVersion, Value: 17
[INFO] Parameter: version, Value: 1.0-SNAPSHOT
[WARNING] Don't override file /home/ucup/Workspace/eclipse-java/belajar-apache-maven/src/main/java/com/timposulabs/belajar
[WARNING] Don't override file /home/ucup/Workspace/eclipse-java/belajar-apache-maven/src/test/java/com/timposulabs/belajar
[WARNING] CP Don't override file /home/ucup/Workspace/eclipse-java/belajar-apache-maven/.mvn
[INFO] Project created from Archetype in dir: /home/ucup/Workspace/eclipse-java/belajar-apache-maven
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  07:05 min
[INFO] Finished at: 2025-02-27T09:51:17+08:00
[INFO] ------------------------------------------------------------------------
```

Jika build berhasil maven akan membuatkan direktori project dalam contoh di atas berada di `/home/ucup/Workspace/eclipse-java/belajar-apache-maven`. Direktori project tersebut dapat dibuka menggunakan berbagai IDE yang mendukung maven.

Perintah pembuatan project di atas dapat dibuat menggunakan perintah dengan satu baris seperti contoh dibawah ini:

```
mvn archetype:generate -DarchetypeArtifactId=maven-archetype-quickstart -DgroupId=com.timposulabs -DartifactId=belajar-apache-maven -Dpackage=com.timposulabs.belajar -DarchetypeVersion=1.5 -DinteractiveMode=false
```
