Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

$(document).foundation();

var prev = 0;
var $window = $(window);
var nav = $('.scrollhide-nav');

$window.off('scroll');
$window.on('scroll', function() {
    var scrollTop = $window.scrollTop();
    if (scrollTop < 0) scrollTop = 0;
    nav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
});


$("#gallery").lightGallery({
    selector: '.about__images',
    download: false
});

$('#video-gallery').lightGallery({
   counter : false,
    vimeoPlayerParams: {
        byline : 0,
        portrait : 0,
        color : '272A67'
    }
});  

$(function () {
  count1 = 0;
  wordsArray = ["Event", "Party", "Gig", "Karaoke", "Quiz", "Beer"];
  setInterval(function () {
    count1++;
    $("#photos-word").fadeOut(0, function () {
      $(this).text(wordsArray[count1 % wordsArray.length]).fadeIn(0);
    });
  }, 250);
});

$(function () {
  count2 = 0;
  eventsWordsArray = ["Events", "Parties", "Gigs", "Karaoke", "Quizes", "Festivals"];
  setInterval(function () {
    count2++;
    $("#events-word").fadeOut(0, function () {
      $(this).text(eventsWordsArray[count2 % eventsWordsArray.length]).fadeIn(0);
    });
  }, 250);
});

$(function () {
  count3 = 0;
  contactWordsArray = ["Hey", "Hi", "Yo", "Hello"];
  setInterval(function () {
    count3++;
    $("#contact-word").fadeOut(0, function () {
      $(this).text(contactWordsArray[count3 % contactWordsArray.length]).fadeIn(0);
    });
  }, 250);
});



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