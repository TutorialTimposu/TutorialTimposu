---
sidebar_position: 7
title: 'Immutable Set'
---

Sama seperti `List`, secara default `Set` bersifat muttable. Immutable `Set` berguna dimana kondisi kita tidak ingin agar data elemen dalam `Set` tidak dapat diubah lagi. Karena terkadang `Set` yang bersifat mutable, dapat menyebabkan kesalahan pada aplikasi.

:::info
__Baca Selengkapnya Contohnya Pada__: [Immutable List](/java/java-collection/immutable-list)
:::

Beberapa method Immutable Collections yang bisa digunakan:

| Method | Keterangan |
|---|---|
| `Collections.unmodifiableList()` | Mengubah mutable Set menjadi Immutable|
| `Collections.singletonList()`	|	Membuat immutable hanya berisi 1 elemen |
| `Collections.emptyList()` | Membuat immutable Set Kosong |
| 	`Set.of()` | Membuat immutable Set dengan multi element |

Contoh:

```java
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class DemoImmutableSet {
	
	public static void main(String[] args) {
		
		Set<String> namesEmpty = Collections.emptySet(); // membuat element Set kosong
		Set<String> namesSingle = Collections.singleton("Ucup"); // hanya bisa memasukan 1 elemen
		
		Set<String> names = new HashSet<String>();
		names.add("Ucup");
		names.add("Ade");
		names.add("Gandi");
		
		Set<String> namesImmutable = Collections.unmodifiableSet(names); // membuat Set menjadi Immutable
		
		Set<String> namesElements = Set.of("Ucup", "Budi", "Angga");  
		
//		 namesSingle.add("Ojo");	// Error
//		 namesImmutable.remove("Ade"); // Error
//		namesElements.add("Recky"); // Error
	}

}
```