// 1. Imports
// ----------

import './jqueryload';
import 'what-input';
import mapboxgl from 'mapbox-gl';
import AOS from 'aos';
import Swiper from 'swiper';
import Cookies from 'js-cookie';
import './lib/foundation-explicit-pieces';
import '@fancyapps/fancybox/dist/jquery.fancybox.min';
import Swup from 'swup';
import SwupBodyClassPlugin from "@swup/body-class-plugin";
import SwupScrollPlugin from '@swup/scroll-plugin';
import SwupGaPlugin from '@swup/ga-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';

// Start Loop
$( document ).ready( function() {
  function init() {

// 2. Foundation Special Queries
// ------------------

Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

// 3. Foundation
// -------------

$(document).foundation();

// 5. Age Gate
// -----------


if (!Cookies.get('showed_agegate')) {
  setTimeout(function(){
    $('#agegatesimple').foundation('open');
    Cookies.set('showed_agegate', 'true', { expires: 365 });
  },500)
} else { 
  $('.testing').removeClass('testing--hide');
}

$('#agegatesimple .close-button-test').click(function() {
  $('#agegatesimple').foundation('close');
  $('.testing').removeClass('testing--hide');
});


// 4. Fancybox
// ---------------

if (document.querySelector('#gallery')) {
  $('[data-fancybox="gallery"]').fancybox({
  animationEffect: "fade",
  animationDuration: 366,
  loop: true,
  arrows: true,
  infobar: true,
  buttons: [
      "slideShow",
      "fullScreen",
      "close"
    ],
   transitionEffect: "tube"
  });
}

// 5. Carousel
// -----------

if (document.querySelector('#carousel--hero')) {
new Swiper('#carousel--hero', {
  effect: 'fade',
  slidesPerView: '1',
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2500
  }
})
}

// 6. Find Beer Button
// -------------------

if (document.querySelector('#findbeer')) {
$("#findbeer").click(function(){
  $(".mapboxgl-ctrl-geolocate").click()
});
}

// 6. Map
// ------

if (document.querySelector('#map')) {

  mapboxgl.accessToken = "pk.eyJ1IjoiZ2FyZXRoam9obnNkZXNpZ24iLCJhIjoiY2sxbnV1NGhmMGE4YTNvb2l1aGp5ano3ZiJ9.g6KdDp-CdRZI2KzanoxFQw";
  
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/garethjohnsdesign/ck9e839pj28z31imtu8hqevj0/draft',
    center: [-0.0800221, 51.5242972],
    zoom: 12
  });
 
  // add markers to map
  geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h6 class="primary-color secondary-font margin-bottom-1">' + marker.properties.title + '</h6><div class="primary-color">' + marker.properties.description + '</div>'))
    .addTo(map);
  });

  map.addControl(new mapboxgl.NavigationControl(), 'top-left');
  map.addControl(new mapboxgl.GeolocateControl ({positionOptions: {enableHighAccuracy: true},trackUserLocation: true}), 'top-left');
  
  // disable map zoom when using scroll
  map.scrollZoom.disable();

}

// 7. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 32,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});


// End Loop
}

// 8. Page Transitions
// -------------------
const options = {
  animationSelector: '[class*="swup-transition-"]',
  containers: [ '#swup-body' ],
  plugins: [
    new SwupPreloadPlugin(),
    new SwupBodyClassPlugin(),
    new SwupGaPlugin(),
    new SwupScrollPlugin({
        doScrollingRightAway: false,
        animateScroll: true,
        scrollFriction: 0.3,
        scrollAcceleration: 0.04
    })
  ]
};

const swup = new Swup( options );

// 9. Run Once
// -----------
init();

swup.on( 'contentReplaced', init );

} );