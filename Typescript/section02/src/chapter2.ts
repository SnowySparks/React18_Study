// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["Hello", "I am", "TS"];

let boolArr: Array<boolean> = [true, false, true];

// 배열 들어가는 요소들 타입이 다양한 경우
let mulArr: (string | number)[] = [1, "hello"];

// 다차원 배열
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// Tuple
let tuple1: [number, number] = [1, 2];
// tuple1 = [1, 2, 3] - 에러
// tuple1 = ["1", 12] - 에러

let tuple2: [number, string, boolean] = [1, "2", true];
// tuple2 = ["123", true, 1] - 에러

const users: [string, number][] = [
  ["C", 1],
  ["Java", 2],
  ["배고파", -3],
  ["ABCD", 12.23],
];
