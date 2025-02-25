---
sidebar_position: 5
title: 'Method Reference'
---

Method Reference berfungsi untuk mempersingkat gaya penulisan yang berasal dari isi lambda yang sudah ada.  Method reference hanya mengakses method lain atau mengakses method yang ada di parameter method lambda-nya. Jadi singkatnya method reference menyederhanakan gaya lambda yang sudah ada menjadi lebih sederhana.

Method reference digunakan apabila kita hanya butuh pengembalian value saja atau tidak perlu melakukan kondisi untuk pengembalian value.

Perhatikan contoh ekspresi lambda di bawah ini:

```java
Predicate<String> predicate = (s) -> s.isBlank();
```

Dengan menggunakan method ekspression kode lambda di atas dapat disederhanakan dengan method reference menggunakan karakter `::` contohnya di bawah ini:

```java
Predicate<String> predicate = String::isBlank;
```

## Menggunakan Method Reference Static

Disini kita akan mencoba menggunakan object lain sebagai type data dalam method reference pada ekspresi lambda. Disini saya membuat sebuah class String utils sederhana yang akan melakukan pengecekan apakah karakter String lowercase atau tidak dengan menggunakan static method `isLowerCase`, jika semua karakter string lowercase maka akan mengembalikan true jika ada salah satu yang tidak lowercase maka akan mengembalikan false.

```java
class StringUtils {
    static boolean isLowerCase(String value) {
        for (var c : value.toCharArray()) {
            if (!Character.isLowerCase(c)) return false;
        }
        return true;
    }
}
```

Kita dapat menggunakan class `StringUtils` di atas dengan menggunakan lambda ekspresi seperti contoh di bawah ini:

```java
Predicate<String> predicate1 = (s) -> StringUtils.isLowerCase(s);
```

Jika menggunakan method reference maka dapat ditulis seperti di bawah ini:

```java
Predicate<String> predicate1 = StringUtils::isLowerCase;
```

:::info
📝 __Catatan__: Pada method reference, seperti contoh di atas kita tidak perlu memasukan lagi parameter pada method `isLowerCase`, karena tipe data yang digunakan sudah sama dengan ekspresi `(s)` dengan `isLowerCase(s)`, sehingga tidak perlu didefinisikan lagi pada method reference. Tipe data harus sama antara `(s)` dan dan yang berada pada method rerence `isLowerCase(s)`.
:::

Dengan menggunakan method reference maka kode ekspresi lambda menjadi lebih efisien 👌.

## Menggunakan Method Reference Non Static

Pada method reference non static, kita dapat menggunakan keyword `this` jika method reference berada pada object yang sama, atau membuat object baru jika kita memanggil object yang lain.

### 1️⃣ Mengakses method reference menggunakan `this` untuk object yang sama

Misalnya terdapat method sederhana yang berada pada object yang sama, dengan fungsi method yang akan mengecek apakah karakter String adalah Uppercase:

```java
boolean isUpperCase(String value) {
    for (var c : value.toCharArray()) {
        if (!Character.isUpperCase(c)) return false;
    }
    return true;
}
```

Jika menggunakan method reference maka dapat ditulis seperti di bawah ini:

```java
// Predicate<String> predicate = (s) -> MethodReferenceApp.this.isUpperCase(s); // tanpa method reference
Predicate<String> predicate = this::isUpperCase;
```

Berikut contoh full code mengakses method reference jika berada pada object yang sama.

```java
class MethodReferenceApp {

    void toDo() {
        // Method Reference mengakses dalam object yang sama
        // Predicate<String> predicate = (s) -> MethodReferenceApp.this.isUpperCase(s);
        Predicate<String> predicate = this::isUpperCase;

        System.out.println(predicate.test("ucup"));
        System.out.println(predicate.test("UCUP"));
    }   

    boolean isUpperCase(String value) {
        for (var c : value.toCharArray()) {
            if (!Character.isUpperCase(c)) return false;
        }
        return true;
    }
}
```

