// Counter라는 이름의 함수형 컴포넌트를 정의합니다.
function Counter(props) {
    // count 변수에 숫자 0을 할당합니다. (JavaScript에서 0은 Falsy값입니다.)
    const count = 0;
    // 리턴되는 JSX 부분입니다.
    return (
        // 최상위 부모 태그인 <div>입니다.
        <div>
            {/* [주의 구간] 
          1. count가 0이므로 조건식은 '거짓(Falsy)'으로 평가됩니다.
          2. && 연산자는 앞이 거짓이면 그 값(0)을 그대로 결과로 내놓습니다.
          3. React는 false는 무시하지만, 숫자 0은 화면에 '0'이라고 출력합니다.
        */}
            {/* count가 0일 때 JavaScript 입장에서는 Falsy가 맞지만, React의 && 연산 결과로 숫자 0이 반환되어 화면에 보일 수 있다는 점을 꼭 주의해야 합니 */}
            {count && <h1>현재 카운트:{count}</h1>}
        </div>
    );
}
// 자바스크립트는 모든 Falsy 값을 (연산 결과로) 반환하지만, 리액트는 그중 '0'과 '빈 문자열'만 화면에 렌더링한다

// r1
function Counter(props) {
    const count = 0;
    return <div>{count && <h1>현재 카운트:{count}</h1>}</div>;
}
// 자바스크립트는 모든 falsy값을 연산 결과로 반환하지만, 리액트는 그중 0과 빈문자열만 화면에 렌더링한다

// r2
function Counter(props) {
    const count = 0;
    return <div>{count && <h1>현재 카운트:{count}</h1>}</div>;
}
// 자바스크립트는 모든 falsy값을 연산 결과로 반환하지만, 리액트는 그중 0과 빈문자열만 화면에 렌더링한다

// r3
function Counter(props) {
    const count = 0;
    return <div>{count && <h1>현재 카운트:{count}</h1>}</div>;
}
// 자바스크립트는 모든 falsy값을 연산결과로 반환하지만,리액트는 그중 0과 빈문자열만 화면에 렌더링한다

// r4
function Counter(props) {
    const count = 0;
    return <div>{count && <h1>현재 카운트:{count}</h1>}</div>;
}
// 자바스크립트는 모든 falsy값을 연산결과로 반환하지만,리액트는 그중 0과 빈문자열만 화면에 렌더링한다

// r5
function Counter(props) {
    const count = 0;
    return <div>{count && <h1>현재 카운트:{count}</h1>}</div>;
}
// 자바스크립트는 모든 falsy값을 연산 결과로 반환하지만, 리액트는 구중 0과 빈문자열만 화면에 렌더링한다