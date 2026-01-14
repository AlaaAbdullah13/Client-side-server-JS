var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

var output = document.getElementById("output");

var allStrings = fruits.every(function (item) {
    return typeof item === "string";
});

var someStartsWithA = fruits.some(function (item) {
    return item.startsWith("a");
});


var filteredFruits = fruits.filter(function (item) {
    return item.startsWith("b") || item.startsWith("s");
});


var likeFruits = fruits.map(function (item) {
    return "I like " + item;
});



console.log("Original Array:", fruits);
console.log("All strings:", allStrings);
console.log("Some start with a:", someStartsWithA);
console.log("Filtered (b or s):", filteredFruits);
console.log("Mapped:", likeFruits);
