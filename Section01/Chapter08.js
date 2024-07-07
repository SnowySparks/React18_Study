// null 병합 연산자 : ??
// 피연산자들 중 존재하는 값을 추려내는 것
// null, undefined 값이 아닌 피연산자를 리턴
let var1; //undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4); // 10
console.log(var3 ?? var2); // 20 - 단축평가

// typeof 연산자
console.log(typeof 123); // number
console.log(typeof true); // boolean
