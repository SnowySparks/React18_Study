// 단락평가
// 해당 논리 연산 결과가 "확정적"이 될 때 그 값을 바로 사용하는 것
// Truthy & Falsy도 사용됨
const res = [
  3 & 0,
  4 & 6,
  0 & 4,
  0 || 3,
  -3 || 12.3,
  NaN || { a: "Hello" },
  true && false,
];

for (const val of res) {
  console.log(val);
}
// 0
// 4
// 0
// 3
// -3
// { a: 'Hello' }
// false

// 활용
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
  // name값이 있으면 바로 그값을 출력하나, 없으면 없다고 뜸
}

printName({ name: "ABCD" });
printName({});
// ABCD
// person의 값이 없음
