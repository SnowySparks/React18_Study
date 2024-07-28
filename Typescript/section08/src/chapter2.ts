// keyOf 연산자
// 객체 타입에 적용되어짐

// interface Person {
//   name: string;
//   age: number;
// }

// function getPropertyKey(person: Person, key: string) {
//   return person[key];
// }

const person = {
  name: "리엑트",
  age: 27,
};
type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}
