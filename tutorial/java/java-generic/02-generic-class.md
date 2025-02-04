---
sidebar_position: 5
title: 'Java Generic Class'
---

Pada materi kali ini kita akan membuat class generic yang bisa digunakan berkali-kali (reusable) dengan menambahkan parameter `<T>` pada deklarasi class, yang nantinya parameter `T` akan menjadi type data yang digunakan di dalam class tersebut.

Contoh class Generic:

```java
public class DemoClassGeneric<T> {
	
	private T value;
	
	public DemoClassGeneric(T value) {
		this.value = value;
	}
	
	public void setValue(T value) {
		this.value = value;
	}
	
	public T getValue() {
		return value;
	}

}
```

```java
public class DemoClassGenericMain {

	public static void main(String[] args) {
		DemoClassGeneric<String> genString = new DemoClassGeneric<String>("Halo bro!!!");
		System.out.println("value " + genString.getValue());
		
		DemoClassGeneric<Integer> genInt = new DemoClassGeneric<Integer>(2025);
		System.out.println("value " + genInt.getValue());
	}

}
```

Dengan menggunakan generic, maka kita dapat menggonta-ganti type data yang akan digunakan pada class generic yang sama, dan compiler akan memberikan error ketika value yang dimasukan tidak sesuai dengan type data yang digunakan. Seperti pada contoh di atas kita bisa memasukan ke dalam constructor baik itu type String atau Integer.

Output:

```
value Halo bro!!!
value 2025
```

## Penamaan Type Parameter

Pada contoh di atas kita menggunakan parameter `T`, sebenarnya tidak ada aturan baku dalam menggunakan parameter, cuma dalam prakteknya penamaan parameter biasanya satu huruf besar.

Jenis nama tipe parameter yang sering digunakan :
* E  Element (biasanya digunakan untuk Collection Framework)
* K  Key
* N  Number
* T  Type
* V  Value
* S,U,V dst. 2nd, 3rd, 4th types.

## Multiple Parameter

Selain itu kita juga bisa menggunakan multiple parameter contohnya `class MyData<K, V>`.

Contoh:

```java
public class DemoMultipleParameter {

	static class MyData<K, V> {
		
		K firstData;
		
		V secondData;
		
		public MyData(K first, V second) {
			this.firstData = first;
			this.secondData = second;
		}
		
		public void getAllData() {
			System.out.println("The first data is: " + firstData);
			System.out.println("The second data is: " + secondData);
		}
		
	}

	public static void main(String[] args) {
	
		MyData<String, Integer> data = new MyData<>("Rani", 2005);
		data.getAllData();
		
		MyData<String, Boolean> data2 = new MyData<>("Perempuan", Boolean.TRUE);
		data2.getAllData();
	}

}
```

Pada contoh di atas kita menggunakan multiple parameter dalam Java Generic yaitu parameter dengan nama `<K, V>`, yang dapat di-reusable type datanya..

Output:

```
The first data is: Rani
The second data is: 2005
The first data is: Perempuan
The second data is: true
```

## Type Erasure

Dalam menggunakan generic type, ada proses yang bernama _Type Erasure_ . _Type Erasure_ adalah proses pengecekan generic pada saat proses compile, tetapi tidak melakukan pengecekan pada saat runtime. Jadi pada saat proses compile, compiler akan merubah kode generic menjadi type Object, sehingga informasi generic yang kita buat akan akan hilang ketika kode yang dibuat telah menjadi binary atau ketika proses runtime. 

![Type Erasure](/img/java/TypeErasureInGenerics.jpg "Type Erasure")

_source: https://ramj2ee.blogspot.com/2017/05/java-tutorial-generics-in-java-java_97.html_

Dari penjelasan di atas informasi generic akan hilang ketika sudah dilakukan compile atau sudah menjadi binary code, maka perlu berhati-hati dalam menggunakan tipe data generic agar tidak terjadi runtime error. 

Contoh:

```java
DemoClassGeneric genString = new DemoClassGeneric("Halo bro!!!"); // Tidak mendefinisikan data type generic
		
DemoClassGeneric<Integer> genInt = (DemoClassGeneric<Integer>) genString;
Integer intData = genInt.getValue(); 
```

Pada contoh di atas kita tidak mendefinisikan data type generic seperti pada contoh sebelumnya `DemoClassGeneric<String> genString = new DemoClassGeneric<String>("Halo bro!!!");` , pada saat kode di compile maka tidak akan menemukan error, tetapi ketika di run, program akan error. 

Output:

```
Exception in thread "main" java.lang.ClassCastException: class java.lang.String cannot be cast to class java.lang.Integer (java.lang.String and java.lang.Integer are in module java.base of loader 'bootstrap')
```

Jadi diperlukan kehati-hatian dalam menggunakan generic type.