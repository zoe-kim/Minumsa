$(document).ready(function () {
    // fullpage : swiper와 충돌때문에 index에 위치

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
        delay: 5000,  // 자동 실행 시간(5초)
      },
      a11y: {
        prevSlideMessage: '이전 슬라이드 보기',
        nextSlideMessage: '다음 슬라이드 보기',
        firstSlideMessage: '첫번째 슬라이드',
        lastSlideMessage: '마지막 슬라이드',
      },
    });
  
    // 자동실행과 일시정지 버튼 추가
    $('#cnt1 .swiper-auto-wrap button').on('click', function () {
      const btnNum = $(this).index();
      console.log(btnNum);  //자동실행0,일시정지1 
      if (btnNum === 0) {
        swiper.autoplay.start();
      } else {
        swiper.autoplay.stop();
      }
      $(this).addClass('hidden').siblings().removeClass('hidden');
    });
  
    //본문2 pc일 경우만 제어
    let timer = 0;
    $(window).on('resize', function (e) {
      //#cnt2 .txtbox img의 높이를 0으로 표시하는 경우가 생겨서 load 이벤트 추가
      const winWid = $(this).width();
      clearTimeout(timer);
  
      timer = setTimeout(function() {
        //초기설정:const boxHei = .txtbox높이 - .btn_more의 높이
        if ($(window).width() > 1080) {
          const boxHei = 79 + $('#cnt2 .txtbox strong').outerHeight(true) + $('#cnt2 .txtbox p').outerHeight(true);
          console.log(boxHei, $('#cnt2 .txtbox img').outerHeight(true), $('#cnt2 .txtbox strong').outerHeight(true), $('#cnt2 .txtbox p').outerHeight(true));
          $('#cnt2 .txtbox').css('height', boxHei);
  
          //마우스, 키보드 제어
          $('#cnt2 ul li').attr('tabIndex', 0);
          $('#cnt2 ul li').on({
            'mouseenter focusin': function () {
              $(this).addClass('active').children('.txtbox').css('height', 'auto');
              console.log(winWid, 'mouseenter');
            },
            'mouseleave focusout': function () {
              $(this).removeClass('active').children('.txtbox').css('height', boxHei);
              console.log(winWid, 'mouseleave');
            }
          });
        } else {
          console.log(winWid, 'mobile');
          $('#cnt2 ul li').removeAttr('tabIndex class').find('.txtbox').removeAttr('style');
        }
      }, 50);
    });
    $(window).trigger('resize');
      //본문2 마우스, 키보드 제어로 클래스 추가 => 키보드제어로 더보기 버튼에 포커스를 보내려면 display: none 대신 opacity로 제어 => 스크립트로 높이값 제어
      
  
  });