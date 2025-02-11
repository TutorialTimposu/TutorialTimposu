---
slug: java-comparator-interface
title: Belajar Java Comparator
authors: topekox
tags: [java, java comparator]
---

Pada postingan sebelumnya, kita bisa membandingkan class dengan mensortirnya dengan menggunakan [comparable](/blog/java-comparable-interface). Dengan comparable kita dapat menggunakan class sendiri sebagai object comparable dengan mengimplementasi class Comparable, namun bagaimana dengan class milik orang lain yang ingin kita comparable. Dengan kasus seperti itu kita dapat menggunakan interface generic bernama Comparator. Interface Comparator akan mengimplementasikan method `int compare(T o1, T o2)` yang nanti melakukan compare antara 2 objek, yang akan mengembalikan nilai bilangan bulat negatif, nol, dan bilangan bulat positif:

<!--truncate-->

* negatif:argumen pertama kurang dari argumen kedua.
* nol: argumen pertama sama dengan argumen kedua.
* positif: argumen pertama lebih besar dari yang argumen kedua.

### Contoh

```java
import java.util.Arrays;
import java.util.Comparator;

public class DemoComparator {
	
	static class Student {
		
		private Integer id;
		private String name;
		
		public Student(Integer id, String name) {
			this.id = id;
			this.name = name;
		}
		
		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}
		
		public String getName() {
			return name;
		}
		
		public void setName(String name) {
			this.name = name;
		}
		
		@Override
		public String toString() {
			return "Student (id = " + id + ", name = " + name + ")";
		}
	}
	
	// membuat comparator
	static class SortUtil implements Comparator<Student> {

		@Override
		public int compare(Student arg0, Student arg1) {
			return arg0.getId() - arg1.getId();
		}		
	}
	
	public static void main(String[] args) {
		Student[] students = {
				new Student(3, "Ade"),
				new Student(2, "Ray"),
				new Student(4, "Masyita"),
				new Student(1, "Nurul")
		};
		
		System.out.println("Sebelum sorting");
		
		for (Student s : students) {
			System.out.println(s.toString());			
		}
		
		Arrays.sort(students, new SortUtil());
		
		System.out.println("\nSetelah sorting");
		
		for (Student s : students) {
			System.out.println(s.toString());			
		}		
	}

}
```

Output:

```
Sebelum sorting
Student (id = 3, name = Ade)
Student (id = 2, name = Ray)
Student (id = 4, name = Masyita)
Student (id = 1, name = Nurul)

Setelah sorting
Student (id = 1, name = Nurul)
Student (id = 2, name = Ray)
Student (id = 3, name = Ade)
Student (id = 4, name = Masyita)
```

Pada contoh di atas program melakukan sorting `id` yang dilakukan pada method `compare` implementasi dari interface Comparator, yang akan mengurutkan `id` dari hasil `arg0.getId() - arg1.getId()`, yang kemudian disorting setelah dipanggil pada statement `Arrays.sort(students, new SortUtil())`:

```java
@Override
public int compare(Student arg0, Student arg1) {
	return arg0.getId() - arg1.getId();
}
```

### Contoh 2 field

Kali ini kita akan melakukan compare dengan menggunakan 2 field:

```java
import java.util.Arrays;
import java.util.Comparator;

public class DemoComparatorMultiField {

	static class Student {

		private Integer id;
		private String name;

		public Student(Integer id, String name) {
			this.id = id;
			this.name = name;
		}

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		@Override
		public String toString() {
			return "Student (id = " + id + ", name = " + name + ")";
		}
	}

	// membuat comparator
	static class SortUtil implements Comparator<Student> {

		@Override
		public int compare(Student arg0, Student arg1) {
			// compare id
			int idCompare = arg0.getId().compareTo(arg1.getId());

			// compare name
			int nameCompare = arg0.getName().compareTo(arg1.getName());

			// akan melakukan compare dengan sortir name terlebih dahulu setelah itu sortir id
			return (nameCompare == 0) ? idCompare : nameCompare;
		}
	}

	public static void main(String[] args) {

		Student[] students = { 
				new Student(3, "Ade"),
				new Student(2, "Ray"), 
				new Student(4, "Masyita"),
				new Student(1, "Nurul"), 
				new Student(6, "Randi"), 
				new Student(7, "Masyita"), 
				new Student(5, "Restu")
		};

		System.out.println("Sebelum sorting");

		for (Student s : students) {
			System.out.println(s.toString());
		}

		Arrays.sort(students, new SortUtil());

		System.out.println("\nSetelah sorting");

		for (Student s : students) {
			System.out.println(s.toString());
		}
	}

}
```

Output:

```
Sebelum sorting
Student (id = 3, name = Ade)
Student (id = 2, name = Ray)
Student (id = 4, name = Masyita)
Student (id = 1, name = Nurul)
Student (id = 6, name = Randi)
Student (id = 7, name = Masyita)
Student (id = 5, name = Restu)

Setelah sorting
Student (id = 3, name = Ade)
Student (id = 4, name = Masyita)
Student (id = 7, name = Masyita)
Student (id = 1, name = Nurul)
Student (id = 6, name = Randi)
Student (id = 2, name = Ray)
Student (id = 5, name = Restu)
```

Pada contoh di atas method `compare()` akan melakukan sortir yang mana akan melakukan sortir terhadap _name_ terlebih dahulu setelah itu baru sortir _id_ .
