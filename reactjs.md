# React.js

## 목차

- [setState에서 this.state를 사용하지 말자](#setState에서-thisstate를-사용하지-말자)

---

## setState에서 this.state를 사용하지 말자

```jsx
class App extends React.Component {
  state = {
    count: 0,
  };

  addTwo = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.addTwo}>add</button>
      </div>
    );
  }
}
```

위 코드에서 버튼을 누르면 `count`가 어떻게 증가될까? 2씩 증가하길 원했지만 실제론 1씩 증가하게 된다.

우선 `this.state`는 현재 렌더링 된 값들을 가져온다.  
`setState()`는 이벤트가 다 종료되기 전까지는 실행되지 않고 `queue`에 쌓여있다가 이벤트 종료 후 한번에 실행된다. 렌더링은 그 후 한번만 일어난다. 만약 `setState()`이 바로 실행되고 그때마다 렌더링을 한다면 성능상 좋지 않을 것이다.

첫번째 `setState()` 호출 후 렌더링을 하지 않았기 때문에 두번째 `setState()`에서 `this.state.count`는 아직 0이다.

이처럼 `setState()`에 기존 값을 이용하고 싶다면 함수를 인자로 넘기는 방식을 사용해야 한다.

```js
addTwo = () => {
  this.setState((state) => ({
    count: state.count + 1,
  }));
  this.setState((state) => ({
    count: state.count + 1,
  }));
};
```

`setState()`시 렌더링만 안하고 `this.state`는 업데이가 되어도 되는게 아닌가? 하는 궁금증이 생긴다면 [이 글](https://github.com/facebook/react/issues/11527#issuecomment-360199710)을 읽어보자.

---
