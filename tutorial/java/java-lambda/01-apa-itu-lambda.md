---
sidebar_position: 1
title: 'Apa itu Lambda Expression?'
---

## Apa itu Lambda Expression

Lambda berasal dari lambda calculus, yang mengacu pada anonymous function (function tanpa nama). Tapi, di Java, function/method tidak bisa berdiri sendiri. Jadi kemungkinan pada prakteknya, lambda di Java dan di bahasa pemrograman lain akan berbeda. 

Sebelum ada Java SE 8 rilis yang menggunakan konsep ekspresi lambda, maka yang biasa dilakukan oleh programmer adalah menggunakan class anonim. Setelah Java 8 rilis dengan membawa fitur ekspresi lambda yang sebenarnya adalah cara lain yang lebih sederhana untuk menulis kode class anonim.

Nah, dengan Lambda kita tidak perlu menulis code class anonim secara utuh. Selain itu, dalam banyak kasus, berkat penambahan lambda ke bahasa pemrograman Java, kita tidak memerlukan class anonim lagi.

## Anonymous Class

Di Java kita hanya mengenal Anonymous Class. Lambda di Java sebenarnya adalah versi sederhana membuat sebuah anonymous class.

## Syarat Lambda

* Berupa Interface
* Memiliki 1 method abstract
* Ditambahkan annotation `@FunctionalInterface` di Interface-nya
* Minimal menggunakan Java 8