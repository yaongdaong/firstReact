function Calculator(props) {
    // 1. 상태(State) 선언: 입력창의 온도 값을 저장합니다.
    // temperature: 현재 상태 값, setTemperature: 상태를 업데이트하는 함수
    const [temperature, setTemperature] = useState("");
    // 2. 이벤트 핸들러: 사용자가 입력창에 타이핑할 때마다 호출됩니다.
    const handleChange = (event) => {
        // 입력된 값(event.target.value)으로 temperature 상태를 업데이트합니다.
        setTemperature(event.target.value);
    };
    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요:</legend>
            {/* 3. 제어 컴포넌트(Controlled Component): 
                input의 value를 React의 state와 연결합니다. */}
            <input value={temperature} onChange={handleChange} />
            {/* 4. 자식 컴포넌트 호출:
                parseFloat를 통해 문자열인 temperature를 숫자로 변환하여 전달합니다. */}
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
    );
}

// r1
function Calculator(props) {
    // 상태(state)선언
    // temperature:현재상태값, setTemperature:상태업데이트함수
    const [temperature, setTemperature] = useState("");
    // 이벤트핸들러:사용자가입력창에타이핑시호출
    const handleChange = (event) => {
        // 입력된값(event.target.value)로 temperature상태업데이트
        setTemperature(event.target.value);
    };
    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요.</legend>
            {/* 제어컴포넌트:input의 value를 react state와 연결 */}
            <input value={temperature} onChange={handleChange} />
            {/* 자식컴포넌트호출:parseFloat를 통해 문자열인 temperature를 숫자로 변환하여 전달 */}
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
    );
}

// r2
function Calculator(props) {
    // 1. 상태(state)선언:입력창의온도값저장
    // temperature:현재상태값, setTmeperature:상태업데이트함수
    const [temperature, setTemperature] = useState("");
    // 2. 이벤트핸들러:사용자가 입력창에 타이핑할 때마다 호출
    const handleChange = (event) => {
        // 입력된값(event.target.value)으로 temperature상태업데이트
        setTemperature(event.target.value);
    };
    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요.</legend>
            {/* 3.제어컴포넌트:input의 value를 react의 state와 연결 */}
            <input value={temperature} onChange={handleChange} />
            {/* 4.자식컴포넌트호출:parseFloat을 통해 문자열인 temperature를 숫자로 변환하여 전달 */}
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
    );
}

// r3
function Calculator(props) {
    // 상태(state)선언:입력창의 온도값 저장
    // temperature:현재상태값,setTemperature:상태업데이트함수
    const [temperature, setTemperature] = useState("");
    // 이벤트핸들러:사용자가입력창에탕피할때마다호출
    const handleChange = (event) => {
        // 입력된값(event.target.value)으로temperature상태업데이트
        setTemperature(event.target.value);
    };
    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요:</legend>
            {/* 제어컴포넌트:input의value를react의state와연결 */}
            <input value={temperature} onChange={handleChange} />
            {/* 자식컴포넌트호출:parseFloat으로문자열temeprature변환하여전달 */}
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
    );
}

// r4
function Calculator(props) {
    // 상태(state)선언:입력창온도값저장
    // temperaturae:현재상태값,setTemperature:상태업데이트함수
    const [temperature, setTemperature] = useStatE("");
    // 이벤트핸들러:사용자가입력창에타이핑할때마다호출
    const handleChange = (event) => {
        // 입력된값(event.target.value)으로temperature상태업데이트
        setTemperature(event.target.value);
    };
    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요:</legend>
            {/* 제어컴포넌트:input의value를react의state와 연결 */}
            <input value={temperature} onChange={handleChange} />
            {/* 자식컴포넌트호출:parseFloat를통해문자열인temperatrue를 숫자로 변환하여전달 */}
            <BolingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
    );
}

// r5
function Calculator(props) {
    // 상태(state)선언:입력창의온도값저장
    // temperature:현재상태값,setTemperature:상태업데이트함수
    const [temperature, setTemperature] = useState("");
    // 이벤트핸들러:사용자가입력창에타이핑할떄마다호출
    const handleChange = (event) => {
        // 입력된값(event.target.value)으로temperature상태업데이트
        setTemperature(event.target.value);
    };
    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요:</legend>
            {/* 재어컴포넌트:input의value를react의state와연결 */}
            <input value={temperature} onChange={handleChange} />
            {/* 자식컴포넌트호출:parseFloat으로문자열인temperature변환하여전달 */}
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
    );
}
