# testTask

## Задание 1 (SQL)
## Создадим дб и таблицы для наглядности.

## Шаг 1: Создание базы данных Test1

```sql
CREATE DATABASE Test1;
```

## Шаг 2: Создание таблиц

### Таблица ORDERS

```sql
CREATE TABLE ORDERS (
    ORDNO VARCHAR(255) PRIMARY KEY,
    USRNAME VARCHAR(255) NOT NULL
);
```

### Таблица ORDTASK

```sql
CREATE TABLE ORDTASK (
    TESTCODE INT,
    ORDNO VARCHAR(255),
    TESTNAME VARCHAR(255),
    FOREIGN KEY (ORDNO) REFERENCES ORDERS(ORDNO)
);
```

## Шаг 3: Внесение данных в таблицы

### В таблицу ORDERS

```sql
INSERT INTO ORDERS (ORDNO, USRNAME) VALUES ('A000234', 'Пользователь');
```

### В таблицу ORDTASK

```sql
INSERT INTO ORDTASK (TESTCODE, ORDNO, TESTNAME) VALUES (234, 'A000234', 'Какой-то тест');
```

## Решение первого задания SQL

### Запросы:

1. Все образцы и испытания по ним (поля для вывода: `ORDNO`, `USRNAME`, `TESTCODE`, `TESTNAME`):

```sql
SELECT O.ORDNO, O.USRNAME, T.TESTCODE, T.TESTNAME
FROM ORDERS O
JOIN ORDTASK T ON O.ORDNO = T.ORDNO;
```

2. Все образцы, на которые назначено испытание с кодом (`TESTCODE`) равным 123 (поле для вывода: `ORDNO`):

```sql
SELECT DISTINCT O.ORDNO
FROM ORDERS O
JOIN ORDTASK T ON O.ORDNO = T.ORDNO
WHERE T.TESTCODE = 123;
```

3. Всех пользователей, которые зарегистрировали образцы, на которые назначено испытание с названием, начинающимся с 'Измерения р' (поле для вывода: `USRNAME`):

```sql
SELECT DISTINCT O.USRNAME
FROM ORDERS O
JOIN ORDTASK T ON O.ORDNO = T.ORDNO
WHERE T.TESTNAME LIKE 'Измерения р%';
```

## Задание 2 ( Сортировка одномерного массива целых чилес )

Есть множество алгоритмов сортировки. Я реализовал самый простой "пузырьковый" и самый любимый "бинарная сортировка".
