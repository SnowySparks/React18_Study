// 대수 타입(Algebraic type)
// 여러개의 타입을 합성해서 새롭게 만들어 내는 타입
// 합집합 , 교집합이 잇음

// 합집합 - Union, 바 | 를 이용
let a: string | number | boolean = "Hello";
a = 123;
a = true;

let arr: (string | number | boolean)[] = [1, "abcd", false];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   name: "",
// };

// 교집합 - Intersection, & 를 이용
let variable: number & string; // number

// 교집합으로 적힌 객체 Property들을 “전부 다” 가지고 있어야만 함
type Intersection = Dog & Person;
let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
