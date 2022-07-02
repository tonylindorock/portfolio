"use strict"

var prevScrollpos = 0;

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