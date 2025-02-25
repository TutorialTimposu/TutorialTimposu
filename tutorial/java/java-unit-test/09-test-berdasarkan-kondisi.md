---
sidebar_position: 9
title: 'Test Berdasarkan Kondisi'
---

Sebenarnya kita bisa menggunakan `Assumptions` untuk menjalankan unit test berdasarkan kondisi tertentu. Namun JUnit menyediakan fitur yang lebih mudah untuk pengecekan beberapa kondisi, seperti kondisi sistem operasi, versi java, system property atau environment variable
Ini lebih mudah  dibandingkan menggunakan `Assumptions`.

## Kondisi berdasarkan Sistem Operasi

Untuk kondisi sistem operasi, kita bisa menggunakan beberapa annotation `@EnabledOnOs` digunakan untuk penanda bahwa unit test boleh berjalan di sistem operasi yang ditentukan.`@DisabledOnOs` digunakan untuk penanda bahwa unit test tidak boleh berjalan di sistem operasi yang ditentukan.

```java
@Test
@EnabledOnOs({OS.WINDOWS})
public void testOnlyRunOnWindows() {
    
}

@Test
@DisabledOnOs({OS.WINDOWS})
public void testDisableRunOnWindows() {
    
}
```

## Kondisi berdasarkan Versi Java

Untuk kondisi versi Java yang kita gunakan, kita bisa  menggunakan beberapa annotation `@EnabledOnJre` digunakan untuk penanda bahwa unit test boleh berjalan di Java versi tertentu.
`@DisabledOnJre` digunakan untuk penanda bahwa unit test tidak boleh berjalan di Java versi tertentu. `@EnabledForJreRange` digunakan untuk penanda bahwa unit test boleh berjalan di range Java versi tertentu. `@DisabledForJreRange` digunakan untuk penanda bahwa unit test tidak boleh berjalan di range Java versi tertentu.

```java
@Test
@EnabledOnJre({JRE.JAVA_17})
public void testOnlyRunJava17() {
    
}

@Test
@DisabledOnJre({JRE.JAVA_17})
public void testDisableRunJava17() {
    
}

@Test
@EnabledForJreRange(min = JRE.JAVA_17, max = JRE.JAVA_21)
public void testRunRangeJava17To21() {
    
}

@Test
@DisabledForJreRange(min = JRE.JAVA_17, max = JRE.JAVA_21)
public void testDisableRangeJava17To21() {
    
}
```

## Kondisi berdasarkan System Property

Untuk kondisi nilai dari system property, kita bisa menggunakan beberapa annotation `@EnabledIfSystemProperty` untuk penanda bahwa unit test boleh berjalan jika system property sesuai dengan yang ditentukan.`@DisabledIfSystemProperty` untuk penanda bahwa unit test tidak boleh berjalan jika system property sesuai dengan yang ditentukan. Jika kondisinya lebih dari satu, kita bisa menggunakan `@EnabledIfSystemProperties` dan `@DisabledIfSystemProperties`.

```java
// check system properties
@Test
public void testSystemProperties() {
    Properties properties = System.getProperties();
    properties.forEach((key, value) -> System.out.println(key + " : " + value));
}

@Test
@EnabledIfSystemProperties({
    @EnabledIfSystemProperty(named = "java.vm.vendor", matches = "Red Hat, Inc.")
})
void testEnableVendorRedhat() {
    
}

@Test
@DisabledIfSystemProperties({
    @DisabledIfSystemProperty(named = "java.vm.vendor", matches = "Red Hat, Inc.")
})
void testDisableVendorRedhat() {
    
}
```

Dengan menggunakan `testSystemProperties()`, akan mengeksekusi test untuk melakukan printout info terkait system pada komputer yang digunakan. Sedangkan pada parameter `EnabledIfSystemProperties` dan `DisabledIfSystemProperties` akan melakukan pengujian testing diuji jika parameternya cocok, jika tidak cocok akan di-skip.

:::info
Pada contoh kasus ini saya menggunakan sistem operasi GNU/Linux Fedora dan Java versi 21 dari default distribusi Fedora. Jadi hasil kemungkinan berbeda dimasing-masing sistem yang digunakan.
:::

