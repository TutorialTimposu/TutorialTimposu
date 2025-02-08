---
slug: install-springboot-linux-service
title: Install Aplikasi Spring Boot menjadi Service di Linux
authors: topekox
tags: [spring, springboot, linux]
---

Tutorial kali ini kita menginstal aplikasi Spring Boot sebagai `systemd` Service Linux, yang memungkinkan kita untuk start, stop dan melihat status aplikasi menggunakan perintah misalnya: service start, service stop dan service status.

<!--truncate-->

## Build aplikasi Spring Boot menjadi executable

Sebelum kita menginstal aplikasi Spring Boot sebagai service di Linux, kita dapat membuat agar aplikasi menjadi executable. Sebenarnya untuk menjalankan aplikasi Spring Boot kita bisa menggunakan perintah `java -jar` untuk menjalankan hasil build yang berformat `.jar`, tetapi pada sistem Linux disarankan agar aplikasi dapat dieksekusi sepenuhnya, untuk menghidari masalah kompatible aplikasi dengan beberapa tools pada sistem linux.

Untuk membuat `jar` sepenuhnya dapat "dieksekusi" dengan Maven, gunakan konfigurasi berikut ini pada bagian plugin di `pom.xml`:

```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <configuration>
        <executable>true</executable>
    </configuration>
</plugin>
```

Jika menggunakan Gradle konfigurasinya seperti ini:

```javascript
bootJar {
    launchScript()
}
```

Untuk perintah melakukan build sebagai berikut: 

```
mvn clean install -DskipTests
```

Jika sukses, hasil build ada di dalam direktori `target/` dengan format `.jar`, karena sudah dilakukan konfigurasi sebelumnya kita dapat langsung mengeksekusi file `jar` tersebut tanpa perintah `java -jar namafile.jar`, misalkan contoh nama aplikasi kita rename menjadi `myapp.jar`.

```
./myapp.jar
```

## Install Executable Jar sebagai Service Linux

Setelah mendapatkan file `jar`, kita dapat memindahkan file tersebut ke dalam direktori khusus contoh nama direktorinya `myapp` pada lokasi `/home/ucup` dan menambahkan 1 file konfigurasi dengan ekstensi `conf` dengan **nama file harus sama** dengan nama file `jar`, contoh `myapp.conf`. Jadi dalam direktori `myapp` terdapat 2 file dengan nama `myapp.jar` dan `myapp.conf`.

```
myapp
├── myapp.conf
├── myapp.jar
```

Keterangan:

* __myapp.jar__ : File `jar` adalah file aplikasi yang akan dieksekusi.
* __myapp.conf__ : File yang berisi konfigurasi ketika service dijalankan.


### File Jar

Berikan perimission agar file jar dapat di eksekusi.

```
chmod 500 /home/ucup/myapp.jar
```

### File Konfigurasi

File konfigurasi digunakan untuk memasukan parameter ketika service dijalankan. Contoh saya mengisi file konfigurasi `myapp.conf` sebagai berikut:

```
JAVA_OPTS="-Dspring.profiles.active=prod -Duser.timezone=Asia/Makassar -Xmx1G -Xms1G -Dserver.port=8000"
```

Keterangan:

* `-Dspring.profiles.active=prod` : Menjalankan  aplikasi dengan profiles `prod` (sesuaikan dengan profile yang anda gunakan).
*  `-Duser.timezone=Asia/Makassar` : Menjalankan aplikasi dengan time zone Asia/Makassar.
* `Xmx1G` : Memeberikan alokasi memori maksimum untuk mesin virtual Java (JVM) 1GB.
* `-Xms1G` : Memberikan alokasi initial memori awal 1GB.
* `-Dserver.port=8000` : Port yang digunakan ketika aplikasi dijalankan port 8000.

Berikan perimision pada file konfigurasi.

```
chown 400 /home/ucup/myapp.conf
```

:::info
Selengkapnya parameter konfigurasi: [https://docs.spring.io/spring-boot](https://docs.spring.io/spring-boot/docs/2.2.0.RC1/reference/html/deployment.html#deployment-script-customization-when-it-runs)
:::


### Membuat File Service

Buat file service di dalam direktori `/etc/systemd/system/` dengan nama bebas, misal contoh `myapp.service`

```
sudo nano /etc/systemd/system/myapp.service
```

Isi file tersebut:

```
[Unit]
Description=Aplikasi Guee
After=syslog.target

[Service]
User=ucup
ExecStart=/home/ucup/myapp/myapp.jar
SuccessExitStatus=143

[Install]
WantedBy=multi-user.target
```

Note:

* Pada bagian _User_ ganti isi parameternya sesuai dengan user yang memiliki akses menjalankan aplikasi.
* Pada bagian _ExecStart_ ganti dengan lokasi path file executable jar.

Menjalan service:

```
sudo systemctl start myapp.service
```

Menghentikan service:

```
sudo systemctl stop myapp.service
```

Melakukan restart service:

```
sudo systemctl restart myapp.service
```

Mengaktifkan service setiap startup:

```
sudo systemctl enable myapp.service
```

Kita dapat melakukan perintah `ps` untuk melihat task sistem yang sedang berjalan

```
ps aux | grep myapp
```

### Menambahkan Environment Variable

Untuk menambahkan environment variable yang dibutuhkan aplikasi spring boot, kita perlu menambahkan parameter `Environment` pada bagian `[Service]`, kita bisa lansung memasukan environment parameter kedalam file `/etc/systemd/system/myapp.service` atau memisahkan ke file lain. 

* Memasukan langsung ke dalam file `/etc/systemd/system/myapp.service`.

```
[Service]
User=ucup
Environment="DB_URL=jdbc:postgresql://localhost:5432/mydb"
Environment="API_KEY=dev-key-123"
ExecStart=/home/ucup/myapp/myapp.jar
SuccessExitStatus=143
```

* Mengimport environment dari file lain:

Buat file baru, dan masukan parameter environment. Contoh disini membuat file baru dengan nama `myapp-env` pada direktori `/etc/default`

```
sudo touch /etc/default/myapp-env
```

Lalu masukan variable environtment yang dibuat:

```
DB_URL=jdbc:postgresql://localhost:5432/mydb
API_KEY=dev-key-123
```

Tambahkan parameter `EnvironmentFile=-/etc/default/myapp-env`, lalu masukan pada file `/etc/systemd/system/myapp.service`:

```
[Service]
User=topekox
EnvironmentFile=-/etc/default/myapp-env
ExecStart=/home/ucup/myapp/myapp.jar
SuccessExitStatus=143
```

___Note___ : jangan lupa untuk menambahkan tanda `-` sebelum lokasi file environtment pada parameter `EnvironmentFile`.

### Melihat Log Service

Untuk melihat log service dapat menggunakan perintah:

```
journalctl -u myapp.service 
```

Kita dapat menyimpannya ke dalam file:

```
journalctl -u myapp.service >> log.txt
```

## Baca Juga

* https://docs.spring.io/spring-boot/docs/2.2.0.RC1/reference/html/deployment.html#deployment-install
* https://howtoprogram.xyz/2020/05/29/install-a-spring-boot-application-as-a-linux-service/
* https://serverfault.com/questions/413397/how-to-set-environment-variable-in-systemd-service
* https://fedoraproject.org/wiki/Packaging:Systemd
* https://medium.com/@manjiki/running-spring-boot-applications-as-system-services-on-linux-5ea5f148c39a
