$(function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 900,
    loop: true,
    loopFillGroupWithBlank: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        var Idx = this.realIndex;
        console.log('realIndex', Idx);
      },
    },
  });

  swiper.on('slideChange', function () {
    console.log('realIndex2', swiper.realIndex);
  });
});
