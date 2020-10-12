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
