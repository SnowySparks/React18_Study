// Truthy & Falsy

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy : Falsy 이외의 모든 경우
// 특히 해당 경우들
const arr = [];
const obj = {};
const func = () => 3;

// 활용 - 함수 파라미터로 전달받은 값이 없는 경우...
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}
