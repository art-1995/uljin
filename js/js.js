$(document).ready(function () {

  $(".all-wrap .top-wrap .top ul .arr a").on('click', function () {
    $(this).next(".click-list").slideToggle(60);
  });
  $(".all-wrap .top-wrap .top .m-menu li a").on('click', function () {
    $(this).next(".click-list").slideToggle(60);
  });

  


  /*글자 따라다니는 애니메이션*/


  function Box1__init() {
    var $itemBottomLine = $('.header-wrap > .menu > .item-bottom-line');

    $('.header-wrap > .menu .main-menu > li').mouseenter(function () {
      var $this = $(this);
      var left = $this.position().left;
      var width = $this.width();
      $itemBottomLine.stop().animate({
        'left': left
      }, 300);
      $itemBottomLine.css('width', width);
    });

    $('.header-wrap > .menu').mouseleave(function () {
      setTimeout(function () {
        $itemBottomLine.css('left', '');
      }, 300);
    });

    $('.header-wrap > .menu .main-menu > li').eq(0).mouseenter();
  }

  Box1__init();


  /*헤더 2차메뉴*/


  $(".all-wrap .header .header-wrap > .menu .main-menu .menu-1").mouseover(function () {
    $('.header .item-bottom-line').addClass("on");
    $('.all-wrap .header .header-wrap').addClass("on");
    $('.all-wrap .header .header-wrap .loupe-wrap').addClass("on");
    $(this).children(".all-wrap .header .header-wrap > .menu .hover-menu").stop().slideDown(200);
  });

  $(".all-wrap .header .header-wrap > .menu .main-menu .menu-1").mouseleave(function () {
    $('.header .item-bottom-line').removeClass("on");
    $('.all-wrap .header .header-wrap').removeClass("on");
    $('.all-wrap .header .header-wrap .loupe-wrap').removeClass("on");
    $(this).children(".all-wrap .header .header-wrap > .menu .hover-menu").stop().slideUp(200);
  });


  $(".wrapper > .menu .main-menu .menu-1 > a").on('click', function () {
    $(this).next(".wrapper > .menu .main-menu .menu-1 > .hover-menu").slideToggle(100);
  });

  $(".header .header-wrap > .m-head-menu").click(function () {
    var thisIndex = $(this).index();
    if ($(".wrapper > .menu").eq(thisIndex).hasClass("active")) {
      $(".wrapper > .menu").removeClass("active");
      $(".wrapper").removeClass("active");
    } else {
      $(".wrapper").addClass("active");
      $(".wrapper > .menu").removeClass("active");
      $(".wrapper > .menu").eq(thisIndex).addClass("active");
    }
  });
  $(".wrapper > .menu-left").click(function () {

    $(".wrapper > .menu").removeClass("active");
    $(".wrapper").removeClass("active");


  });




  /*스와이퍼 슬라이더*/

  var swiper = new Swiper('.swiper-container1', {
    spaceBetween: 30,
    effect: 'fade',
    autoplayDisableOnInteraction: false,
    loop: true,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    on: {
      slideChange: function () {
        $('.slide-txt').removeClass('active');
        $('.slide-txt').eq(this.realIndex).addClass('active');
      }
    }

  });

  // var swiper = new Swiper(".swiper-container2", {
  //   cssMode: true,
  //   loop: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev"
  //   },
  //   pagination: {
  //     el: ".swiper-pagination"
  //   },
  //   mousewheel: true,
  //   keyboard: true
  // });
  /*유튜브 화살표 이미지&텍스트*/

  function SliderBox1__init() {
    const $swiperSlide = $('.slider-box-1 .swiper-slide');
    const $swiperSlide__length = $swiperSlide.length;
    $('.slider-box-1 .swiper-slide').each(function (index, node) {
      const $node = $(node);

      const no = parseInt($node.attr('data-no'));
      const leftNo = no == 1 ? $swiperSlide__length : no - 1;
      const rightNo = no == $swiperSlide__length ? 1 : no + 1;

      $node.attr('data-leftNo', leftNo);
      $node.attr('data-rightNo', rightNo);
    });

    function updateBottomImg() {
      let $currentSlide = $('.slider-box-1 .swiper-slide.swiper-slide-active').eq(0);

      const leftNo = parseInt($currentSlide.attr('data-leftNo'));
      const rightNo = parseInt($currentSlide.attr('data-rightNo'));

      let $leftSlide = $('.slider-box-1 .swiper-slide[data-no="' + leftNo + '"]').eq(0);
      let $rightSlide = $('.slider-box-1 .swiper-slide[data-no="' + rightNo + '"]').eq(0);

      let leftImgUri = $leftSlide.attr('data-thumb-img-url');
      let leftImgText = $leftSlide.attr('data-text');
      let rightImgUri = $rightSlide.attr('data-thumb-img-url');
      let rightImgText = $rightSlide.attr('data-text');

      $('.slider-box-1 .swiper-button-prev-bottom-img').css('background-image', 'url("' + leftImgUri + '")');
      $('.slider-box-1 .swiper-button-prev-bottom-text').text(leftImgText);

      $('.slider-box-1 .swiper-button-next-bottom-img').css('background-image', 'url("' + rightImgUri + '")');
      $('.slider-box-1 .swiper-button-next-bottom-text').text(rightImgText);
    }

    const swiper = new Swiper('.slider-box-1 > .swiper-container', {
      loop: true,

      // If we need pagination
      pagination: {
        el: '.slider-box-1 .swiper-pagination',
        clickable: true
      },

      // Navigation arrows
      navigation: {
        nextEl: '.slider-box-1 .swiper-button-next',
        prevEl: '.slider-box-1 .swiper-button-prev',
      },
      on: {
        slideChangeTransitionEnd: function () { // slideChangeTransitionEnd: function(){
          updateBottomImg();

          let $currentSlide = $('.slider-box-1 .swiper-slide.swiper-slide-active').eq(0);
          const no = parseInt($currentSlide.attr('data-no'));

          if (no == 1) {
            $('body').css('background-color', '');
            $('body').css('color', '');
          } else if (no == 2) {
            $('body').css('background-color', '');
            $('body').css('color', '');
          } else if (no == 3) {
            $('body').css('background-color', '');
            $('body').css('color', '');
          } else if (no == 4) {
            $('body').css('background-color', '');
            $('body').css('color', '');
          } else if (no == 5) {
            $('body').css('background-color', '');
            $('body').css('color', '');
          }
        },
      },
    });
  }

  SliderBox1__init();

  /**현재시간&날씨**/

  $(function () {
    function widgetTime() {
      var textTime = $('.widget_time .current_time'),
        textDay = $('.widget_time .current_day'),
        arrayDay = ['일', '월', '화', '수', '목', '금', '토'];

      function setTime() {
        var dateNew = new Date(),
          nowYear = dateNew.getFullYear().toString(),
          nowMonth = (dateNew.getMonth() + 1).toString(),
          nowDate = dateNew.getDate().toString(),
          nowDay = ' ' + arrayDay[dateNew.getDay()] + '',
          nowHour = dateNew.getHours().toString(),
          nowMinute = dateNew.getMinutes().toString(),
          nowSecond = dateNew.getSeconds().toString(),
          nowTimeFull,
          nowDayFull;
        if (nowMonth.length < 2) nowMonth = '0' + nowMonth;
        if (nowDate.length < 2) nowDate = '0' + nowDate;
        if (nowHour.length < 2) nowHour = '0' + nowHour;
        if (nowMinute.length < 2) nowMinute = '0' + nowMinute;
        if (nowSecond.length < 2) nowSecond = '0' + nowSecond;
        nowTimeFull = [nowHour, nowMinute, nowSecond].join(':');
        nowDayFull = [nowMonth, nowDate, nowDay].join('.');

        textTime.find('.hour').text(nowHour + ':');
        textTime.find('.minute').text(nowMinute);
        textDay.text(nowDayFull);
      };
      setInterval(function () {
        setTime();
      }, 200);
    }
    widgetTime();


    function widgetWeather() {



    }
    widgetWeather();


  });

  const weather = document.querySelector(".weather");
  const API_KEY = "adcc16ec6bcfad5423232f0302d3f366";
  const COORDS = "coords";

  $.ajax({
    url: 'api.openweathermap.org/data/2.5/weather?q=pohang&appid=adcc16ec6bcfad5423232f0302d3f366&units=metric',
    dataType: 'json',
    type: 'GET',
    success: function (data) {
      var $Temp = Math.floor(data.main.temp) + 'ºC';

      $('.CurrTemp').prepend($Temp);
    }
  })

  /*플레이스 탭메뉴*/
  $(".tab_title li").click(function () {
    var idx = $(this).index();
    var list = $(".tab_title li").eq(idx).index();
    var image = $(".map-img > div").eq(idx).index();
    console.log(list)

    var t = $(".map-img > l-map").index();
    $(".tab_title li").removeClass("on");
    $(".tab_title li").eq(idx).addClass("on");
    console.log(image);
    if (image == list) {
      $(".place-box > div").removeClass("on")
      $(".place-box > div").eq(idx).addClass("on");
      $(".map-img > div").removeClass("on")
      $(".map-img > div").eq(idx).addClass("on");
    }

  });


  /*섹션3 hover*/

  $(".inner-box > .txt-box1").mouseover(function () {
    $('.all-wrap .section3').addClass("active1");
  });
  $(".inner-box > .txt-box1").mouseleave(function () {
    $('.all-wrap .section3').removeClass("active1");
  });

  $(".inner-box > .txt-box2").mouseover(function () {
    $('.all-wrap .section3').addClass("active2");
  });
  $(".inner-box > .txt-box2").mouseleave(function () {
    $('.all-wrap .section3').removeClass("active2");
  });

  $(".inner-box > .txt-box3").mouseover(function () {
    $('.all-wrap .section3').addClass("active3");
  });
  $(".inner-box > .txt-box3").mouseleave(function () {
    $('.all-wrap .section3').removeClass("active3");
  });


  /*섹션4스크롤트리거*/
  const containerBoxBorderTopWidth = parseInt($('.left-story').css('border-top-width'));
  const containerBoxBorderBottomWidth = parseInt($('.left-story').css('border-bottom-width'));

  ScrollTrigger.create({
    trigger: '.left-story',
    // markers: true,
    pin: '.scroll-t',
    start: containerBoxBorderTopWidth + "px 0",
    end: () => "bottom " + ($('.scroll-t').outerHeight() + containerBoxBorderBottomWidth) + "px",
  })


  /*푸터 배너*/
  
  $(document).ready(function () {
    $(".slider-wrap").slick({
      slide: "div", 
      infinite: true, 
      slidesToShow: 4,
      slidesToScroll: 1, 
      speed: 1000, 
      arrows: true, 
      autoplay: false, 
      autoplaySpeed: 1000, 
      pauseOnHover: true, 
      vertical: false, 
      prevArrow: $(".left-arr"),
      nextArrow: $(".right-arr"),
    });
    
    $(".play-btn").click(function(){
      $(".play-btn").removeClass("active");
      $(".pause-btn").addClass("active");
      $(".slider-wrap").slick("slickPlay");
    });
    
    $(".pause-btn").click(function(){
      $(".play-btn").addClass("active");
      $(".pause-btn").removeClass("active");
      $(".slider-wrap").slick("slickPause");
    });
    
  });
  

  /*푸터 클릭*/
  $(".f-layout .site-wrap .btt1").click(function () {
    $(".all-wrap .footer .site-wrap .click-info1").toggle("on");
  });
  $(".f-layout .site-wrap .btt2").click(function () {
    $(".all-wrap .footer .site-wrap .click-info2").toggle("on");
  });



  
  /*up-btn*/
  $(window).scroll(function () {
    var $scrollTop = $(this).scrollTop();
    if ($scrollTop > 500) {
      $(".goto-tp-btn").css({ opacity: 1 }, 300);
    } else {
      $(".goto-tp-btn").css({ opacity: 0 }, 300);
    }
  });
  
  $(document).ready(function () {
    $(".goto-tp-btn").click(function () {
      $("html, body").animate({ scrollTop: 0 });
    });
  });

});