"use strict"

const SPEED_RATIO = 4;

const banner = document.getElementsByClassName('banner');

function handleBanner(){
  if (isInViewport(banner[0])) {
    $(".banner").css("opacity", "1");
    
    window.requestAnimationFrame(function () {
      var scrollOffset = -parseInt((window.scrollY / SPEED_RATIO));
      $(".banner").css({
        'transform': 'translateY(' + scrollOffset + 'px)',
        '-webkit-transform': 'translateY(' + scrollOffset + 'px)'
      });
    });
  }else{
    $(".banner").css("opacity", "0");
  }
}