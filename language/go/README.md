# Go

## 목차

- [변수 선언](#변수-선언)
- [반복문](#반복문)
- [외부에 패키지 감추기](#외부에-패키지-감추기)

---

## 변수 선언

변수 선언은 `var 선언문` 또는 `짧은 변수 선언문`으로 할 수 있다.

### var 선언문

```go
// var 이름 타입

var a int
var s string
var li []int
```

`var 이름 타입` 꼴의 선언문은 자동으로 타입에 맞는 `제로 값`이 변수에 들어간다. 위의 예시에서 `a`에는 `0`이, `s`에는 빈 문자열 `""`이, `li`에는 빈 정수 배열 `[]`가 들어간다.

이렇게 `제로 값`으로 알아서 초기화를 해주기 때문에 `go` 언어에서는 초기화되지 않은 변수가 없다.

```go
// var 이름 = 표현식

var a = 1
var b = os.Args
```

`var 이름 = 표현식` 꼴의 선언문은 오른쪽 표현식이 반환하는 결과에 따라 자동으로 변수의 타입을 지정해준다. 위 예시에서 `a`는 `int`형이 되고, `b`는 `[]string`형이 된다.

```go
// var 이름1, 이름2, ..., 이름n 타입

var a1, a2, a3 int
```

`var 이름1, 이름2, ..., 이름n 타입` 꼴은 한번에 여러 변수를 선언하고 타입에 맞는 `제로 값`을 넣어준다. 위 예시에서 `a1`, `a2`, `a3`에는 모두 0이 들어간다.

```go
// var 이름1, 이름2, ..., 이름n = 표현식

var f, err = os.Open(name)
```

`var 이름1, 이름2, ..., 이름n = 표현식` 꼴은 표현식의 반환값에 따라 여러개의 변수의 타입을 자동으로 지정해준다. 위 예시에서 `f`는 `*os.File` 타입으로, `err`는 `error` 타입으로 선언된다.

---

## 반복문

go 언어에서 반복문은 `for` 문만 있다. 하지만 `for` 문 만으로도 다양한 반복문을 표현할 수 있다.

```go
// 기본적인 for 문

for i := 0; i < 10; i ++ {
	fmt.Println(i)
}
```

```go
// while 문 처럼 동작하는 for 문

i := 0
for i < 10 {
	fmt.Println(i)
	i++
}
```

```go
// 무한 루프

i := 0
for {
	fmt.Println(i)
	i++
}
```

```go
// for range 문

s := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

for _, i := range s {
	fmt.Println(i)
}
```

---

## 외부에 패키지 감추기

Go 모듈을 작성하다 보면 여러 패키지로 분리해야 할 때도 있다. 예를들어 온라인 쇼핑몰 솔루션을 위해 `제품 관리 모듈`을 만든다고 해보자.  이 모듈은 여러 비즈니스 로직을 갖고 있는 `제품 엔티티 패키지`를 제공해야 한다. 제품 엔티티가 제대로 작동하려면 데이터를 저장하거나 불러오는 로직도 있어야 한다. 데이터 접근 로직이 비즈니스 로직을 더럽히는 것이 싫어 `저장소 패키지`를 따로 만들었다. 

```
my-module/
  product/
    product.go
  repository/
    model.go
    repository.go
```

하지만 여기서 문제가 생긴다. 외부 모듈에서 `제품 엔티티 패키지` 뿐 만 아니라 `저장소 패키지`도 접근이 가능해진다. 

```go
import "github.com/xxxx/my-module/product" // 가능
import "github.com/xxxx/my-module/repository" // 가능
```

저장소 관련 로직은 너무 세부사항이기 때문에 외부에 알려지는 게 좋지 않다. `저장소 패키지`의 변수와 함수들을 export 하지 않으면 되지 않을까 잠깐 생각해봤지만, 그러면 `제품 엔티티 패키지`에서도 `저장소 패키지`를 사용할 수 없다.

이럴 때 사용하는 것이 `internal` 폴더이다.

```
my-module/
  product/
    product.go
  internal/
    repository/
      model.go
      repository.go
```

외부에 공개하고 싶지 않은 패키지들을 `internal` 폴더 아래에 배치하면, 같은 모듈 내에선 그 패키지를 불러올 수 있지만 외부에선 접근이 불가능하다.

```go
import "github.com/xxxx/my-module/product" // 가능
import "github.com/xxxx/my-module/internal/repository" // 불가능
```