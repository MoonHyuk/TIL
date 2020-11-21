# styled-components

## 목차

- [목적](#목적)
- [기본 사용법](#기본-사용법)
- [스타일 상속](#스타일-상속)
- [동적 스타일](#동적-스타일)
- [글로벌 스타일](#글로벌-스타일)
- [styled-reset](#styled-reset)

## 목적

1. 하나의 파일에서 리액트 컴포넌트와 css를 모두 작성할 수 있게 해준다.
2. 컴포넌트 단위로 스타일을 작성하게 도와준다.
3. 클래스 이름을 랜덤하게 만들어주기 때문에 번들링 했을 때 클래스 이름이 중복되어 문제가 될 일이 없다.
4. 스타일의 상속과 동적 스타일링이 쉬워진다.

## 기본 사용법

```javascript
import styled from "styled-components";

const List = styled.ul`
  font-size: 20px;
  font-weight: bold;
`;

const Item = styled.li`
  padding: 10px;
`;

function App() {
  return (
    <div>
      <List>
        <Item>a</Item>
        <Item>b</Item>
        <Item>c</Item>
      </List>
    </div>
  );
}
```

중첩 스타일이나 수도 셀렉터도 쓸 수 있다.

```javascript
const Item = styled.li`
  padding: 10px;

  /* Item 컴포넌트의 hover 액션에 적용된다. */
  &:hover {
    background-color: black;
  }

  /* Item 컴포넌트의 자식 div 태그들에 적용된다. */
  div {
    color: red;
  }
`;
```

## 스타일 상속

어떤 컴포넌트를 상속받아 확장하고 싶을 땐 아래처럼 한다.

```javascript
const BigFont = styled.span`
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const BigFontBlue = styled(BigFont)`
  color: blue;
`;

const BigFontRed = styled(BigFont)`
  color: red;
`;

function App() {
  return (
    <div>
      <BigFont>asd</BigFont>
      <BigFontBlue>asd</BigFontBlue>
      <BigFontRed>asd</BigFontRed>
    </div>
  );
}
```

![스타일 상속 결과](./images/extending-style.png)

## 동적 스타일

컴포넌트에 `props`를 전달하여 동적으로 스타일을 작성할 수도 있다.

```javascript
const Text = styled.span`
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

function App() {
  return (
    <div>
      <Text color="blue">asd</Text>
      <Text color="red">asd</Text>
      <Text color="yellow">asd</Text>
    </div>
  );
}
```

## 글로벌 스타일

만약 글로벌 스타일을 정의하고 싶으면 `createGlobalStyle`을 이용한다.

```js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black
  };
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <div></div>
    </>
  );
}
```

## styled-reset

Eric Meyer의 [Reset CSS](https://meyerweb.com/eric/tools/css/reset/)를 `styled-components`로 만든 패키지이다.

```
npm install styled-reset
```

```javascript
import { createGlobalStyle } from "styled-components";
import Reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${Reset};
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <div></div>
    </>
  );
}
```
