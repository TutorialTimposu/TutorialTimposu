---
sidebar_position: 4
title: 'Java List'
---

`List` adalah struktur data collection yang memiliki sifat sebagai berikut: 
 
 * Elemen  di `List` bisa duplikat, artinya bisa memasukkan data yang sama pada elemennya.
 * Data `List` berurut sesuai dengan posisi kita memasukkan data.
 * `List` memiliki index, sehingga kita bisa menggunakan nomor index untuk mendapatkan element di list.
 
 Di Java ada beberapa implementasi `List`, dan kita bisa memilih sesuai dengan kebutuhan kita.
 
 ## ArrayList

 * `ArrayList` adalah implementasi dari `List` seperti pada array.
 * Element pada `ArrayList` diindex seperti array. 
 * Default kapasitas array di `ArrayList` adalah 10, namun ketika kita memasukkan data dan array sudah penuh, maka secara otomatis `ArrayList` akan membuat array baru dengan kapasitas baru dengan ukuran: kapasitas lama + data baru.

## LinkedList

`LinkedList` adalah implementasi `List` dengan struktur data Double Linked List, data yang dimasukan akan berurut sesuai waktu memasukan data. `LinkedList` menampung datanya berdasarkan node per node. 

## ArrayList vs LinkedList

| Operation | ArrayList | LinkedList |
| --- |---|---|
| add | Cepat kalau indexnya belum penuh | cepat |
| set | cepat karena berdasar index | lambat |
| get | cepat | lambat |
| remove | lambat harus menggeser index | cepat |


### Contoh ArrayList

```java
import java.util.ArrayList;
import java.util.List;

public class DemoList {

	public static void main(String[] args) {
		List<String> names = new ArrayList<>(); // bisa dimasukan default kapasitas contoh ArrayList<>(100)
		names.add("Tirta");
		names.add("Agus");
		names.add("Fahmi");
		
		System.out.println("Data List:");
		printOut(names);
		
		// ubah elemen
		names.set(1, "Wayan");
		
		System.out.println(names.get(1));
		System.out.println("Setelah mengubah data:");
		
		printOut(names);
		
		// hapus elemen
		names.remove(1);
		
		System.out.println("Setelah menghapus data:");
		printOut(names);		
	}
	
	static void printOut(List<String> names) {
		for(var name: names) {
			System.out.println(name);			
		}
	}
}
```

Output:

```
Data List:
Tirta
Agus
Fahmi
Wayan
Setelah mengubah data:
Tirta
Wayan
Fahmi
Setelah menghapus data:
Tirta
Fahmi
```