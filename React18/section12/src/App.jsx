import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useReducer, useRef, createContext, useMemo } from "react";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";

import { getEmotionImage } from "./util/get-emotion-image";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-07-14").getTime(),
    emotionId: 1,
    content: "1번일기내용",
  },
  {
    id: 2,
    createdDate: new Date("2024-07-13").getTime(),
    emotionId: 2,
    content: "2번일기내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-06-12").getTime(),
    emotionId: 3,
    content: "3번일기내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => {
        return String(item.id) === String(action.data.id) ? action.data : item;
      });
    case "DELETE":
      return state.filter((item) => {
        return String(item.id) !== String(action.id);
      });
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);
  // 새 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: ++idRef.current,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정 - 일기 아이디가 필요함
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <>
      {/* <button onClick={() => onCreate(new Date().getTime(), 1, "Hello")}>
        일기생성테스트
      </button>
      <button
        onClick={() => onUpdate(1, new Date().getTime(), 3, "수정된 내용")}
      >
        일기수정테스트
      </button>
      <button onClick={() => onDelete(1)}>일기삭제테스트</button> */}

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={memoizedDispatch}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            {/* WhildCard - 위에 있는 경로 이외 모든 접근*/}
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
