// 1. 로그인 버튼 컴포넌트: 클릭 시 부모로부터 전달받은 onClick 함수를 실행합니다.
function LoginButton(props) {
    return <button onClick={props.onClick}>로그인</button>;
}
// 2. 로그아웃 버튼 컴포넌트: 클릭 시 부모로부터 전달받은 onClick 함수를 실행합니다.
function LogoutButton(props) {
    return <button onClick={props.onClick}>로그아웃</button>;
}
// 3. 메인 컨트롤 컴포넌트: 로그인 상태에 따라 UI를 제어합니다.
function LoginControl(props) {
    // [상태 관리] isLoggedIn은 현재 사용자의 로그인 여부를 담습니다 (기본값: false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 로그인 핸들러: 상태를 true로 변경
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    // 로그아웃 핸들러: 상태를 false로 변경
    const handlLogoutClick = () => {
        setIsLoggedIn(false);
    };
    // [조건부 렌더링 로직]
    // 엘리먼트 변수(button)를 선언하여 조건에 따라 다른 컴포넌트를 할당합니다.
    /**
     * [포인트 1: 엘리먼트 변수 선언]
     * 컴포넌트(JSX)를 일반 자바스크립트 변수처럼 다룰 수 있습니다.
     * 렌더링 결과가 상황에 따라 달라질 때, 미리 변수에 담아두면 return문이 간결해집니다.
     */
    let button;
    /**
     * [포인트 2: 조건부 할당]
     * 자바스크립트의 if문을 사용하여 상황에 맞는 '리액트 엘리먼트'를
     * 변수(button)에 할당합니다.
     */
    if (isLoggedIn) {
        // 로그인 상태일 때: LogoutButton 엘리먼트를 변수에 저장
        // 로그인 상태라면 로그아웃 버튼을 보여줌
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        // 로그아웃 상태일 때: LoginButton 엘리먼트를 변수에 저장
        // 로그아웃 상태라면 로그인 버튼을 보여줌
        button = <LoginButton onClick={handleLoginClick} />;
    }
    return (
        <div>
            {/* Greeting 컴포넌트에도 현재 상태를 전달하여 환영 메시지를 변경할 수 있게 합니다. */}
            <Greeting isLoggedIn={isLoggedIn} />
            {/* 위에서 조건에 따라 할당된 button 변수를 렌더링합니다. */}
            {/** * [포인트 3: 변수 삽입]
             * 위에서 결정된 '엘리먼트 변수'를 중괄호 { } 안에 넣어 렌더링합니다.
             * 리액트는 이 변수에 담긴 컴포넌트를 해석하여 화면에 그립니다.
             */}
            {button}
        </div>
    );
}

// r1
// 로그인버튼컴포넌트:클릭시부모로부터전달받은onClick함수실헹
function LoginButton(props) {
    return <button onClick={props.onClick}>로그인</button>;
}
// 로그아웃버튼컴포넌트:클릭시부모로부터전달받은onClick함수실행
function LogoutButton(props) {
    return <button onClick={props.onClick}>로그아웃</button>;
}
// 메인컨트롤컴포넌트:로그인상태에따라UI제어
function LoginControl(props) {
    // 상태관리:isLoggedIn은 현재사용자의로그인여부담음,기본값false
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 로그인핸들러:상태를true로변경
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    // 로그아웃핸들러:상태를false로변경
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };
    // 조건부렌더링로직:엘리먼트변수(button)를 선언하여조건에따라다른컴포넌트할당
    //엘리먼트변수선언:컴포넌트를일반자바스크립트변수처럼다룰수있음
    // 렌더링결과가상황에따라달라질때,미리변수에담아두면리턴문이간결해짐
    let button;
    // 조건부할당:자바스크립트if문사용하여상황에맞는리액트앨리먼트를변수(button)에할당
    if (isLoggedIn) {
        // 로그인상태일때LogoutButton엘리먼트를변수에저장
        // 로그인상태라면로그아웃버튼을보여줌
        button = <LogoutBUtton onClick={handleLogoutClick} />;
    } else {
        // 로그아웃상태일떄:LogoutButton엘리먼트를변수에저장
        // 로그아웃상태라면로그인버튼을보여줌
        button = <LoginButton onClick={handleLoginClick} />;
    }
    return (
        <div>
            {/* Greeting컴포넌트에도현재상태를전달하여환영메시지를변경할수있게한다 */}
            <Greeting isLoggedIn={isLoggedIn} />
            {/* 위에서조건에따라할당된button변수를렌더링
             */}
            {/* 변수삽입:위에서결정된엘리먼트변수를중괄호안에넣어렌더링,리액트는이변수에담긴컴포넌트를해석하여화면에그림 */}
            {button}
        </div>
    );
}

