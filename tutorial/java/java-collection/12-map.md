---
sidebar_position: 12
title: 'Java Map'
---

`Map` adalah struktur data collection yang berisikan mapping antara __key__ dan __value__. 
Key harus bersifat unik, tidak boleh duplikat, dan satu key cuma boleh mapping ke satu value. `Map` sebenarnya mirip dengan Array, cuma bedanya kalo di Array, key adalah index (integer), sedangkan di Map, key nya bebas kita tentukan sesuai keinginan kita `Map<K, V>`.

```java
Map<Integer, String> student = new HashMap<Integer, String>();
```

## Hashmap

`HashMap` adalah implementasi `Map` yang melakukan distribusi key menggunakan `hashCode()` function. Karena HashMap sangat bergantung dengan `hashCode()` method,
jadi pastikan kita harus membuat function hashCode seunik mungkin, karena jika terlalu banyak nilai `hashCode()` yang sama, maka pendistribusian key nya tidak akan optimal sehingga proses get data di `Map` akan semakin lambat. Di `HashMap` pengecekan data duplikat dilakukan dengan menggunakan method `equals()` nya.

```java
import java.util.HashMap;
import java.util.Map;

public class DemoHashMap {

	public static void main(String[] args) {
		
		Map<Integer, String> student = new HashMap<Integer, String>();
		student.put(1, "Thomas"); // method put dapat digunakan untuk insert dan update data
		student.put(2, "Didin");
		student.put(3, "Abdullah");
		student.put(4, "Rustam");
		
		System.out.println(student.get(2));
		System.out.println(student.get(4));
		System.out.println(student.get(3));
		System.out.println(student.get(1));
	}
}
```

## LinkedHashMap

 `LinkedHashMap` adalah implementasi `Map` dengan menggunakan Double Linked List. Pada `LinkedHashMap` data akan disimpan berurutan dalam Linked List sesuai urutan waktu kita menyimpan data. Namun perlu diperhatikan, proses get data di `LinkedHashMap` akan semakin lambat,
 karena harus melakukan iterasi data linked list terlebih dahulu. Gunakan `LinkedHashMap` jika memang kita lebih mementingkan iterasi/urutan data Map nya.

 ```java
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

public class DemoLinkedHashMap {

	public static void main(String[] args) {
		
		Map<String, String> countrys = new LinkedHashMap<>();
//		Map<String, String> countrys = new HashMap<>(); // Jika menggunakan HashMap data tidak berurut karna menggunakan hash
		
		countrys.put("id", "Indonesia");
		countrys.put("jp", "Japan");
		countrys.put("in", "India");
		countrys.put("zw", "Zimbabwe");
		
		Set<String> keys = countrys.keySet();
		
		for (String k : keys) {
			System.out.println(k);
		}
	}
}
```


## IdentityHashMap

`IdentityHashMap` adalah implementasi `Map` sama seperti `HashMap` Yang membedakan adalah cara pengecekan kesamaan datanya, tidak menggunakan function `equals`, melainkan menggunakan operator `==` (reference equality), artinya data dianggap sama, jika memang lokasi di memory tersebut sama.

Contoh:

```java
import java.util.IdentityHashMap;
import java.util.Map;

public class DemoIdentityHashMap {
	
	public static void main(String[] args) {
		
		Map<String, String> person = new IdentityHashMap<String, String>();
		
		String firstName = "Ucup";
		String midleName = "si";
		String lastName = "Timposu";
		
		String name1 = "Ucup si Timposu";
		String name2 = firstName + " " + midleName + " " + lastName;
		
		// Perbedaan menggunakan equals dan reference equality
		System.out.println(name1.equals(name2)); // true
		System.out.println(name1 == name2); // false => merujuk ke reference yang berbeda
		
		person.put("person1", name1);
		person.put("person2", name2);
		
		System.out.println(person.size());
	}

}
```

Output:

```
true
false
2
```

## WeakHashMap

`WeakHashMap` adalah implementasi `Map` mirip dengan `HashMap`. Yang membedakan adalah `WeakHashMap` menggunakan weak key, dimana jika tidak digunakan lagi maka secara otomatis data di `WeakHashMap` akan dihapus.
 Artinya, jika terjadi _garbage collection_ di Java, bisa dimungkinkan data di `WeakHashMap` akan dihapus.
 `WeakHashMap` cocok digunakan untuk menyimpan data cache di memory secara sementara.

```java
import java.util.Map;
import java.util.WeakHashMap;

public class DemoWeakHashMap {

	public static void main(String[] args) {
		
		Map<Integer, Integer> values = new WeakHashMap<Integer, Integer>();
		
		for (int i = 1; i <= 1_000_000; i ++) {
			values.put(i, i);
		}

		System.gc(); // menjalankan gerbage collection java
		
		System.out.println(values.size()); // values tidak sampai 1.000.000 karena sebagian di hapus WeekHashMap
	}

}
```

## EnumMap

`EnumMap` adalah implementasi `Map` dimana key nya adalah bertipe Enum. Karena data Enum sudah pasti unik dan tidak boleh ada yang sama, oleh karena itu cocok dijadikan key di `Map`. Algoritma pendistribusian key dioptimalkan untuk Enum,sehingga lebih optimal dibandingkan menggunakan `hashCode()` method.

```java
import java.util.EnumMap;
import java.util.Map;

public class DemoEnumMap {

	static enum Gender {
		MAN, WOMAN, NOT_DEFINED
	}
	
	public static void main(String[] args) {
		
		Map<Gender, String> persons = new EnumMap<Gender, String>(Gender.class);
		persons.put(Gender.MAN, "Ade");		
		persons.put(Gender.WOMAN, "Vivin");		
		persons.put(Gender.NOT_DEFINED, "Eben");
		
		for (var key : persons.keySet()) {
			System.out.println(persons.get(key));
		}
	}
}
```