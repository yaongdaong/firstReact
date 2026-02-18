// 사용자 프로필 이미지를 표시하는 Avatar 컴포넌트
function Avatar(props) {
    return (
        // 프로필 이미지 스타일용 클래스 // 사용자 프로필 이미지 URL // 이미지 대체 텍스트 (사용자 이름)
        <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
    );
}

// r1
// 사용자 프로필 이미지를 표시하는 Avatar 컴포넌트
function Avatar(props) {
    return (
        // 프로필 이미지 스타일용 클래스  // 사용자 프로필 이미지 URL // 이미지 대체 텍스트(사용자 이름)
        <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
    );
}
// r2
// 사용자 프로필 이미지를 표시하는 Avatar 컴포넌트
function Avatar(props) {
    return (
        // 프로필 이미지 스타일용 클래스 // 사용자 프로필 이미지 URL // 이미지 대체 텍스트(사용자 이름)
        <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
    );
}
// r3
// 사용자 프로필 이미지를 표시하는 Avatar 컴포넌트
function Avatar(props) {
    return (
        // 프로필 이미지 스타일용 클래스 // 사용자 프로필 이미지 URL // 이미지 대체 텍스트(사용자 이름)
        <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
    );
}
// r4
// 사용자 프로필 이미지를 표시하는 Avatar 컴포넌트
function Avatar(props) {
    return (
        // 프로필 이미지 스타일용 클래스 // 사용자 프로필 이미지 URL // 이미지 대체 텍스트(사용자 이름)
        <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
    );
}
// r5
// 사용자 프로필 이미지를 표시하는 Avatar 컴포넌트
function Avatar(props) {
    return (
        // 프로필 이미지 스타일용 클래스 // 사용자 프로필 이미지 URL // 이미지 대체 텍스트(사용자 이름)
        <img className="avatar" src={props.user.avatarUrl} alt={props.user.nmae} />
    );
}

// 사용자 프로필 영역(이미지 + 이름)을 담당하는 UserInfo 컴포넌트
function UserInfo(props) {
    return (
        // 사용자 정보 전체를 감싸는 컨테이너
        <div className="user-info">
            {/* Avatar 컴포넌트에 user 객체를 props로 전달 */}
            <Avatar user={props.user} />
            {/* 사용자 이름 표시 */}
            <div className="user-info-name">{props.user.name}</div>
        </div>
    );
}
// r1
// 사용자 프로필 영역(이미지+이름)을 담당하는 UserInfo 컴포넌트
function UserInfo(props) {
    return (
        // 사용자 정보 전체를 감싸는 컨테이너
        <div className="user-info">
            {/* Avatar 컴포넌트에 user 객체를 props로 전달 */}
            <Avatar user={props.uer} />
            {/* 사용자 이름 표시 */}
            <div className="user-info-name">{props.user.name}</div>
        </div>
    );
}
// r2
// 사용자 프로필 영역(이미지+이름)을 담당하는 UserInfo 컴포넌트
function UserInfo(props) {
    return (
        // 사용자 정보 전체를 감싸는 컨테이너
        <div className="user-info">
            {/* Avatar 컴포넌트에 user 객체를 props로 전달 */}
            <Avatar user={props.user} />
            {/* 사용자 이름 표시 */}
            <div className="user-info-name">{props.user.name}</div>
        </div>
    );
}
// r3
// 사용자 프로필 영역(이미지+이름)을 담당하는 UserInfo 컴포넌트
function UserInfo(props) {
    return (
        // 사용자 정보 전체를 감싸는 컨테이너
        <div className="user-info">
            {/* Avatar 컴포넌트에 user 객체를 props로 전달 */}
            <Avatar user={props.user} />
            {/* 사용자 이름 표시 */}
            <div className="user-info-name">{props.user.name}</div>
        </div>
    );
}
// r4
// 사용자 프로필 영역(이미지+이름)을 담당하는 UserInfo 컴포넌트
function UserInfo(props) {
    return (
        // 사용자 정보 전체를 감싸는 컨테이너
        <div className="user-info">
            {/* Avatar 컴포넌트에 user 객체를 props로 전달 */}
            <Avatar user={props.user} />
            {/* 사용자 이름 표시 */}
            <div className="user-info-name">{props.user.name}</div>
        </div>
    );
}
// r5
// 사용자 프로필 영역(이미지+이름)을 담당하는 UserInfo 컴포넌트
function UserInfo(props) {
    return (
        // 사용자 정보 전체를 감싸는 컨테이너
        <div className="user-info">
            {/* Avatar 컴포넌트에 user 객체를 props로 전달 */}
            <Avatar user={props.user} />
            {/* 사용자 이름 표시 */}
            <div className="user-info-name">{props.user.name}</div>
        </div>
    );
}

