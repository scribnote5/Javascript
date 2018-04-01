// Window

/*
 [Window]
 브라우저 전체를 담당
 모든 객체의 조상(전역객체)
 window 생략가능, ex) window.parseInt() : x
 Window 객체 ⊃ Document 객체

 [Document]
 웹사이트만 담당
 */

// 현재 창 닫음
window.close();
// 새 창 열음
var tab = window.open();
// 새 창에서 원래 창 접근
tab.opener.document.write('Hello');
// 주소창 인코딩, 디코딩
// 주소에 한글이 들어가면 한글이 깨짐
window.encodeURI("한글 깨짐 변환");
window.decodeURI("한글 깨짐 복구");
// 실행 지연
var timeOut = setTimeout(function() {
    console.log('1초 뒤 실행');
}, 1000);
clearTimeout(timeOut);
// 실행 반복
var interval = setInterval(function() {
    console.log('1초 마다 실행');
}, 1000);
clearInterval(interval);
// 현재 적용된 CSS 속성 확인
console.log(getComputedStyle(document.getElementById('css')));

