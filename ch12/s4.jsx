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

// r1
// 계산컴포넌트:섭씨,화씨입력을 동시렌더링하는부모컴포넌트
function Calculator(props) {
    return (
        <div>
            {/* 섭씨입력컴포넌트 */}
            <TemperatureInput scale="c" />
            {/* 화씨입력컴포넌트 */}
            <TemperatureInput scale="f" />
        </div>
    );
}

// r2
// 계산컴포넌트:섭씨,화씨입력을동시에렌더링하는부모컴포넌트
function Calculator(props) {
    return (
        <div>
            {/* 섭씨입력컴포넌트 */}
            <TemperatureInput scale="c" />
            {/* 화씨입력컴포넌트 */}
            <TemperatureInput scale="f" />
        </div>
    );
}

// r3
// 계산컴포넌트:섭씨,화씨입력을동시렌더링하는부모컴포넌트
function Calculator(props) {
    return (
        <div>
            {/* 섭씨입력컴포넌트 */}
            <TemperatureInput scale="c"/>
            {/* 화씨입력컴포넌트 */}
            <TemperatureInput scale="f"/>
        </div>
    )
}

// r4
// 계산컴포넌트:섭씨,화씨입력동시렌더링하는부모컴포넌트
function Calculator(props) {
    return (
        <div>
            {/* 섭씨입력컴포넌트 */}
            <TemperatureInput scale="c"/>
            {/* 화씨입력컴포넌트 */}
            <TemperatureInput scale="f"/>
        </div>
    )
}

// r5
// 계산컴포넌트:섭씨,화씨입력동시렌더링하는부모컴포넌트
function Calculator(props) {
    return (
        <div>
            {/* 섭씨입력컴포넌트 */}
            <TemperatureInput scale="c"/>
            {/* 화씨입력컴포넌트 */}
            <TemperatureInput scale="f"/>
        </div>
    )
}