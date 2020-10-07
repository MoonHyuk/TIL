# Flex Cheat Sheet

## 자료 출처

https://studiomeal.com/archives/197

## Container 속성들

### display

1. flex

   <style>
     .flex-container {
       display: flex;
       background: black;
     }
     .flex-item {
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
