---
sidebar_position: 17
title: 'Legacy Collection'
---

Collection sudah ada sejak Java versi 1, namun seiring waktu, Java Collection semakin berkembang. Sebenarnya ada beberapa legacy collection (collection jadul) yang belum kita bahas, namun jarang sekali digunakan sekarang ini:


## Vector

`Vector` class adalah implementasi dari interface `List`. Cara kerja `Vector` mirip dengan `ArrayList`, yang membedakan adalah semua method di Vector menggunakan kata kunci  synchronized yang artinya dia thread safe. Namun problemnya adalah, karena semua method menggunakan kata kunci synchronized, secara otomatis impact nya ke-performance yang menjadi lambat dibandingkan menggunakan `ArrayList`. Lalu bagaimana jika kita ingin membuat List yang bisa digunakan di proses paralel? Di versi Java baru, sudah disediakan yang lebih canggih untuk itu, oleh karena itu penggunakan Vector sudah jarang sekali ditemui sekarang.

Contoh `Vector`:

```java
// Vector
List<String> list = new Vector<String>();
list.add("Aco");
list.add("Dini");
list.add("Mike");

for (var name : list) {
	System.out.println(name);
}
```

## HashTable

`HashTable` adalah implementasi dari `Map` yang mirip dengan `HashMap`. Sama seperti `Vector`, semua method di `HashTable` memiliki kata kunci synchronized, sehingga performanya lebih lambat dibandingkan `HashMap`, dan karena di versi Java baru sudah ada juga `ConcurrentHashMap`, sehingga penggunaan `HashTable` sudah jarang sekali ditemui.

Contoh:

```java
// HashTable
Map<String, String> map = new Hashtable<String, String>();
map.put("ph", "Philiphina");
map.put("vn", "Vietnam");
map.put("my", "Malaysia");

for (var m : map.keySet()) {
	System.out.println(m);
}
```

## Stack

`Stack` adalah implementasi struktur data tumpukan LIFO (Last In First Out). Namun fitur yang lebih komplit dan konsisten sudah disediakan di `Deque`, jadi tidak ada alasan lagi menggunakan class `Stack`.

Contoh:
 
```java
// Stack
Stack<String> stack = new Stack<String>();
stack.push("Dandi");
stack.push("Sultan");
stack.push("Fahmi");

// Error: stack.pop() akan menimbulkan exception EmptyStackException jika stack 0
for (var value = stack.pop() ; value != null ; value = stack.pop()) {
	System.out.println(value); 
}
```