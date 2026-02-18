// 컴포넌트 합성(Composition): 여러 개의 컴포넌트를 조합해서 하나의 컴포넌트를 만든다
// 이름을 props로 받아 인사말을 출력하는 컴포넌트
function Welcome(props) {
    // 전달받은 props.name 값을 화면에 표시
    return <h1>Hello, {props.name}</h1>;
}
// 여러 개의 Welcome 컴포넌트를 포함하는 부모 컴포넌트
function App(props) {
    return (
        // 반드시 하나의 부모 요소로 감싸서 반환해야 함
        <div>
            {/* Welcome 컴포넌트에 각각 다른 name 값을 전달 */}
            <Welcome name="Mike" />
            <Welcome name="Steve" /> <Welcome name="Jane" />
        </div>
    );
}
// HTML에서 id가 "root"인 요소를 가져와 React 루트 생성 (React 18)
const root = ReactDOM.createRoot(document.getElementById("root"));
// App 컴포넌트를 최상위 컴포넌트로 렌더링
root.render(<App />);

// r1
// 컴포넌트 합성(Composition): 여러 개의 컴포넌트를 조합해서 하나의 컴포넌트를 만든다.
// 이름을 props로 받아 인사말을 출력하는 컴포넌트
function Welcome(props) {
    // 전달받은 props.name 값을 화면에 표시
    return <h1>Hello, {props.name}</h1>;
}
// 여러 개의 Welcome 컴포넌트를 포함하는 부모 컴포넌트
function App(props) {
    return (
        // 반드시 하나의 부모 요소로 감싸서 반환해야 함
        <div>
            {/* Welcome 컴포넌트에 각각 다른 name 값을 전달 */}
            <Welcome name="Mike" /><Welcome name="Steve" /> <Welcome name="Jane" />
        </div>
    );
}
// HTML에서 id가 "root"인 요소를 가져와 React 루트 생성
const root1 = ReactDOM.createRoot(document.getElementById("root"));
// App 컴포넌트를 최상위 컴포넌트로 렌더링
root1.render(<App />);

// r2
// 컴포넌트 합성(Composition): 여러 개의 컴포넌트를 조합해서 하나의 컴포넌트를 만든다.
// 이름을 props로 받아 인사말을 출력하는 컴포넌트
function Welcome(props) {
    // 전달받은 props.name 값을 화면에 표시
    return <h1>Hello, {props.name}</h1>;
}
// 여러 개의 Welcome 컴포넌트를 포함하는 부모 컴포넌트
function App(props) {
    return (
        // 반드시 하나의 부모 요소를 감싸서 반환해야 함
        <div>
            {/* Welcome 컴포넌트에 각각 다른 name 값을 전달 */}
            <Welcome name="Mike" /><Welcome name="Steve" /> <Welcome name="Jane" />
        </div>
    );
}
// HTML에서 id가 "root"인 요소를 가져와 React 루트 생성
const root2 = ReactDOM.createRoot(document.getElementById("root"));
// App 컴포넌트를 최상위 컴포넌트로 렌더링
root2.render(<App />);

// r3
// 컴포넌트 합성(Composition): 여러 개의 컴포넌트를 조합해서 하나의 컴포넌트를 만든다.
// 이름을 props로 받아 인사말을 출력하는 컴포넌트
function Welcome(props) {
    // 전달받은 props.name 값을 화면에 표시
    return <h1>Hello, {props.name}</h1>;
}
// 여러 개의 Welcome 컴포넌트를 포함하는 부모 컴포넌트
function App(props) {
    return (
        // 반드시 하나의 부모 요소를 감싸서 반환해야 함
        <div>
            {/* Welcome 컴포넌트에 각각 다른 name 값을 전달 */}
            <Welcome name="Mike" /><Welcome name="Steve" /> <Welcome name="Jane" />
        </div>
    );
}
// HTML에서 id가 "root"인 요소를 가져와 React 루트 생성
const root3 = ReactDOM.createRoot(document.getElementById("root"));
// App 컴포넌트를 최상위 컴포넌트로 렌더링
root3.render(<App />);

// r4
// 컴포넌트 합성(Composition): 여러 개의 컴포넌트를 조합해서 하나의 컴포넌트를 만든다.
// 이름을 props로 받아 인사말을 출력하는 컴포넌트
function Welcome(props) {
    // 전달받은 props.name 값을 화면에 표시
    return <h1>Hello, {props.name}</h1>;
}
// 여러 개의 Welcome 컴포넌트를 포함하는 부모 컴포넌트
function App(props) {
    return (
        // 반드시 하나의 부모 요소를 감싸서 반환해야 함
        <div>
            {/* Welcome 컴포넌트에 각각 다른 name 값을 전달 */}
            <Welcome name="Mike"/><Welcome name="Steve"/><Welcome name="Jane"/>
        </div>
    );
}
// HTML에서 id가 "root"인 요소를 가져와 React 루트 생성
const root4 = ReactDOM.createRoot(document.getElementById("root"));
// App 컴포넌트를 최상위 컴포넌트로 렌더링
root4.render(<App/>);

// r5
// 컴포넌트 합성(Composition): 여러 개의 컴포넌트를 조합해서 하나의 컴포넌트를 만든다.
// 이름을 props로 받아 인사말을 출력하느 ㄴ컴포넌트
function Welcome(props) {
    // 전달받은 props.name 값을 화면에 표시
    return <h1>Hello, {props.name}</h1>;
}
// 여러 개의 Welcome 컴포넌트를 포함하는 부모 컴포넌트
function App(props) {
    return (
        // 반드시 하나의 부모 요소를 감싸서 반환해야 함
        <div>
            {/* Welcome 컴포넌트에 각각 다른 name 값을 전달 */}
            <Welcome name="Mike"/><Welcome name="Steve"/><Welcome name="Jane"/>
        </div>
    );
}
// HTML에서 id가 "root"인 요소를 가져와 React 루트 생성
const root5 = ReactDOM.createRoot(document.getElementById("root"));
// App 컴포넌트를 최상위 컴포넌트로 렌더링
root5.render(<App/>);