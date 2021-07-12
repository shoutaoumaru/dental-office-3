const swiper = new Swiper('#pagination', {
  // Optional parameters
  loop: true,
  // effect: 'fade',
  // effect: 'coverflow',
  breakpoints: {
    600: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});