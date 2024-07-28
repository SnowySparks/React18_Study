// infer : inference (추론)
//
type Func = () => string;
type Func2 = () => number;
// type ReturnType<T> = T extends () => string ? string : never;

// type A = ReturnType<Func>; // string
// type B = ReturnType<string>; // never
// type C = ReturnType<Func2>; //never

type ReturnType<T> = T extends () => infer R ? R : never;
type A = ReturnType<Func>; // string
type B = ReturnType<Func2>; // number
type C = ReturnType<number>; // never

// 사용예제
// Promise의 resolve 타입을 infer를 이용해 추출하는 예
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
type PromiseA = PromiseUnpack<Promise<number>>; // number
type PromiseB = PromiseUnpack<Promise<string>>; // string
type PromiseC = PromiseUnpack<number>; // never
