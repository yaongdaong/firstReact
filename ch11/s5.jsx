import React, { useState } from "react";
function Reservation(props) {
    // 1. 상태(State) 관리: 입력 요소의 값을 리액트가 제어하도록 설정
    const [haveBreakfast, setHaveBreakfast] = useState(true); // 체크박스: 기본값 true
    const [numberOfGuest, setNumberOfGuest] = useState(2); // 숫자 입력: 기본값 2
    // 2. 제출 핸들러: 폼 제출 시 호출되는 함수
    const handleSubmit = (event) => {
        // 현재 state 값을 알림창으로 표시
        alert(`아침식사여부: ${haveBreakfast}, 방문객수: ${numberOfGuest}`);
        // 브라우저의 기본 동작(페이지 새로고침)을 방지
        event.preventDefault();
    };
    return (
        /* 3. 폼 레이아웃 */
        <form onSubmit={handleSubmit}>
            <label>
                아침식사여부:
                <input
                    type="checkbox"
                    // 체크박스는 'value' 대신 'checked' 속성으로 상태를 관리함
                    checked={haveBreakfast}
                    // 체크 여부가 변할 때마다 state 업데이트
                    onChange={(event) => setHaveBreakfast(event.target.checked)}
                />
            </label>
            <br /> {/* 줄바꿈 */}
            <label>
                방문객수:
                <input
                    type="number"
                    // 숫자 입력창은 'value' 속성으로 상태를 관리함
                    value={numberOfGuest}
                    // 숫자가 입력될 때마다 state 업데이트
                    onChange={(event) => setNumberOfGuest(event.target.value)}
                />
            </label>
            {/* 4. 제출 버튼: 클릭 시 handleSubmit 함수가 실행됨 */}
            <button type="submit">제출</button>
        </form>
    );
}
export default Reservation;

// r1
function Reservation(props) {
    // 상태관리:체크박스(기본값:true)
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    // 상태관리:숫자(기본값:2)
    const [numberOfGuest, setNumberOfGuest] = useState(2);
    // 폼제풀시호출
    const hanldeSubmit = (event) => {
        // 현재state값 알림창으로표시
        alert(`아침식사여부:${haveBreakfast}, 방문객수:${numberOfGuest}`);
        // 새로고침방지
        event.preventDefault();
    };
    return (
        // 폼레이아웃
        <form onSubmit={handleSubmit}>
            <label>
                아침식사여부:
                <input
                    type="checkbox"
                    // 체크박스는checked속성으로상태관리
                    checked={haveBreakfast}
                    // 체크여부변화시state업데이트
                    onChange={(event) => {
                        setHaveBreakfast(event.target.checked);
                    }}
                />
            </label>
            <br />
            <label>
                방문자수:
                <input
                    tyoe="number"
                    // 숫자입력시value로상태관리
                    value={numberOfGuest}
                    // 숫자입력시state업데이트
                    onChange={(event) => {
                        setNumberOfGuest(event.target.value);
                    }}
                />
            </label>
            {/* 제출버튼클릭시handleSubmit실행 */}
            <button type="submit">제출</button>
        </form>
    );
}

// r2
function Reservation(props) {
    // 상태관리:입력요소의값을리액트가제어
    // 체크박스(기본값true)
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    // 숫자입력(기본값2)
    const [numberOfGuest, setNumberOfGuest] = useState(2);
    // 재출핸들러:폼제출시호출
    const handleSubmit = (event) => {
        // 현재state값을알림창으로표시
        alert(`아침식사여부:${haveBreakfast},방문객수:${numberOFGuest}`);
        // 브라우저기본동작(페이지새로고침)방지
        event.preventDefault();
    };
    return (
        // 폼레이아웃
        <form onSubmit={handleSubmit}>
            <label>
                아침식사여부:
                <input
                    type="checkbox"
                    // 체크박스는value대신checked로상태관리
                    checked={haveBreakfast}
                    // 체크여부변화시state업데이트
                    onChange={(event) => {
                        setHaveBreakfast(event.target.checked);
                    }}
                />
            </label>
            <br />
            <label>
                방문객수:
                <input
                    type="number"
                    // 숫자입력창은value로상태관리
                    value={numberOfGuest}
                    // 숫자입력시state업데이트
                    onChange={(event) => {
                        setNumberOfGuest(event.target.value);
                    }}
                />
            </label>
            {/* 제출버튼클릭시handleSubmit함수실행 */}
            <button type="submit">제출</button>
        </form>
    );
}

