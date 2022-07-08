$(function () {
  var swiper = new Swiper('.slide_mask', {
    slidesPerView: 3.5,
    spaceBetween: 50,
    loop: true,
    speed: 900,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
