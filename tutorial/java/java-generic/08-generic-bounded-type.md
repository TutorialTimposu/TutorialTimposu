---
sidebar_position: 11
title: 'Java Generic Bounded Type'
---

Dalam kasus tertentu, kadang kita ingin membatasi type data apa saja yang boleh digunakan dalam generic parameter type. Kita bisa menambahkan constraint di generic parameter type, dengan mendifiniskan type data yang diperbolehkan, maka secara otomatis type data yang digunakan adalah type data yang telah didefinisikan atau class turunannya. Secara default constraint type yang digunakan dalam generic parameter type adalah Object, sehingga semua type data bisa digunakan.

```java
class NumberData<T extends Number> {
		
}
```

Dari contoh di atas pada parameter type yang boleh dimasukan pada class NumberData adalah type data `Number` atau class turunannya.

Contoh:

```java
public class DemoBoundedTypeParameter {

	static class NumberData<T extends Number> {
		
		private T data;
		
		public NumberData(T data) {
			this.data = data;
		}

		public T getData() {
			return data;
		}

		public void setData(T data) {
			this.data = data;
		}		
	}
	
	public static void main(String[] args) {
		
		NumberData<Number> numberData = new NumberData<Number>(2025);
		NumberData<Integer> intData = new NumberData<Integer>(2);
		NumberData<Long> longData = new NumberData<Long>(1L);
//		NumberData<String> strData = new NumberData<String>("Halo Bro!!!"); // ERROR: karena String buka turunan class Number
		
		System.out.println(numberData.getData());
		System.out.println(intData.getData());
		System.out.println(longData.getData());
	}
}
```

Output:

```
2025
2
1
```

Kelebihan dengan menggunakan metode di Bounded Type adalah kita dapat mengakses method yang ada pada class yang dimasukan pada generic parameter type. Contoh di atas kita menggunakan parameter dengan type data `Number`, maka semua method pada class `Number` bisa di akses.

```java
static class NumberData<T extends Number> {
		
	private T data;
	
	public NumberData(T data) {
		this.data = data;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}
	
	public void getDataIntValue() {
		System.out.println("Nilai Integer adalah: " + data.intValue()); // Mengakses method intValue() dari class Number 
	}		
}
```

## Multiple Parameter Bounded Type

Kita dapat memasukan beberapa parameter bounded type dengan menggunakan key `&` , berguna apabila kita ingin kondisi dimana kita ingin menggunakan beberapa parameter type. __Tetapi__ parameter kedua dan seterusnya hanya boleh bertipe interface, karena di dalam Java sebuah class tidak dapat memiliki parent lebih dari 1 class.

Contoh:

```java
public class DemoMultipleBoundedType {

	static interface Mamalia {
		void sayHello(String message);
	}
	
	static abstract class Animal {
		
	}
	
	static class Crocodile extends Animal {
		
	}
	
	static class Cat extends Animal implements Mamalia {

		@Override
		public void sayHello(String message) {
			System.out.println(message);
		}		
	}
	
	static class Dog extends Animal implements Mamalia {

		@Override
		public void sayHello(String message) {
			System.out.println(message);			
		}
		
	}
	
	// mendeklarasikan multiple bounded type: extends Animal & implements Mamalia	
	static class MyData<T extends Animal & Mamalia> {
		
		private T data;

		public MyData(T data) {			
			this.data = data;
		}

		public T getData() {
			data.sayHello("Hello from : " + data.getClass().getSimpleName()); // memanggil method sayHello() pada interface Mamalia
			return data;
		}

		public void setData(T data) {
			this.data = data;
		}		
		
	}
	
	public static void main(String[] args) {
		MyData<Cat> cat = new MyData<>(new Cat());
		MyData<Dog> dog = new MyData<>(new Dog());
//		MyData<Crocodile> croco = new MyData<>(new Crocodile()); // ERROR: Crocodile tidak implements Mamalia 

		cat.getData();
		dog.getData();
	}	
}
```

Output:

```
Hello from : Cat
Hello from : Dog
```