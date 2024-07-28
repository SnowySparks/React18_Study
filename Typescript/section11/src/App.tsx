import {
  useRef,
  useEffect,
  useReducer,
  createContext,
  useContext,
  useCallback,
} from "react";
import Editer from "./components/Editer";
import TodoItem from "./components/TodoItem";
import { Todo } from "./types";

type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: "DELELTE";
      id: number;
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "DELELTE":
      return state.filter((todo: Todo) => {
        return todo.id !== action.id;
      });
    default:
      throw new Error("없는 이벤트");
  }
}

export const TodoStateContext = createContext<Todo[] | null>(null);
export const TodoDispatchContext = createContext<{
  onClickAdd(text: string): void;
  onClickDelete(id: number): void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext에 문제생김");
  return dispatch;
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onClickAdd = useCallback((text: string = ""): void => {
    dispatch({
      type: "CREATE",
      data: {
        id: ++idRef.current,
        content: text,
      },
    });
  }, []);

  const onClickDelete = useCallback((id: number): void => {
    dispatch({
      type: "DELELTE",
      id,
    });
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div className="App">
        <h1>Todo</h1>
        <TodoStateContext.Provider value={todos}>
          <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
            <Editer />
            <div>
              {todos.map((todo) => (
                <TodoItem {...todo} key={todo.id} />
              ))}
            </div>
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>
    </>
  );
}

export default App;
