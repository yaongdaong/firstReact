// 제어 컴포넌트:react가 시키는 대로만 움직이는 입력창
function NameForm(props) {
    // 1. state 생성: input의 값을 저장할 공간
    const [value, setValue] = useState("");
    // 2. 변경 이벤트 핸들러: 사용자가 타이핑할 때마다 실행됨
    const handleChange = (event) => {
        // 사용자가 입력한 값(event.target.value)을 state에 반영
        setValue(event.target.value);
    };
    // 3. 제출 이벤트 핸들러: 폼이 제출될 때 실행됨
    const handleSubmit = (event) => {
        alert("입력한 이름:" + value);
        // 기본 동작(페이지 새로고침)을 막음
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                {/* 4. value를 state와 연결하고, onChange로 상태를 동기화 */}
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

// r1
// 제어컴포넌트:react가 시키는 대로만 움직이는 입력창
function NameForm(props) {
    // 1.state생성:input의 값 저장
    const [value, setValue] = useState("");
    // 2. 변경 이벤트 핸들러: 사용자가 타이핑할 때마다 실행
    const handleChange = (event) => {
        // 사용자가 입력한값을 state에 반영
        setValue(event.target.value);
    };
    // 3.제출이벤트핸들러:폼이제출될때실행
    const handleSubmit = (event) => {
        alert("입력한 이름: " + value);
        // 기본동작(페이지새로고침)막음
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                {/* value를 state와 연결, onChange로 상태동기화 */}
                이름: <input type="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

// r2
// 제어컴포넌트:react가 시키는대로만 움직이는 입력창
function NameForm(props) {
    // 1. state생성:input의 값을 저장할 공간
    const [value, setValue] = useState("");
    // 2.변경 이벤트 핸들러:사용자가 타이핑할때마다 실행됨
    const handleChange = (evnet) => {
        // 사용자가 입력한 값을 state에반영
        setValue(event.target.value);
    };
    // 3.제출이벤트핸들러:폼이제출될때실행됨
    const handleSubmit = (event) => {
        alert("입력한 이름: " + value);
        // 기본동작(페이지새로고침)막음
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                {/* 4.value를 state와 연결하고, onChange로 상태동기화 */}
                이름: <input type="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

// r3
// 제어컴포넌트:react가 시키는대로만 움직이는 입력창
function NameForm(props) {
    // 1.state생성:input이ㅡ 값을 저장할 공간
    const [value, setValue] = useState("");
    // 2.변경이벤트핸들러:사용자가 타이핑할때마다 실행됨
    const handleChange = (event) => {
        // 사용자가 입력한 값을 state에 반영
        setValue(event.target.value);
    };
    // 3.재출이벤트핸들러:폼이 제출될떄 실행됨
    const handleSubmit = (event) => {
        alert("입력한 이름: " + value);
        // 기본 동작(페이지새로고침)을 막음
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                {/* 4.value를 state와 연결하고, onChange로 상태를 동기화 */}
                이름: <input type="text" value={value} onChange={handleChange} />
            </label>
            ch11/s2.jsx
            <button type="submit">제출</button>
        </form>
    );
}

// r4
// 제어컴포넌트:react가 시키는대로만 움직이는 입력창
function NameForm(props) {
  // 1.state생성:input의 값을 저장할공간
    const [value, setValue] = useState("");
    // 2.변경이벤트핸들러:사용자가타이핑할때마다실행됨
    const handleChange = (event) => {
      // 사용자가 입력한값을 state에 반영
        setValue(event.target.value);
    };
    // 3.제출이벤트핸들러:폼이 제출될때 실행됨
    const handleSubmit = (event) => {
        alert("입력한 이름: " + value);
        // 기본동작(페이지새로고침을막음)
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                {/* 4.value를 state와 연결하고, onChange로 상태동기화 */}
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

// r5
// 제어컴포넌트:react가 시키는대로만 움직이는 입력창
function NameForm(props) {
  // 1.state생성:input의 값을 저장할 공간
    const [value, setValue] = useState("");
    // 2.변경이벤트핸들러:사용자가타이핑할때마다실행됨
    const handleChange = (event) => {
      // 사용자가 입력한값을 state에 반영
        setValue(event.target.value);
    };
    // 3.제출이벤트핸들러:폼이제출될때실행됨
    const handleSubmit = (event) => {
        alert("입력한 이름: " + value);
        // 기본동작(페이지새로고침)을막음
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <lable>
              {/* 4.value를 state와 연결하고, onChange로 상태를 동기화 */}
                이름: <input type="text" value={value} onChange={handleChange} />
            </lable>
            <button type="submit">제출</button>
        </form>
    );
}
