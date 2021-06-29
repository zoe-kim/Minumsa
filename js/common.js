$(document).ready(function() {
  // 마우스 커서 따라다니는 원 이벤트
  $('#wrap').on('mousemove', function (e) {
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    console.log(mouseX, mouseY);
    gsap.to('#circle', {left: mouseX-28, top: mouseY-26, duration: 0.2});
});

  // #pc_head에 마우스 진입 시 .on을 가지도록
  $('#pc_head').on({
    'mouseenter focusin': function () {
      $(this).addClass('on');
    },
    'mouseleave focusout': function () {
      // #pc_head.active를 가지지 않을 경우, 헤더에서 마우스가 나가면 .on 제거
      if (!$(this).is('.active')) $(this).removeClass('on');
    }
  });

  // 태블릿, 모바일에서 스크롤 내릴 시 .on을 가지도록
  $(window).on('scroll', function () {
    const scrollY = $(this).scrollTop();
    if (scrollY > 0) $('#m_head').addClass('on');
    else $('#m_head').removeClass('on');
  });

  // .mGnb_wrap 열기
  const $mGnbwrap = $('#m_head .mGnb_wrap');
  $('#m_head .mGnb_open_btn').on('click', function () {
    const $first =  $mGnbwrap.find('.first');
    const $last =  $mGnbwrap.find('.last');
    const $openBtn = $(this);

    // .mGnb_dim 생성 후 fadeIn으로 서서히 나타내기
    $openBtn.after('<div class="mGnb_dim"></div>').next().stop().fadeIn(3000);
    $mgnbWrap.css('visibility', 'visible').stop().animate({left: 0}, 300, function () {
      $first.focus();  //포커스 아웃라인 안보인다
      $('html').css({overflowY: 'hidden', height: '100%'});
    });

    //키보드 제어 접근성 - keydown
    //$first에서 shift+tab 눌러 이전으로 나가는 경우 마지막으로 포커스 이동
    $first.on('keydown', function (e) {
      //console.log(e.keyCode);  //tab => 9
      if ( e.shiftKey && e.keyCode === 9 ) {
        e.preventDefault();
        $last.focus();
      }
    })

    //$last에서 (shift는 누르면 안됨)tab만 눌러 다음으로 나가는 경우 처음으로 포커스 이동
    $last.on('keydown', function (e) {
      if (!e.shiftKey && e.keyCode === 9) {
        e.preventDefault();
        $first.focus();
      }
    });

    //닫기 버튼 클릭으로 닫아주기 : animate() -> 완료함수 none, 열기버튼으로 포커스 강제 이동
    $mgnbWrap.find('.btn_gnb_close').on('click', function () {
      $('html').removeAttr('style');
      $('#mgnbDim').stop().fadeOut('fast', function () {
        $(this).remove();
      });

      $mgnbWrap.stop().animate({left: '-100%'}, 300, function () {
        $(this).css('visibility', 'hidden');
        $openBtn.focus();
        //열려진 #mGnb는 닫아준다 - 추가 - 연결해서 하자!
        $('#mGnb ul li.on').removeClass('on').children('ul').css({visibility: 'hidden', maxHeight: 0});
      });
    });
  });


});