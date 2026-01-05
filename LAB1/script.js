// var y;
// console.log(y); // undefined

// console.log(y); // ReferenceError: y is not defined

// var x=10;
// var y = 20;
// console.log(y*x-2); // 198

// var y;
// console.log(typeof y); // "undefined"

// var x = "1";
// var y = 2;
// console.log(x+y); // "12"

// var x = 1;
// var y = true;
// console.log(x+y); // 2

/*Ask the user to enter a message then display it using the different html
heading tags (from <h1> to <h6>) using Loops. DO NOT write the header
element explicitly in your script!*/

// var message = prompt("Please enter a message:");

// for (var i = 1; i <= 6; i++) {
//     document.write("<h" + i + ">" + message + "</h" + i + ">");
    
// }



/*Write a script that takes from the user n values and returns their sum, stop
receiving values from user when he enters 0 or sum exceeds 100, check that
the entered data is numeric and inform the user with the total sum of the
entered values.*/

// let sum = 0;
// let value;

// do {
//   let input = prompt("Enter a number (0 to stop):");


//   if (input === null) {
//     continue;
//   }

//   input = input.trim();

//   if (input === "") {
//     alert("Please enter a number");
//     continue;
//   }

//   value = Number(input);

 
//   if (!Number.isFinite(value)) {
//     alert("Invalid input, please enter a numeric value");
//     continue;
//   }

 
//   if (value === 0) {
//     break;
//   }

//   sum += value;

// } while (sum <= 100);

// alert("Total sum is: " + sum);




/* On contact page prompt user to enter his name, make sure that name is string,
and let the user enter his birth year and make sure that it is a number, and it is
less than 2010, and then calculate his age. For each prompt if user input valid
show him next prompt, if not valid show him the same prompt again until user
enters it correctly (use loops). And after validating user input, write all user
input on the page in that format:
Name: ahmed
Birth year: 1981
Age: 30 */


// let name;

// do {
//   name = prompt("Enter your name:");

//   if (name === null) continue;

//   name = name.trim();

// } while (
//   name === "" || !isNaN(name)        
// );

// let birthYear;
// let input;

// do {
//   input = prompt("Enter your birth year:");

//   if (input === null) continue;

//   input = input.trim();
//   birthYear = Number(input);

// } while (
//   input === "" ||                     
//   !Number.isFinite(birthYear) || 
//   birthYear >= 2010                   
// );


// let age = new Date().getFullYear - birthYear;

// document.write("<p><b><u>Name:</b> " + name + "</p>");
// document.write("<p><b><u>Birth year:</u></b> " + birthYear + "</p>");
// document.write("<p><b><u>Age:</u></b> " + age + "</p>");

