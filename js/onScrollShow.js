var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("filterTop").style.top = "52px";
    } else {
        document.getElementById("filterTop").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}