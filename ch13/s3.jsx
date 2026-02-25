// SplitPane 컴포넌트 (모양틀)
// 특징: 화면을 왼쪽과 오른쪽으로 나누어 배치하는 '2분할 레이아웃' 틀
function SplitPane(props) {
    return (
        <div className="SplitPane" style={{ display: "flex" }}>
            {/* 왼쪽 구멍에 배달된 내용물을 끼워 넣음 */}
            <div className="SplitPane-left" style={{ flex: 1 }}>
                {props.left}
            </div>

            {/* 오른쪽 구멍에 배달된 내용물을 끼워 넣음 */}
            <div className="SplitPane-right" style={{ flex: 1 }}>
                {props.right}
            </div>
        </div>
    );
}
// App 컴포넌트 (사용하는 곳)
// SplitPane이라는 틀에 실제 내용물(Contacts, Chat)을 조립함
function App(props) {
    return (
        // 'left'와 'right'라는 이름표를 붙여서 각각의 부품을 전달함
        <SplitPane
            left={<Contacts />} // 왼쪽 칸에 들어갈 컴포넌트
            right={<Chat />} // 오른쪽 칸에 들어갈 컴포넌트
        />
    );
}

// r1
// 1. 화면을 왼쪽, 오른쪽 영역으로 '쪼개서' 배치하는 모양틀(Layout) 컴포넌트
function SplitPane(props) {
    return (
        <div className="SplitPane">
            {/* 왼쪽 영역에 props로 전달받은 컴포넌트를 끼워넣음 */}
            <div className="SplitPane-left">{props.left}</div>
            
            {/* 오른쪽 영역에 props로 전달받은 컴포넌트를 끼워넣음 */}
            <div className="SplitPane-right">{props.right}</div>
        </div>
    );
}

// 2. SplitPane이라는 틀을 실제로 사용하면서, 
//    왼쪽(left)과 오른쪽(right) 구멍에 각각 '연락처'와 '채팅' 부품을 끼워넣음
function App(props) {
    return <SplitPane left={<Contacts />} right={<Chat />} />;
}

// r2
// 화면2분할컴포넌트
function SplitPane(props) {
    return (
        <div className="SplitPane">
            {/* 양쪽에각자전달받은컴포넌트끼워넣기 */}
            <div className="SplitPane-left">{props.left}</div>
            <div className="SplitPane-right">{props.right}</div>
        </div>
    );
}
// 실제로splitpane틀사용해서왼쪽엔contacts,오른쪽에chat부분끼워넣기
function App(props) {
    return <SplitPane left={<Contacts />} right={<Chat />} />;
}

// r3
// 화면2분할컴포넌트틀
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">{props.left}</div>
            <div className="SplitPane-right">{props.right}</div>
        </div>
    );
}
function App(props) {
    return <SplitPane left={<Contacts />} right={<Chat />} />;
}

// r4
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">{props.left}</div>
            <div className="SplitPane-right">{props.right}</div>
        </div>
    );
}
function App(props) {
    return <SplitPane left={<Contacts />} right={<Chat />} />;
}

// r5
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">{props.left}</div>
            <div className="SplitPane-right">{props.right}</div>
        </div>
    );
}
function App(props) {
    return <SplitPane left={<Contacts />} right={<Chat />} />;
}
