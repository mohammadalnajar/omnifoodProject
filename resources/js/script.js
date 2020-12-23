
    $(document).ready(function(){

        // -------------SRICKY_NAV----------------
        $(window).scroll(function(){
            var sec1=$('.js-feature').offset().top;
            if ($(window).scrollTop() >= sec1 - 150 ) {
                $('nav').addClass("sticky");
            } else {$('nav').removeClass("sticky")}
        })

        // -------------scroll----------------
        $('.js-to-plans').click(function(){
            $('html, body').animate({ scrollTop: $('.js-plans').offset().top -200},2000);
        })
        $('.js-to-feature').click(function(){
            $('html, body').animate({scrollTop:  $('.js-feature').offset().top-200}, 1000);
        })
        $('#js-to-header').click(function(){
            $('html,body').animate({scrollTop:$('.header').offset().top},1000);
        })
        $('#js-to-work').click(function(){
            $('html,body').animate({scrollTop:$('.js-howItWorks').offset().top-200},2000)
        })
        $('#js-to-cities').click(function(){
            $('html,body').animate({scrollTop:$('.js-cities').offset().top-200},1500)
        })
        $('#js-to-plans').click(function(){
            $('html,body').animate({scrollTop:$('.js-plans').offset().top-200},1000)
        })

    // ----------animation-------
        $(window).scroll(function(){
            if ($(window).scrollTop()>=$('.js-feature').offset().top-150){
                $('.features').addClass('animate__animated animate__fadeIn')
                
            }
        })
        $(window).scroll(function(){
            if ($(window).scrollTop()>=$('.js-howItWorks').offset().top-150){
                $('.hiw-img').addClass('animate__animated animate__backInUp');
            }
        })
        $(window).scroll(function(){
            if ($(window).scrollTop()>=$('.js-cities').offset().top-200){
                $('.cities').addClass('animate__animated animate__fadeIn');
            }
        })
        $(window).scroll(function(){
            if ($(window).scrollTop()>=$('.js-plans').offset().top-200){
                $('.plan-1').addClass('animate__animated animate__headShake');
            }
        })

        //   -----------mediaQuery-for-NAV_BAR--------

    $('.menu-open-button').click(function(){
        $('.nav-bar').slideToggle(500);
        $('.menu-open-button').addClass("display-none");
        $('.menu-close-button').addClass("display-block");
    
        // $('.sticky ul.nav-bar').addClass('display-flex');
        // $(".sticky ul.nav-bar").addClass('f-direction-c');
        // $('.nav-bar').addClass('display-flex');
        // $(".nav-bar").addClass('f-direction-c');
        // $(".menu-open-button").addClass("display-none");
        // $(".menu-close-button").addClass("display-block");

    })
    $('.menu-close-button').click(function(){
        $('.nav-bar').slideToggle(500);
        $('.menu-open-button').removeClass("display-none");
        $('.menu-close-button').removeClass("display-block");
    })

    });


// ------------AUTO-HEAD-TYPE-----------


var typed5 = new Typed(".type1", {
    strings: [
        "GOODBYE JUNK FOOD",
         "HELLO SUPER HEALTHY MEALS"
            ],
    typeSpeed: 20,
    backSpeed: 90,
    cursorChar: '_',
    shuffle: true,
    backDelay: 2000,
    smartBackspace: false,
    loop: true



    
  });



