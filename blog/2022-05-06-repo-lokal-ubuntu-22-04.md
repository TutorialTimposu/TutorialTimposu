---
slug: repo-lokal-ubuntu-22-04
title: Daftar Repository Lokal Ubuntu 22.04
authors: topekox
tags: [ubuntu]
---

Repository lokal merupakan solusi, agar proses download/update software Ubuntu 22.04 lebih cepat, karena menggunakan Repository Lokal Indonesia.

Berikut ini daftar repository lokal Ubuntu 22.04 :

<!--truncate-->

## kartolo.sby.datautama.net.id

```bash
deb http://kartolo.sby.datautama.net.id/ubuntu/ jammy main restricted universe multiverse
deb http://kartolo.sby.datautama.net.id/ubuntu/ jammy-updates main restricted universe multiverse
deb http://kartolo.sby.datautama.net.id/ubuntu/ jammy-security main restricted universe multiverse
deb http://kartolo.sby.datautama.net.id/ubuntu/ jammy-backports main restricted universe multiverse
deb http://kartolo.sby.datautama.net.id/ubuntu/ jammy-proposed main restricted universe multiverse
```

## kebo.pens.ac.id

```bash
deb http://kebo.pens.ac.id/ubuntu/ jammy main restricted universe multiverse
deb http://kebo.pens.ac.id/ubuntu/ jammy-updates main restricted universe multiverse
deb http://kebo.pens.ac.id/ubuntu/ jammy-security main restricted universe multiverse
deb http://kebo.pens.ac.id/ubuntu/ jammy-backports main restricted universe multiverse
deb http://kebo.pens.ac.id/ubuntu/ jammy-proposed main restricted universe multiverse
```

## ftp.itb.ac.id

```bash
deb ftp://ftp.itb.ac.id/pub/ubuntu/ jammy main restricted universe multiverse
deb ftp://ftp.itb.ac.id/pub/ubuntu/ jammy-updates main restricted universe multiverse
deb ftp://ftp.itb.ac.id/pub/ubuntu/ jammy-security main restricted universe multiverse
deb ftp://ftp.itb.ac.id/pub/ubuntu/ jammy-backports main restricted universe multiverse
deb ftp://ftp.itb.ac.id/pub/ubuntu/ jammy-proposed main restricted universe multiverse
```

## buaya.klas.or.id

```bash
deb http://buaya.klas.or.id/ubuntu/ jammy main restricted universe multiverse
deb http://buaya.klas.or.id/ubuntu/ jammy-updates main restricted universe multiverse
deb http://buaya.klas.or.id/ubuntu/ jammy-security main restricted universe multiverse
deb http://buaya.klas.or.id/ubuntu/ jammy-backports main restricted universe multiverse
deb http://buaya.klas.or.id/ubuntu/ jammy-proposed main restricted universe multiverse
```

## mirror.poliwangi.ac.id

```bash
deb http://mirror.poliwangi.ac.id/ubuntu/ jammy main restricted universe multiverse
deb http://mirror.poliwangi.ac.id/ubuntu/ jammy-updates main restricted universe multiverse
deb http://mirror.poliwangi.ac.id/ubuntu/ jammy-security main restricted universe multiverse
deb http://mirror.poliwangi.ac.id/ubuntu/ jammy-backports main restricted universe multiverse
deb http://mirror.poliwangi.ac.id/ubuntu/ jammy-proposed main restricted universe multiverse
```

## Cara Update

Silahkan pilih salah satu repository yang diinginkan, terus masukan kedalam file `sources.list` dengan menggunakan text editor pilihan anda, disini saya menggunakan `nano`:

```bash
sudo nano /etc/apt/sources.list
```

Silahkan hapus isi source yang ada atau cukup comment saja dengan menambahkan tanda `#` di setiap awal text pada repository default ubuntu, kemudian paste list repo lokal yang dipilih di bagian bawah.

Setelah selesai silahkan update dengan perintah:

```bash
sudo apt-get update
````
