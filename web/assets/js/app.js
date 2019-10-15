// 1. Imports
// ----------

import $ from "jquery";
import Foundation from 'foundation-sites';
import "lightGallery";
import "lg-fullscreen";
import "lg-video";
import "lg-autoplay";
import AOS from 'aos';
import Swiper from 'swiper';
import mapboxgl from 'mapbox-gl';
window.mapboxgl = mapboxgl;

// 2. Special Queries
// ------------------

Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

// 3. Foundation
// -------------

$(document).foundation();


// 5. Lightgallery
// ---------------

$("#gallery").lightGallery({
    selector: ".item",
    counter : true,
    fullscreen: true,
    download: false,
});

$('#video-gallery').lightGallery({
   download: false,
   counter : false,
   controls: false,
    vimeoPlayerParams: {
        byline : 0,
        portrait : 0,
        color : '272A67'
    },
    youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 0
    }
});

// 6. Age Gate
// -----------

/*
function checkIfVerified(){
  if ($.cookie('age-gate') == 'of_age') {
    // Hide overlay
    $('.age-gate').hide();
  } else {
    // Show Age gate form
    $('form[name=agegate]').show();
  }
}

function zeroPadDate(number){
  if (number < 10) { return '0'+number; }
  return number;
}

checkIfVerified();

$('form[name=agegate]').submit(function(ev){
  ev.preventDefault();
  var year = $('form[name=agegate] > select[name=year]').val();
  var month = $('form[name=agegate] > select[name=month]').val();
  var day = $('form[name=agegate] > select[name=day]').val();
  
  if (!(day && month && year)) {
//     alert('Please enter your date of birth');
    checkIfVerified();
    return false;
  }
  
  var date_string = year +  "-" + zeroPadDate(month) + "-" + zeroPadDate(day) + "T00:00:00";
  var birthday = new Date(date_string);
  var eighteenYearOld = new Date();
  eighteenYearOld.setFullYear(eighteenYearOld.getFullYear() - 18);
  
  if ((eighteenYearOld - birthday) < 0) {
    window.location.replace('https://www.drinkaware.co.uk/why-am-i-here');
  } else {
    $.cookie('age-gate', 'of_age');
  }
  
  checkIfVerified();  
  return false;
});
*/

// 7. Links Scroll to Section
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


var swiper = new Swiper('.carousel--hero', {
  effect: 'fade',
  slidesPerView: '1',
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2500
  }
})

$(".findbeer").click(function(){
  $(".mapboxgl-ctrl-geolocate").click()
});