---
slug: perintah-dasar-postgre
title: Perintah Dasar PostgreSQL
authors: topekox
tags: [postgre, postgresql, database, rdbms]
---

PostgreSQL adalah sistem basisdata / database yang sangat powerfull untuk urusan data yang berelasi dan bersifat open source. Sudah dikembangkan lebih dari 15 tahun dan sudah terbukti dari rancangan arsitekturnya dan telah mendapat reputasi sebagai database yang kuat, handal, integritas data dan akurasi data yang bagus.

Buat kalian yang baru belajar PostgreSQL berikut beberapa perintah dasar PostgreSQL:

<!--truncate-->

![Topekox](https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=877&q=80)

## Login to CLI Postgre

### Help

```
$ psql --help
```

### Login 

```
$ psql
```

### Login dengan perintah lengkap (host, port, user dan nama database)

Contoh misalkan kita ingin login ke server Postgre yang memiliki data host `localhost`, port default `5432`, user `ucup` dan nama database `belajar` :

```
$ psql -h localhost -p 5432 -U ucup belajar
```

### Help Postgre CLI

```
$ help
```

### Daftar Perintah lengkap

```
\?
```

### Exit Postgre CLI

```
\q
```

## Databases

### Melihat daftar databases

```
\l
```

### Membuat Database

```sql
CREATE DATABASE belajar;
```

### Menghapus Database

```sql
DROP DATABASE belajar;
```

### Membuat privileges

```sql
grant all privileges on database "belajar" to ucup;
```

### Koneksi ke Database

Untuk memilih database / koneksi ke database yang ingin digunakan ikuti perintah di bawah ini:

```
\c belajar
```

## Table

### Membuat Table

```sql
CREATE TABLE table_name (
	Column_name + data type + constrains if any;
)
```

