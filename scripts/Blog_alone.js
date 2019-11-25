$(document).ready(function(){
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

    $('.sign_in').on('click', function(){
        $('.form-wrapper').toggleClass('form-wrapper_active');
    });

    $('.sign_up').on('click', function(){
        $('.form-signup').toggleClass('form-wrapper_active');
    });

    $('.form__signup').on('click', function(){
        $('.form-signup').removeClass('form-wrapper_active');
    });
});