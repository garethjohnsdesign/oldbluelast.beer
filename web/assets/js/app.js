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