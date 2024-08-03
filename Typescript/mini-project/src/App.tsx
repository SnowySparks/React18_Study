import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import { DiaryType } from "./types";
import { Action } from "./types";
import {
  createContext,
  useReducer,
  useRef,
  useMemo,
  useState,
  useEffect,
} from "react";

function reducer(state: DiaryType[], action: Action): DiaryType[] {
  let nextState: DiaryType[] = [];
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      nextState = [action.data, ...nextState];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        item.id === action.data.id ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => item.id !== action.id);
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext<DiaryType[]>([]);
export const DiaryDispatchContext = createContext<{
  onCreate(
    createdDate: number,
    emotionId: DiaryType["emotionId"],
    content: string
  ): void;
  onUpdate(
    id: number,
    createdDate: number,
    emotionId: DiaryType["emotionId"],
    content: string
  ): void;
  onDelete(id: number): void;
} | null>(null);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef<number>(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary"); // string | null
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    // 이 이후론 storedData는 string 임
    const parseData: DiaryType[] | undefined = JSON.parse(storedData);
    if (!Array.isArray(parseData)) {
      setIsLoading(false);
      return;
    }

    let maxId: number = 0;
    parseData.forEach((item) => {
      maxId = Math.max(maxId, item.id);
    });
    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parseData,
    });

    setIsLoading(false);
  }, []);

  const onCreate = (
    createdDate: number,
    emotionId: DiaryType["emotionId"],
    content: string
  ): void => {
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

  const onUpdate = (
    id: number,
    createdDate: number,
    emotionId: DiaryType["emotionId"],
    content: string
  ): void => {
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

  const onDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={memoizedDispatch}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<div>잘못된 접근</div>} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
