var bigNav = document.querySelector("#bigMenu")
var hamburger = document.querySelector("#hamb");
var smNav = document.querySelector("#smMenu")
var xBut = document.querySelector("#exitMenu")

hamburger.addEventListener("click", function() {
    bigNav.style.display = "flex"
    smNav.style.display = "none"
    // document.body.style.height = "100px";
}, false);

xBut.addEventListener("click", function() {
    bigNav.style.display = "none"
    smNav.style.display = "flex"
}, false);