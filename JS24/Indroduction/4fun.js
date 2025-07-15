// Named function

//  function Wish(){
//     console.log("hello good mrng")
//  }

 

//  -----------------------------------------------------------------


//  const msg="good mrng from soften"

//  function MrngWish(wish){
//     console.log('Mrng Wish : ',wish)
//  }
//  MrngWish(msg)


//  -------------------------------------------------------


    // function greet(name) {
    //     return `Hello, ${name}!`;
    // }

    // console.log(greet("Alice")); // Output: Hello, Alice!


    // ------------------------------------------------------


    // function SumFun(num1,num2){
    //     console.log(`sum of ${num1} and ${num2} is ${num1+num2}`)
    // }

    // SumFun(10,10)  





// Wish()

// Anonymous Functions: 


    // const Wish = function(){
    //     console.log('hi good morning')
    // }

    



    // const greet = function(name) {
    //     return `Hi, ${name}!`;
    // };
    // console.log(greet("Bob")); // Output: Hi, Bob!

    // Wish()


// Arrow Functions: 

    // const add=function (a,b){
    //     return a+b
    // }



    // const add = (a, b) => a + b;
    // console.log(add(5, 3)); // Output: 8

    // const wish=()=> console.log('good mrng')

// wish()

//     const wish1=()=>{
//         console.log("good eveng")
//     }

// wish1()


// Immediately Invoked Function Expressions (IIFE): 


        // (function() {
        //     console.log("This function runs immediately!");
        // })();




//  Print numbers from 1 to 10 using a while loop.? (named function)

                // function printNumbers() {
                //     let i = 1;
                //     while (i <= 10) {
                //         console.log(i);
                //         i++;
                //     }
                // }
                // printNumbers();

        

//  Calculate the sum of all odd numbers from 1 to 50 using a while loop.?Anonymous Function)


        // const calculateOddSum = function() {
        //     let sum = 0;
        //     let i = 1;
        //     while (i <= 50) {
        //         if (i % 2 !== 0) {
        //             sum += i;
        //         }
        //         i++;
        //     }
        //     console.log("Sum of odd numbers from 1 to 50:", sum);
        // };
        // calculateOddSum();



// Halve a number repeatedly until it becomes less than 1, printing each result.? (Arrow Function)


        // const halveNumber = (num) => {
        //     while (num >= 1) {
        //         console.log(num);
        //         num /= 2;
        //     }
        // };
        // halveNumber(100);


// -------------------------------


        // Write a function to check if a number is even or odd.?
// function checkEvenOdd(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }
// console.log(checkEvenOdd(5)); // Output: Odd

// // Create an arrow function to calculate the square of a number.?

// const square = (n) => n * n;
// console.log(square(4)); // Output: 16


// // Write a function to return the maximum of two numbers.?

// function max(a, b) {
//     return a > b ? a : b;
// }
// console.log(max(10, 20)); // Output: 20



// // Write an anonymous function that returns the factorial of a number.?


// const factorial = function(n) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }
//     return fact;
// };
// console.log(factorial(5)); // Output: 120


// // Arrow function to reverse a string.?

// const reverseString = (str) => str.split("").reverse().join("");
// console.log(reverseString("hello")); // Output: olleh


// // Function to find whether a number is prime.?


// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(7)); // Output: true


// // Function to print all even numbers from 1 to N.?


// function printEven(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) console.log(i);
//     }
// }
// printEven(10);


// // Arrow function to calculate the average of 3 numbers.?

// const average = (a, b, c) => (a + b + c) / 3;
// console.log(average(10, 20, 30)); // Output: 20



// // IIFE to print the current date.?


// (function() {
//     console.log("Today's date is:", new Date().toLocaleDateString());
// })();



// // Create a function that counts vowels in a string.?

// function countVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;

//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// // Example usage:
// console.log(countVowels("JavaScript")); // Output: 3
