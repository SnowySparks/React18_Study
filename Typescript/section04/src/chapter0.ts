// 함수 타입 정의

// 함수가 어떤 매개변수 받고 어떤 결과를 반환하는지 이야기  - 타입 정의
function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수 타입 정의
const add = (a: number, b: number): number => a + b;
// const add = (a: number, b: number) => a + b;

// 함수 매개변수 관련 내용

// 기본값을 넣게 되면 해당 변수의 타입은 추론이 되어짐 기본값에 의해
function introduce(name = "React", age: number, tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") console.log(`tall : ${tall + 10}`);
}

// 주의점1 타입과 기본값 타입 다르면 오류가 남
// 주어짐2 지정한 타입과 다른 인자를 넣으면 오류
// 주의점3 필수 매개변수가 선택적 매개변수보다 앞에 있어야만 한다

introduce("리엑트", 23, 123);
introduce("리엑트", 23); //이게 오류가 안날려면 선택적 매개변수 (?) 를 넣어야 함

// Rest Parameter with 타입
function getSum(...rest: number[]) {
  return rest.reduce((prev: number = 0, cur: number): number => prev + cur);
}
console.log(getSum(1, 2, 3)); // 6
console.log(getSum(1, 2, 3, 4, 5)); // 15

function getSum_tuple(...rest: [number, number, number]) {
  return rest.reduce((prev: number = 0, cur: number): number => prev + cur);
}

console.log(getSum_tuple(1, 2, 3)); // 6
// console.log(getSum_tuple(1, 2)); - 에러
// console.log(getSum_tuple(1, 2, 3, 4, 5)); - 에러
