---
sidebar_position: 7
title: 'Java Generic Invariant'
---

Secara default sifat generic adalah _invariant_ , yang artinya tidak boleh di subtitusi dengan subtype(class child) atau supertype(class parent) , misalnya saat kita membuat object `MyClass<String>`, maka tidak sama dengan `MyClass<Object>`, walaupun _String_ adalah turunan dari _Object_ , dan begitupun sebaliknya.

```java
void doInvariant(MyClass<Object> data) {

}
```

Contoh:

```java
public class DemoInvariant {
	
	static class MyClass<T> {
		
		private T value;
		
		public MyClass(T value) {
			this.value = value;
		}
		
		public T getValue() {
			return value;
		}
		
		public void setValue(T value) {
			this.value = value;
		}
		
	}

	public static void doInvariant(MyClass<Object> data) {
		System.out.println(data.getValue());
	}
	
	public static void main(String[] args) {
		MyClass<String> strData = new MyClass<>("Halo semua...");
//		doInvariant(strData); // ERROR
		System.out.println(strData.getValue());
		
		MyClass<Object> objData = new MyClass<>(3000);
//		MyClass<Integer> intData = objData; // ERROR
		doInvariant(objData);
	}
	
}
```

Output:

```
Halo semua...
3000
```

Jadi dari program diatas, tidak ada hubungan Polimorfisme  dan Inheritance di Generic Java.