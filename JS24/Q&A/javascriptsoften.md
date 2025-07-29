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


        **Q: What are Promises? What states can a Promise be in?**
    **A:** A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It's a placeholder for a future value.
    States:
    1.  **`pending`**: Initial state, neither fulfilled nor rejected.
    2.  **`fulfilled` (or `resolved`)**: The operation completed successfully, and the Promise has a resulting value.
    3.  **`rejected`**: The operation failed, and the Promise has a reason for the failure.
    A promise is *settled* if it's either fulfilled or rejected (i.e., not pending).

59. **Q: How do you use Promises? (e.g., `then`, `catch`, `finally`)**
    **A:**
    *   **`promise.then(onFulfilled, onRejected)`:** Attaches callbacks to handle the fulfilled or rejected state of the Promise. `onFulfilled` is called with the resolved value, and `onRejected` (optional) is called with the rejection reason. Returns a new Promise, allowing chaining.
    *   **`promise.catch(onRejected)`:** A shorthand for `promise.then(null, onRejected)`. Attaches a callback to handle only the rejected state. Also returns a new Promise.
    *   **`promise.finally(onFinally)`:** Attaches a callback that is executed when the Promise is settled (either fulfilled or rejected). It receives no arguments. Useful for cleanup. Returns a new Promise.
    ```javascript
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5;
                if (success) {
                    resolve("Data fetched successfully!");
                } else {
                    reject(new Error("Failed to fetch data."));
                }
            }, 1000);
        });
    }

    fetchData()
        .then(data => {
            console.log(data); // "Data fetched successfully!"
            return data.toUpperCase(); // Value passed to next .then
        })
        .then(processedData => {
            console.log("Processed:", processedData);
        })
        .catch(error => {
            console.error(error.message); // "Failed to fetch data."
        })
        .finally(() => {
            console.log("Fetch operation finished.");
        });
    ```

60. **Q: What is `async/await`? How does it relate to Promises?**
    **A:** `async/await` (ES2017) is syntactic sugar built on top of Promises, making asynchronous code look and behave a bit more like synchronous code, which can improve readability.
    *   **`async` keyword:** Used to declare an asynchronous function. An `async` function implicitly returns a Promise. If the function returns a value, the Promise will be resolved with that value. If it throws an error, the Promise will be rejected.
    *   **`await` keyword:** Can only be used inside an `async` function. It pauses the execution of the `async` function until the Promise it's waiting for is settled (resolved or rejected). If the Promise resolves, `await` returns the resolved value. If it rejects, `await` throws the rejection reason (which can be caught with `try...catch`).
    ```javascript
    async function fetchDataAsync() {
        try {
            console.log("Fetching data...");
            const data = await fetchData(); // fetchData is the Promise-returning function from above
            console.log(data);
            const processedData = data.toUpperCase();
            console.log("Processed:", processedData);
            return processedData;
        } catch (error) {
            console.error("Error in async function:", error.message);
            throw error; // Re-throw if needed
        } finally {
            console.log("Async fetch operation finished.");
        }
    }
    fetchDataAsync().then(result => console.log("Final result:", result));
    ```

61. **Q: How do you handle errors in `async/await`?**
    **A:** Errors in `async/await` are typically handled using standard `try...catch...finally` blocks, just like synchronous code. When an `await`ed Promise rejects, it throws an error that can be caught by a `catch` block.
    ```javascript
    async function riskyOperation() {
        if (Math.random() < 0.5) {
            throw new Error("Something went wrong!");
        }
        return "Success!";
    }

    async function performTask() {
        try {
            const result = await riskyOperation();
            console.log(result);
        } catch (error) {
            console.error("Caught an error:", error.message);
        }
    }
    performTask();
    ```

62. **Q: What is `Promise.all()`?**
    **A:** `Promise.all(iterable)` takes an iterable (e.g., an array) of Promises and returns a single new Promise. This new Promise fulfills when *all* of the input Promises have fulfilled, with an array of their fulfillment values (in the same order as the input Promises). It rejects immediately if *any* of the input Promises reject, with the reason of the first Promise that rejected.

63. **Q: What is `Promise.race()`?**
    **A:** `Promise.race(iterable)` takes an iterable of Promises and returns a single new Promise. This new Promise settles (fulfills or rejects) as soon as *one* of the input Promises settles, with the value or reason from that first-settled Promise.

64. **Q: What is `Promise.allSettled()`?**
    **A:** `Promise.allSettled(iterable)` (ES2020) takes an iterable of Promises and returns a single new Promise. This new Promise fulfills when *all* of the input Promises have settled (either fulfilled or rejected). The fulfillment value is an array of objects, each describing the outcome of one Promise in the input iterable. Each result object has a `status` (`"fulfilled"` or `"rejected"`) and either a `value` (if fulfilled) or a `reason` (if rejected). Unlike `Promise.all()`, it doesn't short-circuit on rejection.

