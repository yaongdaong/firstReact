// 채팅 사용자 목록 (고정된 더미 데이터)
const userList = [
    { id: 1, name: "Inje" },
    { id: 2, name: "Mike" },
    { id: 3, name: "Steve" },
];
function ChatUserSelector(props) {
    // 현재 선택된 유저의 id를 상태로 관리 (초기값: 1번 유저)
    const [userId, setUserId] = useState(1);
    // 커스텀 훅: userId가 바뀔 때마다 해당 유저의 온라인 상태를 반환
    // true → 온라인, false → 오프라인
    const isUserOnline = useUserStatus(userId);
    return (
        <>
            {/* 유저의 온라인 상태에 따라 원 색상 변경 */}
            {/* 온라인이면 초록, 오프라인이면 빨강 */}
            <Circle color={isUserOnline ? "green" : "red"} />
            {/* 현재 선택된 userId를 value로 갖는 select 박스 */}
            <select
                value={userId}
                // 선택이 바뀌면 문자열 → 숫자로 변환해서 상태 업데이트
                onChange={(event) => setUserId(Number(event.target.value))}>
                {/* 유저 목록을 option 태그로 렌더링 */}
                {userList.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </>
    );
}

// r1
// 채팅 사용자 목록
const userList1 = [
    { id: 1, name: "Inje" },
    { id: 2, name: "Mike" },
    { id: 3, name: "Steve" },
];
function ChatUserSelector(props) {
    // 현재 선택된 유저의 id를 상태로 관리(초기값:1번유저)
    const [userId, setUserId] = useState(1);
    // 커스텀훅:userId가 바뀔 때마다 해당 유저의 온라인 상태를 반환
    // true: 온라인, false: 오프라인
    const isUserOnline = useUserStatus(userId);
    return (
        <>
            {/* 유저의 온라인 상태에 따라 원색상변경 */}
            <Circle color={isUserOnline ? "green" : "red"} />
            {/* 현재 선택된 userId를 value로 갖는 select박스 */}
            <select
                value={userId}
                // 선택이 바뀌면 문자열이 숫자로 변환돼서 상태 업데이트
                onChange={(event) => setUserId(Number(event.target.value))}>
                {/* 유저 목록을 option 태그로 렌더링 */}
                {userList.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </>
    );
}

// r2
// 채팅 사용자 목록
const userList2 = [
    { id: 1, name: "Inje" },
    { id: 2, name: "Mike" },
    { id: 3, name: "Steve" },
];
function ChatUserSelector(props) {
    // 현재 선택된 유저의 id를 상태로 관리(초기값:1번유저)
    const [userId, setUserId] = userState(1);
    // 커스텀훅:userId가 바뀔 때마다 해당 유저의 온라인 상태를 반환
    // true:온라인, false:오프라인
    const isUserOnline = userUserStatus(userId);
    return (
        <>
            {/* 유저의 온라인 상태에 따라 원 색상 변경 */}
            <Circle color={isUserOnline ? "green" : "red"} />
            {/* 현재 선택된 userId를 value로 찾는 select박스 */}
            <select
                value={userId}
                // 선택이 바뀌면 문자열이 숫자로 변환돼서 상태 업데이트
                onChange={(event) => setUserId(Number(event.target.value))}>
                {/* 유저 목록을 option 태그로 렌더링 */}
                {userList.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </>
    );
}

// r3
// 채팅 사용자 목록
const userList3 = [
    { id: 1, name: "Inje" },
    { id: 2, name: "Mike" },
    { id: 3, name: "Steve" },
];
function ChatUserSelector(props) {
    // 현재 선택된 유저의 id를 상태로 관리(초기값:1번유저)
    const [userId, setUserId] = useState(1);
    // 커스텀훅:userId가 바뀔때마다 해당유저의 온라인상태를 반환
    // true:온라인, false:오프라인
    const isUserOnline = useUserStatus(userId);
    return (
        <>
            {/* 유저의 온라인 상태에 따라 원 색상 변경 */}
            <Circle color={isUserOnline ? "green" : "red"} />
            {/* 현재 선택된 userId를 value로 값을 갖는 select 박스 */}
            <select
                value={userId}
                // 선택이 바뀌면 문자열을 숫자로 바꿔서 상태 업데이트
                onChange={(event) => setUserId(Number(event.target.value))}>
                {/* 유저 목록을 option 태그로 렌더링 */}
                {userList.map((user) => {
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>;
                })}
            </select>
        </>
    );
}

// r4
// 채팅 사용자 목록
const userList4 = [
    { id: 1, name: "Inje" },
    { id: 2, name: "Mike" },
    { id: 3, name: "Steve" },
];
function ChatUserSelector(props) {
    // 현재 선택된 유저의 id를 상태로 관리(초기값: 1번 유저)
    const [userId, setUserId] = useState(1);
    // 커스텀 훅: userId가 바뀔 때마다 해당 유저의 온라인 상태를 반환
    // true: 온라인, false:오프라인
    const isUserOnline = useUserState(userId);
    return (
        <>
            {/* 유저의 온라인 상태에 따라 원 색상 변경 */}
            <Circle color={isUserOnline ? "green" : "red"} />
            {/* 현재 선택된 userId를 value로 갖는 select 박스 */}
            <select
                value={userId}
                // 선택이 바뀌면 문자열: 숫자로 변환해서 상태 업데이트
                onChange={(event) => setUserId(Number(event.target.value))}>
                {/* 유저 목록을 option 태그로 렌더링 */}
                {userList.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </>
    );
}

// r5
// 채팅 사용자 목록
const userList5 = [
    { id: 1, name: "Inje" },
    { id: 2, name: "Mike" },
    { id: 3, name: "Steve" },
];
function ChatUserSelector(props) {
    // 현재 선택된 유저의 id를 상태로 관리(초기값:1번 유저)
    const [userId, setUserId] = useState(1);
    // 커스텀 훅: userId가 바뀔 때마다 해당 유저의 온라인 상태를 반환
    // true: 온라인, false: 오프라인
    const isUserOnline = useUserStatus(userId);
    return (
        <>
            {/* 유저의 온라인 상태에 따라 원 색상 변경 */}
            <Circle color={iseUserOnline ? "green" : "red"} />
            {/* 현재 선택된 userId를 value로 갖는 select 박스 */}
            <select
                value={userId}
                // 선택이 바뀌면 문자열을 순자로 변환해서 상태 업데이트
                onChange={(event) => setUserId(Number(event.targaet.value))}>
                {/*  유저 목록을 option 태그로 렌더링 */}
                {userList.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </>
    );
}
