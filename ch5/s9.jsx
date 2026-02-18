// 컴포넌트 추출: 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만든다.
// 댓글 하나를 표현하는 Comment 컴포넌트
function Comment(props) {
    return (
        // 댓글 전체를 감싸는 최상위 컨테이너
        <div className="comment">
            {/*  작성자 정보 영역 (프로필 + 이름) */}
            <div className="user-info">
                {/* 작성자의 프로필 이미지 // 프로필 이미지 스타일용 클래스// 작성자 프로필 이미지 URL// 이미지 대체 텍스트 (작성자 이름)*/}
                <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />
                // 작성자 이름 표시
                <div className="user-info-name">{props.author.name}</div>
            </div>
            // 댓글 내용 텍스트
            <div className="comment-text">{props.text}</div>
            // 댓글 작성 날짜// 날짜를 보기 좋은 형식으로 변환
            <div className="comment-date">{formatDate(props.date)}</div>
        </div>
    );
}

// r1
// 컴포넌트 추출: 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만든다.
// 댓글 하나를 표현하는 Commnet 컴포넌트
function Comment(props) {
    return (
        // 댓글 전체를 감싸는 최상위 컨테이너
        <div className="comment">
            {/* 작성자 정보 영역 (프로필+이름) */}
            <div className="user-info">
                {/* 작성자의 프로필 이미지, 프로필 이미지 스타일용 클래스, 작성자 프로필 이미지 URL, 이미지 대체 텍스트(작성자 이름) */}
                <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />
                {/* 작성자 이름 표시 */}
                <div className="user-info-name">{props.author.name}</div>
            </div>
            {/* 댓글 내용 텍스트 */}
            <div className="comment-text">{props.text}</div>
            {/* 댓글 작성 날짜. 날짜는 보기 좋은 형식으로 변환 */}
            <div className="comment-date">{formatDate(props.date)}</div>
        </div>
    );
}

// r2
// 컴포넌트 추출: 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만든다.
// 댓글 하나를 표현하는 Comment 컴포넌트
function Comment(props) {
    return (
        // 댓글 전체를 감싸는 최상위 컨테이너
        <div className="comment">
            {/* 작성자 정보 영역 (프로필+이름) */}
            <div className="user-info">
                {/* 작성자의 프로필 이미지, 프로필 이미지 스타일용 클래스, 작성자 프로필 이미지 URL, 이미지 대체 텍스트(작성자 이름) */}
                <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />
                {/* 작성자 이름 표시 */}
                <div className="user-info-name">{props.author.name}</div>
            </div>
            {/* 댓글 내용 텍스트 */}
            <div className="comment-text">{props.text}</div>
            {/* 댓글 작성 날짜, 날짜는 보기 좋은 형식으로 변환 */}
            <div className="comment-date">{formatDate(props.date)}</div>
        </div>
    );
}

// r3
// 컴포넌트 추출: 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만든다.
// 댓글 하나를 표현하는 Comment 컴포넌트
function Comment(props) {
    return (
        // 댓글 전체를 감싸는 최상위 컨테이너
        <div className="comment">
            {/* 작성자 정보 영역 (프로필+이름) */}
            <div className="user-info">
                {/* 작성자의 프로필 이미지, 프로필 이미지 스타일용 클래스, 작성자 프로필 이미지 URL, 이미지 대체 텍스트(작성자 이름) */}
                <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />
                {/* 작성자 이름 표시 */}
                <div className="user-info-name">{props.author.name}</div>
            </div>
            {/* 댓글 내용 텍스트 */}
            <div className="comment=text">{props.text}</div>
            {/* 댓글 작성 날짜, 날짜는 보기 좋은 형식으로 변환 */}
            <div className="comment-date">{formatDate(props.date)}</div>
        </div>
    );
}

// r4
// 컴포넌트 추출: 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만든다.
// 댓글 하나를 표현하는 Comment 컴포넌트
function Comment(props) {
    return (
        // 댓글 전체를 감싸는 최상위 컨테이너
        <div className="comment">
            {/* 작성자 정보 영역 (프로필+이름) */}
            <div className="user-info">
                {/* 직성자의 프로필 이미지, 프로필 이미지 스타일용 클래스, 작성자 프로필 이미지 URL, 이미지 대체 텍스트(작성자 이름) */}
                <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />
                {/* 작성자 이름 표시 */}
                <div className="user-info-name">{props.author.name}</div>
            </div>
            {/* 댓글 내용 텍스트 */}
            <div className="comment-text">{props.text}</div>
            {/* 댓글 작성 날짜, 날짜는 보기 좋은 형식으로 변환 */}
            <div className="comment-date">{formatDate(props.date)}</div>
        </div>
    );
}

// r5
// 컴포넌트 추출: 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만든다.
// 댓글 하나를 표현하는 Comment  컴포넌트
function Comment(props) {
    return (
        // 댓글 전체를 감싸는 최상위 컨테이너
        <div className="comment">
            {/* 작성자 정보 영역 (프로필+이름) */}
            <div className="user-info">
                {/* 작성자의 프로필 이미지, 프로필 이미지 스타일용 클래스, 작성자 프로필 이미지 URL, 이미지 대체 텍스트(작성자 이름) */}
                <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />
                {/* 잓어자 이름 표시 */}
                <div className="user-info-name">{props.author.name}</div>
            </div>
            {/* 댓글 내용 텍스트 */}
            <div className="comment-text">{props.text}</div>
            {/* 댓글 작성 날짜, 날짜는 보기 좋은 형식으로 변환 */}
            <div className="comment=date">{formatDate(props.date)}</div>
        </div>
    );
}
