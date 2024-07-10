# 정리

## Component

모듈(파일) 내에 함수를 선언하고 그 함수 return 에 JSX문법 (HTML + Javascript)

```jsx
// App.jsx
import "./App.css";
const Header = () => {
  return (
    <>
      <h1>Header</h1>
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <h1>Hello React</h1>
    </>
  );
}

export default App;
```

또한 각 모듈을 다른 파일에 넣어서 관리하는 것도 가능

```jsx
// App.jsx
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
```

## JSX

자바스크립트 확장 문법  
Javascript 안에 HTML 문법 요소를 섞어 놓음

**핵심은 `{}` 안에서 자바스크립트 문법을 적용할 수 있다는 것**

### 규칙

1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음

- 즉 정확히는 자바스크립트를 넣을거면 “표현식”만 적용이 되어진다는 것

- 쉽게 생각해서 return 값이 보장되는 것
- 특히 if문 -> 삼향연산자 이용
- 단 HTML태그 이용한 리턴가능 (JSX이니까)

2. 모든 태그는 무조건 닫혀 있어야 함

- img, hr 등

3. 최상위 태그는 단 1개여야 함  
   각 함수 component 구현 할 때 최상위 태그는 단 1개  
   (최상위 태그는 “빈태그”는 허용됨)

4. 일부 태그 속성값의 이름이 바뀜  
   class → className  
   tabindex -> tabIndex

## CSS 파일 부르기

1. 직접 스타일 적용하는 방법

```html
<div style={{
          backgroundColor : "red",
          borderBottom : "1px solid black"
        }}>로그아웃 상태임</div>
```

2. CSS File Import

- 그냥 import 해서 바로 적용

```jsx
import styles from "파일 경로";
//...
<div className="{styles.[클래스명]}">...</div>;
```

- CSS Module
  CSS 파일명은 반드시 `파일명.module.css` 형태여야 함

```jsx
import titleCss from "../title.module.css"; // 2번째방식 - CSS Module

<h1 className={titleCss.title}>Main</h1>;
```

### 클래스마다 어떤 상태에 따라서 적용을 할지 안 할지도 결정

```jsx
import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [color, setColor] = useState(true);
  // color변수가 false일 경우 "red"스타일은 적용이 안됨.
  return <div className={"container round " + (color && "red")}></div>;
};

export default App;
```

## Props

하위 컴포넌트에게 데이터를 전달하는 방법

```jsx
// App.jsx
import "./App.css";
import Button from "./components/Button";

function App() {
  const buttonProps = {
    text: "수박",
    color: "agua",
  };

  return (
    <>
      <Button text="사과" />
      <Button text="바나나" color="red" />
      <Button text="망고" id={1234} />
      <Button {...buttonProps} /> // Spread
    </>
  );
}

export default App;
```

```jsx
//Button.jsx
const Button = ({ text, color = "black" }) => {
  return (
    <button style={{ color }}>
      {text} - {color}
    </button>
  );
};
```

구조분해할당을 이용해서 데이터를 가져오고 적용하는 방식

### 자식요소

```jsx
<Button text="자식요소있는버튼">
  <div>자식요소</div>
  <Header />
</Button>
```

위 같이 자식요소 태그가 들어가게 되면

```jsx
const Button = ({ text, color = "black", children }) => {
  return (
    <button style={{ color }}>
      {text} - {color}
      {children}
    </button>
  );
};

export default Button;
```

해당 부분은 `children` 파라미터에 들어가게 되고 이를 활용이 가능

### 자식 에서 부모로

원칙적으론 불가능 하지만. 만약 useState()를 사용할 경우  
set함수 자체를 전달하는 방법이 있음  
그러면 자식에서 해당 함수를 사용하여 부모 컴포넌트의 값을 수정

## Event Handling

이벤트 발생시 처리

리엑트에선 Synthetic Base Event 라는 객체가 return (이벤트 발생시)

### SyntheticBaseEvent

모든 웹 브라우저 이벤트 객체를 하나로 통일 한상태  
각 브라우저 마다 각각 동작이 전부 다 다름

이를 해결하기 위해 만들어진 것이 이 합성 이벤트 객체 - 일종의 통합된 규격된 이벤트 객체

### 사용법

HTML 컴포넌트 안에 `event종류 = {콜백함수 or 익명함수}` 형태로 작성

```jsx
const Button = ({ text, color = "black", children }) => {
  return (
    <button
      onClick={() => {
        console.log(text);
      }}
      style={{ color }}
    >
      {text} - {color}
      {children}
    </button>
  );
};

export default Button;
```

Event Handler에게는 위에 언급한 Event 객체가 전달되어짐

## useState

**기존 Javasciprt 방식의 변수를 변경했다고 React는 자동으로 상태변화를 감지해서 다시 렌더링 (ReRendering) 하지 않음**

따라서 다시 재 랜더링을 시켜줄 특수한 객체가 필요한데 이것이 `useState`

한 컴포넌트에 0개~ 이론상 매우 많은 state를 선언이 가능

### 선언

먼저 `import {useState} from “react”` 가 필수

`const [ 변수, 상태변화함수이름 ] = useState(초기값)` 방식으로 구조분해 할당

