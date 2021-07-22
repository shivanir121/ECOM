function BBtnTop() {
    document.getElementById("brandTopBtn").style.display = "none";
    document.getElementById("brandBottomBtn").style.display = "block";
}
function BBtnBottom() {

    setTimeout(function () { document.getElementById("brandTopBtn").style.display = "block"; }, 1000);
    setTimeout(function () { document.getElementById("brandBottomBtn").style.display = "none"; }, 1000);
}