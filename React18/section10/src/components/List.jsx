import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";
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

  // // useMemo를 활용하기 위한 함수예제
  // const getAnalyzedData = () => {
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;
  //   console.log("getAnalyzedDate 함수호출");
  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   };
  // };

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
  // 외존성 배열 : deps - 이건 원리는 useEffect와 동일 (해당 담긴 변수의 변화가 있을 때만 콜백 함수 시행)
  // useEffect와 차이점 : 해당 콜백 함수가 return 하는 값을 그대로 return시켜줌

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
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
