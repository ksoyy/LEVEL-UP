$(function () {
  var swiper = new Swiper('.top_mask', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    loopFillGroupWithBlank: false,
    speed: 900,
    navigation: {
      nextEl: '.arrow_btn.n',
      prevEl: '.arrow_btn.p',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        var Idx = this.realIndex;
        $('.tab_box ul li').eq(Idx).addClass('act').siblings().removeClass('act');
      },
    },
  });

  $('.js_slide_tab').click(function () {
    var $this = $(this);
    var li = $this.closest('li');
    var index = li.index();
    swiper.slideTo(index + 1, 300);
  });
});
