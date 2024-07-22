// 타입 추론

let a = 10; // number로 추론

// function func(param) {} -> 에러

let b = "1234";
let c = {
  id: 1,
  name: "React",
  profile: {
    nickname: "TS",
  },
};

//구조 분해 할당으로 인한 타입 추론
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

// 함수 반환값
function func() {
  return "Hello";
}

// 함수 파라미터 기본값
function f(message = "Typescript") {
  return `Hello ${message}`;
}

// 주의해야 할 때
// 초기값 없이 선언될 때

let d; // Any 타입으로 판단
d = 10;
d.toFixed(); // 여기 이후론 number 타입으로 추론함

d = "Hello"; //string으로
d.toUpperCase();

// const 변수 추론
const num = 10;
const str = "12345";

// 최적 공통 타입
let arr = [1, "string"];
// (string | number)[] 타입으로 추론
