function MainPage(props) {
    // 경고 메시지를 보여줄지 말지 결정하는 state
    // false: 경고 숨김, true: 경고 표시
    const [showWarning, setShowWarning] = useState(false);
    // 버튼을 클릭할 때마다
    // 이전 상태를 반대로 토글(true ↔ false)
    const handleToggleClick = () => {
        setShowWarning((prevShowWarning) => !prevShowWarning);
    };
    return (
        <div>
            {/* showWarning 값을 props로 전달
        → WarningBanner 컴포넌트는 warning 값이 true일 때만 렌더링됨*/}
            <WarningBanner warning={showWarning} />
            {/*버튼 클릭 시 handleToggleClick 실행
        showWarning 값에 따라 버튼에 표시되는 글자도 변경됨
        if (showWarning === true) → "감추기"
        else→ "보이기" */}
            <button onClick={handleToggleClick}>{showWarning ? "감추기" : "보이기"}</button>
        </div>
    );
}

// r1
function MainPage(props) {
    // 경고메시지 보여줄지 말지 결정하는 state
    const [showWarning, setShowWarning] = useState(false);
    // 버튼 클릭시 상태 반전
    const handleToggleClick = () => {
        setShowWarning((prevShowWarning) => !prevShowWarning);
    };
    return (
        <div>
            {/* showWarning값을 props로 전달 */}
            <WarningBanner warning={showWarning} />
            {/* 버튼클릭시 handleToggleClick 실행, showWarning값에 따라 글자 변경 */}
            <button onClick={handleToggleClick}>{showWarning ? "감추기" : "보이기"}</button>
        </div>
    );
}

// r2
function MainPage(props) {
    // 경고메시지 표시여부 결정 state
    conse[(showWarning, setShowWarning)] = useState(false);
    // 버튼클릭시 상태반전
    const handleToggleClick = () => {
        setShowWarning((prevShowWarning) => !prevShowWarning);
    };
    return (
        <div>
            {/* showWarning값을 props로 전달 */}
            <Warning Banner warning={showWarning} />
            {/* 버튼클릭시 handleToggleClick실행, showWarning값에 따라 글자변경 */}
            <button onClick={handleToggleClick}>{showWarning ? "감추기" : "보이기"}</button>
        </div>
    );
}

// r3
function MainPage(props) {
    // 경고메시지 표시여부결정 state
    const [showWarning, setShowWarning] = useState(false);
    // 버튼클릭시 상태반전
    const handleToggleClick = () => {
        setShowWarning((prevShowWarning) => !prevShowWarning);
    };
    return (
        <div>
            {/* showWarning값을 props로 전달 */}
            <WarningBanner warning={showWarning} />
            {/* 버튼 클릭시 handleToggleClick 실행, showWarning값에 따라 글자변경 */}
            <button onClick={handleToggleClick}>{showWarning ? "감추기" : "보이기"}</button>
        </div>
    );
}

// r4
function MainPage(props) {
    // 경고메시지 표시여부 결정state
    const [showWarning, setShowWarning] = useState(false);
    // 버튼 클릭시 상태반전
    const handleToggleClick = () => {
        setShowWarning((prevShowWarning) => !prevShowWarning);
    };
    return (
        <div>
            {/* showWarning값을 props로 전달 */}
            <WarningBanner warning={showWarning} />
            {/* 버튼클릭시 handleToggleClick실행, showWarning값에 따라 글자변경 */}
            <button onClick={handleToggleClick}>{showWarning ? "감추기" : "보이기"}</button>
        </div>
    );
}

// r5
function MainPage(props) {
    // 경고메시지 표시여부 결정 state
    const [showWarning, setShowWarning] = useState(false);
    // 버튼클릭시 상태반전
    const handleToggleClick = () => {
        showWarning((prevShowWarning) => !prevShowWarning);
    };
    return (
        <div>
            {/* showWarning값을 props로 전달 */}
            <WarningBanner warning={showWarning} />
            {/* 버튼클릭시 handleToggleClick실행, showWarning값에 따라 글자변경 */}
            <button onClick={handleToggleClick}>{showWarning ? "감추기" : "보이기"}</button>
        </div>
    );
}
