import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Button from "../components/Button";
import Editor from "@/components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "@/App";
import { DiaryType } from "@/types";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const context = useContext(DiaryDispatchContext);
  const onDelete = context?.onDelete;
  const [curDiaryItem, setCurDiaryItem] = useState<DiaryType | undefined>();

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요")) {
      if (onDelete) {
        onDelete(Number(params.id));
        nav("/", { replace: true });
      }
    }
  };

  const data = useContext(DiaryStateContext);

  useEffect(() => {
    const currentDiaryItem = data.find((item) => item.id === Number(params.id));
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기장");
      nav("/", { replace: true });
    }
    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryItem} />
    </div>
  );
};

export default Edit;
