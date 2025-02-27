---
sidebar_position: 2
title: 'Cara Install Maven'
---

Untuk menginstal Apache Maven, kita hanya perlu beberapa step:

1. men-download file zip Maven.
2. unzip ke folder Maven.
3. dan mengkonfigurasi environment variables.

Maven tidak tergantung pada sistem operasi tertentu, karena maven berjalan di atas JVM, jadi pastikan Java sudah terinstall. 

## Download Apache Maven

Untuk download Maven kunjungi [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi), pada tutorial ini saya mendownload versi file Binary zip archive:



## Setting Path

Agar lokasi JDK bisa diketahui sistem operasi, kita perlu mendaftarkan lokasi direktori/folder `bin` yang ada di dalam direktori/folder JDK ke variable Path sistem operasi. Cara ini diperlukan agar kita bisa mengakses JDK dan JRE dari mana saja menggunakan command prompt / terminal.

### Setting Path di Windows

Untuk setting path, bisa dilakukan di pengaturan Environment Variables Windows, pada menu Search Windows Start ketik `Environment` lalu pilih `Edit the system environmet variables`. 

![Environment Variables](/img/general/environment-windows.jpg "Environment Variables")

Selanjunya akan muncul window system properties, lanjut pilih Environment Variables.

![Environment Variables](/img/general/environment-windows2.jpg "Environment Variables")

Kemudian pada bagian System variables edit variable yang bernama **Path** lalu klik edit untuk mengubahnya.

![Environment Variables](/img/general/environment-windows3.jpg "Environment Variables")

Klik **New** untuk menambah variable baru.

![Environment Variables](/img/general/environment-windows4.jpg "Environment Variables")

Tambahkan lokasi folder OpenJDK yang sudah diekstrak, contoh lokasi ada di `C:\Program Files\Java\jdk-17\bin`, lalu klik **OK**. 

![Environment Variables](/img/java/environment-windows-path.jpg "Environment Variables")

Selanjutnya kita akan mencoba JDK dan JRE apakah sudah terinstal dengan baik dan benar di Windosws. Buka command prompt dengan cara ketik `cmd` pada menu start windows dan masukan perintah `java -version` dan `javac -version`.

Perintah `java -version` untuk melakukan pengecekan terhadap versi JRE yang ada. Jika versi Java keluar seperti gambar dibawah ini, maka JRE berhasil terinstall.

![Java Version Windows](/img/java/java-version-win.jpg "Java Version Windows")

Perintah `javac -version` untuk melakukan pengecekan terhadap versi Java Compiler yang ada. Jika versi `javac` keluar seperti gambar dibawah ini, maka JDK berhasil terinstall.

![Javac Version Windows](/img/java/javac-version-win.jpg "Javac Version Windows")

Jika berhasil, kita sudah sudah siap membuat program Java di Windows.

### Setting Path di Linux dan Mac OS

Untuk setting path di Linux dan Mac OS, kita perlu menambahkan kode dibawah ini ke dalam file `.bashrc` atau `.profile` atau `.zshrc` yang ada pada directory home system anda. Misalnya lokasi direktori JDK berada di `/opt/maven`.

1. Pindah ke home directory anda:

```
cd ~
```

2. Buka file `.bashrc` atau `.profile` atau `.zshrc`.

3. Tambahkan baris dibawah ini, ganti direktori JDK dengan lokasi direktori instalasi Java anda.

```
export MAVEN_HOME=/opt/maven-3.9.9
export PATH=$MAVEN_HOME/bin:$PATH
```

Selanjutnya kita akan mencoba verifikasi apakah Maven sudah terinstal dengan baik dan benar di Linux atau Mac. Sebaiknya lakukan restart komputer anda dan buka terminal console dan masukan perintah `mvn -version`.

```
mvn -version

Apache Maven 3.9.9 (cecedd343002696d0abb50b32b541b8a6ba2883f)
Maven home: /opt/maven-3.9.9
Java version: 21.0.6, vendor: Eclipse Adoptium, runtime: /opt/jdk-21.0.6+7
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "6.12.15-200.fc41.x86_64", arch: "amd64", family: "unix"
```

Jika berhasil mengeluarkan output seperti contoh di atas, maka maven sudah terinstal.
