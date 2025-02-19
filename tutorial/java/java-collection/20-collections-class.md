---
sidebar_position: 20
title: 'Collections Class'
---

Collections adalah class yang berisikan utility static method untuk membantu kita menggunakan Java Collection. Di materi-materi sebelumnya kita sudah bahas beberapa, seperti membuat immutable collection misalnya. Namun sebenarnya masih ada banyak static method yang bisa kita gunakan di class Collections.

:::info
Baca dokumentasi lengkapnya untuk melihat daftar utility static method yang tersedia:

https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html
:::

## Beberapa static method Collections

 | Method | Keterangan |
|---|---|
|`void copy(listTo, listFrom)`|Copy semua data dari `listFrom` ke `listTo` |
|`int frequency(collection, object)`|Mengambil berapa banyak element yang sama dengan object|
|`max(collection)` dan `max(collection, comparable)`|Mengambil element paling tinggi di list|
|`min(collection)` dan `min(collection, comparable)`|Mengambil element paling kecil di list|
|`void reverse(list)`|Membalikkan seluruh element di list|
|`void shuffle(list)`|Mengacak posisi element di list|
|`void swap(list, from, to)`|Menukar posisi from ke to di list|
|… dan masih banyak| 
 
Contoh:

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DemoCollectionsUtility {

	public static void main(String[] args) {
		List<String> citys = new ArrayList<String>();
		citys.addAll(List.of("Surabaya", "Makassar", "Palu", "Kendari", "Ternate"));
		
		System.out.println(citys);
		
		// Reverse
		Collections.reverse(citys);
		System.out.println(citys);		
		
		// Shuffle
		Collections.shuffle(citys);
		System.out.println(citys);				
	}
}
```

Output:

```
[Surabaya, Makassar, Palu, Kendari, Ternate]
[Ternate, Kendari, Palu, Makassar, Surabaya]
[Palu, Kendari, Ternate, Makassar, Surabaya]
```

## Selengkapnya

Untuk dokumentasi lengkapnya silahkan kunjungi:

:link: https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html