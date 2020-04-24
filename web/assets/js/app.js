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

// 3. Foundation
// -------------

$(document).foundation();

// 4. Fancybox
// ---------------

$('[data-fancybox="gallery"]').fancybox({
loop: true,
arrows: true,
infobar: true,
buttons: [
    "slideShow",
    "fullScreen",
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

// 5. Carousel
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

// 6. Find Beer Button
// -------------------

$(".findbeer").click(function(){
  $(".mapboxgl-ctrl-geolocate").click()
});