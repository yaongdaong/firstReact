// 현재 시간을 포함한 리액트 엘리먼트를 생성하고 화면에 렌더링하는 함수
function tick() {
    // JSX로 화면에 표시할 UI 구조를 정의
    const element = (
        // 여러 개의 태그를 감싸기 위한 div
        <div>
            {/* 제목 문구를 표시하는 h1 태그 */}
            <h1>안녕, 리액트!</h1>
            {/* 현재 시간을 문자열로 변환하여 화면에 출력 */}
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    // id가 "root"인 DOM 요소를 기준으로 React 루트 객체 생성
    const root = ReactDOM.createRoot(document.getElementById("root"));
    // 위에서 만든 리액트 엘리먼트를 실제 화면에 렌더링
    root.render(element);
}
// tick 함수를 1초(1000ms)마다 반복 실행하여 시간을 갱신
setInterval(tick, 1000);

// // r1.렌더링된 엘리먼트 업데이트하기
// // 현재 시간을 포함한 리액트 엘리먼트를 생성하고 화면에 렌더링하는 함수
// function tick() {
//     // JSX로 화면에 표시할 UI 구조를 정의
//     const element1 = (
//         // 여러 개의 태그를 감싸기 위한 div
//         <div>
//             {/* 제목 문구를 표시하는 h1 태그 */}
//             <h1>안녕, 리액트!</h1>
//             {/* 현재 시간을 문자열로 변환하여 화면에 출력 */}
//             <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     // id가 "root"인 DOM 요소를 기준으로 React 루트 객체 생성
//     const root1 = ReactDOM.createRoot(document.getElementById("root"));
//     // 위에서 만든 리액트 엘리먼트를 실제 화면에 렌더링
//     root1.render(element1);
// }
// // tick 함수를 1초마다 반복 실행하여 시간을 갱신
// setInterval(tick, 1000);

// // r2.렌더링된 엘리먼트 업데이트하기
// // 현재 시간을 포함한 리액트 엘리먼트를 생성하고 화면에 렌더링하는 함수
// function tick() {
//     // JSX로 화면에 표시할 UI 구조를 정의
//     const element2 = (
//         // 여러 개의 태그를 감싸기 위한 div
//         <div>
//             {/* 제목 문구를 표시하는 h1 태그 */}
//             <h1>안녕, 리액트!</h1>
//             {/* 현재 시간을 문자열로 변환하여 화면에 출력 */}
//             <h2>현재 시간: {new Date().toLocaleString()}</h2>
//         </div>
//     );
//     // id가 "root"인 DOM 요소를 기준으로 React 루트 객체 생성
//     const root2 = ReactDOM.createRoot(document.getElementById("root"));
//     // 위에서 만든 리액트 엘리먼트를 실제 화면에 렌더링
//     root2.render(element2);
// }
// // tick 함수를 1초마다 반복 실행하여 시간을 갱신
// setInterval(tick, 1000);

// // r3.렌더링된 엘리먼트 업데이트하기
// // 현재 시간을 포팜한 리액트 엘리먼트를 생성하고 화면에 렌더링하는 함수
// function tick() {
//     // JSXJ로 화면에 표시할 UI 구조를 정의
//     const element3 = (
//         // 여러 개의 태그를 감싸기 위한 div
//         <div>
//             {/* 제목 문구를 표시하는 h1 태그 */}
//             <h1>안녕, 리액트!</h1>
//             {/* 현재 시간을 문자열로 변환하여 화면에 출력 */}
//             <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     // id가 'root'인 DOM 요소를 기준으로 React 루트 객체 생성
//     const root3 = ReactDOM.createRoot(document.getElementById("root"));
//     // 위에서 만든 리액트 엘리먼트를 실제 화면에 렌더링
//     root3.render(element3);
// }
// // tick 함수를 1초마다 반복 실행하여 시간을 갱신
// setInterval(tick, 1000);

// // r4.렌더링된 엘리먼트 업데이트하기
// // 현재 시간을 포함한 리액트 엘리먼트를 생성하고 화면에 렌더링하는 함수
// function tick() {
//     // JSX로 화면에 표시할 UI 구조를 정의
//     const element4 = (
//         // 여러 개의 태그를 감싸기 위한 div
//         <div>
//             {/* 제목 문구를 표시하는 h1 태그 */}
//             <h1>안녕, 리액트!</h1>
//             {/* 현재 시간을 문자열로 변환하여 화면에 출력 */}
//             <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     // id가 'root'인 DOM요소를 기준으로 React 루트 객체 생성
//     const root4 = ReactDOM.createRoot(document.getElementById("root"));
//     // 위에서 만든 리액트 엘리먼트를 실제 화면에 렌더링
//     root4.render(element4);
// }
// // tick 함수를 1초마다 반복 실행하여 시간을 갱신
// setInterval(tick, 1000);

// // r5.렌더링된 엘리먼트 업데이트하기
// // 현재 시간을 포함한 리액트 엘리먼트를 생성하고 화면에 렌더링하는 함수
// function tick() {
//     // JSX로 화면에 표시할 UI 구조를 정의
//     const element5 = (
//         // 여러 개의 태그를 감싸기 위한 div
//         <div>
//             {/* 제목 문구를 표시하는 h1 태그 */}
//             <h1>안녕, 리액트!</h1>
//             {/* 현재 시간을 문자열로 변환하여 화면에 출력 */}
//             <h2>현재시간: {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     // id가 'root'인 DOM 요소를 기준으로 React 루트 객체 생성
//     const root5 = ReactDOM.createRoot(document.getElementById("root"));
//     // 위에서 만든 리액트 엘리먼트를 실제 화면에 렌더링
//     root5.render(element5);
// }
// // tick 함수를 1초마다 반복 실행하여 시간을 갱신
// setInterval(tick, 1000);
