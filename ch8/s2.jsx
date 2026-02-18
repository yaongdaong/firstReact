class MyButton extends React.Component {
    handleClick = () => {
        console.log(`this is:`, this);
    };
    render() {
        return (
            <>
                {/* 버튼1: 함수 자체를 React에게 넘김, 
             예시) 전화번호를 직접 넘김
              React가 event를 자동으로 넣어줌, 
                렌더링될 때 함수 1개 */}
                <button onClick={this.handleClick}>클릭1</button>
                {/* 버튼2: 함수를 실행하는 또 다른 함수를 React에게 넘김, 
                예시) 전화 거는 방법을 적은 메모를 넘김
                event를 내가 직접 넣어줘야 함, 
                렌더링될 때마다 새 함수 생성 */}
                <button onClick={() => this.handleClick()}>클릭2</button>
            </>
        );
    }
}
