function MyButton(props) {
    // MyButton이라는 함수형 컴포넌트 정의(props는 전달받은 속성)
    const [isClicked, setIsClicked] = React.useState(false);
    // state 선언
    // isClicked: 현재 클릭 상태 값
    // setIsClicked: 상태를 변경하려는 함수
    // 초기값은 false
    return React.createElement("button", { onClick: () => setIsClicked(true) }, isClicked ? "Clicked" : "Click here");
    // 버튼 클릭시 isClicked 상태를 true로 변경
    // isCliced가 true이면 'Clicked',false면 'Click here!'텍스트를 버튼에 표시
}
const domContainer = document.querySelector("#root");
// HTML에서 id가 'root'인 DOM요소를 선택
const root = ReactDOM.createRoot(domContainer);
// 선택한 DOM요소를 React 루트로 생성
root.render(React.createElement(MyButton));
// MyButton컴포넌트를 React엘리먼트로 생성해 화면에 렌더링
