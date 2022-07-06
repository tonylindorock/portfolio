"use strict"
// script

let scrolled = false;

$(document).ready(function() {
  setupBtns();
});

window.onscroll = function() {
  scrolled = true;
  windowScrolled();

  const timer = setTimeout(function() {
    scrolled = false;
    $("#font-title").attr("id", "font-title-animated");
  }, 1000);
};

function setupBtns() {
  $("#btn-portfolio").click(function() {
    goToTop();
  });
}

function goToTop(duration = 1000) {
  $("html, body").animate({
    scrollTop: "0"
  }, duration);
}

function windowScrolled() {
  // project title animation
  if ($("#font-title-animated") !== null && scrolled) {
    $("#font-title-animated").attr("id", "font-title");
  }

  handleNavbar();
}

function isInViewport(element) {
  var top = element.offsetTop;
  var left = element.offsetLeft;
  var width = element.offsetWidth;
  var height = element.offsetHeight;

  while(element.offsetParent) {
    element = element.offsetParent;
    top += element.offsetTop;
    left += element.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

function updateGallery(id, dir){
  var gallery = document.getElementById(id);

  var totalScroll = gallery.scrollWidth - (parseInt($("#" + id).css("padding-left")) * 2); 
  var ImgNum = gallery.childElementCount;

  var ratio = totalScroll / ImgNum;

  $("#" + id).css({
    "scroll-snap-type": "none"
  });
  $("#" + id).animate({
    scrollLeft: String(gallery.scrollLeft + dir * ratio)
  }, 250, function(){
    $("#" + id).css({
      "scroll-snap-type": "x mandatory"
    });
  });
}