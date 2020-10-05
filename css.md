## 목차

- [Margin Collapsing](#Margin-Collapsing)

---

## Margin Collapsing

Margin Collapsing(마진 겹침)현상은 특정 상황에서 elements 간 top 또는 bottom 마진이 겹쳐져 오직 더 큰 마진만 적용되는 현상을 말한다.

### 1. 인접한 두 elements 간

```html
<style>
  .example1_1 {
    border: 1px solid black;
    margin: 40px;
  }
  .example1_2 {
    border: 1px solid black;
    margin: 50px;
  }
</style>

<div class="example1_1">a</div>
<div class="example1_2">b</div>
```

<style>
  .example1_1 {
    border: 1px solid black;
    margin: 40px;
  }
  .example1_2 {
    border: 1px solid black;
    margin: 50px;
  }
</style>

<div class="example1_1">a</div>
<div class="example1_2">b</div>

`.example1_1`과 `.example1_2` 사이에 마진이 `90px`이 아니라 `50px`로 되었다.

```html
<style>
  .example1_3 {
    border: 1px solid black;
    margin: 40px;
  }
  .example1_4 {
    border: 1px solid black;
    margin: 50px;
  }
</style>

<span class="example1_3">a</span>
<span class="example1_4">b</span>
```

<style>
  .example1_3 {
    border: 1px solid black;
    margin: 40px;
  }
  .example1_4 {
    border: 1px solid black;
    margin: 50px;
  }
</style>

<span class="example1_3">a</span>
<span class="example1_4">b</span>

하지만 왼쪽, 오른쪽 마진은 마진 겹침이 일어나지 않는다!

### 2. 부모와 자식 간

**부모가 비어있으면(border, padding, 블록 안 콘탠츠 등이 없음)** 부모 자식 간에도 마진 겹침이 일어난다.

```html
<style>
  .example2_1 {
    margin: 50px;
  }
  .example2_2 {
    margin: 40px;
    border: 1px solid black;
  }
</style>

<div class="example2_1">
  <div class="example2_2">aaa</div>
</div>

<div class="example2_1" style="border:1px solid black;">
  <div class="example2_2">bbb</div>
</div>
```

<style>
  .example2_1 {
    margin: 40px;
  }
  .example2_2 {
    margin: 50px;
    border: 1px solid black;
  }
</style>

<div class="example2_1">
  <div class="example2_2">aaa</div>
</div>

부모가 비어있지 않으면 마진 겹침이 일어나지 않는다.

<div class="example2_1" style="border:1px solid black;">
  <div class="example2_2">bbb</div>
</div>

### 3. 빈 블록

1번 예시에서는 위 블록의 `margin-bottom`과 아래 블록의 `margin-top`만이 겹쳐졌지만, 만약 위 블록이 비어있다면 `margin-top`과 `margin-bottom` 모두 겹쳐진다.

<style>
  .example3_1 {
    margin-top: 40px;
    margin-bottom: 60px;
  }
  .example3_2 {
    border: 1px solid black;
    margin: 50px;
  }
</style>

<div class="example3_1"></div>
<div class="example3_2">b</div>
