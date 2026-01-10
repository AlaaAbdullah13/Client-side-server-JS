/**
 * Dynamic Text Styling Logic
 * Lab Task 3: Implement functions for TextStyle.html
 */

var para = document.getElementById("PAR");

function ChangeFont(fontValue) {
    para.style.fontFamily = fontValue;
}

function ChangeAlign(alignValue) {
    para.style.textAlign = alignValue;
}

function ChangeHeight(heightValue) {
    para.style.lineHeight = heightValue;
}

function ChangeLSpace(spaceValue) {
    para.style.letterSpacing = spaceValue;
}

function ChangeIndent(indentValue) {
    para.style.textIndent = indentValue;
}

function ChangeTransform(transformValue) {
    para.style.textTransform = transformValue;
}

function ChangeDecorate(decorateValue) {
    para.style.textDecoration = decorateValue;
}

function ChangeBorder(borderValue) {
    para.style.borderStyle = borderValue;
}

function ChangeBorderColor(colorValue) {
    para.style.borderColor = colorValue;
}