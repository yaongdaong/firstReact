// 1. 숫자들로 이루어진 기본 배열입니다.
const numbers = [1, 2, 3, 4, 5];
// 2. map() 함수를 이용해 기존 배열의 각 숫자에 2를 곱한 새로운 배열을 만듭니다.
// doubled는 [2, 4, 6, 8, 10]이 됩니다.
const doubled = numbers.map((number) => number * 2);
// 3. 리액트의 특징! 배열의 숫자들을 <li> 태그로 감싸진 JSX 엘리먼트로 변환합니다.
// listItems는 [<li>1</li>, <li>2</li>, ...] 형태의 객체 배열이 됩니다.
const listItems = numbers.map((number) => <li>{number}</li>);
// 4. HTML 파일에서 id가 "root"인 요소를 찾아 리액트의 시작점으로 지정합니다.
const root = ReactDOM.createRoot(document.getElementById("root"));
// 5. 생성된 <ul> 태그 안에 listItems 배열을 넣어 화면에 실제로 그립니다(렌더링).
root.render(<ul>{listItems}</ul>);

// r1
// 숫자배열
const numbers1 = [1, 2, 3, 4, 5];
// map함수로 기존배열숫자에2를곱한 새배열생성
const doulbed1 = numbers1.map((number) => number * 2);
// 배열의숫자들을li태그로감싸진JSX엘리먼트로변환
const listItems1 = numbers1.map((number) => <li>{number}</li>);
// html파일에서 id가 root인 요소를 찾아 리액트의 시작점으로 지정
const root1 = ReactDOM.createRoot(document.getElementById("root"));
// 생성된 ul태그안에listItems배열을 넣어화면그림
root1.render(<ul>{listItems1}</ul>);

// r2
// 숫자 배열
const numbers2 = [1, 2, 3, 4, 5];
// map함수로 기존배열 숫자에 2를 곱한 새배열생성
const doubled2 = numbers2.map((number) => number * 2);
// 배열의 숫자를 li태그로 감싸진 JSX 엘리먼트로 변환
const listItems2 = numbers2.map((number) => <li>{number}</li>);
// html파일에서 id가 root인 요소를 찾아 리액트의 시작점으로 저장
const root2 = ReactDOM.createRoot(document.getElementById("root"));
// 생성된 ul 태그 안에 listItme 배열을 넣어 화면 그림
root2.render(<ul>{listItems2}</ul>);

// r3
// 숫자배열
const numbers3 = [1, 2, 3, 4, 5];
// map함수로 기존배열숫자에2를곱한 새배열생성
const doubled3 = numbers3.map((number) => number * 2);
// 배열의숫자들을 li태그로감싸진JSX엘리먼트로변환
const listItems3 = numbers3.map((number) => <li>{number}</li>);
// html파일에서id가root인요소를찾아리액트의시작점으로지정
const root3 = ReactDOM.createRoot(document.getElementById("root"));
// 생성된ul태그안에listItems배열을넣어화면그림
root3.render(<ul>{listItems3}</ul>);

// r4
// 숫자배열
const numbers4 = [1, 2, 3, 4, 5];
// map함수로기존배열숫자에2를곱한새배열생성
const doubled4 = numbers4.map((number) => number * 2);
// 배열의숫자들을li태그로감싸진JSX엘리먼트로변환
const listItems4 = numbers4.map((number) => <li>{number}</li>);
// html파일에서id가root인요소를찾아리액트의시작점으로지정
const root4 = ReactDOM.createRoot(document.getElementById("root"));
// 생성된ul태그안에listItems배열을 넣어화면그림
root4.render(<ul>{listItmes4}</ul>);

// r5
// 숫자배열
const number5 = [1, 2, 3, 4, 5];
// map함수로기존배열숫자에2를곱한새배열생성
const doubled5 = numbers5.map((number) => number * 2);
// 배열의숫자들을li태그로감싸진JSX엘리먼트로변환
const listItmes5 = numbers5.map((number) => <li>{number}</li>);
// html파일에서id가root인요소를찾아리액트의시작점으로지정
const root5 = ReactDOM.createRoot(document.getElememntById("root"));
// 생성된ul태그안에listItme배열을넣어화면그림
root5.render(<ul>{listItems5}</ul>);
