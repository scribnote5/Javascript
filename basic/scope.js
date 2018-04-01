// 함수의 스코프

/*
 [전역 변수, 지역 변수]
 내부 함수 -> 외부 함수의 변수 : 접근 가능
 외부 함수 -> 내부 함수의 변수 : 접근 불가
 자바스크립트에서 전역변수를 만드는 일은 지양
 => 같은 변수를 사용하는 경우 이전 변수를 덮어쓸 가능성
*/

/*
 [scope chain]
 지역 스코프에서 변수를 찾음 -> 전역 스코프에서 변수를 찾음
 => 꼬리를 물고 계속 범위를 넓히면서 찾는 관계
 */

/*
 [lexical scoping]
 스코프는 함수를 호출할 때가 아니라 선언시 생성
 => 함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로부터 가장 가까운 변수를 계속 참조
 */
var name = 'sdy';

function log() {
    console.log(name);
}

function change() {
    var name = 'ybh';
    log();
}
change(); // ybh

/*
 [네임스페이스]
 고유 네임스페이스를 만들어 변수가 겹치지 않게함
 변수의 접근 제어

 [IIFE(즉시 호출 함수 표현식)]
 *함수 표현* 만 사용 가능
 모듈 패턴으로 함수를 선언하자마자 바로 실행
 function() {}();
*/
// 변수 x에 접근 불가
var newScope = (function () {
    var x = 'local';

    return {
        y: function() {
            console.log(x);
        }
    };
})(); // 실행하면  y: function() { ... } 반환
console.log(newScope.x); // undefined
newScope.y(); // local

