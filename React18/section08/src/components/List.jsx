import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";
const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState(""); //검색어 전용

  const onChangeContent = (e) => {
    //검색어바 전용 이벤트 헨들러
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    //검색어 , 해당 검색어가 포함되는 content들의 todo 목록들만 리턴

    if (search === "") return todos; //빈문자열이면 Array 통째로 전달
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    ); //includes() 해당 문자열 안에 검색어가 있는가?
    // 단 영어는 전부 소문자로 치환
  };

  const filteredTodos = getFilteredData(); //필터링된 배열

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={onChangeContent}
        value={search}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <div key={todo.id}>
              <TodoItem {...todo} onUpdate={onUpdate} onDelete={onDelete} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
