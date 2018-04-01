// singleton

/*
 [singleton]
 단 하나의 객체만 생성을 보장
 객체 리터럴 방식
 */

var singleton = (function() {
    var instance;
    var a = 'hello';

    function initiate() {
        return {
            a: a,
            b: function() {
                console.log(a);
            }
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = initiate();
            }
            return instance;
        }
    }
})();

var first = singleton.getInstance();
var second = singleton.getInstance();
console.log(second)
console.log(first === second); // true;