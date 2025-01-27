---
slug: java-recursive-method
title: Apa itu Java Recursive Method
authors: topekox
tags: [java]
---

Metode rekursif (recursive method) adalah teknik dalam pemrograman di mana sebuah fungsi memanggil dirinya sendiri untuk menyelesaikan masalah. Pada dasarnya, fungsi tersebut memecah masalah besar menjadi sub-masalah yang lebih kecil dan menyelesaikannya secara berulang hingga mencapai kondisi dasar (base case), yang berhenti memanggil fungsi lagi.

<!--truncate-->

## Tanpa Recursive

Misalkan kita membuat method perulangan yang akan melakukan perkalian dengan angka dibawahnya atau disebut (factorial).

Contoh:

```java
public class DemoRecursiveMethod {

	public static void main(String[] args) {
		System.out.println(factorialLoop(5));
	}
	
	static int factorialLoop(int value) {
		int result = 1;
		for (int counter = 1; counter <= value; counter++) {
			result *= counter;
		}
		return result;
	}
}
```

Hasil:

```
120
```

Dalam contoh di atas program akan melakukan looping dengan melakukan perkalian dengan angka dibawah 5, jika disederhanakan akan menjadi `1 * 2 * 3 * 4 * 5`.

## Menggunakan Recursive method

Jika mengimplementasikan contoh factorial di atas ke recursive method, akan seperti di bawah ini:

```java
public class DemoRecursiveMethod {

	public static void main(String[] args) {
		System.out.println(factorialRecursive(5));
	}
	
	static int factorialRecursive(int value) {
		if (value == 1) {
			return 1;
		} else {
			return value * factorialRecursive(value - 1);
		}
	}
	
}
```

Pada contoh diatas pada method `factorialRecursive` setiap nilai yang dimasukan akan terus dikalikan dengan angka di bawahnya dengan memanggil dirinya sendiri pada `value * factorialRecursive(value - 1);`. Hasil outpunya akan sama dengan contoh sebelumnya.

## Masalah dalam Recursive method

Recursive method bukan tidak memiliki masalah, jika terlalu dalam dalam pemakainnya, maka kemungkinan akan menghasilkan _StackOverflow_ dimana kondisi method telalu banyak disimpan oleh Java. Ketika memanggil method sebenarnya Java menyimpannya ke dalam _stack_, jika terlalu dalam memanggil method, maka _stack_ akan terlalu besar dan bisa menyebabkan error _StackOverflow_. Kondisi error juga bisa berbeda disetiap komputer tergantung spesifikasi yang berbeda di masing-masing komputer.

Contoh:

```java
public class DemoRecursiveMethod {

	public static void main(String[] args) {
		loopRecursive(1000000);
	}
	
	static void loopRecursive(int value) {
		if (value == 0) {
			System.out.println("Program Selesai");
		} else {
			System.out.println("value ke-" + value);
			loopRecursive(value - 1);
		}
	}
	
}
```

Pada contoh di atas pada komputer yang saya gunakan error `StackOverflowError` hanya bisa digunakan sampai  `value ke-994361`. 

```
value ke-1000000
.
.
.
value ke-994362
value ke-994361
Exception in thread "main" java.lang.StackOverflowError
```

Berbeda jika value loopRecursive -nya saya ganti ke nilai yang lebih rendah `loopRecursive(1000)`, pada komputer saya tidak mengalami error StackOverflow.

## Kesimpulan

Recursive method menarik untuk digunakan pada kondisi dimana kita memanggil method dirinya sendiri. Akan tetapi berbahaya jika digunakan terlalu dalam karena dapat menimbulkan StackOverflow.
