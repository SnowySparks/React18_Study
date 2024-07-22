// 기본 타입 호환성
let num1: number = 10;
let num2: 10 = 10;
num1 = num2; //Upcasting

// 객체 타입 간 호환성
// -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;
// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "ReactJS",
  price: 2314,
  skill: "reactjs",
};

book = programmingBook;

// 초과 프로퍼티 검사

let book2: Book = {
  name: "ReactJS",
  price: 2314,
  //skill: "reactjs",
};

function func(book: Book) {}
func({
  name: "ReactJS",
  price: 2314,
  //   skill: "reactjs", -> 에러!!!
});
