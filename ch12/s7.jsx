// [1단계: 출발!] 사용자가 섭씨 input창에 '10'을 타이핑합니다.
// 자식 컴포넌트(TemperatureInput)에서 "입력됐어요!"라고 신호를 보냅니다.

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    // [2단계: 도착!] 자식이 보낸 신호를 이 '핸들러' 함수가 딱 잡습니다.
    const handleCelsiusChange = (temperature) => {
        // [3단계: 기억하기] 칠판에 '10'이라고 적습니다. (상태 업데이트)
        setTemperature(temperature);
        // [4단계: 이름표 붙이기] "지금 들어온 건 섭씨(c)야!"라고 표시합니다.
        setScale("c");
    };

    /* --- 여기서 잠깐! React가 "값이 바뀌었네?" 하고 함수를 다시 처음부터 읽기 시작해요 (리렌더링) --- */

    // [5단계: 변환하기 - 섭씨]
    // "지금 단위(scale)가 'f'인가요?" -> 아니요! 'c'예요.
    // 그래서 변환 없이 입력한 '10'을 그대로 celsius 변수에 담습니다.
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;

    // [6단계: 변환하기 - 화씨] ⭐중요⭐
    // "지금 단위(scale)가 'c'인가요?" -> 네! 맞아요!
    // 그럼 '10'을 화씨 변환기(toFahrenheit)에 넣고 돌려서 50(화씨)을 만듭니다.
    // 그 결과값(50)을 fahrenheit 변수에 담습니다.
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            {/* [7단계: 화면 보여주기 - 섭씨] 5단계에서 나온 '10'을 다시 전달해서 화면에 그립니다. */}
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />

            {/* [8단계: 화면 보여주기 - 화씨] 6단계에서 계산된 '50'을 전달해서 화씨 창에 보여줍니다! */}
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />

            {/* [9단계: 판단하기] '10'은 100보다 작으니까 "물이 안 끓어요"라고 출력합니다. */}
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

// 섭씨와 화씨를 서로 바꿔주고, 물이 끓는지 알려주는 '대장' 컴포넌트예요.
function Calculator(props) {
    // 1. [상자 만들기] 사용자가 입력한 숫자(온도)를 기억해두는 상자예요.
    const [temperature, setTemperature] = useState("");
    // 2. [단위 기억하기] 지금 쓴 숫자가 '섭씨(c)'인지 '화씨(f)'인지 표시해둬요.
    const [scale, setScale] = useState("c");
    // 3. [섭씨 칸에 숫자를 쓰면?] 실행되는 약속이에요.
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature); // 쓴 숫자를 상자에 넣고
        setScale("c"); // "지금 이건 섭씨야!"라고 표시해요.
    };
    // 4. [화씨 칸에 숫자를 쓰면?] 실행되는 약속이에요.
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature); // 쓴 숫자를 상자에 넣고
        setScale("f"); // "지금 이건 화씨야!"라고 표시해요.
    };
    // 5. [자동 변환기 - 섭씨]
    // 지금 상자에 든 게 '화씨'라면? -> 계산기를 돌려서 '섭씨'로 바꿔서 보여줘요.
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    // 6. [자동 변환기 - 화씨]
    // 지금 상자에 든 게 '섭씨'라면? -> 계산기를 돌려서 '화씨'로 바꿔서 보여줘요.
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
        <div>
            {/* 7. [섭씨 입력창] 계산된 섭씨 값을 보여주고, 숫자를 바꾸면 대장에게 알려줘요. */}
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            {/* 8. [화씨 입력창] 계산된 화씨 값을 보여주고, 숫자를 바꾸면 대장에게 알려줘요. */}
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            {/* 9. [물 끓음 알림판] 섭씨 온도를 보고 "보글보글 물이 끓어요!"라고 말해줘요. */}
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

// r1
// 섭씨/화씨 변환, 물끓임여부보여주는최상위컴포넌트
function Calculator(props) {
    // 입력된 온도값 문자열로 저장
    const [temperature, setTemperature] = useState("");
    // 섭씨/화씨 구분
    const [scale, setScale] = useState("c");
    // celsius입력값바뀔때 실행되는 핸들러
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };
    // fahrenheit입력값바뀔때실행되는핸들러
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature); // 입력값저장
        setScale("f"); // 현재기준단위f
    };
    // 섭씨계산:scale이f이면tryConvert로 입력값c로 변환, 아니면 입력값그대로사용
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    // 화씨계산:scale이c면tryConvert로입력값f로변환,아니면 입력값그대로사용
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
        <div>
            {/* 계산된celsius를prop으로전달 */}
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            {/* 계산된fahrenheit를prop으로전달 */}
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            {/* 최종결과섭씨기준으로물끓임여부판단 */}
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

