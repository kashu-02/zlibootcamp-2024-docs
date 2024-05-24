---
title: CRUD機能を持つWebAPIを作成する
description: CRUD機能を持つWebAPIを作成する
---

前章では、Hello, World!を出力する簡単なWebAPIを作成しました。

今回は、CRUD(Create, Read, Update, Delete)機能を持つWebAPIを作成してみましょう。

## CRUDとは
CRUDとは、システムにおける基本的な操作の一つで、以下の4つの操作を指します。
- Create: データの新規作成
- Read: データの取得
- Update: データの更新
- Delete: データの削除

RESTfulなWebAPIでは、HTTPメソッドとリクエストURLによって、CRUD操作を行います。
例えば、以下のようにHTTPメソッドとリクエストURLを組み合わせて、CRUD操作を行います。
- Create: POST /users
- Read: GET /users
- Update: PUT /users/:id
- Delete: DELETE /users/:id

ここで、`:id`は、ユーザーのIDを指定するためのパスパラメータでURLの一部です。

WebAPIを作成する際は、CRUD操作を行うことができるかを考慮して設計することが重要です。

## WebAPI開発環境のセットアップ
今回は、`homework/(Gitのユーザー名)/api-ex`というディレクトリに作成します。
VSCodeのターミナルから、`homework/(Gitのユーザー名)/api-ex`のディレクトリを作成し、移動します。

```bash
mkdir -p ~/homework/(Gitのユーザー名)/api-ex
cd ~/homework/(Gitのユーザー名)/api-ex
```

## プロジェクトの初期化
次に、`go mod init`コマンドを使って、プロジェクトを初期化します。
実際の開発では、標準ライブラリ以外に、外部のパッケージ(モジュール)を使うことがあります。
このモジュール間の依存関係を管理するために、Goでは、`go.mod`ファイルを使います。
このコマンドを実行することで、`go.mod`ファイルが作成されます。

```bash
go mod init github.com/Zli-UoA/zlibootcamp-backend/homework/(Gitのユーザー名)/ex-02
```

## Create機能の実装
この講義では、Twitterクローンの作成を目標に、CRUD機能を持つWebAPIを作成します。
まずは、ツイートのCreate機能(投稿機能)を実装してみましょう。

`main.go`ファイルを作成し、実装していきます。
以下のコードは、POSTリクエストを受け取り、ツイートを作成(投稿)するWebAPIの例です。

```go
package main

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

// Tweetの構造体を定義
type Tweet struct {
    ID   int    `json:"id"` // JSONのidがTweetのIDにマッピング(対応)される
    Text string `json:"text"` // JSONのtextがTweetのTextにマッピング(対応)される
}

// Tweetのスライスを定義。ここの変数にツイートが格納される
var tweets = []Tweet{
    {ID: 1, Text: "Hello, World!"},
}

var nextID = 2

func main() {
    r := gin.Default() // ginのルーターを作成

    r.POST("/tweets", func(c *gin.Context) { // HTTP POSTで/tweetsにアクセスしたときの処理
         var newTweet Tweet
         if err := c.ShouldBindJSON(&newTweet); err != nil { // リクエストボディをTweet構造体にバインド。エラーがあればエラーメッセージを返す
             c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
             return
         }
     newTweet.ID = nextID // IDを設定
     nextID++ // 次のIDを+1
     tweets = append(tweets, newTweet) // ツイートを追加
     c.JSON(http.StatusCreated, newTweet) // HTTPステータスコード201(Created)で、新しいツイートを返す
    })

    // Read機能以降はこの下に追記していきます

    r.Run(":8080") // ポート8080でサーバーを起動
}
```
実際にPostmanなどで`http://localhost:8080/tweets`にPOSTリクエストを送信してみましょう。
リクエストボディは以下のように設定します。
```json
{
    "text": "Sample Tweet"
}
```

HTTPステータスコード201(Created)で、新しいツイートが返ってくることが確認できるはずです。

