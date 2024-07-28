interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in keyof User]?: User[key];
};

type BooleanUser = {
  readonly [abcd in keyof User]: boolean;
};

// 한명의 유저 정보를 불러오는 기능(이라고 가정하는 함수)
function fetchUser(): User {
  return {
    id: 1,
    name: "리엑트",
    age: 27,
  };
}

// 한명 유저 정보 수정하는 기능
function updateUser(user: PartialUser) {
  //수정기능
}

updateUser({
  //   id: 1,
  //   name: "리엑트사용",
  age: 25,
});
