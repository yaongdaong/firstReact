const title = Response.potentiallyMaliciousInput;
// 서버나 외부 입력에서 들어온 값
// 이름처럼 악의적인 스크립트가 포함되어 있을 수도 있는 문자열이라고 가정

// 이 코드는 안전합니다.
const element = <h1>{title}</h1>;
// JSX에서 중괄호 {} 안에 값을 넣으면 React가 자동으로 이스케이프 처리함
// 즉, <script> 같은 코드가 들어 있어도 문자열로만 출력되고 실행되지 않음
// 결과적으로 xss(스크립트 삽입 공격)을 방지할 수 있음

/* r1 */
const title1 = Response.potentiallyMaliciousInput;
/* 서버나 외부 입력에서 들어온 값
이름처럼 악의적인 스크립트가 포함되어 있을 수도 있는 문자열이라고 가정 */
const element1 = <h1>{title1}</h1>;
/* JSX에서 중괄호{} 안에 값을 넣으면 React가 자동으로 이스케이프 처리함
즉, <script> 같은 코드가 들어 있어도 문자열로만 출력되고 실행되지 않음
결과적으로 xss(스크립트 삽입 공격)을 방지할 수 있음 */

/* r2 */
const title2 = Response.potentiallyMaliciousInput;
/* 서버나 외부 입력에서 들어온 값
이름처럼 악의적인 스크립트가 포함되어 있을 수도 있는 문자열이라고 가정 */
const element2 = <h1>{title2}</h1>;
/* JSX에서 중괄호{} 안에 값을 넣으면 React가 자동으로 이스케이프 처리함
즉, <script> 같은 코드가 들어 있어도 문자열로만 출력되고 실행되지 않음
결과적으로 xss(스크립트 삽입 공격)을 방지할 수 있음 */

/* r3 */
const title3 = Response.potentiallyMaliciousInput;
/* 서버나 외부 입력에서 들어온 값
이름처럼 악의적인 스크립트가 포함되어 있을 수도 있는 문자열이라고 가정 */
const element3 = <h1>{title3}</h1>;
/* JSX에서 중괄호{} 안에 값을 넣으면 React가 자동으로 이스케이프 처리함
즉, <script> 같은 코드가 들어 있어도 문자열로만 출력되고 실행되지 않음
결과적으로 xss(스크립트 삽입 공격)을 방지할 수 있음 */

/* r4 */
const title4 = Response.potentiallyMaliciousInput;
/* 서버나 외부 입력에서 들어온 값
이름처럼 악의적인 스크립트가 포함되어 있을 수도 있는 문자열이라고 가정 */
const element4 = <h1>{title4}</h1>;
/* JSX에서 중괄호{} 안에 값을 넣으면 React가 자동으로 이스케이프 처리함
즉, <script> 같은 코드가 들어 있어도 문자열로만 출력되고 실행되지 않음
결과적으로 xss(스크립트 삽입 공격)을 방지할 수 있음 */

/* r5 */
const title5 = Response.potentiallyMaliciousInput;
/* 서버나 외부 입력에서 들어온 값
이름처럼 악의적인 스크립트가 포함되어 있을 수도 있는 문자열이라고 가정 */
const element5 = <h1>{title5}</h1>;
/* JSX에서 중괄호{} 안에 값을 넣으면 React가 자동으로 이스케이프 처리함
결과적으로 xss(스크립트 삽입 공격)을 방지할 수 있음 */