Untuk melihat daftar tipe data dalam PostgreSQL, bisa dilihat di [dokumentasi resmi PostreSQL](https://www.postgresql.org/docs/current/datatype.html).  

contoh

```sql
CREATE TABLE person (
id INT,
first_name VARCHAR(50),
last_name VARCHAR(50),
email VARCHAR(50)
); 
```

### Melihat Daftar Table

```
\d
```

### Melihat Properties/Detail Table

```
\d person
```

### Menghapus Table

```sql
DROP TABLE person;
```

### Membuat Table dengan Constraint

```sql
CREATE TABLE person (                                        
id BIGSERIAL NOT NULL PRIMARY KEY,                                     
first_name VARCHAR(50) NOT NULL, 
last_name VARCHAR(50) NOT NULL, 
country VARCHAR(50) NOT NULL,                                       
email VARCHAR(50) NOT NULL UNIQUE                                      
);
```

BIGSERIAL adalah tipe data yang memiliki constraint auto increment.

## Update Table

```sql
ALTER TABLE table_name
ADD COLUMN new_column_name data_type constraint;
```

Contoh :

```sql
alter table person
add date_of_birth DATE NOT NULL;
```

## Insert Table

```sql
INSERT INTO person (first_name, last_name, email, country, date_of_birth)
VALUES ('Ucup', 'Topekox', 'ucup@tutorialtimposu.com', 'Indonesia', '1990-01-01');
```

### Melihat isi Table

```sql
SELECT * FROM person;
```

### Insert Data dari File

Kita bisa generate random data di [https://www.mockaroo.com/](https://www.mockaroo.com/).

```sql
\i /Users/ucup/Downloads/person.sql
```

## SELECT

Tip: untuk mengubah tampilan/Expanded hasil query 'select' gunakan perintah `\x`.

### Menampilkan Jumlah Data

```sql
select from person;
```

### Menampilkan data berdasarkan nama field

```sql
select * first_name from person;
```

### Mencari data berdasarkan email

```sql
select * from person where email='mgiraudo6@nyu.edu';
```

### Sortir data

```sql
select * from person order by date_of_birth asc;
```

### Sortir data secara terbalik

```sql
select * from person order by date_of_birth desc;

select * from person order by email, date_of_birth desc
```

### SELECT DISTINCT

Menampilkan data hanya satu dari value yang duplikat.


```sql
SELECT DISTINCT country FROM person ORDER BY country ASC;
```

### SELECT WHERE

```sql
SELECT * FROM person WHERE country = 'Indonesia';
```

### SELECT WHERE AND

```sql
SELECT * FROM person WHERE country = 'Indonesia' AND last_name = 'Ambrosi';
```

### SELECT WHERE AND OR

```sql
SELECT * FROM person WHERE country = 'Indonesia' AND (last_name = 'Ambrosi' OR first_name='Jocko');
```

### SELECT Comparison Operators / Operator Pembanding

```sql
SELECT 1 = 1;
```

Hasil `t` untuk true dan `f` untuk false.
 
Daftar Operator dengan asumsi *a* bernilai 10 dan *b* bernilai 20:

| Operator	| Description	| Example |
| ----------| --------------| ----------|
| =	| Jika nilai sama maka true. | (a = b) is not true. |
| != | Jika nilai tidak sama true.	| (a != b) is true. |
| &lt;&gt; |	Memeriksa apakah nilai kedua nilai sama atau tidak, jika nilainya tidak sama maka kondisinya menjadi true. | (a &lt;&gt; b) is true. |
| >	| Jika nilai sebelah kiri operator lebih besar dari nilai sebelah kanan operator maka true. | (a > b) is not true. |
| <	| Jika nilai sebelah kiri operator lebih kecil dari nilai sebelah kanan operator maka true. | (a < b) is true. |
| >= | Jika nilai sebelah kiri operator lebih besar atau sama dengan  nilai sebelah kanan operator maka true. | (a >= b) is not true. |
| <= |Jika nilai sebelah kiri operator lebih kecil atau sama dengan  nilai sebelah kanan operator maka true. | (a <= b) is true. |

### LIMIT

```sql
SELECT * FROM person LIMIT 5;
```

result:

```bash
id | first_name | last_name  |   country   |           email           | date_of_birth
----+------------+------------+-------------+---------------------------+---------------
  1 | Maddalena  | Chisnall   | South Korea | mchisnall0@bloomberg.com  | 1986-01-27
  2 | Kari       | Norwich    | Indonesia   | knorwich1@themeforest.net | 1989-12-01
  3 | Sybila     | Carreyette | China       | scarreyette2@apple.com    | 1999-07-14
  4 | Cliff      | Kruger     | Portugal    | ckruger3@yandex.ru        | 2000-11-01
  5 | Arlin      | Cissen     | Georgia     | acissen4@about.com        | 1987-09-29
(5 rows)
```

### OFFSET

Offset digunakan untuk mengambil data dari nilai awal baris pada table.

```sql
SELECT * FROM person OFFSET 5 LIMIT 5;
```

result:

```bash
id | first_name | last_name |    country     |          email           | date_of_birth
----+------------+-----------+----------------+--------------------------+---------------
  6 | Inger      | Oda       | Czech Republic | ioda5@diigo.com          | 1993-02-02
  7 | Jilleen    | Tartt     | Brazil         | jtartt6@msn.com          | 1992-09-07
  8 | Ban        | Insull    | China          | binsull7@canalblog.com   | 1996-11-05
  9 | Evelin     | Valentin  | China          | evalentin8@pinterest.com | 1998-09-29
 10 | Hildegaard | Aldin     | China          | haldin9@hexun.com        | 1993-05-10
(5 rows)
```

### FETCH

Mengambil jumlah data yang diinginkan misal kita butuh 3 data:

```sql
SELECT * FROM person OFFSET 5 FETCH FIRST 3 ROW ONLY;
```

result:

```bash
id | first_name | last_name |    country     |         email          | date_of_birth
----+------------+-----------+----------------+------------------------+---------------
  6 | Inger      | Oda       | Czech Republic | ioda5@diigo.com        | 1993-02-02
  7 | Jilleen    | Tartt     | Brazil         | jtartt6@msn.com        | 1992-09-07
  8 | Ban        | Insull    | China          | binsull7@canalblog.com | 1996-11-05
(3 rows)
```

### OR

```sql
select * from person where country = 'China' or country = 'Indonesia';
```

### IN

Menampilkan data sesuai dalam `IN`:

```sql
select * from person where country in ('Indonesia', 'Malaysia', 'Thailand');
```

### BETWEEN

```sql
select * from person where date_of_birth between '1991-01-01' and '1993-12-31';
```

### LIKE

```sql
SELECT * FROM person WHERE email LIKE '%@msn.com';
```

Menampilkan data dengan jumlah 6 karakter dengan menggunakan underscore `_` dan  diakhiri dengan alamat domain email `@...`

```sql
SELECT * FROM person WHERE email LIKE '______@%';
```

### ILIKE

ILIKE berfungsi untuk menonaktifkan perbedaan uppercase dan lowercase misalnya tidak ada perbedaan untuk pencarian yang diawali dengan huruf `p` dan `P`.

```sql
SELECT * FROM person WHERE country ilike 'p%';
```

### GROUP

```sql
SELECT country FROM person GROUP BY country;
```

dengan count

```sql
SELECT country, count(*) FROM person GROUP BY country;
```

### GROUP BY HAVING

Having digunakan untuk menampilkan data berdasarkan jumlah kondisi valuenya. Misalnya menampilkan data country yang groupnya / jumlah negaranya lebih dari 5.

```sql
SELECT country, count(*) FROM person GROUP BY country HAVING COUNT(*) > 5 ORDER BY country ASC;
```

Untuk macam-macam jenis Aggregate Functions Postgre bisa dilihat [di dokumentasi resminya](https://www.postgresql.org/docs/current/functions-aggregate.html).


### Create New Table car

```sql
create table car (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	merk VARCHAR(100) NOT NULL,
	model VARCHAR(100) NOT NULL,
	price NUMERIC(19,2) NOT NULL
);
```

### MAX

```sql
SELECT MAX(price) FROM car;
```

### MIN

```sql
SELECT MIN(price) FROM car;
```

### AVG

```sql
SELECT AVG(price) FROM car;
```

example result:

```bash
        avg
--------------------
 54510.659000000000
(1 row)
```

### ROUND

Round digunakan untuk mengubah ke kebilangan bulat.


```sql
SELECT ROUND(AVG(price)) FROM car;
```

example result

```bash
round
-------
 54511
(1 row)
```

### Gabungan MIN, MAX

```sql
SELECT merk, model, MIN(price) FROM car GROUP BY merk, model;
```

example result:

```bash
     merk      |     model      |   min
---------------+----------------+----------
 Toyota        | Land Cruiser   | 25999.00
 Mercedes-Benz | S-Class        | 28967.00
 BMW           | M6             | 17124.00
 Saturn        | Aura           | 29511.00
 Kia           | Amanti         | 98550.00
 Oldsmobile    | Silhouette     | 10639.00
 Daewoo        | Lanos          | 35664.00
 Subaru        | Forester       | 28026.00
 Ford          | Econoline E350 | 37298.00
 Ferrari       | 612 Scaglietti | 55531.00
(10 rows)
```

```sql
SELECT merk, model, MIN(price) FROM car GROUP BY merk, model;
```

example result:

```bash
     merk      |     model      |   min
---------------+----------------+----------
 Toyota        | Land Cruiser   | 25999.00
 Mercedes-Benz | S-Class        | 28967.00
 BMW           | M6             | 17124.00
 Saturn        | Aura           | 29511.00
 Kia           | Amanti         | 98550.00
 Oldsmobile    | Silhouette     | 10639.00
 Daewoo        | Lanos          | 35664.00
 Subaru        | Forester       | 28026.00
 Ford          | Econoline E350 | 37298.00
 Ferrari       | 612 Scaglietti | 55531.00
(10 rows)
```

### SUM

```sql
SELECT SUM(price) FROM car;
```

SUM Group By

```sql
SELECT merk, SUM(price) FROM car GROUP BY merk;
```

### Mathematical Functions and Operators

```sql
SELECT 10 + 2;
```

Untuk selengkapnya silahkan ke [Dokumentasi Aritmatika](https://www.postgresql.org/docs/current/functions-math.html) PostgreSQL.


### Studi Kasus Aritmatika

Memberi diskon 10% dari harga mobil:

```sql
SELECT id, merk, model, price, price * .10 from car;
```

Membulatkan nilai

```sql
SELECT id, merk, model, price, round(price * .10) from car;
```

Mengurangi harga total dengan diskon:

```sql
SELECT id, merk, model, price, round(price * .10), round(price - (price * .10)) from car;
```

Memberikan nilai desimal 2 digit.

```sql
SELECT id, merk, model, price, round(price * .10), round(price - (price * .10), 2) from car;
```

### COALESCE

Coalesce biasanya digunakan untuk mereplace suatu data. Misalnya kita akan mereplace value dalam kolom yang bernilai `null` atau kosong `''`.

```sql
select coalesce(email, 'Email Not Provided') from person;
```

### NULLIF

```sql
NULLIF(argument_1,argument_2);
```

function `NULLIF` akan mengembalikan `null` value jika `argument_1` sama dengan `argument_2`, selain itu akan mengembalikan `argument_1`.

contoh:

```sql
select 10 / nullif(2, 9);

 ?column?
----------
        5
(1 row)
```

contoh 2:

```sql
select coalesce(10 / nullif(0, 0), 0);
 
coalesce
----------
        0
(1 row)
```

### TIMESTAMP

Lihat selengkapnya di [dokumentasi resminya](https://www.postgresql.org/docs/current/datatype-datetime.html).

```sql
SELECT NOW();
              

            now
-------------------------------
 2022-06-01 14:24:26.306704+08
(1 row)
```

dengan tanggal

```sql
SELECT NOW()::DATE;
```

dengan waktu

```sql
SELECT NOW()::TIME;
```

Mengurangi waktu saat ini 1 tahun

```sql
SELECT NOW() - INTERVAL '1 YEAR';


           ?column?
-------------------------------
 2021-06-01 14:33:49.919447+08
(1 row)
```

menambah wwaktu saat ini 1 bulan

```sql
SELECT NOW() +  INTERVAL '1 MONTHS';


           ?column?
-------------------------------
 2022-07-01 14:34:14.937614+08
(1 row)
```

### EXTRACT

Digunakan untuk mengekstrak bagian dari Datetime.

```sql
select now();
 
             now
-------------------------------
 2022-06-01 15:18:11.776978+08
(1 row)


select extract(month from now());

 date_part
-----------
         6
(1 row)


select extract(year from now());


 date_part
-----------
      2022
(1 row)


select extract(day from now());


 date_part
-----------
         1
(1 row)


select extract(dow from now());


 date_part
-----------
         3
(1 row)


select extract(century from now()); 


 date_part
-----------
        21
(1 row)
```

### AGE()

Digunakan untuk menghitung usia

```sql
select first_name, last_name, date_of_birth, AGE(NOW(), date_of_birth) from person;
```

### IS NULL

Menampilkan data yang nilainya null

```sql
select * from person where email IS NULL;
```

### CONSTRAINT

### PRIMARY KEY

Menghapus constraint primary key

```sql
alter table person drop constraint person_pkey;
```

Membuat Primary Key

```sql
alter table person add primary key(id);
```

### UNIQUE

Menambahkan constraint unique

```sql
ALTER TABLE person ADD CONSTRAINT unique_email_name UNIQUE (email);
```

atau

```sql
alter table person add unique (email);
```

Menghapus constraint unique

```sql
ALTER TABLE person DROP CONSTRAINT unique_email_name;
```

### CHECK

Digunakan untuk hanya membatasi value yang ingin dimasukan.

```sql
ALTER TABLE person ADD CONSTRAINT gender_constraint CHECK (gender = 'Female' OR gender = 'Male');
```

## DELETE

```sql
delete from person where id = 2;
```

Dengan kondisi

```sql
delete from person where gender = 'Female' and country = 'Nigeria';
```

## UPDATE

```sql
update person set first_name = 'ucup' where id = 11;
```

Multiple kolom

```sql
update person set first_name='ucup', last_name='topekox', email='ucup@tutorialtimposu.com' where id = 11;
```

## ON CONFLICT DO NOTHING

Berfungsi untuk tidak menghiraukan error ketika menginput data yang duplikat terhadap feild yang memiliki key atau field yang unique.

```sql
insert into person (id, first_name, last_name, email, gender, country, date_of_birth) values (2, 'Lorri', 'Werendell', 'lwerendell1@cloudflare.com', 'Female', 'China', '2000-07-28') ON CONFLICT  (id) DO NOTHING;
```

Catatan: Query ini hanya berfungsi terhadap field yang memiliki constraint.

## ON CONFLICT DO UPDATE

Jika terdapat data konflik pada constraint maka tetap akan di update.

```sql
insert into person (id, first_name, last_name, email, gender, country, date_of_birth) values (2, 'Naruto', 'Uzumaki', 'naruto@naruto.com', 'Female', 'China', '2000-07-28') ON CONFLICT  (id) DO UPDATE set first_name = EXCLUDED.first_name, last_name = EXCLUDED.last_name, email = EXCLUDED.email;
```

## RELATIONS

```sql
create table car (                                                  
id bigserial not null primary key,
merk varchar(100) not null,
model varchar(100) not null,
price numeric(19, 2) not null
);
```

```sql
create table person (                                               
id bigserial not null primary key,
first_name varchar(50) not null, 
last_name varchar(50) not null, 
gender varchar(7) not null,
email varchar(100),
date_of_birth date not null,      
country varchar(50) not null,
car_id bigint references car (id)
);
```

### INNER JOIN

Menampilkan data yang punya relasi saja.

```sql
select * from person join car on person.car_id = car.id;
```

Contoh lain:

```sql
select person.first_name, car.merk, car.model, car.price from person join car on person.car_id = car.id;
```

### LEFT JOIN

Hanya menampilkan data yang berada di tabel sisi kiri dan tabel lain yang berelasi.

```sql
select * from person left join car on car.id = person.car_id;
```

Menampilkan data `left join` yang memiliki car_id `null`

```sql
select * from person left join car on car.id = person.car_id where person.car_id IS NULL;
```

### Hapus Record yang berelasi Foreign Key

Untuk menghapus record yang berelasi pastikan untuk mengahpus data yang sudah teralasi sebelum yang berada tabel master.

## Export Query to CSV

```sql
\copy (select * from person left join car on car.id = person.car_id) to '/Users/ucup/Desktop/result.csv' delimiter '.'CSV HEADER;
```

## Serial & Sequence

Cek sequnce

```sql
\d
             List of relations
 Schema |     Name      |   Type   | Owner
--------+---------------+----------+-------
 public | car           | table    | ucup
 public | car_id_seq    | sequence | ucup
 public | person        | table    | ucup
 public | person_id_seq | sequence | ucup
(4 rows)

select * from person_id_seq;

 last_value | log_cnt | is_called
------------+---------+-----------
         11 |      22 | t
(1 row)
```

Membuat next value sequence


```sql
select nextval('person_id_seq'::regclass);

 nextval
---------
      12
(1 row)
```

Reset value sequence

```sql
alter sequence person_id_seq RESTART WITH 11;
```

### Show All Extensions

```sql
select * from pg_available_extensions ;
```

### Install UUID Extension

```sql
create extension if not exists "uuid-ossp";
```

Cek semua function

```sql
\df
```

Generate UUID

```sql
select uuid_generate_v4();
```

## UUID Example

Contoh menggunakan UUID generator sebagai id primary key.

```sql
create table car (
	car_uid UUID NOT NULL PRIMARY KEY,
	merk VARCHAR(100) NOT NULL,
	model VARCHAR(100) NOT NULL,
	price NUMERIC(19, 2) NOT NULL CHECK (price > 0)
);

create table person (
	person_uid UUID NOT NULL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(50),
	gender VARCHAR(50) NOT NULL,
	country VARCHAR(50) NOT NULL,
	date_of_birth DATE,
	car_uid UUID REFERENCES car(car_uid),
	UNIQUE(car_uid),
	UNIQUE(email)
);

-- Insert into person
insert into person (person_uid, first_name, last_name, email, gender, country, date_of_birth) 
	values (uuid_generate_v4(), 'Krissie', 'Dorie', null, 'Female', 'Ukraine', '1994-02-26');

insert into person (person_uid, first_name, last_name, email, gender, country, date_of_birth) 
	values (uuid_generate_v4(), 'Mahmud', 'Cundict', 'mcundictl@opensource.org', 'Male', 'China', '1993-12-05');

insert into person (person_uid, first_name, last_name, email, gender, country, date_of_birth) 
	values (uuid_generate_v4(), 'Gusta', 'Breed', 'gbreed1g@vistaprint.com', 'Female', 'Russia', '1987-06-05');

-- Insert into car
insert into car (car_uid, merk, model, price) values (uuid_generate_v4(), 'GMC', 'Yukon', 98421);
insert into car (car_uid, merk, model, price) values (uuid_generate_v4(), 'Mercedes-Benz', 'CL-Class', 55099);
```

Query : 

```sql
select * from person; 
             
person_uid                            | first_name | last_name |          email           | gender | country | date_of_birth | car_uid 
--------------------------------------+------------+-----------+--------------------------+--------+---------+---------------+---------
 bc16f40f-44ae-4bce-98d0-3680d948f45e | Krissie    | Dorie     |                          | Female | Ukraine | 1994-02-26    | 
 4c627003-4992-43e5-83eb-190886c565ab | Mahmud     | Cundict   | mcundictl@opensource.org | Male   | China   | 1993-12-05    | 
 4b982532-a05c-4bb3-b7d7-b75236067f43 | Gusta      | Breed     | gbreed1g@vistaprint.com  | Female | Russia  | 1987-06-05    | 
(3 rows)
```

```sql
select * from car;

car_uid                               |     merk      |  model   |  price   
--------------------------------------+---------------+----------+----------
 2330fb0e-c9e1-46bb-b408-c7bd5b3c8f64 | GMC           | Yukon    | 98421.00
 c7ec543b-e094-4065-817b-e0847ebd9e1c | Mercedes-Benz | CL-Class | 55099.00
(2 rows)
```

Insert Relasi

```sql
update person set car_uid='c7ec543b-e094-4065-817b-e0847ebd9e1c' where person_uid='bc16f40f-44ae-4bce-98d0-3680d948f45e';

update person set car_uid='2330fb0e-c9e1-46bb-b408-c7bd5b3c8f64' where person_uid='4b982532-a05c-4bb3-b7d7-b75236067f43';
```

Show data

```sql
select * from person join car on person.car_uid = car.car_uid;

-- menggunakan using

select * from person join car using(car_uid);
```