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



});