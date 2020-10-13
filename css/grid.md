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