```
java.specification.version : 21
sun.jnu.encoding : UTF-8
java.class.path : /home/ucup/Workspace/eclipse-java/belajar-java-unit-test/target/test-classes:/home/ucup/Workspace/eclipse-java/belajar-java-unit-test/target/classes:/home/ucup/.m2/repository/org/junit/jupiter/junit-jupiter-api/5.11.0/junit-jupiter-api-5.11.0.jar:/home/ucup/.m2/repository/org/opentest4j/opentest4j/1.3.0/opentest4j-1.3.0.jar:/home/ucup/.m2/repository/org/junit/platform/junit-platform-commons/1.11.0/junit-platform-commons-1.11.0.jar:/home/ucup/.m2/repository/org/apiguardian/apiguardian-api/1.1.2/apiguardian-api-1.1.2.jar:/home/ucup/.m2/repository/org/junit/jupiter/junit-jupiter-params/5.11.0/junit-jupiter-params-5.11.0.jar:/home/ucup/.m2/repository/org/junit/platform/junit-platform-launcher/1.11.0/junit-platform-launcher-1.11.0.jar:/home/ucup/.m2/repository/org/junit/platform/junit-platform-engine/1.11.0/junit-platform-engine-1.11.0.jar:/home/ucup/.m2/repository/org/junit/jupiter/junit-jupiter-engine/5.11.0/junit-jupiter-engine-5.11.0.jar:/home/ucup/App/eclipse/eclipse-java/eclipse/configuration/org.eclipse.osgi/766/0/.cp:/home/ucup/App/eclipse/eclipse-java/eclipse/configuration/org.eclipse.osgi/764/0/.cp
java.vm.vendor : Red Hat, Inc.
sun.arch.data.model : 64
java.vendor.url : https://www.redhat.com/
java.vm.specification.version : 21
os.name : Linux
sun.java.launcher : SUN_STANDARD
user.country : US
sun.boot.library.path : /usr/lib/jvm/java-21-openjdk/lib
sun.java.command : org.eclipse.jdt.internal.junit.runner.RemoteTestRunner -version 3 -port 40697 -testLoaderClass org.eclipse.jdt.internal.junit5.runner.JUnit5TestLoader -loaderpluginname org.eclipse.jdt.junit5.runtime -classNames com.timposulabs.DemoConditionTest
jdk.debug : release
sun.cpu.endian : little
user.home : /home/ucup
user.language : en
java.specification.vendor : Oracle Corporation
java.version.date : 2025-01-21
java.home : /usr/lib/jvm/java-21-openjdk
file.separator : /
java.vm.compressedOopsMode : Zero based
line.separator : 

java.vm.specification.vendor : Oracle Corporation
java.specification.name : Java Platform API Specification
sun.management.compiler : HotSpot 64-Bit Tiered Compilers
java.runtime.version : 21.0.6+7
user.name : ucup
stdout.encoding : UTF-8
path.separator : :
os.version : 6.12.15-200.fc41.x86_64
java.runtime.name : OpenJDK Runtime Environment
file.encoding : UTF-8
java.vm.name : OpenJDK 64-Bit Server VM
java.vendor.version : (Red_Hat-21.0.6.0.7-1)
java.vendor.url.bug : https://bugzilla.redhat.com/enter_bug.cgi?product=Fedora&component=java-21-openjdk&version=40
java.io.tmpdir : /tmp
java.version : 21.0.6
user.dir : /home/ucup/Workspace/eclipse-java/belajar-java-unit-test
os.arch : amd64
java.vm.specification.name : Java Virtual Machine Specification
native.encoding : UTF-8
java.library.path : /usr/java/packages/lib:/usr/lib64:/lib64:/lib:/usr/lib
java.vm.info : mixed mode, sharing
stderr.encoding : UTF-8
java.vendor : Red Hat, Inc.
java.vm.version : 21.0.6+7
sun.io.unicode.encoding : UnicodeLittle
java.class.version : 65.0
```

## Kondisi berdasarkan Environment Variable

Untuk kondisi nilai dari environment variable, kita bisa menggunakan beberapa annotation
`@EnabledIfEnvironmentVariable` untuk penanda bahwa unit test boleh berjalan jika environment variable sesuai dengan yang ditentukan. `@DisabledIfEnvironmentVariable` untuk penanda bahwa unit test tidak boleh berjalan jika environment variable sesuai dengan yang ditentukan. Jika kondisinya lebih dari satu, kita bisa menggunakan `@EnabledIfEnvironmentVariables` dan `@DisabledIfEnvironmentVariables`.

```java
@Test
@EnabledIfEnvironmentVariables({
    @EnabledIfEnvironmentVariable(named = "PROFILES", matches = "DEV")
})
void testEnableOnEnvProfileDev() {
    
}

@Test
@DisabledIfEnvironmentVariables({
    @DisabledIfEnvironmentVariable(named = "PROFILES", matches = "DEV")
})
void testDisabledOnEnvProfileDev() {
    
}
```