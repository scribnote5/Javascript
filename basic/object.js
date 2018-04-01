// 객체

/*
 [객체 리터럴 방식]
 { } 를 사용해서 만든 객체 생성방식
*/
var member = {
    id: 'scribnote5',
    name: 'sdy',
    grade: 3,
    location: {
        country: 'korea',
        city: 'sejong'
    },
    printName: function () {
        console.log(this.name);
    }
};

// 객체 접근
console.log(member); // Member { id: 'scribnote5', name: 'sdy', grade: 3 }
console.log(member.id); // scribnote5, member['id'] 같음
console.log(member.location.country); // korea
member.printName(); // sdy

// 객체 속성 삭제
delete member.id;

// 객체 생성
member.id = "scribnote5";
console.log(member.id) // scribnote5

/*
 [생성자]
 */
function Member(id, name, grade) {
    this.id = id;
    this.name = name;
    this.grade = grade;

    printName = function () {
        console.log(this.name);
    }
}

/*
 [프로토 타입]
 같은 생성자로부터 만들어진 객체들은 모두 이 원형 객체 공유
 => 메소드, 속성이 한 번만 만들어지기에 메모리 절약

 참고 : 구글 드라이브 Prototype
 */
function Member(id, name, grade) {
    this.id = id;
    this.name = name;
    this.grade = grade;

    Member.prototype.printName = function () {
        console.log(this.name);
    }
}

var member2 = new Member('scribnote5', 'sdy', 3);

/*
 [상속]
 */
function Vehicle(name, speed) {
    this.name = name;
    this.speed = speed;

    Vehicle.prototype.drive = function () {
        console.log(this.name + ' runs at ' + this.speed)
    };
}

function Truck(name, speed, maxSpeed) {
    // Vehicle의 this, arguments 적용, maxSpeed는 Vehicle이 가지고 있지 않으므로 무시
    Vehicle.apply(this, arguments);

    this.maxSpeed = maxSpeed;
}

// Truck의 prototype, Vehicle의 prototype 연결, new Vehicle() 차이점은 객체는 만들되 생성자는 실행 안함
Truck.prototype = Object.create(Vehicle.prototype);

// Sedan.prototype.constructor === Vehicle 이므로 생성자 변경
Truck.prototype.constructor = Truck;
Truck.prototype.boost = function () {
    console.log(this.name + ' boosts its speed at ' + this.maxSpeed);
};

var truck = new Truck('Poter', 100, 200);
truck.drive();
truck.boost();

/*
 [Object]
 모든 객체의 최종 prototype

 참고 : https://www.zerocho.com/category/Javascript/post/573dbc9370ba9c603052cc9a
*/

// typeof : 객체의 타입 반환
var a = 1;

console.log(typeof a); // number
// 배열 검사
console.log(Array.isArray(a));
// null 검사
console.log(a === null);

// delete : 객체내의 속성 제거
delete obj.type;

/*
 ES6
 [객체 리터럴 방식]
 'function() { }' => '() { } =>'

 */

var sayYeah = function() {
    alert('Yeah');
};
var a = 1;
var b = 'Wow';
var object = {
    sayHello: function() {
        alert('hello');
    },
    sayYeah: sayYeah
};
object[a + 3] = 'four';
object['say' + b] = function() {
    alert('Wow');
};

const a = 1;
const b = 'Wow';
const sayYeah = () => { // var sayYeah = function() {
    alert('Yeah');
};
const object2 = {
    sayHello() { // sayHello: function() {
        alert('hello');
    },
    sayYeah, // sayYeah: sayYeah
    [a + 3]: 'four', // 4: 'four'
    ['say' + b]() {
        alert('Wow');
    }  // sayWow() { alert('Wow') }
};