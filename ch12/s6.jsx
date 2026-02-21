/**
 * 3. 변환 실행 및 예외 처리 함수 (tryConvert)
 * @param {string} temperature - 입력받은 온도 값
 * @param {function} convert - 사용할 변환 함수 (toCelsius 또는 toFahrenheit)
 * @returns {string} - 변환 및 반올림된 결과값 (숫자가 아니면 빈 문자열)
 */
function tryConvert(temperature, convert) {
    // 입력값을 실수(float)로 변환
    const input = parseFloat(temperature);
    // 숫자가 아닌 값이 들어오면 빈 문자열 반환 (예외 처리)
    if (Number.isNaN(input)) {
        return "";
    }
    // 인자로 받은 변환 함수(convert)를 실행
    const output = convert(input);
    // 소수점 세 번째 자리까지 반올림 (정밀도 조절)
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
/**
 * 4. 사용 예시
 */
console.log(tryConvert("32", toCelsius)); // "0" (화씨 32도는 섭씨 0도)
console.log(tryConvert("100", toFahrenheit)); // "212" (섭씨 100도는 화씨 212도)
console.log(tryConvert("abc", toCelsius)); // "" (잘못된 입력)

// r1
// 변환실행및예외처리
function tryConvert(temperature, convert) {
    // 입력값을실수로변환
    const input = parseFloat(temperature);
    // 숫자가아닌값이들어오면빈문자열반환(예외처리)
    if (Number.isNaN(input)) {
        return "";
    }
    // 인자로받은변환함수실행
    const output = convert(input);
    // 소수점세번째자리까지반올림
    // 천을곱하고 정수로 반올림 한 뒤 천을나눈다
    // JS의 Math.round는 정수 반올림만 가능하므로, 1000을 곱/나누기 해서 소수점 3자리 구현
    const rounded = Math.round(output * 1000) / 1000;
    // 문자열로변환
    return rounded.toString();
}

// r2
// 변환실행및예외처리
function tryConvert(temperature, convert) {
    // 입력값실수로변환
    const input = parseFloat(temperature);
    // 숫자아닌값들어오면문자열반환(예외처ㅣㄹ)
    if (Number.isNaN(input)) {
        return "";
    }
    // 인자로받은변환함수실행
    const output = convert(input);
    // *1000하고 반올림해서 정수만든뒤 나누기1000
    const rounded = Math.round(output * 1000) / 1000;
    // 문자열변환
    return rounded.toString();
}

// r3
// 변환실행및예외처리함수
function tryConvert(temperature, convert) {
    // 입력값을 실수로 변환
    const input = parseFloat(temperature);
    // 숫자아닌값이들어오면빈문자열반환(예외처리)
    if (Number.isNaN(input)) {
        return "";
    }
    // 인자로받은변환함수실행
    const output = convert(input);
    // 소수점세번째자리까지반올림
    const rounded = Math.round(output * 1000) / 1000;
    // 문자열로변환
    return rounded.toString();
}

// r4
// 변환실행및예외처리함수
function tryConvert(temperature, convert) {
    // 입력값을실수로변환
    const input = parseFloat(temperature);
    // 숫자가아닌값이들어오면빈문자열반환(예외처리)
    if (Number.isNaN(input)) {
        return "";
    }
    // 인자로반은변환함수실행
    const output = convert(input);
    // 소수점세번째자리까지반올림
    const rounded = Math.round(output * 1000) / 1000;
    // 문자열변환
    return rounded.toString();
}

// r5
// 변환실행및예외처리함수
function tryConvert(temperature, convert) {
    // 입력값을실수로변환
    const input = parseFloat(temperature);
    // 숫자가아닌값이들어오면빈문자열반환(예외처리)
    if (Number.isNaN(input)) {
        return "";
    }
    // 인자로받은변환함수실행
    const output = convert(input);
    // 소수점세번째자리까지반올림
    const rounded = Math.round(output * 1000) / 1000;
    // 문자열로변환
    return rounded.toString();
}
