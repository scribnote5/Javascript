// 실행 컨텍스트

/*
 [실행 컨택스트(코드의 실행 환경)]
 1. 전역 컨텍스트(모든 것을 관리하는 환경, 페이지가 종료될 때까지 유지) 생성, 컨텍스트 안에 변수객체(arguments, variable), scope chain, this 생성
    '전역 컨텍스트': {
      변수객체: {
        arguments: null,
        variable: ['name', 'printWord', 'print'],
      },
      scopeChain: ['전역 변수객체'],
      this: window,
    }

 2. 함수 호출 시마다 컨텍스트 생성, 컨텍스트 안에 변수객체(arguments, variable), scope chain, this 생성
    'print 컨텍스트': {
      변수객체: {
        arguments: null,
        variable: ['name'], // 초기화 후 [{ name: 'ybh' }]가 됨
      },
      scopeChain: ['print 변수객체', '전역 변수객체'],
      this: window,
    }

    'printWord 컨텍스트': {
      변수객체: {
        arguments: [{ word : 'hello' }],
        variable: null,
      },
      scopeChain: ['printWord 변수객체', '전역 변수객체'],
      this: window,
    }

 3. 컨텍스트 생성 후 함수가 실행, 사용되는 변수들은 변수 객체 안에서 값을 찾고, 없다면 스코프 체인을 따라 올라가며 찾음

 4. 함수 실행이 마무리되면 해당 컨텍스트는 사라짐, (클로저 제외)페이지가 종료되면 전역 컨텍스트가 사라짐

 [호이스팅]
 변수를 선언하고 초기화시 *함수 선언* 부분이 최상단으로 끌어올려지는 현상
 */

var name = 'sdy'; // (1)선언 (4)대입

// 함수 표현
var printWord = function (word) { // (2)선언 (5)대입
    console.log(word + ' ' + name); // (10)
}

// 함수 선언
function print() { // (3)선언, 대입 => 초기화(호이스팅)
    var name = 'ybh'; // (7)
    console.log(name); // (8)
    printWord('hello'); // (9)
}

print(); // (6)

/*
 [클로저]
 비공개 변수를 가지고 있는 함수
 사용자를 통제하기 위한 기본적인 방법
 잘못 사용했을 시 성능 문제와 메모리 문제 발생
 scope chain을 거슬러 올라가기에 조금 느림
 */

var makeClosure = function() {
    var name = 'sdy';

    return function () {
        console.log(name);
    }
};
var closure = makeClosure(); // function () { console.log(name); }
closure(); // 'sdy'

// 전역 컨텍스트 생성 => makeClosuer 컨텍스트 생성 => closure 컨텍스트 생성(scopeChain: ['closure 변수객체', 'makeClosure 변수객체', '전역 변수객체'])