앞으로 `useState()` 로 생성한 변수의 값을 수정할려면

반드시 **상태변화함수를 거쳐서 할 것**

```js
setLight(true); //  직접입력
setLight((current) => !current); // 콜백함수 처리방식
```

React는 ReRendering할 때 **기존에 있는 변화 없는 것들은 그대로 두고**  
**“변화가 필요한” 부분만 알아서 리렌더링 해준다는것도 큰 기능적 요소**

또한 state값을 props로 전달하는 것이가능

### 재랜더링 조건

1. `state`값이 바뀐 경우
2. `props` 데이터가 달라진 경우
3. 부모 컴포넌트가 리렌더링 되는 경우 자식 컴포넌트로 리렌더링

따라서 불필요한 업데이트 방지하기 위해서, 독립적인 state끼리는 따로 별도의 모듈로 구현하기

```jsx
// App.jsx
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "grey" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === "OFF" ? "ON" : "OFF");
        }}
      >
        {light === "ON" ? "끄기" : "키기"}
      </button>
    </div>
  );
};

const Count = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((current) => current + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

function App() {
  return (
    <>
      <Bulb />
      <Count />
    </>
  );
}

export default App;
```

### 사용자 입력

input에 대해서는 onChange Event과 value를 이용  
원랜 input마다 하나하나씩 각각 따로 하지만  
자바스크립트의 구조분해할당 및 객체로 구현을 통해 가능

```jsx
//Register.jsx
import { useState } from "react";

// 입력 받는것
// 이름, 생년원일. 국적, 자기소개

const Register = () => {
  const [input, setInput] = useState({
    //객체 전체를 하나의 업데이트로..
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value, //구조분해할당을 이용
    });
  };
  return (
    <>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
        <p>{input.name}</p>
      </div>
      <div>
        <input
          name="birth"
          type="date"
          onChange={onChange}
          value={input.birth}
        />
        <p>{input.birth}</p>
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option>미국</option>
          <option value="kr">한국</option>
          <option>영국</option>
        </select>
        <p>{input.country}</p>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
    </>
  );
};

export default Register;
```

## useRef

userReference 줄임말 : 새로운 Reference 객체를 생성하는 기능

useState는 값이 변경되면 컴포넌트가 rerender 되지만

useRef는 **어떤 경우에도 reRender가 일어나지 않음 (값이 변경되어도)**

또한 useRef는 **DOM 요소에 접근이 가능** → **요소 조작이 가능**

렌더링에 영향을 받으면 안되는 변수를 생성해야 할 때 유용함

```jsx
const refObj = useRef(123);
console.log(refObj);
```

### 사용예시

직전 useState를 이용한 사용자 입력에서

만약에 비어있는 값이 있으면 해당 input으로 focus를 맞추도록 하기

```jsx
//Register.jsx
import { useState, useRef } from "react";

// 입력 받는것
// 이름, 생년원일. 국적, 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM 요소 포커스
      // console.log(inputRef.current) - name input 요소출력
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
        <p>{input.name}</p>
      </div>
      <div>
        <input
          name="birth"
          type="date"
          onChange={onChange}
          value={input.birth}
        />
        <p>{input.birth}</p>
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option>미국</option>
          <option value="kr">한국</option>
          <option>영국</option>
        </select>
        <p>{input.country}</p>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <button onClick={onSubmit}>제출</button>
    </>
  );
};

export default Register;
```

### 굳이 javascript 전역변수 안쓰는 이유

만약 해당 컴포넌트를 2군데 이상 사용하게 될 경우 발생

→ 이 경우 외부에 선언된 변수는 해당 컴포넌트의 “공유 변수” 가 되어짐 (즉 그 컴포넌트의 전역 변수화)

각각 독립적인 컴포넌트 마다의 사용 (즉 독립적인 변수)로 사용하고 싶으면

이방식으로는 큰 문제

## React Hooks

[공식링크](https://react.dev/reference/react/hooks)  
Class Component 기능을 “함수” 컴포넌트에서도 이용할 수 있도록 한 것들

전부 특징은 use라는 단어로 시작하는 메서드

### 특징

**함수 컴포넌트 내에서만** 호출이 가능 - 또한 최상위에서만 Hook 호출하기

**조건문, 반복문 내부에서는 호출이 불가능**

나만의 Hook도 제작 가능 **(Custom Hook)**

- 단 이때 앞에 **use** 라는 이름 무조건 붙이기

한 컴포넌트에서 여러개 Hook이 사용되는 경우 위에서부터 아래로 순서에 맞게 동작

```jsx
import { useState } from "react";
// 3가지 Hook 관련팁
// 1. 함수 컴포넌트 , 커스텀 훅 내부에서만 호출 기능
// 2. 조건부로 호출 불가능
// 3. 나만의 훅 직접생성가능

function useInput() {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return [input, onChange];
}

const HookExam = () => {
  const [input, setInput] = useInput();
  const [input2, setInput2] = useInput();
  return (
    <div>
      <input />
      <input2 />
    </div>
  );
};

export default HookExam;
```

src/hooks 경로에 해당 모듈들(파일)들을 넣는 경우가 많음
