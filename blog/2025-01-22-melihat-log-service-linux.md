---
slug: melihat-log-service-linux
title: Cara melihat log service pada Linux
authors: topekox
tags: [linux, log, perintah linux]
---

Log adalah tool yang memberikan informasi berharga untuk pemecahan masalah, keamanan, audit, analisis kinerja, pemantauan, dan pemeliharaan sistem. Tanpa log, akan sulit untuk memahami apa yang terjadi di dalam sistem, mengidentifikasi masalah, atau memastikan keamanan dan kinerja yang optimal.

<!--truncate-->

Dalam linux service yang sedang berjalan memiliki log, biasanya disimpan dalam direktori `/var/log` atau di direktori lain di masing-masing aplikasi yang memiliki service. Contoh kita melihat log sistem pada Ubuntu yang ada pada `syslog` dengan perintah.

```
cat /var/log/syslog
```

Jika ingin disimpan dalam sebuah file bisa menggunakan perintah:

```
cat /var/log/syslog >> tes.txt
```

## Melihat log service

Untuk melihat log pada service yang sedang berjalan dapat menggunakan perintah `journalctl`. 

Contoh misalnya saya memiliki service Postgresql 17 dan ingin melihat log servicenya:

```
journalctl -u postgresql-17.service
```

Jika ingin disimpan dalam sebuah file bisa menggunakan perintah:

```
journalctl -u postgresql-17.service >> postgresql17.txt
```

Lihat juga:

* https://unix.stackexchange.com/questions/225401/how-to-see-full-log-from-systemctl-status-service
