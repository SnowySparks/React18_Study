// 선언 합칭

interface Person {
  name: String;
}

interface Person {
  //   name: number;
  age: number;
}

const person = {} as Person;
person.name = "Hello";
person.age = 123;
