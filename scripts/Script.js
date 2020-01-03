$(document).ready( function() {

    $('.search').on('click', function(){
        $('.header__search').toggleClass('header__search_active');
    });
    
    $('.basket').on('click', function(){
        $('.header__basket-right-side').toggleClass('header__basket-right-side_active');
    });

    $('.basket-right-side__close').on('click', () =>{
        $('.header__basket-right-side').removeClass('header__basket-right-side_active');
    });

    $('.header__burger').on('click', () =>{
        $('.nav__menu').toggleClass('nav__menu_active');
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

        breakpoints: {
            1355: {
                slidesPerView: 5
            },

            980: {
                slidesPerView: 4
            },

            685: {
                slidesPerView: 2
            },

            320: {
                slidesPerView: 1
            },
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
        nextEl: '.v_right2',
        prevEl: '.v_left2',
        },

        breakpoints: {
            1355: {
                spaceBetween: 30
            },

            980: {
                slidesPerView: 4,
                spaceBetween: 5
            },

            685: {
                slidesPerView: 2
            },

            320: {
                slidesPerView: 1
            },
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
        // let video = $(this).attr('data-video');

        $('.chart__description').removeClass('chart__description_active').removeClass('show');
        $(number).addClass('chart__description_active');
        // $(number).find('iframe').attr('src', video);
            
        setTimeout(function(){
            $(number).addClass('show');
        }, 300);
    });

    $('.schedule__radio-name').on('click', function(event){
        event.preventDefault();
        let src = $(this).attr('data-src');
        if (!$(this).attr('data-played')) {
            $(this).parents('.main').find('audio').attr('src', src).get(0).play();
            $(this).attr('data-played', 'true');
        } else {
            $(this).parents('.main').find('audio').attr('src', src).get(0).pause();
            $(this).removeAttr('data-played');
        }
    });

    $('.video__play').on('click', function(){
        let src2 = $(this).attr('data-src');
        if (!$(this).attr('data-played')) {
            $(this).parents('.main').find('audio').attr('src', src2).get(0).play();
            $(this).attr('data-played', 'true');
        } else {
            $(this).parents('.main').find('audio').attr('src', src2).get(0).pause();
            $(this).removeAttr('data-played');
        }
    });

    $('.video__run').on('click', function(){
        let src3 = $(this).attr('data-src');
        if (!$(this).attr('data-played')) {
            $(this).parents('.main').find('audio').attr('src', src3).get(0).play();
            $(this).attr('data-played', 'true');
        } else {
            $(this).parents('.main').find('audio').attr('src', src3).get(0).pause();
            $(this).removeAttr('data-played');
        }
    });

    $('.sign_in').on('click', function(){
        $('.form-wrapper').toggleClass('form-wrapper_active');
    });

    $('.sign_up').on('click', function(){
        $('.form-signup').toggleClass('form-wrapper_active');
    });

    $('.form__signup').on('click', function(){
        $('.form-signup').removeClass('form-wrapper_active');
    });

    $('.form_close').on('click', function(){
        $('.form-wrapper').removeClass('form-wrapper_active');
    });

    $('.form-signup_close').on('click', function(){
        $('.form-signup').removeClass('form-wrapper_active');
    });
});