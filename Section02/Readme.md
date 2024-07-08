# 정리

## Truthy & Falsy

암묵적 형 변환의 일종  
`if` 문 혹은 `삼향연산자` 등에서 적용이 가능

### Falsy 목록

- Number : `0`, `-0`, `NaN`
- String : `""` (빈 문자열)
- `null`, `undefined`

### Truthy 목록

이외 모든 것들은 "Truthy" 로 취급

특히 `[]`, `{}`, `function` 도 Truthy

## 단락평가

- 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환
- 성능상의 이점을 위해

```js
const res = [
  3 & 0, // 0 에 의해 이 논리는 false로 결정 -> 0으로
  4 & 6, // 4를 거치고 6을 통해 이 논리는 true로 결정 -> 6
  0 & 4, // 0 에 의해 바로 false결정 -> 0
  0 || 3, // 3에 의해 true결정 -> 3
  -3 || 12.3, // -3에 의해 true 결정 -> 3
  NaN || { a: "Hello" }, // {} 에 의해 true 결정
  true && false,
];
```

### 활용도

파라미터 값 누락을 대비하도록 짤 수 있음

```js
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
  // name값이 있으면 바로 그값을 출력하나, 없으면 없다고 뜸
}
```

## 구조 분해 할당 (...)

### 배열

```js
const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b); //1, 2

const [a, b, c, d] = arr; // 이렇게 하면 1, 2, 3, undefined
```

### 객체

배열은 순서대로 이면 객체는 `key`값에 따라서

```js
// key값을 응용
const obj = {
  name: "abcd",
  age: 30,
  hobby: "react",
};

let { name, age, hobby, extra = "hello" } = obj;
// name : "abcd"
// age : 30,
//hobby : " react"
//extra : 원래는 undefined이나 기본값 할당으로 "hello"
```

import 할 때나, function의 파라미터에 잘 쓰임

## Spread

흩뿌리기. 쉽게 말하면 배열이나 객체를 흩뿌린다는 의미

```js
const o1 = { name: "hello" };
const o2 = o1;
const o3 = { ...o1 };

console.log(o1 === o2); // true
console.log(o1 === o3); // false

// 깊은 비교 (객체도 완전히 비교)
console.log(JSON.stringify(o1) === JSON.stringify(o3)); // true
```

## for...of , for...in

for..of는 배열, for ... in 은 객체용

```js
// for of  = 배열
let arr = [1, 2, "apple"];
for (const val of arr) {
  console.log(val);
}

// for in = 객체
const obj = {
  a: "a",
  b: 123,
  c: "React",
};

for (const key in obj) {
  console.log(key, obj[key]);
}
```

## 라이브러리 호출

npm 사이트에서 검색

설치 : `npm i "해당명칭"`  
(해당 명칭은 각 라이브러리 설명하는 사이트에 )

이렇게 설치하면 package.json (package-lock.json) 에 이에 대한 기록이 남음

`node_modules` 에는 실제 그 해당 라이브러리 관련 파일

### import 방법

라이브러리 호출 할 때는 경로가아닌 “해당 라이브러리” 이름을 그냥 그대로 사용

```js
import randomColor from "randomcolor"; // 라이브러리 import
```
