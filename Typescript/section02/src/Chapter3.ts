let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: "MY API KEY";
};

// config.apiKey = "ABCD" 에러
