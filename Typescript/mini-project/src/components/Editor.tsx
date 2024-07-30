import "./Editor.css";
import { emotionList } from "@/util/constance";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useEffect, useState } from "react";
import { DiaryType } from "@/types";
import { getStringedDate } from "@/util/get-stringed-date";

type OptionalIdDiaryType = Omit<DiaryType, "id"> &
  Partial<Pick<DiaryType, "id">>;

export type TargetType =
  | {
      target: {
        name: string;
        value: DiaryType["emotionId"];
      };
    }
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

interface Props {
  onSubmit(input: OptionalIdDiaryType): void;
  initData?: DiaryType;
}

const Editor = ({ onSubmit, initData }: Props) => {
  const [input, setInput] = useState<OptionalIdDiaryType>({
    createdDate: new Date().getTime(),
    emotionId: 3,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
      });
    }
  }, [initData]);

  const onChangeInput = (e: TargetType): void => {
    if (e.target.name === "createdDate") {
      setInput({
        ...input,
        [e.target.name]: new Date(e.target.value).getTime(),
      });
      return;
    }
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(new Date(input.createdDate))}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘은 어땟나요 ? "
          value={input.content}
          name="content"
          onChange={onChangeInput}
        />
      </section>
      <section className="button_section">
        <Button text={"취소하기"} />
        <Button
          text={"작성완료"}
          type={"POSITIVE"}
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  );
};

export default Editor;
