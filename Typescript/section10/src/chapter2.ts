// Mapped Type 기반 Utility Type 2

// 1. Pick<T, K>
// 객체 타입으로 부터 특정 프로퍼티만 딱 골라내는 타입
// Pick 타입에 T가 name, age가 있는 객체 타입이고 K가 name 이라면 결과는 name만 존재하는 객체 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날글",
  content: "옛날컨텐츠",
};

// 2. Omit<T, K>
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// 3. Record<K, V>

// type Thumbnail = {
//     large: {
//       url: string;
//     };
//     medium: {
//       url: string;
//     };
//     small: {
//       url: string;
//     };
//   };
// 앞으로 버전이 많아질 수록 계속해서 중복코드가 발생
type Thumbnail = Record<"large" | "medium" | "small", { url: "string" }>;

type Record<K extends keyof any, V> = {
  [key in K]: V;
};
