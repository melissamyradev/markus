(function ($) {
  'use strict';

  /* ========================================================================= */
  /*	Page Preloader
  /* ========================================================================= */

  // window.load = function () {
  // 	document.getElementById('preloader').style.display = 'none';
  // }

  $(window).on('load', function () {
    setTimeout(() => {
      $('#preloader').fadeOut('slow', function () {
        $(this).remove();
      
      });
      $('#body').removeClass('no-scroll');
    },1000);

    var splide = new Splide( '.splide', {
      autoplay    : true,
      rewind      : true,
      pauseOnHover: true,
      pauseOnFocus: false,
    });
    splide.mount();
  });

  
  //Hero Slider
  // $('.hero-slider').slick({
  //   autoplay: true,
  //   infinite: true,
  //   arrows: true,
  //   prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
  //   nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
  //   dots: false,
  //   autoplaySpeed: 20000,
  //   pauseOnFocus: false,
  //   pauseOnHover: false
  // });
  // $('.hero-slider').slickAnimation();


  /* ========================================================================= */
  /*	Header Scroll Background Change
  /* ========================================================================= */

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //console.log(scroll);
    // if (scroll > 420) { //800 before altered
    //   $('#home-header nav').addClass('nav-sticky');
    // } else {
    //   $('#home-header nav').removeClass('nav-sticky');
    // }

    //if window top reaches navigation text
    if ( $(window).scrollTop() >= $('nav').offset().top ) {
      $('#home-header nav').addClass('nav-sticky');
    } 

    //if window top reaches bottom of H1 
    if ( $(window).scrollTop() <= ( $('#home-header h1').offset().top + $('#home-header h1').outerHeight(true)) ) {
      $('#home-header nav').removeClass('nav-sticky');
    }

    if (scroll > 200) { 
      $('#home-header h1').addClass('fade-out');
    } else {
      $('#home-header h1').removeClass('fade-out');
    }
  
  });

  /* ========================================================================= */
  /*	Portfolio Filtering Hook
  /* =========================================================================  */

    // filter
    setTimeout(function(){
      var containerEl = document.querySelector('.filtr-container');
      var filterizd;
      if (containerEl) {
        filterizd = $('.filtr-container').filterizr({});
      }
    }, 500);

  /* ========================================================================= */
  /*	Testimonial Carousel
  /* =========================================================================  */

  //Init the slider
  $('.testimonial-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });


  /* ========================================================================= */
  /*	Clients Slider Carousel
  /* =========================================================================  */

  //Init the slider
  $('.clients-logo-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 20000,
    slidesToShow: 5,
    slidesToScroll: 1
  });




  /* ========================================================================= */
  /*	Company Slider Carousel
  /* =========================================================================  */
  $('.company-gallery').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 20000,
    slidesToShow: 5,
    slidesToScroll: 1
  });


  /* ========================================================================= */
  /*   Contact Form Validating
  /* ========================================================================= */

  // $('#contact-form').validate({
  //     rules: {
  //       name: {
  //         required: true,
  //         minlength: 4
  //       },
  //       email: {
  //         required: true,
  //         email: true
  //       },
  //       subject: {
  //         required: false
  //       },
  //       message: {
  //         required: true
  //       }
  //     },
  //     messages: {
  //       user_name: {
  //         required: 'Come on, you have a name don\'t you?',
  //         minlength: 'Your name must consist of at least 2 characters'
  //       },
  //       email: {
  //         required: 'Please put your email address'
  //       },
  //       message: {
  //         required: 'Put some messages here?',
  //         minlength: 'Your name must consist of at least 2 characters'
  //       }
  //     },
  //     submitHandler: function (form) {
  //       $(form).ajaxSubmit({
  //         type: 'POST',
  //         data: $(form).serialize(),
  //         url: 'sendmail.php',
  //         success: function () {
  //           $('#contact-form #success').fadeIn();
  //         },
  //         error: function () {
  //           $('#contact-form #error').fadeIn();
  //         }
  //       });
  //     }
  //   }

  // );

  /* ========================================================================= */
  /*	On scroll fade/bounce effect
  /* ========================================================================= */
  // var scroll = new SmoothScroll('a[href*="#"]');

  // -----------------------------
  //  Count Up
  // -----------------------------
  // function counter() {
  //   if ($('.counter').length !== 0) {
  //     var oTop = $('.counter').offset().top - window.innerHeight;
  //   }
  //   if ($(window).scrollTop() > oTop) {
  //     $('.counter').each(function () {
  //       var $this = $(this),
  //         countTo = $this.attr('data-count');
  //       $({
  //         countNum: $this.text()
  //       }).animate({
  //         countNum: countTo
  //       }, {
  //         duration: 1000,
  //         easing: 'swing',
  //         step: function () {
  //           $this.text(Math.floor(this.countNum));
  //         },
  //         complete: function () {
  //           $this.text(this.countNum);
  //         }
  //       });
  //     });
  //   }
  // }
  // -----------------------------
  //  On Scroll
  // -----------------------------
  // $(window).scroll(function () {
  //   counter();
  // });

})(jQuery);


  /* ========================================================================= */
  /*	Jarallax
  /* ========================================================================= */
// jarallax(document.querySelectorAll('.jarallax'), {
//   speed: 0.2,
// });

  /* ========================================================================= */
  /*	Rellax
  /* ========================================================================= */

var rellax = new Rellax('.rellax', {
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});

  /* ========================================================================= */
  /*	scrollTrigger
  /* ========================================================================= */

  // ======================= PARALLAX BG

gsap.utils.toArray(".parallax-containers").forEach((section, i) => {
  section.bg = section.querySelector(".parallax-bg"); 

  // Give the backgrounds some random images
  // section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

  // Do the parallax effect on each section
  if (i) {
    section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

    gsap.to(section.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });
  } 
  
  // the first image should be positioned against the top. Use px on the animating part to work with GSAP. 
  else {
    section.bg.style.backgroundPosition = "50% 0px"; 

    gsap.to(section.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top", 
        end: "bottom top",
        scrub: true
      }
    });
  }
});

  

  // usage:
batch("section p", {
  interval: 0.1, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
  batchMax: 3,   // maximum batch size (targets)
  onEnter: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.15, overwrite: true}),
  onLeave: batch => gsap.set(batch, {autoAlpha: 0, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.15, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {autoAlpha: 0, overwrite: true})
  // you can also define things like start, end, etc.
});

/* ========================================================================= */
  /*	Slideshow
  /* ========================================================================= */

// new Splide( '.splide' ).mount();