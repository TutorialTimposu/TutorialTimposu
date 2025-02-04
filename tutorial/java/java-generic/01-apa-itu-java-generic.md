---
sidebar_position: 4
title: 'Apa itu Java Generic'
---

Java generic adalah fitur dalam bahasa pemrograman Java yang memungkinkan pembuatan suatu tipe data, yang dapat digunakan kembali untuk berbagai jenis tipe data. Generic memungkinkan pembuatan class, interface, dan method yang dapat beroperasi pada tipe data yang berbeda atau dibuat secara lebih umum dan reusable. 

Contoh tanpa generic:

```java
public class DemoNonGeneric {

	static class Hello {
		
		private Object value;
		
		public Object getValue() {
			return value;
		}
		
		public void setValue(Object value) {
			this.value = value;
		}
		
	}
	
	public static void main(String[] args) {
		Hello hello = new Hello();
		
		hello.setValue("Halo Bro!!!");
		String valueString = (String) hello.getValue();
		System.out.println(valueString);

		hello.setValue("3");
		Integer valueInt = (Integer) hello.getValue(); //lolos ketika dicompile tapi error ketika runtime, karena berbeda type data.
		System.out.println(valueInt);
	}
	
}
```

Pada contoh di atas kita tidak boleh sembarangan memasukan value ke dalam `setValue()`, walaupun di dalam class tersebut terdapat class `Object` yaitu induk dari segala object di Java tapi tanpa adanya casting dengan tipe data yang sama maka akan memunculkan exception.  Sebenarnya cara tidak salah tapi bukanlah best practice, karena kita harus selalu melakukan casting terhadap type data yang sama ketika dideklarasikan.

Output:

```
Halo Bro!!!
Exception in thread "main" java.lang.ClassCastException: class java.lang.String cannot be cast to class java.lang.Integer (java.lang.String and java.lang.Integer are in module java.base of loader 'bootstrap')
	at generic.DemoNonGeneric.main(DemoNonGeneric.java:27)
```

Pada materi selanjutnya kita akan membuat Generic Class untuk mengimplementasikan contoh di atas. 

