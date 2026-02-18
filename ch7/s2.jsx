// React 라이브러리와 useState 훅을 불러온다
// useState는 값을 기억하고 화면을 다시 그리게 해주는 기능
import React, { useState } from "react";
// Counter라는 함수형 컴포넌트를 만든다
// props는 부모 컴포넌트에서 전달받는 값들 (지금은 사용하지 않음)
function Counter(props) {
    // useState(0) → count의 초기값을 0으로 설정한다
    // count : 현재 상태 값
    // setCount : count 값을 변경할 때 사용하는 함수
    const [count, setCount] = useState(0);
    // 화면에 보여줄 JSX를 반환한다
    return (
        <div>
            {/* 현재 count 값을 화면에 출력한다
               count가 바뀌면 이 부분도 자동으로 다시 렌더링된다*/}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼을 클릭하면 onClick 안의 함수가 실행된다
               setCount(count + 1)을 호출하면
               1) count 값이 1 증가하고
               2) React가 상태 변경을 감지하고
               3) 컴포넌트를 다시 렌더링한다*/}
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}

// r1
// React 라이브러리와 useState 훅을 불러온다
// useState는 값을 기억하고 화면을 다시 그리게 해주는 기능
import React, { useState } from "react";
// Counter라는 함수형 컴포넌트를 만든다
// props는 부모 컴포넌트에서 전달받는 값들 (지금 사용하지 않음)
function Counter(props) {
    // useState(0): count의 초기값을 0으로 설정
    // count: 현재 상태 값
    // setCount: count 값을 변경할 때 사용하느 ㄴ함수
    const [count, setCount] = useState(0);
    // 화면에 보여줄 JSX를 반환한다
    return (
        <div>
            {/* 현재 count 값을 화면에 출력한다
      count가 바뀌면 이 부분도 자동으로 다시 렌더링된다 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼을 클릭하면 onClick 안의 함수가 실행된다
      setCount(count + 1)을 호출하면
      1) count값이 1 증가하고
      2) React가 상태 변경을 감지하고
      3) 컴포넌트를 다시 렌더링한다 */}
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}

// r2
// React 라이브러리와 useState 훅을 불러온다
// useState는 값을 기억하고 화면을 다시 그리게 해주는 기능
import React, { useState } from "react";
// Counter라는 함수형 컴포넌트를 만든다
// props는 부모 컴포넌트에서 전달받는 값들 (지금은 사용하지 않음)
function Counter(props) {
    // useState(0): count의 초기값을 0으로 설정
    // count: 현재 상태 값
    // setCount: count값을 변경할 때 사용하는 함수
    const [count, setCount] = useState(0);
    // 화면에 보여줄 JSX를 반환한다
    return (
        <div>
            {/* 현재 count 값을 화면에 출력한다
      count가 바뀌면 이 부분도 자동으로 다시 렌더링된다 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼을 클릭하면 onClick 안의 함수가 실행된다
      setCount(count + 1)을 호출하면
      1) count 값이 1 증가하고
      2) React가 상태 변경을 감지하고
      3) 컴포넌트를 다시 렌더링한다 */}
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}

// r3
// React 라이브러리와 useState 훅을 불러온다
// useState는 값을 기억하고 화면을 다시 그리게 해주는 기능
import React, { useState } from "react";
// Counter라는 함수형 컴포넌트를 만든다
// props는 부모 컴포넌트에서 전달받는 값들 (지금은 사용하지 않음)
function Counter(props) {
    // useState(0): count의 초기값을 0으로 설정한다
    // count: 현재 상태 값
    // setCount: count값을 변경할 때 사용하는 함수
    const [count, setCount] = useState(0);
    // 화면에 보여줄 JSX를 반환한다
    return (
        <div>
            {/* 현재 count 값을 화면에 출력한다
      count가 바뀌면 이 부분도 자동으로 다시 렌더링된다 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼을 클릭하면 onClick 안의 함수가 실행된다
      setCount(count + 1)을 호출하면
      1) count 값이 1 증가하고
      2) React가 상태 변경을 감지하고
      3) 컴포넌트를 다시 렌더링한다 */}
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}

// r4
// React라이브러리와 useState 훅을 불러온다
// useState는 값을 기억하고 화면을 다시 그리게 해주는 기능
import React, { useState } from "react";
// Counter라는 함수형 컴포넌트를 만든다
// props는 부모 컴포넌트에서 전달받는 값들 (지금은 사용하지 않음)
function Counter(props) {
    // useState(0): count의 초기값을 0으로 설정
    // count: 현재 상태 값
    // setCount: count값을 변경할 때 사용하는 함수
    const [count, setCount] = useState(0);
    // 화면에 보여줄 JSX를 반환한다
    return (
        <div>
            {/* 현재 count 값을 화면에 출력한다
      count가 바뀌면 이부분도 자동으로 다시 렌더링된다 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼을 클릭하면 onClick 안의 함수가 실행된다
      setCount(count + 1)을 호출하면
      1) count값이 1 증가하고
      2) React가 상태 변경을 감지하고
      3) 컴포넌트를 다시 렌더링한다 */}
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}

// r5
// React 라이브러리와 useState 훅을 불러온다
// useState는 값을 기억하고 화면을 다시 그리게 해주는 기능
import React, { useState } from "react";
// Counter라는 함수형 컴포넌트를 만든다
// props는 부모 컴포넌트에서 전달받는 값들 (지금은 사용하지 않음)
function Counter(props) {
    // useState(0): count의 초기값을 0으로 설정
    // count: 현재 상태 값
    // setCount: count 값을 변경할 때 사용하는 함수
    const [count, setCount] = useState(0);
    // 화면에 보여줄 JSX를 반환한다
    return (
        <div>
            {/* 현재 count 값을 화면에 출력한다
      count가 바뀌면 이 부분도 자동으로 다시 렌더링된다 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼을 클릭하면 onClick 안의 함수가 실행된다
      setCount(count +1)을 호출하면
      1) count 값이 1 증가하고
      2) React가 상태 변경을 감지하고
      3) 컴포넌트를 다시 렌더링한다 */}
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}
