"use strict"
// script

const FIRST_NAME = "YICHEN";
const LAST_NAME = "WANG";

const FIRST_NAME_ALT = "TONY";
const LAST_NAME_ALT = "LINDOROCK";

const FN_ARRAY = ["Y", "I", "C", "H", "E", "N"];
const LN_ARRAY = ["W", "A", "N", "G"];

const FN_ALT_ARRAY = ["T", "O", "N", "Y"];
const LN_ALT_ARRAY = ["L", "I", "N", "D", "O", "R", "O", "C", "K"];

const OTHERS = ["-", "-", "-", "?", "#", "@", "$", "-", "•"]

var firstName = FIRST_NAME;
var lastName = LAST_NAME;

var usingAltName = false;

// scroll event
// change the name when scrolling
$(window).scroll(function() {
  nameGlitch();
  
  // reset if scrolled to top
  var scrolled = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrolled <= 0){
    $("#about-name").html(FIRST_NAME + "<br>" + LAST_NAME);
  }
});

function nameGlitch() {
  var p = Math.random();
  if (p < 0.05) {
    p = Math.random();
    if (p < 0.25) {
      firstName = FIRST_NAME_ALT;
      lastName = LAST_NAME_ALT;

      usingAltName = true;
    } else {
      firstName = FIRST_NAME;
      lastName = LAST_NAME;

      usingAltName = false;
    }
  }

  for (let i = 0; i < firstName.length; i++) {
    firstName = replaceChar(firstName, randomizeCharCase(firstName[i]), i);
    firstName = replaceChar(firstName, randomizeCharType(firstName[i], i, true), i);
  }
  for (let i = 0; i < lastName.length; i++) {
    lastName = replaceChar(lastName, randomizeCharCase(lastName[i]), i);
    lastName = replaceChar(lastName, randomizeCharType(lastName[i], i, false), i);
  }

  $("#about-name").html(firstName + "<br>" + lastName);
}

function randomizeCharCase(letter) {
  var p = Math.random();
  if (p < 0.03) {
    p = Math.random();
    if (p < 0.5) {
      letter = letter.toLowerCase();
    } else {
      letter = letter.toUpperCase();
    }
  }
  return letter;
}

function randomizeCharType(letter, index, isFirstName) {
  var p = Math.random();
  if (p < 0.01) {
    p = Math.random();
    // change to special character
    if (p < 0.5) {
      letter = randArrayElement(OTHERS);
    // restore
    } else {
      letter = getOriginalChar(isFirstName, index)
    }
  }
  return letter;
}

function replaceChar(origStr, newChar, index) {
  var firstPart = origStr.substr(0, index);
  var lastPart = origStr.substr(index + 1);

  var newStr = firstPart + newChar + lastPart;
  return newStr;
}

function randArrayElement(array){
  return array[Math.floor(Math.random() * array.length)];
}

function getOriginalChar(isFirstName, index){
  if (!usingAltName && !isFirstName){
    return LN_ARRAY[index];
  }else if (usingAltName && isFirstName){
    return FN_ALT_ARRAY[index];
  }else if (!usingAltName && isFirstName){
    return FN_ARRAY[index];
  }
  return LN_ALT_ARRAY[index];
}