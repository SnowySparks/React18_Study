import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  useReducer,
  useRef,
  createContext,
  useMemo,
  useEffect,
  useState,
} from "react";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";

import { getEmotionImage } from "./util/get-emotion-image";

function reducer(state, action) {
  let nextState; // localStorage에 저장하기 위함
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) => {
        return String(item.id) === String(action.data.id) ? action.data : item;
      });
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => {
        return String(item.id) !== String(action.id);
      });
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  // 만약에 데이터 불러오기전 useDiary 같은 Hook이 발생하는것을 막기 위해 로딩 같은거 추가
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  // 새 일기 추가

  useEffect(() => {
    // localStorage의 diary 데이터 string 불러오기
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      setIsLoading(false);
      return;
    } // 없으면 즉시 종료
    const parseData = JSON.parse(storedData); //파싱

    if (!Array.isArray(parseData)) {
      setIsLoading(false);
      return;
    } //파싱 결과가 배열이 아니면 리턴
    let maxId = 0;
    parseData.forEach((item) => {
      maxId = Math.max(maxId, Number(item.id));
    });
    idRef.current = maxId + 1;
    dispatch({
      type: "INIT",
      data: parseData,
    });
    setIsLoading(false);
  }, []);

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

  if (isLoading) {
    return <div>로딩 중입니다...</div>;
  }

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
