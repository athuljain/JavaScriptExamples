// const user = {
//   name: "Athul Jain",
//   age: 25,
//   email: "athul@example.com",
//   isVerified: true
// };

// console.log("user object :",user)
// console.log('user Name :',user.name);
// console.log("user email :",user.email);



// console.log("Dot notation :",user.email); // dot notation
// console.log("bracket notation :",user['email']); // bracket notation


// // if a property exists in an object?

// console.log('name' in user);
// console.log(user.hasOwnProperty('email'));



// // object destructuring


// const { name, email ,age} = user;
// console.log(name, email,age);


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

// console.log("Array object",users)

// // console.log(users.name);


// users.forEach(event => {
//   console.log(event.name);
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




// const obj1 = {   title: "Learning JavaScript Objects",
//   author: "Athul Jain",
//   content: "Objects in JavaScript are key-value structures...",
//   likes: 105, };
// const obj2 = {   title: "Learning React js",
//   author: "Athul Jain",
//   content: "Objects in JavaScript are key-value structures...",
//   likes: 101, };


// const merged = { ...obj1,obj2 };
// console.log(merged); 
