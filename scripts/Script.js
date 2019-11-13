$(document).ready( function() {

    $('.search').on('click', function(){
        $('.header__search').toggleClass('header__search_active');
    });
    
    $('.basket').on('click', function(){
        $('.basket-wrapper').toggleClass('basket-wrapper_active');
    });

    $('.basket-wrapper__close').on('click', function(){
        $('.basket-wrapper').removeClass('basket-wrapper_active');
    });

    $('select').styler();

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        slidesPerView: 5,
        direction: 'horizontal',
        loop: true,
        spaceBetween: 15,

        // Navigation arrows
        navigation: {
        nextEl: '.listen__button_right',
        prevEl: '.listen__button_left',
        },
    });

    var mySwiper2 = new Swiper ('.video__menu', {
        // Optional parameters
        slidesPerView: 4,
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,

        // Navigation arrows
        navigation: {
        nextEl: '.v_right',
        prevEl: '.v_left',
        },
    });

    $('.schedule__day').on('click', function(){
        $('.schedule__day').removeClass('schedule__day_active');
        $(this).addClass('schedule__day_active');        

        let data = $(this).attr('data-class');
        $('.schedule__radio').removeClass('schedule__radio_active').removeClass('in');
        $(data).addClass('schedule__radio_active');
               
        setTimeout(function(){
            $(data).addClass('in');
        }, 300);
    });
    
    $('.v_right').on('click', function(){

        if ($('.schedule__days .schedule__day_active').parents('li').next().length == 0) {

            $('.schedule__day').removeClass('schedule__day_active');
            $('button[data-class=".monday"]').addClass('schedule__day_active');

            // let data = $(button).attr('data-class');
            $('.schedule__radio').removeClass('schedule__radio_active').removeClass('in');
            $('.monday').addClass('schedule__radio_active');
               
            setTimeout(function(){
                $('.monday').addClass('in');
            }, 300);
        } else {
            let button = $('.schedule__days .schedule__day_active').parents('li').next().find('button').attr('data-class');
            
            $('.schedule__day').removeClass('schedule__day_active');
            $('button[data-class="' + button + '"]').addClass('schedule__day_active');

            // let data = $(button).attr('data-class');
            $('.schedule__radio').removeClass('schedule__radio_active').removeClass('in');
            $(button).addClass('schedule__radio_active');
                
            setTimeout(function(){
                $(button).addClass('in');
            }, 300);
        }
    });

    $('.v_left').on('click', function(){

        if ($('.schedule__days .schedule__day_active').parents('li').prev().length == 0) {

            $('.schedule__day').removeClass('schedule__day_active');
            $('button[data-class=".sunday"]').addClass('schedule__day_active');

            $('.schedule__radio').removeClass('schedule__radio_active').removeClass('in');
            $('.sunday').addClass('schedule__radio_active');
               
            setTimeout(function(){
                $('.sunday').addClass('in');
            }, 300);
        } else {
            let button = $('.schedule__days .schedule__day_active').parents('li').prev().find('button').attr('data-class');
            
            $('.schedule__day').removeClass('schedule__day_active');
            $('button[data-class="' + button + '"]').addClass('schedule__day_active');

            $('.schedule__radio').removeClass('schedule__radio_active').removeClass('in');
            $(button).addClass('schedule__radio_active');
                
            setTimeout(function(){
                $(button).addClass('in');
            }, 300);
        }
    });

    $('.chart__play').on('click', function(){
        let number = $(this).attr('data-num');
        $('.chart__description').removeClass('chart__description_active').removeClass('show');
        $(number).addClass('chart__description_active');
            
        setTimeout(function(){
            $(number).addClass('show');
        }, 300);
    });

});