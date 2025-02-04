---
sidebar_position: 9
title: 'Java Generic Contravariant'
---

_Contravariant_ adalah kebalikan dari _covariant_ , _contravariant_ artinya kita dapat subtitusi supertype(class parent) dengan subtype(class child). Agar generic object menjadi _contravariant_ adalah menggunakan key `< ? super ChildClass >` contoh `MyClass<Object>` , maka bisa disubtitusi menjadi `< ? super String >`. _Contravariant_ bisa write read, artinya kita bisa mengubah data generic-nya, kita bisa melakukan setter & getter.

```java
void doContravariant(MyClass<? super String> data) {
	
}
```

Contoh:

```java
public class DemoContravariant {
	
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
	
	static void doContravariant(MyClass<? super String> data) {
		System.out.println(data.getValue());
		data.setValue("Happy with Java");
	}
	
	public static void main(String[] args) {
		MyClass<Object> myClass = new MyClass<Object>("Hallo Bro!!!!");
		MyClass<? super String> strData = myClass;
		
		System.out.println(strData.getValue());
		myClass.setValue("Demo Contravariant");
		doContravariant(myClass);
		System.out.println(myClass.getValue());
	}

}
```

Output:

```
Hallo Bro!!!!
Demo Contravariant
Happy with Java
```