// 적응자

/*
 [adapter 패턴]
 기존에 있던 구조를 새 구조로 유연하게 전환하거나 새 구조에서 기존의 구조로 전환하는 데 사용
 */

var dept = (function() {
    function dept (adapter) {
        this.dept = adapter;
    }
    dept.prototype.work = function() {
        this.adapter.work();
    };
    return dept;
})();


var currentAdapter = {
    vote: function() {
        console.log('현 황제를 계속 지지합니다');
    }
};

var rufusAdapter = {
    vote: function() {
        console.log('루푸스를 황제로 추대합시다');
    }
};

senateSystem = new SenateSystem(currentAdapter);
senateSystem.vote(); // 현 황제를 계속 지지합니다.
senateSystem = new SenateSystem(rufusAdapter);
senateSystem.vote(); // 루푸스를 황제로 추대합시다.

var galbaAdapter = {
    vote: function() {
        console.log('갈바를 황제로 추대합시다');
    }
};
senateSystem = new SenateSystem(galbaAdapter);
senateSystem.vote(); // 갈바를 황제로 추대합시다.