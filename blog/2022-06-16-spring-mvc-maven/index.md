---
slug: spring-mvc-maven-xml
title: Cara Membuat Project Spring MVC dengan Maven - XML Configuration (Bundle Tomcat)
authors: topekox
tags: [java, spring, spring mvc, eclipse]
---

Pada artikel sebelumnya ([Membuat Project Spring MVC di Eclipse](/blog/spring-mvc-eclipse)), saya sudah membagikan cara membuat project Spring MVC dengan menggunakan Eclipse IDE. Pada tutorial kali ini kita akan mencoba untuk membuat project Spring MVC menggunakan Maven.

<!--truncate-->

![https://unsplash.com/photos/VcpMPsf_Ex0](https://images.unsplash.com/photo-1518043610038-064362b44076?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)

Sebelumnya apa itu [Maven](https://maven.apache.org/)? jadi maven itu secara umum bisa digambarkan sebagai project manajemen, jadi nantinya project kita akan menggunakan standard dari maven, dan semua dependency/library yang dibutuhkan dalam project kita sudah dihandle oleh maven. Kalo di bahasa pemrograman lain, maven sepadan dengan npm di NodeJS atau composer di PHP.

Salah satu kelebihan maven adalah, project yang dibuat dengan maven dapat dijalankan di berbagai IDE atau Text Editor.

## Teknologi yang digunakan

* Apache Maven 3.8.5
* JDK 17
* Text Editor VS Code
* Apache Tomcat 9
* Springframework 5

:::tip
Cara Install Maven di sini: [https://maven.apache.org/install.html](https://maven.apache.org/install.html).
:::

## Konfigurasi Project

* Pastikan maven sudah terinstall di komputer teman-teman buka, terminal jalankan perintah di bawah ini untuk membuat project baru misalnya dengan nama `SpringMVCMaven`:

```bash
mvn archetype:generate -DgroupId=com.tutorialtimposu -DartifactId=SpringMVCMaven -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
```

* Buka Project baru dengan menggunakan editor pilihan teman-teman misal disini saya menggunakan VSCode.

Buka file `pom.xml` masukan dependency, dan ganti packaging-nya menjadi `war` karena kita akan membuat web java seperti di bawah ini:

```xml title=pom.xml
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.tutorialtimposu</groupId>
  <artifactId>SpringMVCMaven</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>war</packaging>

  <name>SpringMVCMaven</name>
  <url>http://www.tutorialtimposu.com</url>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
    <spring.version>5.3.21</spring.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-context</artifactId>
      <version>${spring.version}</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-webmvc</artifactId>
      <version>${spring.version}</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-web</artifactId>
      <version>${spring.version}</version>
    </dependency>
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>jstl</artifactId>
      <version>1.2</version>
    </dependency>
    <dependency>
      <groupId>javax.servlet.jsp.jstl</groupId>
      <artifactId>jstl-api</artifactId>
      <version>1.2</version>
    </dependency>

    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.11</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <pluginManagement>
      <!-- lock down plugins versions to avoid using Maven defaults (may be moved to parent pom) -->
      <plugins>
        <!-- clean lifecycle, see https://maven.apache.org/ref/current/maven-core/lifecycles.html#clean_Lifecycle -->
        <plugin>
          <artifactId>maven-clean-plugin</artifactId>
          <version>3.1.0</version>
        </plugin>
        <!-- default lifecycle, jar packaging: see https://maven.apache.org/ref/current/maven-core/default-bindings.html#Plugin_bindings_for_jar_packaging -->
        <plugin>
          <artifactId>maven-resources-plugin</artifactId>
          <version>3.0.2</version>
        </plugin>
        <plugin>
          <artifactId>maven-compiler-plugin</artifactId>
          <version>3.8.0</version>
        </plugin>
        <plugin>
          <artifactId>maven-surefire-plugin</artifactId>
          <version>2.22.1</version>
        </plugin>
        <plugin>
          <artifactId>maven-war-plugin</artifactId>
          <version>3.2.3</version>
        </plugin>
        <plugin>
          <artifactId>maven-install-plugin</artifactId>
          <version>2.5.2</version>
        </plugin>
        <plugin>
          <artifactId>maven-deploy-plugin</artifactId>
          <version>2.8.2</version>
        </plugin>
        <!-- site lifecycle, see https://maven.apache.org/ref/current/maven-core/lifecycles.html#site_Lifecycle -->
        <plugin>
          <artifactId>maven-site-plugin</artifactId>
          <version>3.7.1</version>
        </plugin>
        <plugin>
          <artifactId>maven-project-info-reports-plugin</artifactId>
          <version>3.0.0</version>
        </plugin>
      </plugins>
    </pluginManagement>
  </build>
</project>
```

* Buat struktur direktori web maven Spring MVC dengan membuat file `web.xml` dan file konfigurasi Spring MVC seperti gambar dibawah ini:

![struktur-direktory](1.png)

* Isi `web.xml`

```xml title=web.xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://xmlns.jcp.org/xml/ns/javaee"
    xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
    id="WebApp_ID" version="3.1">
    <display-name>DemoSpringMVCMaven</display-name>
    <!-- Spring MVC Configs -->

    <!-- Step 1: Configure Spring MVC Dispatcher Servlet -->
    <servlet>
        <servlet-name>dispatcher</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>/WEB-INF/spring-mvc-demo-servlet.xml</param-value>
        </init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>

    <!-- Step 2: Set up URL mapping for Spring MVC Dispatcher Servlet -->
    <servlet-mapping>
        <servlet-name>dispatcher</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
</web-app>
```

* Isi dari `/WEB-INF/spring-mvc-demo-servlet.xml`, dengan menempatkan semua file web jsp kita berada di direktori `/WEB-INF/view/`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:context="http://www.springframework.org/schema/context"
	xmlns:mvc="http://www.springframework.org/schema/mvc"
	xsi:schemaLocation="
		http://www.springframework.org/schema/beans
    	http://www.springframework.org/schema/beans/spring-beans.xsd
    	http://www.springframework.org/schema/context
    	http://www.springframework.org/schema/context/spring-context.xsd
    	http://www.springframework.org/schema/mvc
        http://www.springframework.org/schema/mvc/spring-mvc.xsd">

	<!-- Step 3: Add support for component scanning -->
	<context:component-scan
		base-package="com.tutorialtimposu" />

	<!-- Step 4: Add support for conversion, formatting and validation support -->
	<mvc:annotation-driven />

	<!-- Step 5: Define Spring MVC view resolver -->
	<bean
		class="org.springframework.web.servlet.view.InternalResourceViewResolver">
		<property name="prefix" value="/WEB-INF/view/" />
		<property name="suffix" value=".jsp" />
	</bean>
	
</beans>
```

* Install dependency dengan perintah

```
mvn install
```

## Buat Controller

* Buat class baru dengan nama `HelloController.java` di dalam package `com.tutorialtimposu.controller`, class ini akan meload file jsp dengan nama `hello.jsp`:

```java title=HelloController.java
package com.tutorialtimposu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {
    
    @GetMapping("/")
    public String sayHello(Model model) {
        model.addAttribute("name", "Ucup");
        return "hello";
    }
}
```

* Buat file `hello.jsp`:

```html title=hello.jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Demo Spring MVC</title>
</head>
<body>
    <h2>Hello ${name}</h2>
</body>
</html>
```

## Bundle Tomcat dengan Cargo

Permasalahnnya adalah kita belum mempunyai server yang bundle, berbeda kalau kita menggunakan IDE seperti Eclipse atau IntelijIDEA Ultimate, server sudah dibundle di dalam IDE nya. Solusinya adalah kita membundle plugin Cargo ke dalam maven `pom.xml`. Nantinya si Cargo akan mendownloadkan Tomcat untuk kita:

```xml title=pom.xml
...
<plugin>
  <groupId>org.codehaus.cargo</groupId>
  <artifactId>cargo-maven3-plugin</artifactId>
  <version>1.9.10</version>
  <configuration>
    <container>
      <containerId>tomcat9x</containerId>
      <zipUrlInstaller>
        <url>https://repo.maven.apache.org/maven2/org/apache/tomcat/tomcat/9.0.62/tomcat-9.0.62.zip</url>
      </zipUrlInstaller>
    </container>
  </configuration>
</plugin>
...
```

Selanjutnya jalankan perintah di bawah ini untuk menjalankan:

```bash
mvn clean package

mvn cargo:run
```

Setiap ada perubahan jalankan kedua perintah di atas.

```bash
...
[INFO] [talledLocalContainer] Jun 16, 2022 8:39:44 PM org.apache.coyote.AbstractProtocol start
[INFO] [talledLocalContainer] INFO: Starting ProtocolHandler ["http-nio-8080"]
[INFO] [talledLocalContainer] Jun 16, 2022 8:39:44 PM org.apache.catalina.startup.Catalina start
[INFO] [talledLocalContainer] INFO: Server startup in [5461] milliseconds
[INFO] [talledLocalContainer] Tomcat 9.x started on port [8080]
[INFO] Press Ctrl-C to stop the container...
```

![run](2.png)

:::info
[Source Code](https://github.com/TutorialTimposu/tutorial-spring-from-blog/tree/main/SpringMVCMaven)
:::
