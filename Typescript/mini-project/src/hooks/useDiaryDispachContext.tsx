import { DiaryDispatchContext } from "@/App";
import { useContext } from "react";

const useDiaryDispachContext = () => {
  const dispatch = useContext(DiaryDispatchContext);
  if (!dispatch) {
    throw new Error("dispatch에 문제가 발생했어요");
  }
  return dispatch;
};

export default useDiaryDispachContext;
