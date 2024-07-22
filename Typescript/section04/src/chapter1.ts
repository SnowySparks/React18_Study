// 함수 타입 표현식

// 함수의 타입 표현식 (Function Type Expression)
type Oper = (a: number, b: number) => number;

// const add = (a: number, b: number): number => a + b;
const add: Oper = (a, b) => a + b; // 마치 변수처럼 타입을 지정
const sub: Oper = (a, b) => a - b;
const multiply: Oper = (a, b) => a * b;
const divide: Oper = (a, b) => a / b;
//이 경우 별도로 파라미터나 리턴에 타입을 안써도 됨
//사용 이유 - 사용해야 하는 곳이 한두곳이 아니면 이것이 유용

// 이것을 적용이 될 경우 매개변수 갯수, 타입, 리턴타입 다 맞추어 줘야 함

// Call Signature - 호출 시그니처
type Oper2 = {
  (a: number, b: number): number;
};
const add2: Oper2 = (a, b) => a + b; // 마치 변수처럼 타입을 지정
const sub2: Oper2 = (a, b) => a - b;
const multiply2: Oper2 = (a, b) => a * b;
const divide2: Oper2 = (a, b) => a / b;
// 함수 타입을 지정 지정할때 그 부분만 딱 때어내면 저것과 같음
// 기능은 함수 타입 표현식과 완전 동일
