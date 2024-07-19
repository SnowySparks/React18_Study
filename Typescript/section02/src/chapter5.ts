// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "Java",
  role: Role.ADMIN,
};

const user2 = {
  name: "Typescript",
  role: Role.USER,
};
const user3 = {
  name: "Go",
  role: Role.GUEST,
  Language: Language.korean,
};
