// 제네릭
// 함수나 인터페이스, 타입 별칭, 클래스 등을 다양한 타입과 함께 동작하도록 만들어 주는 타입스크립트의 기능

function func<T>(value: T): T {
  return value;
}

let num = func(10);
let bool = func(true);

// let arr = func([1, 2, 3] as [number, number, number]);
let arr = func<[number, number, number]>([1, 2, 3]);
