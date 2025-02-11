---
slug: java-comparable-interface
title: Belajar Java Comparable
authors: topekox
tags: [java, java comparable]
---

Interface Comparable pada Java digunakan untuk menentukan urutan objek pada class yang didefinisikan. Interface ini merupakan bagian dari paket `java.lang` dan menyediakan method `compareTo()` untuk membandingkan instance class. Class harus mengimplementasikan interface `Comparable` untuk menentukan urutannya. Method `compareTo()` akan me-return bilangan bulat negatif, nol, atau bilangan bulat positif, untuk hasi objek yang lebih kecil dari, sama dengan, atau lebih besar dari objek yang ditentukan.

<!--truncate-->

:::info
Class-class umum seperti `String`, `Integer` dan sebagainya, sudah mengimplementasikan interface `Comparable`, sehingga bisa langsung dilakukan sorting terhadap object-object tersebut.
:::

#### Contoh 1: membuat perbandingan untuk melakukan sorting integer

```java
import java.util.Arrays;

public class DemoComparable {
	
	static class MyNumber implements Comparable<MyNumber> {

		private int value;
		
		public MyNumber(int value) {
			this.value = value;
		}

		@Override
		public int compareTo(MyNumber o) {
			
			// Ascending order
			return this.value - o.value;
		}

		@Override
		public String toString() {
			return String.valueOf(this.value);
		}		
	}

	public static void main(String[] args) {
		MyNumber[] n = {
			new MyNumber(4),	
			new MyNumber(7),	
			new MyNumber(3),	
			new MyNumber(9),	
			new MyNumber(5)	
		};
		
		System.out.println("Sebelum sorting: " + Arrays.toString(n));
		
		// Sorting
		Arrays.sort(n);
		
		System.out.println("Setelah sorting: " + Arrays.toString(n));		
	}

}
```

Output:

```
Sebelum sorting: [4, 7, 3, 9, 5]
Setelah sorting: [3, 4, 5, 7, 9]
```

### Interface Comparable

Interface Comparable merupakan interface yang hanya memiliki 1 method yaitu `compareTo(T obj)`:

```
public interface Comparable<T> {

    int compareTo(T obj);

}
```


dimana, `T` adalah type objek yang akan di compare.

Hasil perbandingan akan mengembalikan nilai:

* Negative, jika currentObj < specifiedObj.
* Zero, jika currentObj == specifiedObj.
* Positive, jika currentObj > specifiedobj.

#### Contoh 2: membuat perbandingan sortir pair string dan integer

Pada contoh berikut kita akan melakukan compare pada type string dan integer, object pertama yang akan di sortir string, jika objek string sama maka disortir adalah yang integer.

```java
import java.util.Arrays;

public class DemoComparableStringInteger {
	
	static class Pair implements Comparable<Pair> {
		
		private String theString;
		private int theInteger;
		
		public Pair(String theString, int theInteger) {
			this.theString = theString;
			this.theInteger = theInteger;
		}

		@Override
		public int compareTo(Pair o) {
			
			// Jika string tidak sama
			if (this.theString.compareTo(o.theString) != 0) {
				return this.theString.compareTo(o.theString);
			}
			
			// Jika string sama
			return this.theInteger - o.theInteger;
		}

		@Override
		public String toString() {
			return "[" + theString + " , " + theInteger + "]";
		}
		
	}
	
	public static void main(String... args) {
		Pair[] pair = {
			new Pair("Ucup", 2),
			new Pair("Ade", 5),
			new Pair("Recky", 4),
			new Pair("Ade", 3),
			new Pair("Restu", 1)			
		};
		
		System.out.println("Sebelum Sortir");

		// Sebelum sortir
		for (var p : pair) {
			System.out.println(p);
		}
		
		// Sortir
		Arrays.sort(pair);
		
		System.out.println("\nSetelah Sortir");
		
		// Setelah sortir
		for (var p : pair) {
			System.out.println(p);
		}		
	}
}
```

Output

```
Sebelum Sortir
[Ucup , 2]
[Ade , 5]
[Recky , 4]
[Ade , 3]
[Restu , 1]

Setelah Sortir
[Ade , 3]
[Ade , 5]
[Recky , 4]
[Restu , 1]
[Ucup , 2]
```

#### Contoh 3: membuat perbandingan sortir string dan string

Pada contoh berikut kita akan melakukan compare pada type string (first name) dan string (last name), object first name yang akan di sortir terlebih dahulu, jika objek first name sama maka disortir berikutnya adalah yang last name.

```java
import java.util.Arrays;

public class DemoComparablePairString {
	
	static class Pair implements Comparable<Pair> {
		
		private String firstName;
		
		private String lastName;
		
		public Pair(String firstName, String lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
		}

		@Override
		public int compareTo(Pair o) {
			
			// Jika fist name tidak sama
			if (this.firstName.compareTo(o.firstName) != 0) {
				return this.firstName.compareTo(o.firstName);
			}
			// jika first name sama
			// maka compare lastname
			return this.lastName.compareTo(o.lastName);
		}

		@Override
		public String toString() {
			return "[ " + firstName + ", " + lastName + "]";
		}
	}
	
	public static void main(String... args) {
		
		Pair[] pair = {
			new Pair("Rohamdi", "Mabud"),	
			new Pair("Recky", "Ardiansyah"),	
			new Pair("Restu", "Ramadhan")	
		};
		
		System.out.println("Sebelum Sortir");
		for (var p : pair) {
			System.out.println(p.toString());
		}
		
		// sortir
		Arrays.sort(pair);
		
		System.out.println("\nSesudah Sortir");
		for (var p : pair) {
			System.out.println(p.toString());
		}
	}

}
```

Output:

```
Sebelum Sortir
[ Rohamdi, Mabud]
[ Recky, Ardiansyah]
[ Restu, Ramadhan]

Sesudah Sortir
[ Recky, Ardiansyah]
[ Restu, Ramadhan]
[ Rohamdi, Mabud]
```