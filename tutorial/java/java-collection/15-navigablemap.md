---
sidebar_position: 15
title: 'Java NavigableMap'
---

`NavigableMap` adalah turunan dari `SortedMap`, namun `NagivableMap` memiliki kemampuan navigasi berdasarkan operasi kurang dari, lebih dari dan sejenisnya. misal, kita ingin mengambil data yang lebih dari key x atau kurang dari key y, ini bisa dilakukan di `NavigableMap`.

`NavigableMap` memiliki implementasi class `TreeMap`.

![TreeMap](/img/java/treemap.png)

_source: https://codingbison.com//java-collections/java-collections-navigable-map-interface.html_

Contoh:

```java
import java.util.NavigableMap;
import java.util.TreeMap;

public class DemoNavigableMap {

	public static void main(String[] args) {
		
		NavigableMap<String, String> countrys = new TreeMap<String, String>();
		countrys.put("in", "India");
		countrys.put("zw", "Zimbabwe");
		countrys.put("ug", "Uganda");
		countrys.put("tn", "Tunisia");
		
		for (var k : countrys.keySet()) {
			System.out.println(k);
		}
		
		System.out.println();
		System.out.println(countrys.lowerKey("ug"));
		System.out.println(countrys.higherKey("tn"));
		System.out.println(countrys.floorKey("vn")); // kurang dari atau samadengan
		System.out.println(countrys.ceilingKey("id")); // lebih dari atau samadengan
		System.out.println();
		
		// Descending example
		NavigableMap<String, String> countrysDesc = countrys.descendingMap();
		for (var k : countrysDesc.keySet()) {
			System.out.println(k);
		}
		
	}

}
```

## Immutable NavigableMap

Untuk membuat `NavigableMap` menjadi immutable dapat menggunakan class `Collections`.

```java
// Immutable NavigableMap
NavigableMap<String, String> immutableNavigableMap = Collections.unmodifiableNavigableMap(countrys);

//		immutableNavigableMap.put("rs", "Russia"); // Error

// Membuat empty NavigableMap
NavigableMap<String, String> emptySortedMap = Collections.emptyNavigableMap();
```