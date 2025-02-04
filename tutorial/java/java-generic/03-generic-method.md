---
sidebar_position: 6
title: 'Java Generic Method'
---

Selain class, Generic juga dapat digunakan pada method, contohnya:

```java
public class DemoMethodGeneric {
	
	static <T> void printArray(T[] theArray) {
		for (var i : theArray) {
			System.out.println("value: " + i);
		}
	}
	
	static <X, Y> String sayHello(X names, Y city) {
		return "Nama saya: " + names + ", Kota saya di: " + city;
	}

	
	public static void main(String[] args) {
		String[] theArrayNames = {"Ucup", "Ade", "Recky", "Restu"};
		Integer[] theArrayAge = {27, 23, 25, 26};
		Double[] theArraySalary = {200000.33, 190000.55, 300000.11, 4500.50};
				
		printArray(theArrayNames);
		printArray(theArrayAge);
		printArray(theArraySalary);
		
		System.out.println();
		System.out.println(sayHello("Ade", "Pasuruan"));
		System.out.println(sayHello("Recky", "Palembang"));
	}
	
}
```

Output:

```
value: Ucup
value: Ade
value: Recky
value: Restu
value: 27
value: 23
value: 25
value: 26
value: 200000.33
value: 190000.55
value: 300000.11
value: 4500.5

Nama saya: Ade, Kota saya di: Pasuruan
Nama saya: Recky, Kota saya di: Palembang
```