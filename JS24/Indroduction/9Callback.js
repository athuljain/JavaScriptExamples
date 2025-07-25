// function greeting(name) {
//   console.log("Hello " + name);
// }

// function processUserInput(callback) {
//   let name = "Athul";
//   callback(name);  // calling the callback
// }

// processUserInput(greeting);  // Pass greeting as a callback


// -----------------------------------------------------------------------------



// function sayHello() {
//   console.log("Hello World");
// }

// function callMe(callback) {
//   callback();
// }

// callMe(sayHello); // Output: Hello World



// -----------------------------------------------------------



// function add(a, b) {
//   console.log("Sum:", a + b);
// }

// function calculate(num1, num2, callback) {
//   callback(num1, num2);
// }

// calculate(5, 10, add); // Output: Sum: 15



// ------------------------------------------------------------------------------


// Asynchronous Callback with setTimeout


function displayMessage() {
  console.log("This is printed after 2 seconds");
}

console.log("First");

setTimeout(displayMessage, 2000); // Delay of 2 seconds

console.log("second");


// -----------------------------------------------------------------------------------


// What is an Asynchronous Callback?
// An asynchronous callback is a function that is executed after a non-blocking operation finishes, 
// such as a timer, API request, file loading, or user event.

// These operations do not block the program execution, and the callback runs later when the task completes.

// ---------------------------------------------------------------------------------------



// setInterval() – Repeating Asynchronous Callback



// function showTime() {
//   console.log("Current time:", new Date().toLocaleTimeString());
// }

// setInterval(showTime, 2000); // Runs every 2 seconds


// --------------------------------------------------------------------------



// function greet(name) {
//   console.log("Hello " + name);
// }

// setTimeout(greet, 3000, "Athul"); // Executes after 3 seconds


