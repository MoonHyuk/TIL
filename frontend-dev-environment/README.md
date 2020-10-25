# 프론트엔드 개발환경의 이해와 실습

## 출처

전체적인 내용은 [김정환님의 블로그](https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html) 및 [인프런 강의](https://www.inflearn.com/course/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD)에서 참고하였습니다.

## 목차

- [npm](#npm)
- [webpack](#webpack)

## npm

### 패키지 버전의 의미

npm 패키지들은 `x.y.z` 식의 버전 번호를 가지고 있다. 이 버전 번호는 `Sementic Version`이라는 규칙을 따르는데, `x`는 `Major Version`, `y`는 `Minor Version`, `z`는 `Patch Version`이라고 부르고 각각의 의미는 다음과 같다.

1. Major Version: 기존 버전과 호환되지 않게 변경함
2. Minor Version: 기존 버전과 호환되는 기능 추가
3. Patch Version: 기존 버전과 호환되는 버그 수정

### package.json에서 버전을 명시하는 방법

[참고](https://docs.npmjs.com/misc/semver)

만약 `npm install react` 명령어로 패키지를 인스톨하면 `package.json`에는 자동으로 이런 코드가 들어간다.

```json
  "dependencies": {
    "react": "^17.0.1"
  }
```

여기서 버전 번호 앞에 `^`라는 기호가 붙었는데 `^` 기호 말고도 다른 기호들이 있으니 그것들의 의미를 비교해보자.

1. 비교 연산자

   - `>1.2.0`은 `1.2.0`보다 큰 버전을 설치한다.
   - `>=1.2.0`은 `1.2.0`보다 크거나 같은 버전을 설치한다.
   - `<1.2.0`은 `1.2.0`보다 작은 버전을 설치한다.
   - `<=1.2.0`은 `1.2.0`보다 작거나 같은 버전을 설치한다.
   - `=1.2.0`은 `1.2.0` 버전을 설치한다. (`=`는 생략할 수도 있고, `v`로 쓸 수도 있다.)

2. 두 개의 비교 연산자

   - `>1.2.0 <1.3.0`은 `1.2.0`보다는 크고 `1.3.0`보다는 작은 버전을 설치한다.

3. 하이픈 범위 (`-`)

   - `1.2.0 - 2.2.0`은 `1.2.0`보다 크거나 같고 `2.2.0`보다 작거나 같은 버전을 설치한다.
   - `1.2.0 - 2.2`는 `1.2.0`보다 크거나 같고 `2.3`보다 작은 버전을 설치한다.

4. `X` 또는 `x` 또는 `*`

   - `*`는 모든 버전에 상관 없이 설치한다.
   - `1.2.*`는 `1.2.0`보다 크거나 같고 `1.3`보다 작은 버전을 설치한다.
   - `1.*`는 `1.0.0`보다 크거나 같고 `2.0.0`보다 작은 버전을 설치한다.

5. 틸드 범위 (`~`)

   - `~1.2.3`은 `1.2.3`보다 크거나 같고 `1.3.0`보다 작은 버전을 설치한다.
   - `~1.2`는 `1.2.0`보다 크거나 같고 `1.3.0`보다 작은 버전을 설치한다. (`1.2.*`과 같다.)
   - `~0.1.2`는 `0.1.2`보다 크거나 같고 `0.2.0`보다 작은 버전을 설치한다.

6. 캐럿 범위 (`^`)
   캐럿 범위는 메이저 버전이 0인지 아닌지에 따라 동작이 다르다.

   - `^1.2.3`은 `1.2.3`보다 크거나 같고 `2.0.0`보다 작은 버전을 설치한다.
   - `^0.1.2`는 `0.1.2`보다 크거나 같고 `0.2.0`보다 작은 버전을 설치한다.

   캐럿 범위는 호환성이 유지되는 범위에서 패키지를 설치한다고 생각하면 된다. Major 버전이 0점대 인 경우에는 Minor 업데이트에도 호환성이 깨지는 상황이 있기에, 캐럿 범위를 사용해주는 것이 좋다.

## webpack

### 고전 방식의 모듈

math.js:

```js
function sum(a, b) {
  return a + b;
}
```

app.js:

```js
console.log(sum(1, 2));
```

index.html:

```html
<script src="./math.js">
<script src="./app.js">
```

고전적인 방식으로 `html`파일에서 여러 `js`파일을 불러오는 경우 `math.js` 파일 안에있는 `sum`함수는 전역 스코프에 생성되어버린다. 이러면 예기치 않은 오류가 발생할 수 있기에 `즉시실행함수(IIFE)`를 사용 한다.

### IIFE를 활용한 모듈

math.js:

```js
var math = math || {};

(function () {
  function sum(a, b) {
    return a + b;
  }

  math.sum = sum;
})();
```

app.js:

```js
console.log(math.sum(1, 2));
```

`math.js`에서 `sum` 함수는 `즉시실행함수` 스코프 안에서 생성되었기 때문에 외부에서 접근할 수 없어 좀 더 안전하다.

### 여러 모듈 스펙

Javascript 모듈의 문법과 동작을 정의한 여러 스펙들이 등장하였다. 대표적으로는 `CommonJS`와 `AMD`이다.

`CommonJS`는 주로 서버사이드(`node.js`)에서 사용하기 위해, `AMD`는 주로 브라우저 환경에서 비동기로 모듈을 로딩하기 위해 만들어졌다.

그러던 중 `ECMA2015`에서 모듈 표준인 `ESM(ECMAScript Modules)`을 만들었다. `ESM`을 사용하여 `sum` 함수를 모듈화 시켜보자.

math.js:

```js
export function sum(a, b) {
  return a + b;
}
```

app.js:

```js
import { sum } from "./math.js";

console.log(sum(1, 2));
```

index.html

```html
<script type="module" src="./app.js">
```

하지만 아직까지는 `IE`를 포함한 몇몇 브라우저에서는 `ESM`이 지원되지 않는다. 모든 브라우저 환경에서 모듈을 사용하려면 `webpack`이 필요하다.

### webpack 기본 세팅

`webpack`은 파일들의 의존 관계를 분석하여 여러 파일들을 하나(또는 그 이상)의 파일로 만들어주는 `번들러`이다. `webpack`에서는 `CommonJS`, `AMD`, `ESM` 방식의 스펙을 모두 지원한다.

`webpack`을 사용하기 위해 우선 설치를 해보자.

```
npm init -y
npm install -D webpack webpack-cli
```

`package.json` 파일에 `build` 스크립트를 추가해준다.

```json
  ...
  "scripts": {
    "build": "webpack"
  },
  ...
```

또 `webpack.config.js` 라는 이름으로 파일을 새로 만들어 아래처럼 작성해준다.

```js
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
};
```

여기서 `entry`에는 모듈들의 의존 그래프에서 시작 파일을 명시해주고 `output`에는 번들 된 결과물이 저장될 결로와 이름을 지정해준다.

그 다음 `npm run build` 명령어를 실행하면 `app.js`와 `math.js`가 하나의 파일로 번들되어 `dist/main.js`에 저장된다.

`html` 파일에서는 번들된 결과 파일만 불러오면 된다.

```html
<script src="./dist/main.js">
```

### webpack 기본 세팅 실습

위 내용을 바탕으로 webpack entry/output 실습을 해보았다.

[링크](https://github.com/MoonHyuk/lecture-frontend-dev-env/commit/c7a2d057c9a7583053a5c28149c26f8860cdd7d8)
