---
slug: cara-menggunakan-nvm
title: Cara Install dan menggunakan NVM (Node Version Manager)
authors: topekox
tags: [nodejs, nvm]
---

Node Version Manager (NVM) adalah open source version manager untuk Node.js (Node). NVM memungkinkan kita untuk menginstal dan mengelola beberapa versi NodeJs dengan mudah dan beralih antar versi melalui perintah shell. Tutorial singkat ini menjelaskan cara menginstal NVM, dan cara menggunakannya untuk menginstal dan menjalankan berbagai versi Node.

<!--truncate-->

![NVM](https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

## Keunggulan NVM
Karena Node berubah dengan cepat, pengujian aplikasi dengan versi yang berbeda sering kali kita mengalami kesulitan. Karena NVM memungkinkan peralihan cepat dan mudah antara versi Node, jauh lebih mudah untuk menguji kompatibilitas versi dan pemutakhiran dengan beberapa library. NVM menyimpan versi Node dan modul terkait di dalam direktori akun user anda , jadi sudo tidak diperlukan. NVM juga menyederhanakan proses instalasi dan kompilasi karena versi Node tidak perlu lagi diperoleh langsung dari distribution channel.

## Instalasi NVM
Kita dapat menginstal dan menggunakan NVM terlepas dari apakah anda telah menginstal Node atau belum. NVM mengubah variabel path untuk memilih versi Node yang berbeda, sehingga dapat berfungsi dengan instalasi yang sudah ada sebelumnya.

1. Install Node via `curl` atau `wiget`:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

:::info
 Petunjuk lengkap dapat merujuk ke [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
:::

2. Install NVM di Windows: untuk installer Windows bisa didownload di [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

## Command

* Cek versi NVM:
```
nvm version
```

* Melihat list node yang bisa diinstall:
```
nvm list available
```

* Install Node terbaru:
```
nvm install node
```

* Install Node dengan versi spesifik:
```
nvm install 16.20.0
```

* Melihat list Node yang sudah terinstall:
```
nvm list
```

* Pindah versi Node:
```
npm use 16.20.0
```

* Uninstall Node sesuai versi yang spesifik:
```
nvm uninstall 16.20.0
```

* Untuk pentunjuk lengkap command NVM cukup ketik perintah `nvm`:

```
C:\Users\Ucup>nvm

Running version 1.2.2.

Usage:

  nvm arch                     : Show if node is running in 32 or 64 bit mode.
  nvm current                  : Display active version.
  nvm debug                    : Check the NVM4W process for known problems (troubleshooter).
  nvm install <version> [arch] : The version can be a specific version, "latest" for the latest current version, or "lts" for the
                                 most recent LTS version. Optionally specify whether to install the 32 or 64 bit version (defaults
                                 to system arch). Set [arch] to "all" to install 32 AND 64 bit versions.
                                 Add --insecure to the end of this command to bypass SSL validation of the remote download server.
  nvm list [available]         : List the node.js installations. Type "available" at the end to see what can be installed. Aliased as ls.
  nvm on                       : Enable node.js version management.
  nvm off                      : Disable node.js version management.
  nvm proxy [url]              : Set a proxy to use for downloads. Leave [url] blank to see the current proxy.
                                 Set [url] to "none" to remove the proxy.
  nvm node_mirror [url]        : Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use default url.
  nvm npm_mirror [url]         : Set the npm mirror. Defaults to https://github.com/npm/cli/archive/. Leave [url] blank to default url.
  nvm uninstall <version>      : The version must be a specific version.
  nvm upgrade                  : Update nvm to the latest version. Manual rollback available for 7 days after upgrade.
  nvm use [version] [arch]     : Switch to use the specified version. Optionally use "latest", "lts", or "newest".
                                 "newest" is the latest installed version. Optionally specify 32/64bit architecture.
                                 nvm use <arch> will continue using the selected version, but switch to 32/64 bit mode.
  nvm reinstall <version>      : A shortcut method to clean and reinstall a specific version.
  nvm root [path]              : Set the directory where nvm should store different versions of node.js.
                                 If <path> is not set, the current root will be displayed.
  nvm subscribe [--]<topic>    : Subscribe to desktop notifications.
                                 Valid topics: lts, current, nvm4w, author
  nvm unsubscribe [--]<topic>  : Unsubscribe from desktop notifications.
                                 Valid topics: lts, current, nvm4w, author
  nvm [--]version              : Displays the current running version of nvm for Windows. Aliased as v.
```

## More Information

Untuk dokumentasi lengkap NVM dapat mengunjungi link github nya langsung di [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).

## Referensi

* [https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/)