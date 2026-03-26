// // for loop


// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// // Output: 1, 2, 3, 4, 5


// // while loop 

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }
// // Output: 1, 2, 3, 4, 5



// do while loop

// let number = 1;

// do {
//     console.log("The current number is: " + number);
//     number++;
// } while (number <= 10);

// // Output:
// // The current number is: 1
// // The current number is: 2
// // The current number is: 3
// // ...
// // The current number is: 10




// for loop more examples


// ------------------------------------------------------------------


// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let i = 1 → Start from 1.

// i <= 5 → Run until i is 5.

// i++ → Increase i by 1 after each loop.




// ------------------------------------------------------------------

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }


// Starts from 2.

// Increments by 2 (i += 2) to get even numbers only.


// -------------------------------------------------------------------


// const fruits = ["apple", "banana", "cherry"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }



// i = 0 → Start at first item.

// i < fruits.length → Continue till last index.

// fruits[i] → Access current item.


// ------------------------------------------------------------------



// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }

// console.log("Sum:", sum);


// Adds numbers 1 through 5 to the variable sum.


// --------------------------------------------------------------


// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }


// Start at 5.

// Decrease by 1 (i--) each loop.



// -------------------------------------------------------------



// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }



// Outer loop (i) controls the number of rows (from 1 to 5).

// Inner loop (j) adds stars in each row.

// In row 1: 1 star

// In row 2: 2 stars, etc.

// row accumulates stars, then we console.log that row.


// --------------------------------------------------------------------

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j + " ";
//   }
//   console.log(row);
// }


// Outer loop runs 5 times (for 5 rows).

// Inner loop prints numbers from 1 up to the current row number (i).

// row += j + " " appends each number with a space.


// ----------------------------------------------------------------------





// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = " ".repeat(n - i) + "* ".repeat(i);
//   console.log(row);
// }



// .repeat() repeats characters:

// " ".repeat(n - i) adds spaces to center the stars.

// "* ".repeat(i) adds i stars.

// This creates a centered pyramid.



// --------------------------------------------------------------


// for (let i = 1; i <= 4; i++) {
//   let row = "";
//   for (let j = 1; j <= 4; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }



// Outer loop runs 4 times (rows).

// Inner loop also runs 4 times per row, so each row has 4 stars.

// Result: 4×4 star square.






// let num = 1234;
// let rev = 0;

// while (num > 0) {
//   let digit = num % 10;
//   rev = rev * 10 + digit;
//   num = Math.floor(num / 10);
// }

// console.log(rev); // Output: 4321







// 1. Print numbers from 1 to 20


// The i++ tells the loop to add 1 to i every time it runs.


// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }


// ------------------------------------------------


// 2. Sum of the first 10 natural numbers

// We start with sum = 0 and add the value of i during each loop.


// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log("The sum is:", sum);


// --------------------------------------------------


// 3. Multiplication table (Example: 5)

// This prints the result of 5 * i for each step.


// let num = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(num * i);
// }



// ---------------------------------------------


// 4. Even numbers between 1 and 50

// By using i += 2, we skip the odd numbers and jump straight to the next even one.


// for (let i = 2; i <= 50; i += 2) {
//   console.log(i);
// }


// ------------------------------------------------

// 5. Iterate through an array of names

// In JavaScript, the for...of loop is the simplest way to look at every item in a list.


// let names = ["Alice", "Bob", "Charlie", "Diana"];

// for (let name of names) {
//   console.log(name);
// }


// ---------------------------------------

// 6. Factorial of a number

// Factorial is the product of all numbers up to your target. We start at 1 because multiplying by 0 results in 0.


let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial = factorial * i;
}
console.log("Factorial of 5 is:", factorial);



// --------------------------------------------

