---
slug: spring-logging
title: Cara Mudah Membuat Logging di Spring Boot
authors: topekox
tags: [spring, springboot, logging]
---

Logging sangat berguna untuk memberikan informasi jalannya program kepada programmer, atau untuk menganalisa baik masih dalam proses debug developer maupun log ketika sudah dalam production. 

<!--truncate-->

![Topekox](https://images.unsplash.com/photo-1581090587512-8bfdd1119f94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)

Di Java ada banyak framework untuk logging, namun yang paling gampang menggunakan Sl4j yang sudah dibundle dalam library [Lombok](https://projectlombok.org/).

## Menggunakan Logging Slf4j

Secara default aplikasi spring boot bisa langsung menggunakan Slf4j, maka kita tinggal memasukan annotation `@Slf4j` ke dalam class kita, contoh:

```java
package com.topekox.demojunit;

import lombok.extern.slf4j.Slf4j;

// inject annotation Slf4j
@Slf4j
public class DemoUtilsTest {

}
```

Untuk menggunakannya tinggal di panggil `log`.

```java
log.info("Pesan Info");
log.warning("Pesan Warning");
log.error("Pesan Error");
```

## Konfigurasi Spring Boot

Kita juga bisa menambahkan konfigurasi tambahan, contoh kita ingin menyimpan log ke dalam file, update `application.properties` milik spring boot lalu tambahkan baris di bawah ini:

```properties
# Menyimpan print out log ke dalam file 'application.log' yang berada di direktori 'log'
logging.file.name=log/application.log
```


