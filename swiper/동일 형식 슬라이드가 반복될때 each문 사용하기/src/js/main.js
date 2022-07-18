$(function () {
  var loop_swiper = [];
  $('.swiper-container').each(function (i) {
    var i = i + 1;
    loop_swiper[i] = new Swiper('.slide_mask' + i, {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      loopFillGroupWithBlank: false,
      speed: 900,
      pagination: {
        el: '.slide_mask' + i + ' .pager',
        clickable: true,
      },
      navigation: {
        nextEl: '.slide_mask' + i + ' .arrow_btn.n',
        prevEl: '.slide_mask' + i + ' .arrow_btn.p',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  });
});
