# Python

## 목차

- [s = s[::-1] vs s[:] = s[::-1]](#s--s-1-vs-s--s-1)
- [collections](#collections)

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