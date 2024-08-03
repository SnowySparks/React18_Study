import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const increamentHandler = () => {
    dispatch(counterActions.increment());
  };

  const decreamentHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increase5Handler = () => {
    dispatch(counterActions.increase(5)); // 추출방법 : type : 어떤 유니크한 형태 - 지정된, payload : 5
  };

  const decrease5Handler = () => {
    dispatch(counterActions.decrease(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>1 증가</button>
        <button onClick={increase5Handler}>5 증가</button>
        <button onClick={decreamentHandler}>1 감소</button>
        <button onClick={decrease5Handler}>5 감소</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
