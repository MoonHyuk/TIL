# Go

## 목차

- [반복문](#반복문)

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