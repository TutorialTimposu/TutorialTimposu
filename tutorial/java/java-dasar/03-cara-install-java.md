---
sidebar_position: 5
---

# Cara Install Java

Untuk mengembangkan aplikasi Java, setidaknya kita membutuhkan compiler dan runtime Java. Seperti yang sudah diterangkan pada [artikel sebelumnya](/java/java-dasar/jdk-jre-jvm), kita membutuhkan dua paket aplikasi yaitu :

* JDK (Java Development Kit), paket aplikasi untuk melakukan kompilasi source kode Java menjadi binary/bytecode Java.
* JRE (Java Runtime Environment), paket aplikasi untuk menjalankan file binary/bytecode Java yang telah dicompile Java.

Tapi kita cukup menginstall JDK saja, karena di dalam paket JDK sudah terdapat JRE. Jadi, kita cukup mendownload JDK saja, untuk menginstall Java.

Untuk mengistall JDK sebenarnya ada beberapa cara, bisa dengan cara instalasi manual dan instalasi melalui repositori. Pada tutorial ini kita akan menggunakan cara manual.

## Download OpenJDK

Pada seri tutorial ini distribusi JDK yang digunakan adalah OpenJDK karena OpenJDK adalah salah satu compiler dan runtime Java yang Free dan Opensoure, sehingga bebas untuk digunakan. OpenJDK dapat didownload di [https://jdk.java.net/](https://jdk.java.net/).

:::info
Apabila teman-teman ingin menggunakan distribusi JDK lain misalnya [OracleJDK](https://www.oracle.com/java/technologies/downloads/), kalian tetap bisa mengikuti seri tutorial ini dan proses installasi JDK-nya hampir sama, jadi silahkan menyesuaikan. 
:::

![Download OpenJDK](/img/java/install-jdk-1.png "Download OpenJDK")

Pada tutorial ini versi JDK yang digunakan adalah versi JDK 17. Download JDK sesuai sistem operasi kalian.

![Download OpenJDK](/img/java/install-jdk-2.png "Download OpenJDK")

JDK tersedia di sistem operasi Linux, Windows dan MacOS dan format filenya adalah archive (zip/tar.gz) jadi tinggal didownload dan diekstrak ke direktori / folder yang diinginkan. Isi direktori JDK setelah diekstrak kurang lebih seperti gambar di bawah ini (isi direktori setiap sistem operasi mungkin ada perbedaan, di bawah ini isi direktori JDK pada Linux).

![Direktori JDK](/img/java/isi-jdk.png "Direktori JDK")

## Setting Path

### Setting Path di Windows

### Setting Path di Linux

Untuk setting path di Linux, kita perlu menambahkan kode dibawah ini ke dalam file `.bashrc` atau `.profile` atau `.zshrc`. Misalnya lokasi direktori JDK berada di `/opt/jdk-17.0.2/`.

```bash
export PATH=/opt/jdk-17.0.2/bin:$PATH
```

Selanjutnya kita akan mencoba JDK dan JRE apakah sudah terinstal dengan baik dan benar di Linux. Buka terminal console dan masukan perintah `java -version` dan `javac -version`.

Perintah `java -version` untuk melakukan pengecekan terhadap versi JRE yang ada. Jika versi Java keluar seperti gambar dibawah ini, maka JRE berhasil terinstall.

![Linux Java](/img/java/linux-java.png "Linux Java Terminal")

Perintah `javac -version` untuk melakukan pengecekan terhadap versi Java Compiler yang ada. Jika versi `javac` keluar seperti gambar dibawah ini, maka JDK berhasil terinstall.

![Linux Javac](/img/java/linux-javac.png "Linux Javac Terminal")

Jika berhasil, kita sudah sudah siap membuat aplikasi Java di Linux.

### Setting Path di MacOS

Untuk setting path di MacOS hampir sama dengan di Linux, pertama kita simpan direktori jdk yang sudah di ekstrak ketempat yang kita inginkan, misalnya disimpan di `/Library/Java/JavaVirtualMachines/`, lalu kita perlu menambahkan kode dibawah ini ke dalam file `.bashrc` atau `.profile` atau `.zshrc`. 

```bash
export PATH="/Library/Java/JavaVirtualMachines/jdk-17.0.2.jdk/Contents/Home/bin:$PATH"
```

Selanjutnya kita akan mencoba JDK dan JRE apakah sudah terinstal dengan baik dan benar di MacOS. Buka terminal console dan masukan perintah `java -version` dan `javac -version`.

Perintah `java -version` untuk melakukan pengecekan terhadap versi JRE yang ada. Jika versi Java keluar seperti gambar dibawah ini, maka JRE berhasil terinstall.

![Mac Java](/img/java/mac-java.png "Mac Java Terminal")

Perintah `javac -version` untuk melakukan pengecekan terhadap versi Java Compiler yang ada. Jika versi `javac` keluar seperti gambar dibawah ini, maka JDK berhasil terinstall.

![Mac Javac](/img/java/mac-javac.png "Mac Javac Terminal")

Jika berhasil, kita sudah sudah siap membuat aplikasi Java di MacOS.