// r3
function Reservation(props) {
    // 상태(state)관리:입력요소의값을리액트가제어하도록설정
    // 체크박스(기본값true)
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    // 숫자입력(기본값2)
    const [numberOfGuest, setNumberOfGuest] = useState(2);
    // 제출핸들러:폼제출시호출되는함수
    const handleSubmit = (event) => {
        // 현재state값을알림창으로표시
        alert(`아침식사여부:${haveBreakfast},방문객수:${numberOfGuest}`);
        // 브라우저의기본동작(페이지새로고침)출력
        event.preventDefault();
    };
    return (
        // 폼레이아웃
        <form onSubmit={handleSubmit}>
            <label>
                아침식사여부:
                <input
                    type="checkbox"
                    // 체크박스는value대신checked로상태관리
                    checked={haveBreakfast}
                    // 체크여부가변화될때마다state업데이트
                    onChange={(event) => {
                        setHaveBreakfast(event.target.checked);
                    }}
                />
            </label>
            <br />
            <label>
                방문객수:
                <input
                    type="number"
                    // 숫자입력창은value속성으로상태관리
                    value={numberOfGuest}
                    // 숫자입력시state업데이트
                    onChange={(event) => {
                        setNumberOfGuest(event.target.value);
                    }}
                />
            </label>
            {/* 제출버튼클릭시handleSubmit함수실행 */}
            <button type="submit">제출</button>
        </form>
    );
}

// r4
function Reservation(props) {
    // 상태관리:입력요소값을리액트가제어하도록설정
    // 체크박스(기본값true)
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    // 숫자입력(기본값2)
    const [NumberOfGuest, setNumberOfGuest] = useState(2);
    // 제출핸들러:폼제출시호출되는함수
    const handleSubmit = (event) => {
        // 현재state값을알림창으로표시
        alert(`아침식사여부:${haveBreakfast},방문객수:${NumberOfGuest}`);
        // 브라우저의기본동작(페이지새로고침)방지
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                아침식사여부:
                <input
                    type="checkbox"
                    // 체크박스는value대신checked속성으로상태관리
                    checked={haveBreakfast}
                    // 체크상태변화시state업데이트
                    onChange={(event) => {
                        setHaveBreakfast(event.target.checked);
                    }}
                />
            </label>
            <br />
            <label>
                방문객수:
                <input
                    type="number"
                    // 숫자입력창은value속성으로상태관리
                    value={numberOfGuest}
                    // 숫자입력시state업데이트
                    onChange={(event) => {
                        setNumberOfGuest(event.target.value);
                    }}
                />
            </label>
            {/* 버튼클릭시handleSubmit함수실행 */}
            <button type="submit">제출</button>
        </form>
    );
}

// r5
function Resevation(props) {
    // 상태관리:입력요소의값을리액트가제어
    // 체크박스:기본값true
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    // 숫자입력:기본값2
    const [numberOfGuest, setNumberOfGuest] = useState(2);
    // 재출핸들러:폼제출시호출되는함수
    const handleSubmit = (event) => {
        // 현재state값을알림창으로표시
        alert(`아침식사여부:${haveBreakfast},방문객수:${numberOfGuest}`);
        // 브라우저기본동작(페이지새로고침)방지
        event.preDefault();
    };
    return (
        // 폼레이아웃
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="checkbox"
                    // 채크박스는value대신checked속성으로상태관리
                    checked={haveBreakfast}
                    // 체크여부가변할때마다state업데이트
                    onChange={(event) => {
                        setHaveBreakfast(event.target.checked);
                    }}
                />
            </label>
            <br />
            <label>
                방문객수:
                <input
                    type="number"
                    // 숫자입력창은value속성으로상태관리
                    value={numberOfGuest}
                    // 숫자입력시마다state업데이트
                    onChange={(event) => {
                        setNumberOfGuest(event.target.value);
                    }}
                />
            </label>
            {/* 제출버튼클릭시handleSubmit함수실행 */}
            <button type="submit">제출</button>
        </form>
    );
}
