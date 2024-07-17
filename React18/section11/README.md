# 정리 

## useContext  
Props로 전달 할 때 매번 일일이 각각 전달하는걸 신경쓰는건 매우 비효율적  
**Props Drilling** 이라고 함 이것을  

따라서 App 전역 (혹은 어떤 컴포넌트 기준 그 하위들 전부) 에 쉽게 state 및 상태관리 함수를 전달 할 수 있아야 함  

Context를 사용함으로써 컴포넌트 밖에 저장소를 사용 가능하고,   
이를 이용해서 컴포넌트 위치가 어디든 간에 쉽게 사용가능  


### createContext - 저장소 생성 (공급)  
`createContext` 를 컴포넌트 밖에 선언 및 생성을 해둬야 함


굳이 컴포넌트 밖인 이유 : 안에 선언시 재 랜더링이 이루어지는데 이는 그 목적에 부합하지 않은 것

`export` 선언해야 다른 곳에서 사용가능  

```jsx
// 밖에 선언한 이유 : 컴포넌트 안에 선언시, 리랜더링 될 때 마다 재생성이 이루어짐...
export const TodoContext = createContext(); // 바깥에 createContext를 둠 (컴포넌트 밖)
console.log(TodoContext);

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  };
  ...

```

전달 방식은 `.Provider` 에다가 Context에 전달할 데이터를 마치 Props처럼  
전달함. `value` 안에다가 적으면 됨  

```jsx
  return (
    <div className="App">
      <Header />
      {/* TodoContext.Provier라는 컴포넌트에 전달할 value값을 담아 전달 */}
      <TodoContext.Provider
        value={{
          todos,
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </TodoContext.Provider>

      {/* List 안의 TodoItem에게 전달하는 것이 onUpdate */}
    </div>
  );
}


```

### useContext - 사용  
해당 컴포넌트 안에 `useContext( 사용할 createContext 객체)` 방식으로  
이때 useContext와 export 된 creatContext를 담은 것을 전부 import 해야 함  

```jsx
// Editor.jsx
import { useState, useRef } from "react";
import { useContext } from "react";
import { TodoContext } from "../App";
import "./Editor.css";
const Editor = () => {
  const data = useContext(TodoContext);
  console.log(data);
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

```


## 최적화  
위에서 선언한 createContext도 <span style="color:red; font-weight:bold">엄연히 한 컴포넌트 </span>  

→ Props가 바뀌게 되면 `TodosContext.Provider`도 리렌더링이 됨  
따라서 이를 활용하는 Editor, List, TodoItem (자식 컴포넌트) 도 리렌더링됨  


해결법은 : 변경이 되는 것과, 변경이 절대 안되는 것을 “분리” 하는 방법  
- 즉 state 와 상태변경함수 각각 Context로 구분짓자 라는 것  

여기서 상태변경함수에서 useMemo를 이용해서 생성을 더 억제해서  
재랜더링을 막는 방법도 사용가능  

```jsx
import "./App.css";
import {
  useState,
  useRef,
  useReducer,
  createContext,
  useContext,
  useMemo,
} from "react";
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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  };

  // 해당 타겟 아이디를 갖는 요소만 삭제하는 함수 - TodoItem 컴포넌트까지..
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  // todos 바뀔 때 마다 onCreate, onUpdate, onDelete도 또 생성이 되는데 이는 비효율적임
  // useMemo를 통해서 이를 억제
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      {/* TodoContext.Provier라는 컴포넌트에 전달할 value값을 담아 전달 */}
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext>
      </TodoStateContext.Provider>

      {/* List 안의 TodoItem에게 전달하는 것이 onUpdate */}
    </div>
  );
}

export default App;


```  

## 주의점  
useContext를 통해 사용할 때 객체로 감싸진 채 전달받는건지  
통째로 전달되는건지 잘 구분하기