### 2️⃣ Mengakses method reference untuk object

Pada contoh sebelumnya kita menggunakan `this` untuk mengakses method reference dalam object yang sama, nah bagaimana jika object berasal dari object lain, caranya cukup mendefinisikan object tersebut lebih dahulu:

```java
MethodReferenceApp app = new MethodReferenceApp(); // membuat object terlebih dahulu

// Predicate<String> predicate2 = (s) -> app.isUpperCase(s);
Predicate<String> predicate2 = app::isUpperCase;
```

## Method Reference di Parameter

Contoh lain dalam menggunakan method reference, jika kita hanya memanggil method yang ada di parameternya.

Contoh:

```java
Function<String, String> toUpper = (String s) -> s.toUpperCase();
```

Atau lebih sederhananya:

```java
Function<String, String> toUpper = (s) -> s.toUpperCase();
```

Pada ekspresi lambda di atas dapat disederhanakan lagi dengan menggunakan method reference, karena pada parameter `String s` yang mana `s` adalah bertype data `String` yang memiliki method `toUpperCase()`, yang dimana parameternya `String` sama dengan `s`. Sehingga ekspresi lambda jika menggunakan method reference tidak perlu lagi menggunakan `s`:

```java
Function<String, String> toUpper = String::toUpperCase;
```

## Full Code 

Berikut contoh lengkap full code method reference:

```java
import java.util.function.Function;
import java.util.function.Predicate;

public class DemoLambdaMethodReference {
    public static void main(String[] args) {

        // Method reference untuk mempersingkat gaya penulisan yang berasal dari isi
        // lambda yang hanya mengakses method lain atau mengakses method yang ada di parameter
        // method lambda-nya. Jadi singkatnya method reference menyederhanakan gaya lambda yang sudah ada
    	// menjadi lebih sederhana.

        // Method reference digunakan apabila kita hanya butuh pengembalian value saja atau
        // tidak perlu melakukan kondisi untuk pengembalian value.
        //
        // Predicate<String> predicate = (s) -> s.isBlank();
        Predicate<String> predicate = String::isBlank;

        System.out.println(predicate.test("Budi"));

        // 1. Method reference method static
        // Predicate<String> predicate1 = (s) -> StringUtils.isLowerCase(s);
        Predicate<String> predicate1 = StringUtils::isLowerCase;

        System.out.println(predicate1.test("ucup"));
        System.out.println(predicate1.test("UCUP"));

        // 2. Method reference dalam object yang sama.
        new MethodReferenceApp().toDo();
        
        // 3. Method reference dengan object
        
        MethodReferenceApp app = new MethodReferenceApp(); // membuat object terlebih dahulu
        // Predicate<String> predicate2 = (s) -> app.isUpperCase(s);
        Predicate<String> predicate2 = app::isUpperCase;
        
        System.out.println(predicate2.test("ucup"));
        System.out.println(predicate2.test("UCUP"));
        
        // 4. Method reference di parameter.
        // Function<String, String> toUpper = (String s) -> s.toUpperCase(); // contoh method reference di parameter (String s)
        Function<String, String> toUpper = String::toUpperCase;
        
        System.out.println(toUpper.apply("yudi"));
    }
}

class StringUtils {
    static boolean isLowerCase(String value) {
        for (var c : value.toCharArray()) {
            if (!Character.isLowerCase(c)) return false;
        }
        return true;
    }
}

class MethodReferenceApp {

    void toDo() {
        // Method Reference mengakses dalam object yang sama
        // Predicate<String> predicate = (s) -> MethodReferenceApp.this.isUpperCase(s);
         Predicate<String> predicate = this::isUpperCase;

        System.out.println(predicate.test("ucup"));
        System.out.println(predicate.test("UCUP"));
    }

    boolean isUpperCase(String value) {
        for (var c : value.toCharArray()) {
            if (!Character.isUpperCase(c)) return false;
        }
        return true;
    }
}
```
