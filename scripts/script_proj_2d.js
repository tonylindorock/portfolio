"use strict"

const SPEED = 4;

$(document).ready(function () {
  window.onscroll = function () {

    const banner = document.getElementsByClassName('banner');

    if (isInViewport(banner[0])) {
      window.requestAnimationFrame(function () {
        var scrollOffset = -parseInt((window.scrollY / SPEED));
        $(".banner").css({
          'transform': 'translateY(' + scrollOffset + 'px)',
          '-webkit-transform': 'translateY(' + scrollOffset + 'px)'
        });
      });
    }

    handleNavbar();
  };
});