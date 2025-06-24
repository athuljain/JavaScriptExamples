// Named function

//  function Wish(){
//     console.log("hello good mrng")
//  }


    // function greet(name) {
    //     return `Hello, ${name}!`;
    // }
    // console.log(greet("Alice")); // Output: Hello, Alice!


    // function SumFun(num1,num2){
    //     console.log(`sum of ${num1} and ${num2} is ${num1+num2}`)
        

    // }

    // SumFun(10,11)



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



    const add = (a, b) => a + b;
    console.log(add(5, 3)); // Output: 8

    const wish=()=> console.log('good mrng')

wish()

    const wish1=()=>{
        console.log("good eveng")
    }




// Immediately Invoked Function Expressions (IIFE): 


        (function() {
            console.log("This function runs immediately!");
        })();




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


        const calculateOddSum = function() {
            let sum = 0;
            let i = 1;
            while (i <= 50) {
                if (i % 2 !== 0) {
                    sum += i;
                }
                i++;
            }
            console.log("Sum of odd numbers from 1 to 50:", sum);
        };
        calculateOddSum();



// Halve a number repeatedly until it becomes less than 1, printing each result.? (Arrow Function)


        const halveNumber = (num) => {
            while (num >= 1) {
                console.log(num);
                num /= 2;
            }
        };
        halveNumber(100);
