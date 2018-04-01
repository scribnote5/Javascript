// method

/*
 [call, apply]
 함수의 인자를 변경할 때 사용
 다른 객체의 함수를 자신의 함수처럼 호출하여 사용가능

 call : 보통 함수와 똑같이 인자를 넣음
 apply : 인자를 하나로 묶어 배열로 만들어 넣음

 *첫 번째 인자는 다른 객체의 함수를 자기 것 처럼 사용하며 null == this*

 [arguments]
 call, apply, bind 함수는 함수의 arguments를 조작할 때 사용
 함수가 처음부터 갖고 있는 숨겨진 속성
 함수에 들어온 인자를 배열형식(배열이 아님)을 반환
*/

var member = {
    string: 'sdy',

    print: function () {
        console.log(this.string);
    }
};

var member2 = {
    string: 'ybh'
};

member.print(); // 'sdy';
member.print.call(member2); // 'ybh'


function example() {
    console.log(arguments);
    // 실제 배열이 아니기에 배열 메소드를 사용하면 에러 발생하므로 call, apply 함수를 이용해 join 함수를 빌려서 사용
    console.log(Array.prototype.join.call(arguments));
}

example(1, 'string', true); // [1, 'string', true]

/*
 [bind]
 함수가 가리키는 this만 변경하고 호출하지 않음
 call, apply와 다르게 호출만 하고 함수 반환
 */

var member = {
    string: 'sdy',

    print: function () {
        console.log(this.string);
    }
};

var member2 = {
    string: 'ybh'
};

var print2 = member.print.bind(member2);
print2(); // ybh

/*
 [커링]
 커링은 바인드의 예로 많이 사용하지는 않음
 여러 개의 인자를 받는 함수 있을 때 일부의 인자만 받는 함수를 만드는 기법
 이전 상태들이 저장된 새로운 함수를 만들 수 있음
 */

var plus = function (a, b, c) {
    return a + "," + b + "," + c;
};

var plusa = plus.bind(this, 1);
console.log(plusa(2, 3)); // 6

var plusb = plusa.bind(this, 2);
console.log(plusb(4)); // 7

var plusab = plus.bind(this, 1, 3);
console.log(plusab(5)); // 9

/*
 [커링의 잘못된 예]
 여러 개의 인자를 받는 함수의 일부만 받도록 바꾸지 않고 처음부터 하나씩만 받도록 함
 */
function multiply(x) {
    return function (y) {
        return x * y;
    };
}

console.log(multiply(4)(8)); // 32

/*
 [Overloading]
 자바처럼 하면 제일 아래 선언 함수가 같은 이름의 함수를 덮어 씀
 자바스크립트에서는 Overloading 없지만 비슷하게 구현 가능

void overload(){
  System.out.println("매개변수 0개");
}

void overload(int i, int j){
  System.out.println("매개변수 "+ i + " 그리고 " + j);
}

// 마지막 함수 실행
void overload(double d){
  System.out.println("매개변수 " + d);
}
 */
function overload(a, b, c) {
    if (typeof c === 'function') { // 문자열 두 개와 콜백
        c(a, b);
    } else if (typeof b === 'function') { // 옵션 객체와 콜백
        b(a);
    } else { // 콜백 하나
        a();
    }
}

function callback(a, b) {
    if (b) {
        console.log('문자열', a, b);
    } else if (a) {
        console.log('옵션 객체', a);
    } else {
        console.log('매개변수 없음');
    }
}

overload('sdy', '123', callback); // 문자열
overload({name: 'sdy', value: '123'}, callback); // 옵션 객체
overload(callback); // 매개변수 없음

/*
 [Overriding]
 */
var Animal = function () {
};
Animal.prototype.move = function () {
    console.log('동물이 움직여요');
};

var Cat = function () {
    Animal.apply(this, arguments); // 속성 상속받는 방법
}

Cat.prototype = Object.create(Animal.prototype); // 프로토타입 상속 방법
Cat.prototype.constructor = Cat; // 버그 패치

console.log(new Animal().move()); // 동물이 움직여요
console.log(new Cat().move()); // 동물이 움직여요

Cat.prototype.move = function (sound) { // 오버라이딩
    console.log(sound + ' 움직여요');
    return '야옹';
};

console.log(new Cat().move('살금살금')); // 살금살금 움직여요