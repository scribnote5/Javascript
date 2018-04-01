// 메모이제이션

/*
 [메모이제이션]
 반복되는 결과를 메모리에 저장해서 다음에 같은 결과가 나올 때 빨리 실행하는 기법
 */
var factorial = (function() {
    var save = {};

    var fact = function(number) {
        if (number > 0) {
            var saved = save[number - 1] || fact(number - 1);
            var result = number * saved;
            save[number] = result; // 이전 결과를 저장
            console.log(saved, result);
            return result;
        } else {
            return 1;
        }
    };
    return fact;
})();
factorial(7); // 1 1, 1 2, 2 6, 6 24, 24 120, 120 720, 720 5040
console.log()
factorial(7); // 720 5040

// 피보나치 수열
var fibonacci = (function() {
    var save = {};
    var fibo = function(number) {
        if (number < 2) {
            return number;
        } else {
            var saved1 = save[number - 1] || fibo(number - 1);
            var saved2 = save[number - 2] || fibo(number - 2);
            var result = saved1 + saved2;
            save[number] = result;
            console.log(saved1, saved2, result);
            return result;
        }
    };
    return fibo;
})();
fibonacci(5); // 1 0 1, 1 1 2, 2 1 3, 3 2 5, 5
console.log()
fibonacci(5); // 3 2 5, 5