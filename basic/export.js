// 모듈화

/*
 [module.exports]
 exports 사용시 모듈을 불러들인 쪽으로 객체를 전달할 수 없음
 module.exports에 의해 무시되는 상황 발생
 */

// 1번째 방법
module.exports  = {
    string: 'sdy',

    print: function () {
        console.log(this.string);
    }
};

// 2번째 방법
var member2 = {
    string: 'sdy',

    print: function () {
        console.log(this.string);
    }
};

module.exports = member2;