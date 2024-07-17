# 정리 - Optimization 기법들 

## 최적화 방법들  

1. 컴포넌트 내부 불필요한 연산 억제하기

2. 컴포넌트 내부 불필요한 함수 재생성 억제하기

3. 컴포넌트 불필요한 리렌더링 억제하기  

### useMemo  

메모제이션(Memoization) 기법을 기반으로 불 필요한 연산을 최적화 하는 React Hook  

마치 dp 알고리즘 과 비슷한 원리라 생각하면 편함  

state에도 적용 되지만, 컴포넌트 내 함수에도 적용이 가능함!  

```jsx

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    console.log("getAnalyzedDate 함수호출");
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
```

### React.memo  
React 내장 메서드 (HOC로 만들어짐 )  

**컴포넌트**를 인수로 받아 최적화 된 컴포넌트로 만들어 반환  
해당 컴포넌트 리렌더링 조건 : Props값 이 변화되었는가?  
-> 부모 컴포넌트가 Rerendering되더라도, Props가 바뀌는게 아니면 리렌더링 진행 안됨  

```jsx
import "./TodoItem.css";
import { memo } from "react";
const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    //체크박스 업데이트
    onUpdate(id);
  };

  const onClickDeleteButton = (e) => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} type="checkbox" checked={isDone} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제 </button>
    </div>
  );
};

export default memo(TodoItem);

```

다만 주의 할 점은 state의 변화가 일어날 때  
객체가 바뀔 경우, 보통 새로운 객체가 생성됨  
이로 인해서 컴포넌트 함수 내에 있는 모든 것들이 재생성이 됨
보통 기본 Props변화 탐지 방식이 "얉은 비교" 임  

이것에 의해서 memo가 적용이 안 될 경우 **직접 비교 함수**를 커스텀 가능  

```jsx
export default memo(TodoItem, (prevProps, nextProps) => {
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});
```

### useCallBack  
보통 컴포넌트 props로 전달 할 때, state 그리고 함수를 보내는 경우가 많음  
memo에서 직접 커스텀 정의를 하여 state에 대해서만 커스텀 비교가 가능하지만  

만약 해당 state가 객체고, 다뤄야 하는 양이 매우 많으면  
매우 귀찮아질 수 있음  

따라서 "컴포넌트 내 함수" 도 생성을 Deps에 따라 생성하도록 만들면?


```jsx
//App.jsx
import "./App.css";
import { useState, useRef, useReducer, useCallback } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
// import Exam from "./components/Exam";

const mockData = [
  //dummy date.
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "게임하기",
    date: new Date().getTime(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // useCallback - 함수생성은 단 1회
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  // const onDelete = (targetId) => {
  //   dispatch({
  //     type: "DELETE",
  //     targetId,
  //   });
  // };

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />

      {/* List 안의 TodoItem에게 전달하는 것이 onUpdate */}
    </div>
  );
}

export default App;


```

## 최적화 대상 

무작정 위에 대한 최적화를 적용하는 건 오히려 성능하락이 발생 할 수 있음  

예를 들어서 memo를 적용한 컴포넌트라 해도 Props비교 등이 있기 때문에
오히려 재랜더링이 더 빠른 경우가 많음  

다음과 같은 경우에 최적화를 적용할 수 있다고 생각됨 

- 유저에 의해 컴포넌트가 굉장히 많아질 수 있는 경우
- 함수들을 많이 가지게 되는 컴포넌트 인경우
- 기타 등등  

가장 중요한 건 위 기법을 적용한 것에 대한  
<span style="color:red; font-weight:bold">손익분실 계산 무조건 고려</span>  

[관련글](https://goongoguma.github.io/2021/04/26/When-to-useMemo-and-useCallback/)