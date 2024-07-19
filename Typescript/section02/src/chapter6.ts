//any & unknown
// 특정 변수의 타입을 우리가 모를 때 사용
//

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

// any 타입은 메소드 호출이가능
anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

let num: number = 10;
num = anyVar;

let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // 오류 !
// unknown은 메서드 호출불가, 연산 자체 불가
// 해당 타입에 저장하는건 가능한데
// 해당 타입을 통해 다른 type에 집어넣는건 안됨

if (typeof unknownVar === "number") {
  num = unknownVar;
}
