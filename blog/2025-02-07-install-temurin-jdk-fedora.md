---
slug: install-temurin-fedora
title: Cara Install Temurin JDK di Fedora/Redhat/Centos
authors: topekox
tags: [java, jdk, linux, fedora, redhat]
---

Secara default pada mayoritas distro linux sudah menyertakan paket Openjdk pada repository mereka, termasuk Redhat dan turunannya. Tetapi kita dapat menginstall versi distribusi JDK lain termasuk distribusi JDK Temurin. Temutin sendiri dulunya bernama AdoptOpenJDK/Adoptium.

<!--truncate-->

## Install Temurin

Tambahkan RPM Repo ke dalam `/etc/yum.repos.d/adoptium.repo`. Pastikan kita mengganti nama distribution yang digunakan pada parameter `baseurl`, contoh disini saya menggunakan fedora, untuk format nama distro lain dapat di lihat [di sini](https://packages.adoptium.net/ui/native/rpm/).

```
[Adoptium]
name=Adoptium
baseurl=https://packages.adoptium.net/artifactory/rpm/fedora/$releasever/$basearch
enabled=1
gpgcheck=1
gpgkey=https://packages.adoptium.net/artifactory/api/gpg/key/public
```

Install Temurin JDK 21

```
sudo dnf install temurin-21-jdk -y
```

## Setting update alternatives java

Karena sebelumnya sudah terinstall Openjdk, kita dapat mengganti versi JDK yang akan digunakan dengan peintah `alternatives --config`.

* Mengubah versi `java` yang akan digunakan.

```
$ sudo alternatives --config java

There are 2 programs which provide 'java'.

  Selection    Command
-----------------------------------------------
*+ 1           java-21-openjdk.x86_64 (/usr/lib/jvm/java-21-openjdk-21.0.6.0.7-1.fc41.x86_64/bin/java)
   2           /usr/lib/jvm/temurin-21-jdk/bin/java

Enter to keep the current selection[+], or type selection number: 2
```

Di atas saya memilih no 2 untuk menggunakan java versi temurin.

* Kita juga bisa mengganti versi `javac`:

```
$ sudo alternatives --config javac

There are 2 programs which provide 'javac'.

  Selection    Command
-----------------------------------------------
*+ 1           java-21-openjdk.x86_64 (/usr/lib/jvm/java-21-openjdk-21.0.6.0.7-1.fc41.x86_64/bin/javac)
   2           /usr/lib/jvm/temurin-21-jdk/bin/javac

Enter to keep the current selection[+], or type selection number: 2
````

* Cek versi `java`:

```
$ java -version

openjdk version "21.0.6" 2025-01-21 LTS
OpenJDK Runtime Environment Temurin-21.0.6+7 (build 21.0.6+7-LTS)
OpenJDK 64-Bit Server VM Temurin-21.0.6+7 (build 21.0.6+7-LTS, mixed mode, sharing)
```

* Cek versi `javac`:

```
$ javac -version

javac 21.0.6
```

## Referensi

* https://adoptium.net/installation/linux/