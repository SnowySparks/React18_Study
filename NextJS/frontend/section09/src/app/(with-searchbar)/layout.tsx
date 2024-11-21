import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* 이제부터 이 코드는 사전 렌더링은 배제되고 오직 클라이언트 쪽에서만 렌더링 */}
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
