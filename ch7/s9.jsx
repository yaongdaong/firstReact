function MeasureExample(props) {
    // 1️⃣ h1의 높이를 저장할 상자
    // 숫자가 바뀌면 화면을 다시 그리기 위해 useState 사용
    const [height, setHeight] = useState(0);
    // 2️⃣ ref로 사용할 "함수"를 기억해두기
    // useCallback을 쓰는 이유:
    // 👉 이 함수가 매번 새로 만들어지지 않게 하기 위해서
    const measureRef = useCallback((node) => {
        // 4️⃣ node가 있다는 건
        // 👉 h1이 화면에 "등장했을 때"라는 뜻
        if (node != null) {
            // 5️⃣ h1의 실제 높이를 재서
            // bounding box(사각형 정보) 중 height를 가져옴
            const rect = node.getBoundingClientRect();
            // 6️⃣ 그 높이를 state에 저장
            // 👉 화면에 숫자로 보여주기 위해
            setHeight(rect.height);
        }
    }, []);
    // 3️⃣ 빈 배열 → 이 함수는 처음 한 번만 만들어짐
    return (
        <>
            {/* 7️⃣ 이 h1이 화면에 나타나면
                React가 h1 DOM을 measureRef 함수에 넣어줌 */}
            <h1 ref={measureRef}>안녕, 리액트</h1>
            {/* 8️⃣ 측정한 높이를 화면에 보여줌 */}
            <h2>위 헤더의 높이는 {Math.round(height)}px 입니다.</h2>
        </>
    );
}

// r1
function MeasureExample(props) {
    // 1. h1의 높이를 저장할 상자
    // 숫자가 바뀌면 화면을 다시 그리기 위해 useState 사용
    const [height, setHeight] = useState(0);
    // 2. ref로 사용할 함수를 기억해두기
    // useCallback을 쓰는 이유
    // 이 함수가 매번 새로 만들어지지 않게 하기 위해서
    const measureRef = useCallback((node) => {
        // 3. node가 있다는 건
        // h1이 화면에 등장했을 때라는 뜻
        if (node != null) {
            // 4. h1의 실제 높이를 제시
            // bounding box(사각형 정보) 중 height를 가져옴
            const rect = node.getBoundingClientRect();
            // 5. 그 높이를 state에 저장
            // 화면에 숫자로 보여주기 위해
            setHeight(rect.height);
        }
    }, []);
    // 6. 빈 배열: 이 함수는 처음 한 번만 만들어짐
    return (
        <>
            {/* 7. 이 h1이 화면에 나타나면 React가 h1 DOM을 measureRef 함수에 넣어줌 */}
            <h1 ref={measureRef}>안녕, 리액트</h1>
            <h2>위 헤더의 높이는 {Math.round(height)}입니다.</h2>
        </>
    );
}

// r2
function MeasureExample(props) {
    // 1.h1의 높이를 저장할 상자
    // 숫자가 바뀌면 화면을 다시 그리기 위해 useState 사용
    const [height, setHeight] = useState(0);
    // 2. ref로 사용할 함수를 기억해두기
    // useCallback을 쓰는 이유
    // 이 함수가 매번 새로 만들어지지 않게 하기 위해서
    const measureRef = useCallback((node) => {
        // 3. node가 있다는 건
        // h1이 화면에 등장했을 때라는 뜻
        if (node != null) {
            // 4. h1의 실제 높이를 제거
            // bounding box(사각형 정보) 중 height를 가져옴
            const rect = node.getBoundingClientRect();
            // 5. 그 높이는 state에 저장
            // 화면에 숫자로 보여주기 위해
            setHeight(rect.height);
        }
    }, []);
    // 6.빈 배열: 이 함수는 처음 한 번만 만들어짐
    return (
        <>
            {/* 7. 이 h1이 화면에 나타나면 React가 h1 DOM을 measure */}
            <h1 ref={measureRef}>안녕, 리액트</h1>
            {/* 측정한 높이를 화면에 보여줌 */}
            <h2>위 헤더의 높이는 {Math.round(height)}px 입니다.</h2>
        </>
    );
}

