// 템플릿 리터럴 타입
// 템플릿 리터럴을 이용해 특정 패턴을 갖는 String 타입을 만드는 기능

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color} - ${Animal}`;
