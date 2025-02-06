---
slug: java-record
title: Apa itu Java Record
authors: topekox
tags: [java]
---

Java Record merupakan fitur baru yang ada pada Java 14. Java record merupakan class khusus yang menyederhanakan penulisan kode Java yang memiliki data yang tidak dapat diubah atau immutable. Ketika membuat Java Record secara otomatis akan dibuatkan `constructor`, method `equals()`, `getter()`, `toString()`, `hasCode()` tapi tidak membuatkan `setter()`.

<!--truncate-->

## Tanpa Java Record

Misalkan kita membuat class dengan memiliki field `name` dan `city`. Berikut contoh class immutable umum yang sering dibuat:

```java
public final class Person {
    private final String name;
    private final String city;

    public Person(String name, String city) {
        this.name = name;
        this.city = city;
    }

    String name() { 
    	return this.name; 
    }

    String city()  { 
    	return this.city; 
    }

    public boolean equals() {
      	//...
    }
    public int hashCode() {
      	//...
    }
    
    public String toString() {
    	//...
    }
}
```

## Menggunakan Java Record

Nah.. Kode panjang di atas bisa diimplementasikan dengan Java Record sehingga syntaksnya menjadi lebih simpel seperti berikut:

```java
public record PersonRecord(String name, String city) { }
```


Misalnya kita buat class main agar melakukan output:

```java
public class DemoJavaRecord {
	public static void main(String[] args) {
		PersonRecord myRecord = new PersonRecord("Ucup", "Makassar");
		System.out.println(myRecord);
		System.out.println("Name: " + myRecord.name()); //tidak menggunakan getter pada umummnya
		System.out.println("City: " + myRecord.city());
	}
}
```

Output:

```
MyJavaRecord[name=Ucup, city=Makassar]
Name: Ucup
City: Makassar
```

Seperti sudah dijelaskan sebelumnya, pada record class kita hanya dapat memanggil `getter()` dan setiap constructor yang didefinisikan bersifat final, yang artinya pada contoh di atas value `name` dan `city` tidak dapat diubah. Sehingga, jika kita menambahkan method `setter()` untuk class record maka akan terjadi error.

```java
public record PersonRecord(String name, String city) {

//	ERROR: karena field bersifat final
//	void setName(String name) {
//		this.name = name;
//	}

}
```

## Constructor pada Java Record

Saat membuat class record, secara default Java juga membuatkan constructor dengan paramater yang sama pada saat class record dibuat, tapi kita juga dapat menambahkan constructor sendiri. Constructor custom ini dapat digunakan misalnya dalam kondisi tertentu, contohnya untuk validasi.

```java
public record StudentRecord(String firstName, String lastName, int scores) {

	public StudentRecord {
		if (scores < 50) {
			System.out.println("Maaf!!! Siswa atas nama " + firstName + " " + lastName + " TIDAK LULUS");
		} else {
			System.out.println("Selamat!!! Siswa atas nama " + firstName + " " + lastName + " LULUS");
		}
	}
	
}
```

Main class:

```java
public class DemoRecordApp {
	public static void main(String[] args) {
		
		new StudentRecord("Ucup", "Bahlul", 30);
		new StudentRecord("Abu", "Nawas", 60);
		
	}
}
```

Output:

```
Maaf!!! Siswa atas nama Ucup Bahlul TIDAK LULUS
Selamat!!! Siswa atas nama Abu Nawas LULUS
```

## Method pada Java Record

Pada Java Record dimungkinkan untuk membuat method contoh:

```java
public record StudentRecord(String firstName, String lastName, int scores) {

	public String sayHello(){
		return "My name is: " + firstName + " " + lastName + ", and my score: " + scores;
	}
	
}
```

Walaupun dimungkinkan dalam membuat method pada Java Record, tapi kita harus menghidari penggunaan method sebagai utility, karena sejatinya Java Record tujuannya untuk pembawa data.

## Lihat juga

* [https://docs.oracle.com/en/java/javase/17/language/records.html](https://docs.oracle.com/en/java/javase/17/language/records.html)
* https://www.infoq.com/articles/exploring-java-records/