/*Fill an array of 5 elements from the user, sort it in descending and ascending orders
then display the output descending and ascending order in html using callback function */


// var numArray = [];

// for (var i = 0; i < 5; i++) {
//     var input = prompt("Enter number " + (i + 1) + ":");

//     while (input === null || input.trim() === "" || isNaN(input)) {
//         alert("Invalid! Please enter a number.");
//         input = prompt("Enter number " + (i + 1) + ":");
//     }

//     numArray.push(Number(input));
// }

// var descArray = numArray.slice(); 
// var ascArray = numArray.slice();

// descArray.sort(function(a, b) {
//     return b - a; 
// });

// ascArray.sort(function(a, b) {
//     return a - b;
// });

// var display = document.getElementById("displayArea");

// display.innerHTML = 
//     "<p style='color:red'>u've entered the values of " + numArray.join(", ") + "</p>" +
//     "<p style='color:red'>ur values after being sorted descending " + descArray.join(",") + "</p>" +
//     "<p style='color:red'>ur values after being sorted ascending " + ascArray.join(",") + "</p>";

//===================================================================================

/*Ask the user for number of persons wanted to be entered (the value should be a
number) */

var count = prompt("Enter number of persons:");
while (count === null || count.trim() === "" || isNaN(count)) {
    count = prompt("Invalid! Please enter a number:");
}
count = Number(count);

var persons = [];
for (var i = 0; i < count; i++) {
    var pName = prompt("Enter name for person " + (i + 1) + ":");
    while (pName === null || pName.length <= 3 || pName.length >= 10) {
        pName = prompt("Invalid! Name must be between 3 and 10 characters:");
    }

    var pAge = prompt("Enter age for " + pName + ":");
    while (pAge === null || isNaN(pAge) || pAge === "" || Number(pAge) <= 10 || Number(pAge) >= 60) {
        pAge = prompt("Invalid! Age must be a number between 10 and 60:");
    }
    persons.push({ name: pName, age: pAge });
}


var tableContent = "<table border='1' style='margin: 20px auto; border-collapse: collapse; width: 60%; font-weight: bold; text-align: center;'>";
tableContent += "<tr style='background-color: #f2f2f2;'> <th>#</th> <th>Name</th> <th>Age</th> </tr>";

for (var j = 0; j < persons.length; j++) {
    tableContent += "<tr>";
    tableContent += "<td>" + (j + 1) + "</td>";
    tableContent += "<td>" + persons[j].name + "</td>";
    tableContent += "<td>" + persons[j].age + "</td>";
    tableContent += "</tr>";
}

tableContent += "</table>";

document.getElementById("tableContainer").innerHTML = tableContent;

//===================================================================================

