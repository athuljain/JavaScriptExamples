

// Common Array Operations:


// Accessing Array Elements:

// You can access an element of an array using its index.

// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits[1]); // Output: Banana



// Modifying Array Elements:

// You can modify an array element by using its index.

// let fruits = ["Apple", "Banana", "Cherry"];
// fruits[1] = "Mango"; // Changes "Banana" to "Mango"
// console.log(fruits); // Output: ["Apple", "Mango", "Cherry"]


// Array Length:

// The length property returns the number of elements in an array.

// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits.length); // Output: 3


// Adding Elements to an Array:

// Use push() to add elements to the end of an array.

// let fruits = ["Apple", "Banana"];
// fruits.push("Cherry"); // Adds "Cherry" to the end
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]


// Use unshift() to add elements to the beginning of an array.

// let fruits = ["Banana", "Cherry"];
// fruits.unshift("Apple"); // Adds "Apple" to the beginning
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]


// Removing Elements from an Array:

// Use pop() to remove the last element of an array.

// let fruits = ["Apple", "Banana", "Cherry"];
// fruits.pop(); // Removes "Cherry"
// console.log(fruits); // Output: ["Apple", "Banana"]


// Use shift() to remove the first element of an array.

// let fruits = ["Apple", "Banana", "Cherry"];
// fruits.shift(); // Removes "Apple"
// console.log(fruits); // Output: ["Banana", "Cherry"]


// Finding the Index of an Element:

// Use indexOf() to find the index of an element in an array.

// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits.indexOf("Banana")); // Output: 1



// Iterating over Arrays:

// You can iterate over an array using a for loop or forEach() method.

// let fruits = ["Apple", "Banana", "Cherry"];

// // Using for loop
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // Using forEach method
// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });




// Array Methods:

// map(): Creates a new array with the results of calling a provided function on every element in the array.

// let numbers = [1, 2, 3, 4];
// let squaredNumbers = numbers.map(function(number) {
//     return number * number;
// });
// console.log(squaredNumbers); // Output: [1, 4, 9, 16]




// filter(): Creates a new array with all elements that pass the test implemented by the provided function.

// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0;
// });
// console.log(evenNumbers); // Output: [2, 4]



// reduce(): Executes a reducer function (that you provide) on each element in the array (from left to right) to reduce it to a single value.


// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);
// console.log(sum); // Output: 10


// Joining Array Elements:

// You can join elements of an array into a string using join().

// let fruits = ["Apple", "Banana", "Cherry"];
// let result = fruits.join(", ");
// console.log(result); // Output: "Apple, Banana, Cherry"


// Sorting Arrays:

// Arrays can be sorted using sort().

// let fruits = ["Banana", "Apple", "Cherry"];
// fruits.sort();
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
