---
sidebar_position: 4
title: 'Mengubah Nama Test'
---

## Menggunakan DisplayName

```java
@DisplayName("Test untuk pengurangan sukses")
@Test
public void testDivideSuccess() {
	var result = calculator.divide(6, 2);
	assertEquals(3, result);
}
```

## Menggunakan DisplayNameGenerator

* Membuat class DisplayNameGenerator

```java
import java.lang.reflect.Method;

public class DemoDisplayNameGenerator implements org.junit.jupiter.api.DisplayNameGenerator {

	@Override
	public String generateDisplayNameForClass(Class<?> testClass) {
		return "Test: " + testClass.getSimpleName();
	}

	@Override
	public String generateDisplayNameForNestedClass(Class<?> nestedClass) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String generateDisplayNameForMethod(Class<?> testClass, Method testMethod) {
		return "Test: " + testClass.getSimpleName() + "." + testMethod.getName();
	}

}
```

* Menggunakan DisplayNameGenerator

```java
@DisplayNameGeneration(DemoDisplayNameGenerator.class)
public class AppTest { 

}
```