---
sidebar_position: 14
title: 'Java SortedMap'
---

`SortedMap` adalah implementasi Map dengan data key diurutkan sesuai dengan `Comparable` key atau bisa menggunakan `Comparator`. `SortedMap` cocok untuk kasus yang posisi key pada Map harus berurut.

Contoh:

```java
import java.util.Comparator;
import java.util.SortedMap;
import java.util.TreeMap;

public class DemoSortedMap {
	
	public static void main(String[] args) {
		
		// membuat comparator
		Comparator<String> comparator = new Comparator<String>() {
			
			@Override
			public int compare(String o1, String o2) {
				// membuat compare descending
				return o2.compareTo(o1);
			}
		};
		
		SortedMap<String, String> countrys = new TreeMap<String, String>(comparator);
		countrys.put("th", "Thailand");
		countrys.put("cn", "China");
		countrys.put("my", "Malaysia");
		countrys.put("vn", "Vietnam");
		
		for (var key : countrys.keySet()) {
			System.out.println(key);
		}
	}
	
}
```
 
 ## Immutable SortedMap

 ```java
// Immutable SortedMap
SortedMap<String, String> immutableSortedMap = Collections.unmodifiableSortedMap(countrys);

// immutableSortedMap.put("rs", "Russia"); // Error

// Membuat empty SortedMap
SortedMap<String, String> emptySortedMap = Collections.emptySortedMap();
 ```