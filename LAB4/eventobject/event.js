function Event_object() {
    document.addEventListener("keydown", function (event) {
        var charEntered = event.key; 
        var code = event.keyCode;
        var message = "You pressed: " + charEntered + "\n";
        message += "ASCII Code: " + code;

        if (event.altKey) message += "\nAlt key was held!";
        if (event.ctrlKey) message += "\nCtrl key was held!";
        if (event.shiftKey) message += "\nShift key was held!";

        alert(message);
    });
}
Event_object();