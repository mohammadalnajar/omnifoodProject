// $(document).ready(function(){
//     $('.js-feature').waypoint(function(direction){
//         if (direction == "down" ){
//             $('nav').addClass('sticky');
//         }
//         else {$('nav').removeClass('sticky')}
//     })

// });



// var waypoints = $('#handler-first').waypoint(function(direction) {
//     notify(this.element.id + ' hit 25% from top of window') 
//   }, {
//     offset: '25%'
//   })

// window.onscroll= function(){myfunction()};
// var nav1= document.getElementsByTagName("nav");
// var feature1=document.getElementsByClassName("js-section");
// var sec1= feature1.offsetTop;
// function myfunction(){
//     if (window.pageYOffset >= sec1){
//         nav1.classList.add("sticky");
//     }
//     else { nav1.classList.remove("sticky");
// };


// 

    // $(window).scroll(function(){
    //     if ($(window).scrollTop() >= 100 ){
    //         $('nav').addClass("sticky");
    //     } else {$('nav').removeClass("sticky")}
    // })
    $(document).ready(function(){

        // -------------SRICKY_NAV----------------
        $(window).scroll(function(){
            var sec1=$('.js-feature').offset().top;
            if ($(window).scrollTop() >= sec1 - 300 ) {
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