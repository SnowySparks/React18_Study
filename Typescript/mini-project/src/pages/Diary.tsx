import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Viewer from "@/components/Viewer";
import useDiary from "@/hooks/useDiary";
import { getStringedDate } from "@/util/get-stringed-date";

const Diary = () => {
  const params = useParams();
  const curDiaryItem = useDiary(Number(params.id));
  const nav = useNavigate();
  if (!curDiaryItem) {
    return <div>로딩중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;

  return (
    <div>
      <Header
        title={getStringedDate(new Date(createdDate))}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
