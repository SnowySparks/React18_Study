// 제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}
let keyPair: KeyPair<string, number> = {
  key: "Hello",
  value: 123,
};

// - 인덱스 시그니처의 활용
interface NumberMap<V> {
  [key: string]: V;
}

let StringMap: NumberMap<string> = {
  key: "Hello",
};

let NumberMap: NumberMap<number> = {
  abc: 123,
};

// -------
// 제네릭 타입

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  abc: "abc초코",
};

let numberMap2: Map2<number> = {
  abc: 1234,
};

// 활용 예시
// 유저 관리 프로그램. 유저구분 : 학생 유저 / 개발자 유저
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToschool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developer: User<Developer> = {
  name: "리엑트",
  profile: {
    type: "developer",
    skill: "Typescript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};

// goToschool(developer); 에러
