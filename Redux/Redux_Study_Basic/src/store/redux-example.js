import { createStore } from "redux";

// 기본 Reducer
const counterStore = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// store생성 - 어떤 reducer와 작업인지에 대한 연결 - 리
const store = createStore(counterStore);

//
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// 위에서 정의한 coutnerStore 함수를 취함 - 여기선 함수를 실행하는 것이 아님에 포인트
// 이 subscribe는 reducer가 호출될 때마다 실행되는 함수를 등록하는 것
store.subscribe(counterSubscriber);

// action에 필요한 행동을 전달하는 것
store.dispatch({
  type: "increment",
});

store.dispatch({
  type: "increment",
});
store.dispatch({
  type: "increment",
});

store.dispatch({
  type: "decrease",
});
