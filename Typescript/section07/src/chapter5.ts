import { resolve } from "path";

// 프로미스 객체
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("실패애!");
  }, 3000);
});

promise.catch((err) => {
  console.log(err);
});

// 프로미스 반환하는 함수를 정의하기
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost() {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
});
