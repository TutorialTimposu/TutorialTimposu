---
sidebar_position: 2
title: 'Membuat Test'
---

## Membuat Project

Pada tutorial ini kita membuat project dengan menggunakan Maven.

```
mvn archetype:generate
maven-archetype-quickstart
```

Pada maven untuk versi 1.5 sudah menggunakan JU

```xml
...
<dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.junit</groupId>
        <artifactId>junit-bom</artifactId>
        <version>5.11.0</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>

  <dependencies>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter-api</artifactId>
      <scope>test</scope>
    </dependency>
    <!-- Optionally: parameterized tests support -->
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter-params</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>
  ...
  ```

Pada project maven untuk class test ditempatkan pada direktori `/src/test/java`.

## Membuat Test Pertama

1. Buat class Calculator

```java
public class Calculator {

	public Integer add(int x, int y) {
		return x + y;
	}
	
}
```

2. Membuat class Test

```java
import org.junit.jupiter.api.Test;

public class AppTest {
	
    private Calculator calculator = new Calculator();

    @Test
    public void testAddSuccessDemo() {
    	calculator.add(10, 4);
    }
}
```

3. Menjalankan Test

    * Menjalankan Test dengan Maven

        Menjalankan test di maven dapat menggunakan perintah `mvn test` atau melakukan clean project terlebih dahulu `mvn clean test`.

        ```
        mvn clean test
        ```

        Contoh Result jika sukses:

        ```
        ...
        [INFO] -------------------------------------------------------
        [INFO]  T E S T S
        [INFO] -------------------------------------------------------
        [INFO] Running com.timposulabs.AppTest
        [WARNING] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.046 s -- in com.timposulabs.AppTest
        [INFO] 
        [INFO] Results:
        [INFO] 
        [WARNING] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
        [INFO] 
        [INFO] ------------------------------------------------------------------------
        [INFO] BUILD SUCCESS
        [INFO] ------------------------------------------------------------------------
        [INFO] Total time:  1.631 s
        [INFO] Finished at: 2025-02-22T19:47:34+08:00
        ```
    
    * Menjalankan Test dengan IDE

        Masing-masing IDE biasanya sudah dilengkapi dengan Testing tools, jadi silahkan mencari referensi menggunakan testing dimasing-masing IDE yang digunakan.

