// 조건부 타입 기반의 유틸리티 타입들

// 1. Exclude<T, U> : T에서 U 타입 제외한 속성
type A = Exclude<string | boolean, string>;
type Exlcude<T, U> = T extends U ? never : T;

// 2. Extract
type B = Extract<string | boolean, boolean>;
type Extract<T, U> = T extends U ? T : never;
// boolean

// 3. ReturnType<T>
function funcA() {
  return "hello";
}
function funcB() {
  return 10;
}
type ReturnA = ReturnType<typeof funcA>;
// string

type ReturnB = ReturnType<typeof funcB>;
// number

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
