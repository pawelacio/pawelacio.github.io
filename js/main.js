$(document).ready(function () {

    var mySwiper = new Swiper ('.swiper-container', {
      // parameters for Swiper
      direction: 'horizontal',
      loop: false,
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
      keyboard: {
        enabled: true,
      },
    })

    $('.hamburger').click(function() {
      $('.menu').toggle('slide');
    });

    $('#about').click(function() {
      $('.submenu').toggleClass('goin');;
    });


    var $toAnimate = $('.animation');
    var $window = $(window);

    function check_pos() {
      var windowHeight = $window.height();
      var windowTop = $window.scrollTop();
      var windowBottom = (windowTop + windowHeight);
    
      $.each($toAnimate, function() {
        var $currentElement = $(this);
        var currentElementHeight = $currentElement.outerHeight();
        var currentElementTop = $currentElement.offset().top;
        var currentElementBottom = (currentElementTop + currentElementHeight);
    
        if ((currentElementBottom >= windowTop) &&
            (currentElementTop <= windowBottom)) {
          $currentElement.addClass('in-view');
        } else {
          $currentElement.removeClass('in-view');
        }
      });
    }

    $window.on('scroll resize', check_pos);
    $window.trigger('scroll');


  });