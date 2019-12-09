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

    $('.blog_but_number').on('click', function(){
        $('.blog__but').removeClass('blog__but_active');
        $(this).addClass('blog__but_active');

        let data = $(this).attr('data-class');
      
        $('.blog__list').removeClass('blog__list_active').removeClass('in');
        $(data).addClass('blog__list_active');

        setInterval(function(){
            $(data).addClass('in');
        }, 300);
    });

    $('.blog__next').on('click', function(){         
        if ($('.blog__but_active').parents('li').next().find('.blog_but_number').length === 0) {
            let next = $('.blog__but_active').parents('li').next().find('button').attr('data-class');
            $('.blog_but_number').removeClass('blog__but_active');
            $('.blog_but_number[data-class=".one"]').addClass('blog__but_active')  
            
            $('.blog__list').removeClass('blog__list_active').removeClass('in');
            $('.one').addClass('blog__list_active');

            setInterval(function(){
            $('.one').addClass('in');
            }, 300);
        } else {
            let next = $('.blog__but_active').parents('li').next().find('button').attr('data-class');
            $('.blog_but_number').removeClass('blog__but_active');
            $('.blog_but_number[data-class="'+ next +'"]').addClass('blog__but_active');

            $('.blog__list').removeClass('blog__list_active').removeClass('in');
            $(next).addClass('blog__list_active');

            setInterval(function(){
            $(next).addClass('in');
            }, 300);
        }
    });
});