---
sidebar_position: 9
title: 'Java NavigableSet'
---

`NavigableSet` adalah turunan dari `SortedSet`. `NavigableSet` menambah method-method untuk melakukan navigasi pencarian element, seperti mencari elemen yang lebih besar dari, kurang dari, membalikkan urutan set, dan lain-lain.

Berikut method-method dalam interface `NavigableSet`:

![](/img/java/navigableset.png)

Contoh:

```java
import java.util.Collections;
import java.util.NavigableSet;
import java.util.Set;
import java.util.TreeSet;

public class DemoNavigableSet {

	public static void main(String[] args) {
		
		NavigableSet<String> persons = new TreeSet<String>();
		persons.addAll(Set.of("Ucup", "Azwar", "Munir", "Ketut", "Eta", "Gunawan"));
		
		System.out.println("Data Person:");
		printOut(persons);
		
		System.out.println("Reverse Person:");
		printOut(persons.descendingSet());
		
		System.out.println("Reverse Person:");
		printOut(persons.tailSet("Ketut", true)); // inclusive true jika nama sort pengembalian dimulai dari endpoint dalam hal ini"Ketut" akan disertakan dalam tampilan yang dikembalikan
				
	}
	
	static void printOut(NavigableSet<String> persons) {
		for(var p : persons) {
			System.out.println(p);
		}
	}

}
```

## Immutable NavigableSet

```java
// Immutable NavigableSet
NavigableSet<String> personsImmutable = Collections.unmodifiableNavigableSet(persons);
personsImmutable.add("Budi"); // Error

// Membuat Collection Menjadi Kosong
personsImmutable = Collections.emptyNavigableSet();
```
