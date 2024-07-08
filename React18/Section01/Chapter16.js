// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "abcd",
  // 메서드 선언
  sayHi() {
    console.log("abcd");
  },
};

person.sayHi();
person["sayHi"]();

//abcd
//abcd
