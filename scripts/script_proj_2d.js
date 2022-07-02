"use strict"

const SPEED = 4;

$(document).ready(function(){
    window.onscroll = function() {
    var scrollOffset = -(window.scrollY / SPEED);
    $(".banner").css('transform', 'translateY(' + scrollOffset + 'px)');

    handleNavbar();
  };
});