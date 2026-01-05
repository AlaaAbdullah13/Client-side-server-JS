/*Write a script that reads from the user his info; validates and displays it with a
welcoming message.*/


// var userName;
// do {
//     userName = prompt("Enter your Name (Characters only):");
// } while (!userName || !isNaN(userName));

// var phone;
// do {
//     phone = prompt("Enter your Phone Number (8 digits):");
// } while (!/^\d{8}$/.test(phone)); 

// var mobile;
// do {
//     mobile = prompt("Enter your Mobile Number (11 digits starting with 010, 011, or 012):");
// } while (!/^(010|011|012)\d{8}$/.test(mobile));

// var email;
// var regxEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// do {
//     email = prompt("Enter your Email (e.g., abc@123.com):");
// } while (!regxEmail.test(email));

// document.write("<h1 style='color:blue'>Welcome, " + userName + "!</h1>");
// document.write("<p><b>Phone:</b> " + phone + "</p>");
// document.write("<p><b>Mobile:</b> " + mobile + "</p>");
// document.write("<p><b>Email:</b> " + email + "</p>");
//==================================================================================
/*Write a script to determine whether the entered string is palindrome or
not. Ask the user whether to consider case of the entered string or not,
handle both cases in your script i.e. RADAR NOON MOOM are palindrome.*/


// var str = prompt("Enter a string to check if it's a palindrome:");
// while (str == null || str.trim() === "" || !isNaN(str)) {
//     str = prompt("Invalid input. Please enter a valid string:");
// }

// var considerCase = confirm("Do you want to consider case sensitivity?");
// var originalStr = str;
// var checkStr = str;

// if (!considerCase) {
//     checkStr = str.toLowerCase();
// }

// var reversedStr = checkStr.split("").reverse().join("");

// if (checkStr === reversedStr) {
//     alert("'" + originalStr + "' is a palindrome!");
// } else {
//     alert("'" + originalStr + "' is NOT a palindrome.");
// }
//==================================================================================


/*Write a script that ask the user to Enter the value of a circle’s radius in order to calculate
its area  Validate the input to ensure that the user enters a positive number.
Enter another value to calculate its square root and alert the result .
*/

// var radius;
// do {
//     radius = parseFloat(prompt("Enter the radius of the circle (positive number):"));
// } while (isNaN(radius) || radius <= 0);

// var area = Math.PI * Math.pow(radius, 2);
// alert("The area of the circle is: " + area.toFixed(2));

// var number;
// do {
//     number = parseFloat(prompt("Enter another positive number for square root:"));
// } while (isNaN(number) || number < 0);

// alert("The square root of " + number + " is: " + Math.sqrt(number).toFixed(2));

//==================================================================================

/*array from user input */

// var numbers = [];
// for (var i = 0; i < 3; i++) {
//     var input;
//     var isValid = false;
//     do {
//         input = prompt("Enter number " + (i + 1) + ":");
//         if (input === null) break;
//         var numValue = Number(input);
//         if (isNaN(numValue) || input.trim() === "") {
//             alert("Invalid input!");
//         } else {
//             numbers.push(numValue);
//             isValid = true; 
//         }
//     } while (!isValid);
// }

// var sum = numbers[0] + numbers[1] + numbers[2];
// var multiply = numbers[0] * numbers[1] * numbers[2];
// var division = numbers[0] / numbers[1] / numbers[2];

// document.write("<h2>Array Operations</h2><hr>");
// document.write("<p style='color:red'>Sum: " + numbers.join("+") + " = " + sum + "</p>");
// document.write("<p style='color:red'>Multiply: " + numbers.join("*") + " = " + multiply + "</p>");
// document.write("<p style='color:red'>Division: " + numbers.join("/") + " = " + division + "</p>");
//==================================================================================

/*Create a function that accepts only 2 parameters and throw exception if
number of parameters either less than or exceeds 2 parameters*/

// function checkParameters(p1, p2) {
//     if (arguments.length !== 2) {
//         throw("Error: arguments number should be 2");
//     }
//     return "Function executed with 2 parameters.";
// }

// try {
//     console.log(checkParameters(10, 20));
//     console.log(checkParameters(10));
//     console.log(checkParameters(10, 20, 30));
// }
// catch (e) {
//     console.log(e);
// }   

//==================================================================================

/*Write a function that takes any number of parameters and returns them
reversed using array’s reverse function.*/

// function reverseParameters() {
//     var arr = [];
//     for (var i = 0; i < arguments.length; i++) {
//         arr.push(arguments[i]);
//     }
//     return arr.reverse();
// }

// var count = Number(prompt("How many values?"));
// var values = [];
// if (!isNaN(count) && count > 0) {
//     for (var i = 0; i < count; i++) {
//         values.push(prompt("Enter value " + (i + 1)));
//     }
//     var result = reverseParameters.apply(null, values);
//     alert("Reversed values: " + result.join(", "));
// }
//==================================================================================

/*Write your own function that can add n values ensure that all passing
parameters are numerical values only*/

// function addNValues() {
//     var sumData = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] !== "number") {
//             throw("function parameters should be numbers");
//         }
//         sumData += arguments[i];
//     }
//     return sumData;
// }

// try {
//     console.log(addNValues(10, 20, 30));
//     console.log(addNValues(5, "15", 25)); 
// }
// catch (e) {
//     console.log(e);
// }   

//==================================================================================

/*Make a function that takes date string as a parameter, and returns the Day
name (Saturday, Sunday,…) of the given date.*/

// function getDayName(dateString) {
//     var d = new Date(dateString);
//     if (isNaN(d.getTime())) {
//         return "Invalid Date";
//     }
//     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     return days[d.getDay()];
// }

// var userInput = prompt("Enter a date (MM/DD/YYYY)");
// if (userInput != null) {
//     var dayName = getDayName(userInput);
//     document.write("<h3>Day: <span style='color:green; text-decoration:underline;'>" + dayName + "</span></h3>");
// }
//==================================================================================

