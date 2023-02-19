// -----------------slider-images----------------
var swiper = new Swiper('.slide-banner', {
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
    loop: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});
// -----------------End slider-images----------------

//---------------------Like-product----------------- 
var swiper = new Swiper(".product_like-container", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1020: {
        slidesPerView: 6,
      },
    },
});

//---------------------End Like-product----------------- 



