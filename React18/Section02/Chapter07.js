// Array 메서드

// length : 길이
const arr = [1, 2, 3, 4];
const len = arr.length;

// pop - 가장뒷 원소 제거
arr.pop();
console.log(arr); //[ 1, 2, 3 ]

// shift - 가장앞 원소제거
arr.shift();
console.log(arr); // [ 2, 3 ]

// unshift - 가장 앞 원소 추가
arr.unshift(123);
console.log(arr); // [ 123, 2, 3 ]

// slice - [start, end) 구간 리턴
let ar = [0, 1, 2, 3, 4, 5];
let slice_result = ar.slice(2, 4); // 2, 3자름
console.log(ar); // [ 0, 1, 2, 3, 4, 5 ]
console.log(slice_result); //[ 2, 3 ]
slice_result = ar.slice(3); // [ 3, 4, 5 ]
console.log(slice_result);
slice_result = ar.slice(-1); // 뒤에서부터 몇 개
console.log(slice_result); // [ 5 ]

// contatct
// 자기배열에 파라미터로 받은 배열을 붙인 결과를 리턴
// 원본수정x
const arr2 = [1, 2];
const arr3 = ["a", 1234];
const arr4 = arr2.concat(arr3);
console.log(arr4); // [ 1, 2, 'a', 1234 ]
console.log(arr2); // [ 1, 2 ]
