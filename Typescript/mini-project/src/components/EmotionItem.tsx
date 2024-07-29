import { getEmotionImage } from "@/util/get-emotion-img";
import "./EmotionItem.css";
import { emotionItemType } from "@util/constance";

interface Props extends emotionItemType {
  isSelected: boolean;
  onClick?(): void;
}

const EmotionItem = ({
  emotionId,
  emotionName,
  isSelected,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} alt="" />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
