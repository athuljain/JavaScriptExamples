const user = {
  name: "Athul Jain",
  age: 25,
  email: "athul@example.com",
  isVerified: true
};

// console.log("user object :",user.name)

console.log(user.name); // dot notation
console.log(user['email']); // bracket notation


// if a property exists in an object?

console.log('name' in user);
console.log(user.hasOwnProperty('email'));



// object destructuring


const { name, email } = user;
console.log(name, email);


// ----------------------------------------------------



// const product = {
//   id: "P1001",
//   name: "Wireless Mouse",
//   price: 499,
//   inStock: true,
//   tags: ["electronics", "accessories"]
// };


// console.log("Product :",product.tags)


// ----------------------------------------------------


// const users = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 28 }
// ];


// console.log(users.name);


// users.forEach(user => {
//   console.log(user.name);
// });



// -------------------------------------------------------


// const post = {
//   title: "Learning JavaScript Objects",
//   author: "Athul Jain",
//   content: "Objects in JavaScript are key-value structures...",
//   likes: 105,
//   comments: [
//     { user: "rahul", comment: "Very helpful!" },
//     { user: "meera", comment: "Great explanation!" }
//   ]
// };
// console.log("before",post);

// console.log({...post,banned:"false"})




const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2 }
