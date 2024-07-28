// - Mapped 기반 Utility Type

// 1. Partial<T> : 특정 객체의 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "Hello",
  content: "초안",
};

// 2. Required<T> : 특정 객체의 타입의 모든 프로퍼티를 필수 프로퍼티 바꿔주는 타입

const withThumbnailPost: Required<Post> = {
  title: "책",
  tags: ["ts"],
  content: "",
  thumbnailURL: "123",
};

// -? : ?를 빼겟다는 뜻이 됨 -> 다 필수가 됨
type Required<T> = {
  [key in keyof T]-?: T[key];
};

// 3. Readonly<T> : 특정 객체의 모든 프로퍼티릴 읽기 전용으로
const readonlyPost: Readonly<Post> = {
  title: "책",
  tags: ["ts"],
  content: "",
};

// readonlyPost.content = "12334123"; -> 버그

type ReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};
