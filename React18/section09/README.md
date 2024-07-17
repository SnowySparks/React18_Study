# 정리  
## useReducer  

useState는 반드시 컴포넌트 안에서 써야 했음  
상태 관리 코드가 “매우 복잡해” 질 경우 컴포넌트 안에 매우 긴 코드를 작성해야 함  

하지만 useReducer를 사용하면 상태관리 코드를 컴포넌트 밖에서  
정의 할 수 있다는 것이 큰 차이  

```jsx
import { useReducer } from "react";

// reducer의미 : 변환기
// 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  console.log(state, action);
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
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
    </div>
  );
};

export default Exam;


```

useReducer 파라미터 안에는 `상태변화함수, 초기값` 을 인자로 받음

이 상태변화함수라는 건 외부에서 함수선언한것을 파라미터 값(인자)로 넘겨 받는 것

여기서 리턴되는 것은 state와 **dispatch - 상태변화가 있어야 한다는 사실을 알리는. 방송하는 함수**  

해당 reducer 함수에 전달되는 인자값은 2개로

첫번째는 현재 `state값`이고, 두번째는 `dispatch 인자 값으로 받는 데이터` (아래 코드에서 빨간색 영역) 

console.log출력 결과가 0, 객체 인것은 `state값`과,`dispatch에서 받은 객체` (이를 `액션 객체`라고 함)

```jsx
  const onClickPlus = () => {
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };
```

여기서 액션 객체에 따라서 `state값`을 변화 시키고 싶으면

`if-else` 혹은 `switch` 구문을 이용해서 **수정된 값을 return** 함

```jsx

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

```