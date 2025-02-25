---
sidebar_position: 14
title: 'Informasi Test'
---

Walaupun mungkin jarang kita gunakan, tapi kita juga bisa mendapatkan informasi test yang sedang berjalan menggunakan interface `TestInfo`. Kita bisa menambahkan `TestInfo` sebagai parameter di function unit test.

Contoh:

```java
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Tags;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;

@DisplayName("Information Test")
public class DemoInformationTest {
	
	@Test
	@DisplayName("this my test")
	@Tags({
		@Tag("tag1"),
		@Tag("tag2")
	})
	void myTest(TestInfo info) {
		System.out.println(info.getDisplayName());
		System.out.println(info.getTags());
		System.out.println(info.getTestClass().orElse(null));
		System.out.println(info.getTestMethod().orElse(null));
	}

}
```

Output pada console:

```
this my test
[tag1, tag2]
class com.timposulabs.belajar.DemoInformationTest
void com.timposulabs.belajar.DemoInformationTest.myTest(org.junit.jupiter.api.TestInfo)
```