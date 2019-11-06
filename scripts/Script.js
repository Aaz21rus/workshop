$(document).ready( function() {
    
    $('select').styler();

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 5,

        // Navigation arrows
        navigation: {
            hiddenClass: 'swiper-button-prev',
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});