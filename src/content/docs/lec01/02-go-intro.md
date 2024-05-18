---
title: Go言語の基礎
description: Go言語の基礎
---

この講座では、プログラミング言語として人気が高く、特にバックエンド開発において多くの企業で採用されているGo言語を学びます。

## Go言語とは
Go言語は、Google社が開発したプログラミング言語です。
2009年にリリースされ、現在では多くの企業で採用されています。
Go言語は、C言語のような低レベル言語のパフォーマンスと、Pythonのような高レベル言語の使いやすさを兼ね備えており、バックエンド開発に適しています。

## Hello, World!
Go言語でHello, World!を出力するプログラムを書いてみましょう。

```go
package main
import "fmt"
func main() {
    fmt.Println("Hello, World!") // Hello, World!を出力。文字列はダブルクォーテーションで囲みます。
}
```
`go run main.go`と実行すると、Hello, World!が出力されます。
```Bash
$ go run main.go
Hello, World!
```
ここで用いる`fmt.Println`はGo言語が標準で用意している命令(関数)のひとつです。()内文字列をコンソールに出力する命令です。
プログラミングでは、このように命令(関数)を組み合わせてプログラムを作成します。

## 四則演算
Go言語では文字列だけではなく、数値も扱うことができます。また、四則演算をすることもできます。
掛け算は`*`、割り算は`/`、剰余は`%`を使います。
```go
package main
import "fmt"
func main() {
    fmt.Println(1 + 2) // 1 + 2 = 3
    fmt.Println(3 - 1) // 3 - 1 = 2
    fmt.Println(2 * 3) // 2 * 3 = 6
    fmt.Println(6 / 2) // 6 / 2 = 3
    fmt.Println(7 % 3) // 7 / 3 の余り = 1
}
```
Go言語に限らず、プログラミング言語では文字列と数値などそれ以外を区別して扱います。数値を扱う際は、`"`で囲まないことに注意しましょう。

## 文字列の連結
Go言語では、文字列を連結することができます。
数値に対して`+`を使うと足し算を実行しますが、文字列に対して使うと文字列を連結します。
```go
package main
import "fmt"
func main() {
    fmt.Println("Hello, " + "World!") // Hello, World!
}
```

## 変数
変数とは、データを格納するための箱のようなものです。変数にはデータを格納することができます。
Go言語では、変数を宣言する際に`var`を使います。
```go
package main
import "fmt"
func main() {
    var message string // messageという変数を宣言
    message = "Hello, World!" // messageに"Hello, World!"を代入
    fmt.Println(message) // Hello, World!
}
```
### 変数と型
Go言語では、すべての変数は何らかの型に属します。
型を指定することで、プログラミングの生産性や安全性を高めたり、型を有効に使って実行効率やメモリ効率を向上できます。
上記の例では、`var message string`として、`message`という変数の型を`string`(文字列)として指定しています。
Go言語の基本的な型は以下のようになります。
- `int`: 整数
- `float64`: 浮動小数点数(小数)
- `string`: 文字列
- `bool`: 真偽値(true: 真、false: 偽)
- `byte`: バイト(8ビットの符号なし整数)
- `nil`: ヌル(ニル)
- `error`: エラー

```Go
package main
import "fmt"
func main() {
    var number int // numberという変数を宣言
    number = "Hello, World!" // エラー。型が異なるため代入できない
}
```
#### 変数の初期化
変数を宣言する際に、初期値を代入することもできます。
```Go
package main
import "fmt"
func main() {
    var message string = "Hello, World!" // messageという変数を宣言し、"Hello, World!"を代入
    fmt.Println(message) // Hello, World!
}
```
Go言語では、変数の型を省略して初期値を代入することもできます。
```Go
package main
import "fmt"
func main() {
    var height = 12.34 // 初期値からfloat64型として推論
    fmt.Println(height) // 12.34
}
```
また、`:=`を使って変数を宣言することもできます。この場合、変数の型を省略できます。
```Go
package main
import "fmt"
func main() {
    isValid := true
    fmt.Println("Status: " + isValid) // Status: true
}
```

#### 変数の再代入
一度宣言した変数には、再代入することができます。
```Go
package main
import "fmt"
func main() {
    message := "Hello, World!"
    fmt.Println(message) // Hello, World!
    
    message = "Goodbye, World!"
    fmt.Println(message) // Goodbye, World!
}
```
ただし、異なる型の値を代入することはできません。
```Go
package main
import "fmt"
func main() {
    message := "Hello, World!"
    fmt.Println(message) // Hello, World!
    
    message = 123 // エラー。型が異なるため代入できない
}
```

## 演習
1. (ex01-1.go) 以下のプログラムを実行して、`Hello, World!`が出力されることを確認してください。
```Go
package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}
```

2. (ex01-2.go) 以下のプログラムの穴を埋めて、正しい計算結果が出力されるようにしてください。
```Go
package main
import "fmt"
func main() {
    a := 3
    b := 5
    fmt.Println("a + b = " + ) // 8
    fmt.Println("a - b = " + ) // -2
    fmt.Println("a * b = " + ) // 15
    fmt.Println("a / b = " + ) // 0
    fmt.Println("a % b = " + ) // 3
    fmt.Printlm("aの2乗 = " + ) // 9
}
```