---
sidebar_position: 1
title: 'Apa itu Java Unit Test?'
---

## Unit Test

Bayangkan kita membangun sebuah mesin yang kompleks, dan kita ingin memastikan setiap bagian kecil dari mesin tersebut bekerja dengan sempurna sebelum merakit semuanya. Itulah ilustrasi yang dilakukan unit test di dunia pengembangan perangkat lunak. 

Unit Test adalah salah satu jenis pengujian perangkat lunak (software testing) yang bertujuan untuk memverifikasi bahwa setiap unit atau komponen kecil dari kode program berfungsi dengan benar. Unit yang dimaksud biasanya adalah fungsi, metode, atau prosedur dalam kode. Tujuan utama unit test adalah untuk memastikan bahwa setiap bagian kecil dari kode bekerja sesuai dengan yang diharapkan sebelum digabungkan dengan komponen lainnya.

## Kapan Unit Test harus dilakukan?

Unit Test biasanya merupakan tingkat pengujian pertama, dilakukan sebelum integration test. Jumlah tes pada unit test yang harus dilakukan di setiap siklus sangat besar, tetapi waktu & biaya yang dibutuhkan untuk setiap tes tidak signifikan karena masing-masing unit kode relatif sederhana. Karena itu, programmer dapat dengan cepat melakukan pengujian unit sendiri.

![](/img/java/unit-test1.png)

_source: https://katalon.com/resources-center/blog/unit-testing_

## JUnit

JUnit adalah test framework yang paling populer di Java. Saat ini versi terbaru JUnit adalah versi 5. JUnit 5 membutuhkan Java minimal versi 8

:::info
Situs resmi JUnit: https://junit.org
:::