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
