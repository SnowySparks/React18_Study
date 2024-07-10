import { useEffect, useState, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // 1. Mount될 때만 - 즉 단 1번
  useEffect(() => {
    console.log("Mount");
  }, []);

  // 2. Update 될 때 - 처음 1회실행 그리고 Rerendering 될 때 마다
  useEffect(() => {
    console.log("Update");
  });

  // 3. 첫 실행은 배제하는 방법 : useRef를 이용한 변수 하나를 생성 후, 첫 실행에 대해서만 분기처리
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("순수 Update만 실행하기");
  });

  // unMounted - 사라 질 때

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller eventHandler={setCount} />
      </section>
    </div>
  );
}

export default App;
