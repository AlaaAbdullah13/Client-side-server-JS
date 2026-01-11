function cloneAndColor(element) {
    var copy = element.cloneNode(true);
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    copy.style.backgroundColor = randomColor;
    document.body.appendChild(copy);
}