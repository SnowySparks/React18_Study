# 정리

## Component  
모듈(파일) 내에 함수를 선언하고 그 함수 return 에 JSX문법 (HTML + Javascript)  
```jsx
// App.jsx
import './App.css'
const Header = () => {
  return (
    <>
      <h1>Header</h1>
    </>
  )
}

function App() {

  return (
    <>
    <Header />
      <h1>Hello React</h1>
    </>
  )
}

export default App

```
또한 각 모듈을 다른 파일에 넣어서 관리하는 것도 가능

```jsx
// App.jsx
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  )
}

export default App

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
<div className="{styles.[클래스명]}">...</div>

```

- CSS Module
CSS 파일명은 반드시 `파일명.module.css` 형태여야 함  
```jsx
import titleCss from "../title.module.css" // 2번째방식 - CSS Module

<h1 className={titleCss.title}>Main</h1>
```

### 클래스마다 어떤 상태에 따라서 적용을 할지 안 할지도 결정  

```jsx

import React, { useState } from "react";
import "./App.css";
const App = () => {

  const [color, setColor] = useState(true);
  // color변수가 false일 경우 "red"스타일은 적용이 안됨.
  return (
    <div
      className={"container round " + (color && "red")}
    ></div>
  );
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