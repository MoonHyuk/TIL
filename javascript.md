## 목차

- [var vs let](#var-vs-let)
- [유용한 Array 메소드](#유용한-Array-메소드)
- [Arrow Functions](#Arrow-Functions)
- [Promises, Async/Await](#Promises-AsyncAwait)
- [Destructuring assignment](#Destructuring-assignment)

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

## Promises, Async/Await

### Promises

```js
const p1 = fetch("https://cat-fact.herokuapp.com/facts");

console.log("hi!");
```

Javascript의 `fetch` 함수는 비동기로 실행되고 `Promise`를 반환한다.  
fetch가 완료되기 전에 `hi`가 먼저 출력된다.

```js
const useThen = () => {
  p1.then((res) => res.json()).then((json) => {
    console.log(json);
  });
};
```

fetch 함수의 결과를 받고 싶다면 `.then()`, `.catch()`, `.finally()`를 사용한다.

### Await/Async

`.then`대신에 `async/await`을 사용할 수도 있다.  
`async/await`을 사용하면 몇가지 장점이 있다.

1. 가독성

   ```js
   const useAwait = async () => {
     const res = await p1;
     const json = await res.json();
     console.log(json);
   };
   ```

   위의 `useThen`과 같은 동작을 하는 코드이지만 더 보기 쉽다.  
    특히 이전 비동기 코드의 결과를 사용해 또 다른 비동기 호출을 해야할 때 `async/await`을 사용하면 더 읽기 쉬운 코드를 쓸 수 있다.

   ```js
   // 읽기 어렵다
   const useThen = () => {
     p1.then((res) => res.json()).then((json) => {
       const firstId = json["all"][0]._id;
       fetch("https://cat-fact.herokuapp.com/facts/" + firstId)
         .then((res) => res.json())
         .then((json) => {
           console.log(json);
         });
     });
   };

   // 읽기 쉽다
   const useAwait = async () => {
     const res = await p1;
     const json = await res.json();
     const firstId = json["all"][0]._id;

     const res2 = await fetch(
       "https://cat-fact.herokuapp.com/facts/" + firstId
     );
     const json2 = await res2.json();
     console.log(json2);
   };
   ```

2. 예외 처리

   ```js
   const useThen = () => {
     try {
       // ...
       p1.then((res) => res.json())
         .then((json) => console.log(json))
         .catch((e) => console.log("error occurs inside promise. " + e));
     } catch (e) {
       console.log("error outside promise. " + e);
     }
   };
   ```

   `.then()`을 사용할 경우 Promise 내부에서 발생한 오류는 `.catch()`를 통해 처리해야한다.
   하지만 `.catch()`로는 Promise 외부에서 발생한 오류는 잡을 수 없으므로, 그를 위해선 별도의 `try/catch`문을 사용해야 한다.

   위의 코드는 누가봐도 복잡해 보인다.

   ```js
   const useAwait = async () => {
     try {
       // ...
       const res = await p1;
       const json = await res.json();
       console.log(json);
     } catch (e) {
       console.log("error occurs " + e);
     }
   };
   ```

   `async/await`로는 하나의 `try/catch`문으로 Promise 내부와 외부의 오류를 잡아낼 수 있다.

---

## Destructuring assignment

한국어로는 `구조 분해 할당`이라고 한다.

### 배열 구조 분해

```js
let [one, two, three] = [1, 2, 3];

console.log(one, two, three); // 1 2 3
```

선언부와 분리할 수도 있다.

```js
let one, two;

[one, two] = [1, 2, 3];

console.log(one, two); // 1 2 3
```

만약 변수의 수가 배열의 크기보다 크다면 남은 변수들은 undefined가 된다.  
undefined가 나오는 걸 원치 않을 땐 default를 지정할 수도 있다.

```js
let [one, two] = [1];

console.log(one, two); // 1 undefined

let [three, four = 4] = [3];

console.log(three, four); // 3 4
```

특정 값들을 무시하고 싶을 땐 `,`를 추가한다.

```js
let [one, , three] = [1, 2, 3];

console.log(one, three); // 1 3
```

배열 구조 분해를 사용하면 swap이 쉬워진다.

```js
let one = 1;
let two = 2;
let three = 3;

[one, two, three] = [three, one, two];

console.log(one, two, three); // 3 1 2
```

### 객체 구조 분해

```js
const person = {
  name: "moon",
  favorites: {
    color: "black",
    tvShow: "Mr. robot",
  },
};

const {
  name,
  favorites: { tvShow },
} = person;

console.log(name); // moon
console.log(tvShow); // Mr. robot
```

선언부와 분리할 수도 있다. 단, 이때는 앞뒤로 괄호로 닫아줘야 한다.  
(괄호 전에 세미콜론이 없다면 함수 호출로 인식되니 주의하자.)

```js
let name, tvShow;

({
  name,
  favorites: { tvShow },
} = person);
```

속성이 없을수도 있을 땐 기본값을 지정해주면 된다.

```js
const { name, education: { univ = "Blah Blah" } = {} } = person;

console.log(name); // moon
console.log(univ); // Blah Blah
```

객체 속성과 다른 이름으로 변수를 만들 수도 있다.

```js
const { name: userName } = person;

console.log(userName);
```

객체를 인자로 받는 함수를 만드는 경우, 객체 속성들의 기본값을 지정해줄 때 매우 편리해진다.

```js
// 코드 출처: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? "big" : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
  // 이제 드디어 차트 그리기 수행
}

function drawES2015Chart({
  size = "big",
  cords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, cords, radius);
  // 차트 그리기 수행
}
```

---
