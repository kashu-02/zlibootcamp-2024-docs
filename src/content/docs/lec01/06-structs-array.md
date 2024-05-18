---
title: StructとArray
description: StructとArray
---

# StructとArray

## Struct
複数のデータをひとまとまりにして扱いたいとき、構造体(Struct)を使います。
例えば、人を表す構造体を定義すると以下のようになります。
```go
type Person struct {
    Name string
    Age  int
}
```
これを使うと、以下のように人の情報をまとめて扱うことができます。
```go
package main
import "fmt"
type Person struct {
    Name string
    Age  int
}
func main() {
    var p Person
    p.Name = "Alice"
    p.Age = 20
    fmt.Println(p.Name) // Alice
    fmt.Println(p.Age)  // 20
}
```
### 構造体に関数を定義する
構造体に関数を定義することもできます。
関数の定義にレシーバを指定することで、構造体に関数を定義できます。
```go
package main
import "fmt"
type Person struct {
    Name string
    Age  int
}
func (p Person) Say() {
    fmt.Println("Hello, my name is", p.Name)
}
func main() {
    var p Person
    p.Name = "Alice"
    p.Age = 20
    p.Say() // Hello, my name is Alice
}
```

## Array
同じ型を持つ値(要素)を並べて扱うために、配列(Array)を使います。
配列は、同じ型のデータを複数格納するためのデータ構造です。
配列は、以下のように定義します。
```go
var a [5]int // [5]intは、5つの整数型の要素を持つ配列
var b [3]int = [3]int{1, 2, 3} // 3つの整数型の要素を持つ配列で、初期値を指定
c := [5]int{1, 2, 3, 4, 5} // 5つの整数型の要素を持つ配列で、初期値を指定。要素数を省略
```
配列の要素には、以下のようにアクセスします。
[]内の数値をインデックスといい、0から始まります。
```go
a[0] = 1
a[1] = 2
a[2] = 3
a[3] = 4
a[4] = 5
```
配列の要素数は、`len`関数で取得できます。
```go
fmt.Println(len(a)) // 5
```
配列の要素数は、定数であるため、実行時に変更することはできません。
```go
a[5] = 6 // エラー: index out of range
```

## Slice
配列の要素数を動的に変更できるようにしたものがスライス(Slice)です。
スライスは、以下のように定義します。
```go
var a []int // int型の要素を持つスライス
b := []int{1, 2, 3} // int型の要素を持つスライスで、初期値を指定
```
スライスの要素には、配列と同様にアクセスします。
```go
a := []int{1, 2, 3, 4, 5}
fmt.Println(a[0]) // 1
fmt.Println(a[1]) // 2
fmt.Println(a[2]) // 3
fmt.Println(a[3]) // 4
fmt.Println(a[4]) // 5
```
スライスの要素数は、`len`関数で取得できます。
```go
fmt.Println(len(a)) // 5
```
スライスの要素数は、動的に変更できます。
```go
a = append(a, 6)
fmt.Println(a) // [1 2 3 4 5 6]
```
スライスの一部を取り出すこともできます。
```go
fmt.Println(a[1:3]) // [2 3]
```

## 演習

1. (ex01-10.go) 以下のプログラムの穴を埋めてください。
```Go
package main
import "fmt"

type Person struct {
    // 名前
    // 年齢
}

func main() {
    // Person型のスライスを作成
    persons := []Person{
        // Alice, 20
        // Bob, 25
        // Charlie, 30
    }
    // スライスの要素を1つずつ取り出して、名前と年齢を出力
    for _, p := range persons {
        fmt.Println(, )
    }
}
```


