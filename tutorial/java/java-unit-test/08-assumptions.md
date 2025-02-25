---
sidebar_position: 8
title: 'Assumptions'
---

Sebelumnya kita sudah mengetahui jika ingin membatalkan test, kita bisa menggunakan exception `TestAbortException`. Namun sebenarnya ada cara yang lebih mudah, yaitu dengan menggunakan `Assumptions`. Penggunaan `Assumptions` mirip seperti `Assertions`, jika nilainya tidak sama, maka function Assumptions akan thrown `TestAbortException`, sehingga secara otomatis akan membatalkan unit test yang sedang berjalan.

Sebelumnya kita perlu import class `Assumptions`, untuk menggunakan method assumption.

```java
import static org.junit.jupiter.api.Assumptions.*;
```

Berikut method static yang ada dalam class `Assumptions`:

![Assumptions](/img/java/assumptions.png)

:::info
Dokumentasi Assumptions: https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assumptions.html
:::

Jika menggunakan cara sebelumnya, yang menggunakan `TestAbortedException` seperti di bawah ini:

```java
@Test
public void testAborted() {
    var profile = System.getenv("PROFILES");
    if (!"DEV".equals(profile)) {
        throw new TestAbortedException("Test dibatalkan karena profiles bukan DEV");
    }    		
}
```

Maka dengan menggunakan `Assumptions`, misalnya menggunakan `assumeTrue()` yang akan melakukan pengecekan test berhasil jika dalam argumennya sesuai.

```java
@Test
public void testAssumptions() {
    assumeTrue("DEV".equals(System.getenv("PROFILES")));
}
```