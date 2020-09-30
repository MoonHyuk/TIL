## 목차

- [var vs let](#var-vs-let)
- [유용한 String 메소드](#유용한-String-메소드)
- [유용한 Array 메소드](#유용한-Array-메소드)
- [Arrow Functions](#Arrow-Functions)
- [Promises, Async/Await](#Promises-AsyncAwait)
- [Destructuring assignment](#Destructuring-assignment)
- [Spread](#Spread)
- [Rest](#Rest)
- [Deep Clone](#Deep-Clone)
- [Set](#Set)
- [??](#Nullish-coalescing-operator-)
- [?.](#Optional-Chaining-)

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

## 유용한 String 메소드

### includes

문자열이 다른 문자열을 포함하고 있는지 검사한다.

```js
const str = "hello world!";

console.log(str.includes("world")); // true
console.log(str.includes("bye")); // false
```

### padStart, padEnd

문자열의 길이가 첫번째 인자에 있는 수 만큼 될 때까지 두번째 인자에 있는 문자열을 이어붙인다.

```js
const str = "그래서 말인데";

console.log(str.padStart(15, "음...")); // 음...음...그래서 말인데

console.log(str.padEnd(15, ".")); // 그래서 말인데........
```

```js
const minutes = "3";

console.log(minutes.padStart(2, "0")); // 03
```

### trim, trimStart, trimEnd

문자열 앞/뒤에 있는 공백을 지워준다.

```js
const str = `
                    hello world!

`;

console.log(str.trim()); // hello world!
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

### flat

인자로 넘겨준 깊이만큼 배열을 flatten한다.

```js
const a = [1, 2, [[3, 4, 5], [6, 7], 8], 9];

console.log(a.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

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

Arrow function의 형식은 이렇다.

```js
const func = (x, y) => {
  return x + y;
};
```

만약 함수의 바디가 return 문 한 줄이라면 {}를 생략해도 된다.

```js
const func = (x, y) => x + y;
```

또 인자가 하나뿐이라면 ()도 생략 가능하다.

```
const func = x => x * x;
```

기존 함수와 비교하여 코드가 얼마나 짧아졌는지 보자.

```js
function func(x) {
  return x * x;
}
```

만약 객체를 반환하고 싶다면 객체 앞뒤로 ()를 감싼다.

```js
// const func = () => { a: 1 }; 이 코드는 {}를 함수의 body라고 생각하기 때문에 오류가 난다.
const func = () => ({ a: 1 });
```

Arrow function은 기존 함수와 생긴 모양 외에도 몇가지 차이점이 있다.  
우선 arrow function 안에서 `this`는 기존 함수에서의 `this`와 다르다. 자세한 설명은 추후 추가.

```js
const user1 = {
  name: "moonhyuk",
  getName: function () {
    return this.name;
  },
};

console.log(user1.getName()); // moonhyuk

const user2 = {
  name: "moonhyuk",
  getName: () => {
    return this.getName;
  },
};

console.log(user2.getName()); // undefined
```

또한 arrow function에서는 `arguments` 객체를 사용할 수 없다. 대신 [rest](#Rest) 연산자를 사용하면 된다.

```js
func1 = function () {
  console.log(arguments);
};

func1(1, 2); // { 0: 1, 1: 2}

func2 = (...args) => {
  // console.log(arguments); error: Uncaught ReferenceError: arguments is not defined
  console.log(args);
};

func2(1, 2); // [1, 2]
```

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

## Spread

Spread 연산자(`...`)는 iterable한 것들을 펼쳐준다.

```js
const a = [1, 2, 3];

console.log(...a); // 1 2 3
```

Spread의 몇가지 쓰임새에 대해 알아보자.

1. 함수 호출에서

   ```js
   sum = (x, y, z) => x + y + z;

   const input = [1, 2, 3];

   console.log(sum(...input)); // 6
   ```

2. new 연산자에서

   ```js
   const dateFields = [1970, 0, 1];
   const d = new Date(...dateFields);

   console.log(d); // Thu Jan 01 1970 00:00:00 GMT+0900 (대한민국 표준시)
   ```

3. 배열 또는 객체 복사

   ```js
   const a = [1, 2, 3];

   let b = [...a];
   b[0] = 4;

   console.log(a); // [1, 2, 3]
   console.log(b); // [4, 2, 3]

   const c = {
     name: "moon",
     job: "developer",
   };

   let d = { ...c };
   d.job = null;

   console.log(c); // { name: "moon", job: "developer"}
   console.log(d); // { name: "moon", job: null }
   ```

   일종의 깊은 복사를 하는 쉬운 방법으로 사용할 수 있다. 단 배열이나 객체의 깊이가 2이상이 되면 깊은 복사가 되지 않는다. 자세한 내용은 [Deep Clone](#Deep-Clone) 참고.

4. 배열 또는 객체를 합치거나 값 추가하기

   ```js
   const a = [1, 2, 3];
   const b = [4, 5, 6];

   const c = [...a, ...b];
   console.log(c); // [1, 2, 3, 4, 5, 6]

   const d = [0, ...c, 7, 8];
   console.log(d); // [0, 1, 2, 3, 4, 5, 6, 7, 8]

   const e = {
     x: 1,
   };
   const f = {
     y: 2,
   };

   const g = { ...e, ...f };

   console.log(g); // { x: 1, y: 2 }
   ```

---

## Rest

Rest(`...`) 연산자는 [spread](#Spread) 연산자와 같은 모양이나 정반대의 기능을 한다. [구조 분해 할당](#Destructuring-assignment)과 함께 쓰이며 구조 분해 할당 시 남은 값들을 하나의 변수에 넣어준다.

```js
const [a, ...b] = [1, 2, 3, 4];

console.log(a); // 1
console.log(b); // [2, 3, 4]

const me = {
  name: "moon",
  job: "dev",
  age: 99,
};

const { name, ...rest } = me;

console.log(name); // moon
console.log(rest); // { job: "dev", age": 99 }
```

Rest 연산자는 기존 `arguments` 객체를 대체할 수 있다.

```js
const sum1 = function () {
  const args = Array.from(arguments);

  return args.reduce((acc, curr) => acc + curr);
};

const sum2 = (...args) => args.reduce((acc, curr) => acc + curr);

console.log(sum1(1, 2, 3, 4, 5)); // 15
console.log(sum2(1, 2, 3, 4, 5)); // 15
```

특히 `arguments` 객체는 Array가 아닌 Array-like objcet이므로 `map`, `reduce` 등의 Array 메소드를 사용하려면 `Array.from()`으로 새 배열을 만들어줘야 했지만 rest 연산자를 사용하면 그럴 필요가 없어진다.

객체에서 특정 프로퍼티를 삭제하고 싶을 때 rest 연산자를 이용할 수도 있다.

```js
const user = {
  name: "moon",
  password: "********",
  job: "dev",
};

const deletePassword = ({ password, ...rest }) => rest;

console.log(deletePassword(user)); // { name: "moon", job: "dev" }
```

Spread 연산자와 함께 사용하면 더 재밌는 일들도 할 수 있다.

```js
const user = {
  name: "moon",
  password: "********",
  job: "dev",
};

// 이 짧은 함수에 구조 분해 할당, rest, spread가 모두 사용되었다!!
// user 객체에서 name키를 id로 바꾸고 password를 삭제한다
const manipulateUser = ({ name: id, password, ...rest }) => ({ id, ...rest });

console.log(manipulateUser(user)); // { id: "moon", job: "dev" }
```

---

## Deep Clone

어떤 배열이나 객체의 값을 복사하여 새로운 변수에 넣고 싶으면서, 새로운 변수의 값이 바뀌더라도 기존 변수는 유지되었으면 하는 때가 있다.

일반적인 `=` 연산자는 배열이나 객체의 값이 아닌 참조를 복사하므로 도움이 되지 않는다.

```js
const a = [1, 2, 3];
const b = a;

b[0] = 4;
console.log(a); // [4, 2, 3]
```

Javascript에서 배열이나 객체를 값복사(deep clone)을 하는 방법들과 그 차이를 비교해보겠다.

1. 배열이나 객체의 깊이가 1임이 확실한 상황이라면

   배열이나 객체의 깊이가 1임을 장담할 수 있다면 `Object.assign()`이나 [spread](#spread) 연산자를 사용하는 것도 좋은 선택이다.

   ```js
   const a = [1, 2, [3]];

   // 아래 두 코드는 결과가 동일하다.
   const b = Object.assign([], a);
   const b = [...a];

   b[0] = 999;
   b[2][0] = 999;

   console.log(a[0]); // 1 (영향 받지 않음)
   console.log(b[0]); // 999

   console.log(a[2][0]); // 999 (영향 받음)
   console.log(b[2][0]); // 999
   ```

   하지만 위 예시에서 볼 수 있듯 깊이 2 이상 부터는 deep clone이 되지 않는다.

2. 배열이나 객체가 다차원이나, 값들이 단순 타입인 경우

   만약 모든 값들의 타입(또는 값)이 `String`, `Number`, `Boolean`, `BigInt`, `null` 중 하나라면 `JSON.parse(JSON.stringify())` 를 사용할 수도 있다.

   ```js
   const a = [1, [2], "hello", true, () => {}];

   const b = JSON.parse(JSON.stringify(a));

   b[1][0] = 999;
   console.log(a[1][0]); // 2 (다차원에서도 영향받지 않음)
   console.log(b[1][0]); // 999

   console.log(b[4]); // null (함수가 사라졌다!)
   ```

   위 예시에서 `b[1][0]`를 바꿨으나 `a[1][0]`은 영향을 받지 않았다. 하지만 마지막 값이었던 `() => {}`가 `null`이 되어버렸다.

3. 앞 두가지 상황이 아니라면

   Deep clone 라이브러리를 찾아보거나 필요한 만큼 직접 구현한다.

   재귀적으로 spread 연산자를 사용하여 중첩 배열을 deep clone하는 함수를 만들보았다. (배열에서만 작동되는 아주 단순한 코드이니 실제 상황에선 훨씬 더 복잡해질 것이다.)

   ```js
   const deepClone = (source) => {
     if (Array.isArray(source)) {
       return [...source].map((c) => deepClone(c));
     } else {
       return source;
     }
   };

   const a = [1, [2], "hello", true, () => {}];

   const b = deepClone(a);

   console.log(b); // [1, [2], "hello", true, () => {}]
   ```

---

## Set

```js
const s = new Set([1, 2, 2, 2, 3, 3, 4]);

s.add(5);
s.delete(1);

console.log(s.has(2)); // true

s.forEach((x) => {
  console.log(x);
});
// 2
// 3
// 4
// 5

s.clear();

console.log(s.size); // 0
```

## Nullish coalescing operator ??

`??` 연산자는 왼쪽 피연산자가 `null` 또는 `undefined`이면 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환한다.

```js
let a;
let b = null;
let c = false;

console.log(a ?? "hello"); // hello
console.log(b ?? "foo"); // foo
console.log(c ?? "bar"); // false
console.log(c || "baz"); // baz
```

`||` 연산자와 다른 점은 `||` 연산자는 왼쪽 피연산자가 false 값으로 인식 되는 것들(`false`, `null`, `undefined`, `0`, `""` 등)인지를 확인하는 반면 `??` 연산자는 오직 `null` 또는 `undefined`인지를 확인한다.

---

## Optional Chaining ?.

객체의 프로퍼티에 접근할 때 이런 오류를 많이 접해봤을 것이다.

```js
const obj = {
  a: {
    c: 1,
  },
};

console.log(obj.b.c); // error: Uncaught TypeError: Cannot read property 'c' of undefined
```

오류를 피하기 위해 프로퍼티가 있는지를 먼저 검사한다.

```js
if (obj.b && obj.b.c) {
  console.log(obj.b.c);
} else {
  console.log(undefined);
}
// undefined

if (obj.a && obj.a.c) {
  console.log(obj.a.c);
} else {
  console.log(undefined);
}
// 1
```

`?.` 연산자는 값이 `null` 또는 `undefined`인지 확인하기 위해 `if`문을 쓰는 것을 줄여준다. 위 코드와 아래 코드는 동작이 동일하다.

```js
console.log(obj?.b?.c); // undefined
console.log(obj?.a?.c); // 1
```

---
