---
sidebar_position: 10
title: 'Java Queue'
---

 `Queue` digunakan untuk memasukan data berdasarkan antrian (siapa yang pertama masuk dia yang pertama keluar) FIFO (First In First Out). Interface `Queue` mempunyai 3 class konkrit yaitu `ArrayDeque`, `PriorityQueue` dan `LinkedList`

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