---
slug: java-reflection
title: Apa itu Java Reflection
authors: topekox
tags: [java]
---

Java Reflection adalah fitur dalam bahasa pemrograman Java yang memungkinkan program untuk memeriksa dan memanipulasi dirinya sendiri. Fitur ini memungkinkan program untuk melihat struktur internalnya, seperti class, interface, method, dan field. 

Kemampuan untuk memeriksa dan memanipulasi class Java oleh dirinya sendiri (reflection) mungkin kedengarannya tidak terlalu penting, tetapi dalam bahasa pemrograman lain fitur ini tidak ada. Misalnya, tidak ada cara dalam program Pascal, C, atau C++ untuk memperoleh informasi tentang fungsi yang didefinisikan dalam program tersebut. 

<!--truncate-->

Salah satu contoh penggunaan reflection adalah dalam pembuatan framework java, seperti misalnya pada framework Spring.

## Contoh Sederhana

Untuk melihat cara kerja Java Reflection perhatikan contoh di bawah ini:

```java
import java.lang.reflect.Method;

public class CheckMethods {

        public static void main(String[] args) {
                try {
                        Class cls = Class.forName(args[0]);
                        Method[] methods = cls.getDeclaredMethods();

                        for (var m : methods) {
                                System.out.println(m.toString());
                        }
                } catch (Exception e) {
                        System.err.println(e);
                }
        }
}
```

Pada contoh di atas, kita memeriksa class dengan `Class cls = Class.forName(args[0])` melalui argumen yang dimasukan ketika menjalankan perintah `java` dan memanggil semua method yang berada di dalam sebuah class melalui `cls.getDeclaredMethods()`.

Sekarang kita akan memeriksa method sebuah class misalnya method dalam class `java.lang.Runnable` 

```
 java CheckMethods java.lang.Runnable
 ```
 
 Outputnya adalah:
 
 ```
 public abstract void java.lang.Runnable.run()
 ```
 
 Yang artinya method di dalam class `java.lang.Runnable`, hanya ada method `run()`.
 
 Contoh lain misalnya kita memeriksa method pada class `java.util.Stack`:
 
 ```
 java CheckMethods java.util.Stack
 ```
 
 Outputnya adalah:
 
 ```
 public boolean java.util.Stack.empty()
public synchronized java.lang.Object java.util.Stack.peek()
public synchronized int java.util.Stack.search(java.lang.Object)
public java.lang.Object java.util.Stack.push(java.lang.Object)
public synchronized java.lang.Object java.util.Stack.pop() 
 ```

## Java Reflection menggunakan Java Annotation

Praktek Java Reflection menggunakan Java Annotation banyak digunakan dalam  pembuatan framework java. Pada praktek kali ini kita akan membuat sebuah annotation `@NotBlank` yang nantinya akan sebagai validasi field dalam sebuah objek. Berikut contohnya:

* Membuat annotation untuk digunakan dalam setiap field

```java
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface NotBlank {

}

```

* Membuat class object User Request menggunakan annotation `@NotBlank` yang sudah dibuat pada fieldnya

```java
public class UserRequest {
	
	@NotBlank
	private String username;
	
	@NotBlank
	private String password;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}	

}
```

* Membuat class Validasi

```java
import java.lang.reflect.Field;

public class ValidationUtil {

	public static void validationReflection(Object object) {
		Class cls = object.getClass();
		Field[] fields = cls.getDeclaredFields();

		for (var field : fields) {
			field.setAccessible(true);
			if (field.getAnnotation(NotBlank.class) != null) {
				try {
					String value = (String) field.get(object);
					if (value == null || value.isBlank()) {
						throw new RuntimeException("Field " + field.getName() + " is Blank");
					}
				} catch (IllegalAccessException e) {
					System.out.println("Tidak bisa mengakses field " + field.getName());
				}
			}
		}
	}

}
```

* Mebuat class main

```java
public class ReflectionApp {

	public static void main(String... args) {
		UserRequest request = new UserRequest();
		
		ValidationUtil.validationReflection(request);
	}

}
```

Jika program di atas dijalankan akan menghasilkan output exception:

```
Exception in thread "main" java.lang.RuntimeException: Field username is Blank
	at reflection.ValidationUtil.validationReflection(ValidationUtil.java:17)
	at reflection.ReflectionApp.main(ReflectionApp.java:8)
```

Output diatas terjadi  exception karena kita tidak memasukan value pada field `username` atau `password`. Jika kita memasukan nilai pada `username` dan `password` seperti berikut:

```java
UserRequest request = new UserRequest();
request.setUsername("ucup");
request.setPassword("rahasia");
		
ValidationUtil.validationReflection(request);
```

## Referensi

* [https://www.oracle.com/technical-resources/articles/java/javareflection.html](https://www.oracle.com/technical-resources/articles/java/javareflection.html)