// 배열

/*
 [배열 리터럴 방식]
 길이를 정할 필요 없음
 안의 요소(item)에 따라 자동 변경
 */
var arr = [1, "String", [1, 2, 3], {object: "객체도 들어갑니다."}];
var arr2 = [1, 2, 3, 4];
var arr3 = [5, 6, 7, 8];

console.log(arr[3].object); // 객체도 들어갑니다.

/*
 [배열 함수]
 */
// 배열 길이
console.log(arr2.length); // 4
// 배열 구분자, default 값은 ,
console.log(arr2.join(':')); // 1:2:3:4
// 배열 합치기
console.log(arr2.concat(arr3)); // [1, 2, 3, 4, 5, 6, 7, 8]
// 배열 특정 값 확인, lastIndexOf
console.log(arr2.indexOf(1)); // 0(index 위치), 문자열도 가능
// 배열 마지막 요소 추가
arr2.push(9);
// 배열 마지막 요소 제거
arr2.pop();
// 배열 처음 요소 추가
arr2.unshift(0);
// 배열 처음 요소 제거
arr2.shift();
// 배열 제거 후 추가, (시작,지우는 개수, 추가)
arr2.splice(3, 3, 4);
// 배열인지 아닌지 확인
Array.isArray(arr2); // true


// 배열 반복문
arr2.forEach(function (x, i) {
    console.log(x);
});

// 배열 요소 변경
var arr3 = arr2.map(function (x) {
    return x + 1; // 배열을 반환
});
console.log(arr3);

// 배열 왼쪽부터 조건을 적용하여 하나의 값 만들기
// reduceRight : 오른쪽
arr3 = arr2.reduce(function (pre, cur) {
    return pre + cur;
});
console.log(arr3);

// 특정 조건에 해당하는 배열 걸러내기
arr3 = arr2.filter(function (x) {
    return x % 2 === 0;
})
console.log(arr3); // 2, 4

// 배열의 모든 항목이 만족하면 true
arr3 = arr2.every(function (i) {
    return i % 2 === 1;
});
console.log(arr3); // true

// 배열의 하나의 항목이라도 만족하면 true
arr3 = arr2.some(function (i) {
    return i === 1;
});
console.log(arr3); // true

// 특정 조건에 따라 정렬
arr3 = arr2.sort(function(x, y) {
    return y - x;
});
console.log(arr3); // [4, 3, 2, 1]

// 재귀를 이용한 다차원 배열 생성
// 기존
var array = [];
for (var i = 0; i < 2; i++) {
    array[i] = [];
    for (var j = 0; j < 3; j++) {
        array[i][j] = [];
        for (var k = 0; k < 4; k++) {
            array[i][j][k] = [];
        }
    }
}
// 변환
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;
    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }
    return arr;
}
var arr = createArray(2,3,4);
