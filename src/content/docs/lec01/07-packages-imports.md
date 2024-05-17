---
title: aa
description: aa
---

# PackagesとImports

Goのプログラムは、`package`で構成されます。
プログラムは、`main`パッケージから開始されます。

今までのプログラムは`main`パッケージに属し、`fmt`パッケージをインポートしていました。

```go
package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}
```

`fmt`パッケージは、標準パッケージであり、Go言語が提供する機能のひとつです。
このように、プログラムをパッケージによって分割し、必要なときにImportすることで、プログラムをわかりやすく保つことができます。
標準パッケージの使用方法は、[Goの標準パッケージ](https://golang.org/pkg/)を参照してください。

## 大文字と小文字
Go言語では、大文字で始まる名前と小文字で始まる名前で挙動が異なります。
大文字で始まる名前は、他のパッケージからもアクセス可能な公開された名前です。
小文字で始まる名前は、他のパッケージからアクセスできない非公開の名前です。
例えば、
```go
package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}
```
の`Println`は、大文字で始まる名前ですので、他のパッケージ(`main`)からもアクセス可能です。

