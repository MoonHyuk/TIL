# Flex Cheat Sheet

## 자료 출처

1. [https://studiomeal.com/archives/197](https://studiomeal.com/archives/197)

2. [인프런 강의](https://www.inflearn.com/course/css-flex-grid-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%9D%B5%ED%9E%88%EA%B8%B0)

---

## Container 속성들

### display

1. flex

   <style>
     .flex-container {
       display: flex;
       background: black;
     }
     .flex-item {
       color: white;
       background: green;
       border: 3px solid black;
     }
   </style>

   <div class="flex-container">
     <div class="flex-item">aaa</div>
     <div class="flex-item">b</div>
     <div class="flex-item">cc</div>
   </div>

2. inline-flex

   <style>
     .inline-flex {
       display: inline-flex;
     }
   </style>

   <div class="flex-container inline-flex">
     <div class="flex-item">aaa</div>
     <div class="flex-item">b</div>
     <div class="flex-item">cc</div>
   </div>

### flex-direction

1. row (default)

   <style>
     .flex-row {
       flex-direction: row;
     }
   </style>

   <div class="flex-container flex-row">
     <div class="flex-item">aaa</div>
     <div class="flex-item">b</div>
     <div class="flex-item">cc</div>
   </div>

2. column

   <style>
     .flex-column {
       flex-direction: column;
     }
   </style>

   <div class="flex-container flex-column">
     <div class="flex-item">aaa</div>
     <div class="flex-item">b</div>
     <div class="flex-item">cc</div>
   </div>

### flex-wrap

1. nowrap (default)

   <style>
     .flex-nowrap {
       width: 100px;
     }
   </style>
   <div class="flex-container flex-nowrap">
     <div class="flex-item">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sunt.
     </div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

2. wrap

   <style>
     .flex-wrap {
       width: 100px;
       flex-wrap: wrap;
     }
   </style>
   <div class="flex-container flex-wrap">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

### justify-content - 메인축 방향으로 정렬

1. flex-start (default)

   <style>
     .justify-flex-start {
       justify-content: flex-start;
     }
   </style>
   <div class="flex-container justify-flex-start">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

2. flex-end

   <style>
     .justify-flex-end {
       justify-content: flex-end;
     }
   </style>
   <div class="flex-container justify-flex-end">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

3. center

   <style>
     .justify-flex-center {
       justify-content: center;
     }
   </style>
   <div class="flex-container justify-flex-center">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

4. space-between

   <style>
     .justify-space-between {
       justify-content: space-between;
     }
   </style>
   <div class="flex-container justify-space-between">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

5. space-around
   <style>
     .justify-space-around {
       justify-content: space-around;
     }
   </style>
   <div class="flex-container justify-space-around">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

### align-item - 메인축에 수직 방향으로 정렬

1. stretch (default)

   <style>
     .align-stretch {
       align-items: stretch;
       height: 100px;
     }
   </style>
   <div class="flex-container align-stretch">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

2. flex-start

   <style>
     .align-flex-start {
       align-items: flex-start;
       height: 100px;
     }
   </style>
   <div class="flex-container align-flex-start">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

3. flex-end

   <style>
     .align-flex-end {
       align-items: flex-end;
       height: 100px;
     }
   </style>
   <div class="flex-container align-flex-end">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

4. center
   <style>
     .align-center {
       align-items: center;
       height: 100px;
     }
   </style>
   <div class="flex-container align-center">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

### align-content - wrap을 사용한 경우 수직 정렬

1. stretch (default)

   <style>
     .align-content-stretch {
       align-content: stretch;
       height: 120px;
     }
   </style>
   <div class="flex-container flex-wrap align-content-stretch">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

2. flex-start

   <style>
     .align-content-flex-start {
       align-content: flex-start;
       height: 120px;
     }
   </style>
   <div class="flex-container flex-wrap align-content-flex-start">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

3. flex-end

   <style>
     .align-content-flex-end {
       align-content: flex-end;
       height: 120px;
     }
   </style>
   <div class="flex-container flex-wrap align-content-flex-end">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

4. center

   <style>
     .align-content-center {
       align-content: center;
       height: 120px;
     }
   </style>
   <div class="flex-container flex-wrap align-content-center">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

5. space-between

   <style>
     .align-content-space-between {
       align-content: space-between;
       height: 120px;
     }
   </style>
   <div class="flex-container flex-wrap align-content-space-between">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

6. space-around

   <style>
     .align-content-space-around {
       align-content: space-around;
       height: 120px;
     }
   </style>
   <div class="flex-container flex-wrap align-content-space-around">
     <div class="flex-item">aaaaaaaaa</div>
     <div class="flex-item">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

---

## Item 속성들

### flex-grow (default: 0)

기본적으로 flex의 아이템들은 자신의 content 크기만큼 width를 가지고 더이상 늘어나지 않는다. `flex-grow` 속성에 0보다 큰 값을 주면 부모 container의 남은 공간을 다 차지하도록 늘어난다.

`flex-grow` 속성의 값은 남은 공간을 차지할 비율을 나타낸다.
아래 예시에서 첫번째, 두번째, 세번째 item들은 각각 `flex-grow`를 1, 2, 0으로 주었다. 세번째 item은 자신의 content 크기에서 더이상 늘어나지 않았고, 첫번째와 두번째 item은 남은 공간을 각각 1대 2의 비율로 나눠가져 늘어났다.

   <style>
     .flex-grow-1 {
       flex-grow: 1;
     }
     .flex-grow-2 {
       flex-grow: 2;
     }
   </style>
   <div class="flex-container">
     <div class="flex-item flex-grow-1">aaaaaaaaa</div>
     <div class="flex-item flex-grow-2">bbbbbbbbbb</div>
     <div class="flex-item">cc</div>
   </div>

### flex-shrink (default: 1)

`flex-shrink`는 container의 크기가 작아졌을 때 item의 크기도 작아질지 여부를 정한다.  
또 `flex-shrink`의 값이 클수록 다른 item보다 더 많이 줄어든다.

아래 예시에서 첫번째 item과 두번째 item에 `flex-shrink`를 각각 0과 1로 설정했다. 창의 크기를 줄여보면서 차이를 보자.

  <style>
    .flex-shrink-0 {
      flex-shrink: 0;
    }
    .flex-shrink-1 {
      flex-shrink: 1;
    }
  </style>
  <div class="flex-container">
    <div class="flex-item flex-shrink-0">Lorem ipsum dolor sit.</div>
    <div class="flex-item flex-shrink-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </div>
  </div>

### flex-basis (default: auto)

`flex-basis`는 `flex-grow`가 0일 때 item의 기본 width를 지정해준다.

아래 예시에서 첫번째 item과 두번째 item에 `flex-basis`를 각각 200px, auto로 주었다.

  <style>
    .flex-basis {
      flex-basis: 200px;
    }
  </style>
  <div class="flex-container">
    <div class="flex-item flex-basis">aaa</div>
    <div class="flex-item">bbbb</div>
  </div>

### flex

`flex`는 `flex-grow`, `flex-shrink`, `flex-basis` 속성들을 단축하여 사용할 수 있게 해준다.

```
flex: 2 1 200px;
```

이 코드는 아래 코드와 같다.

```
flex-grow: 2;
flex-shrink: 1;
flex-basis: 200px;
```

---
