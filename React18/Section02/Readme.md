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

## Array Methods



- `push(data)`  : data를 해당 배열 맨 뒤에 저장
- `pop()` : 배열 가장 맨뒤 원소 제거 후 해당 원소 리턴
- `shift()` : 배열 가장 맨앞원소 제거후 해당 원소 리턴
- `unshift(data)` : 배열 가장 맨앞에 원소추가
- `slice(st, en)` : 인덱스가 [st, en) 범위 내 원소부분을 배열로 리턴, 원본은 변화x
    - 음수를 붙이면 역순으로 적용 (맨끝이 -1, 맨첨이 -length)
- `concat(arr)`  : 현재 배열에 arr배열이 붙어져 있는 결과를 return, 원본수정x


- `forEach( 콜백함수(item, idx, arr) {})` : 각 배열 원소를 순서대로 돌면서 콜백함수를 수행함 , `item`은해당 원소 데이터, `idx`는 인덱스값, `arr`는 **해당 “원본” 객체 그자체**
    
    이를 모든 배열에 담긴 원소값을 순회하면서 직접 수정할 수 있ㅇ므
    
    해당 메서드는 `Array Helper methods` 중 하나
    
- `includes(data)` : 해당 배열 내에 data 가 있는지 판단. 있으면 `true` 아니면 `false` 리턴
- `indexOf(data)` : 해당 data가 배열 내에 왼쪽부터 탐색해서 처음 등장하는 인덱스 위치 리턴
    
    만약 없으면 -1 리턴됨
    
    해당 메서드는 “얕은탐색” - 즉 객체를 탐색하는 방식에 어울리지 않음 
    
- `findIndex( callback(data) )` : 해당 콜백함수 결과가 참이 되는 첫번째 인덱스 값 리턴
    
    만약 없으면 -1리턴
    
    해당 콜백함수는 반드시 true/false 리턴처리 되어야 함
    
    해당 메서드는 객체 탐색에도 효과적
    
- `find(callback(data))` : findIndex() 와 동일하나, 리턴값은 인덱스가 아닌 “해당 데이터” 그대로 출력

- `filter( callback(item, idx, arr) )` : 해당 콜백함수에서 조건에 맞는 원소들을 모아 배열로 리턴
    
    Array Helper Method
    
- `map( callback(item, idx, arr) )` : 해당 콜백함수에서 연산 결과 값(리턴값)들을 모아서 배열로 리턴

- `sort( callback(a, b) )` : 해당 콜백함수 기준으로 정렬.
    
    콜백함수가 없으면 “사전순”으로… 즉 모든 원소를 문자열로 치환되고 그걸 사전순으로
    
    있는 경우 해당 연산 결과가 음수이면 a가 앞쪽으로, 양수면 b가 앞쪽으로, 0이면 아무것도 안함 의미
    
- `toSort( callback(a, b) )` : sort와 기능자체는 동일하나, 이것은 원본배열엔 변화없고 그 정렬 결과를 “리턴”헤줌

- `join(”구분자”)` : 해당 배열을 한 문자열로 합침, 구분자로 구분해서, 단 구분자가 없으면 기본은 `,` 이 됨

### Arrays Helper Methods  
배열에 대해 자주 사용하는 로직을 재활용할 수 있게 만든 일종의 메서드 집합.  
`forEach, map, filter, some, any, find, reduce`

해당 메서드의 콜백함수에 다음과 같은 파라미터 전달 (순서대로 개시)
- item : 원소 데이터
- index : 해당 원소 데이터를 가리키는 인덱스값
- arr : 해당 배열 원본 객체 