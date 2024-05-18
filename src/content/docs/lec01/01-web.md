---
title: Web概論
description: Web概論
---
### Webとは
Webは、World Wide Webの略で、インターネット上に存在する情報を閲覧するためのシステムです。
Webは、複数のWebページがリンクされていることで、ハイパーテキストとして構成されています。
ハイパーテキストとしてリンクされているWebページの集まりがまるでクモの巣のように広がっていることから、世界規模のクモの巣、World Wide Web、略してWebと名付けられました。

### HTML
HTML(HyperText Markup Language)は、Webページを作成するための言語(マークアップ言語)です。
HTMLは、タグという記号を使って、テキストや画像、リンクなどの要素を記述します。
HTMLは、ブラウザによって解釈され、Webページとして表示されます。

### 静的サイトと動的サイト
Webサイトは、静的サイトと動的サイトに大別されます。
静的サイトは、HTMLやCSS、JavaScriptなどのファイルをWebサーバに配置しておき、ユーザがアクセスするとそのままのファイルが返されるサイトです。
1990年代や2000年代の初めには、静的サイトが主流でした。
静的サイトの例
http://abehiroshi.la.coocan.jp/

一方、動的サイトは、ユーザのリクエストに応じてサーバ側で処理を行い、その結果を返すサイトです。
動的サイトは、ユーザの操作に応じて表示内容を変えたり、データベースにアクセスして情報を取得したりします。
Webアプリケーションとも呼ばれます。
動的サイトの例
https://www.amazon.co.jp/
https://youtube.com/
https://calendar.google.com/

### フロントエンドとバックエンド
Webアプリケーションは大きく分けて、以下の3つの部分から構成されます。
- フロントエンド
- バックエンド
- データベース

#### フロントエンド
フロントエンドは、ブラウザに表示されるユーザが直接操作する部分です。 HTML、CSS、JavaScriptを使って構成・装飾・動作を実装します。
ユーザーからの入力を受け取り、バックエンドに送信したり、バックエンドからのデータを受け取って表示する役割を持ちます。
クライアント・WebUIとも呼ばれます。

#### バックエンド
バックエンドは、フロントエンドからのリクエストを受け取り、データベースから情報を取得したり、処理を行ったりして、結果をフロントエンドに返す部分です。
画像のアップロードや、ユーザーの認証、決済処理など、セキュリティやパフォーマンスを考慮した処理を行います。
サーバ・サーバサイドとも呼ばれます。

#### データベース
データベースは、Webアプリケーションで使用するデータを永続的に保存・検索・更新するためのものです。

### Webサイトが表示されるまで
上述のフロントエンド、バックエンド、データベースの役割を踏まえて、Webサイトが表示されるまでの流れを簡単に説明します。

### URIとは
URI(Uniform Resource Identifier)は、Web上の資源(リソース)を一意に識別するための文字列です。
もっとも有名なURIの種類がURL(Uniform Resource Locator)です。
URLは、Web上のリソースの場所を示すための文字列です。Web上の住所のようなものです。
URLは、スキーム、ドメイン名、ポート番号、パス、クエリ、フラグメントの6つの要素から構成されます。
例として、以下のURLを見てみましょう。
```
https://u-aizu.ac.jp/information/post-20240140.html
```
このURLは、会津大学のWebサイトにある、あるページを指し示しています。
- スキーム: https
httpsというスキーム(プロトコル名)を使って通信を行うことを示しています。
- ドメイン名: u-aizu.ac.jp
u-aizu.ac.jpというドメイン名を持つWebサイトを指し示しています。
- パス: /information/post-20240140.html
/information/post-20240140.htmlというパスを持つページを指し示しています。

```
https://www.google.com/search?q=uaizu
```
このURLは、Googleの検索結果ページを指し示しています。
- スキーム: https
httpsというスキーム(プロトコル名)を使って通信を行うことを示しています。
- ドメイン名: www.google.com
www.google.comというドメイン名を持つWebサイトを指し示しています。
- パス: /search
/searchというパスを持つページを指し示しています。
- クエリ: q=uaizu
q=uaizuという情報をサーバーに渡します。


