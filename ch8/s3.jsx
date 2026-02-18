function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);
    // 방법 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
    // 방법 2. arrow function을 사용하여 정의
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    };
    return <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>;
}
function Toggle(props) {
    // 버튼이 켜져 있는지 / 꺼져 있는지를 기억하는 상자(state)
    // 처음에는 true → "켜짐"
    const [isToggleOn, setIsToggleOn] = useState(true);

    // =========================
    // 방법 1️⃣ 일반 함수로 정의
    // =========================
    function handleClick() {
        // 이전 상태(isToggleOn)를 받아서
        // 반대 값(!isToggleOn)으로 바꿔 줌
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    // =========================
    // 방법 2️⃣ 화살표 함수로 정의
    // =========================
    const handleClick = () => {
        // 위와 똑같이 동작함
        // 버튼을 누를 때마다 true ↔ false가 바뀜
        setIsToggleOn((isToggleOn) => !isToggleOn);
    };

    // 버튼을 클릭하면 handleClick 함수가 실행됨
    // isToggleOn 값에 따라 글자가 바뀜
    return <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>;
}

// r1
function Toggle(props) {
    // 버튼 온오프 기억 상자(state)
    const [isToggleOn, setIsToggleOn] = useState(true);
    // 방법 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
    // 방법 2. arrow function을 사용하여 정의
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    };
    return <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>;
}

// r2
function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);
    // 방법 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
    // 방법 2. arrow function을 사용하여 정의
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    };
    return <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>;
}

// r3
function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);
    // 방법 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
    // 방법 2. arrow function을 사용하여 정의
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    };
    return <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>;
}

// r4
function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);
    // 방법 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
    // 방법 2. arrow function을 사용하여 정의
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    };
    return <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>;
}

// r5
function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);
    // 방법 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
    // 방법 2. arrow function을 사용하여 정의
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    };
    return <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>;
}
