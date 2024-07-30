import { useParams } from "react-router-dom";
import Header from "@components/Header";
import Button from "@components/Button";
import Editor from "@components/Editor";
import { useNavigate } from "react-router-dom";
import useDiary from "@/hooks/useDiary";
import { DiaryType } from "@/types";
import useDiaryDispachContext from "@/hooks/useDiaryDispachContext";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useDiaryDispachContext();
  const curDiaryItem = useDiary(Number(params.id));

  const onClickDelete = () => {
    if (window.confirm("정말 삭제하겠습니까? 복구는 불가능해요")) {
      onDelete(Number(params.id));
      nav("/", { replace: true });
    }
  };

  // 수정 이벤트 전달용
  const onSubmit = (input: DiaryType) => {
    if (window.confirm("일기를 수정할까요?")) {
      onUpdate(
        Number(params.id),
        input.createdDate,
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button
            text={"< 뒤로가기"}
            onClick={() => {
              nav(-1);
            }}
          />
        }
        rightChild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
