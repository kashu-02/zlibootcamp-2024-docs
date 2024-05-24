---
title: WebAPI入門
description: WebAPI入門
---

前回の講義では、Go言語の基本的な文法について学びました。
今回からはWebAPIの作成について学んでいきます。

この講義では、Twitterクローンの作成を目標に、WebAPIの作成方法を学びます。

## WebAPIとは
WebAPIとは、[HTTPプロトコル](lec01/01-web/#httpとは)を使ってネットワークを通して情報をやり取りするためのAPIのことです。
API(Application Programming Interface)とは、アプリケーション同士が情報をやり取りするためのインターフェースのことです。
APIが提供されることで、他のアプリケーションがその中身を知らなくても情報をやり取りすることができます。

つまり、あるURLにHTTPリクエストを送信することでサーバの情報を書き換えたり、情報を取得することができるシステムで、プログラムからアクセスして利用します。

この講義では、Go言語を使ってWebAPIを作成する方法を学びます。

現在、多種多様なWebサービスがWebAPIを提供しています。
- [Google Calendar API](https://developers.google.com/calendar)
- [Google Drive API](https://developers.google.com/drive)
- [Google Translation API](https://cloud.google.com/translate)
- [LINE Messaging API](https://developers.line.biz/ja/docs/messaging-api/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [OpenAI API(ChatGPT)](https://beta.openai.com/docs/)

## RESTful API
WebAPIは、REST(Representational State Transfer)という設計原則に従って設計されることが一般的です。
RESTの設計原則は抽象的なものであり、RESTの設計原則に従っているWebAPIをRESTful APIと呼びます。

RESTful APIの特徴は以下の通りです。
- リソース指向: URLでリソースを指定する
- HTTPメソッド: HTTPメソッドを使ってリソースに対する操作を行う
- ステートレス: セッション情報を持たない

### リソース指向
RESTful APIでは、データや機能を「リソース」と呼び、これをURL（ウェブアドレス）を使って指定します。例えば、ユーザー情報を扱うAPIでは、/usersというURLがユーザーリソースを表すことがあります。

例: https://api.example.com/users/123 というURLは、IDが123のユーザー情報を指します。

### HTTPメソッド
RESTful APIでは、HTTPメソッド（GET、POST、PUT、DELETEなど）を使ってリソースに対する操作を行います。それぞれのメソッドは特定の操作を意味します。

GET: データを取得する

POST: 新しいデータを作成する

PUT: 既存のデータを更新する

DELETE: データを削除する

例: GET /users/123 はIDが123のユーザー情報を取得し、DELETE /users/123 はそのユーザー情報を削除します。

### ステートレス
RESTful APIはステートレス（状態を持たない）です。つまり、各リクエストは独立しており、サーバーは前のリクエストの状態を覚えていません。必要な情報はリクエストごとに全て提供する必要があります。

例: ユーザーがログインする場合、各リクエストに認証情報を含める必要があります。


## 実際のWebAPIを見てみよう
実際に、OpenWeatherMap APIを使って天気情報を取得してみましょう。
OpenWeatherMap APIは、世界中の天気情報を[JSON形式](lec01/01-web/#jsonとは)で提供するAPIです。無料で登録するだけで利用できます。

### 事前準備: Postmanのインストール
Postmanは、WebAPIのテストやデバッグを行うためのツールです。Postmanを使うことで、WebAPIのリクエストを簡単に作成し、レスポンスを確認することができます。

1. [Postmanのダウンロード](https://www.postman.com/downloads/)ページにアクセスし、Postmanをダウンロードしてインストールします。
2. Postmanを起動し、アカウントを作成します。

### OpenWeatherMap APIの利用
1. [OpenWeatherMap API](https://openweathermap.org/api)にアクセスし、アカウントを作成します。
2. APIキーを取得します。APIキーは、APIを利用する際に必要な認証情報です。
3. Postmanを起動し、新しいリクエストを作成します。
4. リクエストURLに以下のURLを入力します。APIキーは、`{API_KEY}`の部分に取得したAPIキーを入力します。

```
https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid={API_KEY}
```

5. メソッドをGETに設定し、Sendボタンをクリックします。
6. レスポンスがJSON形式で表示されることを確認します。
