"use strict";

window.onload = function () {
  if (document.querySelector('.paralax_img_head')) {
    var head = document.querySelector('.paralax_img_head');
    var smoke = document.querySelector('.paralax_img_smoke');
    var text1 = document.querySelector('.paralax_img_text');
    var text2 = document.querySelector('.paralax_img_text2');
    var spray = document.querySelector('.paralax_img_spray');
    window.addEventListener('scroll', function (e) {
      var scroll = window.pageYOffset / 100;
      var rate = scroll * 5;
      var rate2 = scroll * 3;
      var rate3 = scroll * 2;
      var rate4 = scroll * 1;
      head.style.transform = 'translate3d(0px, ' + Math.floor(rate2) + 'px, 0px)';
      smoke.style.transform = 'translate3d(0px, -' + Math.floor(rate) + 'px, 0px)';
      text1.style.transform = 'translate3d(0px, ' + Math.floor(rate3) + 'px, 0px)';
      text2.style.transform = 'translate3d(0px, ' + Math.floor(rate4) + 'px, 0px)';
      spray.style.transform = 'translate3d(0px, ' + Math.floor(rate) + 'px, 0px)';
    });
  }

  var iconClick = document.querySelector('.icon-click');
  iconClick.addEventListener('click', hideMenu);

  function hideMenu() {
    var ul = document.querySelector('.topnav');
    var icon = document.querySelector('.icon');
    ul.classList.toggle("responsive");
  }
};