// 기존 사칙연산 들 (+ - / % *)

// 할당 연산자
let a = 10;
a += 30;
a *= 2;
a %= 13;
a /= 3;

console.log(a);

// 증감 연산자
a = 10;
a++;
a--;

console.log("------------");

// 비교 연산자
console.log(a == 10, a == "10"); //true, true
console.log("A" < "B"); //true

// 동등연산자

console.log(a === "10"); // false
