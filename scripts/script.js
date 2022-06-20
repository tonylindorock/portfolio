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
    if (document.title != "Portfolio") {
      window.location.href = "index.html";
      return;
    }
    goToTop();
  });
}

function goToTop(duration = 1000) {
  $("html, body").animate({
    scrollTop: "0"
  }, duration);
}

function windowScrolled() {
  if ($("#font-title-animated") !== null && scrolled) {
    $("#font-title-animated").attr("id", "font-title");
  }
}
