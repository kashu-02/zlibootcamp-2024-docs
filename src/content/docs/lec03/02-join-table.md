---
title: JOINを使ったテーブルの結合
description: JOINを使ったテーブルの結合
---

# JOINを使ったテーブルの結合

データベースには、複数のテーブルを結合してデータを取得することができます。
テーブルを結合する際には、`JOIN`句を使用します。

## JOINの種類

`JOIN`句には、以下のような種類があります。

- `INNER JOIN`: 2つのテーブルの共通するデータのみを取得します。
- `LEFT JOIN`: 左側のテーブルのデータを全て取得し、右側のテーブルのデータが存在しない場合は`NULL`を返します。
- `RIGHT JOIN`: 右側のテーブルのデータを全て取得し、左側のテーブルのデータが存在しない場合は`NULL`を返します。

## INNER JOINの例

以下の例では、`users`テーブルと`orders`テーブルを`INNER JOIN`して、ユーザーと注文の情報を取得しています。

usersテーブル
| id | name |
|----|------|
| 1  | Alice|
| 2  | Bob  |

ordersテーブル
| id | user_id | product |
|----|---------|---------|
| 1  | 1       | Apple   |
| 2  | 1       | Banana  |
| 3  | 2       | Orange  |


```sql
SELECT users.name, orders.product
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
```

上記のSQL文では、`users`テーブルと`orders`テーブルを`INNER JOIN`して、`users`テーブルの`name`カラムと`orders`テーブルの`product`カラムを取得しています。
`ON`句で結合条件を指定しています。

## LEFT JOINの例

以下の例では、`users`テーブルと`orders`テーブルを`LEFT JOIN`して、ユーザーと注文の情報を取得しています。

```sql
SELECT users.name, orders.product
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;
```

上記のSQL文では、`users`テーブルと`orders`テーブルを`LEFT JOIN`して、`users`テーブルの`name`カラムと`orders`テーブルの`product`カラムを取得しています。
`users`テーブルのデータは全て取得され、`orders`テーブルのデータが存在しない場合は`NULL`が返されます。

## RIGHT JOINの例

以下の例では、`users`テーブルと`orders`テーブルを`RIGHT JOIN`して、ユーザーと注文の情報を取得しています。

```sql
SELECT users.name, orders.product
FROM users
RIGHT JOIN orders
ON users.id = orders.user_id;
```

上記のSQL文では、`users`テーブルと`orders`テーブルを`RIGHT JOIN`して、`users`テーブルの`name`カラムと`orders`テーブルの`product`カラムを取得しています。
`orders`テーブルのデータは全て取得され、`users`テーブルのデータが存在しない場合は`NULL`が返されます。

## 演習

以下のテーブルを作成し、`INNER JOIN`、`LEFT JOIN`、`RIGHT JOIN`を使用してデータを取得してみましょう。

usersテーブル
| id | name |
|----|------|
| 1  | Alice|
| 2  | Bob  |

ordersテーブル
| id | user_id | product |
|----|---------|---------|
| 1  | 1       | Apple   |
| 2  | 1       | Banana  |
| 3  | 2       | Orange  |

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT
);

CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    product TEXT
);

INSERT INTO users (name) VALUES ('Alice');
INSERT INTO users (name) VALUES ('Bob');

INSERT INTO orders (user_id, product) VALUES (1, 'Apple');
INSERT INTO orders (user_id, product) VALUES (1, 'Banana');
INSERT INTO orders (user_id, product) VALUES (2, 'Orange');
```

## 演習

[https://qiita.com/_hiro_dev/items/ece39759879c5d1f8536](https://qiita.com/_hiro_dev/items/ece39759879c5d1f8536)