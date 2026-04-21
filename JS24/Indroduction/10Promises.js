// const fetchUser = new Promise((resolve, reject) => {
//     console.log("Fetching user data...");
    
//     setTimeout(() => {
//         const userFound = true;
        
//         if (userFound) {
//             resolve({ id: 1, name: "Alex" });
//         } else {
//             reject("User not found!");
//         }
//     }, 2000);
// });

// // Handling it
// fetchUser
//     .then(user => console.log("Success:", user.name))
//     .catch(err => console.error("Error:", err));



// --------------------------------------------------------------




// const checkAuth = () => Promise.resolve("Authenticated");
// const getUserData = () => Promise.resolve({ id: 101, settings: "Dark Mode" });

// async function loadDashboard() {
//     try {
//         console.log("Checking status...");
//         const status = await checkAuth(); 
//         console.log(status);

//         const data = await getUserData();
//         console.log("User Settings:", data.settings);
//     } catch (error) {
//         console.log("Initialization failed:", error);
//     }
// }

// loadDashboard();



// --------------------------------------------


// Promise.all (The Parallel Tasker)
// Use this when you have multiple independent tasks and you want them to finish together. 
// It’s much faster than waiting for one after the other.



// const uploadPhoto = new Promise(res => setTimeout(() => res("Photo Uploaded"), 1000));
// const updateBio = new Promise(res => setTimeout(() => res("Bio Updated"), 500));
// const linkTwitter = new Promise(res => setTimeout(() => res("Twitter Linked"), 1500));

// async function updateProfile() {
//     console.log("Starting updates...");
    
//     // All three start at the same time
//     const results = await Promise.all([uploadPhoto, updateBio, linkTwitter]);
    
//     console.log("All done!", results); 
//     // results is an array: ["Photo Uploaded", "Bio Updated", "Twitter Linked"]
// }

// updateProfile();


// ========================================================




const fastRequest = new Promise(res => setTimeout(() => res("Data received!"), 3000));
const timeout = new Promise((_, rej) => setTimeout(() => rej("Request timed out!"), 2000));

Promise.race([fastRequest, timeout])
    .then(response => console.log(response))
    .catch(err => console.warn(err)); 

// In this case, 'timeout' wins because it triggers at 2s vs the request's 3s.