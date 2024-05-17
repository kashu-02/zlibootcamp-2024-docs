---
title: aa
description: aa
---

# 条件分岐
ある条件にあてはまるかどうかで処理を分岐させることができます。
## if文
条件分岐は、`if`文を使って行います。

```go
package main
import "fmt"
func main() {
    x := 10
    if x > 5 {
        fmt.Println("xは5より大きい")
    }
}
```

### 条件式
ifの後ろ、上の例では`x > 5`の部分を条件式といいます。
条件式は、真偽値(`true`または`false`)を返す式です。
以下の比較演算子と論理演算子を使ってif文の条件式を書きます。
#### 比較演算子
- `==`: 等しい
- `!=`: 等しくない
- `<`: より小さい
- `<=`: 以下
- `>`: より大きい
- `>=`: 以上
#### 論理演算子
- `&&`: かつ(AND)
- `||`: または(OR)
- `!`: でない(NOT)
また、`()`を使って条件式に順序をつけることもできます。
```go
package main
import "fmt"
func main() {
    x := 10
    if x == 10 {
        fmt.Println("xは10")
    }
    if x > 5 {
        fmt.Println("xは5より大きい")
    }
    if x >= 10 {
        fmt.Println("xは10以上")
    }
    if x > 5 && x < 20 {
        fmt.Println("xは5より大きく、20より小さい")
    }
    if x < 5 || x > 20 {
        fmt.Println("xは5未満または20より大きい")
    }
    if !(x == 5) {
        fmt.Println("xは5ではない")
    }
}
```

### else
`if`文の条件式が`false`の場合、`else`以下の処理が実行されます。
```go
package main
import "fmt"
func main() {
    x := 3
    if x > 5 {
        fmt.Println("xは5より大きい")
    } else {
        fmt.Println("xは5以下")
    }
}
```

### else if
複数の条件を指定する場合、`else if`を使って条件を追加します。
```go
package main
import "fmt"
func main() {
    x := 3
    if x > 5 {
        fmt.Println("xは5より大きい")
    } else if x == 5 {
        fmt.Println("xは5")
    } else {
        fmt.Println("xは5未満")
    }
}
```

## switch
`if`文の条件分岐を簡潔に書くために、`switch`文を使うこともできます。
### if文で書く場合
```go
package main
import "fmt"
func main() {
    x := 3
    if x == 1 {
        fmt.Println("xは1")
    } else if x == 2 {
        fmt.Println("xは2")
    } else if x == 3 {
        fmt.Println("xは3")
    } else {
        fmt.Println("xは1, 2, 3以外")
    }
}
```
### switch文で書く場合
```go
package main
import "fmt"
func main() {
    x := 3
    switch x {
    case 1:
        fmt.Println("xは1")
    case 2:
        fmt.Println("xは2")
    case 3:
        fmt.Println("xは3")
    default:
        fmt.Println("xは1, 2, 3以外")
    }
}
```

## 演習
1. (ex01-3.go) 以下の要件を満たすプログラムをif文で作成してください。
   - xが3で割り切れる時、「Fizz」を出力する。
   - xが5で割り切れる時、「Buzz」を出力する。
   - xが3でも5でも割り切れる時、「FizzBuzz」を出力する。 
   - 上記以外の数値の場合、渡された数値をそのまま出力する。 
```go
package main
import "fmt"
func main() {
    x := 2354
    // ここにコードを書く
}
```

2. (ex01-4.go) 以下の要件を満たすプログラムをswitch文で作成してください。
   - scoreが90以上100以下の場合、「A」を出力する。
   - scoreが80以上90未満の場合、「B」を出力する。
   - scoreが70以上80未満の場合、「C」を出力する。
   - scoreが60以上70未満の場合、「D」を出力する。
   - scoreが60未満の場合、「F」を出力する。
   - それ以外の場合、「不正な値です」と出力する。
```go
package main
import "fmt"
func main() {
    score := 85
    // ここにコードを書く
}
```