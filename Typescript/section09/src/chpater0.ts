// 조건부 타입
// 삼향연산자를 이용

type A = number extends string ? number : string;
// number 가 string의 subType인가 ? 참 : number , 거짓 : string

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // number

// 제네릭 조건부 타입 - 제네릭과 함께 사용할 때 그 위력이 극대화
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

function removeSpace<T>(text: T): T extends string ? string : undefined;
function removeSpace<T>(text: T) {
  if (typeof text === "string") return text.replaceAll(" ", "");
  else return undefined;
}

let result = removeSpace("Hi, Im React Study user"); // string
let result2 = removeSpace(undefined); //undefined
result.toUpperCase();
