// 클래스 컴포넌트에서 이벤트 핸들러에 매개변수 전달방법
<>
    {/* 1. arrow function 사용 */}
    <button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>
    {/* 2. Function.prototype.bind 사용 */}
    <button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
</>;

// 함수 컴포넌트에서 이벤트 핸들러에 매개변수 전달방법
function MyButton(props) {
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    };
    return <button onClick={(event) => handleDelete(1, event)}>삭제하기</button>;
}

// 클래스 컴포넌트에서 이벤트 핸들러에 매개변수 전달 방법
<>
    {/* 
      1️⃣ 화살표 함수 사용
      버튼을 클릭하면:
      - event(클릭 정보)를 받아서
      - deleteItem 함수에 id와 event를 직접 넘겨줌
    */}
    <button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>

    {/* 
      2️⃣ bind 사용
      - this를 미리 묶고
      - id를 미리 넣어둠
      - event는 React가 자동으로 마지막에 넣어줌
    */}
    <button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
</>;
function MyButton(props) {
    // 삭제 버튼을 눌렀을 때 실행되는 함수
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    };

    {
        /* 클릭하면:1️⃣ event를 받고 2️⃣ id(1번)랑 같이 handleDelete로 전달*/
    }
    return <button onClick={(event) => handleDelete(1, event)}>삭제하기</button>;
}

// r1
// 이벤트 핸들러에 매개변수 전달하는 방법
// 1. 클래스 컴포넌트
<>
    {/* 화살표 함수:event(클릭 정보)받아서 deleteItem에 id, event 직접 넘김 */}
    <button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>
    {/* bind 사용:this를 미리 묶고 id를 미리 넣어둠, event는 React가 자동으로 마지막에 넣어줌 */}
    <button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
</>;
// 2. 함수 컴포넌트
function MyButton(props) {
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    };
    // 클릭하면 event를 받고 id와 같이 handleDelete로 전달
    return <button onClick={(event) => handleDelete(1, event)}>삭제하기</button>;
}

// r2
// 이벤트 핸들러에 매개변수 전달하는 방법
// 1. 클래스 컴포넌트
<>
    {/* 화살표 함수:event(클릭 정보) 받아서 deleteItem에 id, event직접 넘김 */}
    <button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>
    {/* bind 사용: this를 미리 묶고 id를 미리 넣어둠, event는 React가 자동으로 마지막에 넣어줌 */}
    <button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
</>;
// 2. 함수 컴포넌트
function MyButton(props) {
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    };
    // 클릭하면 event를 받고 id와 같이 handleDelete로 전달
    return <button onClick={(event) => handleDelete(1, event)}>삭제하기</button>;
}

// r3
// 이벤트 핸들러에 매개변수 전달하는 방법
// 1. 클래스 컴포넌트
<>
    {/* 화살표 함수:event(클릭 정보)받아서 deleteItem에 id, event 직접 넘김 */}
    <button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>
    {/* bind사용:this를 미리 묶고 id를 미리 넣어둠, event는 React가 자동으로 마지막에 넣어줌 */}
    <button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
</>;
// 2. 함수 컴포넌트
function MyButton(props) {
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    };
    // 클릭하면 event를 받고 id와 같이 handleDelete로 전달
    return <button onClick={(event) => handleDelete(1, event)}>삭제하기</button>;
}

// r4
// 이벤트 핸들러에 매개변수 전달하는 방법
// 1. 클래스 컴포넌트
<>
    {/* 화살표 함수:event(클릭 정보)받아서 deleteItem에 id, event 직접 넘김 */}
    <button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>
    {/* bind 사용:this를 미리 묶고 id를 미리 넣어둠, event는 React가 자동으로 마지막에 넣어줌 */}
    <button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
</>;
// 2. 함수 컴포넌트
function MyButotn(props) {
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    };
    // 클릭하면 event를 받고 id와 같이 handleDelete로 전달
    return <button onClick={(event) => handleDelete(1, event)}>삭제하기</button>;
}

// r5
// 이벤트 핸들러에 매개변수 전달하는 방법
// 1. 클래스 컴포넌트
<>
{/* 화살표 함수: event(클릭 정보) 받아 deleteItem에 id, event 직접 넘김 */}
<button onClick={(event)=>this.deleteItme(id,event)}>삭제하기</button>
{/* bind 사용: this를 미리 묶고 id를 미리 넣어둠, event는 React가 자동으로 마지막에 넣어줌 */}
<button onClick={this.deleteItem.bind(this,id)}>삭제하기</button>
</>
// 2. 함수 컴포넌트
function MyButton(props) {
    const handleDelete = (id, event)=>{
        console.log(id,event.target);
    }
    // 클릭하면 event를 받고 id와 같이 handleDelete로 전달
    return <button onClick={(event)=>handleDelete(1,event)}>삭제하기</button>
}
