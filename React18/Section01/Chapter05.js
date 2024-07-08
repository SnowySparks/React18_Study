// 묵시적
console.log(7 + 7 + 7); //21
console.log(7 + 7 + "7"); //"147"
console.log("7" + 7 + 7); // "777"

console.log(true + 7 + 7); //15
console.log(7 + true + "7"); // "87"
console.log("7" + 7 + true); // "77true"

console.log(7 - true); // 6
console.log("13" - 3); // 10

console.log("--------------");

console.log(1 == "1"); // true
console.log(0 == false); // true
console.log("abc" == null); //false
console.log(null == undefined); // true
console.log(!!{}); //true
console.log(!![]); //true
console.log(!!""); // false

console.log("--------------");
// 명시적
const str = "1234";
let val = Number(str);

const abc = 2314;
const strABC = String(abc);

console.log(val, strABC); //1234 "2314"
