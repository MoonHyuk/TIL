## 목차
- [var vs let](#var-vs-let)
- [Arrow Functions](#Arrow-Functions)
- [Promises](#Promises)

## var vs let

### var의 문제점과 let이 이를 해결하는 방법

- 중복 선언 가능
    ```js
    var a = 1;
    // ...
    var a = 10;
    console.log(a); // 10
    ```
    실수로 이미 위에서 선언된 변수 이름을 다시 선언할 수 있다.  
    `let`을 사용할 경우엔 에러가 발생한다.
    ```js
    let a = 1;
    // ...
    let a = 10; // error: unknown: Identifier 'a' has already been declared
    ```

- 호이스팅
    ```js
    console.log(a); // undefined

    var a = 10;
    ```
    위 코드는 사실 이렇게 동작한다.
    
    ```js
    var a;

    console.log(a); // undefined

    a = 10;
    ```
    var로 변수를 선언할 경우 선언부를 가장 위로 올려버린다. 이를 호이스팅이라 한다.  
    아직 선언되지 않는 변수를 사용하려 할 때 undefined가 되는 것 보단 에러가 나는게 낫다.  
    `let`을 사용할 경우엔 ReferenceError가 발생한다.
    ```js
    console.log(a); // error: Uncaught ReferenceError: Cannot access 'a' before initialization

    let a = 10;
    ```

- 넓은 스코프
    ```js
    var a = 1;
    // ...
    if (true) {
      var a = 10;
    }

    console.log(a); // 10
    ```
    if 문 안에서 새로운 변수를 만든 것 처럼 보이지만 사실은 if문 밖에 있는 a가 바뀌었다.  
    `let`을 사용하면 if 블록 안에서 새로운 변수를 만든다.
    ```js
    let a = 1;
    // ...
    if (true) {
      let a = 10;
    }

    console.log(a); // 1
    ```

    `let`의 스코프는 블록 단위이다. 아래처럼도 된다.
    ```js
    let a = 1;

    {
      let a = 3;
    }

    console.log(a); // 1
    ```

## Arrow Functions

## Promises
