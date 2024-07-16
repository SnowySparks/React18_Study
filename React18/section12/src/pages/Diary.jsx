import { useNavigate, useParams } from "react-router-dom";
import Viewer from "../components/Viewer";
import Header from "../components/Header";
import Button from "../components/Button";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

function Diary() {
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`${params.id}번 일기`);

  const curDiaryItem = useDiary(params.id);
  // 여기서 중요한 것은 useDiary는 Mount되고 나서 호출이 되기 때문에 그 전까진 undefined상태임
  // 따라서 Mount될 때 까지는 데이터가 없으니 이에 대한 처리가 피료함
  if (!curDiaryItem) {
    return <div>데이터 로딩 중</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;

  return (
    <div>
      <Header
        title={`${getStringedDate(new Date(createdDate))} 기록`}
        leftChild={
          <Button
            text={"뒤로가기"}
            onClick={() => nav(-1, { replace: true })}
          />
        }
        rightChild={
          <Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
}

export default Diary;
