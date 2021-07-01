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

  // #book_list li a에 마우스와 포커스가 진입하거나 빠져 나가는 이벤트
  const $listEle = $('#book_list li a');
  $listEle.on({
    'mouseenter focus': function () {
      $(this).addClass('on');
      $(this).children('.hover_book').stop().slieDown();
    
    },
    'mouseleave blur': function () {
      $(this).removeClass('on');
      $(this).children('.hover_book').stop().slieUp();
    }
  });
  /* $listEle.on({
    // 마우스와 포커스가 진입하면, .book_dim 생성하고 fadeTo로 서서히 나타내기
    'mouseenter focusin': function () {
      $(this).after('<div class="book_dim"></div>').next().stop().fadeTo('fast', 0.7);
      // 하단에서 등장 애니메이션
      //$('.hover_book').css('visibility', 'visible').stop().animate({height: '100%'}, 300);
    },
    // 다시 빠져나가면, fadeTo로 .book_dim 서서히 없앤 뒤 완전히 제거
    'mouseleave focusout': function () {
      $('.book_dim').stop().fadeTo('slow', 0, function () {
        $(this).remove();
      });
      // 하단으로 다시 사라지는 애니메이션
      $('.hover_book').stop().animate({height: 0}, 300, function () {
        $(this).css('visibility', 'hidden');
      });
    }
  }); */




  
});