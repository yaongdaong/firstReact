// 1. 숫지 리스트를 렌더링하는 '자식 컴포넌트'를 정의합니다.
function NumberList(props) {
    // 부모로부터 받은 props 안에서 numbers 배열을 꺼냅니다. (구조 분해 할당)
    const { numbers } = props;
    // 전달받은 배열을 <li> 태그 리스트로 변환합니다.
    const listItems = numbers.map((number) => (
        //    key라는 이름의 속성을 부여하고, 그 값으로 숫자를 문자열로 변환해 넣어주겠다
        <li key={number.toString()}>{number}</li>
    ));
    // 최종적으로 <ul> 태그로 감싸서 반환합니다.
    return <ul>{listItems}</ul>;
}
// 2. 실제 데이터인 숫자 배열입니다.
const numbers = [1, 2, 3, 4, 5];
// 3. HTML의 root 엘리먼트를 잡아 리액트 뿌리(Root)를 만듭니다.
const root = ReactDOM.createRoot(document.getElementById("root"));
// 4. NumberList 컴포넌트에 numbers 배열을 'props'로 전달하며 화면에 그립니다.
root.render(<NumberList numbers={numbers} />);

// r1
// 숫자리스트렌더링하는자식컴포넌트정의
function NumberList(props) {
    // 부모로부터받은props안에서numbers배열꺼내기
    const { numbers1 } = props;
    // 전달받은배열li태그리스트로변환
    const listItems = numbers1.map((number) => (
        // key속성을부여후그값으로숫자를문자열로변환해서입력
        <li key={number.toString()}>{number}</li>
    ));
    // 최종적으로ul태그감싸서반환
    return <ul>{listItems}</ul>;
}
// 실제데이터숫자배열
const numbers1 = [1, 2, 3, 4, 5];
// HTML의root엘리먼트를잡아리액트뿌리만들기
const root1 = ReactDOM.createRoot(document.getElementById("root"));
// NumberList컴포넌트에number배열을props로전달하여화면그리기
root1.render(<NumberList numbers1={numbers1} />);


// [1] 컴포넌트 정의: 리액트가 이 함수의 존재를 알게 됨
function NumberList(props) {
    // [4] 전달받은 props에서 numbers 배열을 추출
    const { numbers6 } = props;
    // [5] map 함수 실행: 배열을 하나씩 돌며 <li> 엘리먼트 뭉치를 생성
    //     이때 key 속성을 통해 리액트용 '이름표'를 각 항목에 붙임
    const listItems = numbers6.map((number) => <li key={number.toString()}>{number}</li>);
    // [6] 최종적으로 <ul> 태그로 감싸진 리스트 구조를 리액트에 반환(Return)
    return <ul>{listItems}</ul>;
}
// [2] 데이터 선언: 화면에 그릴 원본 데이터 준비
const numbers6 = [1, 2, 3, 4, 5];
// [3] 루트 설정 및 렌더링 시작:
//     id가 "root"인 HTML 요소를 찾아 리액트 엔진을 가동하고 render 호출
const root6 = ReactDOM.createRoot(document.getElementById("root"));
// [3-1] NumberList 컴포넌트를 호출하며 numbers6 데이터를 전달 (이때 [4]번으로 점프!)
root6.render(<NumberList numbers6={numbers6} />);
// [7] 리액트 엔진이 가상 DOM을 실제 브라우저 DOM에 반영 (화면에 숫자가 나타남)


// r2
// 1.컴포넌트정의
function NumberList(props) {
    // 5.전달받은props에서numbers배열추출
    const { numbers2 } = props;
    // 6.map함수실행:배열돌며li엘리먼트뭉치생성
    const listItems = numbers2.map((number) => <li key={number.toString()}>{number}</li>);
    // 7.ul리스트리액트에반환
    return <ul>{listItems}</ul>;
}
// 2.데이터선언
const numbers2 = [1, 2, 3, 4, 5];
// 3.루트설정및렌더링시작
const root2 = ReactDOM.createRoot(document.getElementById("root"));
// 4.NumberList컴포넌트호출하며number데이터전달
root2.render(<NumberList numbers2={numbers2} />);
// 8.리액트엔진이가상DOM을실제브라우저DOM에반영

// r3
// 1.컴포넌트정의
function NumberList(props) {
    // 5.전달받은props에서numbers배열추출
    const { numbers } = props;
    // 6.map함수실행:배열돌며li엘리먼트뭉치생성
    const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
    // 7.ul리스트리액트에반환
    return <ul>{listItems}</ul>;
}
// 2.데이터선언
const numbers3 = [1, 2, 3, 4, 5];
// 3.루트설정및렌더링시작
const root3 = ReactDOM.createRoot(document.getElementById("root"));
// 4.NumberList컴포넌트호출하며number데이터전달
root3.render(<NumberList numbers3={numbers3} />);
// 8.리액트엔진이가상DOM을실제브라우저DOM에반영

// r4
// 1.컴포넌트정의
function NumberList(props) {
    // 5.전달받은props에서number배열추출
    const { numbers } = props;
    // 6.map함수실행:배열돌며li엘리먼트뭉치생성
    const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
    // 7.ul리스트리액트에반환
    return <ul>{listItems}</ul>;
}
// 2.데이터선언
const numbers4 = [1, 2, 3, 4, 5];
// 3.루트설정및렌더링시작
const root4 = ReactDOM.createRoot(document.getElementById("root"));
// 4.NumberList컴포넌트호출후numbers데이터전달
root4.render(<NumberList numbers4={numbers4} />);
// 8.리액트엔진이가상DOM을실제브라우저DOM에반영

// r5
// 1.컴포넌트정의
function NumberList(props) {
    // 5.전달받은props에서numbers배열추출
    const { numbers } = props;
    // 6.map함수실행:배열돌며li엘리먼트뭉치생성
    const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
    // 7.ul리스트리액트에반환
    return <ul>{listItems}</ul>;
}
// 2.데이터선언
const numbers5 = [1, 2, 3, 4, 5];
// 3.루트설정및렌더링시작
const root5 = ReactDOM.createRoot(document.getElementById("root"));
// 4.NumberList컴포넌트호출하며numbers데이터전달
root5.render(<NumberList numbers5={numbers5} />);
// 8.리액트엔진이가상DOM을실제브라우저DOM에반영