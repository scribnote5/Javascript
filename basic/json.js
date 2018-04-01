// JSON

/*
 [JSON (JavaScript Object Notation)]
 객체를 사용해서 데이터를 표현
 함수는 들어갈 수 없음
 작은따옴표 사용불가 => 큰따옴표 사용
 */

var example = {
    "data1": "String",
    "data2": "Parsed"
};
// 문자열 변경
var string = JSON.stringify(example);
console.log(string)

// JSON 변경
var parsed = JSON.parse(string);
console.log(parsed)

/*
 [객체 deep copy]
 */
// 객체를 '문자열'로 변경 후 객체로 변경
var example2 = JSON.parse(JSON.stringify(example));

