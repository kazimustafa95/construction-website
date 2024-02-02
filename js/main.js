(function($) {

  "use strict";

  /*
  |--------------------------------------------------------------------------
  | Template Name: biboo
  | Author: Laralink
  | Developer: Tamjid Bin Murtoza;
  | Version: 1.0.0
  |--------------------------------------------------------------------------
  |--------------------------------------------------------------------------
  | TABLE OF CONTENTS:
  |--------------------------------------------------------------------------
  |
  | 1. Scripts initialization
  | 2. Preloader
  | 3. Primary Menu
  | 4. Scroll Function
  | 5. Scroll Up
  | 6. Owl Carousel
  | 7. Tab
  | 8. Accordian
  | 9. Portfolio
  | 10. Magnific Popup
  | 11. Tamjid Counter
  | 12. Swiper Slider
  | 13. Mailchimp
  | 14. Ajax Contact Form
  |
  */

  /*--------------------------------------------------------------
    1. Scripts initialization
    --------------------------------------------------------------*/

    $.exists = function(selector) {
      return ($(selector).length > 0);
    }

    $(window).on('load', function() {
      $(window).trigger('scroll');
      $(window).trigger('resize');
      preloaderSetup();
      portfolioMsSetup();
    });


    $(document).ready(function() {
      $(window).trigger('resize');
      primaryMenuSetup();
      mobileMenu();
      scrollUp();
      owlCarouselSetup();
      tabSetup();
      accordianSetup();
      portfolioMsSetup();
      tamjidCounterSetup();
      modalVideo();
      contactForm();
      stickyFooter();
      if ($.exists('.ripple-version')) {
        rippleSetup();
      }
      if ($.exists('.wow')) {
        new WOW().init();
      }
      // Active Youtube Video Background
      if ($.exists('.player')) {
        $('.player').YTPlayer();
      }
      // Active Parallax Background
      if ($.exists('.parallax')) {
        $('.parallax').parallax('50%', 0.3);
      }
      
      // Background images
      $('.bg-img').each(function() {
        var src = $(this).attr('data-src');
        $(this).css({
          'background-image': 'url(' + src + ')'
        });
      });

    });


    $(window).on('resize', function() {
      mobileMenu();
      portfolioMsSetup();
      stickyFooter();
    });


    $(window).on('scroll', function() {
      scrollFunction();
    });

  /*--------------------------------------------------------------
    2. Preloader
    --------------------------------------------------------------*/

    function preloaderSetup() {

      $(".t-circle").fadeOut();
      $("#preloader").delay(150).fadeOut("slow");

    }

  /*--------------------------------------------------------------
    3. Primary Menu
    --------------------------------------------------------------*/
    function primaryMenuSetup() {

    // Mobile Menu Button
    $('#m-menu-btn').on('click', function(){
      $( this ).toggleClass('m-menu-btn-ext');
      $(this).siblings('#primary-nav-list').slideToggle('slow');
    });

    // Mobile Menu Dropdown
    $('.menu-item-has-children > ul').before('<i class="fa fa-plus m-dropdown" class="m-dropdown"></i>');
    $('.m-dropdown').on('click', function() {
      $(this).siblings('ul').slideToggle('slow');
      $(this).toggleClass('fa-plus fa-minus');
    });

  }

  
  function mobileMenu() {

    // Mobile Menu
    if ($(window).width() <= 991){  
      $('.primary-nav').addClass('m-menu').removeClass('primary-nav');
    } else {
      $('.m-menu').addClass('primary-nav').removeClass('m-menu');
    }

  }


  /*--------------------------------------------------------------
    4. Scroll Function
    --------------------------------------------------------------*/

    function scrollFunction() {

    // Small Header
    var scroll = $(window).scrollTop();
    if(scroll >= 10) {
      $('.site-header').addClass('small-height');
    } else {
      $('.site-header').removeClass('small-height');
    }

    /* For Header version-2 */
    if(scroll >= 55) {
      $('.site-header-v1').addClass('small-height-v2');
    } else {
      $('.site-header-v1').removeClass('small-height-v2');
    }

      // Scroll Top Button Show
      if(scroll >= 350) {
        $('#scrollup').addClass('scrollup-show');
      } else {
        $('#scrollup').removeClass('scrollup-show');
      }

    }


  /*--------------------------------------------------------------
    5. Scroll Up
    --------------------------------------------------------------*/

    function scrollUp() {

    // Create Scroll Top Button
    $('#scrollup').on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 1000);
    });

  }


  /*--------------------------------------------------------------
    6. Owl Carousel
    --------------------------------------------------------------*/

    function owlCarouselSetup() {

      if ($.exists('#hero-slider-v1')) {
        /* Owl Carousel For hero-slider-v1 */
        $('#hero-slider-v1').owlCarousel({
          items:1,
          loop:true,
          margin:0,
          nav:false,
          dots:true,
          autoplay:false,
          autoplayHoverPause:false,
          smartSpeed:900,
          autoplayTimeout:6000         
        });
      }

      if ($.exists('#hero-slider-v2')) {
        /* Owl Carousel For hero-slider-v2 */
        $('#hero-slider-v2').owlCarousel({
          items:1,
          loop:true,
          margin:0,
          nav:true,
          navText:['<i class="icon-arrows_left"></i>', '<i class="icon-arrows_right"></i>'],
          dots:false,
          autoplay:false,
          autoplayHoverPause:false,
          smartSpeed:450,
          autoplayTimeout:6000        
        });
      }

      if ($.exists('#hero-slider-v3')) {
        /* Owl Carousel For hero-slider-v3 */
        $('#hero-slider-v3').owlCarousel({
          items:1,
          loop:true,
          margin:0,
          nav:false,
          dots:true,
          autoplay:false,
          autoplayHoverPause:false,
          smartSpeed:1000,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          autoplayTimeout:5000        
        });
      }

      if ($.exists('#partner-logo')) {
        /* Owl Carousel For Partner Logo */
        $('#partner-logo').owlCarousel({
          loop:true,
          margin:30,
          nav:false,
          navText:false,
          autoplay:true,
          smartSpeed:1000,
          autoplayTimeout:5000,
          responsive:{
            0:{
              items:2
            },
            600:{
              items:3
            },
            800:{
              items:4
            },
            1000:{
              items:5
            }
          }
        });
      }

      if ($.exists('#project-carousel')) {
        /* Owl Carousel For Partner Logo */

        $('#project-carousel').owlCarousel({
          items:1,
          loop:true,
          margin:0,
          nav:true,
          navText:['<i class="icon-arrows_left"></i>', '<i class="icon-arrows_right"></i>'],
          dots:false,
          autoplay:false,
          autoplayHoverPause:false,
          smartSpeed:850,
          autoplayTimeout:6000  
        });
      }

      if ($.exists('.testimonial-v2')) {
        /* Owl Carousel For testimonial-v2 */
        $('.testimonial-v2').owlCarousel({
          loop:true,
          margin:30,
          nav:false,
          navText:false,
          dots:true,
          autoplay:false,
          smartSpeed:700,
          autoplayTimeout:4000,
          responsive:{
            0:{
              items:1
            },
            800:{
              items:2
            }
          }      
        });
      }

      if ($.exists('#project-slider')) {
        /* Owl Carousel For hero-slider-v2 */
        $('#project-slider').owlCarousel({
          items:1,
          loop:true,
          margin:0,
          nav:true,
          navText:['<i class="icon-arrows_left"></i>', '<i class="icon-arrows_right"></i>'],
          dots:false,
          autoplay:false,
          autoplayHoverPause:false,
          smartSpeed:450,
          autoplayTimeout:6000        
        });
      }

    }


  /*--------------------------------------------------------------
    8. Tab
    --------------------------------------------------------------*/

    function tabSetup() {

      if ($.exists('#nav-tabs')) {
        $('#nav-tabs a').on('click', function() {
          $(this).tab('show');
        });
        $('#nav-tabs a').on('shown.bs.tab', function(event){
          var x = $(event.target).text();         // active tab
          var y = $(event.relatedTarget).text();  // previous tab
          $('.act span').text(x);
          $('.prev span').text(y);
        });
      }

    }

  /*--------------------------------------------------------------
    9. Accordian
    --------------------------------------------------------------*/
    
    function accordianSetup() {

      if ($.exists('.single-accordian')) {
        var $this = $(this);
        $('.accordian-head').append( '<span class="accordian-toggle"></span>'); // Accordian Toggle Button
        $('.single-accordian').filter(':nth-child(n+2)').children('.accordian-body').hide(); // Hide all button
        $('.single-accordian:first-child').children('.accordian-head').addClass('active'); // Active class Added
        $('.accordian-head').on('click', function() {
          $(this).parent('.single-accordian').siblings().children('.accordian-body').slideUp();
          $(this).siblings().slideToggle();
          /* Accordian Active Class */
          $(this).toggleClass('active');
          $(this).parent('.single-accordian').siblings().children('.accordian-head').removeClass('active');
        });
      }

    }


    /*--------------------------------------------------------------
    10. Portfolio
    --------------------------------------------------------------*/
    function portfolioMsSetup() {

      if ($.exists('#portfolio')) {
        // Portfolio Active
        $('#portfolio').isotope({
          itemSelector: '.portfolio-item',
          transitionDuration: '0.60s',
          percentPosition: true,
          masonry: {
            columnWidth: '.grid-sizer'
          }
        });

        // Active Class of Portfolio
        $('#portfolio-filter ul li').on('click', function(event) {
          $(this).siblings('.active').removeClass('active');
          $(this).addClass('active');
          event.preventDefault();
        });

        // Portfolio filtering
        $('#portfolio-filter ul').on('click', 'a', function() {
          var filterElement = $(this).attr('data-filter');
          $(this).parents(".portfolio-filter").next().isotope({
            filter: filterElement
          });
        });
      }

    }


  /*--------------------------------------------------------------
    12. Tamjid Counter
    --------------------------------------------------------------*/
    function tamjidCounterSetup() {

      if ($.exists('.counter')) {
      // Tamjid Counter Active
      $('.counter').tamjidCounter({
        duration: 3000,
        delay: 0,
        easing: 'swing'
      });
    }

  }

  /*--------------------------------------------------------------
    13. Modal Video
    --------------------------------------------------------------*/
    function modalVideo() {

      $(document).on('click', '.video-open', function(e) {
        e.preventDefault();
        var video = $(this).attr('href');
        $('.video-popup-container iframe').attr('src', video);
        $('.video-popup').addClass('active');

      });
      $('.video-popup-close, .video-popup-layer').on('click', function(e) {
        $('.video-popup').removeClass('active');
        $('html').removeClass('overflow-hidden');
        $('.video-popup-container iframe').attr('src', 'about:blank')
        e.preventDefault();
      });

    }

  /*--------------------------------------------------------------
  14. Mailchimp
  --------------------------------------------------------------*/
  if ($.exists('.mailchimp')) {
     // active mailchimp 
     if ($('.mailchimp').length > 0) {
      $('.mailchimp').ajaxChimp({
        language: 'es',
        callback: mailchimpCallback
      });
    }

    function mailchimpCallback(resp) {
        // Check For Available Email
        if (resp.result === 'success') {
          $('.subscription-success').html('<i class="fa fa-check"></i><br/>' + resp.msg).fadeIn(1000);
          $('.subscription-error').fadeOut(500);

        } else if (resp.result === 'error') {
          $('.subscription-error').html('<i class="fa fa-times"></i><br/>' + resp.msg).fadeIn(1000);
        }
      }
    // Mailchimp Alart Message
    $.ajaxChimp.translations.es = {
      'submit': 'Submitting...',
      0: 'We have sent you a confirmation email',
      1: 'Please enter a value',
      2: 'An email address must contain a single @',
      3: 'The domain portion of the email address is invalid (the portion after the @: )',
      4: 'The username portion of the email address is invalid (the portion before the @: )',
      5: 'This email address looks fake or invalid. Please enter a real email address'
    };
  }

  /*--------------------------------------------------------------
    15. Ajax Contact Form
    --------------------------------------------------------------*/

    function contactForm() {

      if ($.exists('#cf')) {
      $('.cf-msg').hide(); // Alart Message
      $('#cf #submit').on('click', function() {
          // Form Variable
          var name = $('#name').val();
          var subject = $('#subject').val();
          var phone = $('#phone').val();
          var email = $('#email').val();
          var msg = $('#msg').val();
          var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          
          if (!regex.test(email)) {
            // Check For Valid Email
            $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please Enter Valied Email.</div>');
            return false;
          }

          // Form Field Tream
          name = $.trim(name);
          subject = $.trim(subject);
          phone = $.trim(phone);
          email = $.trim(email);
          msg = $.trim(msg);

          // For Required Field
          if (name != '' && email != '' && msg != '') {
            var values = 'name=' + name + '&subject=' + subject + '&phone=' + phone + '&email=' + email + '&msg=' + msg;
            $.ajax({
              type: 'POST',
                  url: 'php/mail.php', // Pointing PHP file
                  data: values,
                  success: function() {
                    $('#name').val('');
                    $('#subject').val('');
                    $('#phone').val('');
                    $('#email').val('');
                    $('#msg').val('');

                    $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function() {
                      $('.cf-msg').fadeOut('slow');
                    }, 4000);
                  }
                });
          } else {
            $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> All fields are required.</div>');
          }
          return false;
        });
    }

  }

  /*--------------------------------------------------------------
    16. Mailchimp
  --------------------------------------------------------------*/
    function stickyFooter() {
      
      var footerHeight = ($('.sticky-footer').height()) + 'px';
      $('.main-content').css("margin-bottom", footerHeight);
    }

    /*--------------------------------------------------------------
    17. Ripple
    --------------------------------------------------------------*/
    function rippleSetup() {
      
      $('.ripple-version').ripples({
        resolution: 500,
        perturbance: 0.04
      });
      
    }
    
    /*--------------------------------------------------------------
    18. One Page nav
    --------------------------------------------------------------*/
    // Click to Go Top Animation
    $('.site-header a').each(function() {
      var thisAttr = $(this).attr('href');
      if ($(thisAttr).length) {
        // $(thisAttr).addClass('tf-page-section');
        $(this).addClass('tf-page-nav');
      }
    });

    $('.tf-page-nav').on('click', function() {
      var thisAttr = $(this).attr('href');
      if ($(thisAttr).length) {
        var scrollPoint = $(thisAttr).offset().top - 50;
        $('body,html').animate({
          scrollTop: scrollPoint
        }, 600);
      }
      return false;
    });

    // One Page Active Class
    var topLimit = 300,
        ultimateOffset = 200;

    $('.onepage-nav').each(function() {
      var $this = $(this),
          $parent = $this.parent(),
          current = null,
          $findLinks = $this.find("a");

      function getHeader(top) {
        var last = $findLinks.first();

        if (top < topLimit) {
          return last;
        }

        for (var i = 0; i < $findLinks.length; i++) {
          var $link = $findLinks.eq(i),
            href = $link.attr("href");

          if (href.charAt(0) === "#" && href.length > 1) {
            var $anchor = $(href).first();

            if ($anchor.length > 0) {
              var offset = $anchor.offset();

              if (top < offset.top - ultimateOffset) {
                return last;
              }

              last = $link;
            }
          }
        }
        return last;
      }

      $(window).on("scroll", function() {
        var top = window.scrollY,
          height = $this.outerHeight(),
          max_bottom = $parent.offset().top + $parent.outerHeight(),
          bottom = top + height + ultimateOffset;

        var $current = getHeader(top);

        if (current !== $current) {
          $this.find(".active").removeClass("active");
          $current.addClass("active");
          current = $current;
        }
      });

    });



    /*--------------------------------------------------------------
      ###. Template Settings
      --------------------------------------------------------------*/


    $(document).on("ready", function() {
        $('.st-accent-color').on('click', function() {
            var colorClass = $(this).attr('data-color');
            $('body').removeClass('st-green st-blue st-indigo st-purple st-orange st-red st-teal st-yellow').addClass(colorClass);
        })
        $('.st-accent-color').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
        })
        $('.st-color-mode-btn').on('click', function() {
            $(this).addClass('st-active').siblings().removeClass('st-active');
        })
        $('.st-settings-switch').on('click', function() {
            $(this).parents('.st-settings-wrap').toggleClass('active');
        })
        $('.st-night-color').on('click', function() {
            $('body').addClass('st-night-mode')
        })
        $('.st-day-color').on('click', function() {
            $('body').removeClass('st-night-mode')
        })
    });

    
})(jQuery); // End of use strict
