// createElement() 함수가 동작하는 과정,버튼 UI를 담당하는 Button 컴포넌트 정의
function Button(props) {
    // JSX를 반환 (React.createElement 결과물)
    return (
        // button 엘리먼트 생성, className은 props.color 값을 이용해 동적으로 생성됨
        <button className={`bg-${props.color}`}>
            <b>{props.children}</b>
        </button>
    );
}

// r1
// createElement() 함수가 동작하는 과정, 버튼 UI를 담당하는 Button 컴포넌트 정의
function Button(props) {
    // JSX를 반환(React.createElement 결과물)
    return (
        // button 엘리먼트 생성, className은 props.color값을 이용해 동적으로 생성됨
        <button className={`bg-${props.color}`}>
            <b>{props.children}</b>
        </button>
    );
}

// r2
// createElement() 함수가 동작하는 과정, 버튼 UI를 담당하는 Button 컴포넌트 정의
function Button(props) {
    // JSX를 반환(React.createElement 결과물)
    return (
        // button 엘리먼트 생성, className은 props.color값을 이용해 동적으로 생성됨
        <button className={`bg-${props.color}`}>
            <b>{props.children}</b>
        </button>
    );
}

// r3
// createElement() 함수가 동작하는 과정, 버튼 UI를 담당하는 Button 컴포넌트 정의
function Button(props) {
    // JSX를 반환(React.createElement 결과물)
    return (
        // button 엘리먼트 생성, className은 props.color값을 이용해 동적으로 생성됨
        <button className={`bg-${props.color}`}>
            <b>{props.children}</b>
        </button>
    );
}

// r4
// createElement() 함수가 동작하는 과정, 버튼 UI를 담당하는 Buttton 컴포넌트 정의
function Button(props) {
    // JSX를 반환(React.createElement 결과물)
    return (
        // button 엘리먼트 생성, className은 props.color값을 이용해 동적으로 생성됨
        <button className={`bg-${props.color}`}>
            <b>{props.children}</b>
        </button>
    );
}

// r5
// createElement() 함수가 동작하는 과정, 버튼 UI를 담당하는 Button 컴포넌트 정의
function Button(props) {
    // JSX를 반환(React.createElement 결과물)
    return (
        // button 엘리먼트 생성, className은 props.color값을 이용해 동적으로 생성
        <button className={`bg-${props.color}`}>
            <b>{props.children}</b>
        </button>
    );
}

// 확인 다이얼로그 UI를 담당하는 ConfirmDialog 컴포넌트 정의
function ConfirmDialog(props) {
    // JSX를 반환
    return (
        // 여러 요소를 감싸기 위한 부모 div
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            {/* Button 컴포넌트를 사용, color="green" → Button 컴포넌트의 props.color로 전달됨 ,"확인" → Button, 컴포넌트의 props.children으로 전달됨 */}
            <Button color="green">확인</Button>
        </div>
    );
}

// r1
// 확인 다이얼로그 UI를 담당하는 ConfirmDialog 컴포넌트 정의
function ConfirmDialog(props) {
    // JSX를 반환
    return (
        // 여러 요소를 감싸기 위한 부모 div
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            {/* Button 컴포넌트를 사용, green은 Button컴포넌트의 props.color로 "확인"은 props.children으로 전달  */}
            <Button color="green">확인</Button>
        </div>
    );
}

// r2
// 확인 다이얼로그 UI를 담당하는 ConfirmDialog 컴포넌트 정의
function ConfirmDialog(props) {
    // JSX를 반환
    return (
        // 여러 요소를 감싸기 위한 부모 div
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            {/* Button 컴포넌트 사용, green은 Button컴포넌트의 props.color로 "확인"은 props.children으로 전달 */}
            <Button color="green">확인</Button>
        </div>
    );
}

// r3
// 확인 다이얼로그 UI를 담당하는 ConfirmDialog 컴포넌트 정의
function ConfirmDialog(props) {
    // JSX 반환
    return (
        // 여러 요소를 감싸기 위한 부모 div
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            {/* Button컴포넌트사용, green은 Button컴포넌트의 props.color, "확인"은 props.children으로 전달 */}
            <Button color="green">확인</Button>
        </div>
    );
}

// r4
// 확인 다이얼로그 UI를 담당하는 ConfirmDialog 컴포넌트 정의
function ConfirmDialog(props) {
    // JSX 반환
    return (
        // 여러 요소를 감싸기 위한 부모 div
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            {/* Button컴포넌트 사용, green은 Button컴포넌트의 props.color, "확인"은 props.childrne으로 전달 */}
            <Button color="green">확인</Button>
        </div>
    );
}

// r5
// 확인 다이얼로그 UI를 담당하는 ConfirmDialog 컴포넌트 정의
function ConfirmDialog(props) {
    // JSX 반환
    return (
        // 여러 요소를 감싸기 위한 부모 div
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            {/* Button컴포넌트 사용, green은 Button컴포넌트의 props.color, "확인"은 props.children으로 전달 */}
            <Button color="green">확인</Button>
        </div>
    );
}
