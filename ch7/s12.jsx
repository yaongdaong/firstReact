import { useState, useEffect } from "react";

// 유저정보
function UserInfo() {
    const user = { id: "user-1", name: "철수" };
    <>
        <UserStatus user={user} />
        <UserListItem user={user} />
    </>
} 

// 사용자상태
function UserStatus(props) {
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
        ServerAPI.subscibeUserStatus(userId, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
        };
    });
    if (isOnline === null) {
        return "대기중...";
    }
    return isOnline ? "온라인" : "오프라인";
}

// 온라인사용자초록색
function UserListItem(props) {
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
        ServerAPI.subscibeUserStatus(userId, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
        };
    });
    return <li style={{ color: isOnline ? "green" : "black" }}>{props.user.id}</li>;
}

// 공통부분추출(커스텀 훅)
function useUserStatus(userId) {
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
        ServerAPI.subscibeUserStatus(userId, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
        };
    });
    return isOnline;
}

// 추출한 훅 사용
function UserStatus(props) {
    const isOnline = useUserStatus(props.user.id);
    if(isOnline===null) {
        return "대기 중...";
    }
    return isOnline? "온라인":"오프라인"
}
function UserListItem(props) {
    const isOnline=useUserStatus(props.user.id);
    return (
        <li style={{color:isOnline?'green':'black'}}>{props.user.name}</li>
    )
}
// 훅은 값만 넘겨주고 컴포넌트는 값에 따른 판단을 한다