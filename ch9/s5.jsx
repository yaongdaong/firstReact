// UserStatus라는 함수형 컴포넌트를 정의하며, props 객체를 매개변수로 받습니다.
function UserStatus(props) {
    // UI 구조를 반환합니다.
    return (
        // 전체를 감싸는 최상위 div 태그입니다.
        <div>
            {/* 중괄호 { }를 사용하여 자바스크립트 표현식을 삽입합니다.
               삼항 연산자 (조건 ? 참일_때 : 거짓일_때) 구조입니다.
            */}
            이 사용자는 현재 <b>{props.isLoggedIn ? "로그인" : "로그인하지 않은"}</b>상태입니다.
            {/* props.isLoggedIn이 true이면 "로그인"을 출력하고,
               false(또는 Falsy값)이면 "로그인하지 않은"을 출력합니다.
            */}
        </div>
    );
}

// r1
// 함수형 컴포넌트 정의
function UserStatus(props) {
  // UI 구조 반환
    return (
      // 전체를 감싸는 최상위 div 태그
        <div>
          {/* 중괄호를 사용해 자바스크립트 표현식 삽입 */}
            이 사용자는 현재 <b>{props.isLoggedIn ? "로그인" : "로그인하지 않은"}</b> 상태입니다.
        </div>
    );
}

// r2
// 함수형 컴포넌트 정의
function UserStatus(props) {
  // UI 구조 반환
    return (
      // 전체를 감싸는 최상위 div 태그
        <div>
          {/* 중괄호를 사용해 자바스크립트 표현식 삽입 */}
            이 사용자는 현재 <b>{props.isLoggedIn ? "로그인" : "로그인하지않은"}</b> 상태입니다.
        </div>
    );
}

// r3
// 함수형 컴포넌트 정의
function UserStatus(props) {
    // UI 구조 반환
    return (
        // 전체를 감싸는 최상위 div 태그
        <div>
            {/* 중괄호를 사용해 자바스크립트 표현식 삽입 */}
            이 사용자는 현재 <b>{props.isLoggedIn ? "로그인" : "로그인하지 않은"}</b> 상태입니다.
        </div>
    );
}

// r4
// 함수형 컴포넌트 정의
function UserStatus(props) {
    // UI 구조 반환
    return (
        // 전체를 감싸는 최상위 div 태그
        <div>
            {/* 중괄호를 사용해 자바스크립트 표현식 삽입 */}
            이 사용자는 현재 <b>{props.isLoggedIn ? "로그인" : "로그인하지 않은"}</b> 상태입니다.
        </div>
    );
}

// r5
// 함수형 컴포넌트 정의
function UserStatus(props) {
    // UI 구조 반환
    return (
        // 전체를 감싸는 최상위 div 태그
        <div>
            {/* 중괄호를 사용해 자바스크립트 표현식 삽입 */}
            이 사용자는 현재 <b>{props.isLoggedIn ? "로그인" : "로그인하지 않은"}</b> 상태입니다.
        </div>
    );
}
