import "./Editor.css";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constance";
import { getStringedDate } from "../util/get-stringed-date";

// 수정 및 생성용, initData, onSubmit은 생성이냐, 수정이냐에 따라 그 담긴 데이터가 다름
// 수정 -> undefined, onCreate,, 생성 -> 해당일기내용 , onUpdate
const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });
  const nav = useNavigate();

  //Mount된후 initData 에 따른 입력 정보 설정 - 수정인 경우 기존 입력 정보가 다 저장됨
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  // Input에 따른 onChange에 대한 처리 이벤트
  const onChangeInput = (e) => {
    setInput((current) => {
      if (e.target.name === "createdDate")
        return {
          ...current,
          [e.target.name]: new Date(e.target.value),
        };
      else {
        return {
          ...current,
          [e.target.name]: e.target.value,
        };
      }
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
          name="createdDate"
          value={getStringedDate(input.createdDate)}
          type="date"
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => {
            return (
              <EmotionItem
                onClick={() =>
                  onChangeInput({
                    target: {
                      name: "emotionId",
                      value: item.emotionId,
                    },
                  })
                }
                {...item}
                key={item.emotionId}
                isSelected={item.emotionId === input.emotionId}
              />
            );
          })}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘은 어땟나요?"
          value={input.content}
          onChange={onChangeInput}
          name="content"
        />
      </section>
      <section className="button_section">
        <Button
          text={"취소하기"}
          onClick={() => {
            nav(-1);
          }}
        />
        <Button
          text={"등록하기"}
          type={"POSITIVE"}
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  );
};

export default Editor;
