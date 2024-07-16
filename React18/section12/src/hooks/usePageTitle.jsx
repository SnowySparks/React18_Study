import { useEffect } from "react";
const usePageTitle = (title) => {
  useEffect(() => {
    // $ 의미 : 관례상 해당 변수엔 DOM 요소가 들어간단 의미
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
