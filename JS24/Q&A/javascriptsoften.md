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


