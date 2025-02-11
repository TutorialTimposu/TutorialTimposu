---
sidebar_position: 5
title: 'Immutable List'
---

Secarah default `List` pada Java baik itu `ArrayList` atau `LinkedList` bersifat mutable atau dapat diubah, tetapi Java mendukung pembuatan Immutable List. Pendefinisian Immutable List dalam Java berarti data elemennya list tidak dapat dirubah lagi atau bersifat final. Yang dimaksud data list yang tidak dapat lagi dirubah bukan reference object elemennya. Contoh kita mempunyai `List` Immutable yang memiliki elemen data Country, tetapi field data di dalamnya masih bisa dirubah, tapi elemen dari immutable List tidak bisa dirubah lagi.

Immutable List berguna dimana kondisi kita tidak ingin agar data elemen dalam List tidak dapat diubah lagi. Karena terkadang List yang bersifat mutable, dapat menyebabkan kesalahan pada aplikasi.

Contoh List Mutable:

```java
import java.util.ArrayList;
import java.util.List;

public class DemoImmutableList {
	
	static class Country{
		
		private String country;
		
		private List<String> cityOfCountry = new ArrayList<String>();
		
		public Country(String country) {
			this.country = country;
		}

		public List<String> getCityOfCountry() {
			return cityOfCountry;
		}

		public void addCityOfCountry(String city) {
			this.cityOfCountry.add(city);
		}

		public String getCountry() {
			return country;
		}				
	}
	
	public static void main(String[] args) {
		
		Country indonesia = new Country("Indonesia");
		indonesia.addCityOfCountry("Banjarmasin");		
		indonesia.addCityOfCountry("Ternate");		
		indonesia.addCityOfCountry("Padang");		
		
		// mengubah data cityOfCountry yang idealnya tidak boleh dirubah disini
		changeCity(indonesia.getCityOfCountry());
		
		System.out.println("Country: " + indonesia.getCountry());
		System.out.println("City:  ");
		
		for (var city : indonesia.getCityOfCountry()) {
			System.out.println(city);
		}
	}
	
	// method ini akan menambahkan elemen baru pada List cityOfCountry (mutable)
	// yang idealnya list pada cityOfCountry tidak boleh diubah disini 
	private static void changeCity(List<String> cities) {
		cities.add("Kampung Rambutan"); // Bukan city
	}

}
```

Sekilas tidak ada yang salah, tetapi terdapat kesalahan penambahan data elemen `Kampung Rambutan` pada method `changeCity(List<String> cities)` yang idealnya tidak terjadi. Karena sebaiknya cities tidak dapat di tambahkan di method tersebut.
Outpunya program di atas sebagai berikut:

```
Country: Indonesia
City:  
Banjarmasin
Ternate
Padang
Kampung Rambutan
```

Agar List yang dibuat tidak bisa diubah oleh tempat lain, kita menambahkan List agar immuable sehingga tidak dapat diubah elemenya dengan `Collections.unmodifiableList()`.

Contoh:

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DemoImmutableList {
	
	static class Country{
		
		private String country;
		
		private List<String> cityOfCountry = new ArrayList<String>();
		
		public Country(String country) {
			this.country = country;
		}

		public List<String> getCityOfCountry() {
//			return cityOfCountry;
			return Collections.unmodifiableList(cityOfCountry); // membuat data List menjadi immutable
		}

		public void addCityOfCountry(String city) {
			this.cityOfCountry.add(city);
		}

		public String getCountry() {
			return country;
		}				
	}
	
	public static void main(String[] args) {
		
		Country indonesia = new Country("Indonesia");
		indonesia.addCityOfCountry("Banjarmasin");		
		indonesia.addCityOfCountry("Ternate");		
		indonesia.addCityOfCountry("Padang");		
		
		// method ini akan menimbulkan error karena kita sudah membuat List menjadi immutable
		changeCity(indonesia.getCityOfCountry());
		
		System.out.println("Country: " + indonesia.getCountry());
		System.out.println("City:  ");
		
		for (var city : indonesia.getCityOfCountry()) {
			System.out.println(city);
		}
	}
	
	// method ini akan menambahkan elemen baru pada List cityOfCountry (mutable)
	// yang idealnya list pada cityOfCountry tidak boleh diubah disini 
	private static void changeCity(List<String> cities) {
		cities.add("Kampung Rambutan"); // Bukan city
	}

}
```

Jika program dijalankan akan menimbulkan exception `UnsupportedOperationException` karena kita mencoba memasukan data elemen yang immutable:

```
Exception in thread "main" java.lang.UnsupportedOperationException
	at java.base/java.util.Collections$UnmodifiableCollection.add(Collections.java:1091)
	at com.timposulabs.belajar.collections.DemoImmutableList.changeCity(DemoImmutableList.java:54)
	at com.timposulabs.belajar.collections.DemoImmutableList.main(DemoImmutableList.java:41)
```

Selain itu ada beberapa method immutable List yang bisa digunakan

| Method | Keterangan |
|---|---|
| `Collections.unmodifiableList()` | Mengubah mutable List menjadi Immutable|
| `Collections.singletonList()`	|	Membuat immutable hanya berisi 1 elemen |
| `Collections.emptyList()` | Membuat immutable List Kosong |
| 	`List.of()` | Membuat immutable List dengan multi element |


Contoh:

```java
// Contoh Lain immutable

// hanya bisa memasukan 1 elemen
List<String> onlyOne = Collections.singletonList("Ucup");
// membuat List kosong
List<String> emptyElement = Collections.emptyList();

List<String> names = new ArrayList<String>();
names.add("Desi");
names.add("Yudi");
names.add("Junaedi");

// membuat List immutable
List<String> immutableNames = Collections.unmodifiableList(names);

// Membuat List immutable multi element
List<String> elementNames = List.of("Aprizal", "Arafah", "Andini", "Agy");

// ERROR: karena element immutable
elementNames.add("Brian");
```