function getMinMax(...arr) {
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    return {min: min, max: max};
}

var result = getMinMax(10, 20, 5, 100, 1);
console.log("Min: " + result.min);
console.log("Max: " + result.max);