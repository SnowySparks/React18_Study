# 정리

## Node.js

Javascript의 runtime(실행환경)
웹 밖에서도 사용 가능 하도록 하는 것

## Package

프로젝트가 곧 Package 의미
Node.js에서 사용하는 프로그램 단위 . 즉 프로젝트를 패키지 라고 지칭

## Package.json

해당 패키지(프로젝트)의 설정값 (이름, 프로젝트 버전 등등)  
또한 외부 라이브러리 설치되어 있는 것들 목록을 알 수 있음  
-> 설치된 외부 라이브러리 상세 버전 정보를 담고 있는 것이 `package-lock.json`

여기에 추가적으로 npm 에 추가적인 명령어가 가능

### Script

package.json 파일 내 script 영역 내에서 커스텀 명령어(스크립트) 추가 가능  
대표적으로 경로가 복잡한 js파일을 실행시키기 위해서

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/index.js" //여것이 새로 추가한 거
  },
```

실행 명령어는 npm run `지정한 명령어`

## Module System

`module` : 쉽게 생각하면 Javascript 파일 그 자체를 모듈로 부림  
주로 기능별로 달리 구현되어 있다는 의미가 강함

Module System은 다른 모듈을 불러오는 방식
모듈을 생성하고 불러오고 사용하는 등… 모듈을 “다루는” 기능

### CommonJS(CJS)

node.js 표본  
export하는 쪽에는 `module.exports` 안에 export할 것을 입력하거나  
직접 구현한 부분에 `export` 를 입력해야 함

```js
module.exports = {
  add, //key 와 변수가 이름이 같으면 이런식 가능
  sub: sub,
};

// 이런식도 가능
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}
```

import쪽
담을 변수 객체 명 = require("모듈의 경로")

```js
const moduleData = require("./math");
console.log(moduleData); // { add: [Function: add], sub: [Function: sub] }

console.log("-----");

console.log(moduleData.add(1, 2)); // 3
console.log(moduleData.sub(5, 10)); // -5
console.log("-----");

const { add, sub } = require("./math"); // 객체 구조 분해 할당

console.log(add(12, 34)); // 46
console.log(sub(12, -1)); // 13
```

### ES module System

package.json에서 `“type” : “module”` 이라는 설정을 해야 함
이것을 할 경우 ESM 방식대로 써야하며 위 CommonJS 방식은 “아에 사용이 안됨”

```json
{
  "name": "section03",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/index.js"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "type": "module" //요기 부분
}
```

Export  
이제 모듈로 사용하고 싶은 것을 export 명령어를 통해서 쉽게 보낼 수 있음

```js
// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

export { add, sub };
```

Default Export
단 하나만 선언이 되고, 해당 모듈의 대표로 export한다는 뜻

```js
export default function multiply(a, b) {
  return a * b;
}

export { add, sub };
```

Import  
구조 분해 할당을 이용 하는 방식  
export default는 불러오는 방법

```js
import { add, sub } from "./math.js"; //기본적 import - 확장자 표기 필수
import mul from "./math.js"; //export default를 불러오는 방법 - 중괄호 없이하기

console.log(add(1, 2)); // -1
console.log(sub(3, 12));
console.log(mul(2, 102));
```
