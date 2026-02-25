/**
 * [액자 컴포넌트] FancyBorder
 * 이 컴포넌트는 특정한 내용을 직접 만들기보다,
 * 다른 컴포넌트를 감싸서 '예쁜 테두리'를 입혀주는 역할을 해요.
 */
function FancyBorder(props) {
    return (
        /* 1. className 설정: 
              - "FancyBorder": 기본 디자인 클래스
              - "FancyBorder-" + props.color: 부모가 정해준 색상(예: blue, red)을 뒤에 붙여요.
        */
        /* 결과적으로 이름표는 두 개가 한꺼번에 붙게 됩니다:
<div class="FancyBorder FancyBorder-blue">

이렇게 하면 CSS에서 각각의 역할을 나눌 수 있어요.

.FancyBorder: "모든 액자의 테두리 두께는 5px로 해!" (공통 디자인)

.FancyBorder-blue: "그중에서 파란색 이름표가 붙은 건 테두리를 파란색으로 해!" (개별 디자인)

.FancyBorder-red: "빨간색 이름표가 붙은 건 테두리를 빨간색으로 해!" (개별 디자인) */
        <div className={"FancyBorder FancyBorder-" + props.color} style={{border:'1px solid'+props.color}}>
            {/* 스타일지정을 해야 테두리인지 뭔지 알수있다 예제에서 생략됨 */}
            {/* 2. {props.children}: 마법의 구멍! 
                  - <FancyBorder>...</FancyBorder> 사이에 넣은 모든 내용(글자, 그림, 다른 컴포넌트)이 
                    바로 이 자리에 쏙 들어와요.
            */}
            {props.children}
        </div>
    );
}

// r1
// 액자컴포넌트
function FancyBorder(props) {
    // className을 붙여 기본, 개별 디자인지정
    // props.children으로 <FancyBorder>사이의 내용집어넣기
    return <div className={"FancyBorder FancyBorder-" + props.color}>{props.children}</div>;
}

// 액자 컴포넌트: 외부에서 넣은 내용을 예쁜 테두리로 감싸줍니다.
function FancyBorder(props) {
    // 1. "FancyBorder"라는 기본 이름표에 부모가 정해준 색상 이름표(예: -blue)를 합쳐서 디자인을 결정해요.
    // 2. {props.children}: <FancyBorder>여기에 들어가는 내용</FancyBorder>이 이 자리에 쏙 들어옵니다.
    return (
        <div className={"FancyBorder FancyBorder-" + props.color}>
            {props.children}
        </div>
    );
}

// r2
// 액자컴포넌트:외부에서넣은내용테두리감싸기
function FancyBorder(props) {
    // FancyBorder라는 기본이름표에부모가정해준색상이름표합쳐서디자인결정
    // props.children:FancyBorder안에 내용이 들어옴
    return <div className={"FancyBorder FancyBorder-" + props.color}>{props.children}</div>;
}

// r3
// 액자컴포넌트:외부에서넣은내용테두리로감싸기
function FancyBorder(props) {
    // FancyBorder라는기본이름표에부모가정한색상이름표합쳐서디자인결정
    // props.children:fancborder안에들어가는내용
    return <div className={"FancyBorder FancyBorder-" + props.color}>{props.children}</div>;
}

// r4
// 액자컴포넌트:외부에서넣은내용테두리로감싸기
function FancyBorder(props) {
    // FancyBorder라는기본이름표에부모가정해준색상이름표합쳐서디자인결정
    // prop.children:FancyBorder자리에내용이들어감
    return <div className={"FancyBorder FancyBorder-" + props.color}>{props.children}</div>;
}

// r5
// 액자컴포넌트:외부에서넣은내용을테두리로감싸기
function FancyBorder(props) {
    // FancyBorder라는기본이름표에부모가정해준색상이름표합쳐서디자인결정
    // props.children:fancyborder자리에들어감
    return <div className={"FancyBorder FancyBorder-" + props.color}>{props.children}</div>;
}
