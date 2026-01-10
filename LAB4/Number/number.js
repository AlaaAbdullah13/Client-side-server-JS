function myNumberInput() {
    const myInput = document.getElementById("myNumberInput");

    myInput.addEventListener("keypress", function(event) {
        let charCode = event.keyCode || event.which;

        if (charCode < 48 || charCode > 57) {
            event.preventDefault();
            
            console.log("Blocked non-numeric character with ASCII: " + charCode);
        }
    });
}

myNumberInput();