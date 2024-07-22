// unknown Type

function unknownExap(): void {
  // Unknown 은 최상위
  // 따라서 그 하위 타입 다 가능 - 업캐스팅
  let a: unknown = 1;
  let b: unknown = "Hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  //   그 반대는 불가능 - 다운캐스팅
  let unknownVar: unknown;
  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
}

// never - 공집합
function neverExam(): void {
  // 불가능한 함수 및 아무것도 돌아오는것 없다
  function neverFunc(): never {
    while (true) {}
  }

  //   업캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   다운캐스팅 - 에러
  //   수나 string이 never에 집어넣을려고 하는것 - 에러
  //   let never1: never = 10;
  //   let never2: never = "string";

  //   주로 아무런 값도 저장하면 안된다는 의미로 사용하면 매우 좋음
}

// void
function voidExam() {
  function voidFunc(): void {
    console.log("Hi");

    return undefined; // 이것도 업캐스팅이기에 가능
  }

  //   upcasting
  let voidVar: void = undefined;
}

// any - 치트기
// 유일하게 타입계층도를 완전히 무시함
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  //   다운캐스팅 - 근데 any는 치트키라 가능함
  //  자기가 다운캐스팅 하거나 당하거나 다 가능
  anyVar = unknownVar;
  undefinedVar = anyVar;

  // never 타입에 주입은 불가능
  // neverVar = anyVar; -> 에러
}
