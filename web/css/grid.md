{% include breadcrumbs.html %}

# Grid Cheat Sheet

## 자료 출처

1. [https://studiomeal.com/archives/533](https://studiomeal.com/archives/533)

2. [인프런 강의](https://www.inflearn.com/course/css-flex-grid-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%9D%B5%ED%9E%88%EA%B8%B0)

---

## Container 속성들

### display

**1. display: grid;**

   <style>
   .grid__container {
       padding: 10px;
       background-color: grey;
       display: grid;
       margin-bottom: 2rem;
   }
   .grid__item {
       padding: 10px;
       border: 3px solid rgb(50, 50, 40);
       color: white;
       background: #ff6937;
   }
   </style>
   <div class="grid__container">
       <div class="grid__item">A</div>
       <div class="grid__item">B</div>
       <div class="grid__item">C</div>
       <div class="grid__item">D</div>
       <div class="grid__item">E</div>
       <div class="grid__item">F</div>
       <div class="grid__item">G</div>
       <div class="grid__item">H</div>
       <div class="grid__item">I</div>
   </div>

**2. display: inline-grid;**

   <style>
     .inline-grid {
       display: inline-grid;
     }
   </style>
   <div class="grid__container inline-grid">
     <div class="grid__item">A</div>
     <div class="grid__item">B</div>
     <div class="grid__item">C</div>
     <div class="grid__item">D</div>
     <div class="grid__item">E</div>
     <div class="grid__item">F</div>
     <div class="grid__item">G</div>
     <div class="grid__item">H</div>
     <div class="grid__item">I</div>
   </div>

### grid-template-columns

**ex1. grid-template-columns: 100px 200px 100px;**

   <style>
    .columns1 {
      grid-template-columns: 100px 200px 100px;
    }
   </style>

   <div class="grid__container columns1">
     <div class="grid__item">A</div>
     <div class="grid__item">B</div>
     <div class="grid__item">C</div>
     <div class="grid__item">D</div>
     <div class="grid__item">E</div>
     <div class="grid__item">F</div>
     <div class="grid__item">G</div>
     <div class="grid__item">H</div>
     <div class="grid__item">I</div>
   </div>

**ex2. grid-template-columns: 1fr 2fr 1fr;**

  <style>
    .columns2 {
      grid-template-columns: 1fr 2fr 1fr;
    }
  </style>

  <div class="grid__container columns2">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
    <div class="grid__item">G</div>
    <div class="grid__item">H</div>
    <div class="grid__item">I</div>
  </div>

**ex3. grid-template-columns: 1fr 200px 1fr;**

  <style>
    .columns3 {
      grid-template-columns: 1fr 300px 1fr;
    }
  </style>

  <div class="grid__container columns3">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
    <div class="grid__item">G</div>
    <div class="grid__item">H</div>
    <div class="grid__item">I</div>
  </div>

**ex4. grid-template-columns: repeat(5, 1fr);**

  <style>
    .columns4 {
      grid-template-columns: repeat(5, 1fr);
    }
  </style>

  <div class="grid__container columns4">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
    <div class="grid__item">G</div>
    <div class="grid__item">H</div>
    <div class="grid__item">I</div>
  </div>

### grid-template-rows

**ex1. grid-template-rows: 50px 100px 50px;**

  <style>
    .rows1 {
      grid-template-rows: 50px 100px 50px;
    }
  </style>

  <div class="grid__container rows1">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
  </div>

**ex2. grid-template-rows: 1fr 2fr 1fr; height: 300px;**

  <style>
    .rows2 {
      grid-template-rows: 1fr 2fr 1fr;
      height: 300px;
    }
  </style>

  <div class="grid__container rows2">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
  </div>

**ex3. grid-template-rows: 1fr 100px 1fr; height: 300px**

  <style>
    .rows3 {
      grid-template-rows: 1fr 100px 1fr;
      height: 300px;
    }
  </style>

  <div class="grid__container rows3">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
  </div>

### grid 관련 함수들

#### repeat

`repeat(n, x)`는 x값을 n번 반복해서 쓴 것과 같다.

**ex1. grid-template-columns: repeat(5, 100px);**

  <style>
    .repeat1 {
      grid-template-columns: repeat(5, 100px);
    }
  </style>

  <div class="grid__container repeat1">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex2. grid-template-columns: repeat(5, 1fr 2fr);**

  <style>
    .repeat2 {
      grid-template-columns: repeat(5, 1fr 2fr);
    }
  </style>

  <div class="grid__container repeat2">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
    <div class="grid__item">G</div>
    <div class="grid__item">H</div>
    <div class="grid__item">I</div>
    <div class="grid__item">J</div>
  </div>

**ex3. grid-template-columns: repeate(auto-fill, 200px);**

`auto-fill`과 함께 사용하면 한 줄이 최대한 차도록 자동으로 갯수를 맞춰준다.

  <style>
    .repeat3 {
      grid-template-columns: repeat(auto-fill, 200px);
    }
  </style>

  <div class="grid__container repeat3">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

#### minmax

`minmax(x, y)`는 그리드 아이템들 크기의 최솟값과 최댓값을 지정해준다.

**ex1. grid-template-columns: repeat(3, minmax(100px, 200px));**

  <style>
    .minmax1 {
      grid-template-columns: repeat(3, minmax(100px, 200px));
    }
  </style>

  <div class="grid__container minmax1">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex2. grid-template-columns: repeat(3, minmax(100px, auto));**

  <style>
    .minmax2 {
      grid-template-columns: repeat(3, minmax(100px, auto));
    }
  </style>

  <div class="grid__container minmax2">
    <div class="grid__item">AAAAAAAAA</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">DDDDDDDDDDDDDDD</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex3. grid-template-columns: repeat(auto-fit, minmax(200px, auto));**

`auto-fit`과 `minmax`를 같이 사용하면 한 줄이 최대한 차도록 갯수를 맞춰주고, 남은 공간까지 크기를 자동으로 늘려준다. (repeat ex3과 비교)

  <style>
    .minmax3 {
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    }
  </style>

  <div class="grid__container minmax3">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

### row-gap

**ex. row-gap: 10px;**

  <style>
    .row-gap1 {
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      row-gap: 10px;
    }
  </style>

  <div class="grid__container row-gap1">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

### column-gap: 10px;

**ex. column-gap: 10px;**

  <style>
    .column-gap {
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      column-gap: 10px;
    }
  </style>

  <div class="grid__container column-gap">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

### gap

**ex. gap: 10px 20px**

  <style>
    .gap {
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      gap: 10px 20px;
    }
  </style>

  <div class="grid__container gap">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

### grid-auto-rows

rows의 수가 몇 개일지 모를 때 사용한다.

**ex. grid-auto-rows: 100px**

  <style>
    .grid-auto-rows {
      grid-auto-rows: 100px;
    }
  </style>

  <div class="grid__container grid-auto-rows">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

### grid-column-start, grid-column-end

**grid-column-start: 1; grid-column-end: 3;**

  <style>
    .grid-column-start-end {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  </style>

  <div class="grid__container minmax1">
    <div class="grid__item grid-column-start-end">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

### grid-column

grid-column-start, grid-column-end의 짧은 버전

**grid-column: 1 / 3;**

  <style>
    .grid-column {
      grid-column: 1 / 3;
    }
  </style>

  <div class="grid__container minmax1">
    <div class="grid__item grid-column">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

### grid-row-start, grid-row-end

**grid-row-start: 1; grid-row-end: 3;**

  <style>
    .grid-row-start-end {
      grid-row-start: 1;
      grid-row-end: 3;
    }
  </style>

  <div class="grid__container minmax1">
    <div class="grid__item grid-row-start-end">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

### grid-row

grid-row-start, grid-row-end의 짧은 버전

**grid-row: 1 / 3;**

  <style>
    .grid-row {
      grid-row: 1 / 3;
    }
  </style>

  <div class="grid__container minmax1">
    <div class="grid__item grid-row">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

### grid-template-areas

```html
<style>
  .grid-template-areas {
    grid-template-areas:
      "header header header"
      "a main b"
      "footer footer footer";
    grid-template-columns: 100px auto 100px;
    grid-template-rows: 60px 200px 60px;
  }

  .header {
    grid-area: header;
  }
  .a {
    grid-area: a;
  }
  .main {
    grid-area: main;
  }
  .b {
    grid-area: b;
  }
  .footer {
    grid-area: footer;
  }
</style>

<div class="grid__container grid-template-areas">
  <div class="grid__item header">header</div>
  <div class="grid__item a">a</div>
  <div class="grid__item main">main</div>
  <div class="grid__item b">b</div>
  <div class="grid__item footer">footer</div>
</div>
```

  <style>
    .grid-template-areas {
      grid-template-areas: 
        "header header header"
        "a main b"
        "footer footer footer";
      grid-template-columns: 100px auto 100px;
      grid-template-rows: 60px 200px 60px;
    }

    .header {
      grid-area: header;
    }
    .a {
      grid-area: a;
    }
    .main {
      grid-area: main;
    }
    .b {
      grid-area: b;
    }
    .footer {
      grid-area: footer;
    }
  </style>

  <div class="grid__container grid-template-areas">
    <div class="grid__item header">header</div>
    <div class="grid__item a">a</div>
    <div class="grid__item main">main</div>
    <div class="grid__item b">b</div>
    <div class="grid__item footer">footer</div>
  </div>

### grid-template

`grid-template-areas`, `grid-template-rows`, `grid-template-colmn`를 축약하여 한번에 쓸 수 있게 해준다.

위 `grid-template-areas` 예시와 아래 코드는 같은 결과를 만든다.

```html
<style>
  .grid-template {
    grid-template:
      "header header header" 60px
      "a main b" 200px
      "footer footer footer" 60px / 100px auto 100px;
  }
```

  <style>
    .grid-template {
      grid-template: 
        "header header header" 60px
        "a main b" 200px 
        "footer footer footer" 60px / 100px auto 100px;
    }
  </style>

  <div class="grid__container grid-template">
    <div class="grid__item header">header</div>
    <div class="grid__item a">a</div>
    <div class="grid__item main">main</div>
    <div class="grid__item b">b</div>
    <div class="grid__item footer">footer</div>
  </div>

### align-items

**ex1. align-items: stretch**

  <style>
    .align-items1 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      align-items: stretch;
    }
  </style>

  <div class="grid__container align-items1">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex2. align-items: center**

  <style>
    .align-items2 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      align-items: center;
    }
  </style>

  <div class="grid__container align-items2">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex3. align-items: start**

  <style>
    .align-items3 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      align-items: start;
    }
  </style>

  <div class="grid__container align-items3">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex4. align-items: end**

  <style>
    .align-items4 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      align-items: end;
    }
  </style>

  <div class="grid__container align-items4">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

