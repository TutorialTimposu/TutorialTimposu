---
sidebar_position: 10
title: 'Tag'
---

Class atau method unit test bisa kita tambahkan tag (tanda) dengan menggunakan annotation `@Tag`. Dengan menambahkan tag ke dalam unit test, kita bisa fleksibel  ketika menjalan  unit test, bisa memilih tag mana yang mau di include atau di exclude. Jika kita menambahkan tag di class unit test, secara otomatis semua method unit test di dalam class tersebut akan memiliki tag tersebut. Jika kita ingin menambahkan beberapa tag di satu class atau method unit test, kita bisa menggunakan annotation `@Tags`.


## Menggunakan Tag

Berikut cara menggunakan tag pada unit test:

```java
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Tags;
import org.junit.jupiter.api.Test;

// jika hanya menggunakan 1 tag cukup gunakan @Tag, tapi pada contoh ini saya menggunakan @Tags
@Tags({
	@Tag("demo-tag")
})
public class DemoTagTest {

	@Test
	void test1() {
		
	}
	
	@Test
	void test2() {
		
	}
}
```

Pada contoh kode di atas, class test di atas ditandai dengan tag `demo-tag`.

## Menjalankan JUnit dengan Tag di Maven

Untuk menjalankan unit test berdasarkan tag yang diinginkan pada maven, dapat dilakukan dengan perintah di bawha ini:

```
mvn test -Dgroups=tag1,tag2
```

Pada contoh di atas nama tag yang kita buata adalah `demo-tag`, maka kita akan menggunakan perintah:

```
mvn test -Dgroups=demo-tag
```

## Menjalankan JUnit dengan Tag di IDE

Pada masing-masing IDE sudah terdapat fitur untuk menjalankan maven test berdasarkan tag. Silahkan merujuk ke dokumentasi masing-masing IDE bagaimana cara menggunakan tag pada unit test.

Contoh konfigurasi JUnit pada Eclipse dengan menggunakan tag.

![tag](/img/java/tag-junit.png)
