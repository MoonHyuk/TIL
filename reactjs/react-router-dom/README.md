# react-rounter-dom

## 목차

- [withRouter](#withrouter)

## withRouter

`Router`를 통해 렌더링 되는 컴포넌트들에는 `Router`가 3개의 props(`history`, `location`, `match`)를 넘겨준다.  
아래 예시를 보자.

App.js

```javascript
import { BrowserRouter as BRouter, Route } from "react-router-dom";
import Foo from "Foo";

function App() {
  return (
    <BRouter>
      <Route path="/foo" component={Foo}></Route>
    </BRouter>
  );
}
```

Foo.js

```javascript
function Foo(props) {
  console.log(props); // Object { history: {…}, location: {…}, match: {…}, ... }
}

export default Foo;
```

하지만 만약 `Header` 컴포넌트처럼 `Router`로 렌더링 되는 것이 아니라 기본적으로 항상 렌더링 되어야 하는 컴포넌트가 있다면, 그 컴포넌트에서는 `Router props`를 어떻게 사용할 수 있을까?

```javascript
function App() {
  return (
    <>
      <Header></Header>
      <BRouter>
        <Route path="/foo" component={Foo}></Route>
      </BRouter>
    </>
  );
}
```

Header.js

```javascript
function Header(props) {
  console.log(props); // Object { }
}

export default Header;
```

위와 같이 작성하면 `Header` 컴포넌트에선 `Router props`를 가져올 수 없다.

이럴 때 사용하는 것이 `withRouter` 메소드이다.

```javascript
import { withRouter } from "react-router-dom";

function Header(props) {
  console.log(props); // Object { history: {…}, location: {…}, match: {…}, ... }
}

export default withRouter(Header);
```

컴포넌트를 `withRouter` 메소드로 감싸주면 이제 `Router props`를 사용할 수 있게 된다.
