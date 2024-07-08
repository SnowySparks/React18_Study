// 1. Number Type
const num1 = 27,
  num2 = -1.5,
  num3 = -20;

// 사칙연산가능
console.log(num1 * num2);

// 특수
let inf = Infinity;
let minf = -Infinity;

const nan = NaN; //-> 불가능한 연산 결과를 이걸로 표현
console.log(1 * "Hello");

// 2. String
const myName = "Sparta";

// Template Literals
const textValue = `${myName}의 나이는 ${num1}`;
console.log(textValue);

// 3. Boolean Type
const alwaysTrue = true;
const result = 1 > 4;
console.log(alwaysTrue, result);

// 4. Null & Undefined

const res = null;
let abc;
console.log(res, abc);
