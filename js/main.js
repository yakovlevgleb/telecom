"use strict";

var navi = 0;

jQuery(document).ready(function() {

  var backgrounds;
  var body = jQuery('body');
  if (body.hasClass('news')) {
    backgrounds = [
      'url(./img/news__bg_1.jpg)',
      'url(./img/news__bg_2.jpg)',
      'url(./img/news__bg_3.jpg)'
    ];

    var selectItem = function(index) {
      navi = index;
      body.css('background-image', backgrounds[index]);
    };

    setInterval(function() {
      if (navi < backgrounds.length) {
        selectItem(navi);
        navi = navi + 1;
      } else {
        navi = 0;
        selectItem(navi);
        navi = navi + 1;
      }
    }, 5000);

  }
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
