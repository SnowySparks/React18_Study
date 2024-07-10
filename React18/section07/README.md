# 정리

## LifeCycle

- Mount : 컴포넌트가 화면에 나타날 때 (DOM에 생성) 를 의미
- Update : 컴포넌트가 reRendering 되었을 때
- UnMount : 컴포넌트가 화면에서 사라질 때 (즉 삭제되거나, 안보이게 처리될 때 )

이를 관리하는것을 LifeCycle 제어

## useEffect

특정한 변수 업데이트 될 때 (특정한 변수변화로 인한 Update), 혹은 단 한번만 처음 시행 (Mount될때)  
를 지정하여 특정한 함수를 실행시키기 위한 React Hook 메서드

```jsx
useEffect(() => {}, []);
```

코드는 다음 형태이며, 여기서 두번째 파라미터의 Array를 `Dependency Array`, 줄여서 `Deps`라고 함  
해당 배열에 담긴 변수들이 값이 바뀔 경우 콜백 함수를 실행시킴

그리고 처음 "Mount" 될 때도 한번 무조건 실행이 됨

### 다루는 방식

1. Mount 될 때만 한다 : `Deps` 에 빈 배열만 넣기
2. Update 될 때 마다

- 아무것도 않넣기 (빈배열도 안넣기) : 해당 컴포넌트가 리렌더링 될 때 마다 콜백함수 시행
- 특정 변수(들) 넣기 : 해당 변수들이 바뀔 때 만 콜백함수 시행
- useRef를 이용해서 첫 1회 Mount 될 때의 시행을 피하고 순수 Update 될 때만 처리할 수도 있음

3. unMount 될 때 마다 :
   useEffect의 첫번째 파라미터 안에 `return 콜백함수` 를 넣게 되면 unMount 될 때 시행됨  
   이때 함수를 CleanUp Function 이라고 함

```jsx
import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // unMount될 때 실행되는 함수 -> cleanup함수
    return () => {
      console.log("Unmounted");
    };
  });

  return <div>짝수입니다</div>;
};

export default Even;
```
