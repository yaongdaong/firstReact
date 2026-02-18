import React, { useState, useEffect } from "react";
// React에서 상태(state)와 생명주기 훅(useEffect)을 사용하기 위해 import
function UserStatus(props) {
    // 사용자의 온라인 상태를 저장할 state
    // 처음엔 아직 모르니까 null
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        // 서버에서 사용자 상태가 바뀌었을 때 호출될 함수
        function handleStatusChange(status) {
            // status 객체 안의 isOnline 값을 state로 저장
            setIsOnline(status.isOnline);
        }
        // 서버에 "이 사용자 상태 변하면 알려줘" 하고 구독 요청
        ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
        // cleanup 함수
        // 컴포넌트가 사라지거나(user가 바뀌거나) 다시 실행되기 전에 호출됨
        return () => {
            // 더 이상 이 사용자 상태를 듣지 않겠다고 서버에 알림
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    }, [props.user.id]);
    // 👆 의존성 배열: user.id가 바뀔 때만 useEffect 다시 실행
    // 없으면 매 렌더링마다 구독/해제 반복됨 (버그 원인)
    // 아직 서버에서 상태를 못 받아온 경우
    if (isOnline === null) {
        return "대기 중...";
    }
    // 온라인이면 "온라인", 아니면 "오프라인"
    return isOnline ? "온라인" : "오프라인";
}

// r1
import React, { useState, useEffect } from "react";
// React에서 상태(state)와 생명주기 훅(useEffect)을 사용하기 위해 import
function UserStatus(props) {
    // 사용자의 온라인 상태를 저장할 state
    // 처음엔 아직 모르니까 null
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        // 서버에서 사용자 상태가 바뀌었을 때 호출될 함수
        function handleStatusChange(status) {
            // status 객체 안의 isOnline 값을 state로 저장
            setIsOnline(status.isOnline);
        }
        // 서버에 이 사용자 상태 변하면 알려줘하고 구독 요청
        ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
        // cleanup 함수
        // 컴포넌트가 사라지거나(user가 바뀌거나) 다시 실행되기 전에 호출됨
        return () => {
            // 더 이상 이 사용자 상태를 듣지 않겠다고 서버에 알림
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    }, [props.user.id]);
    // 의존성 배열: user.id가 바뀔 때만 useEffect 다시 실행
    // 없으면 렌더링마다 구독/해제 반복됨(버그 원인)
    // 아직 서버에서 상태를 못 받아온 경우
    if (isOnline === null) {
        return "대기 중...";
    }
    // 온라인이면 온라인, 아니면 오프라인
    return isOnline ? "온라인" : "오프라인";
}

// r2
import React, { useState, useEffect } from "react";
// React에서 상태(state)와 생명주기 훅(useEffect)을 사용하기 위해 import
function UserStatus(props) {
    // 사용자의 온라인 상태를 저장할 state
    // 처음엔 아직 모르니까 null
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        // 서버에서 사용자 상태가 바뀌었을 떄 호출될 함수
        function handleStatusChange(status) {
            // status 객체 안의 isOnline 값을 state로 저장
            setIsOnline(status.isOnline);
        }
        // 서버에 이 사용자 상태 변하면 알려줘 하고 구독 요청
        ServerAPI.subscribaStatus(props.user.id, handleStatusChange);
        // cleanup 함수
        // 컴포넌트가 사라지거나(user가 바뀌거나) 다시 실행되기 전에 호출됨
        return () => {
            // 더 이상 이 사용자 상태를 듣지 않겠다고 서버에 알림
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    }, [props.user.id]);
    // 의존성 배열: user.id가 바뀔 때만 useEffect 다시 실행
    // 없으면 매 렌더링마다 구독/해제 반복됨(버그 원인)
    if (isOnline === null) {
        return "대기 중...";
    }
    // 온라인이면 "온라인", 아니면 "오프라인"
    return isOnline ? "온라인" : "오프라인";
}

