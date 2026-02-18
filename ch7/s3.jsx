// 리액트에서 필요한 기능들을 불러온다
// useState : 상태(state)를 만들기 위해 사용
// useEffect : 생명주기 메서드(componentDidMount, componentDidUpdate 등)를 대신
import React, { useState, useEffect } from "react";
// Counter라는 함수형 컴포넌트 정의
function Counter(props) {
    // count : 현재 클릭 횟수 값
    // setCount : count 값을 변경해주는 함수
    // useState(0) → 초기값을 0으로 설정
    const [count, setCount] = useState(0);
    // useEffect는 컴포넌트가 화면에 그려진 후 실행된다
    // 그리고 state(count)가 변경될 때마다 다시 실행된다
    // (componentDidMount + componentDidUpdate와 비슷한 역할)
    useEffect(() => {
        // 브라우저 탭의 제목(title)을 변경한다
        // count 값이 바뀔 때마다 실행되므로
        // componentDidUpdate처럼 동작한다고 볼 수 있다
        document.title = `총 ${count}번 클릭했습니다.`;
    }); // ← 의존성 배열이 없어서 매 렌더링마다 실행됨
    // 화면에 보여줄 UI 반환
    return (
        <div>
            {/* 현재 클릭 횟수를 화면에 출력 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼 클릭 시 count 값을 1 증가시킨다 */}
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}
// 다른 파일에서 Counter 컴포넌트를 사용할 수 있도록 내보낸다
export default Counter;

// r1
// 리액트에서 필요한 기능들을 불러온다
// useState: 상태(state)를 만들기 위해 사용
// useEffect: 생명주기 메서드을 대신
import React, { useState, useEffect } from "react";
// Counter라는 함수형 컴포넌트 정의
function Counter(props) {
    // count: 현재 클릭 횟수 값
    // setCount: count값을 변경해주는 함수
    // useState(0): 초기값을 0으로 설정
    const [count, setCount] = useState(0);
    // useEffect는 컴포넌트가 화면에 그려진 후 실행된다
    // 그리고 state(count)가 변경될 때마다 다시 실행된다
    // componentDidMount + componentDidUpdate와 비슷한 역할
    useEffect(() => {
        // 브라우저 탭의 제목(title)을 변경한다
        // count 값이 바뀔 때마다 실행되므로
        // componentDidUpdate처럼 동작한다고 볼 수 있다
        document.title = `총 ${count}번 클릭했습니다.`;
    }); // 의존성 배열이 없어서 매 렌더링마다 실행됨
    // 화면에 보여줄 UI 반환
    return (
        <div>
            {/* 현재 클릭 횟수를 화면에 출력 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼 클릭 시 count 값을 1증가시킨다 */}
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}
// 다른 파일에서 Counter 컴포넌트를 사용할 수 있도록 내보낸다
// export default Counter;

// r2
// 리액트에서 필요한 기능들을 불러온다
// useState: 상태(state)를 만들기 위해 사용
// useEffect: 생명주기 메서드(componentDidMount, componentDidUpdate 등)을 대신
import React, { useState, useEffect } from "react";
// Counter라는 함수형 컴포넌트 정의
function Counter(props) {
    // count: 현재 클릭 횟수 값
    // setCount: count값을 변경해주는 함수
    // useState(0): 초기값을 0으로 설정
    const [count, setCount] = useState(0);
    // useEffect는 컴포넌트가 화면에 그려진 후 실행된다
    // 그리고 state(count)가 변경될 때마다 다시 실행된다
    // componentDidMount + componentDidUpdate와 비슷한 역할
    useEffect(() => {
        // 브라우저 탭의 제목을 변경한다
        // count 값이 바뀔 때마다 실행되므로
        // componentDidUpdate처럼 동작한다고 볼 수 있다
        document.title = `총 ${count}번 클릭했습니다.`;
    }); // 의존성 배열이 없어서 매 렌더링마다 실행됨
    // 화면에 보여줄 UI 반환
    return (
        <div>
            {/* 현재 클릭 횟수를 화면에 출력 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼 클릭 시 count 값을 1증가시킨다 */}
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}
// 다른 파일에서 Counter 컴포넌트를 사용할 수 있도록 내보낸다
// export default Counter;

// r3
// 리액트에서 필요한 기능들을 불러온다
// useState: 상태(state)를 만들기 위해 사용
// useEffect: 생명주기 메서드(componentDidMount, componentDidUpdate 등)를 대신
import React, { useState, useEffect } from "react";
// Counter라는 함수형 컴포넌트 정의
function Counter(props) {
    // count: 현재 클릭 횟수 값
    // setCount: count 값을 변경해주는 함수
    // useState(0): 초기값을 0으로 설정
    const [count, setCount] = useState(0);
    // useEffect는 컴포넌트가 화면에 그려진 후 실행
    // 그리고 state(count)가 변경될 때마다 다시 실행
    // componentDidMount, componentDidUpdate와 비슷한 역할
    useEffect(() => {
        // 브라우저 탭의 제목을 변경한다
        // count값이 바뀔 때마다 실행되므로
        // componentDidUpdate처럼 동작한다고 볼 수 있다
        document.title = `총 ${count}번 클릭했습니다.`;
    }); // 의존성 배열이 없어서 매 렌더링마다 실행됨
    // 화면에 보여줄 UI 반환
    return (
        <div>
            {/* 현재 클릭 횟수를 화면에 출력 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼 클릭 시 count 값을 1 증가시킨다 */}
            <button onClick={() => setCount(count + ``)}>클릭</button>
        </div>
    );
}
// 다른 파일에서 Counter 컴포넌트를 사용할 수 있도록 내보낸다
// export default Counter;

// r4
// 리액트에서 필요한 기능들을 불러온다
// useState: 상태(state)를 만들기 위해 사용
// useEffect: 생명주기 메서드(componentDidMount, componentDidUpdate 등)를 대신
import React, { useState, useEffect } from "react";
// Counter라는 함수형 컴포넌트 정의
function Counter(props) {
    // count: 현재 클릭 횟수 값
    // setCount: count값을 변경해주는 함수
    // useState(0): 초기값을 0으로 설정
    const [count, setCount] = useState(0);
    // useEffect는 컴포넌트가 화면에 그려진 후 실행
    // 그리고 state(count)가 변경될 때마다 다시 실행
    // componentDidMount, componentDidUpdate와 비슷한 역할
    useEffect(() => {
        // 브라우저 탭의 제목을 변경
        // count 값이 바뀔 때마다 실행되므로
        // componentDidUpdate처럼 동작한다고 볼 수 있다
        document.title = `총 ${count}번 클릭했습니다.`;
    }); // 의존성 배열이 없어서 매 렌더링마다 실행됨
    // 화면에 보여줄 UI 반환
    return (
        <div>
            {/* 현재 클릭 횟수를 화면에 출력 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼 클릭 시 count 값을 1 증가시킨다 */}
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}
// 다른 파일에서 Counter 컴포넌트를 사용할 수 있도록 내보낸다
// export default Counter;

// r5
// 리액트에서 필요한 기능들을 불러온다
// useState: 상태(state)를 만들기 위해 사용
// useEffect: 생명주기 메서드(componentDidMount, componentDidUpdate 등)을 대신
import React, { useState, useEfect } from "react";
// Counter라는 함수형 컴포넌트 정의
function Counter(props) {
    // count: 현재 클릭 횟수 값
    // setCount: count값을 변경해주는 함수
    // useState(0): 초기값을 0으로 설정
    const [count, setCount] = useState(0);
    // useEffect는 컴포넌트가 화면에 그려진 후 실행된다
    // componentDidMount, componentDidUpdate와 비슷한 역할
    useEffect(() => {
        // 브라우저 탭의 제목을 변경
        // count 값이 바뀔 때마다 실행되므로
        // componentDidUpdate처럼 동작한다고 볼 수 있다
        document.title = `총 ${count}번 클릭했습니다.`;
    }); // 의존성 배열이 없어서 매 렌더링마다 실행됨
    // 화면에 보여줄 UI 반환
    return (
        <div>
            {/* 현재 클릭 횟수를 화면에 출력 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼 클릭 시 count값을 1증가시킨다 */}
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}
// 다른 파일에서 Counter 컴포넌트를 사용할 수 있도록 내보낸다
// export default Counter;
