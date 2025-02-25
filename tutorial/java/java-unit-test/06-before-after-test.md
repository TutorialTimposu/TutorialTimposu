---
sidebar_position: 6
title: 'Before & After Unit Test'
---

## BeforeEach & AfterEach

Kadang kita ingin menjalankan kode yang sama sebelum dan setelah eksekusi unit test. Hal ini sebenarnya bisa dilakukan secara manual di function `@Test` nya, namun hal ini akan membuat kode duplikat banyak sekali. 

JUnit memiliki annotation `@BeforeEach` dan `@AfterEach`. `@BeforeEach` digunakan untuk menandai function yang akan dieksekusi sebelum unit test dijalankan, sedangkan `@AfterEach` digunakan untuk menandai function yang akan dieksekusi setelah unit test dijalankan
Ingat, bahwa ini akan selalu dieksekusi setiap kali untuk function `@Test`, bukan sekali untuk class test saja.

```java
@BeforeEach
public void testBeforeCallTestMehod() {
	System.out.println("Sebelum memanggil method Test..");
}

@AfterEach
public void testAfterCallTestMehod() {
	System.out.println("Setelah memanggil method Test..");
}
```

Ketika test dijalankan maka akan dieksekusi setiap sebelum/sesudah masing-masing method dalam unit test dijalankan.

## BeforeAll & AfterAll

`@BeforeEach` & `@AfterEach` akan dieksekusi setiap kali method `@Test` jalan. Namun kadang kita ingin melakukan sesuatu sebelum semua unit test berjalan, atau setelah semua unit test berjalan. Ini bisa dilakukan menggunakan annotation `@BeforeAll` dan `@AfterAll`. Namun hanya `static` method yang bisa menggunakan `@BeforeAll` dan `@AfterAll`.

```java
@BeforeAll
public static void testBeforeCallTest() {
	System.out.println("Sebelum memanggil class Test..");		
}

@AfterAll
public static void testAfterCallTest() {
	System.out.println("Setelah memanggil class Test..");				
}
```