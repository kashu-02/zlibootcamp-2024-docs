---
title: データベース入門
description: データベース入門
---

前回の講義ではWebAPIの作成について学びました。
今回は、データベースについて学び、データベースを利用したWebAPIの作成を行います。

## データベースとは
データベースは、データを保存・管理するための仕組みです。
データベースには、以下のような特徴があります。

- データの永続化: データを永続的に保存することができます。
- データの整合性: データの整合性を保つことができます。
- データの検索: データを検索することができます。

データベースには、様々な種類がありますが、代表的なものには以下のようなものがあります。

- リレーショナルデータベース(RDB): テーブルという形式でデータを保存するデータベースです。代表的なものにはMySQLやPostgreSQLがあります。
- NoSQLデータベース: 関係データベース以外のデータベースです。代表的なものにはMongoDBやRedisがあります。
- NewSQLデータベース: 関係データベースの拡張版です。代表的なものにはSpannerやTiDBがあります。

今回学んでいく内容は、リレーショナルデータベース(RDB)についてです。

## リレーショナルデータベース(RDB)
リレーショナルデータベース(RDB)は、テーブルという形式でデータを保存するデータベースです。
RDBでは、データをテーブルという形式で保存し、テーブル間の関係を定義することができます。

RDBの例を示します。

| id | name |
|----|------|
| 1  | Alice|
| 2  | Bob  |

RDBには、以下のような特徴があります。

- テーブル: データを保存するための表です。
- カラム: テーブル内のデータの種類を定義します。
- レコード: テーブル内の1行分のデータです。
- 主キー: テーブル内のレコードを一意に識別するためのカラムです。
- 外部キー: テーブル間の関俩を定義するためのカラムです。

RDBでは、SQL(Structured Query Language)という言語を使ってデータの操作を行います。
SQLは、データベースに対してクエリを発行するための言語で、以下のような操作ができます。

- データの挿入: テーブルにデータを挿入します。
- データの取得: テーブルからデータを取得します。
- データの更新: テーブル内のデータを更新します。
- データの削除: テーブル内のデータを削除します。

## データベースに対応している型

データベースには、以下のようなデータ型があります。

- INTEGER: 整数型
- TEXT: 文字列型
- BLOB: バイナリデータ型

データベースによっては、他にも様々なデータ型がありますが、基本的なデータ型は上記の4つです。

## SQLite3のインストール

今回は、SQLite3を使ってデータベースを作成します。
SQLite3は、軽量なデータベースエンジンで、ファイルベースのデータベースを作成することができます。

まずは、SQLite3をインストールします。

```bash
sudo apt install sqlite3
```

macOSの場合は、Homebrewを使ってインストールします。

```bash
brew install sqlite3
```

インストールが完了したら、以下のコマンドでSQLite3のバージョンを確認します。

```bash
sqlite3 --version
```

## SQLite3の操作

SQLite3を使ってデータベースを作成し、操作してみましょう。

まずは、SQLite3に接続します。

```bash
sqlite3
```

次に、データベースを作成します。

```bash
sqlite> .open sample.db
```

### テーブルの作成 CREATE TABLE

データベースが作成されたら、テーブルを作成します。
テーブルを作成するには、`CREATE TABLE` 文を使います。

```bash
sqlite> CREATE TABLE テーブル名 (カラム名1 データ型1, カラム名2 データ型2, ...);
```

```bash
sqlite> CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);
```

### データの挿入 INSERT INTO

テーブルが作成されたら、データを挿入します。
データを挿入するには、`INSERT INTO` 文を使います。

```bash
sqlite> INSERT INTO テーブル名 (カラム名1, カラム名2, ...) VALUES (値1, 値2, ...);
```

```bash
sqlite> INSERT INTO users (name) VALUES ('Alice');
sqlite> INSERT INTO users (name) VALUES ('Bob');
```

### データの取得 SELECT

データを挿入したら、データを取得してみましょう。
データを取得するには、`SELECT` 文を使います。

```bash
sqlite> SELECT * FROM テーブル名;
```

```bash
sqlite> SELECT * FROM users;
```

`*` は全てのカラムを指定するための記号です。
nameカラムを取得する場合は、以下のように記述します。

```bash
sqlite> SELECT name FROM users;
```

### データの更新 UPDATE

データを取得したら、データを更新してみましょう。
データを更新するには、`UPDATE` 文を使います。

```bash
sqlite> UPDATE テーブル名 SET カラム名1 = 値1, カラム名2 = 値2 WHERE 条件;
```

```bash
sqlite> UPDATE users SET name = 'Charlie' WHERE id = 1;
```

### データの削除 DELETE

データを更新したら、データを削除してみましょう。
データを削除するには、`DELETE` 文を使います。

```bash
sqlite> DELETE FROM テーブル名 WHERE 条件;
```

```bash
sqlite> DELETE FROM users WHERE id = 2;
```

### WHERE句

SQLでは、`WHERE` 句を使って条件を指定することができます。
`WHERE` 句を使うことで、特定の条件を満たすデータのみを取得、更新、削除することができます。

```bash
sqlite> SELECT * FROM users WHERE id = 1;
```

```bash
sqlite> UPDATE users SET name = 'David' WHERE id = 1;
```

```bash
sqlite> DELETE FROM users WHERE id = 1;
```

#### 検索条件

`WHERE` 句には、以下のような検索条件を指定することができます。

- `=`: 等しい
- `!=`: 等しくない
- `>`: より大きい
- `<`: より小さい
- `>=`: 以上
- `<=`: 以下
- `AND`: かつ
- `OR`: または
- `IN`: 指定した値のいずれか
- `LIKE`: 指定したパターンに一致する
- `BETWEEN`: 指定した範囲内

詳細な検索条件については、[SQLite3の公式ドキュメント](https://www.sqlite.org/lang_expr.html)を参照してください。

### データベースの終了

データが取得できたら、SQLite3を終了します。

```bash
sqlite> .exit
```

以上で、SQLite3を使ったデータベースの作成と操作が完了しました。

## 演習

以下の演習問題は、SQLite3を使ってデータベースを作成し、操作してみましょう。

1. `users` テーブルを作成し、以下のデータを挿入してみましょう。
    - id: 1, name: Alice , age: 20
    - id: 2, name: Bob , age: 25
2. `users` テーブルから全てのデータを取得してみましょう。
3. `users` テーブルの `name` カラムを `Charlie` に更新してみましょう。
4. `users` テーブルから `id` が `2` のデータを削除してみましょう。

where句を使って、条件を指定してデータを取得します。

5. `users` テーブルから `name` が `Alice` のデータを取得してみましょう。
6. `users` テーブルから `age` が `20` 以上のデータを取得してみましょう。
7. `users` テーブルから `age` が `20` 以上かつ `name` が `Alice` のデータを取得してみましょう。
8. `users` テーブルから `age` が `20` 以上または `name` が `e` で終わるデータを取得してみましょう。

## まとめ

データベースについて学び、SQLite3を使ってデータベースを作成し、操作する方法について学びました。
次回は、Go言語からSQLite3を操作する方法について学びます。
