// module

/*
 [모듈 패턴, IIFE(즉시 호출 함수 표현식) ]
 함수 선언하자마자 바로 실행
 function() {})();
*/
// 변수 x에 접근 불가
var newScope = (function () {
    var x = 'local';

    return {
        y: function() {
            console.log(x);
        }
    };
})();

console.log(newScope)