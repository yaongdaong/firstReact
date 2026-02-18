function FruitSelect(props) {
    // 1. 선택된 과일 값을 저장할 상태 (초기값: "grape")
    // value는 현재 선택된 값, setValue는 그 값을 변경하는 함수
    const [value, setValue] = useState("grape");
    // 2. 드롭다운 메뉴의 선택 항목이 바뀔 때 실행되는 함수
    const handleChange = (event) => {
        // 사용자가 새로 선택한 option의 value로 상태를 업데이트
        setValue(event.target.value);
    };
    // 3. 제출 버튼 클릭 시 실행되는 함수
    const handleSubmit = (event) => {
        // 현재 value 상태에 저장된 값을 알림창으로 표시
        alert("선택한 과일: " + value);
        // 폼 제출 시 페이지가 새로고침되는 기본 동작을 방지
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                {/* select 태그의 value를 리액트 상태(value)와 연결!
                  이렇게 하면 리액트가 이 드롭다운의 선택 상태를 제어하게 됩니다.*/}
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

// r1
function FruitSelect(props) {
    // 선택한과일저장(초기값:grape)
    // value:현재선택된값, setValue:값변경함수
    const [value, setValue] = useState("grape");
    // 메뉴선택바뀔때마다실행
    const handleChange = (event) => {
        // 사용자가선택한option의 value로 업데이트
        setValue(event.target.value);
    };
    // 재출버튼클릭시실행
    const handleSubmit = (event) => {
        // 현재value에저장된값표시
        alert("선택한과일: " + value);
        // 폼제출시페이지새로고침방지
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                {/* select의value를리액트상태(value)와 연결:리액트가드롭다운선택상태제어 */}
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

// r2
function FruitSelect(props) {
    // 선택된과일값저장(초기값:grape)
    const [value, setValue] = useState("grape");
    // 선택항목변경시실행
    const handleChange = (event) => {
        // 사용자선택한option의value로상태업데이트
        setValue(event.target.value);
    };
    // 제출버튼시실행되는함수
    const handleSubmit = (event) => {
        // 현재value상태에저장된값표시
        alert("선택한 과일: " + value);
        // 폼제출시페이지새로고침방지
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                {/* select의value를리액트상태(value)연결:리액트가이드롭다운선택제어 */}
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

// r3
function FruitSelect(props) {
    // 선택된과일값저장(초기값:grape)
    // value:현재선택된값,setValue:값변경함수
    const [value, setValue] = useState("grape");
    // 드롭다운메뉴선택항목변경시실행
    const handleChange = (event) => {
        // 사용자가새로선택한option의value상태업데이트
        setValue(event.target.value);
    };
    // 제출버튼클릭시실행
    const handleSubmit = (event) => {
        // 현재value상태에서저장된값표시
        alert("선택한 과일: " + value);
        // 폼제출시페이지새로고침방지
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                {/* select태그value를리액트상태(value)와연결,리액트가드롭다운선택상태제어 */}
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

// r4
function FruitSelect(props) {
  // 선택한과일값저장(초기값:grape)
  // value:현재선택된값, setValue:그값변경함수
    const [value, setValue] = useState("grape");
    // 드롭다운메뉴선택항목변경시실행
    const handleChange = (event) => {
      // 사용자가새로선택한option의value로상태업데이트
        setValue(event.target.value);
    };
    // 제출버튼클릭시실행
    const handleSubmit = (event) => {
      // 현재value상태저장된값표시
        alert("선택한 과일: " + value);
        // 폼제출시새로고침방지
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                {/* select태그의value를리액트상태와연결,리액트가드롭다운선택상태제어 */}
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

// r5
function FruitSelect(props) {
  // 선택된과일값저장(초기값:grape)
  // value:현재선택된값,setValue:그값변경함수
    const [value, setValue] = useState("grape");
    // 드롭다운선택항목변경시실행
    const handleChange = (event) => {
      // 사용자가새로선택한option의value로상태업데이트
        setValue(event.target.value);
    };
    // 제출버튼클릭시실행
    const handleSubmit = (event) => {
      // 현재value상태저장된값표시
        alert("선택한 과일: " + value);
        // 폼제출시페이지새로고침방지
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                {/* select태그의value를리액트상태와연결:리액트가드롭다운선택상태제어 */}
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}
