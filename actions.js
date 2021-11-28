var webPage = document.querySelector('body')
var bigNav = document.querySelector("#bigMenu")
var hamburger = document.querySelector("#hamb");
var smNav = document.querySelector("#smMenu")
var xBut = document.querySelector("#exitMenu")
var homeDiv = document.querySelector(".home")
var headers = document.querySelector("header")
var bioDiv = document.querySelector(".bio")
var projectDiv = document.querySelector(".projects")
var headerTwo = document.querySelector("h2")
var skillDiv = document.querySelector(".skills")
var resumeDiv = document.querySelector(".resume")
var contactDiv = document.querySelector(".contact")
var conHead = document.querySelector(".con-head")
var thx = document.querySelector(".thank-you")

hamburger.addEventListener("click", function() {
    // switch from small to large menu
    bigNav.style.display = "flex";
    smNav.style.display = "none";
    // make fullscreen
    document.body.style.display = "block";
    document.body.style.position = "relative";
    bigNav.style.position = "absolute";
    bigNav.style.top = "0px";
    bigNav.style.right = "0px";
    // hide ENTIRE webpage "behind" menu

    homeDiv.style.display = "none";
    homeDiv.style.display = "none";
    headers.style.display = "none";
    projectDiv.style.display = "none";
    bioDiv.style.display = "none";
    headerTwo.style.display = "none";
    skillDiv.style.display = "none";
    resumeDiv.style.display = "none";
    contactDiv.style.display = "none";
    thx.style.display = "none";
    conHead.style.display = "none";

    // disable scrolling
    document.body.style.overflowY = "hidden";
}, false);

xBut.addEventListener("click", function() {
    bigNav.style.display = "none"
    smNav.style.display = "flex"
}, false);