"use strict"

const MAX_SCROLL = 70;

var projTitle;
var progressLabel;

$(document).ready(function () {
    progressLabel = document.getElementById("page-progress")
    projTitle = progressLabel.innerHTML;

    window.onscroll = function () {
        handleBanner();
        windowScrolled();
        updatePageProgress();
    };
});

function windowScrolled() {
    var scroll = window.scrollY;
    if (scroll >= MAX_SCROLL) {
        $("#top-btns").removeClass("disabled");

        $("#top-btns").css({
            "opacity": "100",
            "top": "8px"
        });
    } else {
        $("#top-btns").addClass("disabled");

        $("#top-btns").css({
            "opacity": "0",
            "top": "0"
        });

        hideDropdown();
    }
}

function updatePageProgress() {
    var scrolled = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var progress = Math.round((scrolled / height) * 100);

    progress = clamp(progress, 0, 100);
    var number = "000";
    if (progress < 10){
        number = "&nbsp;&nbsp;" + progress;
    }else if(progress < 100){
        number = "&nbsp;" + progress;
    }else{
        number = progress;
    }

    var result = "";
    result += projTitle + "&nbsp;&nbsp;" + number + "%";

    progressLabel.innerHTML = result;
}

function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}