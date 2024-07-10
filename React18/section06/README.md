# 정리

이번 프로젝트는 단순히 카운팅을 하는데 State Lifting 기법을 이용

부모 컴포넌트에 `useState`를 쓰는데 View에는 state의 값을 전달하고  
Controller에는 `setter함수`를 전달

또한 Controller에 전달 할 때 원칙적으로 `count, setCount` 둘 다 이용한 `eventHandler`를 구축하는 방법이 있으나  
`setCount` 안에 콜백함수를 넣음으로써 setCount만 전달 하도록 함

또한 버튼 구성 할 때 일일이 작성하는 것보단 `map`함수를 이용

```jsx
const Controller = ({ eventHandler }) => {
  const btnlst = [-1, -10, -100, +100, +10, +1];
  return (
    <div>
      {btnlst.map((item) => {
        return (
          <button
            key={item}
            onClick={() => {
              eventHandler((current) => current + item);
            }}
          >
            {item > 0 ? "+" + String(item) : item}
          </button> // React에서 이렇게 할 경우 key값을 요구함 - 구분성위해
        );
      })}
    </div>
  );
};

export default Controller;
```

```jsx
const Viewer = ({ count }) => {
  return (
    <div>
      <div>현재 카운트 : </div>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;
```

```jsx
import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>

      <section>
        <Controller eventHandler={setCount} />
      </section>
    </div>
  );
}

export default App;
```

덤으로 CSS 정보

```css
body {
  padding: 20px;
}

.App {
  margin: 0px auto;
  width: 400px;
  /* width 정하고 margin 좌우 auto -> 가운데 배치 가능 */
}

.App > section {
  background-color: rgb(245, 245, 245);
  border: 1px solid rgb(240, 240, 240);
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
}
```
