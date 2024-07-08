// 배열 구조 분해 할당

const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b); //1, 2

const [a1, b1, c1, d1] = arr;
console.log(a1, b1, c1, d1); //1 2 3 undefined

const [a2, b2, c2 = 32, d2 = 32] = arr;
console.log(a2, b2, c2, d2); // 1 2 3 32

// 객체(obj) 구조 분해 할당
// key값을 응용
const obj = {
  name: "abcd",
  age: 30,
  hobby: "react",
};

let { name, age, hobby, extra = "hello" } = obj;
console.log(name, age, hobby, extra); // abcd 30 react hello

// 활용 : 함수 인수 - 구조분해 할당 (단 인자는 object)
const func = ({ name, age, extra }) => {
  console.log(name, age, extra);
};
func(obj);
