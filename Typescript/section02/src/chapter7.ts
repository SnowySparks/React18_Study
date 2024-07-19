// void
// 아무겂도 없다는 의미의 타입

function func1(): string {
  return "hello";
}
function func2(): undefined {
  console.log("Hello");
}

let a: void;
// a = 1
// a = "Hello"
// a = {}
a = undefined;

//never
//never -> 존재하지 않는
//불가능한 타입

// 불가능 한 값의 타입을 정의할 때 never 타입을 사용
function func3(): never {
  while (true) {}
}

//  다음과 같이 의도적으로 오류를 발생시키는 함수도 never 타입으로 반환값 타입을 정의
function func4(): never {
  throw new Error();
}

// let b : never
// b = null;
// b = undefined
