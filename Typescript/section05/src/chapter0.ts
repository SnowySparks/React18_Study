// 인터페이스

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void; // 함수 오버로딩
}

const person: Person = {
  name: "Typescript",
  age: 23,
  sayHi: () => {},
};

// person.name = "dfa"; - 에러

// 인터페이스의 Union, Intersection 적용방법 은 타입별칭 혹은 타입주석 외에 불가능함
type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person2: Person | string = {
  name: "리엑트",
  age: 27,
  sayHi: () => {},
};
