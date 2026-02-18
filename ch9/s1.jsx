// 조건부 렌더링: 로그인 여부에 따라 다른 인사말을 보여주는 예제입니다.
// 로그인한 사용자에게 보여줄 컴포넌트입니다.
function UserGreeting(props) {
    return <h1>다시 오셨군요!</h1>;
}
// 로그인하지 않은 게스트에게 보여줄 컴포넌트입니다.
function GuestGreeting(props) {
    return <h1>회원가입을 해주세요.</h1>;
}
// 부모로부터 로그인 상태(isLoggedIn)를 전달받아 판단하는 메인 컴포넌트입니다.
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn; // 전달받은 props에서 로그인 여부 변수를 추출합니다.
    // 로그인 상태가 true라면 UserGreeting 컴포넌트를 반환하고 함수를 종료합니다.
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    // 위 if문에 걸리지 않았다면(false라면) GuestGreeting 컴포넌트를 반환합니다.
    return <GuestGreeting />;
}

// r1
// 조건부 렌더링: 로그인 여부에 따라 다른 인사말
// 로그인한 사용자에게 보여주는 컴포넌트
function UserGreeting(props) {
    return <h1>다시 오셨군요!</h1>;
}
// 로그인하지 않은 게스트에게 보여줄 컴포넌트
function GuestGreeting(props) {
    return <h1>회원가입을 해주세요.</h1>;
}
// 부모로부터 로그인상태(IsLoggedIn)를 전달받아 판단하는 메인 컴포넌트
function Greeting(props) {
  // 전달받은 props에서 로그인여부 변수 추출
    const isLoggedIn = props.isLoggedIn;
    // 로그인상태가 true라면 UserGreeting컴포넌트 반환 후 함수종료
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    // if문에 걸리지않으면 GuestGreeting 컴포넌트반환
    return <GuestGreeting />;
}

// r2
// 조건부렌더링:로그인여부에따라다른인사말을보여줌
// 로그인한사용자에게보여줄컴포넌트
function UserGreeting(props) {
    return <h1>다시 오셨군요!</h1>;
}
// 로그인하지않은게스트에게보여줄컴포넌트
function GuestGreeting(props) {
    return <h1>회원가입을 해주세요.</h1>;
}
// 부모로부터로그인상태를전달받아판단하는메인컴포넌트
function Greeting(props) {
  // 전달받은props에서로그인여부변수추출
    const isLoggedIn = props.isLoggedIn;
    // 로그인상태가true면UserGreeting컴포넌트반환후함수종료
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    // if문에안걸렸으면GuestGreeting 컴포넌트반환
    return <GuestGreeting />;
}

// r3
// 조건부렌더링:로그인여부에따라다른인산말을보여주는예제
// 로그인한사용자에게보여줄컴포넌트
function UserGreeting(props) {
    return <h1>또 오셨군요!</h1>;
}
// 로그인하지않은게스트에게보여줄컴포넌트
function GuestGreeting(props) {
    return <h1>회원가입을 해주세요.</h1>;
}
// 부모로부터로그인상태를전달받아판단하는메인컴포넌트
function Greeting(props) {
  // 전달받은props에서로그인여부변수추출
  // 로그인상태가true라면USerGreeting컴포넌트반환후함수종료
    const isLoggedIn = props.isLoggedIn;
    // 로그인상태가true라면UserGreeting컴포넌트반환후함수종료
    if (isLoggedIn) {
        return <UserLoggedIn />;
    }
    // if문에걸리지않았다면GuestGreeting컴포넌트반환
    return <GuestLoggedIn />;
}

// r4
// 조건부렌더링:로그인연부에따라다른인사말을보여주는예제
// 로그인한사용자에게보여줄컴포넌트
function UserGreeting(props) {
    return <h1>또 오셨군요!</h1>;
}
// 로그인하지않은게스트에게보여줄컴포넌트
function GuestGreeting(props) {
    return <h1>회원가입을 해주세요.</h1>;
}
// 부모로부터로그인상태를전달받아판단하는메인컴포넌트
function Greeting(props) {
  // 전달받은props에서로그인여부변수추출
    const isLoggedIn = props.isLoggedIn;
    // 로그인상태가true면UsetGreeting컴포넌트반환후함수종료
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    // if문에걸리지않았다면GuestGreeting컴포넌트반환
    return <GuestGreeting />;
}

// r5
// 조건부렌더링:로그인여부에따라다른인사말을보여주는예제
// 로그인한사용자에게보여줄컴포넌트
function UserGreeting(props) {
    return <h1>또 오셨군요!</h1>;
}
// 로그인하지않은게스트에게보여줄컴포넌트
function GuestGreeting(props) {
    return <h1>회원가입을 해주세요.</h1>;
}
// 부모로부터로그인상태를전달받아판단하는메인컴포넌트
function Greeting(props) {
  // 전달받은props에서 로그인여부변수추출
    const isLoggedIn = props.isLoggedIn;
    // 로그인상태가true라면UserGreeting컴포넌트반환후함수종료
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    // if문제걸리지않았다면GuestGreeting컴포넌트반환
    return <GuestLoggedIn />;
}
