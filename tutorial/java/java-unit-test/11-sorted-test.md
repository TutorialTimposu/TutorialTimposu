---
sidebar_position: 11
title: 'Sorted Unit Test'
---

## Urutan Eksekusi Test

Secara default, urutan eksekusi unit test tidak ditentukan, jadi jangan berharap  jika sebuah method berada diatas method lainnya, maka akan dijalankan lebih dulu. Hal ini karena memang sebaiknya method unit test itu harus independen, tidak saling ketergantungan. Secara default pun, object class unit test akan selalu dibuat ulang tiap method, jadi jangan berharap kita bisa menyimpan data di variable untuk digunakan di unit test method selanjutnya.

## Mengubah Urutan Ekseskusi Test

JUnit mendukung perubahan urutan eksekusi test jika kita mau menggunakan annotation `@TestMethodOrder`, ada beberapa cara yang bisa kita lakukan. 

* `DisplayName`, artinya urutan eksekusi unit test akan diurutkan berdasarkan alphanumeric
* `Random`, artinya urutan urutan eksekusi unit test akan dieksekusi secara random.
* `OrderAnnotation`, artinya urutan eksekusi  unit  test akan mengikuti annotation `@Order` yang ada di tiap method unit test.

### Menggunakan DisplayName

Unit test akan diurutkan berdasarkan alphanumeric dari nama method test.

```java
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

@TestMethodOrder(MethodOrderer.DisplayName.class)
public class DemoOrderedTest {

	@Test
	void testC() {
		
	}
	
	@Test
	void testA() {
	
	}
	
	@Test
	void testB() {
	
	}
}
```

Hasil test:

![Display Name](/img/java/junit-order1.png)

### Menggunakan Random

Unit test akan diurutkan secara random.

```java
@TestMethodOrder(MethodOrderer.Random.class)
public class DemoOrderedTest {

        @Test
        void testA() {

        }

        @Test
        void testB() {

        }

        @Test
        void testC() {
            
        }
}
```

### Menggunakan OrderAnnotation

Unit test akan diurutkan secara order berdasarkan annotation `@Order`.

```java
@TestMethodOrder(MethodOrderer.OrderAnnotation.class) // berdasarkan dari annotation @Order
public class DemoOrderedTest {

	@Test
	@Order(value = 3)
	void testC() {
		
	}
	
	@Test
	@Order(value = 1)
	void testA() {
	
	}
	
	@Test
	@Order(value = 2)
	void testB() {
	
	}	
}
```

Hasil test:

![Display Name](/img/java/junit-order1.png)

## Membuat Ordered Sendiri

Jika kita ingin membuat cara mengurutkan urutan unit test function sendiri, kita bisa dengan mudah tinggal membuat class baru turunan dari `MethodOrderer` interface.