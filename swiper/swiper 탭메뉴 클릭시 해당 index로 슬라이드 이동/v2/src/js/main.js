$(function () {
  var swiper = new Swiper('.thumb_mask', {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.progressbar',
      type: 'progressbar',
    },
  });
  var swiper2 = new Swiper('.top_mask', {
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
    effect: 'fade',
    navigation: {
      nextEl: '.arrow_btn.n',
      prevEl: '.arrow_btn.p',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
