// book/[id].tsx
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import style from "./[id].module.css";
import fetchOneBook from "@/lib/fetch-one-book";
import { useRouter } from "next/router";
import Head from "next/head";

export const getStaticPaths = () => {
  // 미리 빌드할 페이지 경로를 지정
  return {
    paths: [
      { params: { id: "1" } }, // id가 1인 페이지를 미리 빌드
      { params: { id: "2" } }, // id가 2인 페이지를 미리 빌드
      { params: { id: "3" } }, // id가 3인 페이지를 미리 빌드
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));

  if (!book) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      book,
    },
  };
};
export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) {
    // 미리 빌드된 페이지가 없을 때
    return (
      <>
        <Head>
          <title>한입 북스 - 검색 결과</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="한입 북스" />
          <meta
            property="og:description"
            content="한입 북스에 등록된 도서들을 만나보세요"
          />
        </Head>
      </>
    );
  }
  if (!book) {
    // book이 null이면 에러 메시지 출력
    return {
      notFound: true,
    };
  }

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
        <div
          className={style.cover_img_container}
          style={{ backgroundImage: `url('${coverImgUrl}')` }}
        >
          <img src={coverImgUrl} />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
}