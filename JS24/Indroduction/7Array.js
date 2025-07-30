

// Common Array Operations:


// Accessing Array Elements:

// You can access an element of an array using its index.

// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits)
// console.log(fruits[2]); 


// Modifying Array Elements:

// You can modify an array element by using its index.

// let fruits = ["Apple", "Banana", "Cherry"];
// fruits[1] = "Mango"; 
// console.log(fruits); 


// Array Length:

// The length property returns the number of elements in an array.

// let fruits = ["Apple", "Banana", "Cherry","Mango"];
// console.log(fruits.length); 


// Adding Elements to an Array:

// Use push() to add elements to the end of an array.

// let fruits = ["Apple", "Banana","Mango"];
// console.log(fruits);

// fruits.push("Cherry"); 
// console.log(fruits);


// Use unshift() to add elements to the beginning of an array.

// let fruits = ["Banana", "Cherry"];
// fruits.unshift("Apple"); 
// console.log(fruits); 


// Removing Elements from an Array:

// Use pop() to remove the last element of an array.

// let fruits = ["Apple", "Banana", "Cherry"];
// fruits.pop(); 
// console.log(fruits);


// Use shift() to remove the first element of an array.

// let fruits = ["Apple", "Banana", "Cherry"];
// fruits.shift(); 
// console.log(fruits);


// Finding the Index of an Element:

// Use indexOf() to find the index of an element in an array.

// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits.indexOf("Banana")); // Output: 1



// Iterating over Arrays:

// You can iterate over an array using a for loop or forEach() method.

let fruits = ["Apple", "Banana", "Cherry"];

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





// Initial array
// let items = ["apple", "banana", "cherry"];
// console.log("Initial Array:", items);

// // 1. push()
// let pushLength = items.push("date");
// console.log("\n1. After push('date'):", items, "| New Length:", pushLength);

// // 2. pop()
// let poppedItem = items.pop();
// console.log("2. After pop():", items, "| Popped Item:", poppedItem);

// // 3. shift()
// let shiftedItem = items.shift();
// console.log("3. After shift():", items, "| Shifted Item:", shiftedItem);

// // 4. unshift()
// let unshiftLength = items.unshift("apricot");
// console.log("4. After unshift('apricot'):", items, "| New Length:", unshiftLength);

// // 5. slice()
// let slicedItems = items.slice(0, 2);
// console.log("5. slice(0, 2):", slicedItems, "| Original Array:", items);

// // 6. splice()
// items.splice(1, 1, "blueberry", "cranberry");
// console.log("6. After splice(1, 1, 'blueberry', 'cranberry'):", items);

// // 7. concat()
// let moreItems = ["elderberry", "fig"];
// let combined = items.concat(moreItems);
// console.log("7. After concat(['elderberry', 'fig']):", combined);

// // 8. join()
// let joinedString = items.join(" - ");
// console.log("8. join(' - '):", joinedString);

// // 9. indexOf()
// let index = items.indexOf("cranberry");
// console.log("9. indexOf('cranberry'):", index);

// // 10. includes()
// let hasBanana = items.includes("banana");
// let hasBlueberry = items.includes("blueberry");
// console.log("10. includes('banana'):", hasBanana);
// console.log("10. includes('blueberry'):", hasBlueberry);


