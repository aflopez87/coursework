// console.log("Hello, world!");

// Creates the string for the user when the page loads
alert("You have received this message because you have been chosen to open an important vault. Here is the secret combination:");

// Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-*/). Each must equal one of the three codes in the combination.

// The first code is the result of adding 9 and 1. 
let numOne = 9+1;

// The second code is the result of multiplying 12 by 100 and dividing by 3.
let numTwo = (12*10)/3;

// The third code is the result of subtracting 1 from 40.
let numThree = 40-(5%2);

// Prints the variables to the console
console.log(numOne);
console.log(numTwo);
console.log(numThree);

// Creates the alert box with the vault codes with concatenation
alert("The vault codes are: " + numOne + " - " + numTwo + " - " + numThree);

// Creates the alert box with the vault codes with template literals
alert(`The vault codes are: ${numOne} - ${numTwo} - ${numThree}`);