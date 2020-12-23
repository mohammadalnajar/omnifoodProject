// -------SELECTORS--------
// const openBtn=document.getElementById("openBUTTON");
// const navBar=document.getElementsByClassName("nav-bar")[0];
// var stickyNav=document.querySelectorAll(".sticky .nav-bar");
// const nav=document.getElementsByClassName("nav");
// const h1=document.getElementById("h1-features");

// // -------FUNCTIONS---------
// function open(){
//     h1.style.color="red";
//     navBar.classList.toggle("display-flex");
//     navBar.classList.toggle("f-direction-c");
//     // if (nav.classList.contains('sticky')){
//     //     console.log("hello");
//     //     navBar.classList.toggle("display-flex");
//     // navBar.classList.toggle("f-direction-c");
//     // }
//     // stickyNav.classList.toggle("display-flex");
//     // stickyNav.classList.toggle("f-direction-c");
    
    
// }
// // ------EVENTS--------
// openBtn.onclick=open;



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
    // $('.menu-close-button').click(function(){
    //     $('.sticky .nav-bar').removeClass('display-flex');
    //     $(".sticky .nav-bar").removeClass('f-direction-c');
    //     $('.nav-bar').removeClass('display-flex');
    //     $(".nav-bar").removeClass('f-direction-c');
    //     $(".menu-open-button").removeClass("display-none");
    //     $(".menu-close-button").removeClass("display-block");

    // })
        // var open=$('.menu-open-button ion-icon');
        // var close=$('.menu-close-button ion-icon')
            // $('.sticky .nav-bar').toggleClass("display-flex");
            // $('.sticky .nav-bar').toggleClass("f-direction-c");

        //     if($('nav').hasClass("nav")&&$('nav').hasClass("sticky")){
              
        //     $(".sticky .nav-bar").toggleClass("display-none");
        //     // $(".sticky .nav-bar").toggleClass("f-direction-c");
        // }
        //   $('.nav-bar').slideToggle(500);
    //    $(".nav").addClass('display-block');
      
       
       
        // if($(window).width() > 767){
            
        //     //  if nav has no sticky then display flex (try this tonight)

        //     $('.nav-bar').addClass('display-flex');
        // }
    //    $('.nav-bar').toggleClass('display-flex f-direction-c', 1000, 'easeOutSine');
       
    //    $('.sticky .nav-bar').toggleClass('display-flex f-direction-c', 100);
    
    //     })

    //    $(".menu-open-button").addClass("display-none");
    //    $(".menu-close-button").addClass("display-block");
    //    $(".menu-close-button").css("margin-left","auto");
    //    $(".menu-close-button").addClass("display-block");

       
        
    
    // $('.menu-close-button').click(function(){
    // //    $(".nav").addClass('display-block');
    //    $(".menu-open-button").removeClass("display-none");
    //    $(".menu-close-button").removeClass("display-block");

       
        
    // })

    // $(window).resize(function(){

    //     if ($(window).width()>=678){
    //         $('.nav-bar').addClass('display-flex');
    //     }
    // })

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



