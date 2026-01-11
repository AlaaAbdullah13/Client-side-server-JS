var clockDiv = document.querySelector("#clockDiv");
var startBtn = document.querySelector("#startBtn");
var timer = null;

startBtn.addEventListener("click", function() {
    alert("Clock Started");
    timer = setInterval(function() {
        var d = new Date();
        clockDiv.innerHTML = d.toLocaleTimeString();
    }, 1000);
});

document.addEventListener("keydown", function(e) {
    if (e.altKey && e.key === "w") {
        clearInterval(timer);
        alert("Clock stopped");
    }
});