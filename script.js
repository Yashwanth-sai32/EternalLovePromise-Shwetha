"use strict";

// DOM elements
const messageBtn = document.getElementById("message");
const success = document.getElementById("success-icon");
const container = document.getElementById("container");
const envelopeHide = document.getElementById("envelope-details");
const click = document.getElementById("click");
const noLove = document.getElementById("no");
const angry = document.getElementById("angry");
const love = document.getElementById("yes");
const happy = document.getElementById("happy");
const failureMessage = document.getElementById("failure-message");
const successMessage = document.getElementById("success-message");
const copyright = document.querySelector(".copy-middle");
// const removeType = document.getElementById("click");

// Hiding and displaying the message box when the envelope icon is clicked
let deletedDiv = null;
messageBtn.addEventListener("click", function () {
  if (deletedDiv === null) {
    deletedDiv = envelopeHide;
    click.style.display = "none";
    messageBtn.classList.remove("fa-envelope");
    messageBtn.classList.add("fa-envelope-open-text");
    envelopeHide.style.display = "block";
    angry.style.display = "none";
    happy.style.display = "none";
    noLove.style.display = "block";
    love.style.display = "block";
    copyright.style.display = "none";
  } else if (deletedDiv !== null) {
    deletedDiv = null;
    click.style.display = "block";
    messageBtn.classList.remove("fa-envelope-open-text");
    messageBtn.classList.add("fa-envelope");
    envelopeHide.style.display = "none";
    click.style.display = "none";
    successMessage.style.display = "none";
    failureMessage.style.display = "none";
    copyright.style.display = "block";
    copyright.style.alignItems = "center";
  }
});

// Implementing the code for no-love ❌💔
noLove.addEventListener("click", function () {
  this.style.display = "none";
  angry.style.display = "block";
  successMessage.style.display = "none";
  failureMessage.style.display = "block";
  love.style.display = "none";
});

// Implementing the code for love ✅🩵
love.addEventListener("click", function () {
  this.style.display = "none";
  happy.style.display = "block";
  successMessage.style.display = "block";
  failureMessage.style.display = "none";
  noLove.style.display = "none";
});
