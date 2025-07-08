// // Using var
// var greeting = "Hello";
// console.log(greeting); 
// var greeting="mrng"
// console.log(greeting); 

// // Using let
// let age = 25;
//  console.log(age);

// age = 26; // Updating value

// console.log(age); 



// // // Using const
// const country = "India";
// console.log(country); 



// country = "USA"; // Error: Assignment to constant variable

// console.log(country)

// ------------------------------------------------------------------------------------


// var x = 11;
// var y = 20;
// var z = x + y; 
// console.log(`sum of ${x} and ${y} = ${z}`)

// var str1 = "hello";
// var str2 = "world";
// var str3 = str1 + " " + str2; 


// console.log(str3);

//---------------------------------------------------------


// const name="naheel"

// console.log(typeof(name))

// const age=25

// console.log(typeof(age))

// let skills1

// console.log(typeof(skills1));

// const skills=["html","js","css"]

// console.log(skills)
// console.log(typeof(skills));

// const user={
//     name:"naheel",
//     tech:"mern"
// }

// console.log("object : ",user);
// console.log(typeof(user));













// ----------------------------------------------------------------------


// JavaScript Operators and Examples



// Arithmetic Operators

//  + (Addition), - (Subtraction), * (Multiplication), / (Division), % (Modulus).

let a = 10;
let b = 3;

// console.log("addition :",a + b); 
// console.log("subtraction : ",a - b); 
// console.log("multiplication : ",a * b); 
// console.log("divition : ",a / b); 
// console.log(a % b); 



// Comparison Operators
// Used to compare two values. The result is a boolean (true or false).

// Examples: >, <, >=, <=, ==, !=, ===, !==.


let z=5
let u="5"
let defenition=" is a number"


console.log(z+u);

console.log(z+defenition);

console.log("==",z==u)

console.log("===",z===u)



let x = 5;
let y = 10;


console.log("x > y",x > y); 
console.log(x < y); 
console.log(x == y); 
console.log(x != y); 
console.log("===",x === 5);
console.log(x !== "5"); 



// Logical Operators
// Used to combine or invert boolean values.

// Examples: && (AND), || (OR), ! (NOT).


let p = true;
let q = false;

console.log("&& :",p && q);
console.log("|| :",p || q); 
console.log("! :",!p);     



// Assignment Operators
// Used to assign values to variables.

// Examples: =, +=, -=, *=, /=.

let num = 10;

num += 5; 
console.log(num);

num *= 2;
console.log(num);


// Conditional (Ternary) Operator
//    ?:
// A shorthand for if-else statements. Syntax: condition ? valueIfTrue : valueIfFalse.

let age = 15;

let message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(message); 



let A=null
console.log(A)