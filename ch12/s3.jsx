// 온도의 단위를 한글로 변환하기 위한 객체 (Mapping)
const scaleNames = {
    c: "섭씨", // Celsius
    f: "화씨", // Fahrenheit
};
function TemperatureInput(props) {
    // 1. 상태 관리: 사용자가 입력한 온도 값을 저장하는 변수 'temperature'
    // 초기값은 빈 문자열("")로 설정되어 있습니다.
    const [temperature, setTemperature] = useState("");
    // 2. 이벤트 핸들러: 입력창(input)에 변화가 생길 때마다 호출되는 함수
    const handleChange = (event) => {
        // 사용자가 입력한 값(event.target.value)을 'temperature' 상태에 업데이트
        setTemperature(event.target.value);
    };
    return (
        <fieldset>
            {/* 3. props를 통해 전달받은 scale('c' 또는 'f')을 이용해 제목을 표시 */}
            <legend>온도를 입력해 주세요(단위: {scaleNames[props.scale]}):</legend>
            {/* 4. Controlled Component: input의 value를 React의 상태(state)와 연결 */}
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    );
}

// r1
// 온도단위를 한글로변환
const scaleNames1 = {
    c: "섭씨",
    f: "화씨",
};
function TemperatureInput(props) {
    // 상태관리:사용자입력한온도값저장
    const [temperature, setTemperature] = useState("");
    // 이벤트핸들러:입력시호출
    const handleChange = (event) => {
        // 사용자입력값으로업데이트
        setTemperature(event.target.value);
    };
    return (
        <fieldset>
            {/* 전달받은scale로제목표시 */}
            <legend>온도를 입력해주세요(단위:{scaleNames1[props.scale]}):</legend>
            {/* 제어컴포넌트:input value를 react의 state와 연결 */}
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    );
}

// r2
// 온도단위한글변환
const scaleNames2 = {
    c: "섭씨",
    f: "화씨",
};
function TemperatureInput(props) {
    // 상태관리:사용자입력온도값저장
    const [temperature, setTemperature] = useState("");
    // 이벤트핸들러:입력시마다호출
    const handleChange = (event) => {
        // 사용자입력으로상태업데이트
        setTemperature(event.target.value);
    };
    return (
        <fieldset>
            {/* props를통해전달받은scale로제목표시 */}
            <legend>온도를 입력해 주세요(단위:{scaleNames2[props.scale]}):</legend>
            {/* 제어컴포넌트:input value를 react state와 연결 */}
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    );
}

// r3
// 온도단위를한글로변환
const scaleNaes3 = {
    c: "섭씨",
    f: "화씨",
};
function TemperatureInput(props) {
    // 상태관리:사용자입력한온도값저장
    const [temperature, setTemperature] = useState("");
    // 이벤트핸들러:입력시마다호출
    const handleChange = (event) => {
        // 사용자입력값으로상태업데이트
        setTemperature(event.target.value);
    };
    return (
        <fieldset>
            {/* props통해전달받은scale이용해제목표시 */}
            <legend>온도를 입력해 주세요(단위:{scaleNames3[props.scale]}):</legend>
            {/* 제어컴포넌트:input value를 react state와연결 */}
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    );
}

// r4
// 온도단위를한글로변환
const scaleNames4 = {
    c: "섭씨",
    f: "화씨",
};
function TemperatureInput(props) {
    // 상태관리:사용자입력한온도값저장
    const [temperature, setTemperature] = useStatE("");
    // 이벤트핸들러:입력시호출
    const handleChange = (event) => {
        // 사용자입력값을 상태업데이트
        setTemperature(event.target.value);
    };
    return (
        <fieldset>
            {/* props를통해전달받은scale이용해제목표시 */}
            <legend>온도를 입력해주세요(단위:{scaleNames4[props.scale]}):</legend>
            {/* 재어컴포넌트:input value를 react state와 연결 */}
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    );
}

// r5
// 온도의단위를한글로변환
const scaleNames5 = {
    c: "섭씨",
    f: "화씨",
};
function TemperatureInput(props) {
    // 상태관리:사용자가입력한온도값저장
    const [temperature, setTemperature] = useState("");
    // 이벤트핸들러:입력시마다호출되는함수
    const handleChange = (event) => {
        // 사용자입력값을상태에업데이트
        setTemperature(event.target.value);
    };
    return (
        <fieldset>
            {/* props통해전달받은scale이용해제목표시 */}
            <legend>온도를 입력해주세요.(단위:{scaleNames5[props.name]}):</legend>
            {/* 제어컴포넌트input value를 react의 state와연결 */}
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    );
}
