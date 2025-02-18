---
sidebar_position: 22
title: 'Default Method'
---

Di Java 8 ada fitur bernama Default Method, dimana kita bisa menambahkan konkrit method di interface. Fitur ini banyak sekali digunakan di Java Collection, karena kita tahu semua collection di Java memiliki kontrak interface, sehingga dengan mudah di Java bisa meng-improve kemampuan semua collection hanya dengan menambahkan default method di interface collection-nya.

## Default Method di Collection

| Default Method | Keterangan |
| --- | --- |
| `Iterable.forEach(consumer)` | Melakukan iterasi seluruh data collection |
| `List.removeIf(predicate)` | Menghapus data di collection menggunakan predicate |
| `List.replaceAll(operator)` | Mengubah seluruh data di collection |
| `getOrDefault(key, defaultValue)` | Mengambil data berdasarkan key, jika tidak ada, return `defaultValue` |
| `forEach(consumer)` | Melakukan iterasi seluruh data key-value |
| `replaceAll(function)` | Mengubah seluruh data value |
| `putIfAbsent(key, value)` | Simpan data ke map jika belum ada |
| `remove(key, value)` | Hapus jika key-value nya sama |

Contoh:

```java
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.function.UnaryOperator;

public class DemoDefaultMethod {

	public static void main(String[] args) {
		defaultMethodCollection();
	}

	private static void defaultMethodCollection() {
		List<Integer> numbers = new ArrayList<Integer>();

		for (int i = 1; i <= 100; i++) {
			numbers.add(i);
		}

		System.out.println(numbers);

		// replaceAll default method untuk melakukan replace value dalam elemen
		numbers.replaceAll(new UnaryOperator<Integer>() {

			@Override
			public Integer apply(Integer value) {
				return value * 10;
			}
		});

		System.out.println(numbers);

		/** Looping forEach **/
		// looping dengan forEach
		for (var number : numbers) {
			System.out.println(number);
		}

		// looping dengan forEach method consumer
		numbers.forEach(new Consumer<Integer>() {
			@Override
			public void accept(Integer value) {
				System.out.println("nilai ke: " + value);
			}
		});

		// looping dengan forEach method consumer dengan lambda
		numbers.forEach((value) -> System.out.println("Value ke: " + value));

		/** Remove If **/
		// remove if dengan removeIf() method
		numbers.removeIf(new Predicate<Integer>() {
			@Override
			public boolean test(Integer value) {
				return value > 500;
			}
		});

		// remove if dengan removeIf() method predicate dengan lambda
		numbers.removeIf(value -> value > 500);

		System.out.println(numbers);
	}
}
```

## Default Method di Map

| Default Method | Keterangan |
| --- | --- |
| `replace(key, oldValue, newValue)` | Ubah key jika value sekarang sama dengan `oldValue` |
| `computeIfAbsent(key, function)` | Ubah key dengan value hasil function jika belum ada |
| `computeIfPresent(key, function)` | Ubah key dengan value hasil function jika sudah ada |
| … dan masih banyak  | |
 
Contoh penggunaan default method pada `Map`:

```java
Map<String, String> countrys = new HashMap<String, String>();
countrys.put("id", "Indonesia");
countrys.put("vn", "Vietnam");
countrys.put("th", "Thailand");
countrys.put("ph", "Philippines");

// menggunakan forEach default method
countrys.forEach(new BiConsumer<String, String>() {
	@Override
	public void accept(String k, String v) {
		System.out.println("Key: " + k + ", value: " + v);				
	}
});

// menggunakan forEach default method dengan lambda
countrys.forEach((k, v) -> System.out.println("Key: " + k + ", value: " + v));
```