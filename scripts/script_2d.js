"use strict"

var RISE_THUMBNAIL;
var Q9_THUMBNAIL;

let rise_tn_showed = false;
let q9_tn_showed = false;

var prevScrollpos = 0;

$(document).ready(function(){
    RISE_THUMBNAIL = document.getElementById("rise-thumbnail");
    Q9_THUMBNAIL = document.getElementById("q9-thumbnail");
});

window.onscroll = function() {
    handleNavbar();

    
    if (!rise_tn_showed && isInViewport(RISE_THUMBNAIL)){
        $("#rise-thumbnail").css({
            "animation": "1s ease 0.5s 1 scale-out-fade-in",
            "animation-fill-mode": "backwards"
        });

        rise_tn_showed = true;
    }

    if (!q9_tn_showed && isInViewport(Q9_THUMBNAIL)){
        $("#q9-thumbnail").css({
            "animation": "1s ease 0.5s 1 scale-out-fade-in",
            "animation-fill-mode": "backwards"
        });

        q9_tn_showed = true;
    }
  };

function snapContainerScrolled(){
    var currentScrollPos = $("#2d-home-body").scrollTop();
    
    if (prevScrollpos > currentScrollPos) {
        $("#navbar").css("bottom", "0");
    } else {
        $("#navbar").css("bottom", "-84px");
    }

    prevScrollpos = currentScrollPos;

    if ($("#2d-home-body").scrollTop() >= document.getElementById("2d-home-body").scrollHeight - 2) {
        $("#navbar").css("bottom", "0");
    }
}