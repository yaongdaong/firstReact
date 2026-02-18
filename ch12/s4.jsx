/**
 * Calculator 컴포넌트: 섭씨(Celsius)와 화씨(Fahrenheit) 입력을
 * 동시에 렌더링하는 부모 컴포넌트입니다.
 */
function Calculator(props) {
    return (
        <div>
            {/* 섭씨 입력을 위한 컴포넌트 */}
            <TemperatureInput scale="c" />

            {/* 화씨 입력을 위한 컴포넌트 */}
            <TemperatureInput scale="f" />
        </div>
    );
}
