// 리액트에서 useState, useEffect 훅을 불러온다
import React, { useState, useEffect } from "react";
// 사용자 상태(온라인 / 오프라인)를 표시하는 컴포넌트
function UserStatus(props) {
    // isOnline : 사용자가 온라인인지 아닌지 저장하는 상태
    // null : 아직 서버에서 상태를 받아오기 전 (대기 상태)
    // true : 온라인, false : 오프라인
    const [isOnline, setIsOnline] = useState(null);
    // 서버에서 사용자 상태가 변경되었을 때 호출될 함수
    function handleStatusChange(status) {
        // 서버에서 받은 status 객체의 isOnline 값을 리액트 state로 저장
        setIsOnline(status.isOnline);
    }
    // useEffect는 컴포넌트가 화면에 나타난 후 실행된다
    useEffect(() => {
        // 서버 API에 "이 사용자의 상태 변화를 알려달라"고 등록(구독)
        // props.user.id 사용자의 상태가 바뀌면
        // handleStatusChange 함수가 자동으로 호출된다
        ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
        // return 안의 함수는 cleanup(정리 함수)
        // 컴포넌트가 화면에서 사라질 때 실행된다
        return () => {
            // 서버 API 구독을 해제한다
            // 안 해주면 메모리 누수, 중복 실행 문제가 발생할 수 있다
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    }); // ⚠️ 의존성 배열이 없어서 매 렌더링마다 실행됨
    // 아직 온라인/오프라인 정보를 못 받았을 때
    if (isOnline === null) {
        return "대기 중...";
    }
    // isOnline 값이 true면 "온라인", false면 "오프라인" 출력
    return isOnline ? "온라인" : "오프라인";
}
// 다른 파일에서 사용할 수 있도록 컴포넌트 내보내기
export default UserStatus;

// r1
// 리액0트에서 useState, useEffect 훅을 불러온다
import React, { useState, useEffect } from "react";
// 사용자의 상태(온라인/오프라인)을 표시하는 컴포넌트
function UserStatus(props) {
    // isOnline: 사용자 온라인 여부 저장하는 상태
    // null: 아직 서버에서 상태를 받아오기 전 (대기 상태)
    // true: 온라인, false: 오프라인
    const [isOnline, setIsOnline] = useState(null);
    // 서버에서 사용자 상태가 변경되었을 때 호출될 함수
    function handleStatusChange(status) {
        // 서버에서 받은 status 객체의 isOnline 값을 리액트 state로 저장
        setIsOnline(status.isOnline);
    }
    // useEffect는 컴포넌트가 화면에 나타난 후 실행된다
    useEffect(() => {
        // 서버 API에 이 사용자의 상태 변화를 알려달라고 등록(구독)
        // props.user.id 사용자의 상태가 바뀌면
        // handleStatusChange 함수가 자동으로 호출
        ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
        // return 안의 함수는 cleanup(정리 함수)
        // 컴포넌트가 화면에서 사라질 때 실행된다
        return () => {
            // 서버 API 구독을 해제
            // 안 해주면 메모리 누수, 중복 실행 문제 발생 가능
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    }); // 의존성 배열이 없어서 매 렌더링마다 실행됨
    // 아직 온라인/오프라인 정보를 못 받았을 떄
    if (isOnline === null) {
        return "대기 중...";
    }
    // isOnline 값이 true면 "온라인", false면 "오프라인"출력
    return isOnline ? "온라인" : "오프라인";
}
// 다른 파일에서 사용할 수 있도록 컴포넌트 내보내기
// export default UserStatus;

// r2
// 리액트에서 useState, useEffect 훅을 불러온다
import React, { useState, useEffect } from "react";
// 사용자 상태(온라인/오프라인)을 표시하는 컴포넌트
function UserStatus(props) {
    // isOnline: 사용자가 온라인인지 아닌지 저장하는 상태
    // null: 아직 서버에서 상태를 받아오기 전(대기 상태)
    // true: 온라인, false: 오프라인
    const [isOnline, setIsOnline] = useState(null);
    // 서버에서 사용자 상태가 변경되었을 때 호출할 함수
    function handleStatusChange(status) {
        // 서버에서 받은 status 객체의 isOnline 값을 리액트 state로 저장
        setIsOnline(status.isOnline);
    }
    // useEffect는 컴포넌트가 화면에 나타난 후 실행된다
    useEffect(() => {
        // 서버 API에 이 사용자의 상태 변화를 알려달라고 등록(구독)
        // props.user.id 사용자의 상태가 바뀌면
        // handleStatusChange 함수가 자동으로 호출된다
        ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
        // return 안의 함수는 cleanup(정리 함수)
        // 컴포넌트가 화면에서 사라질 때 실행된다
        return () => {
            // 서버 API 구독을 해제한다
            // 안 해주면 메모리 누수, 중복 실행 문제 발생 가능
            ServerAPI.unsubscribeUserStatus(props.uer.id, handleStatusChange);
        };
    }); // 의존성 배열이 없어서 매 렌더링마다 실행됨
    // 아직 온라인/오프라인 정보를 못 받았을 때
    if (isOnline === null) {
        return "대기 중...";
    }
    // isOnline 값이 true면 온라인, false면 오프라인 출력
    return isOnline ? "온라인" : "오프라인";
}
// 다른 파일에서 사용할 수 있도록 컴포넌트 내보내기
// export default UserStatus;

// r3
// 리액트에서 useState, useEffect 훅을 불러온다
import React, { useState, useEffect } from "react";
// 사용자 상태(온라인/오프라인)를 표시하는 컴포넌트
function UserStatus(props) {
    // isOnline: 사용자가 온라인인지 아닌지 저장하는 상태
    // null: 아직 서버에서 상태를 받아오기 전(대기 상태)
    // true: 온라인, false: 오프라인
    const [isOnline, setIsOnline] = useState(null);
    // 서버에서 사용자 상태가 변경되었을 때 호출될 함수
    function handleStatusChange(status) {
        // 서버에서 받은 status 객체의 isOnline 값을 리액트 state로 저장
        setIsOnline(status.isOnline);
    }
    // useEffect는 컴포넌트가 화면에 나타난 후 실행된다
    useEffect(() => {
        // 서버 API에 이 사용자의 상태 변화를 알려달라고 등록(구독)
        // props.user.id 사용자의 상태가 바뀌면
        // handleStatusChange 함수가 자동으로 호출된다
        ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
        // return 안의 함수는 cleanup(정리 함수)
        // 컴포넌트가 화면에서 사라질 때 실행된다
        return () => {
            // 서버 API 구독을 해제한다
            // 안 해주면 메모리 누수, 중복 실행 문제 발생 가능
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    }); // 의존성 배열이 없어서 매 렌더링마다 실행됨
    // 아직 온라인/오프라인 정보를 못 받았을 때
    if (isOnline === null) {
        return "대기 중...";
    }
    // isOnline 값이 true면 온라인, false면 오프라인 출력
    return isOnline ? "온라인" : "오프라인";
}
// 다른 파일에서 사용할 수 있도록 컴포넌트 내보내기
// export default UserStatus;

// r4
// 리액트에서 useState, useEffect 훅을 불러온다
import React, { useState, useEffect } from "react";
// 사용자 상태(온라인/오프라인)를 표시하는 컴포넌트
function UserStatus(props) {
    // isOnline: 사용자가 온라인인지 아닌지 저장하는 상태
    // null: 아직 서버에서 상태를 받아오기 전(대기 상태)
    // true: 온라인, false: 오프라인
    const [isOnline, setIsOnline] = useState(null);
    // 서버에서 사용자 상태가 변경되었을 떄 호출될 함수
    function handleStatusChange(status) {
        // 서버에서 받은 status 객체의 isOnline 값을 리액트 state로 저장
        setIsOnline(status.isOnline);
    }
    // useEffect는 컴포넌트가 화면에 나타난 후 실행된다
    useEffect(() => {
        // 서버 API에 이 사용자의 상태 변화를 알려달라고 등록(구독)
        // props.user.id 사용자의 상태가 바뀌면
        // handleStatusChange 함수가 자동으로 호출된다.
        ServerAPI.subscribeStatus(props.user.id, handleSTatusChange);
        // return 안의 함수는 cleanup(정리 함수)
        // 컴포넌트가 화면에서 사라질 때 실행된다
        return () => {
            // 서버 API 구독을 해제한다
            // 안 해주면 메모리 누수, 중복 실행 문제가 발생할 수 있다
            ServerAPi.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    }); // 의존성 배열이 없어서 매 렌더링마다 실행됨
    // 아직 온라인/오프라인 정보를 못 받았을 때
    if (isOnline === null) {
        return "대기 중...";
    }
    // isOnline 값이 true면 온라인, false면 오프라인 출력
    return isOnline ? "온라인" : "오프라인";
}
// 다른 파일에서 사용할 수 있도록 컴포넌트 내보내기
// export default UserStatus;

// r5
// 리액트에서 useState, useEffect 훅을 불러온다
import React, { useState, useEffect } from "react";
// 사용자 상태(온라인/오프라인)를 표시하는 컴포넌트
function UserStatus(props) {
    // isOnline: 사용자가 온라인인지 아닌지 저장하는 상태
    // null: 아직 서버에서 상태를 받아오기 전(대기 상태)
    // true: 온라인, false: 오프라인
    const [isOnline, setIsOnline] = useState(null);
    // 서버에서 사용자 상태가 변경되었을 때 호출될 함수
    function handleStatusChange(status) {
        // 서버에서 받은 status 객체의 isOnline 값을 리액트 state로 저장
        setIsOnline(status.isOnlie);
    }
    // useEffect는 컴포넌트가 화면에 나타난 후 실행된다
    useEffect(() => {
        // 서버 API에 이 사용자의 상태 변화를 알려달라고 등록(구독)
        // props.user.id 사용자의 상태가 바뀌면
        // handleStatusChange 함수가 자동으로 호출된다
        ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
        // return 안의 함수는 cleanup(정리 함수)
        // 컴포넌트가 화면에서 사라질 때 실행된다
        return () => {
            // 서버 API 구독을 해제한다
            // 안 해주면 메모리 누수, 중복 실행 문제 발생 가능
            ServerAPI.unsubscribeStatus(props.user.id, handleStatusChange);
        };
    }); // 의존성 배열이 없어서 매 렌더링마다 실행됨
    // 아직 온라인/오프라인 정보를 못 받았을 때
    if (isOnline === null) {
        return "대기 중...";
    }
    // isOnline 값이 true면 온라인, false면 오프라인 출력
    return isOnline ? "온라인" : "오프라인";
}
// 다른 파일에서 사용할 수 있도록 컴포넌트 내보내기
// export default UserStatus;
