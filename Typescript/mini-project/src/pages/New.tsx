import { DiaryDispatchContext } from "@/App";
import Button from "@/components/Button";
import Editor from "@/components/Editor";
import Header from "@/components/Header";
import { DiaryType } from "@/types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const New = () => {
  const context = useContext(DiaryDispatchContext);
  const onCreate = context?.onCreate;
  const nav = useNavigate();

  const onSubmit = (input: Omit<DiaryType, "id">) => {
    if (onCreate) {
      onCreate(input.createdDate, input.emotionId, input.content);
      nav("/", { replace: true });
    }
  };
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로 가기"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
