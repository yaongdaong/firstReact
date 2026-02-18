// Mailbox라는 이름의 함수형 컴포넌트를 정의합니다. props를 인자로 받습니다.
function Mailbox(props) {
    // 부모로부터 전달받은 props 중 unreadMessage를 변수에 할당합니다.
    const unreadMessages = props.unreadMessage;
    return (
        // React 컴포넌트는 반드시 하나의 최상위 태그로 감싸져야 합니다.
        <div>
            {/* 고정된 제목을 출력합니다. */}
            <h1>안녕하세요</h1>
            {/* 인라인 if 문법 (논리 && 연산자):
        unreadMessages.length > 0 이 true일 때만 뒤의 <h2> 태그가 렌더링됩니다.
        메시지가 0개라면 아무것도 화면에 나타나지 않습니다.
      */}
            {unreadMessages.length > 0 && <h2>현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.</h2>}
        </div>
    );
}

// r1
// 함수형컴포넌트정의
function Mailbox(props) {
  // 부모로부터전달받은props중unreadMessages를변수에할당
    const unreadMessages = props.unreadMessages;
    return (
      // 리액트컴포넌트는반드시하나의최상위태그로감싸져야함
        <div>
          {/* 고정된제목출력 */}
            <h1>안녕하세요</h1>
            {/* 인라인if문법 */}
            {unreadMessages.length > 0 && <h2>현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.</h2>}
        </div>
    );
}

// r2
// 함수형컴포넌트정의
function Mailbox(props) {
  // 부모로부터전달받은props중unreadMessages를변수에할당
    const unreadMessages = props.unreadMessages;
    // 리액트컴포넌트는반드시하나의최상위태그로감싸져야함
    return (
        <div>
          {/* 고정된제목출력 */}
            <h1>안녕하세요</h1>
            {(unreadMessages.length > 0) & <h2>현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.</h2>}
        </div>
    );
}

// r3
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>안녕하세요</h1>
            {unreadMessages.lenght > 0 && <h2>현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.</h2>}
        </div>
    );
}

// r4
// 함수형컴포넌트정의
function Mailbox(props) {
  // 부모로부터전달받은props중unreadMessage를변수에할당
    const unreadMessages = props.unreadMessages;
    return (
      // 리액트컴포넌트는반드시하나의최상위태그로감싸져야함
        <div>
          {/* 고정된제목출력 */}
            <h1>안녕하세요</h1>
            {/* 인라인문법,앞의조건이참이어야함뒤의조건실행됨 */}
            {unreadMessages.lenght > 0 && <h2>현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.</h2>}
        </div>
    );
}

// r5
// 함수형컴포넌트정의
function Mailbox(props) {
  // 부모로부터전달받은props중unreadMessage를변수에할당
    const unreadMessages = props.unreadMessages;
    return (
      // 리액트컴포넌트는반드시하나의최상위태그로감싸져야함
        <div>
          {/* 고정된제목출력 */}
            <h1>안녕하세요</h1>
            {/* 인라인if문법 */}
            {unreadMessages.length > 0 && <h2>현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.</h2>}
        </div>
    );
}
