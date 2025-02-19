---
sidebar_position: 19
title: 'Binary Search Collection'
---

Secara default `List` di Java memiliki fitur search atau get data, namun implementasinya menggunakan sequential search, artinya data akan di cek satu per satu dari awal. Salah satu algoritma pencarian yang populer adalah binary search, namun binary search hanya bisa dilakukan jika datanya telah berurutan. Untungnya di Java Collection sudah ada implementasi binary search, sehingga kita tidak perlu membuatnya secara manual.

:::info
:thinking: Untuk selanjutnya pelajari terlebih dahulu binarysearch

:link: https://www.geeksforgeeks.org/collections-binarysearch-java-examples/
:::

Contoh:

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class DemoBinarySearch {

	public static void main(String[] args) {
		List<Integer> lists = new ArrayList<>();
		
		lists.add(10);
		lists.add(40);
		lists.add(60);
		lists.add(20);
		lists.add(50);
		lists.add(90);
		
		int index = Collections.binarySearch(lists, 20);
		System.out.println(lists);
		System.out.println("ditemukan pada index ke: " + index);
		
		// menggunakan comparator
		index = Collections.binarySearch(lists, 20, Collections.reverseOrder());
		System.out.println(lists);
		System.out.println("ditemukan pada index ke: " + index);
		
		// menggunakan custom comparator
		index = Collections.binarySearch(lists, 20, new MyComparator());
		System.out.println(lists);
		System.out.println("ditemukan pada index ke: " + index);
	}
	
	static class MyComparator implements Comparator<Integer> {
		
		@Override
		public int compare(Integer o1, Integer o2) {
			return o2.compareTo(o1);
		}
	}

}
```

Output

```
[10, 40, 60, 20, 50, 90]
ditemukan pada index ke: -2
[10, 40, 60, 20, 50, 90]
ditemukan pada index ke: -7
[10, 40, 60, 20, 50, 90]
ditemukan pada index ke: -7
```