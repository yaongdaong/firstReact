// JSX에서 중괄호 {} 안에는 반드시 자바스크립트 표현식이 들어간다.
// 중괄호를 사용하면 숫자, 변수뿐 아니라 컴포넌트 자체도 props로 전달할 수 있다.
function App(props) {
    return (
        // Layout 컴포넌트에 여러 props를 전달
        <Layout
            witdh={2500} // 숫자 값 props (레이아웃 가로 크기)
            height={1440} // 숫자 값 props (레이아웃 세로 크기)
            header={
                // header라는 props에 컴포넌트를 전달
                <Header title="소플의 블로그입니다." />
                // Header 컴포넌트에 title props 전달
            }
            footer={
                // footer라는 props에 컴포넌트를 전달
                <Footer /> // Footer 컴포넌트 자체를 props로 전달
            }
        />
    );
}

// r1
// JSX에서 중괄호 {} 안에는 반드시 자바스크립트 표현식이 들어간다.
// 중괄호를 사용하면 숫자, 변수뿐 아니라 컴포넌트 자체도 props로 잔달할 수 있다.
function App(props) {
    return (
        // Layout 컴포넌트에 여러 props를 전달
        // header라는 props에 컴포넌트 전달, Header 컴포넌트에 title props 전달
        // footer라는 props에 컴포넌트 전달, Footer 컴포넌트 자체를 props로 전달
        <Layout width={2500} height={1440} header={<Header title="소플의 블로그 입니다." />} footer={<Footer />} />
    );
}

// r2
// JSX에서 중괄호 {} 안에는 반드시 자바스크립트 표현식이 들어간다.
// 중괄호를 사용하면 숫자, 변수뿐 아니라 컴포넌트 자체도 props로 전달할 수 있다.
function App(props) {
    return (
        // Layout 컴포넌트에 여러 props를 전달
        // header라는 props에 컴포넌트 전달, Header 컴포넌트에 title props 전달
        // footer라는 props에 컴포넌트 전달, Footer 컴포넌트 자체를 props로 전달
        <Layout width={2500} height={1440} header={<Header title="소플의 블로그입니다." />} footer={<Footer />} />
    );
}

// r3
// JSX에서 중괄호 {} 안에는 반드시 자바스크립트 표현식이 들어간다.
// 중괄호를 사용하면 숫자, 변수뿐 아니라 컴포넌트 자체도 props로 전달할 수 있다.
function App(props) {
    return (
        // Layout 컴포넌트에 여러 props를 전달
        // header라는 props에 컴포넌트 전달, Header 컴포넌트에 title props 전달
        // footer라는 props에 컴포넌트 전달, Footer 컴포넌트 자체를 props로 전달
        <Layout width={2500} height={1440} header={<Header title="소플의 블로그입니다." />} footer={<Footer />} />
    );
}

// r4
// JSX에서 중괄호 {} 안에는 반드시 자바스크립트 표현식이 들어간다.
// 중괄호를 사용하면 숫자, 변수뿐 아니라 컴포넌트 자체도 props로 전달할 수 잇다.
function App(props) {
    return (
        // Layout 컴포넌트에 여러 props를 전달
        // header라는 props에 컴포넌트 전달, Header 컴포넌트에 title props 전달
        // footer라는 props에 컴포넌트 전달, Footer 컴포넌트 자체를 props로 전달
        <Layout width={2500} height={1440} header={<Header title="소플의 블로그입니다." />} footer={<Footer />} />
    );
}

// r5
// JSX에서 중괄호 {} 안에는 반드시 자바스크립트 표현식이 들어간다.
// 중괄호를 사용하면 숫자, 변수뿐 아니라 컴포넌트 자체도 props로 전달할 수 있다.
function App(props) {
  return (
    // Layout 컴포넌트에 여러 props를 전달
    // header라는 props에 컴포넌트 전달, Header 컴포넌트에 title props 전달
    // footer라는 props에 컴포넌트 전달, Footer 컴포넌트 자체를 props로 전달
    <Layout width={2500} height={1440} header={<Header title="소플의 블로그입니다."/>} footer={<Footer/>}/>
  )
}