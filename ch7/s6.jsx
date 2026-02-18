// useMemo:의존성 배열에 있는 값이 바뀔 때만 함수 안의 계산을 다시 실행하고 그렇지 않으면 이전에 계산해 둔 결과를 재사용한다.
const memoizedValue = useMemo(() => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return compueExpensiveValue(의존성변수1, 의존성변수2);
}, [의존성변수1, 의존성변수2]);
// useMemo()로 전달되는 함수는 렌더링이 일어나는 동안 실행된다
// 의존성 배열을 넣지 않을 경우 렌더링이 일어날 때마다 매번 함수가 실행되어 의미가 없다.
const memoizedValue1 = useMemo(() => computeExpensiveValue(a, b));

// r1
// useMemo: 의존성 배열에 있는 값이 바뀔 때만 함수 안의 계산을 다시 실행하고 그렇지 않으면 이전에 계산해 둔 결과를 재사용한다.
const memoizedValue2 = useMeemo(() => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성변수1, 의존성변수2);
}, [의존성변수1, 의존성변수2]);
// useMemo()로 전달되는 함수는 렌더링이 일어나는 동안 실행된다
// 의존성 배열을 넣지 않을 경우 렌더링이 일어날 때마다 매번 함수가 실행되어 의미가 없다.
const memoizedValue3 = useMemo(() => computeExpensiveValue(a, b));

// r2
// useMemo: 의존성 배열에 있는 값이 바뀔 때만 함수 안의 계산을 다시 실행하고 그렇지 않으면 이전에 계산해 둔 결과를 재사용한다.
const memoizedValue4 = useMemo(() => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성변수1, 의존성변수2);
}, [의존성변수1, 의존성변수2]);
// useMemo()로 전달되는 함수는 렌더링이 일어나는 동안 실행된다
// 의존성 배열을 넣지 않을 경우 렌더링이 일어날 때마다 매번 함수가 실행되어 의미가 없다.
const memoizedValue5 = useMemo(() => computeExpensiveValue(a, b));

// r3
// useMemo: 의존성 배열에 있는 값이 바뀔 때만 함수 안의 계산을 다시 실행하고 그렇지 않으면 이전에 계산해 둔 결과를 재사용한다.
const memoizedValue6 = useMemo(() => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성변수1, 의존성변수2);
}, [의존성변수1, 의존성변수2]);
// useMemo()로 전달되는 함수는 렌더링이 일어나는 동안 실행된다
// 의존성 배열을 넣지 않을 경우 렌더링이 일어날 때마다 매번 함수가 실행되어 의미가 없다.
const memoizedValue7 = useMemo(() => computeExpensiveValue(a, b));

// r4
// useMemo: 의존성 배열에 있는 값이 바뀔 때만 함수 안의 계산을 다시 실행하고 그렇지 않으면 이전에 계산해 둔 결과를 재사용한다.
const memoizedValue8 = useMemo(() => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성변수1, 의존성변수2);
}, [의존성변수1, 의존성변수2]);
// useMemo()로 전달되는 함수는 렌더링이 일어나는 동안 실행된다
// 의존성 배열을 넣지 않을 경우 렌더링이 일어날 때마다 매번 함수가 실행되어 의미가 없다
const memoizedValue9 = useMemo(() => computeExpensiveValue(a, b));

// r5
// useMemo: 의존성 배열에 있는 값이 바뀔 때만 함수 안의 계산을 다시 실행하고 그렇지 않으면 이전에 계산해 둔 결과를 재사용한다.
const memoizedValue10 = useMemo(() => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성변수1, 의존성변수2);
}, [의존성변수1, 의존성변수2]);
// useMemo()로 전달되는 함수는 렌더링이 일어나는 동안 실행된다
// 의존성 배열을 넣지 않을 경우 렌더링이 일어날 때마다 매번 함수가 실행되어 의미가 없다
const memoizedValue11 = useMemo(() => computeExpensiveValue(a, b));
