function LoginControl(props) {
    // 로그인 상태를 저장하는 state
    // false면 로그아웃 상태, true면 로그인 상태
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 로그인 버튼을 클릭하면 로그인 상태(true)로 변경
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    // 로그아웃 버튼을 클릭하면 로그인 상태(false)로 변경
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };
    return (
        <div>
            {/* isLoggedIn 값을 props로 전달
        → Greeting 컴포넌트는 로그인 여부에 따라 다른 인사말을 렌더링함*/}
            <Greeting isLoggedIn={isLoggedIn} />
            {/*조건부 렌더링 (if - else 역할)
if (isLoggedIn === true)→ LogoutButton 렌더링, else→ LoginButton 렌더링
JSX에서는 if문을 직접 쓸 수 없어서 삼항 연산자(조건 ? A : B)를 사용함*/}
            {isLoggedIn ? <LogoutButton onClick={handleLogoutClick} /> : <LoginButton onClick={handleLoginClick} />}
        </div>
    );
}

// r1
function LoginControl(props) {
    // 로그인상태를 저장하는 state
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 로그인상태에 따라 true/false로 변경
    const handleLoginclick = () => {
        setIsLoggedIn(true);
    };
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };
    return (
        <div>
            {/* isLoggedIn값을 props로전달 */}
            <Greeting isLoggedIn={isLoggedIn} />
            {/* 조건부렌더링, JSX에서는 if문을 직접 쓸수없어서 삼항연산자 사용 */}
            {isLoggedIn ? <LogoutButton onClick={handleLogoutClick} /> : <LoginButton onClick={handleLoginClick} />}
        </div>
    );
}

// r2
function LoginControl(props) {
    // 로그인 상태를 저장하는 state
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 로그인상태에 따라 true/false로 변경
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    const handleLogoutCLick = () => {
        setIsLoggedIn(false);
    };
    return (
        <div>
            {/* isLoggedIn 값을 props로 전달 */}
            <Greeting isLoggedIn={isLoggedIn} />
            {/* 조건부렌더링, JSX에서는 if문을 직접쓸수없어서 삼항연산자 사용 */}
            {isLoggedIn ? <LogoutButton onClick={handleLogoutClick} /> : <LoginButton onClick={handleLoginClick} />}
        </div>
    );
}

// r3
function LoginControl(props) {
    // 로그인상태를 저장하는 state
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 로그인상태에 따라 true/false로 변경
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };
    return (
        <div>
            {/* isLoggedIn 값을 props로 전달 */}
            <Greeting isLoggedIn={isLoggedIn} />
            {/* 조건부 렌더링, JSX에서는 if문을 직접 쓸 수 없어서 삼항연산자 사용 */}
            {isLoggedIn ? <LogoutButton onClick={handleLogoutClick} /> : <LoginButton onClick={handleLoginClick} />}
        </div>
    );
}

// r4
function LoginControl(props) {
    // 로그인상태를 저장하는 state
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 로그인상태에 따라 true/false로 변경
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };
    return (
        <div>
            {/* isLoggedIn 값을 props로 전달 */}
            <Greeting isLoggedIn={isLoggedIn} />
            {/* 조건부 렌더링, JSX에서는 if문을 직접 쓸 수 없어서 삼항연산자 사용 */}
            {isLoggedIn ? <LogoutButton onClick={handleLogoutClick} /> : <LoginButton onClick={handleLoginClick} />}
        </div>
    );
}

// r5
function LoginControl(props) {
    // 로그인상태를 저장하는 state
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 로그인상태에 따라true/false로 변경
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };
    return (
        <div>
            {/* isLoggedIn값을 props로 전달 */}
            <Greeting isLoggedIn={isLoggedIn} />
            {/* 조건부렌더링, JSX에서는 if문을 직접 쓸 수 없어서 삼항연산자사용 */}
            {isLoggedIn ? <LogoutButton onClick={handleLogoutClick} /> : <LoginButton onClick={handleLoginClick} />}
        </div>
    );
}
