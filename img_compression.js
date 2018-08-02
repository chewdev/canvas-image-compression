function compress(htmlSourceImg, quality, maxWidth, outputType){
    var img_type = "image/jpeg";
    if(typeof outputType !== "undefined" && outputType=="png"){
        img_type = "image/png";
    }

    maxWidth = maxWidth || 1280;
    var naturalW = htmlSourceImg.naturalWidth;
    var naturalH = htmlSourceImg.naturalHeight;
    var ratio = naturalH / naturalW;
    if (naturalW > maxWidth) {
        naturalW = maxWidth;
        naturalH = ratio * maxWidth;
    }

    var cvs = document.createElement('canvas');
    cvs.width = naturalW;
    cvs.height = naturalH;

    var ctx = cvs.getContext("2d").drawImage(htmlSourceImg, 0, 0, naturalW, naturalH);
    var newImage = cvs.toDataURL(img_type, quality/100);
    var newImageObj = new Image();
    newImageObj.crossOrigin="anonymous"
    newImageObj.src = newImage;
    return newImageObj;
}

var initImg = document.createElement("img");
initImg.setAttribute("src", "https://raw.githubusercontent.com/chewdev/pictures/master/baseball-pitcher-drawn.jpg");
initImg.setAttribute("crossOrigin", "Anonymous");
document.body.appendChild(initImg);
setTimeout(() => {
	var newImg = compress(initImg, 60, 500);
	document.body.appendChild(newImg);
}, 2000);