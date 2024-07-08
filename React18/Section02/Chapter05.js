// 원시 타입은 해당 데이터의 내용을
// 객체 타입은 해당 데이터의 참조값을 (메모리 주소)를 기준으로

const o1 = { name: "hello" };
const o2 = o1;
const o3 = { ...o1 };

console.log(o1 === o2); // true
console.log(o1 === o3); // false

// 깊은 비교 (객체도 완전히 비교)
console.log(JSON.stringify(o1) === JSON.stringify(o3)); // true

// 배열, 함수도 객체임
