$(document).ready(function() {

  // #pc_head가 on을 가질 때
  $('#pc_head').on({
    'mouseenter focusin': function () {
      $(this).addClass('on');
    },
    'mouseleave focusout': function () {
      // #pc_head.active를 가지지 않을 경우, 헤더에서 마우스가 나가면 .on 제거
      if (!$(this).is('.active')) $(this).removeClass('on');
    }
  });


  // 마우스 커서 따라다니는 원 이벤트
  $('#wrap').on('mousemove', function (e) {
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    console.log(mouseX, mouseY);
    /* 
    <애니메이트를 대신하는 플러그인>
    gsap.to('#box', {rotation: 27, x: 100, duration: 1});
    첫 번째 파라미터는 트윈 할 대상(Target)
    두 번째 속성(Properties)
    시작 속성에서 끝 속성으로 변화가 발생
    */
    gsap.to('#circle', {left: mouseX-28, top: mouseY-26, duration: 0.2});
});



});