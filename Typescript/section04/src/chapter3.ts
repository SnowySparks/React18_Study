// 함수 오버로딩
// 하나의 함수를 매개변수의 개수나 타입에 따라 다르게 동작하도록 만드는 문법

// 매개변수 1개 : 20 곱한값, 3개 -> 다 더한 값 만든다고 가정

// 버전들 - 버전별 오버로드 시그니쳐 , 일종의 선언부를 만드는 것 - 선언부는 {} 선언 안함
// 실제 구현부는 따로 만드는 것
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 - 실제 시그니처
// b, c는 없을 수 있으니 선택적 파라미터로 구현해야 함
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") return a + b + c;
  else return a * 20;
}

// function func(a: number, b: number, c: number) {} -> 이렇게 만들면 에러 남 - 무조건 변수 3개이기 때문

// func(1);
// func(1, 2); - 에러
// func(1, 2, 3);
// func(1, 2, 3, 4); - 에러
// 선언부 때문에 매개변수 1개 혹은 3개만 따름 , 즉 Overload Signature를 따름
