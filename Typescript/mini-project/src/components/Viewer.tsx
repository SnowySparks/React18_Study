import "./Viewer.css";
import { getEmotionImage } from "@/util/get-emotion-img";
import { emotionList } from "../util/constance";
import { useNavigate } from "react-router-dom";
import { emotionItemType } from "@util/constance";

interface Props {
  emotionId: number;
  content: string;
}

const Viewer = ({ emotionId, content }: Props) => {
  const nav = useNavigate();
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  ) as emotionItemType;

  if (!emotionItem) {
    window.alert("에러가 발생했습니다!");
    nav("/", { replace: true });
  }

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} alt="" />
          <h4>{emotionItem.emotionName}</h4>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
