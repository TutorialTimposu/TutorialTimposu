---
sidebar_position: 8
title: 'Java SortedSet'
---

![](https://files.codingninjas.in/article_images/sortedset-0-1649608675.webp)

`SortedSet` adalah turunan dari interface `Set`, namun pada `SortedSet` elemen-elemen yang dimasukkan ke dalam `SortedSet` akan otomatis diurutkan.

Jika pada element yang dimasukan adalah turunan atau implementasi dari interface `Comparable`, maka secara otomatis akan diurutkan menggunakan comparable tersebut.

Jika element bukan turunan atau implementasi dari interface `Comparable`, maka kita bisa menggunakan `Comparator` untuk kemudian di beri tahu kepada `SortedSet` bagaimana cara mengurutkan elemen-elemennya.

:::info
__Baca Juga__:
* [Java Comparable](/blog/java-comparable-interface) 
* [Java Comparator](/blog/java-comparator-interface)
:::

Method yang dapat digunakan pada `SortedSet`:

![](/img/java/sortedset.png)

## SortedSet dengan Comparable

Jika pada element yang dimasukan adalah turunan atau implementasi dari interface `Comparable`, maka secara otomatis akan diurutkan menggunakan comparable tersebut.

Contoh:

```java
import java.util.SortedSet;
import java.util.TreeSet;

public class DemoSortedSet {
	
	static class Student implements Comparable<Student> {
		
		private String name;

		public Student(String name) {
			this.name = name;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		@Override
		public String toString() {
			return "Student (name=" + name + ")";
		}

		@Override
		public int compareTo(Student o) {
			return this.getName().compareTo(o.getName());
		}	
		
	}
	
	public static void main(String[] args) {
		
		SortedSet<Student> students = new TreeSet<>();
		students.add(new Student("Nathan"));
		students.add(new Student("Lina"));
		students.add(new Student("Abid"));
		students.add(new Student("Astutik"));
		
		for (var s : students) {
			System.out.println(s.toString());
		}
	}

}
```

Output:

```
Student (name=Abid)
Student (name=Astutik)
Student (name=Lina)
Student (name=Nathan)
```

## SortedSet dengan Comparator

Jika element bukan turunan atau implementasi dari interface `Comparable`, maka kita bisa menggunakan `Comparator` untuk kemudian di beri tahu kepada `SortedSet` bagaimana cara mengurutkan elemen-elemennya.

Contoh:

```java
import java.util.Comparator;
import java.util.SortedSet;
import java.util.TreeSet;

public class DemoSortedSet {
	
	static class Student {
		
		private String name;

		public Student(String name) {
			this.name = name;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		@Override
		public String toString() {
			return "Student (name=" + name + ")";
		}
	}
	
	static class StudentComparator implements Comparator<Student> {

		@Override
		public int compare(Student o1, Student o2) {
			return o1.getName().compareTo(o2.getName());
		}
		
	}
	
	public static void main(String[] args) {
		
		SortedSet<Student> students = new TreeSet<>(new StudentComparator());
		students.add(new Student("Recky"));
		students.add(new Student("Anisa"));
		students.add(new Student("Restu"));
		students.add(new Student("Ade"));
		
		for (var s : students) {
			System.out.println(s.toString());
		}
	}

}
```

Output:

```
Student (name=Ade)
Student (name=Anisa)
Student (name=Recky)
Student (name=Restu)
```

## Immutable SortedSet

`SortedSet` dapat dibuat menjadi immutable menggunakan metod static:

|Nama Method | Keterangan |
|---|---|
| `Collections.emptySortedSet()` | Membuat immutable sorted set kosong |
| `Collections.unmodifiableSortedSet()` | Mengubah mutable sorted set menjadi immutable |

Contoh:

```java
SortedSet<Student> immutableStudent = Collections.unmodifiableSortedSet(students);
	
immutableStudent.add(new Student("Dika")); // Error 
	
students = Collections.emptySortedSet();
```

## Baca Juga

* [Java Comparable](/blog/java-comparable-interface) 
* [Java Comparator](/blog/java-comparator-interface)