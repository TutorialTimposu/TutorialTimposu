---
sidebar_position: 13
title: 'Test di dalam Test'
---

Saat membuat unit test, ada baiknya ukuran test class nya tidak terlalu besar, karena akan sulit di baca dan dimengerti. Jika test class sudah semakin besar, ada baiknya kita pecah menjadi beberapa test class, lalu kita grouping sesuai dengan jenis method test nya. JUnit mendukung pembuatan class test di dalam class test, jadi kita bisa memecah sebuah class test, tanpa harus membuat class di file berbeda, kita bisa cukup menggunakan inner class. Untuk memberi tahu bahwa inner class tersebut adalah test class, kita bisa menggunakan annotation `@Nested`.

Contoh penggunaan test di dalam test dengan menggunakan contoh `Queue`:

```java
import java.util.LinkedList;
import java.util.Queue;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

/**
 * Demo Queue: Test di dalam Test
 */

@DisplayName("A Queue...")
public class DemoQueueTestInTest {

	private Queue<String> queue;
	
	@Nested
	@DisplayName("When New...")
	public class WhenNew {
		
		@BeforeEach
		void setUp() {
			queue = new LinkedList<String>();
		}
		
		@Test
		@DisplayName("when offer/add element, size must 1")
		void addElement() {
			queue.offer("Ucup");
			Assertions.assertEquals(1, queue.size());
		}
		
		@Test
		@DisplayName("when offer/add 2 element, size must 2")
		void addMoreElement() {
			queue.offer("Ade");
			queue.offer("Recky");
			Assertions.assertEquals(2, queue.size());
		}
	}
	
}
```

Result:

![Test in Test](/img/java/test-in-test.png)