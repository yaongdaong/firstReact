// * WelcomeDialog 컴포넌트
//  * 목적: 사용자에게 환영 메시지를 보여주는 UI 컴포넌트
//  * 특징: 'FancyBorder'라는 공통 레이아웃 컴포넌트를 재사용함 (합성)
function WelcomeDialog(props) {
    return (
        // 1. FancyBorder 컴포넌트로 감싸기
        // - 'color'라는 props를 전달하여 테두리 색상을 결정함
        // - 이 컴포넌트 내부에 작성된 태그들(h1, p)은
        // FancyBorder의 'props.children'으로 전달됨
        <FancyBorder color="blue">
            {/* 2. 대화 상자의 제목 */}
            <h1 className="Dialog-title">어서오세요</h1>
            {/* 3. 대화 상자의 본문 메시지 */}
            <p className="Dialog-message">우리 사이트에 방문하신 것을 환영합니다!</p>
        </FancyBorder>
    );
}

// r1
function WelcomeDialog(props) {
    return (
        // fancyborder컴포넌트로감싸서합성, color로 테두리색상결정(모양틀같은거다,속재료에상관없이항상똑같은모양으로찍어낼수있다)
        <FancyBorder color="blue">
            <h1 className="Dialog-title">어서오세요</h1>
            <p className="Dialog-message">우리 사이트에 방문하신 것을 환영합니다!</p>
        </FancyBorder>
    );
}

// r2
// FancyBorder라는 '모양틀'을 써서 어떤 내용물이 들어와도 똑같은 테두리 모양을 찍어낼 수 있다
function WelcomeDialog(props) {
    return (
        // 1. 모양틀(FancyBorder)을 가져와서 파란색(color="blue") 설정을 입힘
        <FancyBorder color="blue">
            {/* 2. 틀 안에 집어넣을 알맹이(children)들 */}
            <h1 className="Dialog-title">어서오세요</h1>
            <p className="Dialog-message">우리 사이트에 방문하신 것을 환영합니다!</p>
        </FancyBorder>
    );
}

// r3
// FancyBorder라는 모양틀을 써서 어떤 내용물이 들어와도 똑같은 모양을 찍어낼 수 있다.
function WelcomeDialog(props) {
    return (
        // 모양틀(FancyBorder)을 가져와서 색깔(blue)입힘
        <FancyBorder color="blue">
            {/* 틀안에넣을알맹이들(children) */}
            <h1 className="Dialog-title">어서오세요</h1>
            <p className="Dialog-message">우리 사이트에 방문하신 것을 환영합니다!</p>
        </FancyBorder>
    );
}

// r4
// FancyBorder라는 모양틀을 써어 어떤 내용물이 들어와도 똑같은 모양을 찍어낼 수 있다.
function WelcomeDialog(props) {
    return (
        // 모양틀(FancyBorder)가져와서 색깔(blue)입힘
        <FancyBorder color="blue">
            {/* 틀 안에 집어넣을 알맹이들(children) */}
            <h1 className="Dialog-title">어서오세요.</h1>
            <p className="Dialog-message">우리 사이트에 방문하신 것을 환영합니다.</p>
        </FancyBorder>
    );
}

// r5
// FancyBorder라는 모양틀을 써서 어떤 내용물이 들어와도 똑같은 모양을 찍어낼 수 있다
function WelcomeDialog(props) {
    return (
        // FancyBorder모양틀을 가져와서 blue색을 입힘
        <FancyBorder color="blue">
            {/* 틀안에들어갈알맹이들(children) */}
            <h1 className="Dialog-title">어서오세요</h1>
            <p className="Dialog-message">우리 사이트에 방문하신 것을 환영합니다!</p>
        </FancyBorder>
    );
}
