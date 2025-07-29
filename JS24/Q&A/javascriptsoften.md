**Q: What is JavaScript?**
    **A:** JavaScript is a high-level, interpreted (or JIT-compiled) programming language 
    primarily known as the scripting language for Web pages. It is also used in many non-browser 
    environments thanks to Node.js. It's prototype-based, multi-paradigm, single-threaded, dynamic, 
    and supports object-oriented, imperative, and declarative (e.g., functional programming) styles.


**Q: What are the different data types in JavaScript?**
    **A:** JavaScript has two main categories of data types:
    *   **Primitive Types:**
        *   `string`: Sequence of characters.
        *   `number`: Numeric values (both integer and floating-point).
        *   `bigint`: For arbitrarily large integers.
        *   `boolean`: `true` or `false`.
        *   `undefined`: A variable that has been declared but not assigned a value.
        *   `symbol`: Unique and immutable primitive value.
        *   `null`: Represents the intentional absence of any object value.
    *   **Reference Type (Object):**
        *   `object`: Collections of properties (including `Array`, `Function`, `Date`, `RegExp`, etc.).



**Q: What is the difference between `null` and `undefined`?**
    **A:**
    *   `undefined` typically means a variable has been declared but not yet assigned a value. It's also the default return value of functions that don't explicitly return anything.
    *   `null` is an assignment value. It can be assigned to a variable as a representation of "no value" or an intentional absence of any object value.



**Q: What is the difference between `==` and `===`?**
    **A:**
    *   `==` (Abstract Equality Comparison): Compares two values for equality *after* performing type coercion if necessary.
    *   `===` (Strict Equality Comparison): Compares two values for equality *without* performing type coercion. Both value and type must be the same. It's generally recommended to use `===`.
    ```javascript
    console.log(5 == "5");  // true (coercion happens)
    console.log(5 === "5"); // false (types are different)



**Q: What are `var`, `let`, and `const`? What are their differences?**
    **A:**
    *   **`var`:**
        *   Function-scoped or globally-scoped.
        *   Can be re-declared and updated.
        *   Hoisted to the top of its scope and initialized with `undefined`.
    *   **`let`:**
        *   Block-scoped (`{}`).
        *   Can be updated but not re-declared within the same scope.
        *   Hoisted but not initialized (Temporal Dead Zone).
    *   **`const`:**
        *   Block-scoped.
        *   Cannot be updated or re-declared.
        *   Must be initialized during declaration.
        *   Hoisted but not initialized (Temporal Dead Zone).
        *   For objects and arrays, the reference is constant, but the content can be modified.


**Q: What are template literals (template strings)?**
    **A:** Template literals are string literals allowing embedded expressions, multi-line strings, and string interpolation. They are enclosed by backticks (`` ` ``).
    ```javascript
    const name = "World";
    const greeting = `Hello, ${name}!
    This is a multi-line string.`;
    console.log(greeting);


**Q: What is the use of the `break` and `continue` statements?**
    **A:**
    *   `break`: Terminates the current loop, `switch`, or label statement and transfers program control to the statement following the terminated statement.
    *   `continue`: Terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.


**Q: What are the different types of loops in JavaScript?**
    **A:**
    *   `for`: Loops through a block of code a number of times.
    *   `for...in`: Loops through the properties of an object (enumerable, non-Symbol properties).
    *   `for...of`: Loops over iterable objects (like `Array`, `Map`, `Set`, `String`, etc.), giving you the values.
    *   `while`: Loops through a block of code while a specified condition is true.
    *   `do...while`: Loops through a block of code once, and then repeats the loop while a specified condition is true.
    *   Array iteration methods like `forEach`, `map`, `filter`, etc.



**Q: What's the difference between `for...in` and `for...of`?**
    **A:**
    *   `for...in` iterates over the *enumerable property names (keys)* of an object. It can also iterate over inherited properties.
    *   `for...of` (ES6) iterates over the *values* of an iterable object (e.g., `Array`, `String`, `Map`, `Set`). It does not work directly on plain objects because they are not inherently iterable.




    **Q: What are the ways to declare a function in JavaScript?**
    **A:**
    *   **Function Declaration (Statement):**
        ```javascript
        function greet(name) {
            return `Hello, ${name}!`;
        }
        ```
    *   **Function Expression (Anonymous or Named):**
        ```javascript
        const greet = function(name) { // Anonymous
            return `Hello, ${name}!`;
        };
        const greetNamed = function sayHello(name) { // Named
            return `Hello, ${name}!`;
        };
        
    *   **Arrow Function (ES6):**
        ```javascript
        const greet = (name) => `Hello, ${name}!`;
        ```
    *   **Function Constructor (rarely used):**
        ```javascript
        const greet = new Function('name', 'return `Hello, ${name}!`;');
        ```




        **Q: What are higher-order functions?**
    **A:** Higher-order functions are functions that either:
    1.  Take one or more functions as arguments.
    2.  Return a function as their result.
    Examples include `map`, `filter`, `reduce`, `setTimeout`, and functions that return other functions (like in closures or currying).



    **Q: What are rest parameters?**
    **A:** Rest parameters (ES6, syntax: `...paramName`) allow a function to accept an indefinite number of arguments as an array. It collects all remaining arguments passed to the function into a single array. It must be the last parameter in the function definition.
    ```javascript
    function sumAll(...numbers) { // numbers will be an array
        return numbers.reduce((sum, num) => sum + num, 0);
    }
    console.log(sumAll(1, 2, 3));    // 6
    console.log(sumAll(10, 20, 30, 40)); // 100





    **Q: What is a callback function?**
    **A:** A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. Callbacks are fundamental to asynchronous programming in JavaScript.
    ```javascript
    function processData(data, callback) {
        // ... processing data ...
        const result = data.toUpperCase();
        callback(result);
    }
    processData("hello", function(processedResult) {
        console.log("Processed: " + processedResult); // Processed: HELLO
    });
    ```




    **Q: What are some common array methods? (Mention at least 5)**
    **A:**
    *   **`push()`:** Adds one or more elements to the end of an array and returns the new length.
    *   **`pop()`:** Removes the last element from an array and returns that element.
    *   **`shift()`:** Removes the first element from an array and returns that element.
    *   **`unshift()`:** Adds one or more elements to the beginning of an array and returns the new length.
    *   **`slice(start, end)`:** Returns a shallow copy of a portion of an array into a new array object. Original array is not modified.
    *   **`splice(start, deleteCount, ...itemsToAdd)`:** Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Modifies the original array.
    *   **`concat()`:** Merges two or more arrays. Returns a new array.
    *   **`join(separator)`:** Joins all elements of an array into a string.
    *   **`indexOf(element)`:** Returns the first index at which a given element can be found, or -1 if not present.
    *   **`includes(element)`:** Determines whether an array includes a certain value, returning `true` or `false`.





    What is the spread operator (`...`)? How is it used with arrays and objects?**
    **A:** The spread operator (ES6) allows an iterable (like an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. For objects (ES2018+), it copies an object's own enumerable properties into a new object.
    *   **With Arrays:**
        ```javascript
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const combined = [...arr1, ...arr2, 7]; // [1, 2, 3, 4, 5, 6, 7] - Concatenation
        const copy = [...arr1];                 // [1, 2, 3] - Shallow copy

        function sum(x, y, z) { return x + y + z; }
        sum(...arr1); // Equivalent to sum(1, 2, 3)
        ```
    *   **With Objects (ES2018+):**
        ```javascript
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        const merged = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 } (obj2's b overwrites obj1's)
        const cloned = { ...obj1 };           // { a: 1, b: 2 } - Shallow clone
        ```


        