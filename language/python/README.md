# Python

## 목차

- [s = s[::-1] vs s[:] = s[::-1]](#s--s-1-vs-s--s-1)
- [collections](#collections)
- [불변객체](#불변객체)
- [바다코끼리 연산자](#바다코끼리-연산자)

## s = s[::-1] vs s[:] = s[::-1]

`파이썬 알고리즘 인터뷰` 라는 책을 읽다가

```python
s = s[::-1]
```

이 구문과

```python
s[:] = s[::-1]
```

이 구문이 다르다는 것을 알게되었다.

둘 다 기존 배열의 순서를 뒤집는 것은 같으나 leetcode라는 사이트에서 첫 번째 구문으로 쓰면 틀린 게 되고 두 번째 구문으로 쓰면 정답이 되는 상황이었다. 하지만 책에서 추가적인 설명이 없어 간단히 더 알아보았다.

```python
print(id(s))  # 140338575382464

s = s[::-1]

print(id(s))  # 140338575384512
```

첫 번째 구문은 배열을 새로 만들고 s 변수에 재할당을 하여 메모리 주소가 바뀌었다. leetcode 문제 조건에서 공간 복잡도를 `O(1)`로 사용하라 했는데 다른 공간을 더 사용했으므로 오답이 된 것이다.

```python
print(id(s))  # 140707976918720

s[:] = s[::-1]

print(id(s))  # 140707976918720
```

두 번쨰 구문은 반면에 메모리 주소가 바뀌지 않았다. 이 땐 배열이 새로 만들어지지 않고 s안의 값들만 변했다. 아마 아래 코드처럼 동작한 걸로 보인다.

```python
s[0], s[1], s[2] = s[::-1]  # (s의 크기가 3이라고 가정함)
```

비슷한 원리로 이렇게 쓰는 것도 가능하다.

```python
s[::-1] = s
```

## collections

### defaultdict

`defaultdict`는 `dict`를 확장한 것인데 키에 값들을 명시적으로 넣지 않아도 기본값을 넣어주어 `KeyError`가 나는 문제를 예방해준다.

예를들어 그냥 `dict`인 경우엔 아래 코드는 오류가 난다.

```python
# 문제의 코드

d = {}

print(d["key1"]) # KeyError: key1
print(d["key2"])
```

이를 예방하기 위해 if 문으로 검사하거나 `setdefault`를 사용하곤 한다.

```python
# if 문을 사용한 해결방법

if "key1" not in d:
    d["key1"] = 0
if "key2" not in d:
    d["key2"] = 0

print(d["key1"]) # 0
print(d["key2"]) # 0
```

```python
# setdefault를 사용한 해결방법

print(d.setdefault("key1", 0)) # 0
print(d.setdefault("key2", 0)) # 0
```

`defaultdict`를 사용하면 조금 더 간단하게 해결 가능하다.

```python
# defaultdict를 사용한 해결방법

from collections import defaultdict

d = defaultdict(int)

print(d["key1"]) # 0
print(d["key2"]) # 0
```

`defaultdict`의 첫번째 인자에는 타입을 쓴다. 그 타입에 따라 기본값이 적절히 들어간다.

```python
# 인자에 따라 달라지는 기본값

d1 = defaultdict(int)
print(d1["key1"]) # 0

d2 = defaultdict(float)
print(d2["key1"]) # 0.0

d3 = defaultdict(str)
print(d3["key1"]) # ""

d4 = defaultdict(list)
print(d4["key1"]) # []

d5 = defaultdict(tuple)
print(d5["key1"]) # ()

d6 = defaultdict(set)
print(d6["key1"]) # set()

```

## 불변객체

파이썬은 원시 타입이 없고 모든 것이 객체다. 객체는 값을 바꿀 수 있는지에 따라 불변객체와 가변객체로 나뉜다. 파이썬에선 `int`, `str`, `tuple` 등이 불변객체이고 `list`, `dict`, `set` 등이 가변객체이다. 

`int`와 `str`이 불변객체라는 건 조금 의아하다. 

```python
# int 객체가 바뀐거 같은데?

a = 10

a = a + 1
```

위 코드를 보면 `int` 객체인 `a`의 값이 바뀐 것 처럼 보인다. 하지만 사실은 `a` 객체의 값이 바뀐 게 아니라 `a`에 새로운 객체가 할당된 것이다. 이건 객체의 유니크 id를 반환하는 `id` 함수를 실행해보면 알 수 있다.

```python
# 객체 a의 id가 바뀌었다.

a = 10
print(id(a)) # 2805026155088

a = a + 1
print(id(a)) # 2805026155120
```

`a = 10`이라는 구문은 `10`을 나타내는 객체를 만들고, `a`가 `10`객체를 참조하게 만든다.

`a = a + 1`이라는 구문은 `11`을 나타내는 객체를 만들고, `a`가 `11`객체를 참조하게 만든다. 따라서 위 코드 어디에도 객체의 값이 바뀌는 건 없다.

```python
# 불변객체는 값이 같으면 id가 같다

a = 10
b = a

print(id(10)) # 2805026155088
print(id(a))  # 2805026155088
print(id(b))  # 2805026155088


# id가 같기 때문에 마치 b를 수정하면 a도 수정되는 걸로 오해할 수 있겠지만
# b = b + 1 구문은 b에 새로운 객체를 재할당하기 때문에 a는 그대로이다.
b = b + 1

print(a) # 10
print(b) # 11
```

## 바다코끼리 연산자

바다코끼리 연산자는 버전 `3.8`에 새롭게 추가되었으며 `:=` 이렇게 생긴 연산자이다. 생긴 모양이 바다코끼리가 옆으로 누운 모습같아서 바다코끼리 연산자라고 이름이 붙여졌다.

`:=` 연산자가 어떨 때 쓰이는지는 아래 예시를 보면 이해가 쉽다.

```python
# 문제의 코드

if f(x) > 10:
    print(f(x)) # f(x)를 두 번 호출하게 됨.
```

```python
# f(x) 중복 호출을 방지하기 위해 값을 변수에 담아두었다.
# 하지만 한 줄이 더 늘었다.

y = f(x)
if y > 10:
    print(y)
```

```python
# 이런 상황에서 := 연산자를 사용하면 줄이 추가되지 않아도 된다!

if (y := f(x)) > 10:
    print(y)
```

또 `:=`연산자를 사용하여 중첩 `if`문을 하나의 `if`문으로 바꿀 수 있는 경우도 있다.

아래 예시들은 [PEP 572](https://www.python.org/dev/peps/pep-0572)에서 가져왔다.

예시1)
```python
# 고치기 전 코드

diff = x - x_base
if diff:
    g = gcd(diff, n)
    if g > 1:
        return g

```

```python
# := 연산자를 사용하여 고친 코드

if (diff := x - x_base) and (g := gcd(diff, n)) > 1:
    return g
```

예시2)
```python
# 고치기 전 코드

reductor = dispatch_table.get(cls)
if reductor:
    rv = reductor(x)
else:
    reductor = getattr(x, "__reduce_ex__", None)
    if reductor:
        rv = reductor(4)
    else:
        reductor = getattr(x, "__reduce__", None)
        if reductor:
            rv = reductor()
        else:
            raise Error("un(shallow)copyable object of type %s" % cls)

```

```python
# := 연산자를 사용하여 고친 코드

if reductor := dispatch_table.get(cls):
    rv = reductor(x)
elif reductor := getattr(x, "__reduce_ex__", None):
    rv = reductor(4)
elif reductor := getattr(x, "__reduce__", None):
    rv = reductor()
else:
    raise Error("un(shallow)copyable object of type %s" % cls)
```
