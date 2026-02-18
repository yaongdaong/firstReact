class Toggle extends React.Component {
    // 1️⃣ 컴포넌트가 처음 만들어질 때 실행되는 곳
    constructor(props) {
        super(props);
        // 부모(React.Component)의 기능을 쓰기 위해 꼭 필요해요
        // 2️⃣ 이 컴포넌트가 기억하고 있을 값(상태)
        // 지금은 스위치가 켜진 상태(true)
        this.state = { isToggleOn: true };
        // 3️⃣ 버튼을 눌렀을 때 this를 잃어버리지 않게 연결해 주는 작업
        // (this가 Toggle을 가리키게 해 줌)
        this.handleClick = this.handleClick.bind(this);
    }
    // 4️⃣ 버튼을 누르면 실행될 함수
    handleClick() {
        // 5️⃣ 이전 상태를 보고 값을 반대로 바꿔요
        // 켜져 있으면 → 끄고
        // 꺼져 있으면 → 켜요
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }
    // 6️⃣ 화면에 실제로 보여줄 내용
    render() {
        return (
            // 7️⃣ 버튼을 누르면 handleClick 함수 실행
            <button onClick={this.handleClick}>
                {/* 8️⃣ 상태에 따라 글자가 바뀜 */}
                {this.state.isToggleOn ? "켜짐" : "꺼짐"}
            </button>
        );
    }
}

// r1
class Toggle extends React.Component {
    // 1. 컴포넌트가 처음 만들어질 때 실행되는 곳
    constructor(props) {
        super(props);
        // 부모(React.Component)의 기능을 쓰기 위해 필요
        // 2. 이 컴포넌트가 기억하고 있을 값(상태)
        // 지금은 스위치가 켜진 상태(true)
        this.state = { isToggleOn: true };
        // 3. 버튼을 눌렀을 때 this를 잃어버리지 않게 연결
        // this가 toggle을 가리키게 해 줌
        this.handClick = this.handleClick.bind(this);
    }
    // 4. 버튼을 누르면 실행될 함수
    handleClick() {
        // 5. 이전 상태를 보고 값을 반대로 바꿈(켜짐-꺼짐)
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }
    // 6. 화면에 실제로 보여줄 내용
    render() {
        // 7. 버튼을 누르면 handleClick 함수 실행
        return (
            <button onClick={this.handleClick}>
                {/* 8. 상태에 따라 글자가 바뀜 */}
                {this.state.isToggleOn ? "켜짐" : "꺼짐"}
            </button>
        );
    }
}

// r2
class Toggle extends React.Component {
    // 컴포넌트가 처음 만들어질 때 실행되는 곳
    constructor(props) {
        // 부모(React.Component)의 기능을 쓰기 위해 필요
        super(props);
        // 이 컴포넌트가 기억하고 있을 값(상태)
        this.state = { isToggleOn: true };
        // 버튼을 눌렀을 때 this를 잃어버리지 않게 연결
        // this가 toggle을 가리켜줌
        this.handClick = this.handleClick.bind(this);
    }
    // 버튼을 누르면 실행할 함수
    handleClick() {
        // 이전 상태와 반대로 만듦(켜짐-꺼짐)
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }
    // 화면에 실제로 보여줄 내용
    render() {
        // 버튼을 누르면 handleClick함수 실행, 상태따라 글자변경
        return <button onClick={this.handleClick}>{this.state.isToggleOn ? "켜짐" : "꺼짐"}</button>;
    }
}

// r3
class Toggle extends React.Component {
    // 컴포넌트가 처음 만들어질 때 실행되는 곳
    constructor(props) {
        // 부모(React.Component)의 기능 쓰기 위해 필요
        super(props);
        // 이 컴포넌트가 기억하고 있을 값(스위치온)
        this.state = { isToggleOn: true };
        // 버튼을 눌렀을 때 this를 잃어버리지 않게 연결
        // this가 toggle을 가리킴
        this.handleClick = this.handleClick.bind(this);
    }
    // 버튼을 누르면 실행될 함수
    handleClick() {
        // 이전 상태를 보고 값 반대로 변경
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }
    // 화면에 실제로 보여줄 내용
    render() {
        // 버튼을 누르면 handleClick 함수 실행, 상태따라글자바뀜
        return <button onClick={this.handleClick}>{this.state.isToggleOn ? "켜짐" : "꺼짐"}</button>;
    }
}

// r4
class Toggle extends React.Component {
    // 컴포넌트가 처음 만들어질 때 실행되는 곳
    constructor(props) {
        // 부모(React.Component)의 기능을 쓰기 위해 필요
        super(props);
        // 이 컴포넌트가 기억하고 있을 값(상태)
        this.state = { isToggleOn: true };
        // 버튼을 눌렀을 때 this를 잃어버리지 않게 연결
        // this가 toggle을 가리켜줌
        this.handleClick = this.handleClick.bind(this);
    }
    // 버튼을 누르면 실행될 함수
    handleClick() {
        // 이전 상태를 보고 값을 반대로 바꿈
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }
    // 화면에 실제로 보여줄 내용
    render() {
        // 버튼을 누르면 handleClick 함수 실행, 상태따라 글자바뀜
        return <button onClick={this.handleClick}>{this.state.isToggleOn ? "켜짐" : "꺼짐"}</button>;
    }
}

// r5
class Toggle extends React.Component {
    // 컴포넌트가 처음 만들어질 때 실행되는 곳
    constructor(props) {
        // 부모(React.Component)의 기능을 쓰기 위해 필요
        super(props);
        // 컴포넌트가 기억하고 있을 값(스위치온)
        this.state = { isToggleOn: true };
        // 버튼을 눌렀을 때 this를 잃어버리지 않게 연결
        // this가 toggle을 가리켜줌
        this.handleClick = this.handleClick.bind(this);
    }
    // 버튼을 누르면 실행될 함수
    handleClick() {
        // 이전 상태를 보고 값 반대로 변경
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }
    // 화면에 실제로 보여줄 내용
    render() {
        // 버튼을 누르면 handleClick 함수 실행, 상태따라 글자변경
        return <button onClick={this.handleClick}>{this.state.isToggleOn ? "켜짐" : "꺼짐"}</button>;
    }
}
