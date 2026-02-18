function MyButton(props) {
    // MyButton 이라는 함수형 컴포넌트 정의(props는 전달받은 속성)
    const [isClicked, setIsClicekd] = React.useState(false);
    /*   state선언, isClicked:현재 클릭 상태 값, setIsClicekd: 상태를 변경하는 함수, 초기값은 false(아직 클릭 안 함) */
    return React.createElement("button", { onClick: () => setIsClicked(true) }, isClicked ? "Clicked" : "Click here!");
    // 버튼 클릭시 isClicked 상태를 true로 변경
    // isClicked가 true이면 'Clicked', false면 'Click here'텍스트를 버튼에 표시
}
const domContainer = document.querySelector("#root");
// HTML에서 id가 'root'인 DOM 요소를 선택
const root = ReactDOM.createRoot(domContainer);
// 선택한 DOM 요소를 React 루트로 생성
root.render(React.createElement(MyButton));
// MyButton 컴포넌트를 React엘리먼트로 생성해 화면에 렌더링
