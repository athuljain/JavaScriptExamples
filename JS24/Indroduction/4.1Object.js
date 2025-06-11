const user = {
  name: "Athul Jain",
  age: 25,
  email: "athul@example.com",
  isVerified: true
};

console.log("user object :",user)


// ----------------------------------------------------



const product = {
  id: "P1001",
  name: "Wireless Mouse",
  price: 499,
  inStock: true,
  tags: ["electronics", "accessories"]
};


console.log("Product :",product)


// ----------------------------------------------------


const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 }
];


users.forEach(user => {
  console.log(user.name);
});



// -------------------------------------------------------


const post = {
  title: "Learning JavaScript Objects",
  author: "Athul Jain",
  content: "Objects in JavaScript are key-value structures...",
  likes: 105,
  comments: [
    { user: "rahul", comment: "Very helpful!" },
    { user: "meera", comment: "Great explanation!" }
  ]
};




