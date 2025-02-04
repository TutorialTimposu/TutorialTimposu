---
sidebar_position: 10
title: 'Java Generic Wildcard'
---

Java generic _wildcard_ digunakan dalam kondisi dimana kita tidak peduli generic parameter type pada object yang digunakan. Misalnya kita ingin melakukan getter tanpa peduli type parameter yang digunakan. 
* Wilcard dapat digunakan dengan key ` ? ` . 
* Wildcard tidak dapat melakukan setter karena dapat mengacaukan alur program.

```java
void getData(MyClass<?> data) {
		
}
```

Contoh:

```java
public class DemoWildcard {
	
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
	
	// mendefiniskan method generic wildcard
	static void getData(MyClass<?> data) {
		System.out.println(data.getValue());
		
//		data.setValue(new MyClass<String>("Hello")); // ERROR: Wilcard tidak dapat melakukan setter
	}
	
	public static void main(String[] args) {
		MyClass<String> str = new MyClass<String>("Ucup");
		MyClass<Integer> intr = new MyClass<Integer>(2025);
		
		getData(str);
		getData(intr);
	}
}
```
