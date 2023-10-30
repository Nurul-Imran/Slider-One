var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: {
        enabled: true,
      },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    breakpoints: {
       768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });