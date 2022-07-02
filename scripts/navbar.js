"use strict"
// This script handles how navigation bar works throughout all pages

var prevScrollpos;

$(document).ready(function() {
    prevScrollpos = 0;
});

function handleNavbar(){
    // navbar animation
    var currentScrollPos = window.scrollY;
  
    if (prevScrollpos > currentScrollPos) {
      $("#navbar").css("bottom", "0");
    } else {
      $("#navbar").css("bottom", "-84px");
    }
    prevScrollpos = currentScrollPos;
  
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 3) {
      $("#navbar").css("bottom", "0");
    }
}