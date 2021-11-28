var webPage = document.querySelector('body')

var bigNav = document.querySelector("#bigMenu")
var hamburger = document.querySelector("#hamb");
var smNav = document.querySelector("#smMenu")
var xBut = document.querySelector("#exitMenu")

hamburger.addEventListener("click", function() {
    // switch from small to large menu
    bigNav.style.display = "flex";
    smNav.style.display = "none";

    // make fullscreen
    document.body.style.position = "relative";
    bigNav.style.position = "absolute";
    bigNav.style.top = "0px";
    bigNav.style.right = "0px";

    // webPage.style.height = "100vh";
    // webPage.style.overflowX = "hidden";
    // document.body.style.height = "100px";
    document.body.style.overflowY = "hidden";
    // document.body.style.height = "100vh";

}, false);

xBut.addEventListener("click", function() {
    bigNav.style.display = "none"
    smNav.style.display = "flex"
}, false);