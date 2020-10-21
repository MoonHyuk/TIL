# CSS

## 주의

깃헙 사이트 내에서는 `style` 태그가 적용되지 않으므로 [여기](https://moonhyuk.github.io/TIL/css/)에서 봐주시길 바랍니다.

## 목차

- [Margin Auto](#margin-auto)
- [Margin Collapsing](#margin-collapsing)
- [Flex Cheat Sheet](./flex.md)
- [Grid Cheat Sheet](./grid.md)

---

## Margin Auto

### margin: auto

<div style="width: 200px; border: 1px solid black; margin:auto">aa</div>

### margin-left: auto

<div style="width: 200px; border: 1px solid black; margin-left:auto">aa</div>

## Margin Collapsing

Margin Collapsing(마진 겹침)현상은 특정 상황에서 elements 간 top 또는 bottom 마진이 겹쳐져 오직 더 큰 마진만 적용되는 현상을 말한다.

### 1. 인접한 두 elements 간

```html
<div style="border: 1px solid black; margin:40px">a</div>
<div style="border: 1px solid black; margin:50px">b</div>
```

<div style="border: 1px solid black; margin:40px">a</div>
<div style="border: 1px solid black; margin:50px">b</div>

위 블록과 아래 블록 사이에 마진이 `90px`이 아니라 `50px`로 되었다.

```html
<span style="border: 1px solid black; margin:40px">a</span>
<span style="border: 1px solid black; margin:50px">b</span>
```

<span style="border: 1px solid black; margin:40px">a</span>
<span style="border: 1px solid black; margin:50px">b</span>

하지만 왼쪽, 오른쪽 마진은 마진 겹침이 일어나지 않는다!

### 2. 부모와 자식 간

**부모가 비어있으면(border, padding, 블록 안 콘탠츠 등이 없음)** 부모 자식 간에도 마진 겹침이 일어난다.

```html
<div style="margin: 50px;">
  <div style="border: 1px solid black; margin: 40px;">aaa</div>
</div>

<div style="border:1px solid black; margin: 50px;">
  <div style="border: 1px solid black; margin: 40px;">bbb</div>
</div>
```

<div style="margin: 50px;">
  <div style="border: 1px solid black; margin: 40px;">aaa</div>
</div>

부모가 비어있지 않으면 마진 겹침이 일어나지 않는다.

<div style="border:1px solid black; margin: 50px;">
  <div style="border: 1px solid black; margin: 40px;">bbb</div>
</div>

### 3. 빈 블록

1번 예시에서는 위 블록의 `margin-bottom`과 아래 블록의 `margin-top`만이 겹쳐졌지만, 만약 위 블록이 비어있다면 `margin-top`과 `margin-bottom` 모두 겹쳐진다.

```html
<div style="margin-top: 40px; margin-bottom: 60px;"></div>
<div style="border: 1px solid black; margin: 50px;">b</div>
```

<div style="margin-top: 40px; margin-bottom: 60px;"></div>
<div style="border: 1px solid black; margin: 50px;">b</div>

---
