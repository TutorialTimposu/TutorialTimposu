---
sidebar_position: 2
title: 'Java Iterable'
---

Interface `Iterable` adalah interface yang merepresentasikan kumpulan objek/elemen yang dapat diulang/iterable, atau dengan kata lain `Iterable` dapat mengembalikan elemen-elemennya satu per satu. Class yang mengimplementasikan interface ini dapat mengulang/iterable elemen-elemennya. Interface `Iterable` memiliki turunan class `Collection`.

Contoh:

```java
import java.util.Iterator;
import java.util.List;

public class DemoIterable {

    public static void main(String[] args) {

        Iterable<String> names = List.of("Ucup", "Ade", "Recky");

        for (String name : names) {
            System.out.println(name);
        }

    }
}
```

Sebelum adanya iterable cara lama menggunakan method `iterator()`. Interface `Iterable` sendiri mempunyai kontrak method `Iterator<T> iterator();` yang bisa digunakan untuk melakukan iterasi.

```java
Iterable<String> names = List.of("Ucup", "Ade", "Recky");

/**
 * Cara lama menggunakan Iterator
 */
System.out.println("\nMENGGUNAKAN ITERATOR");

Iterator<String> iterator = names.iterator();

while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
```
