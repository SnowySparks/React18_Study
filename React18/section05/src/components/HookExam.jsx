import { useState } from "react";
// 3가지 Hook 관련팁
// 1. 함수 컴포넌트 , 커스텀 훅 내부에서만 호출 기능
// 2. 조건부로 호출 불가능
// 3. 나만의 훅 직접생성가능

import useInput from "./../hooks/useInput";

const HookExam = () => {
  const [input, setInput] = useInput();
  const [input2, setInput2] = useInput();
  return (
    <div>
      <input />
      <input2 />
    </div>
  );
};

export default HookExam;
