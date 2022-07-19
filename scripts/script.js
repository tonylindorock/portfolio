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
  }, 500);
};

function setupBtns() {
  $("#btn-portfolio").click(function() {
    goToTop();
  });
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function goToBottom(speed = 16) {
  var dis = Math.abs(document.body.scrollHeight - window.scrollY);
  var duration = dis / speed;

  $("html, body").animate({
    scrollTop: String(document.body.scrollHeight)
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