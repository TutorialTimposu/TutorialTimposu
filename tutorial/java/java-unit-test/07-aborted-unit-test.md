---
sidebar_position: 7
title: 'Aborted Unit Test'
---

Kadang kita ingin membatalkan unit test ketika kondisi tertentu terjadi. Untuk membatalkan, kita bisa menggunakan exception `TestAbortedException`. Jika JUnit mendapatkan exception `TestAbortedException`, secara otomatis test tersebut akan dibatalkan.

Jika exception yang digunakan untuk membatalkan test bukan `TestAbortedException`, maka test akan di anggap error, jadi exception `TestAbortedException` dapat dianggap exception khusus untuk digunakan membatalkan test.

Contoh:

```java
@Test
public void testAborted() {
    var profile = System.getenv("PROFILES");
    if (!"DEV".equals(profile)) {
        throw new TestAbortedException("Test dibatalkan karena profiles bukan DEV");
    }    		
}
```