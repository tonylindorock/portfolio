"use strict"

const SPEED_RATIO = 4;

$(document).ready(function () {
  window.onscroll = function () {

    const banner = document.getElementsByClassName('banner');

    if (isInViewport(banner[0])) {
      window.requestAnimationFrame(function () {
        var scrollOffset = -parseInt((window.scrollY / SPEED_RATIO));
        $(".banner").css({
          'transform': 'translateY(' + scrollOffset + 'px)',
          '-webkit-transform': 'translateY(' + scrollOffset + 'px)'
        });
      });
    }

    handleNavbar();
  };
});