// 추출한 UserInfo 컴포넌트를 사용해 댓글을 표현하는 Comment 컴포넌트
function Comment(props) {
    return (
        // 댓글 하나 전체를 감싸는 최상위 컨테이너
        <div className="comment">
            {/* 작성자 정보를 UserInfo 컴포넌트로 분리하여 사용 */}
            <UserInfo user={props.author} />
            {/* 댓글 내용 */}
            <div className="comment-text">{props.text}</div>
            {/* 댓글 작성 날짜 (포맷된 날짜 출력) */}
            <div className="comment-date">{formatDate(props.date)}</div>
        </div>
    );
}
// r1
// 추출한 UserInfo 컴포넌트를 사용해 댓글을 표현하는 Comment 컴포넌트
function Comment(props) {
    return (
        // 댓글 하나 전체를 감싸는 최상위 컨테이너
        <div className="comment">
            {/* 작성자 정보를 UserInfo 컴포넌트로 분리하여 사용 */}
            <UserInfo user={props.author} />
            {/* 댓글 내용 */}
            <div className="comment-text">{props.text}</div>
            {/* 댓글 작성 날짜 (포맷된 날짜 출력) */}
            <div className="comment-date">{formatDate(props.date)}</div>
        </div>
    );
}
// r2
// 추출한 UserInfo 컴포넌트를 사용해 댓글을 표현하는 Comment 컴포넌트
function Comment(props) {
    return (
        // 댓글 하나 전체를 감싸는 최상위 컨테이너
        <div className="comment">
            {/* 작성자 정보를 UserInfo 컴포넌트로 분리하여 사용 */}
            <UserInfo user={props.author} />
            {/* 댓글 내용 */}
            <div className="comment-text">{props.text}</div>
            {/* 댓글 작성 날짜 (포맷된 날짜 출력) */}
            <div className="comment=date">{formatDate(props.date)}</div>
        </div>
    );
}
// r3
// 추출한 UserInfo 컴포넌트를 사용해 댓글을 표현하는 Comment 컴포넌트
function Comment(props) {
    return (
        // 댓글 하나 전체를 감싸는 최상위 컨테이너
        <div className="comment">
            {/* 작성자 정보를 UserInfo 컴포넌트로 분리하여 사용 */}
            <UserInfo user={props.author} />
            {/* 댓글 내용 */}
            <div className="comment-text">{props.text}</div>
            {/* 댓글 작성 날짜 (포맷된 날짜 출력) */}
            <div className="comment-date">{formatDate(props.date)}</div>
        </div>
    );
}
// r4
// 추출한 UserInfo 컴포넌트를 사용해 댓글을 표현하는 Comment 컴포넌트
function Comment(props) {
    return (
        // 댓글 하나 전체를 감싸는 최상위 컨테이너
        <div className="comment">
            {/* 작성자 정보를 UserInfo 컴포넌트로 분리하여 사용 */}
            <UserInfo user={props.author} />
            {/* 댓글 내용 */}
            <div className="comment=text">{props.text}</div>
            {/* 댓글 작성 날짜 (포맷된 날짜 출력) */}
            <div className="comment=date">{formatDate(props.date)}</div>
        </div>
    );
}
// r5
// 추출한 UserInfo 컴포넌트를 사용해 댓글을 표현하는 Comment 컴포넌트
function Comment(props) {
    return (
        // 댓글 하나 전체를 감싸는 최상위 컨테이너
        <div className="comment">
            {/* 작성자 정보를 UserInfo 컴포넌트로 분리하여 사용 */}
            <UserInfo user={props.author} />
            {/* 댓글 내용 */}
            <div className="comment-text">{props.text}</div>
            {/* 댓글 작성 날짜 (포맷된 날짜 출력) */}
            <div className="comment-date">{formatDate(props.date)}</div>
        </div>
    );
}
