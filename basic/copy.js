// 객체 복사

/*
 [deep copy 배열]
 array.slice(0) : 배열을 자르는데 0개만큼 자르므로 그대로 반환
 */
var array = ['a', 'b', 'c'];
// 유사배열을 사용할 수 있기에 Array.prototype.slice.call 사용
var deep = Array.prototype.slice.call(array);
deep[0] = 'd';
console.log(array); // ['a', 'b', 'c']
console.log(deep); // ['a', 'b', 'c']

/*
 [deep copy 객체]

 참고 : JSON
 */

/*
 [deep copy 객체(순수 자바스크립트)]
 */
function copyObj(obj) {
    var copy = {};
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = copyObj(obj[attr]);
        }
    }
    return copy;
}

var obj = {a: 1, b: 2};
var obj2 = copyObj(obj);
obj2.a = 3;
console.log(obj); // { a: 1, b: 2 }
console.log(obj2); // { a: 3, b: {} }


/*
 [함수 복사]
 bind 사용
 */
var func = function () {
    console.log('hi');
};
func2 = func.bind(null);
func2(); // 'hi'