### HTTPとは
フロントエンド・バックエンドでデータのやり取りをおこなうために、コミュニケーションの方法・手順を定めなければなりません。
HyperText Transfer Protocol(HTTP)は、Web上、とくにフロントエンドとバックエンド間でデータをやり取りするための通信規約(プロトコル)のひとつです。
これは、どんな機器・言語・OS同士でも通信ができるよう、厳密に定義されています。[RFC9112](https://tex2e.github.io/rfc-translater/html/rfc9112.html)

#### HTTPリクエスト
フロントエンドがバックエンドにリクエストを送る際、HTTPリクエストを送ります。
HTTPリクエストは、以下の要素から構成されます。
HTTPリクエストは以下の構造になっています。
```
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0
Accept: text/html
```
1行目は、リクエストラインです。リクエストラインは、リクエストの種類(GET)、リクエストするリソース(/index.html)、HTTPのバージョン(HTTP/1.1)から構成されます。
2行目以降は、ヘッダーです。ヘッダーは、リクエストに関する情報を含んでいます。Host、User-Agent、Acceptなどがヘッダーの例です。

##### HTTPメソッド
HTTPリクエストのリクエストラインには、HTTPメソッドが含まれます。
HTTPメソッドは、リクエストの種類を示すもので、以下のようなものがあります。
- GET: リソースの取得
- POST: リソースの作成
- PUT: リソースの更新
- DELETE: リソースの削除
- PATCH: リソースの部分更新

#### HTTPレスポンス
HTTPリクエストを送り、バックエンドが返信する際、HTTPレスポンスを返します。
HTTPレスポンスは、以下の要素から構成されます。
```
HTTP/1.1 200 OK
Date: Sun, 09 Jan 2022 00:00:00 GMT
Server: Apache/2.4.38 (Debian)
Last-Modified: Sun, 09 Jan 2022 00:00:00 GMT
Content-Type: text/html
Content-Length: 438

<html>
<head>
  <title>Example</title>
</head>
<body>
  Hello World
</body>
</html>
```
1行目は、ステータスラインです。ステータスラインは、HTTPのバージョン(HTTP/1.1)、ステータスコード(200)、ステータスメッセージ(OK)から構成されます。
2行目以降は、ヘッダーです。ヘッダーは、レスポンスに関する情報を含んでいます。Date、Server、Last-Modified、Content-Type、Content-Lengthなどがヘッダーの例です。
空行を挟んで、本文が続きます。本文は、HTMLや画像、JSONなどのデータが含まれます。

##### HTTPステータスコード
HTTPレスポンスのステータスラインには、HTTPステータスコードが含まれます。
HTTPステータスコードは、リクエストの結果を示す3桁の数字で、以下のようなものがあります。
- 1xx: 情報レスポンス
- 2xx: 成功レスポンス
- 3xx: リダイレクト
- 4xx: クライアントエラー
- 5xx: サーバエラー
- その他: その他のステータス
主なステータスコードは以下のようなものがあります。
- 200: OK リクエストが成功した
- 301: Moved Permanently リソースが移動した
- 400: Bad Request リクエストが不正である
- 401: Unauthorized 認証が必要である
- 403: Forbidden アクセスが拒否された
- 404: Not Found リソースが見つからない
- 500: Internal Server Error サーバ内部エラーが発生した
- 503: Service Unavailable サービスが利用できない

#### 会津大学のホームページのHTTPリクエストとHTTPレスポンスを見てみよう！
ターミナル(Windowsの場合はWSLのターミナル)を開いて、以下のコマンドを実行してください。
```bash
curl --verbose https://u-aizu.ac.jp/ 1> /dev/null
```
curlコマンドは指定したURLにリクエストを送信し、レスポンスを表示するコマンドです。
--verboseオプションを指定することで、リクエストを送信してからレスポンスを受信するまでのステップを表示します。
`Trying 150.31.244.160:443`, `TLS handshake`, `SSL Connection`などのメッセージのしたに、HTTPリクエストとHTTPレスポンスが表示されます。
これらのメッセージについて今回は詳しく説明しませんが、気になった方は調べてみてください。

### JSONとは
JSON(JavaScript Object Notation)は、データを表現するための軽量なデータ交換フォーマットです。
名前にJavaScriptとついているとおりJavaScriptの歴史と深い関係がありますが、単純な形式であることから、多くのプログラミング言語間でのデータの受け渡しで利用されています。
JSONの例
```json
{
  "name": "Alice",
  "age": 20,
  "hobbies": ["reading", "cooking", "traveling"],
  "address": {
    "country": "Japan",
    "city": "Tokyo"
  },
  "isStudent": true
}
```