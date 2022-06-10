---
slug: menggunakan-scheduled-spring-boot
title: Menggunakan Scheduled/Penjadwalan di Spring Boot
authors: topekox
tags: [spring, springboot]
---

Dalam satu kasus biasanya kita ingin menjalankan scheduled atau penjadwalan dalam aplikasi kita. Misalnya kita ingin dalam interval waktu tertentu. Contohnya seperti aplikasi SMS Gateway yang akan mengecek dalam interval waktu tertentu akan memeriksa SMS masuk atau SMS keluar.

<!--truncate-->

![Topekox](https://images.unsplash.com/photo-1435527173128-983b87201f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80)

Di Spring Boot, terdapat Annotation `@Scheduled` yang bisa digunakan untuk Scheduled. 

Contoh penggunaan annotation pada method yang ingin diberikan scheduled setiap 5 detik akan dieksekusi menggunakan `@Scheduled` di Spring Boot.

```java
@Scheduled(fixedDelay = 5000)
private void sendingProcess() {

    // TODO...

}
```

Tapi jangan lupa untuk mengaktifkannya dengan annotation `@EnableScheduling` di class main.

```java
@SpringBootApplication
@EnableScheduling // Enabled it
public class PaymentAppBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PaymentAppBackendApplication.class, args);
	}
}
```
