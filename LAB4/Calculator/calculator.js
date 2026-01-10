/**
 * Simple Calculator Logic
 * Lab Task 2: Implement functions for calculator.html
 */


function getDisplay() {
    return document.getElementById("Answer");
}

function EnterNumber(value) {
    var display = getDisplay();
    display.value += value;
}

function EnterOperator(operator) {
    var display = getDisplay();
    display.value += operator;
}

function EnterClear() {
    var display = getDisplay();
    display.value = "";
}

function EnterEqual() {
    var display = getDisplay();
    try {
        var result = eval(display.value);
        
        if (result === undefined || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Syntax Error";
    }
}