//components/searchable-layout.tsx
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./searchable-layout.module.css";
interface SearchableLayoutProps {
  children: ReactNode;
}

const SearchableLayout = ({ children }: SearchableLayoutProps) => {
  const router = useRouter();
  const q = router.query.q;
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (q && typeof q === "string") {
      // 타입 추론
      setSearch(q); // 새로고침 해도 검색어가 유지됨
    }
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSubmit = () => {
    if (!search) return; // 검색어가 없으면 검색하지 않음
    if (search === q) return; // 검색어가 같으면 검색하지 않음
    router.push(`/search?q=${search}`);
  };

  // 엔터키로 검색
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          value={search}
          type="text"
          placeholder="검색어를 입력하세요..."
          onChange={onChangeSearch}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
};

export default SearchableLayout;
