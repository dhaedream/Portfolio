var webPage = document.querySelector('body')
var bigNav = document.querySelector("#bigMenu")
var hamburger = document.querySelector("#hamb");
var smNav = document.querySelector("#smMenu")
var xBut = document.querySelector("#exitMenu")
var navLinks = document.querySelectorAll(".nav-tab")

hamburger.addEventListener("click", function() {
    // switch from small to large menu
    bigNav.style.display = "flex";
    smNav.style.display = "none";
    // disable scrolling
    document.body.style.overflowY = "hidden";
}, false);

xBut.addEventListener("click", function() {
    bigNav.style.display = "none"
    smNav.style.display = "flex"
    console.log("close")
    // enable scrolling
    document.body.style.overflowY = "visible";

}, false);

for (i of navLinks) {
    i.addEventListener("click", function() {
        bigNav.style.display = "none"
        smNav.style.display = "flex"
        document.body.style.overflowY = "visible";
    }, false);
}