// Spread 연산자 (...)
// 객체나 배열에 저장된 여러개의 값을 흩뿌림

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 123,
};

console.log(obj2); // { a: 1, b: 2, c: 123 }

// Rest 매개변수 (함수 파라미터) - 여러개의 매개변수를 배열로 묶어서 가능
const func = (...arr) => {
  console.log(arr);
};

func(...arr1); // [ 1, 2, 3 ]
func(1, 2, 3, "abcd"); // [ 1, 2, 3, 'abcd' ]

const func1 = (a, b, ...arr2) => {
  console.log(a, b, arr2);
};
func1(...arr3); // 1 2 [ 3, 4, 5, 6 ]
