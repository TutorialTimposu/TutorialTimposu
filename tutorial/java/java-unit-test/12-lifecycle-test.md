---
sidebar_position: 12
title: 'Lifecycle Unit Test'
---

Secara default, lifecycle (siklus hidup) object test adalah independent per method test, artinya object unit test  akan selalu dibuat baru per method unit test, oleh karena itu kita tidak bisa bergantung dengan method test lain. Cara pembuatan object test di JUnit ditentukan oleh annotation `@TestInstance`, dimana defaultnya adalah `Lifecycle.PER_METHOD`, artinya tiap method akan dibuat sebuah instance / object baru. Kita bisa merubahnya menjadi `Lifecycle.PER_CLASS` jika mau, dengan demikian instance / object test haya dibuat sekali per class, dan method test akan menggunakan object test yang sama. Hal ini bisa kita manfaatkan ketika membuat test yang tergantung dengan test lain.

Secara default, walaupun kita tidak membuat annotation `@TestInstance`, nilainya adalah `Lifecycle.PER_METHOD`:

```java
@TestInstance(Lifecycle.PER_METHOD)
```

kita dapat menggantinya menjadi:

```java
@TestInstance(Lifecycle.PER_CLASS)
```

Sehingga method unit test dapat menggunakan object yang sama antar method unit test.

Contoh:

```java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;

@TestInstance(Lifecycle.PER_CLASS)
public class DemoLifeCycleTest {
	
	private int counter = 0;
	
	@Test
	void testC() {
		counter++;
		System.out.println(counter);
	}
	
	@Test
	void testA() {
		counter++;
		System.out.println(counter);
	}
	
	@Test
	void testB() {
		counter++;
		System.out.println(counter);	
	}

}
```

Dengan menggunakan Lifecycle per class makan method unit test akan saling berhubungan satu sama lain.

## Keuntungan Instance Per Class

Salah satu keuntungan saat menggunakan `Lifecycle.PER_CLASS` adalah, kita bisa menggunakan `@BeforeAll` dan `@AfterAll` di method biasa, tidak harus menggunakan function object  / static.

```java
@TestInstance(Lifecycle.PER_CLASS)
public class DemoLifeCycleTest {
	
    private int counter = 0;

    // mendefinisikan non-static @BeforeAll dan @AfterAll 
	@BeforeAll
	void beforeAll() {

	}

	@AfterAll
	void afterAll() {

	}

	@Test
	void testC() {
		counter++;
		System.out.println(counter);
	}
	
	@Test
	void testA() {
		counter++;
		System.out.println(counter);
	}
	
	@Test
	void testB() {
		counter++;
		System.out.println(counter);	
	}

}
```