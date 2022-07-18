$(function () {
	const mainSliderEl = $('.swiper-container .progress');

  function mainSlideAni(actEl) {
    actEl.find('.bar').animate({ width: '100%' }, 3000);
  }

  const swiper = [];

  swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.5,
    spaceBetween: 50,
    loop: true,
    loopFillGroupWithBlank: false,
    speed: 1200,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.pager',
      type: 'fraction',
    },
    on: {
      transitionEnd: function () {
        const actEl = mainSliderEl.find('.play_bar');
        actEl.empty().append('<span class="bar"></span>');
        mainSlideAni(actEl);
      },
    },
  });
});
