import { BookData } from "@/types";

export default async function fetchRandomBooks(): Promise<BookData[]> {
  const url = `http://localhost:12345/book/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("서버 상태가 이상합니다.");
    }
    return await response.json(); // JSON 형태로 파싱
  } catch (error) {
    console.error(error);
    return []; // 에러 발생 시 빈 배열 반환
  }
}
