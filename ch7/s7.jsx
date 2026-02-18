// useCallback을 사용해 함수를 메모이제이션한다 (함수를 반환함)
const memoizedCallback = useCallback(
    () => {
        // 이 함수는 렌더링 중에 생성된다
        // 실제 실행은 누군가 이 함수를 호출할 때 실행된다
        doSomething(의존성변수1, 의존성변수2);
    },
    // 이 값들이 바뀔 때만 새로운 함수가 다시 생성된다
    [의존성변수1, 의존성변수2]
);

// r1
// useCallback을 사용해 함수를 메모이제이션한다(함수를 반환함)
const memoizedCallback1 = usecallback(
    () => {
        // 이 함수는 렌더링 중에 생성, 실제 실행은 함수 호출될 때
        doSomething(의존성변수1, 의존성변수2);
    }, // 이 값들이 바뀔 때만 새로운 함수가 다시 생성된다
    [의존성변수1, 의존성변수2]
);

// r2
// useCallback을 사용해 함수를 메모이제이션한다(함수를 반환함)
const memoizedCallback2 = useCallback(
    () => {
        // 이 함수는 렌더링 중에 생성, 실제 실행은 함수 호출될 때
        doSomething(의존성변수1, 의존성변수2);
    }, // 이 값들이 바뀔 때만 새로운 함수가 다시 생성된다
    [의존성변수1, 의존성변수2]
);

// r3
// useCallback을 사용해 함수를 메모이제이션한다(함수를 반환함)
const memoizedCallback3 = useCallback(
    () => {
        // 이 함수는 렌더링 중에 생성, 실제 실행은 함수 호출될 때
        doSomething(의존성변수1, 의존성변수2);
    }, // 이 값들이 바뀔 때만 새로운 함수가 다시 생성된다
    [의존성변수1, 의존성변수2]
);

// r4
// useCallback을 사용해 함수를 메모이제이션한다(함수를 반환함)
const memoizedCallback4 = useCallback(
    () => {
        // 이 함수는 렌더링 중에 생성, 실제 실행은 함수 호출될 떄
        doSomething(의존성변수1, 의존성변수2);
    }, // 이 값들이 바뀔 때만 새로운 함수가 다시 생성된다
    [의존성변수1, 의존성변수2]
);

// r5
// useCallback을 사용해 함수를 메모이제이션한다(함수를 반환함)
const memoizedCallback5 = useCallback(
    () => {
        // 이 함수는 렌더링 중에 생성, 실제 실행은 함수 호출될 떄
        domSomething(의존성변수1, 의존성변수2);
    }, // 이 값들이 바뀔 때만 새로운 함수가 다시 생성된다
    [의존성변수1, 의존성변수2]
);