// r3
import React, { useState, useEffect } from "react";
// React에서 상태(state)와 생명주기 훅(useEffect)을 사용하기 위해 import
function UserStatus(props) {
    // 사용자의 온라인 상태를 저장할 state
    // 처음엔 아직 모르니까 null
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        // 서버에서 사용자 상태가 바뀌었을 떄 호출될 함수
        function handleStatusChange(status) {
            // status 객체 안의 isOnline 값을 state로 저장
            setIsOnline(status.isOnline);
        }
        // 서버에 이 사용자 상태 변하면 알려줘 하고 구독 요청
        ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
        // cleanup 함수
        // 컴포넌트가 사라지거나(user가 바뀌거나) 다시 실행되기 전에 호출됨
        return () => {
            // 더 이상 이 사용자 상태를 듣지 않겠다고 서버에 알림
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    }, [props.user.id]);
    // 의존성 배열: user.id가 바뀔 때만 useEffect 다시 실행
    // 없으면 매 렌더링마다 구독/해제 반복됨(버그 원인)
    // 아직 서버에서 상태를 못 받아온 경우
    if (isOnline === null) {
        return "대기 중...";
    }
    // 온라인이면 "온라인", 아니면 "오프라인"
    return isOnline ? "온라인" : "오프라인";
}

// r4
import React, { useState, useEffect } from "react";
// React에서 상태(state)와 생명주기 훅(useEffect)을 사용하기 위해 import
function UserStatus(props) {
    // 사용자의 온라인 상태를 저장할 state
    // 처음엔 아직 모르니까 null
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        // 서버에서 사용자 상태가 바뀌었을 때 호출될 함수
        function handleStatusChange(status) {
            // status 객체 안의 isOnline 값을 state로 저장
            setIsOnline(status.isOnline);
        }
        // 서버에 이 사용자 상태 변하면 알려줘하고 구독 요청
        ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
        // cleanup 함수
        // 컴포넌트가 사리지거나(user가 바뀌거나) 다시 실행되기 전에 호출됨
        return () => {
            // 더 이상 이 사용자 상태를 듣지 않겠다고 서버에 알림
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    }, [props.user.id]);
    // 의존성 배열: user.id가 바뀔 때만 useEffect 다시 실행
    // 없으면 매 렌더링마다 구독/해제 반복됨(버그 원인)
    // 아직 서버에서 상태를 못 받아온 경우
    if (isOnline === null) {
        return "대기 중...";
    }
    // 온라인이면 "온라인", 아니면 "오프라인"
    return isOnline ? "온라인" : "오프라인";
}

// r5
import React, { useState, useEffect } from "react";
// React에서 상태(state)와 생명주기 훅(useEffect)을 사용하기 위해 import
function UserStatus(props) {
    // 사용자의 온라인 상태를 저장할 state
    // 처음엔 아직 모르니까 null
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        // 서버에서 사용자 상태가 바뀌었을 떄 호출될 함수
        function handleStausChange(status) {
            // status 객체 안의 isOnline 값을 state로 저장
            setIsOnline(status.isOnline);
        }
        // 서버에 이 사용자 상태 변하면 알려줘하고 구독 요청
        ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
        // cleanup 함수
        // 컴포넌트가 사라지거나(user가 바뀌거나) 다시 실행되기 전에 호출됨
        return () => {
            // 더 이상 이 사용자 상태를 듣지 않겠다고 서버에 알림
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    }, [props.user.id]);
    // 의존성 배열: user.id가 바뀔 때만 useEffect 다시 실행
    // 없으면 매 렌더링마다 구독/해제 반복됨(버그 원인)
    // 아직 서버에서 상태를 못 받아온 경우
    if (isOnline === null) {
        return "대기 중...";
    }
    // 온라인이면 "온라인", 아니면 "오프라인"
    return isOnline ? "온라인" : "오프라인";
}
