$(document).ready(function () {
  // Swiper
  const swiper = new Swiper('#cnt1 .swiper-container', {
    direction: 'horizontal',  // 수평 방향으로 슬라이드
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
      delay: 4000,  // 자동 실행 시간(4초)
    },
    a11y: {
      prevSlideMessage: '이전 슬라이드 보기',
      nextSlideMessage: '다음 슬라이드 보기',
      firstSlideMessage: '첫번째 슬라이드',
      lastSlideMessage: '마지막 슬라이드',
      }
  });

  // pc에서 .bottom_btn 클릭 시 cnt2로 이동
  $("#pc_bottom_btn").on("click", function() {
    fullpage_api.moveTo(2);
  })

  // 태블릿, 모바일에서 .bottom_btn 클릭 시 cnt2로 이동
  $("#m_bottom_btn").on("click", function() {
    $('html, body').stop().animate({
        scrollTop: $('#cnt2').offset().top
    }, 600);
  })

  // #book_list li a에 마우스와 포커스가 진입하거나 빠져 나갈 때
  const $listEle = $('#book_list li a');
  $listEle.on({
    'mouseenter focus': function () {
      $(this).addClass('on').children('.hover_book').stop().slideDown();
    },
    'mouseleave blur': function () {
      $(this).removeClass('on').children('.hover_book').stop().slideUp();
    }
  });
  
  //cnt6 .thumb_box에 마우스와 포커스가 진입하거나 빠져 나갈 때(dim 등장처리는 css)
  const $thumb = $('.thumb_box');
  $thumb.on({
    'mouseenter focus': function () {
      $(this).addClass('on');
    },
    'mouseleave blur': function () {
      $(this).removeClass('on');
    }
  });

});