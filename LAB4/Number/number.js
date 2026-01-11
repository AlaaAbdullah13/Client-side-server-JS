var numInput = document.querySelector("#myInput");

numInput.addEventListener("keypress", function(e) {
    var charCode = e.keyCode || e.which;
    if (charCode < 48 || charCode > 57) {
        e.preventDefault();
    }
});