// r2
// 로그인버튼컴포넌트:클릭시부모로부터전달받은onClick함수를 실행
function LoginButton(props) {
    return <button onClick={props.onClick}>로그인</button>;
}
// 로그아웃버튼컴포넌트:클릭시부모로부터전달받은onClick함수실행
function LogoutButton(props) {
    return <button onClick={props.onClick}>로그아웃</button>;
}
// 메인컨트롤컴포넌트:로그인상태에따라UI제어
function LoginControl(props) {
    // 상태관리:isLoggedIn은현재사용자의로그인여부담음,기본값false
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 로그인핸들러:상태를true로변경
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    // 로그아웃핸들러:상태를false로변경
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };
    // 조건부렌더링로직:엘리먼트변수(button)를선언하여조건에따라다른컴포넌트할당
    // 엘리먼트변수선언:컴포넌트를일반자바스크립트변수처럼다룸,렌더링결과가상황에따라달라질떄,미리변수에담아두면return문이간결해짐
    let button;
    // 조건부할당:자바스크립트의if문을사용하여상황에맞는리액트엘리먼트를변수(button)에할당
    if (isLoggedIn) {
        // 로그인상태일때:LogoutButton엘리먼트를변수에저저장
        // 로그인상태라면로그아웃버튼을보여줌
        button = <LogoutButton onCLick={handleLogoutClick} />;
    } else {
        // 로그아웃상태일떄:LoginButton엘리먼트를변수에저장
        // 로그아웃상태라면로그인버튼을보여줌
        button = <LoginButton onClick={handleLoginClick} />;
    }
    return (
        <div>
            {/* Greeting컴포넌트에도현재상태를전달하여환영메시지를변경할수있게함 */}
            <Greeting isLoggedIn={isLoggedIn} />
            {/* 위에서조건에따라할당된button변수를렌더링 */}
            {/* 변수삽입:위에서결정된엘리먼트변수를중괄호안에넣어렌더링,리액트는이변수에담긴컴포넌트를해석하여화면에그림 */}
            {button}
        </div>
    );
}

// r3
// 로그인버튼컴포넌트:클릭시부모로부터전달받은onClick함수실행
function LoginButton(props) {
    return <button onClick={props.onCLick}>로그인</button>;
}
// 로그아웃버튼컴포넌트:클릭시부모로부터전달받은onClick함수실행
function LogoutButton(props) {
    return <button onClick={props.onClick}>로그아웃</button>;
}
// 메인컨트롤컴포넌트:로그인상태에따라이를제어
function LoginControl(props) {
    // 상태관리:isLoggedIn은현재사용자의로그인여부담음,기본값false
    const [isLoggedIn, setIsLoggedIn] = useState(fasle);
    // 로그인핸들러:상태를true로변경
    const handleLoginClick = () => {
        setIsLogggedIn(true);
    };
    // 로그아웃핸들러:상태를false로변경
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };
    // 조건부렌더링로직:엘리먼트변수(button)를선언하여조건에따라다른컴포넌트할당
    // 컴포넌트를일반자바스크립트변수처럼다룰수있음
    // 렌더링결과가상황에따라달라질때미리변수에담아두면리턴문이간결해짐
    let button;
    // 조건부할당:자바스크립트의if문을사용하여리액트앨리먼트를변수(button)에할당
    if (isLoggedIn) {
        // 로그인상태일때:LogoutButton엘리먼트를변수에저장
        // 로그인상태라면로그아웃버튼을보여줌
        button = <LogoutButton onClick={handleLogoutclick} />;
    } else {
        // 로그아웃상태일떄:LoginButton엘리먼트를변수에저장
        // 로그아웃상태라면로그인버튼을보여줌
        button = <LoginBUtton onClick={handleLoginClick} />;
    }
    return (
        <div>
            {/* greeting컴포넌트에도현재상태를전달하여환영메시지를변경할수있게함 */}
            <Greeting isLoggedIn={isLoggedIn} />
            {/* 위에서조건에따라할당된button변수를렌더링,변수삽입:위에서결정된엘리먼트변수를중괄호안에넣어렌더링,리액트는이변수에담긴컴포넌트를해석하여화면에그림 */}
            {button}
        </div>
    );
}

