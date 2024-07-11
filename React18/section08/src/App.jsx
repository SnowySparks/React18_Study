import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

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

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };

    // 반드시 상태변화를 통해서만 됨... 따라서 Array push를 하는 방법은 다음과 같음
    setTodos((current) => [newTodo, ...current]);
  };

  const onUpdate = (targetId) => {
    // todos State값들 중 targetId와 일치하는 id 갖는 요소 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) => {
        return todo.id === targetId
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo;
      })
    );
  };

  // 해당 타겟 아이디를 갖는 요소만 삭제하는 함수 - TodoItem 컴포넌트까지..
  const onDelete = (targetId) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== targetId;
      })
    );
  };

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
