// 생성자

// 변수 Vehicle과 생성자 Vehicle 이름이 같지만 IIFE라서 Vehicle에 생성자 Vehicle을 덮어씀
var Vehicle = (function() {
    function Vehicle(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    Vehicle.prototype.drive = function () {
        console.log(this.name + ' runs at ' + this.speed);
    };

    return Vehicle;
})();

var truck = new Vehicle('aaa', 'sss');
truck.drive()
console.log(truck)