// List of images - ensure these filenames match your local folder
var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
var currentIndex = 0;
var timer = null;

var imgElement = document.getElementById("galleryImg");

function nextPic() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        imgElement.src = images[currentIndex];
    }
}

function prevPic() {
    if (currentIndex > 0) {
        currentIndex--;
        imgElement.src = images[currentIndex];
    }
}

function slideshow() {
    if (timer !== null) return;

    timer = setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
    }, 2000); // 2000ms = 2 seconds 
}

function stopSlideshow() {
    clearInterval(timer);
    timer = null;
}