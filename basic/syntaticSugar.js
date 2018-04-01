// syntatic sugar

/*
 [syntatic sugar]
 프로그래밍 할 때 문법적으로 알아두면 편한 것
 */

/*
 [보호 연산과 기본값 연산]
 || : 값이 false 성질을 띄지 않을 때까지 다음 것을 찾음, 기본 값을 정할 때 사용
 && : 값이 true 성질을 띄지 않을 때까지 다음 것을 찾음 , 필수 조건을 정할 때 사용
 */

// || 이용해 코드량을 줄임, 두 개는 같음
// 기존
var a;
var b;
var c;
var d;
if (b) {
    a = b;
} else if (c) {
    a = c;
} else {
    a = d;
}
// 변환
var a = b || c || d;

// && 이용해 코드량을 줄임, 두 개는 같음
// 기존
var a = b;
if (b) {
    a = c;
    if (c) {
        a = d;
    }
}
// 변환
var a = b && c && d;

// || 기본 값 특징(매개변수가 아무것도 없으면 빈 배열 출력)을 사용해 코드량을 줄임
// 기존
function setting(option) {
    var result = option || [];
    return console.log(result);
}
setting([1, 2, 3]); // [1, 2, 3]
setting(); // []
// 변환
var option;
var result = option ? option : [];
console.log(result);

// && 필수 조건 특징(매개변수는 무조건 값이 들어와야 'hello' 출력)을 사용해 코드량을 줄임
// 기존
function condition(cond) {
    var result = cond && 'hello';
    return console.log(result);
}
condition(true); // 'hello';
condition(); // undefined
// 변환
var object = {
    "a": 'a',
    "b": 'b'
};
var a = object && object.a && object.b
console.log(a);

