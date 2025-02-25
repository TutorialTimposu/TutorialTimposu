---
sidebar_position: 5
title: 'Disabled Unit Test'
---

Kadang ada kalanya kita ingin menonaktifkan unit test, misal karena terjadi error di unit test tersebut, dan belum bisa kita perbaiki. Sebenarnya cara paling mudah untuk menonaktifkan unit test adalah dengan menghapus annotation `@Test`, namun jika kita lakukan itu, kita tidak bisa mendeteksi kalo ada unit test yang di disabled. Untuk menonaktifkan unit test secara benar, kita bisa menggunakan annotation `@Disabled`.

Contoh:

```java
@Disabled
@Test
public void testSkipped() {
	System.out.println("Test skip...");
}
```

Jika test dijalankan dengan maven, maka akan mengeluarkan output `Skipped`:

```
...
[INFO] Running com.timposulabs.AppTest
[WARNING] Tests run: 0, Failures: 0, Errors: 0, Skipped: 1, Time elapsed: 0.046 s -- in com.timposulabs.AppTest
[INFO] 
[INFO] Results:
[INFO] 
[WARNING] Tests run: 0, Failures: 0, Errors: 0, Skipped: 1
[INFO] 
[INFO] ------------------------------------------------------------------------
```