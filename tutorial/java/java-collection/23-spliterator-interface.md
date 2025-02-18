---
sidebar_position: 23
title: 'Spliterator Interface'
---

Spliterator adalah interface yang bisa digunakan untuk melakukan partisi data collection. Biasanya ini digunakan ketika kita akan memproses collection dalam jumlah besar, lalu agar lebih cepat di split menjadi beberapa dan diproses secara paralel agar lebih cepat. Penggunaan Spliterator biasanya erat kaitannya dengan Java Thread atau Java Concurrency, namun di  materi ini kita tidak akan membahas tentang itu, lebih fokus ke Spliterator

Contoh:

```java
import java.util.List;
import java.util.Spliterator;

public class DemoSpliteratorInterface {
	
	public static void main(String[] args) {
		List<String> names = List.of("Ade", "Recky", "Vivin", "Restu", "Dandy", "Komang");
		
		Spliterator<String> spliterator1 = names.spliterator();
		Spliterator<String> spliterator2 = spliterator1.trySplit();
		Spliterator<String> spliterator3 = spliterator2.trySplit();
		
		System.out.println(spliterator1.estimateSize());
		System.out.println(spliterator2.estimateSize());
		System.out.println(spliterator3.estimateSize());

		// iterasi dengan forEachRemaining
		System.out.println("Split 1");
		spliterator1.forEachRemaining(new Consumer<String>() {
			@Override
			public void accept(String value) {
				System.out.println(value);
			}
		});
		
		System.out.println("Split 2");
		spliterator2.forEachRemaining(new Consumer<String>() {
			@Override
			public void accept(String value) {
				System.out.println(value);
			}
		});	
	}
}
```

Output:

```
3
2
1
Split 1
Restu
Dandy
Komang
Split 2
Recky
Vivin
```

Spliterator cocok digunakan untuk memproses data collection yang memiliki elemen dengan jumlah yang besar. Misalnya sebuah collection yang memiliki data dengan jumlah 1 juta elemen data, dengan Spliterator kita dapat membaginya, misalnya  menjadi 10 split dengan masing-masing 100 ribu elemen data, kita dapat running/proses masing-masing 10 split tersebut secara paralel.

:::info
Spliterator sering digunakan pada Java Multi Thread
:::