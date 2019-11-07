$(document).ready( function() {
    
    $('select').styler();

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        slidesPerView: 5,
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
        nextEl: '.listen__button_right',
        prevEl: '.listen__button_left',
        },
    })

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
    })

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
    // v_left
    
    $('.v_right').on('click', function(){
           
       $('.schedule__days').find('button.schedule__day_active').next().addClass('schedule__day_active');
       $('.schedule__days').find('button.schedule__day_active').prev().removeClass('schedule__day_active');
        
        // .next().addClass('schedule__day_active');
        // $('.schedule__days').find('button.schedule__day_active').prev().removeClass('schedule__day_active');       

        // let data = $(this).attr('data-class');
        // $('.schedule__radio').removeClass('schedule__radio_active').removeClass('in');
        // $(data).addClass('schedule__radio_active');
               
        // setTimeout(function(){
        //     $(data).addClass('in');
        // }, 300);
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