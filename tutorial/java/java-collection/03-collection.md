---
sidebar_position: 3
title: 'Java Interface Collection'
---

`Collection` merupakan parrent dari semua interface yang ada pada collections, dan merupakan turunan dari interface `Iterable`.

Perbedaan `Collection` dan `Iterable` adalah  data pada `Collection` dapat di modifikasi (bisa ditambah, ubah atau dihapus).

Contoh:

```java
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class DemoCollection {
    public static void main(String[] args) {
        Collection<String> names = new ArrayList<String>();
        names.add("Ucup");
        names.add("Recky");
        names.add("Restu");
        names.add("Ade");
        names.addAll(List.of("Vivin", "Nurul", "Rani"));

        for (var name : names) {
            System.out.println(name);
        }
        
        // Remove
        System.out.println("\nREMOVE");
        names.remove("Rani");
        names.remove("Recky");
        names.removeAll(List.of("Ucup", "Restu"));
        
        for (var name : names) {
        	System.out.println(name);
        }
        
        // Mengecek data collection menggunakan contains()
        System.out.println("\nCek data");
        System.out.println(names.contains("Vivin"));
        System.out.println(names.containsAll(List.of("Nurul", "Ade")));
        System.out.println(names.containsAll(List.of("Nurul", "Recky"))); // false -> data yang dimasukan harus lengkap
    }
}
```

Output:

```
Ucup
Recky
Restu
Ade
Vivin
Nurul
Rani

REMOVE
Ade
Vivin
Nurul

Cek data
true
true
false
```