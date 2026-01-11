var openBtn = document.querySelector("#openBtn");
var childWindow;

openBtn.addEventListener("click", function() {
    childWindow = window.open("", "", "width=300,height=300");
    childWindow.document.write("<h1>Child Window</h1><p>Closing in 5 seconds...</p>");
    
    setTimeout(function() {
        childWindow.close();
    }, 5000);
});