---
sidebar_position: 8
title: 'Java Generic Covariant'
---

Walaupun sebelumnya kita sudah mengetahui bahwa secara default sifat dari type generic adalah _invariant_ tetapi pada kondisi tertentu kita tidak harus membuat type generic selalu _invariant_ , contohnya dengan menggunakan _covariant_ . _Covariant_ artinya kita dapat subtitusi subtype(class child) dengan supertype(class parent). 

Agar generic object menjadi _covariant_ adalah dengan menggunakan key `< ? extends ParentClass >` , contoh `MyClass<String>` , maka bisa disubtitusi menjadi `< ? extends Object >` , karena dalam hal ini String adalah turunan Object. _Covariant_ bersifat read only kita tidak bisa mengubah data generic-nya, kita hanya bisa melakukan getter.

```java
void doCovariant(MyClass<? extends Object> data) {
	
}
```

Contoh:

```java
public class DemoCovariant {

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
	
	static void doCovariant(MyClass<? extends Object> data) {
		System.out.println(data.getValue());
//		data.setValue(1); // ERROR: data akan kacau jika kita memasukan value dengan type data tertentu
	}
	
	public static void main(String[] args) {
		MyClass<String> dataStr = new MyClass<String>("Halo Bro!!!");
		doCovariant(dataStr);
	}

}
```

Output:

```
Halo Bro!!!
```