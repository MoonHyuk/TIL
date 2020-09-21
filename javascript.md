## 목차

- [var vs let](#var-vs-let)
- [유용한 Array 메소드](#유용한-Array-메소드)
- [Arrow Functions](#Arrow-Functions)
- [Promises](#Promises)

---

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

---

## 유용한 Array 메소드

### map

```js
const arr = [1, 2, 3];

const newArr = arr.map((val) => val * val);

console.log(newArr); // [1, 4, 9]
```

map은 arr를 순회하면서 인자로 넘겨준 함수를 실행하고, 그 함수의 반환값들로 새로운 Array를 만든다.

### reduce

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((acc, curr) => acc + curr)); // 15
```

```js
const arr2 = [1, 1, 2, 2, 2, 4, 5, 5, 7];

const count = arr2.reduce((acc, curr) => {
  if (curr in acc) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(count);
// {1: 2, 2: 3, 4: 1, 5: 2, 7: 1}
```

```js
const arr3 = [1, 1, 2, 2, 2, 4, 5, 5, 7];

const chunk = (arr, size) => {
  return arr.reduce(
    (acc, curr) => {
      const len = acc.length;
      if (acc[len - 1].length === size) {
        acc.push([curr]);
      } else {
        acc[len - 1].push(curr);
      }
      return acc;
    },
    [[]]
  );
};

console.log(chunk(arr3, 3));
// [
//    [1, 1, 2],
//    [2, 2, 4],
//    [5, 5, 7],
// ]
```

map은 항상 기존의 Array와 길이가 같은 Array를 반환하는 것과 달리, reduce는 좀 더 자유로운 반환값을 만들 수 있다.

### from

```js
const divs = document.querySelectorAll("div");

const divArr = Array.from(divs);
```

주어진 인자로부터 Array를 만든다. Array-Like Objects를 Array로 만드는데 사용할 수 있다.

### forEach

```js
const arr = [1, 2, 3];

arr.forEach((val) => {
  console.log(val);
});
// 1
// 2
// 3
```

Arr를 순회하면서 인자로 넘겨준 함수를 실행한다.  
forEach에서는 중간에 break할 수 없다. break를 원한다면 for문을 쓰자.

### filter

```js
const arr = ["cs101", "cs223", "cs411", "phy101", "ch101"];

const newArr = arr.filter((val) => val.indexOf("cs") > -1);

console.log(newArr); // ["cs101", "cs223", "cs411"]
```

arr를 순회하면서 인자로 넘겨준 함수를 실행하고, 그 함수의 반환값이 true인 값들만 모아 새로운 Array를 만든다.

---

## Arrow Functions

---

## Promises
