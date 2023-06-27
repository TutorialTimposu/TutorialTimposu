---
slug: membuat-user-postgresql
title: Membuat User PostgreSQL
authors: topekox
tags: [postgre, postgresql, database, rdbms]
---

Pada artikel sebelumnya kita sudah belajar tentang [perintah dasar postgreSql](/blog/perintah-dasar-postgre), nah pada artikel ini kita akan membahas sedikit lebih detail tentang bagaimana perintah mengelola user di postreSQL

<!--truncate-->

### Membuat user

```sql
CREATE USER ucup;
```

### Check List User

```
\du
```

### Membuat user dengan password

```sql
CREATE USER ucup WITH PASSWORD 'inipassword';
```

### Membuat user dengan time valid

```sql
CREATE USER ucup WITH PASSWORD 'inipassword' VALID UNTIL '2025-01-01';
```

### Membuat user yang dapat membuat database

```sql
CREATE USER ucup WITH PASSWORD 'inipassword' CREATEDB;
```

### Mengupdate / Alter User password

```sql
ALTER USER ucup WITH PASSWORD 'passwordbaru';
```

### Mengubah expiration date user password

```sql
ALTER USER ucup VALID UNTIL 'Jan 31 2030';
```

### Mengubah expiration date user, dengan mengubah Zona Waktu

Contoh menentukan password harus kedaluwarsa pada tengah hari tanggal 4 Mei 2025 menggunakan zona waktu satu jam lebih awal dari UTC

```sql
ALTER USER ucup VALID UNTIL 'May 4 12:00:00 2025 +1';
```

### Membuat password valid selamanya

```sql
ALTER USER ucup VALID UNTIL 'infinity';
```

### Membuat user dengan akses untuk membuat user baru dan database baru:

```sql
ALTER USER ucup CREATEUSER CREATEDB;
```

### Menghapus User

```sql
DROP USER ucup;
```

### Membuat user dengan database

```sql
CREATE DATABASE yourdbname;
CREATE USER youruser WITH ENCRYPTED PASSWORD 'yourpass';
GRANT ALL PRIVILEGES ON DATABASE yourdbname TO youruser;
```