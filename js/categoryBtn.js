function BtnTopCat() {
    document.getElementById("categoryTopBtn").style.display = "none";
    document.getElementById("categoryBottomBtn").style.display = "block";
}

function BtnBottomCat() {

    setTimeout(function () { document.getElementById("categoryTopBtn").style.display = "block"; }, 400);
    setTimeout(function () { document.getElementById("categoryBottomBtn").style.display = "none"; }, 400);
}

function BtnTopBrand() {
    document.getElementById("BrandTopBtn").style.display = "none";
    document.getElementById("BrandBottomBtn").style.display = "block";
}

function BtnBottomBrand() {

    setTimeout(function () { document.getElementById("BrandTopBtn").style.display = "block"; }, 400);
    setTimeout(function () { document.getElementById("BrandBottomBtn").style.display = "none"; }, 400);
}

