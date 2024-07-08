# 정리

## 변수

- `let`, `const`
- 변수 타입

  - Primitive Type
    - Number, String, Boolean, null, undefined
    - Template Literals -백틱 ( ` ${변수}`)
  - 객체 타입 (Object Type)

    - Object

      - 생성 방식 : `new Object()`, `{}`
      - key : value들, `key`를 `property`로 지칭 하기도 함
      - key를 띄어쓰기 할려면 반드시 `""` 씌우기
      - 접근방식 : 점방식(띄어쓰기 있는 키 불가), []방식 (모든 키 가능. 반드시 `""` 씌워야함 )
      - 삭제 : `delete`
      - 추가 : 변수 대입하듯이
      - key 존재여부 : `in`
      - 메서드도 추가 가능

        ```js
        // 2. 객체 프로퍼티 (객체 속성)
        let person = {
          name: "ABCD",
          age: 27,
          hobby: "테니스",
          job: "FE",
          extra: {},
          10: 20,
          "like cat": true,
        };

        //접근 (점 표기법, 괄호 표기법)
        let name = person.name; // 띄어쓰기 적힌 키 불가
        let age = person["age2"]; // ""로 감싸야함

        let property = "hobby"; //없는 키 - undefined

        // 프로퍼티를 추가
        person.job = "fe developer";
        person["favoriteFood"] = "떡볶이";

        // 3.3 프로퍼티 수정
        person.job = "educator";
        person["favoriteFood"] = "초콜릿";

        // 3.4 프로퍼티 삭제 - delete
        delete person.job;
        delete person["favoriteFood"];

        // 3.5 프로퍼티 존재 유무 (in 연산자)
        let result1 = "name" in person;
        let result2 = "cat" in person;
        ```

    - Array

      - 흔히 생각하는 Array
      - 순차접근 가능
      - for (item of Array)

      - 생성방법 : `[]` , `new Array()`

    - 그외것들 : `Date`, `RegExp`,

## 연산자

C++ , Java에 있는 연산 모두 적용

### Javascript만의 특별한 것

1. null 병합 연산자 : `??`  
   -> 피연산자 중 null / undefined 가 아닌 것을 채택함
   -> 모든 피연산자가 해당되지 않으면 (값 존재할 경우) 단축평가 진행

2. type 변수
   -> 해당 변수 type를 string으로 출력

## 조건문 & 반복문

조건문은 c++ 있는 것 그~대로

반복문도 c++ 있는건 그대로~
추가적으로

1. 객체에 사용해야 하는 for 구문 : for... in 구문

```js
for (a in Object) {
  console.log(Object.a);
}
```

2. 배열에 사용해야 하는 for 구문 : for ... of 구문 - 순서보장

```js
for (val of [1, 2, 3, 4]) {
  console.log(val);
}
```

## 함수

2가지 형식이 있음

1. function 방식 - 흔한 방식

```js
function add(a, b) {
  return a + b;
}
```

2. 화살표 함수

```js
const add = (a, b) => a + b;

const func = (a, b, c) => {
  console.log(a, b, c);
  return a * b + c;
};

const oper = (a) => a + 1;
```

기능적으로 대부분 같으나 세부적인 부분이 다름 - event에서

### 콜백함수

함수의 파라미터가 함수 형태 인 것

```js
// 1. 콜백함수
function main(value) {
  value();
}

main(() => {
  //   console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}
```
