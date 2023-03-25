window.onload = rotate;

var theAd = 0;
var adImages = new Array("imagenes/banner1.jpg","imagenes/banner2.jpg","imagenes/banner3.jpg");

function rotate() {
    theAd++;
    if (theAd == adImages.length) {
        theAd = 0;
    }
    document.getElementById("adBanner").src = adImages[theAd];

     setTimeout(rotate, 3 * 1000);
}