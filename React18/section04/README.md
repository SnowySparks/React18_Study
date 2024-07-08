# React  
Meta(Facebook)이 개발한 오픈소스 JS Library  

## 사용이점
### 컴포넌트 기반으로 UI를 작성
기존 HTML/CSS/Javasciprt로 구현할려 하면 일일이 전부 구현을 해야 하는데  
모듈화를 통해서 이런 “**중복 코드**”를 매우 줄일 수 있음

### 화면 업데이트 쉬움  
리엑트는 `선언형 프로그래밍` 
순수 JS로 할 경우 JS는 명령형 프로그래밍 이기에 일일이 해당되는 기능을 
일일이 구현해야 함  

선언형 프로그래밍 : 과정은 생략하고 “목적” 만 간결히 명시하는 방식


## 화면 업데이트 매우 빠름  

### Critical Rendering Path - 기본 동작 원리
[공식문서](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path)

브라우저가 서버로부터 HTML 응답을 받아 화면을 그리기 위해 실행하는 과정  

<img src="https://cdn-aahbe.nitrocdn.com/atRjhaAsMHbPaZMOukHscOVOXfGAsiqT/assets/images/optimized/rev-1074f35/nitropack.ams3.cdn.digitaloceanspaces.com/upload/blog/critical-rendering-path_432eab1db4.png">  

HTML 코드는 DOM (Document Object Model)으로 변환
완전하게 파싱된 HTML 페이지의 Object 표현  
- 브라우저가 해당 HTML의 코드를 분석해 각각 요소들 (h1, p, div 등) 을 트리 형태로 변환

CSS는 CSSOM (CSS 객체 모델)으로 변환
역시 트리 구조 형태로 변환  
자바스크립트로 CSS를 수정해야 할때 이 CSSOM을 이용

이 2가지 DOM & CSSOM을 모아서 Render Tree를 구성함  
DOM에는 요소들의 위치 배치 모양, CSSOM은 요소들의 스타일과 관련된 모든 정보이 담겨 있음
이러한 것들의 조합결과가 Render Tree  

그리고 Layout은 요소의 배치를 잡는 과정   
Paint 는 브라우저에 실제 해당 부분을 "보여주는" 과정 

**중요한 것** 은 이 Layout과 Paint가 시간을 **"매우 잡아먹는"** 다는 것  

여기서 재 랜더링이 되는 조건은 <span style="color:red">자바스크립트가 DOM을 수정하게 될 때 </span>  
그리고 이 때 `RenderTree`, `Layout`, `Paint` 전부 다시 재 구성 해야함 


따라서 가장 효율적인 방법은 "변화요소"들을 한꺼번에 반영되어야함  

- 만약 순수 JS로 일일이 이를 고려할려면 가능은하지만 서비스가 클수록 이는 매우 힘듬  

<span style="color:red">React</span> 는 자동으로 이를 어느정도 성능문제 해결을 해줌

### Virtual DOM  
DOM을 자바스크리트 객체로 흉내낸 것으로 일종의 복제판
React는 업데이트가 발생하면 실제 DOM을 수정하기 전, 이 가상 복제판 DOM에 먼저 반영  
여기서 Virtual DOM에 일단 반영해야 할 것들 미리 다 받아 두고 난 다음에  
최종적으로 DOM 단 1회만 수정하는 방식


## 시행방법  
`npm create vite@latest`  
`cd 프로젝트명`    
`npm install`  