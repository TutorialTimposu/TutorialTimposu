---
sidebar_position: 10
title: 'Java Queue'
---

 `Queue` digunakan untuk memasukan data berdasarkan antrian (siapa yang pertama masuk dia yang pertama keluar) FIFO (First In First Out). Interface `Queue` mempunyai 3 class konkrit yaitu `ArrayDeque`, `PriorityQueue` dan `LinkedList`.

 Interface `Queue` menyediakan beberapa method untuk menambahkan, menghapus, dan memeriksa elemen dalam antrian. Berikut ini adalah beberapa method yang paling umum digunakan:

* `add(element)`: Menambahkan elemen ke bagian belakang antrian. Jika antrian penuh, akan menimbulkan exception.
* `offer(element)`: Menambahkan elemen ke bagian belakang antrian. Jika antrian penuh, mengembalikan nilai `false`.
* `remove()`: Menghapus dan mengembalikan elemen di bagian depan antrian. Jika antrian kosong, akan menimbulkan exception.
* `poll()`: Menghapus dan mengembalikan elemen di bagian depan antrian. Jika antrian kosong, akan mengembalikan nilai `null`.
* `element()`: Mengembalikan elemen di bagian depan antrian tanpa menghapusnya. Jika antrian kosong, akan menimbulkan exception.
* `peek()`: Mengembalikan elemen di bagian depan antrian tanpa menghapusnya. Jika antrian kosong, akan mengembalikan nilai `null`.

Interface `Queue` diimplementasikan oleh beberapa class di Java, termasuk `LinkedList`, `ArrayDeque`, dan `PriorityQuee`. Masing-masing class ini menyediakan implementasi yang berbeda dari interface `Queue`, dengan karakteristik dan fitur kinerja yang berbeda.

 ### `ArrayDeque` vs `LinkedList` vs `PriorityQueue`
 
 * `ArrayDeque` = menggunakan array sebagai implementasi queue nya
 * `LinkedList` = menggunakan double linked list sebagai implementasi queue nya
 * `PriorityQueue` = menggunakan array sebagai implementasi queue nya, namun diurutkan menggunakan `Comparable` atau `Comparator`.

Berikut Contoh penggunaan `Queue`:

```java
import java.util.ArrayDeque;
import java.util.PriorityQueue;
import java.util.Queue;

public class DemoQueue {
	
	public static void main(String[] args) {
		
//		Queue<String> names = new ArrayDeque<String>();
		Queue<String> names = new PriorityQueue<String>(); // mengurutkan data element dengan menggukan comparator
		
		names.add("Ucup");
		names.add("Dika");
		names.add("Anton");
		names.add("Shena");
		
		for ( String next = names.poll(); next != null; next = names.poll() ) {
			System.out.println(next);
		}

		System.out.println(names.size());
	}

}
```

## Lihat Juga

* https://docs.oracle.com/javase/8/docs/api/java/util/Queue.html
* https://www.geeksforgeeks.org/queue-interface-java/