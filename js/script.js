"use strict"
// script

function goToTop() {
  window.scrollTo(0, 0);
}

function goToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

function scrollToElement(id) {
  var element = document.getElementById(id);
  element.scrollIntoView();
}

function openNavMenu(id){
  if (id === 1){
    document.getElementById("nav-menu").style.height = "100%";
  }else{
    document.getElementById("nav-menu").style.height = "0";
  }
}

function isInViewport(element) {
  var top = element.offsetTop;
  var left = element.offsetLeft;
  var width = element.offsetWidth;
  var height = element.offsetHeight;

  while (element.offsetParent) {
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

function isTouchScreen() {
  if (window.matchMedia("(pointer: coarse)").matches) {
    return true;
  }
  return false;
}