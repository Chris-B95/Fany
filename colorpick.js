var colorWell
var defaultColor = "#2237aa";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}

function updateFirst(event) {
    var p = document.querySelector("p");

    if (p) {
        p.style.color = event.target.value;
    }
}

function updateAll(event) {
    document.querySelectorAll("p").forEach(function (p) {
        p.style.color = event.target.value;
    });
    document.querySelectorAll("code").forEach(function (code) {
        code.innerHTML = event.target.value;
    });
}