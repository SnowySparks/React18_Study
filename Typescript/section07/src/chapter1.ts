// 제네릭 사례

// 첫번째
function swap<T>(a: T, b: T): T[] {
  return [b, a];
}

function swap2<T, U>(a: T, b: U) {
  return [b, a];
}

// 사례 2
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}
let num = returnFirstValue([1, 2, 3]);
let num2 = returnFirstValue([1, "Hello"]); // number

// 사례 3
function getLenght<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLenght([1, 2, 3]); //3
let var2 = getLenght("12345"); // 5
let var3 = getLenght({ length: 10 }); // 10
// let var4 = getLenght(123); //이 경우 에러가 남
