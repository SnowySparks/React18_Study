// 5가지 요소 순회 및 탐색 메서드
// 1. forEach - Array Helper Method
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2, arr);
});

// 0 2 [ 1, 2, 3 ]
// 1 4 [ 1, 2, 3 ]
// 2 6 [ 1, 2, 3 ]

// d여기서 중요한건 map, reduce 같은 함수도 존재함
let doubledArr = [];

// push - 뒤로
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드, 있으면 true. 없으면 false
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10); // false
console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2, 4, 4];
let index = arr3.indexOf(20); // 있으면 해당  위치 바로 리런, 없으면 -1
console.log(index);
index = arr3.indexOf(4);
console.log(index); // 3

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드, 없으면 -1
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 999);
console.log(findedIndex); // -1

let objectArr = [{ name: "Vue" }, { name: "React" }];

// console.log(
//   objectArr.indexOf({ name: "Vue" })
// );

console.log(objectArr.findIndex((item) => item.name === "Vue")); // 0

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "Vue" }, { name: "React" }];

const finded = arr5.find((item) => item.name === "Vue");

// console.log(finded);
