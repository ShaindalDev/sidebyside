// swiper.init.js


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },


    breakpoints: {
       
        764: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
        }
    }
});




