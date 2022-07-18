$(function () {
  var swiper = new Swiper('.slide_mask1', {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    speed: 900,
    pagination: {
      el: '.slide_mask1 .pager',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  var swiper = new Swiper('.slide_mask2', {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    speed: 900,
    pagination: {
      el: '.slide_mask2 .pager',
      type: 'fraction',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  var swiper = new Swiper('.slide_mask3', {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    speed: 900,
    pagination: {
      el: '.slide_mask3 .pager',
      type: 'fraction',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
