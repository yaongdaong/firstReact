// 카운트를 함수의 변수로 선언해서 사용하게 되면 버튼 클릭 시 카운트 값을 증가시킬 수는 있지만, 재렌더링이 일어나지 않아 새로운 카운트 값이 화면에 표시되지 않게 된다.
// React 라이브러리에서 React와 useState 훅을 불러온다
// (지금 코드에서는 useState를 import했지만 실제로는 사용하지 않고 있음)
import React, { useState } from "react";
// Counter라는 함수형 컴포넌트를 정의한다
// props는 부모 컴포넌트에서 전달받은 값들
function Counter(props) {
    // 일반 자바스크립트 변수
    // 컴포넌트가 다시 렌더링될 때마다 항상 0으로 초기화된다
    var count = 0;
    // 화면에 보여줄 JSX를 반환한다
    return (
        <div>
            {/* 현재 count 값을 화면에 출력 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼을 클릭하면 화살표 함수가 실행된다
               count++는 값은 증가하지만 React는 이 변경을 "상태 변화"로 인식하지 못한다*/}
            <button onClick={() => count++}>클릭</button>
        </div>
    );
}

// r1
// 카운트를 함수의 변수로 선언해서 사용하게 되면 버튼 클릭 시 카운트 값을 증가시킬 수는 있지만, 재렌더링이 일어나지 않아 새로운 카운트 값이 화면에 표시되지 않게 된다.
// React 라이브러리에서 React와 useState 훅을 불러온다
// 지금 코드에서는 useState를 import했지만 실제로는 사용하지 않고 있음
import React, { useState } from "react";
// Counter라는 함수형 컴포넌트를 정의한다
// props는 부모 컴포넌트에서 전달받은 값들
function Counter(props) {
    // 일반 자바스크립트 변수
    // 컴포넌트가 다시 렌더링될 때마다 항상 0으로 초기화된다
    var count = 0;
    // 화면에 보여줄 JSX를 반환한다
    return (
        <div>
            {/* 현재 count 값을 화면에 출력 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼을 클릭하면 화살표 함수가 실행된다
      count++는 값은 증가하지만 React는 이 변경을 '상태 변화'로 인식하지 못한다 */}
            <button onClick={() => count++}>클릭</button>
        </div>
    );
}

// r2
// 카운트를 함수의 변수로 선언해서 사용하게 되면 화면 버튼 클릭 시 카운트 값을 증가시킬 수는 있지만, 재렌더링이 일어나지 않아 새로운 카운트 값이 화면에 표시되지 않게 한다.
// React 라이브러리에서 React와 useState 훅을 불러온다
// 지금 코드에서는 useState를 import 했지만 실제로는 사용하지 않고 있음
import React, { useState } from "react";
// Counter라는 함수형 컴포넌트를 정의한다
// props는 부모 컴포넌트에서 전달받은 값들
function Counter(props) {
    // 일반 자바스크립트 변수
    // 컴포넌트가 다시 렌더링될 때마다 항상 0으로 초기화된다
    var count = 0;
    // 화면에 보여줄 JSX를 반환한다
    return (
        <div>
            {/* 현재 count 값을 화면에 출력*/}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼을 클릭하면 화살표 함수가 실행된다
      count++는 값은 증가하지만 React는 이 변경을 "상태 변화"로 인식하지 못한다 */}
            <button onClick={() => count++}>클릭</button>
        </div>
    );
}

// r3
// 카운트를 함수의 변수로 선언해서 사용하게 되면 버튼 클릭 시 카운트 값을 증가시킬 수는 있지만, 재렌더링이 일어나지 않아 새로운 카운트 값이 화면에 표시되지 않게 된다
// React 라이브러리에서 React와 useState 훅을 불러온다
// 지금 코드에서는 useState를 import했지만 실제로는 사용하지 않고 있음
import React, { useState } from "react";
// Counter라는 함수형 컴포넌트를 정의한다
// props는 부모 컴포넌트에서 전달받은 값들
function Counter(props) {
    // 일반 자바스크립트 변수
    // 컴포넌트가 다시 렌더링될 때마다 항상 0으로 초기화된다
    var count = 0;
    // 화면에 보여줄 JSXJ를 반환한다
    return (
        <div>
            {/* 현재 count 값을 화면에 출력 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼을 클릭하면 화살표 함수가 실행된다
      count++는 값은 증가하지만 React는 이 변경을 "상태 변화"로 인식하지 못한다 */}
            <button onClick={() => count++}>클릭</button>
        </div>
    );
}

// r4
// 카운트를 함수의 변수로 선언해서 사용하게 되면 버튼 클릭 시 카운트 값을 증가시킬 수는 있지만, 재렌더링이 일어나지 않아 새로운 카운트 값이 화면에 표시되지 않게 된다.
// React 라이브러리에서 React와 useState 훅을 불러온다
// 지금 코드에서는 useState를 import했지만 실제로는 사용하지 않고 있음
import React, { useState } from "react";
// Counter라는 함수형 컴포넌트를 정의한다
// props는 부모 컴포넌트에서 전달받은 값들
function Counter(props) {
    // 일반 자바스크립트 변수
    // 컴포넌트가 다시 렌더링될 때마다 항상 0으로 초기화된다
    var count = 0;
    // 화면에 보여줄 JSX를 반환한다
    return (
        <div>
            {/* 현재 count 값을 화면에 출력 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼을 클릭하면 화살표 함수가 실행된다
      count++는 값은 증가하지만 React는 이 변경을 "상태 변화"로 인식하지 못한다 */}
            <button onClick={() => count++}>클릭</button>
        </div>
    );
}

// r5
// 카운트를 함수의 변수로 선언해서 사용하게 되면 버튼 클릭 시 카운트 값을 증가시킬 수는 있지만, 재렌더링이 일어나지 않아 새로운 카운트 값이 화면에 표시되지 않게 된다
// React 라이브러리에서 React와 useState 훅을 불러온다
// 지금 코드에서는 useState를 import했지만 실제로는 사용하지 않고 있음
import React, { useState } from "react";
// Counter라는 함수형 컴포넌트를 정의한다
// props는 부모 컴포넌트에서 전달받은 값들
function Counter(props) {
    // 일반 자바스크립트 변수
    // 컴포넌트가 다시 렌더링될 때마다 항상 0으로 초기화된다
    var count = 0;
    // 화면에 보여줄 JSX를 반환한다
    return (
        <div>
            {/* 현재 count 값을 화면에 출력 */}
            <p>총 {count}번 클릭했습니다.</p>
            {/* 버튼을 클릭하면 화살표 함수가 실행된다
      count++는 값은 증가하지만 React는 이 변경을 "상태 변화"로 인식하지 못한다 */}
            <button onClick={() => count++}>클릭</button>
        </div>
    );
}
