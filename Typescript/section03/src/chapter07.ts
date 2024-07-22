// 타입 좁히기
// 조건문 등 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법

function func(value: number | string) {
  // 파라미터 단에선 number | string 인식

  //   const a = value.toUpperCase(); -에러 , 타입 확정이 안남
  if (typeof value === "number") {
    // -> Type Guard
    console.log(value.toFixed()); // 여기선 number로 인식
  } else if (typeof value === "string") {
    // Type Guard
    console.log(value.toUpperCase()); // 여기선 string으로 인식
  }
}

// instanceof
function func1(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // Date 라는 클래스의 객체인가?
    console.log(value.getTime());
  }
}

//in

type Person = {
  name: string;
  age: number;
};

function func2(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // value가 null/undefined가 아니고, age속성값이 있는가?
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
