---
sidebar_position: 18
title: 'Sorting Collection'
---

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