var currentIndex = 0;
var timer = null;
var speed = 1000; 
var marbles = document.querySelectorAll(".marble");
var speedBtn = document.querySelector("#speedBtn");
var speedDisplay = document.querySelector("#speedDisplay");

function moveMarble() {
    for (var i = 0; i < marbles.length; i++) {
        marbles[i].src = "marble1.jpg";
    }
    
    marbles[currentIndex].src = "marble2.jpg";
    
    currentIndex = (currentIndex + 1) % marbles.length;
}

function startAnim() {
    if (timer === null) {
        timer = setInterval(moveMarble, speed); 
    }
}

function stopAnim() {
    clearInterval(timer); 
    timer = null;
}

for (var i = 0; i < marbles.length; i++) {
    marbles[i].addEventListener("mouseover", function() {
        stopAnim();
    });
    
    marbles[i].addEventListener("mouseout", function() {
        startAnim();
    });
}

speedBtn.addEventListener("click", function() {
    stopAnim();
    
    if (isFinite(speed)) { 
        speed = (speed <= 250) ? 1000 : speed / 2;
    }
    
    speedDisplay.textContent = speed;
    startAnim();
});

window.addEventListener("load", startAnim); 