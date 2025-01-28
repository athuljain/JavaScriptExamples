// Named function

    function greet(name) {
        return `Hello, ${name}!`;
    }
    console.log(greet("Alice")); // Output: Hello, Alice!



// Anonymous Functions: 

    const greet = function(name) {
        return `Hi, ${name}!`;
    };
    console.log(greet("Bob")); // Output: Hi, Bob!


// Arrow Functions: 

    // // const add=function (a,b){
    // //     return a+b
    // // }



//     const add = (a, b) => a + b;
//     console.log(add(5, 3)); // Output: 8


// Immediately Invoked Function Expressions (IIFE): 


        // (function() {
        //     console.log("This function runs immediately!");
        // })();




//  Print numbers from 1 to 10 using a while loop.? (named function)

                function printNumbers() {
                    let i = 1;
                    while (i <= 10) {
                        console.log(i);
                        i++;
                    }
                }
                printNumbers();

        

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
