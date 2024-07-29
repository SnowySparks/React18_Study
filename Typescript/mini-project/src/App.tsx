import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import { DiaryType } from "./types";
import { Action } from "./types";
import { createContext, useReducer, useRef, useMemo } from "react";

const mockData: DiaryType[] = [
  {
    id: 1,
    createdDate: new Date("2024-07-29").getTime(),
    emotionId: 1,
    content: "안녕11",
  },
  {
    id: 2,
    createdDate: new Date("2024-07-28").getTime(),
    emotionId: 2,
    content: "안녕22",
  },
  {
    id: 3,
    createdDate: new Date("2024-06-12").getTime(),
    emotionId: 3,
    content: "안녕33",
  },
];

function reducer(state: DiaryType[], action: Action): DiaryType[] {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.data.id ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
  }
  return state;
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
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef<number>(3);

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