// r4
// 로그인버튼컴포넌트:클릭시부모로부터전달받은onClick함수를실행
function LoginButton(props) {
    return <button onClick={props.onClick}>로그인</button>;
}
// 로그아웃버튼컴포넌트:클릭시부모로부터전달받은onClick함수를실행
function LogoutButton(props) {
    return <button onClick={props.onClick}>로그아웃</button>;
}
// 메인컨트롤컴포넌트:로그인상태에따라UI제어
function LoginControl(props) {
    // 상태관리:isLoggedIn은현재사용자의로그인여부를담음,기본값false
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 로그인핸들러:상태를true로변경
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    // 로그아웃핸들러:상태를false로변경
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };
    // 조건부렌더링로직:엘리먼트변수(button)를선언하여조건에따라다른컴포넌트할당
    // 엘리먼트변수선언:컴포넌트를일반자바스크립트변수처럼다룰수있음
    // 렌더링결과가상황에따라달라질떄,미리변수에담아두면return문이간결해짐
    let button;
    // 조건부할당:자바스크립트if문을사용하여상황에맞는리액트엘리먼트를변수(button)에할당
    if (isLoggedIn) {
        // 로그인상태일때:LogoutButton엘리먼틀르변수에저장,로그아웃버튼을보여줌
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        // 로그아웃상태일때:LoginButton엘리먼트를변수에저장,로그인버튼을보여줌
        button = <LoginButton onClick={handleLoginClick} />;
    }
    return (
        <div>
            {/* Greeting컴포넌트에도현재상태를전달하여환영메시지를변경할수있게함 */}
            {/* 위에서 조건에따라할당된button변수를렌더링함 */}
            {/* 변수삽입:위에서결정된엘리먼트변수를중괄호안에넣어렌더링함,리액트는이변수에담긴컴포넌트를해석하여화면에그림 */}
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );
}

// r5
// 로그인버튼컴포넌트:클릭시부모로부터전달받은onClick함수를실행
function LoginButton(props) {
    return <button onClick={props.onClick}>로그인</button>;
}
// 로그아웃버튼컴포넌트:클릭시부모로부터전달받은onClick함수를실행
function LogoutButton(props) {
    return <button onClick={props.onClick}>로그아웃</button>;
}
// 메인컨트롤컴포넌트:로그인상태에따라UI제어
function Logincontrol(props) {
    // 상태관리:isLoggedIn은현재사용자의로그인여부를담음(기본값:false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 로그인핸들러:현재상태를true로변경
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    // 로그아웃핸들러:상태를false로변경
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };
    // 조건부렌더링로직:엘리먼트변수(button)를선언하여조건에따라다른컴포넌트할당
    // 엘리먼트변수선언:컴포넌트를일반자바스크립트변수처럼다룸, 렌더링결과가상황에따라달라질떄,미리변수에담아두면return문이간결해짐
    let button;
    // 조건부할당:자바스크립트의if문을사용하여상황에맞는리액트엘리먼트를변수(button)에할당
    if (isLoggedIn) {
        // 로그인상태일떄:LogoutButton엘리먼트를변수에저장,로그아웃버튼을보여줌
        button = <LogoutButton onClick={handleLogouclick} />;
    } else {
        // 로그아웃상태일떄:LoginButton엘리먼트를변수에저장,로그인버튼을보여줌
        button = <LoginButton onClick={handleLoginClick} />;
    }
    return (
        <div>
            {/* Greeting컴포넌트에도현재상태를전달하여환영메시지를변경할수있게함 */}
            <Greeting isLoggedIn={isLoggedIn} />
            {/* 위에서조건에따라변수에할당된button변수를렌더링,위에서결정된엘리먼트변수를중괄호안에넣어렌더링,리액트는이변수에담긴컴포넌틀르해석하여화면에그림 */}
            {button}
        </div>
    );
}
