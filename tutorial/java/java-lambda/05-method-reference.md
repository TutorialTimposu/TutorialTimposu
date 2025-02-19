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

Contoh lain kita bisa menggunakan object lain sebagai type data dalam method reference pada ekspresi lambda. Disini saya membuat sebuah class String utils sederhana yang akan melakukan pengecekan apakah karakter String lowercase atau tidak, jika semua karakter string lowercase maka akan mengembalikan true jika ada salah satu yang tidak lowercase maka akan mengembalikan false.

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

Dengan menggunakan method reference maka kode ekspresi lambda menjadi lebih efisien.

Berikut contoh lengkap method reference:

```java
import java.util.function.Predicate;

public class DemoLambdaMethodReference {
    public static void main(String[] args) {

        // Method reference untuk mempersingkat gaya penulisan yang berasal dari isi
        // lambda yang hanya mengakses method lain atau mengakses method yang ada di parameter
        // method lambda-nya. Jadi singkatnya method reference menyerderhanakan gaya lambda yang sudah ada
    	// menjadi lebih sederhana.

        // Method reference digunakan apabila kita hanya butuh pengembalian value saja atau
        // tidak perlu melakukan kondisi untuk pengembalian value.
        //
        // Predicate<String> predicate = (s) -> s.isBlank();
        Predicate<String> predicate = String::isBlank;

        System.out.println(predicate.test("Budi"));

        // Contoh: mengakses type data lain
        // Predicate<String> predicate1 = (s) -> StringUtils.isLowerCase(s);
        Predicate<String> predicate1 = StringUtils::isLowerCase;

        System.out.println(predicate1.test("ucup"));
        System.out.println(predicate1.test("UCUP"));

        // Method reference object.
        new MethodReferenceApp().toDo();
        new MethodReferenceApp().toDo2();
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

    void toDo2() {
        // Method Reference mengakses dalam object reference
        MethodReferenceApp app = new MethodReferenceApp();

        // Predicate<String> predicate2 = (s) -> app.isUpperCase(s);
        Predicate<String> predicate2 = app::isUpperCase;

        System.out.println(predicate2.test("ucup"));
        System.out.println(predicate2.test("UCUP"));
    }

    boolean isUpperCase(String value) {
        for (var c : value.toCharArray()) {
            if (!Character.isUpperCase(c)) return false;
        }
        return true;
    }
}
```
