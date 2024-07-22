// 사용자 정의 타입 가드
// 서로소 유형의 타입을 구현하지 못하는 경우... - 대표 : 남이 이미 만든 코드 사용

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 사용자 정의 타입 가드 함수
function isDog(animal: Animal): animal is Dog {
  //   return animal.isBark !== undefined; 이렇게 쓰면 오류가 남
  return (animal as Dog).isBark !== undefined; // 타입 단언을 이용
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined; // 타입 단언을 이용
}
function warning(animal: Animal) {
  if (isDog(animal)) {
    // 개
    animal; // Dog 취급
  } else if (isCat(animal)) {
    // 고양이
    animal; // Cat 취급
  }
}
