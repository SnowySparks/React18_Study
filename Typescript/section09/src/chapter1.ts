// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number; //제네릭 조건부 타입
let a: StringNumberSwitch<number>; // string
let b: StringNumberSwitch<String>; // number
let c: StringNumberSwitch<number | string>; // string | number

let d: StringNumberSwitch<boolean | number | string>; // string | number

// 실용예제 - Exclude 조건부 타입
type Exclude<T, U> = T extends U ? never : T;
let e: Exclude<boolean | number | string, string>; // number , string

type Extract<T, U> = T extends U ? T : never;
let f: Extract<boolean | number | string, string>; // string

// 분산 억제
type StringNumberSwitch2<T> = [T] extends [number] ? string : number; //분산 억제
let g: StringNumberSwitch2<number>; // string
let h: StringNumberSwitch2<boolean | number | string>; // number
