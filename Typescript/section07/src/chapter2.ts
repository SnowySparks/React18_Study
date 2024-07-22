// map 메서드
const arr = [1, 2, 3];
const nwrArr = arr.map((item) => 2 * item); // [2, 4, 6];
// 여기서 newArr는 자동으로 number[]로 할당 됨
// map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    result.push(callback(arr[i]));
  }
}

map(arr, (it) => it * 2);
map(["hi", "hello"], (it) => it.toUpperCase());
map(["123", "1234"], (it) => parseInt(it));

// forEach
const arr2 = [...arr];
arr2.forEach((item) => console.log(item));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; ++i) {
    callback(arr[i]);
  }
}
