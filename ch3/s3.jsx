// JSX를 사용하지 않고 자바스크립트 코드만을 사용, JSX 사용 부분이 React.createElement() 함수로 대체
class Hello extends React.component {
    // React.Component를 상속받아 Hello라는 클래스형 컴포넌트를 정의
    render() {
        // 컴포넌트가 화면에 렌더링할 내용을 정의하는 메서드
        return React.createElement(
            "div", // 생성할 HTML태그
            null, // props 객체(여기서는 전달할 속성이 없음)
            `Hello ${this.props.toWhat}` // div 안에 들어갈 내용, props로 받은 값 사용
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// id가 "root"인 DOM 요소를 찾아 React18의 루트 객체 생성
root.render(
    React.createElement(
        Hello, // 렌더링할 React 컴포넌트
        { toWhat: "World" }, // Hello 컴포넌트에 전달할 props
        null // 자식(children) 요소(여기서는 없음)
    )
);
/* r1 */
// JSX룰 사용하지 않고 자바스크립트 코드만을 사용, JSX 사용 부분이 React.createElement() 함수로 대체
class Hello extends React.Component {
    // React.Component를 상속받아 Hello라는 클래스형 컴포넌트를 정의
    render() {
        // 컴포넌트가 화면에 렌더링할 내용을 정의하는 메서드
        return React.createElement(
            "div", // 생성할 HTML태그
            null, // props 객체(여기서는 전달할 속성이 없음)
            `Hello ${this.props.toWhat}` // div 안에 들어갈 내용, props로 받은 값 사용
        );
    }
}
const root1 = ReactDOM.createRoot(document.getElementById("root"));
// id가 "root"인 DOM 요소를 찾아 React18의 루트 객체 생성
root1.render(
    React.createElemnt(
        Hello, // 렌더링할 React 컴포넌트
        { toWhat: "World" }, // Hello 컴포넌트에 전달할 props
        null // 자식(children) 요소(여기서는 없음)
    )
);
/* r2 */
// JSX를 사용하지 않고 자바스크립트 코드만을 사용, JSX 사용 부분이 React.createElement() 함수로 대체
class Hello extends React.Component {
    // React.Component를 상속받아 Hello라는 클래스형 컴포넌트를 정의
    render() {
        // 컴포넌트가 화면에 렌더링할 내용을 정의하는 메서드
        return React.createElement(
            "div", // 생성할 HTML 태그
            null, // props 객체(여기서는 전달할 속성이 없음)
            `Hello ${this.props.toWhat} ` // div 안에 들어갈 내용, props로 받은 값 사용
        );
    }
}
const root2 = ReactDOM.createRoot(document.getElementById("root"));
// id가 "root"인 DOM 요소를 찾아 React 18의 루트 객체 생성
root2.render(
    React.createElement(
        Hello, // 렌더링할 React 컴포넌트
        { toWhat: "World" }, // Hello 컴포넌트에 전달할 props
        null // 자식(children) 요소(여기서는 없음)
    )
);
/* r3 */
// JSX를 사용하지 않고 자바스크립트 코드만을 사용, JSX 사용 부분이 React.createElement() 함수로 대체
class Hello extends React.Component {
    // React.Component를 상속받아 Hello라는 클래스형 컴포넌트를 정의
    render() {
        // 컴포넌트가 화면에 렌더링할 내용을 정의하는 메서드
        return React.createElement(
            "div", // 생성할 HTML 태그
            null, // props 객체(여기서는 전달할 속성이 없음)
            `Hello ${this.props.toWhat}` // div 안에 들어갈 내용, props로 받은 값 사용
        );
    }
}
const root3 = ReactDOM.createRoot(document.getElementById("root"));
// id가 "root"인 DOM 요소를 찾아 React 18의 루트 객체 생성
root3.render(
    React.createElement(
        Hello, // 렌더링할 React 컴포넌트
        { toWhat: "World" }, // Hello 컴포넌트에 전달할 props
        null // 자식(children) 요소(여기서는 없음)
    )
);
/* r4 */
// JSX를 사용하지 않고 자바스트립트 코드만을 사용, JSX 사용 부분이 React.createElement() 함수로 대체
class Hello extends React.Component {
    // React.Component를 상속받아 Hello라는 클래스형 컴포넌트를 정의
    render() {
        // 컴포넌트가 화면에 렌더링할 내용을 정의하는 메서드
        return React.createElement(
            "div", // 생성할 HTML 태그
            null, // props 객체(여기서는 전달할 속성이 없음)
            `Hello ${this.props.toWhat}` // div 안에 들어갈 내용, props로 받은 값 사용
        );
    }
}
const root4 = ReactDOM.createRoot(document.getElementById("root"));
root4.render(
    React.createElement(
        Hello, // 렌더링할 React 컴포넌트
        { toWhat: "World" }, // Hello 컴포넌트에 전달할 props
        null // 자식(children) 요소(여기서는 없음)
    )
);
/* r5 */
// JSX를 사용하지 않고 자바스크립트 코드만을 사용, JSX 사용 부분이 React.createElement() 함수로 대체
class Hello extends React.Component {
    // React.Component를 상속받아 Hello라는 클래스형 컴포넌트를 정의
    render() {
        // 컴포넌트가 화면에 렌더링할 내용을 정의하는 메서드
        return React.createElement(
            "div", // 생성할 HTML 태그
            null, // props 객체(여기서는 전달할 속성이 없음)
            `Hello ${this.props.toWhat}` // div 안에 들어갈 내용, props로 받은 값 사용
        );
    }
}
const root5 = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    React.createElement(
        Hello, // 렌더링할 React 컴포넌트
        { toWhat: "World" }, // Hello 컴포넌트에 전달할 props
        null // 자식(children) 요소(여기서는 없음)
    )
);
