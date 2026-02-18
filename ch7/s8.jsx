// useRef란?
// - 렌더링과 상관없이 값을 저장하거나 DOM 요소에 직접 접근하기 위한 React Hook
// - .current에 값이 저장되며, 값이 바뀌어도 리렌더링이 발생하지 않음
// - 주로 input 포커스, 스크롤 제어, 타이머 ID 저장 등에 사용됨
function TextInputWithFocusButton(props) {
    // input DOM 요소를 저장할 ref 객체 생성
    // 처음에는 아직 input이 없으므로 null
    const inputElem = useRef(null);
    // 버튼 클릭 시 실행될 함수
    const onButtonClick = () => {
        // inputElem.current는 실제로 화면에 마운트된 input DOM 요소를 가리킨다(예: <input type="text" />)
        inputElem.current.focus();
    };
    // 화면에 렌더링될 JSX 반환
    return (
        <>
            {/* ref를 통해 input DOM과 inputElem을 연결 */}
            <input type="text" ref={inputElem} />
            {/* 버튼 클릭 시 input에 포커스 */}
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

// r1
// useRef:렌더링과 상관없이 값을 저장하거나 DOM요소에 직접 접근하기 위한 React Hook
// .current에 값이 저장되며, 값이 바뀌어도 리렌더링이 발생하지 않음
// 주로 input 포커스, 스크롤제어, 타이머ID저장 등에 사용됨
function TextInputWithFocusButton(props) {
    // input DOM 요소를 저장할 ref 객체 생성
    // 처음에는 아직 input이 없으므로 null
    const inputElem = useRef(null);
    // 버튼 클릭 시 실행될 함수
    const onButtonClick = () => {
        // inputElem.current는 실제로 화면에 마운트된 input DOM 요소를 가리킨다(예: <input type="text"/>)
        inputElem.current.focus();
    };
    // 화면에 렌더링될 JSX 반환
    return (
        <>
            {/* ref를 통해 input DOM과 inputElem을 연결 */}
            <input type="text" ref={inputElem} />
            {/* 버튼 클릭 시 input에 포커스 */}
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

// r2
// useRef: 렌더링과 상관없이 값을 저장하거나 DOM 요소에 직접 접근하기 위한 React Hook
// .current에 값이 저장되며, 값이 바뀌어도 리렌더링이 발생하지 않음
// 주로 input 포커스, 스크롤 제어, 타이머 ID 저장 등에 사용됨
function TextInputWithFocusButton(props) {
    // input DOM 요소를 저장한 ref 객체 생성
    // 처음에는 아직 input이 없으므로 null
    const inputElem = (useRef = null);
    // 버튼 클릭 시 실행될 함수
    const onButtonClick = () => {
        // inputElem.current는 실제로 화면에 마운트된 input DOM 요소를 가리킨다(예:<input type="text"/>)
        inputElem.current.focus();
    };
    // 화면에 렌더링될 JSX 반환
    return (
        <>
            {/* ref를 통해 input DOM과 inputElem을 연결 */}
            <input type="text" ref={inputElem} />
            {/* 버튼 클릭 시 input에 포커스 */}
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

// r3
// useRef: 렌더링과 상관없이 값을 저장하거나 DOM 요소에 직접 접근하기 위한 React Hook
// .current에 값이 저장되며, 값이 바뀌어도 리렌더링이 발생하지 않음
// 주로 input 포커스, 스크롤 제어, 타이머 ID 저장 등에 사용됨
function TextInputWithFocusButton(props) {
    // input DOM 요소를 저장할 ref 객체 생성
    // 처음에는 아직 input이 없으므로 null
    const inputElem = useRef(null);
    // 버튼 클릭 시 실행될 함수
    const onButtonClick = () => {
        // inputElem.current는 실제로 화면에 마운트된 input DOM 요소를 가리킨다(예:<input type="text"/>)
        inputElem.current.focus();
    };
    // 화면에 렌더링될 JSX 반환
    return (
        <>
            {/* ref를 통해 input DOM과 inputElem을 연결 */}
            <input type="text" ref={inputElem} />
            {/* 버튼 클릭 시 input에 포커스 */}
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

// r4
// useRef: 렌더링과 상관없이 값을 저장하거나 DOM 요소에 직접 접근하기 위한 React Hook
// .current에 값이 저장되며, 값이 바뀌어도 리렌더링이 발생하지 않음
// 주로 input 포커스, 스크롤 제어, 타이머 ID 저장 등에 사용됨
function TextInputWithFocusButton(props) {
    // input DOM 요소를 저장할 ref 객체 생성
    // 처음에는 아직 input이 없으므로 null
    const inputElem = useRef(null);
    // 버튼 클릭 시 실행될 함수
    const onButtonClick = () => {
        // inputElem.current는 실제로 화면에 마운트된 input DOM 요소를 가리킨다(예:<input type="text"/>)
        inputElem.current.focus();
    };
    // 화면에 렌더링될 JSX 반환
    return (
        <>
            {/* ref를 통해 input DOM과 inputElem을 연결 */}
            <input type="text" ref={inputElem} />
            {/* 버튼 클릭 시 input에 포커스 */}
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

// r5
// useRef: 렌더링과 상관없이 값을 저장하거나 DOM 요소에 직접 접근하기 위한 React Hook
// .current에 값이 저장되며, 값이 바뀌어도 리렌더링이 발생하지 않음
// 주로 input 포커스, 스크롤 제어, 타이머 ID 저장 등에 사용됨
function TextInputWithFocusButton(props) {
    // input DOM 요소를 저장할 ref 객체 생성
    // 처음에는 아직 input이 없으므로 null
    const inputElem = useRef(null);
    // 버튼 클릭 시 실행될 함수
    const onButtonClick = () => {
        // inputElem.current는 실제로 화면에 마운트된 input DOM 요소를 가리킨다(에:<input type="text"/>)
        inputElem.current.focus();
    };
    // 화면에 렌더링될 JSX 반환
    return (
        <>
            {/* ref를 통해 input DOM과 inputElem을 연결 */}
            <input type="text" ref={inputElem} />
            {/* 버튼 클릭 시 input에 포커스 */}
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}