65. **Q: What is `Promise.any()`?**
    **A:** `Promise.any(iterable)` (ES2021) takes an iterable of Promises and returns a single new Promise. This new Promise fulfills as soon as *one* of the input Promises fulfills, with the value of that first fulfilled Promise. If *all* of the input Promises reject, then the returned Promise is rejected with an `AggregateError`, a new type of error object that groups together individual errors.

66. **Q: Can you explain `setTimeout(callback, delay)` and `setInterval(callback, delay)`?**
    **A:**
    *   **`setTimeout(callback, delay)`:** Executes a `callback` function once after a specified `delay` (in milliseconds). It returns a timeout ID which can be used with `clearTimeout()` to cancel the timeout.
    *   **`setInterval(callback, delay)`:** Repeatedly executes a `callback` function with a fixed `delay` (in milliseconds) between each call. It returns an interval ID which can be used with `clearInterval()` to stop the repetitions.

67. **Q: What's the difference between the Microtask Queue and the Macrotask (Callback) Queue?**
    **A:**
    *   **Macrotask Queue (Task Queue / Callback Queue):** Holds tasks like `setTimeout`, `setInterval` callbacks, I/O operations, UI rendering (in browsers).
    *   **Microtask Queue (Job Queue):** Holds tasks like Promise callbacks (`.then`, `.catch`, `.finally`), `queueMicrotask()`, `MutationObserver` callbacks.
    **Execution Order:** The Event Loop prioritizes the Microtask Queue. After each macrotask from the Callback Queue finishes (and the call stack becomes empty), the Event Loop processes *all* tasks currently in the Microtask Queue before moving on to the next macrotask or rendering. This means microtasks can starve macrotasks if they keep adding more microtasks.

    **Q: What is `fetch()` API? How does it differ from `XMLHttpRequest`?**
    **A:** The `fetch()` API is a modern JavaScript interface for making network requests (e.g., HTTP requests to servers). It's Promise-based.
    Differences from `XMLHttpRequest` (XHR):
    *   **Promises:** `fetch()` returns a Promise, making it easier to work with `async/await` and chain operations. XHR is event-based.
    *   **Simpler API:** `fetch()` has a cleaner and more straightforward API for common use cases.
    *   **CORS:** `fetch()` handles CORS more gracefully by default (e.g., opaque responses for cross-origin no-CORS requests).
    *   **Streaming:** `fetch()` supports Request and Response streaming.
    *   **Error Handling:** `fetch()` only rejects its Promise on network errors (e.g., DNS failure, no connection). HTTP error statuses (like 404 or 500) are *not* considered network errors, so the Promise resolves. You need to check `response.ok` or `response.status`. XHR handles HTTP errors through its `onerror` or by checking status in `onreadystatechange`.



    How do you select an HTML element using JavaScript? (Mention a few ways)**
    **A:**
    *   `document.getElementById('elementId')`: Selects an element by its ID.
    *   `document.getElementsByClassName('className')`: Returns an HTMLCollection of elements with the given class name.
    *   `document.getElementsByTagName('tagName')`: Returns an HTMLCollection of elements with the given tag name.
    *   `document.querySelector('cssSelector')`: Returns the *first* element that matches the specified CSS selector.
    *   `document.querySelectorAll('cssSelector')`: Returns a static NodeList representing a list of elements that match the specified CSS selector.



    **Q: How do you handle errors in JavaScript?**
    **A:**
    *   **`try...catch...finally` Statement:**
        *   `try`: Code block to attempt execution.
        *   `catch (error)`: Code block to execute if an error occurs in the `try` block. The `error` object contains information about the error.
        *   `finally`: Code block that executes regardless of whether an error occurred or not. Useful for cleanup.
    *   **`throw` Statement:** Manually throws a custom error. You can throw any expression (string, number, boolean, object). It's best to throw `Error` objects or instances of `Error` subclasses.
    *   **Window `onerror` Handler (Browser):** A global error handler for uncaught exceptions in the browser.
    *   **Node.js `process.on('uncaughtException')`:** Global error handler for uncaught exceptions in Node.js.
    *   **Promise `.catch()` and `async/await` `try/catch`:** For handling asynchronous errors.



    **Q: What are common types of errors in JavaScript?**
    **A:**
    *   **`SyntaxError`:** Occurs when the JavaScript engine encounters code that violates the language's syntax rules (e.g., missing parenthesis, invalid keyword usage). Caught during parsing, before execution.
    *   **`ReferenceError`:** Occurs when trying to access a variable that has not been declared or is outside the current scope.
    *   **`TypeError`:** Occurs when an operation is performed on a value of an inappropriate type (e.g., calling a non-function, accessing properties of `null` or `undefined`).
    *   **`RangeError`:** Occurs when a numeric variable or parameter is outside its valid range (e.g., invalid array length).
    *   **`URIError`:** Occurs when global URI handling functions (like `encodeURIComponent()`) are used incorrectly.
    *   Custom errors can also be created by extending the `Error` object.