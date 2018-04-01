// 변수

/*
 [String]
 큰 따옴표, 작은 따옴표 중 하나 사용
*/
var string = "string" // 큰 따옴표
var string2 = '"string"' // 큰 따옴표가 문자열에 들어 있으면 작은 따옴표로 감싸기
var string3 = "'string'" // 작은 따옴표가 문자열에 들어있으면 큰 따옴표로 감싸기
var string4 = '\'string\'' // 한 가지 따옴표만 쓰고 싶을 때는 \로 이스케이핑

// 문자열 길이
string.length;
// 문자열 쪼개기
string.split("");
// 공백 제거
string.trim();
// 대소문자 변경
string.toUpperCase();
string.toLowerCase();
// 문자열 자르기
string.substr(1, 3);
// 문자열 교체
string.replace('string', 'replaced');

/*
 [Number]
 숫자 사용
 int, long, double 등 구분 없음
*/
var result = 0.0155 + 0.0020; // 0.0175

console.log(0.1 + 0.2); // 0.30000000000000004, 컴퓨터는 2진법으로 계산하기에 오차 발생
// toFixed() : 지정된 소수자리까지 반올림 후 문자열 반환(숫자 변환 필요)
console.log(result.toFixed(2)); // 0.02
// toPrecision() : 지정된 자릿수만큼 표현하되 소수인 경우 앞의 0은 무시 후 문자열 반환(숫자 변환 필요)
console.log(result.toPrecision(2)); // 0.017

// isNaN() : 숫자 판별 함수지만 문제 있음
console.log(isNaN(100)); // false
console.log(isNaN("100")); // false, 문자열 '100' = false

// isNan 보완 함수
function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}
console.log(isNumber("100")); // false

// 문자열 숫자 변환
console.log(parseInt("10만원입니다.")); // 10
console.log(parseFloat("10.5만원입니다.")); // 10.5
console.log(Number("10")); // 10, 문자열이 들어가면 NaN

/*
 [Boolean]
 따옴표 없이 사용
*/
var bool = true;
var bool2 = false;

/*
 [Undefined]
*/
var a; // 변수를 만들었는데 아무 값도 집어 넣지 않을 때 자동으로 할당
console.log(a); // undefined

/*
 [Null]
*/
var b = 123;
b = null; // 빈 값을 변수에 의도적으로 넣을 때 사용
console.log(b); // null

/*
 ES6
 [const, let]
 const : 한 번 초기화하면 다른 값으로 대입 불가할 뿐 배열 요소 변경은 막지 못함
 let : 계속 변경 가능

 블록 스코프 : 해당 변수를 해당 블록에서만 접근 가능
 호이스팅이 일어나지 않음
 */
if (true) {
    const y = 3;
}
console.log(y); // Uncaught ReferenceError: y is not defined

// 배열 요소 변경 불가
const c = [1, 2, 3];
c[0] = 4;