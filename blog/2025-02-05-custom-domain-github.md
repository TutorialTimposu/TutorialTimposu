---
slug: custom-domain-github
title: Cara Custom Domain Github Pages
authors: topekox
tags: [github, github pages]
---

GitHub Pages adalah layanan hosting situs web statis yang memanfaatkan repositori GitHub. Layanan ini mengambil file HTML, CSS, dan JavaScript dari repositori GitHub, kemudian menerbitkan situs web. GitHub Pages dapat digunakan untuk membuat situs web pribadi, seperti portofolio atau blog. Situs web yang dibuat menggunakan GitHub Pages dapat diakses secara publik di internet. Secara default domain yang digunakan memiliki url path `<nama-repo>.github.io`, tetapi kita dapat menghosting situs web di `github.io` atau di domain kustom Anda sendiri. 

<!--truncate-->

## Konfigurasi domain

Untuk menyiapkan domain apex, seperti `example.com`, Anda harus mengonfigurasi domain kustom dalam pengaturan repositori github anda dan setidaknya satu `ALIAS`, `ANAME`, atau `A` record dengan konfigurasi DNS anda.

* Untuk membuat `A` record, arahkan domain apex ke alamat IP untuk GitHub Pages.

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

* Masuk ke dalam konfugirasi DNS anda, masukan IP Github Pages di atas ke pengaturan DNS anda. Berikut contoh pengaturan untuk nama host timposulabs.com.

!["Konfigurasi DNS"](/img/general/github-pages1.png)

Tunggu beberapa saat, jika cepat tidak sampai 1 jam domain dapat aktif, kalau belum biasanya mununggu sampai 24 jam hingga domain aktif. Untuk mengetahui domain aktif atau belum bisa di cek di [dnschecker.org](https://dnschecker.org/).

## Konfigurasi Github Pages

* Masuk ke dalam menu setting repository Github Pages anda masuk ke _`Settings`_ > _`Pages`_ dan masukan domain pada form `Custom domain` dan Save, centang Enforce HTTPS untuk menghaktifkan HTTPS pada domain kita.

Jika berhasil, maka akan seperti gambar di bawah ini.

!["Konfigurasi DNS"](/img/general/ghpages2.png)

Jangan lupa buat file dengan nama `CNAME` di root direktori static github pages anda dan isi file tersebut dengan nama domain anda, contoh isi file `CNAME`:

```
timposulabs.com
```

:::success
Untuk video pengaturan domain dapat dilihat pada:

* [Video tutorial untuk apex domain](https://www.youtube.com/watch?v=uh0yu7kxijQ)
* [Video tutorial untuk sub domain](https://www.youtube.com/watch?v=JqwjVIGJQ10)
:::

## Lihat Juga

Jika mengalami kendala dapat merujuk ke dokumentasi resmi Github Pages:

* https://docs.github.com/en/pages/quickstart
