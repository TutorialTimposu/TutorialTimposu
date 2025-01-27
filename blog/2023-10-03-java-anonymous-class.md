---
slug: java-anonymous-class
title: Apa itu Java Anonymous Class
authors: topekox
tags: [java]
---

Anonymous class atau class anomim adalah class yang tidak memiliki nama dan biasanya hanya digunakan sekali pakai. Class ini berguna untuk membuat kode yang ringkas dan bersih. Gunakan kelas anonim jika kita perlu menggunakan kelas lokal hanya sekali saja.

<!--truncate-->

## Membuat class anonymous

Pada contoh berikut kita akan membuat class anonymous dalam inner class:

```java
public class DemoAnonymousClass {

	interface Hello {
		void sayHello(String name);
	}
	
	public static void main(String[] args) {
		Hello helloUcup = new Hello() {

			@Override
			public void sayHello(String name) {
				System.out.println("Halo " + name);
			}
		};
		helloUcup.sayHello("Ucup"); // output: Halo Ucup
	}
}
```

Pada contoh di atas anonymous class adalah sebuah expression, yang berarti kita membuat class dalam sebuah expression.

```java
Hello helloUcup = new Hello() {
	@Override
	public void sayHello(String name) {
		System.out.println("Halo " + name);
	}
};
```

## Referensi
* [https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html](https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html)