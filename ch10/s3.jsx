// 1. 데이터 자체를 키로 사용
// 데이터가 중복되지 않는 단순한 숫자나 문자열 배열일 때 적합합니다.
const numbers = [1, 2, 3, 4, 5];
const listItmes = numbers.map((number) => <li key={number.toString()}>{number}</li>);
// 2. 고유 ID 사용 (가장 권장됨)
// 데이터베이스에서 가져온 객체 데이터라면 id와 같은 고유한 식별자를 사용하는 것이 베스트 프랙티스입니다. 리스트의 순서가 바뀌거나 중간에 아이템이 추가되어도 React가 정확히 어떤 요소인지 추적할 수 있습니다.
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
// 3. 인덱스(index) 사용 (최후의 수단)
// 고유한 ID가 전혀 없고, 데이터가 정적(순서가 바뀌거나 삭제될 일이 없음)일 때만 사용합니다.
const todoList = todos.map((todo, index) => <li key={index}>{todo.text}</li>);

// r1
// 1.데이터 자체를 키로 사용:중복없는 숫자,문자열
const numbers1 = [1, 2, 3, 4, 5];
const listItems1 = numbers1.map((number) => <li key={number.toString()}>{number}</li>);
// 2.고유id사용(가장권장):리스트순서,추가돼도ok
const todoItems1 = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
// 3,인덱스사용(최후수단):고유아이디가없고데이터변동없을때만사용
const todoList1 = todos.map((todo, index) => <li key={index}>{todo.text}</li>);

// r2(리스트의 키)
// 1.데이터 자체를 키로 사용
// 데이터가 중복되지 않는 단순한 숫자나 배열일 때 적합
const numbers2 = [1, 2, 3, 4, 5];
const listItems2 = numbers2.map((number) => <li key={number.toString()}>{number}</li>);
// 2.고유 id 사용(가장 권장됨)
// db에서 가져온 객체 데이터라면 id와 같은 고유한 식별자를 사용하는 것이 베스트
// 리스트의 순서가 바뀌거나 중간에 아이템이 추가되어도 React가 정확히 어떤 요소인지 추적가능
const todoItems2 = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
// 3.인덱스사용(최후의 수단)
// 고유한ID가 전혀없고, 데이터가 정적(순서가 바뀌거나 삭제될 일이 없음)일 때만 사용
const todoLIst2 = todos.map((todo, index) => <li key={index}>{todo.text}</li>);

// r3(리스트의 키)
// 1.데이터 자체를 키로 사용
// 데이터가 중복되지 않는 단순한 숫자나 문자열 배열일 때 적합
const numbers3 = [1, 2, 3, 4, 5];
const listItems3 = numbers3.map((number) => <li key={number.toString()}>{number}</li>);
// 2.고유id사용(가장 권장)
// db에서 가져온 객체 데이터라면 id와 같은 고유한 식별자를 사용하는 것이 베스트
// 리스트의 순서가 바뀌거나 중간에 아이템이 추가되어도 React가 정확히 어떤 요소인지 추적가능
const todoItmes3 = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
// 3.인덱스 사용(최후의 수단)
// 고유한 id가 전혀 없고, 데이터가 정적(순서가 바뀌거나 삭제될 일이 없음)일 때만 사용
const todoList3 = todos.map((todo, index) => <li key={index}>{todo.text}</li>);

// r4(리스트의 키)
// 1.데이터 자체를 키로 사용
// 데이터가 중복되지 않는 단순한 숫자나 문자열 배열일 때 적합
const numbers4 = [1, 2, 3, 4, 5];
const listItems4 = numbers4.map((number) => <li key={number.toString()}>{number}</li>);
// 2.고유 ID 사용(가장 권장)
// db에서 가져온 객체 데이터라면 id와 같은 고유한 식별자는 사용하는 것이 베스트
// 리스트의 순서가 바뀌거나 중간에 아이템이 추가되어도React가 정확히 어떤 요소인지 추적가능
const todoItems4 = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
// 3.인덱스 사용(최후의 수단)
// 고유한 id가 전혀 없고, 데이터가 정적(순서가 바뀌거나 삭제될 일이 없음)일 떄만 사용
const todoList4 = todos.map((todo, index) => <li key={index}>{todo.text}</li>);

// r5(리스트의 키)
// 1.데이터 자체를 키로 사용
// 데이터가 중복되지 않는 단순한 숫자나 문자열 배열일 떄 적합
const numbers5 = [1, 2, 3, 4, 5];
const listItems5 = numbers.map((number) => <li key={numbers.toString()}>{number}</li>);
// 2.고유id사용(가장 권장)
// db에서 가져온 객체 데이터라면 id와 같은 고유한 식별자를 사용하는 것이 베스트
// 리스트의 순서가 바뀌거나 아이템이 추가되어도 React가 정확히 어떤 요소인지 추적가능
const todoItmes5 = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
// 3.인덱스사용(최후수단)
// 고유id가 전혀없고, 데이터가 정적(순서가 바뀌거나 삭제될 일이 없음)일 떄만 사용
const todoList5 = todos.map((todo, index) => <li key={index}>{todo.text}</li>);
