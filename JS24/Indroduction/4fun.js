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


        (function() {
            console.log("This function runs immediately!");
        })();


        