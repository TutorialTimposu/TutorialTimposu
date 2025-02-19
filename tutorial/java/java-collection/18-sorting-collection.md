---
sidebar_position: 18
title: 'Sorting Collection'
---

`Sorting` atau pengurutan adalah algoritma yang sudah biasa kita lakukan. Pada Java Collection juga sudah disediakan cara untuk melakukan pengurutan, jadi kita tidak perlu melakukan pengurutan secara manual. :warning: __Namun__ perlu diingat, yang bisa di sort hanyalah `List`, karena `Set`, `Queue`, `Deque` dan `Map` cara kerjanya sudah khusus, jadi pengurutan hanya bisa dilakukan di `List`.

## Sorting pada List

| Method | Keterangan |
| --- | --- |
| `Collections.sort(list)` | Mengurutkan list dengan comparable bawaan element |
| `Collections.sort(list, comparator)` | Mengurutkan list dengan comparator |

Contoh:

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

// Sort hanya bisa di List
public class DemoSortCollection {
	
	public static void main(String[] args) {
		List<String> names = new ArrayList<String>();		
		names.addAll(List.of("Rani", "Endang", "Upik", "Mike"));
		
		// Contoh sort
		Collections.sort(names);
		
		for (var name : names) {
			System.out.println(name);
		}
		
		System.out.println();
		
		// Contoh sort with comparator
		Collections.sort(names, new MyComparator());
		
		for (var name : names) {
			System.out.println(name);
		}
	}
	
	static class MyComparator implements Comparator<String> {

		// reverse sort
		@Override
		public int compare(String o1, String o2) {
			return o2.compareTo(o1);
		}
		
	}

}
```

Output:

```
Endang
Mike
Rani
Upik

Upik
Rani
Mike
Endang
```