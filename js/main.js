jQuery(document).ready(function() {
  var images = ['./img/news__bg_1.jpg', './img/news__bg_2.jpg', './img/news__bg_3.jpg'];
  var i = 0;

  setInterval(function() {
    $('.news').animate({},function() {
      if (i >= images.length) {
        i = 0;
      }
      $(this).css('background-image', 'url(' + images[i++] + ')').animate({});
    });
  }, 5000);
});


var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav button');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
