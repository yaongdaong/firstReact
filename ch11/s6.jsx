/* 원래는
const root=ReactDOM.createRoot(document.getElementById('root'))로 한줄에 쓰는데
const rootNode= document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
두줄에 걸쳐 쓴것임
*/
/* 구분,비유,역할
[DOM]
-완성된 건물,사람들이 실제로 거주하는 곳 (브라우저 화면)
-브라우저가 HTML을 이해하기 위해 만든 트리(Tree) 구조의 객체입니다. 우리가 보는 실제 화면 그 자체라고 생각하면 됩니다.
[가상 DOM]
-건물 설계도(수정본),공사 전에 미리 그려보고 비교해보는 종이
-데이터가 변했을 때, 진짜 화면을 다 갈아엎기 전에 메모리에서 미리 계산해보는 가짜 화면입니다. "어디가 바뀌었지?"를 찾기 위한 계산용 지도라고 보시면 돼요.
[ReactDOM]
-현장 소장님,설계도를 보고 바뀐 부분만 공사 인부에게 시키는 사람 
-리액트(가상 DOM)가 "자, 이렇게 고칠 거야!"라고 결정하면, 그 계획안을 받아서 실제 브라우저(DOM)에 '반영'해주는 도구입니다.*/
// 1. 리액트가 화면을 그릴 뿌리(root)를 지정합니다.
const root = ReactDOM.createRoot(rootNode);
// 2. [리액트의 지배 시작]
// value에 "hi"라는 구체적인 값을 넣었습니다.
// 이제 리액트는 이 입력창을 '제어'합니다. 사용자가 키보드를 쳐도 "hi"로 고정됩니다.
root.render(<input value="hi" />);
// 3. 1000밀리초(1초) 뒤에 실행될 마법의 함수입니다.
setTimeout(function () {
    // [리액트의 권한 포기]
    // value에 null을 넣어서 다시 화면을 그립니다.
    // 리액트는 "어? 값이 null이네? 난 이제 관리 안 할래!"라며 손을 놓습니다.
    // 이때부터 사용자는 입력창에 자유롭게 글자를 입력할 수 있게 됩니다.
    root.render(<input value={null} />);
}, 1000);

// r1
// 1. 실제 DOM 노드를 리액트의 '루트(본부)'로 설정
const root1 = ReactDOM.createRoot(rootNode);
// 2. [제어 상태] 고정된 value를 부여하여 리액트가 입력값을 완전히 통제 (사용자 입력 차단)
root1.render(<input value="hi" />);
// 3. 1초 뒤 실행
setTimeout(function () {
    // 4. [비제어 전환] value에 null을 전달하면 리액트가 제어권을 포기함 (브라우저가 입력 관리 시작)
    root1.render(<input value={null} />);
}, 1000);

// r2
// 실제돔노트를리액트의본부로지정
const root2 = ReactDOM.createRoot(rootNode);
// 고정된value부여시리액트가입력값통제,입력불가
root2.render(<input value="hi" />);
// 1초뒤1번만실행
setTimeout(function () {
    // value값이null이므로리액트제어권이브라우저로넘어감,입력가능
    root2.render(<input value={null} />);
}, 1000);

// r3
// 실제DOM노트를리액트의루트(본부)로설정
const root3 = ReactDOM.createRoot(rootNode);
// 고정된value를부여하여리액트가입력값을완전히통제(사용자입력차단)
root3.render(<input value="hi" />);
// 1초뒤실행
setTimeout(function () {
    // value에null전달,리액트권한이브라우저로넘어감,입력가능
    root3.render(<input value={null} />);
}, 1000);

// r4
// 실제DOM노드를리액트의루트(본부)로설정
const root4 = ReactDOM.createRoot(rootNode);
// 고정된value부여하여리액트가입력값완전통ㅇ제(사용자입력차단)
root4.render(<input value="hi" />);
// 1초뒤실행
setTimeout(function () {
    // 비제어전환:value에null값전달하면리액트가제어권포기(브라우저가입력관리시작)
    root4.render(<input value={null} />);
}, 1000);

// r5
// 실제DOM노드를리액트의루트(본부)로설정
const root5 = ReactDOM.createRoot(rootNode);
// 제어상태:고정된value를부여하여리액트가입력값을완전히통제(사용자입력차단)
root5.render(<input value="hi" />);
// 1초뒤실행
setTimeout(function () {
    // 비제어전환:value에null을전달하면리액트가제어권을포기(브라우저가입력관리시작)
    root5.render(<input value={null} />);
}, 1000);
