// 1. Imports
// ----------

import './jqueryload';
import 'what-input';
import Swiper from 'swiper';
import Cookies from 'js-cookie';
import './lib/foundation-explicit-pieces';
import '@fancyapps/fancybox/dist/jquery.fancybox.min';

// 2. Foundation Special Queries
// ------------------

Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
  

$(document).foundation();


// 4. Lightgallery
// ---------------

$('[data-fancybox="gallery"]').fancybox({
loop: true,
arrows: true,
infobar: true,
buttons: [
//     "zoom",
    //"share",
    "slideShow",
    //"fullScreen",
    //"download",
//     "thumbs",
    "close"
  ],
 transitionEffect: "tube",
});

// 5. Age Gate
// -----------

$(document).ready(function() {
  if (!Cookies.get('showed_agegate')) {
      setTimeout(function(){
        $('#agegatesimple').foundation('open'); 
        Cookies.set('showed_agegate', 'true', { expires: 365 });
      },500) // 3 seconds.
  }
});

$('#agegatesimple .close-button-test').click(function() {
  $('#agegatesimple').foundation('close'); 
});

// 6. Links Scroll to Section
// --------------------------

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });

// 6. Carousel
// -----------

new Swiper('.carousel--hero', {
  effect: 'fade',
  slidesPerView: '1',
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2500
  }
})

// 7. Find Beer Button
// -------------------

$(".findbeer").click(function(){
  $(".mapboxgl-ctrl-geolocate").click()
});