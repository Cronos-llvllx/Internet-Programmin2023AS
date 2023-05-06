window.onload = rotate;

var theAd = 0;
var adImages = new Array("imagenes/banner1.png","imagenes/Banner2.png","imagenes/Banner3.jpg");

function rotate() {
    theAd++;
    if (theAd == adImages.length) {
        theAd = 0;
    }
    document.getElementById("adBanner").src = adImages[theAd];

     setTimeout(rotate, 3 * 1000);
}