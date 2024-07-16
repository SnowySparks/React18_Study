import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find((item) => {
      return String(item.id) === String(id);
    });
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다");
      nav("/", { replace: true });
    }
    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);
  return curDiaryItem;
};

export default useDiary;

// Build in Hooks를 함수로 만들어 사용하기 위해서는 커스텀 Hooks를 만든다!
