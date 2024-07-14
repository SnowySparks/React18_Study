import { act, useReducer } from "react";

// reducer의미 : 변환기
// 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch : 발송하다 급송하다 -> 상태변화가 있어야 한다는 사실을 알리는. 방송하는 함수
  // 첫번쨰 파라미터 - 상태변화 함수, 두번쨰 파라미터 : 초기값
  const [state, dispatch] = useReducer(reducer, 0);

  // dispatch 파라미터에 요청사항(type) 및 데이터 - 즉 액션 객체 를 인수로 전달
  // 이를 reducer함수에 전달되어짐
  const onClickPlus = () => {
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
