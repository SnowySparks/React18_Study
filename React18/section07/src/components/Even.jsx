import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // unMount될 때 실행되는 함수 -> cleanup함수
    return () => {
      console.log("Unmounted");
    };
  });

  return <div>짝수입니다</div>;
};

export default Even;
