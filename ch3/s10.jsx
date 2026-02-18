function formatName(user) {
    // user 객체를 받아서 이름과 성을 하나의 문자열로 합쳐 변환하는 함수
    return user.firstName + " " + user.lastName;
}
const user = {
    // 사용자 정보를 담은 객체
    firstName: "Inje", // 이름
    lastName: "Lee", // 성
};
const element = <h1>Hello,{formatName(user)}</h1>;
// JSX 문법으로 React 엘리먼트 생성, 중괄호 {} 안에서 JavaScript함수를 호출할 수 있음
// formatName(user)의 결과인 "Inje Lee"가 화면에 출력됨
const root = ReactDOM.createRoot(document.getElementById("root"));
// HTML 문서에서 id가 "root"인 DOM 요소를 찾아 React 18 방식의 렌더링 루트 객체를 생성
root.render(element);
// React 엘리먼트를 실제 DOM에 렌더링, 최종 결과: 화면에 "Hello, Inje Lee"가 표시됨

/* r1 */
function formatName(user) {
    /* user 객체를 받아서 이름과 성을 하나의 문자열로 합쳐 변환되는 함수 */
    return user.firstName + " " + user.lastName;
}
const user1 = {
    // 사용자 정보를 담은 객체
    firstName: "Inje", // 이름
    lastName: "Lee", // 성
};
const element1 = <h1>Hello, {formatName(user1)}</h1>;
/* JSX 문법으로 React 엘리먼트 생성, 중괄호 {} 안에서 JavaScript 함수를 호출할 수 있음
formatName(user)의 결과인 "Injs Lee"가 화면에 출력됨 */
const root1 = ReactDOM.createRoot(document.getElementById("root"));
/* HTML 문서에서 id가 "root"인 DOM 요소를 찾아 React 18 방식의 렌더링 루트 객체를 생성 */
root1.render(element1);
/* React 엘리먼트를 실제 DOM에 렌더링, 최종 결과: 화면에 "Hello, Inje Lee"가 표시됨 */

/* r2 */
function formatName(user) {
    /* user 객체를 받아서 이름과 성을 하나의 문자열로 합쳐 변환하는 함수 */
    return user.firstName + " " + user.lastName;
}
const user2 = {
    // 사용자 정보를 담은 객체
    firstName: "Inje", // 이름
    lastName: "Lee", // 성
};
const element2 = <h1>Hello, {formatName(user2)}</h1>;
// JSX 문법으로 React 엘리먼트 생성, 중괄호 {} 안에서 JavaScript 함수를 호출할 수 있음
// formatName(user)의 결과인 "Inje Lee"가 화면에 출력됨
const root2 = ReactDOM.createRoot(document.getElementById("root"));
// HTML 문서에서 id가 "root"인 DOM 요소를 찾아 React 18 방식의 렌더링 루트 객체를 생성
root2.render(element2);
// React 엘리먼트를 실제 DOM에 렌더링, 최종 결과: 화면에 "Hello, Inje Lee"가 표시됨

// r3
function formatName(user) {
    // user 객체를 받아서 이름과 성을 하나의 문자열로 합쳐 변환하는 함수
    return user.firstName + "" + user.lastName;
}
const user3 = {
    // 사용자 정보를 담은 객체
    firstName: "Inje", // 이름
    lastName: "Lee", // 성
};
const element3 = <h1>Hello, {formatName(user3)}</h1>;
// JSX 문법으로 React 엘리먼트 생성, 중괄호 {} 안에서 JavaScript 함수를 호출할 수 있음
// formatName(user)의 결과인 "Inje Lee"가 화면에 출력됨
const root3 = ReactDOM.createRoot(document.getElementById("root"));
// HTML 문서에서 id가 "root"인 DOM 요소를 찾아 React 18 방식의 렌더링 루트 객체를 생성
root3.render(element3);
// React 엘리먼트를 실제 DOM에 렌더링, 최종 결과: 화면에 "Hello, Inje Lee"가 표시됨

// r4
function formatName(user) {
    // user 객체를 받아서 이름과 성을 하나의 문자열로 합쳐 변환하는 함수
    return user.firstName + "" + user.lastName;
}
const user4 = {
    // 사용자 정보를 담은 객체
    firstName: "Inje", // 이름
    lastName: "Lee", // 성
}
const element4 = <h1>Hello, {formatName(user4)}</h1>;
// JSX 문법으로 React 엘리먼트를 생성, 중괄호 {} 안에서 JavaScript 함수를 호출 할 수 있음
// formatName(user)의 결과인 "Inje Lee"가 화면에 출력됨
const root4 = ReactDOM.createRoot(document.getElementById("root"));
// HTML 문서에서 id가 "root"인 DOM 요소를 찾아 React 18 방식의 렌더링 루트 객체를 생성
root4.render(element4);
// React 엘리먼트를 실제 DOM에 렌더링, 최종 결과: 화면에 "Hello, Inje Lee"가 표시됨

// r5
function formatName(user){
    // user 객체를 받아서 이름과 성을 하나의 문자열로 합쳐 변환하는 함수
    return user.firstName + "" + user.lastName;
}
const user5 = {
    // 사용자 정보를 담은 객체
    firstName: "Inje", // 이름
    lastName: "Lee", // 성
}
const element5 = <h1>Hello, {formatName(user5)}</h1>;
// JSX 문법으로 React 엘리먼트를 생성, 중괄호 {} 안에서 JavaScript 함수를 호출할 수 있음
// formatName(user)의 결과인 "Inje Lee"가 화면에 출력됨
const root5 = ReactDOM.createRoot(document.getElementById("root"));
// HTML 문서에서 id가 "root"인 DOM 요소를 찾아 React 18 방식의 렌더링 루트 객체를 생성
root5.render(element5);
// React 엘리먼트를 실제 DOM에 렌더링, 최종 결과: 화면에 "Hello, Inje Lee"가 표시됨

