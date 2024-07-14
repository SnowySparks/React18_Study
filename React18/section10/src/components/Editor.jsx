import { useState, useRef } from "react";
import "./Editor.css";
const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus(); // 빈 문자열이면 강제로
      return; // 빈 문자열이면 강제로 아무것도 안하기
    }
    onCreate(content);
    setContent(""); // 데이터 입력되면 초기화
  };

  const onKeyDown = (e) => {
    //Enter 키값 === 13
    if (e.keyCode === 13) onSubmit();
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        placeholder="새로운 Todo..."
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown} // 키가 입력이 되면 발생하는 이벤트
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
