// 연산자

/*
 [== 연산자]
  0, -0, null, false, NaN, undefined, '' : boolean false
  비교연산시 자동으로 자료형 변환 후 값 비교
 */
console.log(0 == ''); // true
console.log(0 == false); // true
console.log(0 == []); // true

// [] 는 예외
if([]){
    console.log("실행됩니다.")
}

/*
 [===]
 자료형 변환 후 값 비교
 == 대신 === 사용
  */
console.log(0 === ''); // false
console.log(0 === false); // false
console.log(0 === []); // false