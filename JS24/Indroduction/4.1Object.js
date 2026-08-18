// const user = {
//   name: "Athul Jain",
//   age: 25,
//   email: "athul@example.com",
//   isVerified: true
// };

// console.log("user object :",user)

// console.log(user.email)
// console.log(user['name'])


// console.log("Dot notation :",user.email); // dot notation
// console.log("bracket notation :",user['email']); // bracket notation


// // if a property exists in an object?

// console.log('names' in user);
// console.log(user.hasOwnProperty('email'));



// // // object destructuring


// const { name, email ,age} = user;
// console.log(name, email,age);




//  const user = { name: "Athul" };
//  console.log(user)
 
// user.age = 25; // Add
// console.log(user)
// delete user.name; // Delete
// console.log(user); // Output: { age: 25 }




// ----------------------------------------------------



// const product = {
//   id: "P1001",
//   name: "Wireless Mouse",
//   price: 499,
//   inStock: true,
//   tags: ["electronics", "accessories"]
// };


// console.log("Product : ",product.tags)
// console.log(product.name);



// const user={
//   name:'joyal',
//   tech:['html','css','js'],
//   place:{
//     pin:546,
//     street:"kochi"
//   }
// }

// console.log("user data: ",user.place.street)

// ----------------------------------------------------


// const users = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 28 }
// ];

// console.log("Array object",users)

// console.log(users.name);


// users.forEach(event => {
//   console.log(event.name);
// });



// // -------------------------------------------------------


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

// const copyData={...post}

// console.log({...copyData,tech:"mern"})
// console.log("Copy",copyData)
// console.log("Post : ",post)

// console.log("after",{...post,banned:"false"})



// const user = { name: "Athul", age: 25 };
// console.log(user);

// for (let key in user) {
//   console.log(key, user[key]);
// }




// const obj1 = {   title: "Learning JavaScript Objects",
//   author: "Athul Jain",
//   content: "Objects in JavaScript are key-value structures...",
//   likes: 105, };


// const obj2 = {   title: "Learning React js",
//   author: "Athul Jain",
//   content: "Objects in JavaScript are key-value structures...",
//   likes: 101, };


//   console.log(obj2)


// const merged = { ...obj1,obj2 };
// console.log(merged); 




// ------------------------------------


// Write a function to count how many keys are in an object.

// function countKeys(obj) {
//   return Object.keys(obj).length;
// }
// console.log(countKeys({ a: 1, b: 2, c: 3 })); // Output: 3


// Merge two objects and overwrite the first if keys match.?

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged); // Output: { a: 1, b: 3, c: 4 }



