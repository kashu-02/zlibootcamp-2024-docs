---
title: 簡単なWebAPIを作成する
description: 簡単なWebAPIを作成する
---

# 簡単なWebAPIを作成する
WebAPIについて学んだところで、簡単なWebAPIを作成してみましょう。

## Webフレームワーク
今回は、WebAPIを作成するために、`gin`というWebフレームワークを使います。
Webフレームワークとは、ウェブサイトやウェブアプリケーションを作るためのツールやライブラリの集まりです。
開発者がゼロから全てを作らなくても、ルーティングやリクエストの処理、レスポンスの生成などを簡単に行うことができます。

## WebAPI開発環境のセットアップ
今回は、`homework/(Gitのユーザー名)/ex-02`というディレクトリに作成します。
VSCodeのターミナルから、`homework/(Gitのユーザー名)/ex-02`のディレクトリを作成し、移動します。

```bash
mkdir -p ~/homework/(Gitのユーザー名)/ex-02
cd ~/homework/(Gitのユーザー名)/ex-02
```

## プロジェクトの初期化
次に、`go mod init`コマンドを使って、プロジェクトを初期化します。
実際の開発では、標準ライブラリ以外に、外部のパッケージ(モジュール)を使うことがあります。
このモジュール間の依存関係を管理するために、Goでは、`go.mod`ファイルを使います。
このコマンドを実行することで、`go.mod`ファイルが作成されます。

```bash
go mod init github.com/Zli-UoA/zlibootcamp-backend/homework/(Gitのユーザー名)/ex-02
```

## Webフレームワークginのインストール
次に、`gin`をインストールします。

```bash
go get -u github.com/gin-gonic/gin
```

## `Hello World!`を返すWebAPIの作成
`hello.go`ファイルを作成し、以下のコードを記述します。

```go
package main

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

func main() {
    r := gin.Default() // ginのルーターを作成

    r.GET("/hello", func(c *gin.Context) { // HTTP GETで/helloにアクセスしたときの処理
        c.JSON(http.StatusOK, gin.H{ // HTTPステータスコード200(OK)で、JSONを返す
            "message": "Hello, World!",
        })
    })

    // 演習問題はここに追記してください
    
    
    r.Run(":8080") // ポート8080でサーバーを起動
}
```
```Bash
$ go run hello.go
```
上のコードは、`/hello`にアクセスすると、`Hello, World!`というJSONを返すWebAPIを作成しています。

`r := gin.Default()`は、ginのルーターを作成しています。
HTTPリクエストを受け取り、URLとHTTPメソッドに応じて処理を振り分けるためのものです。

`r.GET("/hello", func(c *gin.Context) {`は、[HTTP GET](/lec01/01-web/#httpメソッド)で`/hello`にアクセスしたときの処理を記述しています。

実際にPostmanなどで`http://localhost:8080/hello`にアクセスしてみましょう。

`Hello, World!`というJSONが返ってくることが確認できるはずです。

これで、簡単なWebAPIの作成ができました！

## 演習
以下の演習問題は、`hello.go`内の`r.GET("/hello", func(c *gin.Context) {`のブロックの下、`r.Run(":8080")`の上に追記してください。
1. HTTP POSTで`/hello`にアクセスすると、`Hello, Zli!`というJSONを返すWebAPIを作成してみましょう。
1. HTTP DELETEで`/bye`にアクセスすると、`Bye!`というJSONを返すWebAPIを作成してみましょう。
1. `/konnichiwa`にアクセスすると、HTTPステータスコード400(Bad Request)で、`Bad Request`というJSONを返すWebAPIを作成してみましょう。  
   ヒント: `http.StatusBadRequest`を使うと、HTTPステータスコード400を指定できます。
1. `/hello`以外にも、好きなエンドポイント、メッセージを返すAPIを作成してみましょう。