// r2
// 섭씨/화씨 변환, 물끓임여부보여주는최상위컴포넌트
function Calculator(props) {
    // 입력된 온도 값 (단위 구분 없이 저장)
    const [temperature, setTemperature] = useState("");
    // 현재 입력된 값의 단위 ('c' 또는 'f')
    const [scale, setScale] = useState("c");
    // 섭씨칸에 숫자입력시실행
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature); // 쓴숫자저장
        setScale("c"); // 현재섭씨라고표시
    };
    // 화씨칸에 숫자입력시실행
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature); //쓴숫자저장
        setScale("f"); // 현재화씨라고표시
    };
    // 섭씨로변환:화씨가들어있으면섭씨로변환해줌
    const celsius = scale === "c" ? tryConvert(temperature, toCelsius) : temperature;
    // 섭씨가 들어있으면화씨로변환해줌
    const fahrenheit = scale === "f" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
        <div>
            {/* 섭씨입력창:섭씨값을보여주고숫자를바꾸면 보여줌 */}
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            {/* 화씨입력:계산된화씨값보여주고숫자값부모한테알려줌 */}
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            {/* 물끓는지보여줌 */}
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

// r3
// 섭씨를화씨로바꾸고, 물끓음알림 컴포넌트
function Calculator(props) {
    // 온도저장(초기값빈칸)
    const [temperature, setTemperature] = useState("");
    // 섭씨/화씨 저장(초기값c)
    const [scale, setScale] = useState("c");
    // 섭씨칸에숫자쓰면실행
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature); //입력된숫자저장
        setScale("c"); // 섭씨(c)표시
    };
    // 화씨칸에숫자쓰면실행
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature); //입력된숫자저장
        setScale("f"); // 화씨(f)표시
    };
    // 입력값이화씨면 섭씨로변환,섭씨면온도그대로
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    // 입력값이섭씨면화씨로변환,화씨면온도그대로
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheti) : temperature;
    return (
        <div>
            {/* 섭씨온도화면그리기 */}
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            {/* 화씨온도화면그리기 */}
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            {/* 섭씨온도로물끓음판단 */}
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

// r4
function Calculator(props) {
    // 1. 원천 데이터(Source of Truth) 상태 관리
    // temperature: 사용자가 입력한 값 그대로의 문자열
    const [temperature, setTemperature] = useState("");
    // scale: 현재 입력 중인 단위가 'c'(섭씨)인지 'f'(화씨)인지 구분
    const [scale, setScale] = useState("c");

    // 2. 섭씨 입력창에서 값이 변경되었을 때 실행되는 핸들러
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature); // 입력값 저장
        setScale("c"); // 현재 기준 단위를 섭씨로 설정
    };

    // 3. 화씨 입력창에서 값이 변경되었을 때 실행되는 핸들러
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature); // 입력값 저장
        setScale("f"); // 현재 기준 단위를 화씨로 설정
    };

    // 4. 변환 로직 (동기화의 핵심)
    // 입력된 단위(scale)에 따라 반대편 단위의 값을 계산합니다.
    // 만약 현재 'f'가 기준이면 섭씨(celsius)는 변환 함수를 거치고, 아니면 입력값 그대로 사용합니다.
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;

    // 만약 현재 'c'가 기준이면 화씨(fahrenheit)는 변환 함수를 거치고, 아니면 입력값 그대로 사용합니다.
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            {/* 섭씨 입력 컴포넌트: 계산된 celsius 값을 props로 전달 */}
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />

            {/* 화씨 입력 컴포넌트: 계산된 fahrenheit 값을 props로 전달 */}
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />

            {/* 최종 판단 컴포넌트: 항상 섭씨를 기준으로 물이 끓는지 확인 */}
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

// r5
function Calculator(props) {
    // 사용자입력한온도값
    const [temperature, setTemperature] = useSTate("");
    // 섭씨/화씨인지 단위 구분
    const [scale, setScale] = useState("c");
    // 섭씨입력창값이변경되었을때실행
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };
    // 화씨입력창값이변경되었을때실행
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };
    // 섭씨계산:입력단위가화씨면섭씨온도로변환,아니면입력값그대로사용
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    // 화씨계산:입력단위가섭씨면화씨온도로변환,아니면입력값그대로사용
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
        <div>
            {/* 섭씨입력캐치해서부모컴포넌트에전달후계산된값받아와서화면에그리기 */}
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            {/* 화씨입력캐치해서부모컴포넌트에전달후계산된값받아와서화면에그리기 */}
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}
