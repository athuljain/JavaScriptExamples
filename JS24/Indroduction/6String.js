// How do you reverse a string in JavaScript?
// Answer:
// Use .split(), .reverse(), and .join() methods.


// const str = "hello";
// console.log(str);
// const reveser=str.split("")
// console.log(reveser);
// const reverseData=reveser.reverse()
// console.log(reverseData);
// const final=reverseData.join("")
// console.log(final);



// const reversed = str.split("").reverse().join("");
// console.log(reversed); 

// -------------------------------------------------------------------------

// Trimming Whitespace (.trim(), .trimStart(), .trimEnd())
// Removes leading and trailing whitespace characters (spaces, tabs, newlines) from a string.


const spacedText = "   Hello World!   ";
console.log(spacedText.trim());      // "Hello World!"
console.log(spacedText.trimStart()); // "Hello World!   "
console.log(spacedText.trimEnd());   // "   Hello World!"






// -.---------------------------------------------------------------------

// How can you check if a string contains a specific word?
// Answer:
// Use .includes() method.

// const message = "Welcome to JavaScript!";
// console.log(message.includes("JavaScript"));
// console.log(message.includes("Python"));     



// -----------------------------------------------------

// Checking Start or End (.startsWith(), .endsWith())
// Determines if a string begins or ends with specific characters. Returns true or false

const filename = "report.pdf";
console.log(filename.startsWith("report")); // true
console.log(filename.endsWith(".pdf"));     // true
console.log(filename.endsWith(".png"));     // false


// ----------------------------------------------------------

// Repeating Strings (.repeat())
// Returns a new string with a specified number of copies concatenated together.

// const star = "⭐";
// console.log(star.repeat(5)); // "⭐⭐⭐⭐⭐"


// -------------------------------------------------------------


// How to replace a word in a string with another word?
// Answer:
// Use .replace() method.



// const text = "I love PHP";
// const newText = text.replace("PHP", "JavaScript");
// console.log(newText); 


// ------------------------------------------------------------------



// How do you extract a part of a string?
// Answer:
// Use .substring(start, end) or .slice(start, end).


// const str = "JavaScript Developer";
// console.log(str.substring(0, 11)); 
// console.log(str.slice(0, 10));     

// ---------------------------------------------------------------


// How can you convert a string to uppercase and lowercase?
// Answer:
// Use .toUpperCase() and .toLowerCase() methods.


// const name = "Athul";
// console.log(name.toUpperCase()); // "ATHUL"
// console.log(name.toLowerCase()); // "athul"

// ---------------------------------------------------------------------


// Padding Strings (.padStart(), .padEnd())
// Pads the current string with another string until the resulting string reaches a given length.
// Useful for formatting IDs or numbers.


// const id = "42";
// console.log(id.padStart(5, "0")); // "00042"
// console.log(id.padEnd(5, "!"));   // "42!!!"


// ----------------------------------------------------------------------


// Character Access (.charAt(), .at())
// Returns the character at a specified index. .at() allows negative indexing to read from the end.


// const word = "Developer";
// console.log(word.charAt(0)); // "D"
// console.log(word.at(-1));    // "r" (last character)



