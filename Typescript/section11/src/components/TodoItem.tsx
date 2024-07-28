import { Todo } from "@/types";
import { useTodoDispatch } from "@/App";

const TodoItem = ({ id, content }: Todo) => {
  const dispatch = useTodoDispatch();
  const onClick = () => {
    dispatch.onClickDelete(id);
  };
  return (
    <div>
      {id} : {content}
      <button onClick={onClick}>삭제하기</button>
    </div>
  );
};

export default TodoItem;
