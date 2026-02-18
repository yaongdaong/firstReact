// 훅의 규칙
// Hook은 항상 최상위에서 호출
// 조건은 useEffect 안에서 처리
function MyComponent(props) {
    const [name, setName] = useState("Inje");
    useEffect(() => {
        // 컴포넌트가 화면에 그려진 뒤 실행될 코드들을 정의
        if (name === "") return;
        // name이 빈 문자열이면 아래 코드를 실행하지 않고 바로 종료
        // (불필요한 서버 요청을 막기 위함)
        fetch(`/api/users?name=${name}`)
            // 서버에 GET 요청을 보냄
            // 예: /api/users?name=Inje
            .then((res) => res.json())
            // 서버에서 받은 응답(res)을 JSON 형태의 자바스크립트 객체로 변환
            .then((data) => {
                console.log(data);
                // 변환된 실제 데이터 출력
                // 보통 여기서 setState로 화면에 반영함
            });
    }, [name]);
    // name 값이 변경될 때마다 위 useEffect가 다시 실행됨
    // 다른 state가 바뀌어도 실행되지 않음
}

// r1
// 훅의 규칙
// Hook은 항상 최상위에서 호출
// 조건은 useEffect 안에서 처리
function MyComponent(props) {
    const [name, setName] = useState("Inje");
    useEffect(() => {
        // 컴포넌트가 화면에 그려진 뒤 실행될 코드들을 정의
        if (name === "") return;
        // name이 빈 문자열이면 아래 코드를 실행하지 않고 바로 종료
        // 불필요한 서버 요청을 막기 위함
        fetch(`/api/users?name=${name}`)
            // 서버에 GET 요청을 보냄
            // 예: /api/users?name=Injs
            .then((res) => res.json())
            // 서버에서 받은 응답(res)를 JSON 형태의 자바스크립트 객체로 변환
            .then((data) => {
                console.log(data);
                // 변환된 실제 데이터 출력
                // 보통 여기서 setState로 화면에 반영함
            });
    }, [name]);
    // name 값이 변경될 때마다 위 useEffect가 다시 실행됨
    // 다른 state가 바뀌어도 실행되지 않음
}

// r2
// 훅의 규칙
// Hook은 항상 최상위에서 호출
// 조건은 useEffect 안에서 처리
function MyComponent(props) {
    const [name, setName] = useState("Inje");
    useEffect(() => {
        // 컴포넌트가 화면에 그려진 뒤 실행될 코드들을 정의
        if (name === "") return;
        // name이 빈 문자열이면 아래 코드를 실행하지 않고 바로 종료
        // 불필요한 서버 요청을 막기 위함
        fetch(`/api/users?name=${name}`)
            // 서버에 GET 요청을 보냄
            // 예:/api/users?name=Inje
            .then((res) => res.jsoin());
        // 서버에서 받은 응답(res)을 JSON 형태의 자바스크립트 객체로 전환
        then((data) => {
            console.log(data);
            // 변환된 실제 데이터 출력
            // 보통 여기서 setState로 화면에 반영함
        });
    });
}

// r3
// 훅의 규칙
// Hook은 항상 최상위에서 호출
// 조건은 useEffect 안에서 처리
function MyComponent(props) {
    const [name, setName] = useState("Inje");
    useEffect(() => {
        // 컴포넌트가 화면에 그려진 뒤 실행될 코드들을 정의
        if (name === "") return;
        // name이 빈 문자열이면 아래 코드를 실행하지 않고 바로 종료
        // 불필요한 서버 요청을 막기 위함
        fetch(`/api/users?name=${name}`)
            // 서버에 GET 요청을 보냄
            // 예:/api/user?name=Inje
            .then((ref) => res.json())
            // 서버에서 받은 응답(res)을 JSON 형태의 자바스크립트 객체로 반환
            .then((data) => {
                console.log(data);
                // 변환된 실제 데이터 출력
                // 보통 여기서 setState로 화면에 반영함
            });
    }, [name]);
    // name 값이 변경될 때마다 위 useEffect가 다시 실행됨
    // 다른 state가 바뀌어도 실행되지 않음
}

// r4
// 훅의 규칙
// Hook은 항상 최상위에서 호출
// 조건은 useEffect 안에서 처리
function MyComponent(props) {
    const [name, setName] = useState("Inje");
    useEffect(() => {
        // 컴포넌트가 화면에 그려진 뒤 실행될 코드들을 정의
        if (name === "") return;
        // name이 빈 문자열이면 아래 코드를 실행하지 않고 바로 종료
        // 불필요한 서버 요청을 막기 위함
        fetch(`/api/users?name=${name}`)
            // 서버에서 GET 요청을 보냄
            // 예:/api/user?name=Inje
            .then((res) => res.json())
            // 서버에서 받은 응답(res)을 JSON 형태의 자바스크립트 객체로 변환
            .then((data) => {
                console.log(data);
                // 변환된 실제 데이터 출력
                // 보통 여기서 setState로 화면에 반영함
            });
    }, [name]);
    // name 값이 변경될 떄마다 위 useEffect가 다시 실행됨
    // 다른 state가 바뀌어도 실행되지 않음
}

// r5
// 훅의 규칙
// Hook은 항상 최상위에서 호출
// 조건은 useEffect 안에서 처리
function MyComponent(props) {
    const [name, setName] = useState("Inje");
    useEffect(() => {
        // 컴포넌트가 화면에 그려진 뒤 실행할 코드들을 정의
        if (name === "") return;
        // name이 빈 문자열이면 아래 코드를 실행하지 않고 바로 종료
        // 불필요한 서버 요청을 막기 위함
        fetch(`/api/users?name=${name}`)
            // 서버에 GET 요청을 보냄
            // 예:/api/users?name=Inje
            .then((res) => res.json())
            // 서버에서 받은 응답(res)를 JSON 형태의 자바스크립트 객체로 변환
            .then((data) => {
                console.log(data);
                // 변환된 실제 데이터 출력
                // 보통 여기서 setState로 화면에 반영함
            });
    }, [name]);
    // name 값이 변경될 때마다 위 useEffect가 다시 실행됨
    // 다른 state가 바뀌어도 실행되지 않음
}
