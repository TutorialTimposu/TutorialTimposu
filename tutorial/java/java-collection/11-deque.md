---
sidebar_position: 11
title: 'Java Deque'
---

```java
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.LinkedList;

public class DemoDeque {

	public static void main(String[] args) {
		
		Deque<String> cities = new LinkedList<String>();
		
		// memasukan data ke dalam tumpukan/stack dari atas ke bawah
		cities.offerFirst("Surabaya");
		cities.offerFirst("Mataram");
		cities.offerFirst("Solo");
		cities.offerFirst("Bandung");
		
		for(var c : cities) {
			System.out.println(c);
		}
		
		System.out.println();
		System.out.println("Melakukan Pool dan menghapusnya");
		
		// melakukan pool sekaligus menghapus stack dari bawah
		for(String city = cities.pollLast(); city != null; city = cities.pollLast()) {
			System.out.println(city);
		}
		
		System.out.println(cities.size());
	}
}
```

Output:

```
Bandung
Solo
Mataram
Surabaya

Melakukan Pool dan menghapusnya
Surabaya
Mataram
Solo
Bandung
0
```