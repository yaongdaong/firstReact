// 사용자의 요청사항을 입력받아 제출하는 폼 컴포넌트
function RequestForm(props) {
    // 입력된 텍스트를 저장하는 상태 (초기값 설정)
    const [value, setValue] = useState("요청사항을 입력하세요.");
    // 입력창에 타이핑할 때마다 실행 (상태 동기화)
    const handleChange = (event) => {
        // 사용자가 입력한 값으로 value 상태를 업데이트
        setValue(event.target.value);
    };
    // 폼 제출 버튼 클릭 시 실행
    const handleSubmit = (event) => {
        // 알림창으로 현재 상태(value) 출력
        alert("입력된 요청사항: " + value);
        
        // 폼 제출 시 발생하는 페이지 새로고침 방지
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                {/* value: 상태와 입력창을 연결 (제어 컴포넌트)
                  onChange: 입력 시 발생할 이벤트 핸들러 
                */}
                요청사항: <textarea value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}
// onChange로 상태값 업데이트하고, value로 상태값전달받음
// r1
function RequestForm(props) {
    // 상태 저장
    const [value, setValue] = useState("요청사항을 입력하세요.");
    // 글자입력시 호출
    const handleChange = (event) => {
        // 글자입력시 업데이트
        setValue(event.target.value);
    };
    // 제출버튼클릭시실행
    const handleSubmit = (event) => {
        // 입력된 글자보이기
        alert("입력된 요청사항: " + value);
        // 페이지새로고침 방지
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                {/* value:입력값저장, onChange:글자입력시업데이트 */}
                요청사항: <textarea value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

// r2
// 사용자요청입력받아제출
function RequestForm(props) {
    // 입력된텍스트 저장, 초기값 설정
    const [value, setValue] = useState("요청사항을 입력하세요");
    // 입력창타이핑떄마다실행(상태동기화)
    const handleChange = (event) => {
        // 사용자입력값으로value값업데이트
        setValue(event.target.value);
    };
    // 폼제출버튼클릭시실행
    const handleSubmit = (event) => {
        // 알림창으로현재상태출력
        alert("입력한 요청사항: " + value);
        // 폼제출시페이지새로고침방지
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                {/* value:상태와입력창연결, onChange:입력시발생이벤트핸들러 */}
                요청사항: <textarea value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

// r3
// 사용자 요청사항 입력받아 제출
function RequestForm(props) {
// 입력값 저장, 초기값설정
    const [value, setValue] = useState("요청사항을 입력하세요");
    // 타이핑시 실행(상태동기화)
    const handleChange = (event) => {
        // 입력값으로 value업데이트
        setValue(event.target.value);
    };
    // 버튼클릭시 실행
    const handleSubmit = (event) => {
        // 알림창으로 상태출력
        alert("입력한 요청사항: " + value);
        // 폼제출시발생하는페이지새로고침방지
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                {/* value:상태,입력창변경, onChange:입력시발생할이벤트핸들러 */}
                요청사항: <textarea value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

// r4
// 사용자요청입력받아제출
function RequestForm(props) {
    // 입력된텍스트저장(초기값설정)
    const [value, setValue] = useState("요청사항을 입력하세요.");
    // 입력창타이핑시실행(상태동기화)
    const handleChange = (event) => {
        // 사용자입력값으로 value업데이트
        setValue(event.target.value);
    };
    // 폼제출버튼클릭시실행
    const handleSubmit = (event) => {
        // 알림창으로현재상태출력
        alert("입력한 요청사항: " + value);
        // 폼제출시발생한느페이지새로고침방지
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                {/* value:상태,입력창연결, onChange:입력시발생하는이벤트핸들러 */}
                요청사항: <textarea value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

// r5
// 사용자요청사항입력받아제출
function RequestForm(props) {
    // 입력된텍스트저장(초기값설정)
    const [value, setValue] = useState("요청사항을 입력하세요");
    // 입력창에타이핑시실행(상태동기화)
    const handleChange = (event) => {
        // 사용자입력값으로value업데이트
        setValue(event.target.value);
    };
    // 폼제출버튼클릭시실행
    const handleSubmit = (event) => {
        // 알림창으로현재상태출력
        alert("입력한 요청사항: " + value);
        // 폼제출시발생하는페이지새로고침방지
        event.preventDefault();
    };
    return (
        <form onSubmit={handleChange}>
            <label>
                {/* value:상태와입력창연결, onChange:입력시발생할이벤트핸들러 */}
                요청사항: <textarea value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}
