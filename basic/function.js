// 함수

/*
 [함수 선언]
 */
function add(a, b) {
    return a + b
}

/*
 [함수 표현]
 IIFE(즉시 호출 함수 표현식)에서 사용
 */
var add = function (a, b) {
    return a + b;
};
console.log(add(2, 3));

/*
 [기명 함수]
 에러가 발생시 stack trace가 함수의 이름을 포함하여 출력하기 때문에 에러를 찾기 쉬움
 */
var x = function square(y) {
    return y * y;
};
console.log(x  (2)); // 4

/*
 [익명함수]
 함수의 이름이 없음
 */
var x = function (y) {
    return y * y;
};
console.log(x(2)); // 4

/*
[1급 함수]
매개변수로 함수 사용
 */

var callPrintHello = function (func) {
    func();
};
var printHello = function () {
    console.log('안녕하세요');
};
callPrintHello(printHello); // 안녕하세요


/*
 [콜백]
 비동기 프로그래밍 방법
 연산이 끝났을 때 매개변수로 전달한 함수가 실행될 수 있다면 그 시점에 결과를 처리가능
 매개변수로 전달되는 함수를 콜백함수
 중간에 호출되어 상태 정보를 전달하거나 결과 값을 처리하는데 사용
 */

var callbackExample = function (number, callback) {
    // setTimeout 함수를 사용해야 비동기적으로 실행(0초만에 실행)
    setTimeout(function () {
        var sum = 0;

        for (var i = number; i > 0; i--) {
            sum += i;
        }

        // 콜백함수를 받음
       callback(sum);
    }, 0);
};

callbackExample(10, function (result) {
    console.log(result);
}); // 55
console.log('first'); // first가 먼저 출력된 후 55 출력




/*
 [함수형 프로그래밍]
 입출력이 순수해야함(순수함수) => 인자를 제외한 다른 변수를 사용하면 안됨(this 때문에 사실상 불가능함)
 부작용(부산물)이 없어야함 => 원본 데이터는 불변
 함수와 데이터를 중점으로 생각

 참고 : https://www.zerocho.com/category/Javascript/post/576cafb45eb04d4c1aa35078
 */

/*
 [재귀]
 */

var factorial = function(number) {
    if (number > 0) {
        return number * factorial(number - 1);
    } else {
        return 1;
    }
};
factorial(3); // 6
factorial(4); // 24