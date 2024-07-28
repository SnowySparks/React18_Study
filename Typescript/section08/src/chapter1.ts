// 인덱스트 엑세스 타입

// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//   };
// }

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

// function printAuthorInfo(author: Post["author"]["id"]) {
//     console.log(`${author.id} - ${author.name}`);
//   }
// 중첩가능! - 단 맞게 잘 쓴다면...

const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "리엑트",
  },
};

type Tup = [number, string, boolean];
type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
type TupNum = Tup[number]; // number | string | boolean
