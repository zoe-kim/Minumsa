$(document).ready(function () {
  // Swiper
  const swiper = new Swiper('#cnt1 .swiper-container', {
    direction: 'horizontal',  // 수평 방향으로 슬라이드
    speed: 1500,  // 슬라이드 속도 (기본 300)
    loop: true,  // 무한 반복
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',  // 화살표 모양 페이지네이션
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,  // 자동 실행 시간(3초)
    },
    a11y: {
      prevSlideMessage: '이전 슬라이드 보기',
      nextSlideMessage: '다음 슬라이드 보기',
      firstSlideMessage: '첫번째 슬라이드',
      lastSlideMessage: '마지막 슬라이드',
      }
  });

  // 자동실행과 일시정지 버튼 추가
  $('#cnt1 .swiper-auto-wrap button').on('click', function () {
    const btnNum = $(this).index();
    if (btnNum === 0) {         // 자동실행 0, 일시정지 1
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
    $(this).addClass('hidden').siblings().removeClass('hidden');
  });

  // pc에서 .bottom_btn 클릭 시 #cnt2로 이동
  $("#pc_bottom_btn").on("click", function() {
    fullpage_api.moveTo(2);
  })

  // 태블릿, 모바일에서 .bottom_btn 클릭 시 #cnt2로 이동
  $("#m_bottom_btn").on("click", function() {
    $('html, body').stop().animate({
        scrollTop: $('#cnt2').offset().top
    }, 600);
  })

  // #cnt2 ~ #cnt6이 .active를 가질 때 애니메이션 클래스 추가
  // $(window).on('scroll', function () {
  //   const $cntAni = $('#fullpage .ani');
  //   if ($cntAni.is('.active')) $cntAni.addClass('movetop');
  //   else $cntAni.removeClass('movetop');
  // });


  // #cnt3 #book_list li a에 마우스와 포커스가 진입하거나 빠져 나갈 때
  const $listEle = $('#book_list li a');
  $listEle.on({
    'mouseenter focus': function () {
      $(this).addClass('on').children('.hover_book').stop().slideDown();
    },
    'mouseleave blur': function () {
      $(this).removeClass('on').children('.hover_book').stop().slideUp();
    }
  });
  
});