### align-content

**ex1. align-content: stretch**

  <style>
    .align-content {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      align-content: stretch;
    }
  </style>

  <div class="grid__container align-content">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex2. align-content: center**

  <style>
    .align-content2 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      align-content: center;
    }
  </style>

  <div class="grid__container align-content2">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex3. align-content: start**

  <style>
    .align-content3 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      align-content: start;
    }
  </style>

  <div class="grid__container align-content3">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex4. align-content: end**

  <style>
    .align-content4 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      align-content: end;
    }
  </style>

  <div class="grid__container align-content4">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex5. align-content: space-between**

  <style>
    .align-content5 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      align-content: space-between;
    }
  </style>

  <div class="grid__container align-content5">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex6. align-content: space-around**

  <style>
    .align-content6 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      align-content: space-around;
    }
  </style>

  <div class="grid__container align-content6">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

### justify-items

**ex1. justify-items: stretch**

  <style>
    .justify-items1 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      justify-items: stretch;
    }
  </style>

  <div class="grid__container justify-items1">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex2. justify-items: center**

  <style>
    .justify-items2 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      justify-items: center;
    }
  </style>

  <div class="grid__container justify-items2">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex3. justify-items: start**

  <style>
    .justify-items3 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      justify-items: start;
    }
  </style>

  <div class="grid__container justify-items3">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex4. justify-items: end**

  <style>
    .justify-items4 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      justify-items: end;
    }
  </style>

  <div class="grid__container justify-items4">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

### justify-content

**ex1. justify-content: stretch**

  <style>
    .justify-content {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      justify-content: stretch;
    }
  </style>

  <div class="grid__container justify-content">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex2. justify-content: center**

  <style>
    .justify-content2 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      justify-content: center;
    }
  </style>

  <div class="grid__container justify-content2">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex3. justify-content: start**

  <style>
    .justify-content3 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      justify-content: start;
    }
  </style>

  <div class="grid__container justify-content3">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex4. justify-content: end**

  <style>
    .justify-content4 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      justify-content: end;
    }
  </style>

  <div class="grid__container justify-content4">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex5. justify-content: space-between**

  <style>
    .justify-content5 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      justify-content: space-between;
    }
  </style>

  <div class="grid__container justify-content5">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>

**ex6. justify-content: space-around**

  <style>
    .justify-content6 {
      height: 300px;
      grid-template-columns: repeat(auto-fit, minmax(200px, auto));
      justify-content: space-around;
    }
  </style>

  <div class="grid__container justify-content6">
    <div class="grid__item">A</div>
    <div class="grid__item">B</div>
    <div class="grid__item">C</div>
    <div class="grid__item">D</div>
    <div class="grid__item">E</div>
    <div class="grid__item">F</div>
  </div>