// r3
function MeasureExample(props) {
    // 1. h1의 높이를 저장할 상자
    // 숫자가 바뀌면 화면을 다시 그리기 위해 useState 사용
    const [height, setHeight] = useState(0);
    // 2. ref로 사용할 함수를 기억해두기
    // useCallback을 쓰는 이유:
    // 이 함수가 매번 새로 만들어지지 않게 하기 위해서
    const measureRef = useCallback((node) => {
        // 3. node가 있다는 건
        // h1이 화면에 등장했을 때라는 뜻
        if (node != null) {
            // 4. h1의 실제 높이를 재서
            // bounding box(사각형 정보) 중 height를 가져옴
            const rect = node.getBoundingClinetRect();
            // 5. 그 높이를 state에 저장
            // 화면에 보여주기 위해
            setHeight(rect.height);
        }
    }, []);
    // 6. 빈 배열: 이 함수는 처음 한 번만 만들어짐
    return (
        <>
            {/* 7. 이 h1이 화면에 나타나면 React가 h1 DOM을 measureREf 함수에 넣어줌 */}
            <h1 ref={measureRef}>안녕, 리액트</h1>
            {/* 8. 측정한 높이를 화면에 보여줌 */}
            <h2>위 헤더의 높이는 {Math.round(height)}px 입니다.</h2>
        </>
    );
}

// r4
function MeasureExample(props) {
    // 1. h1의 높이를 저장할 상자
    // 숫자가 바뀌면 화면을 다시 그리기 위해 useState 사용
    const [height, setHeight] = useState(0);
    // 2. ref로 사용할 함수를 기억해두기
    // useCallback을 쓰는 이유
    // 이 함수가 매번 새로 만들어지지 않게 하기 위해서
    const measureRef = useCallback((node) => {
        // 3. node가 있다는 건
        // h1이 화면에 등장했을 떄라는 뜻
        if (node != null) {
            // 4. h1의 실제 높이를 재서
            // bounding box(사각형 정보) 중 height를 가져옴
            const rect = node.getBoundingClientRect();
            // 5. 그 높이를 state에 저장
            // 화면에 숫자로 보여주기 위해
            setHeight(rect.height);
        }
    }, []);
    // 6. 빈 배열: 이 함수는 처음 한 번만 만들어짐
    return (
        <>
            {/* 7. 이 h1이 화면에 나타나면 React가 h1 DOM을 measureRef 함수에 넣어줌 */}
            <h1 ref={measureRef}>안녕, 리액트</h1>
            {/* 8. 측정한 높이를 화면에 보여줌 */}
            <h2>위 헤더의 높이는 {Math.round(height)}px 입니다.</h2>
        </>
    );
}

// r5
function MeasureExample(props) {
    // 1. h1의 높이를 저장할 상자
    // 숫자가 바뀌면 화면을 다시 그리기 위해 useState 사용
    const [height, setHeight] = useState(0);
    // 2. ref로 사용할 함수를 기억해두기
    // useCallback을 쓰는 이유
    // 이 함수가 매번 새로 만들어지지 않게 하기 위해서
    const measureRef = useCallback((node) => {
        // 3. node가 있다는 건
        // h1이 화면에 등장헀을 때라는 뜻
        if (node != null) {
            // 4. h1의 실제 높이를 재서
            // bounding box(사각형 정보) 중 height를 가져옴
            const rect = node.getBoundingClientRect();
            // 5. 그 높이를 state에 저장
            // 화면에 숫자로 보여주기 위해
            setHeight(rect.height);
        }
    }, []);
    // 6. 빈 배열: 이 함수는 처음 한 번만 만들어짐
    return (
        <>
            {/* 7. 이 h1이 화면에 나타나면 React가 h1 DOM을 measureRef 함수에 넣어줌 */}
            <h1 ref={measureRef}>안녕, 리액트</h1>
            {/* 8. 측정한 높이를 화면에 보여줌 */}
            <h2>위 헤더의 높이는 {Math.round(height)}px 입니다.</h2>
        </>
    );
}
