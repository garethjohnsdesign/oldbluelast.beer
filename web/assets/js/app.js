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
