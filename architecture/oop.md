# OOP

## 다형성

객체지향에서 다형성이란 컴포넌트간 의존성을 제어할 수 있게 만드는 힘이다.

아래 예시를 보면 `main` 함수는 `Animal` 인터페이스에만 의존하며 `Cat` 또는 `Dog`에는 의존하지 않는다.  
`Animal`의 하위 클래스들이 [리스코프 치환 원칙](https://ko.wikipedia.org/wiki/%EB%A6%AC%EC%8A%A4%EC%BD%94%ED%94%84_%EC%B9%98%ED%99%98_%EC%9B%90%EC%B9%99)을 따른다면 `Cat` 또는 `Dog`이 수정되거나 또 다른 하위 동물 클래스가 생성된다 하더라도 `main`함수는 수정되지 않는다.

```java
abstract class Animal {
    abstract String talk();
}

class Cat extends Animal {
    String talk() {
        return "Meow!";
    }
}

class Dog extends Animal {
    String talk() {
        return "Woof!";
    }
}

static void main(String[] args) {
    /// ...
    // pet은 Dog일 수도 있고 Cat일 수도 있다.
    pet.talk();
}
```
