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

$(function () {
  count = 0;
  wordsArray = ["Event", "Party", "Gig", "Karaoke", "Quiz", "Beer"];
  setInterval(function () {
    count++;
    $("#photos-word").fadeOut(0, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(0);
    });
  }, 500);
});

$(function () {
  count = 0;
  eventsWordsArray = ["Events", "Parties", "Gigs", "Karaokes", "Quizes", "Festivals"];
  setInterval(function () {
    count++;
    $("#events-word").fadeOut(0, function () {
      $(this).text(eventsWordsArray[count % eventsWordsArray.length]).fadeIn(0);
    });
  }, 500);
});

$(function () {
  count = 0;
  eventsWordsArray = ["Hey", "Hi", "Yo", "Aye", "Hello"];
  setInterval(function () {
    count++;
    $("#contact-word").fadeOut(0, function () {
      $(this).text(eventsWordsArray[count % eventsWordsArray.length]).fadeIn(0);
    });
  }, 500);
});


var heroTimeline = anime.timeline({
  loop: true,
});

heroTimeline
  .add({
    targets: '#heroTimeline .hero-one',
    duration: 1,
    opacity: 1,
    delay: 500,
  })
  .add({
    targets: '#heroTimeline .hero-two',
    duration: 1,
    opacity: 1,
    delay: 500,
  })
  .add({
    targets: '#heroTimeline .hero-three',
    duration: 1,
    opacity: 1,
    delay: 500,
  })
    .add({
    targets: '#heroTimeline .hero-four',
    duration: 500,
    opacity: 1,
    delay: 500,
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