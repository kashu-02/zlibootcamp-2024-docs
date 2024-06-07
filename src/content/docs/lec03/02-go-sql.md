---
title: GoからSQLite3を操作する
description: GoからSQLite3を操作する
---

# GoからSQLite3を操作する
Go言語からSQLite3を操作する方法について学びます。
Goからも様々なデータベースを操作することがでできますが、今回はSQLite3を使ってデータベースを操作します。

## SQLite3のドライバー
最初に、GoプログラムからSQLite3を操作するために、SQLite3のドライバーをインストールする必要があります。go-sqlite3パッケージが一般的に使用されます。以下のコマンドを使用してインストールします。

```
go get github.com/mattn/go-sqlite3
```

## データベースの作成と接続:
SQLite3データベースを操作する前に、データベースへの接続が必要です。以下のコードを使用して、データベースに接続します。

```go
package main

import (
    "database/sql"
    _ "github.com/mattn/go-sqlite3"
    "log"
)

func main() {
    // SQLite3データベースに接続
    db, err := sql.Open("sqlite3", "./example.db")
    if err != nil {
        log.Fatal(err)
    }
    defer db.Close()
}
```

上記のコードでは、`sql.Open`関数を使用してSQLite3デーエベースに接続しています。データベースファイル名は`example.db`として指定しています。

## テーブルの作成:

データベースに接続した後、テーブルを作成することができます。以下のコードを使用して、テーブルを作成します。

```go
_, err = db.Exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
    age INTEGER NOT NULL
)`)
if err != nil {
    log.Fatal(err)
}
```

上記のコードでは、`db.Exec`関数を使用して、`users`テーブルを作成しています。テーブルには`id`、`name`、`age`の3つのカラムがあります。

## データベースへのデータの挿入:

テーブルが作成されたら、データを挿入することができます。以下のコードを使用して、データを挿入します。

```go
_, err = db.Exec(`INSERT INTO users (name, age) VALUES (?, ?)`, "Alice", 25)
if err != nil {
    log.Fatal(err)
}
```

上記のコードでは、`db.Exec`関数を使用して、`users`テーブルにデータを挿入しています。`name`カラムには`Alice`、`age`カラムには`25`の値が挿入されます。

## データベースからデータの取得:

データを挿入した後、データを取得することができます。以下のコードを使用して、データを取得します。

```go
rows, err := db.Query("SELECT id, name, age FROM users")
if err != nil {
    log.Fatal(err)
}
defer rows.Close()

for rows.Next() {
    var id int
    var name string
    var age int
    err = rows.Scan(&id, &name, &age)
    if err != nil {
        log.Fatal(err)
    }
    log.Println(id, name, age)
}
```

上記のコードでは、`db.Query`関数を使用して、`users`テーブルからデータを取得しています。取得したデータは`rows`に格納され、`rows.Next`関数を使用してデータを1行ずつ取得しています。

## 更新

データベースのデータを更新するには、`UPDATE`文を使用します。以下のコードを使用して、データを更新します。

```go
_, err = db.Exec(`UPDATE users SET age = ? WHERE name = ?`, 30, "Alice")
if err != nil {
    log.Fatal(err)
}
```

上記のコードでは、`db.Exec`関数を使用して、`users`テーブルの`name`が`Alice`のデータの`age`を`30`に更新しています。

## 削除

データベースのデータを削除するには、`DELETE`文を使用します。以下のコードを使用して、データを削除します。

```go
_, err = db.Exec(`DELETE FROM users WHERE name = ?`, "Alice")
if err != nil {
    log.Fatal(err)
}
```

上記のコードでは、`db.Exec`関数を使用して、`users`テーブルの`name`が`Alice`のデータを削除しています。

これで、GoからSQLite3を操作する方法について学びました。データベースの操作には、`INSERT`、`SELECT`、`UPDATE`、`DELETE`などのSQL文を学びました。

## 演習

先ほどのSQLの課題をGoで実装してみましょう。

