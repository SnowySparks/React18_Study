// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가?
// 2가지 기준 다 만족해야함

// 1. 반환값이 호환되는가
type A = () => number; // number 리턴
type B = () => 10; // number Literal로 리턴

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업 캐스팅 (number 에 number literal 를 할당)
// b = a; - 에러 : 다운 캐스팅

// 2. 매개변수가 호환되는가
// - 1 : 매개변수 개수가 같은가?

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 에러남 : value 파라미터를 number에서 number literal로 바꾸어 취급하겟다 - 업캐스팅
// 매개변수 타입 기준 호환성 판단할 땐 "업캐스팅" 일때 호환이 안될때 판단
d = c;

// 객체로 바라보기
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

// let testFunc = (animal: Animal) => { -= 에러
//   console.log(animal.name);
//   console.log(animal.color);
// };

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//   animalFunc = dogFunc; // ❌
dogFunc = animalFunc; // ✅

// 2-2 매개 변수 개수 다른 경우

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; ❌

// 매개변숙 ㅏ많