## Read機能の実装
次に、ツイートのRead機能(取得機能)を実装してみましょう。

上のコードの`// Read機能以降はこの下に追記していきます`の部分の下に以下のコードを追記します。

```go
r.GET("/tweets", func(c *gin.Context) { // HTTP GETで/tweetsにアクセスしたときの処理
    c.JSON(http.StatusOK, tweets) // HTTPステータスコード200(OK)で、ツイート一覧を返す
})
```

実際にPostmanなどで`http://localhost:8080/tweets`にGETリクエストを送信してみましょう。

ツイート一覧が返ってくることが確認できるはずです。

## Update機能の実装
次に、ツイートのUpdate機能(更新機能)を実装してみましょう。
以下のコードは、PUTリクエストを受け取り、ツイートを更新するWebAPIの例です。

まず、importに、以下の標準ライブラリを追加します。
```go
    "strconv"
```
```go
r.PUT("/tweets/:id", func(c *gin.Context) { // HTTP PUTで/tweets/:idにアクセスしたときの処理
		id, err := strconv.Atoi(c.Param("id")) // URLの:idを取得
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Invalid ID",
			})
		}
		for i, tweet := range tweets {
			if tweet.ID == id {
				var updatedTweet Tweet
				if err := c.ShouldBindJSON(&updatedTweet); err != nil { // リクエストボディをTweet構造体にバインド。エラーがあればエラーメッセージを返す
					c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
					return
				}
				updatedTweet.ID = id
				tweets[i] = updatedTweet // ツイートを更新
				c.JSON(http.StatusOK, updatedTweet) // HTTPステータスコード200(OK)で、更新されたツイートを返す
				return
			}
		}
		c.JSON(http.StatusNotFound, gin.H{"error": "Tweet not found"}) // HTTPステータスコード404(Not Found)で、ツイートが見つからないエラーメッセージを返す
	})
```

実際にPostmanなどで`http://localhost:8080/tweets/1`にPUTリクエストを送信してみましょう。
リクエストボディは以下のように設定します。
```json
{
    "text": "Updated Tweet"
}
```

HTTPステータスコード200(OK)で、更新されたツイートが返ってくることが確認できるはずです。

## Delete機能の実装
最後に、ツイートのDelete機能(削除機能)を実装してみましょう。
以下のコードは、DELETEリクエストを受け取り、ツイートを削除するWebAPIの例です。

```go
r.DELETE("/tweets/:id", func(c *gin.Context) { // HTTP DELETEで/tweets/:idにアクセスしたときの処理
		id, err := strconv.Atoi(c.Param("id")) // URLの:idを取得
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Invalid ID",
			})
		}
		for i, tweet := range tweets {
			if tweet.ID == id {
				tweets = append(tweets[:i], tweets[i+1:]...) // ツイートを削除
				c.JSON(http.StatusOK, gin.H{"message": "Tweet deleted"}) // HTTPステータスコード200(OK)で、ツイートが削除されたメッセージを返す
				return
			}
		}
		c.JSON(http.StatusNotFound, gin.H{"error": "Tweet not found"}) // HTTPステータスコード404(Not Found)で、ツイートが見つからないエラーメッセージを返す
	})
```

実際にPostmanなどで`http://localhost:8080/tweets/1`にDELETEリクエストを送信してみましょう。

HTTPステータスコード200(OK)で、ツイートが削除されたメッセージが返ってくることが確認できるはずです。

これで、CRUD機能を持つWebAPIの作成が完了しました！

## 演習
以下の演習問題は、`hello.go`内の`// Read機能以降はこの下に追記していきます`の部分の下に追記してください。
1. HTTP GETで`/tweets/:id`にアクセスすると、IDが:idのツイートを取得するWebAPIを作成してみましょう。
2. `Like`機能を追加してみましょう。
　　- まず、構造体・スライスに`Likes int`を追加します。
   - 次に、`/tweets/:id/like`にアクセスすると、IDが:idのツイートの`Likes`を+1するWebAPIを作成してみましょう。