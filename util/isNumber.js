// 숫자 판별

/*
 숫자인지 아닌지를 판별
 isNaN() 함수 보완
 */
function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}
