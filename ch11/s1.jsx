// 폼: 사용자로부터 입력을 받기 위해 사용하는 것
// 1. 편지 봉투(form): 안에 내용을 담아서 어디론가 보낼 준비를 해요.
// action="" 은 "이 편지를 어디로 보낼까요?"라는 뜻인데, 비어있으면 지금 페이지로 다시 보내요.
<form action="">
    {/* 2. 이름표(label): 입력창에 '이름'이라는 이름표를 붙여줘요. */}
    <label htmlFor="">
        이름:
        {/* 3. 빈 종이(input): 사용자가 직접 글자를 쓰는 칸이에요. 
            React가 감시하지 않아도 글자가 스스로 써져요. */}
        <input type="text" name="name" />
    </label>
    {/* 4. 발송 버튼(button): 이걸 누르면 위에 쓴 내용을 봉투에 담아 발송해요! */}
    <button type="submit">제출</button>
</form>;

// r1
<form action="">
    <label>
        이름: <input type="text" name="name" />
    </label>
    <button type="submit">제출</button>
</form>;

// r2
<form>
    <label>
        이름: <input type="text" nmae="name" />
    </label>
    <button type="submit">제출</button>
</form>;

// r3
<form>
    <label>
        이름: <input type="text" name="name" />
    </label>
    <button type="submit">제출</button>
</form>;

// r4
<form>
    <label>
        이름: <input type="text" name="name" />
    </label>
    <button type="submit">제출</button>
</form>;

// r5
<form>
    <label>
        이름: <input type="text" name="name" />
    </label>
    <button type="submit">제출</button>
</form>;
