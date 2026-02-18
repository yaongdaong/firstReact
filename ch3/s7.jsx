// JSX 사용함
<div>Hello, {name}</div>;
/* JSX 문법으로 React 엘리먼트를 생성
{name}은 JavaScript 표현식으로, name 변수 값이 화면에 출력됨
내부적으로는 React.createElement 형태로 변환됨 */

// JSX 사용 안 함
React.createElement(
    "div", // 생성할 HTML 태그 (div)
    null, // props 없음
    `Hello,${name}` // div 안에 들어갈 텍스트(템플릿 리터럴 사용)
);
// JSX로 작성한 위 코드와 동일한 React 엘리먼트 생성

/* r1 */
// JSX 사용함
<div>Hello, {name}</div>;
/* JSX  문법으로 React 엘리먼트를 생성 , {name}은 JavaScript 표현식으로, name 변수 값이 화면에 출력됨, 내부적으로는 React.createElement 형태로 변환됨 */

// JSX 사용 안 함, JSX로 작성한 위 코드와 동일한 React 엘리먼트 생성
React.createElement(
    "div", // 생성할 HTML 태그(div)
    null, // props 없음
    `Hello,${name}` // div 안에 들어갈 텍스트(템플릿 리터럴 사용)
);

/* r2 */
// JSX 사용함
<div> Hello, {name} </div>;
/* JSX 문법으로 React 엘리먼트를 생성, {name}은 JavaScript 표현식으로, name 변수 값이 화면에 출력됨, 내부적으로는 React.createElement 형태로 변환됨 */

// JSX 사용 안 함, JSX로 작성한 위 코드와 동일한 React 엘리먼트 생성
React.createElement(
    "div", // 생성할 HTML 태그(div)
    null, // props 없음
    `Hello, ${name}` // div 안에 들어갈 텍스트(템플릿 리터럴 사용)
);

/* r3 */
// JSX 사용함
<div>Hello,{name}</div>;
/* JSX 문법으로 React 엘리먼트를 생성, {name}은 JavaScript 표현식으로, name 변수 값이 화면에 출력됨, 내부적으로는 React.createElement 형태로 변환됨 */

// JSX 사용 안 함, JSX로 작성한 위 코드와 동일한 React 엘리먼트 생성
React.createElement(
    "div", // 생성할 HTML 태그(div)
    null, // props 없음
    `Hello, ${name}` // div 안에 들어갈 텍스트(템플릿 리터럴 사용)
);

/* r4 */
// JSX 사용함
<div>Hello,{name}</div>;
/* JSX 문법으로 React 엘리먼트를 생성, {name}은 JavaScript 표현식으로, name 변수 값이 화면에 출력됨, 내부적으로는 React.createElement 형태로 변환됨 */

// JSX 사용 안 함, JSX로 작성한 위 코드와 동일한 React 엘리먼트 생성
React.createElement(
    "div", // 생성할 HTML 태그(div)
    null, // props 없음
    `Hello, ${name}` // div 안에 들어갈 텍스트(템플릿 리터럴 사용)
);

/* r5 */
// JSX 사용함
<div>Hello,{name}</div>;
/* JSX 문법으로 React 엘리먼트를 생성, {name}은 JavaScript 표현식으로, name 변수 값이 화면에 출력됨, 내부적으로는 React.createElement 형태로 변환됨 */

// JSX 사용 안 함, JSX로 작성한 위 코드와 동일한 React 엘리먼트 생성
React.createElement(
  "div", // 생성할 HTML 태그(div)
  null, // props 없음
  `Hello, ${name}` // div 안에 들어갈 텍스트(템플릿 리터럴 사용)
)