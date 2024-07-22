// 타입 단언

type Person = {
  name: string;
  age: string;
};

// 필요한 상황
// let person: Person = {};
// person.name = "React";
// person.age = 17;

// 타입 선언 방식 -> 초기값 as Type
let person = {} as Person;
person.name = "Hello";
person.age;

// 타입선언 -> 초과 프로퍼티 피할 수 있음
type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 규칙
let num1 = 10 as never; // A as B 에서 A는 B의 슈퍼타입
let num2 = 10 as unknown; // A as B 에서 A는 B의 서브 타입
// let num3 = 30 as string; -> 에러

// 다중 단언 - 매우 비추천 걍 쓰지마
let num3 = 10 as unknown as string; //

// const 단언
let num4 = 10 as const; // number literal

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 이 경우 모든 프로퍼티가 readonly로 처리가 됨

//Non null
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "계시글1",
  author: "이정환",
};

const len: number = post.author!.length;
