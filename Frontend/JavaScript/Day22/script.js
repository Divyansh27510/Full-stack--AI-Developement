// console.log('a')
// alert("Hi ha ha ha ")
// console.log('b')
// let response =  fetch("https://jsonplaceholder.typicode.com/posts/1")
// console.log(response)


// async function data(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     console.log(response)
// }
// data()
// console.log("Start");

// let response = fetch("https://jsonplaceholder.typicode.com/posts/1 ")
// console.log(response)
   

// console.log("End");
// console.log("1")
// async function check() {
//     console.log("a")

//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     console.log(response)

//     console.log("b")
    
// }
// check()
// console.log('2')
// check()
// async function getData() {

//     let response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     console.log(response)
//     let data = await response.json();

//     console.log(data);
// }

// getData();
// let p1 = new Promise(function(resolve,reject){
//     console.log("Promise  Pending hai")
//     setTimeout(function(){
//         console.log("Timeout")
//     },2000)
// })
// console.log(p1)
// console.log(2)


// let p1 = new Promise(function(resolve,rejected){
//     console.log("Promise is Processing.....")
//     let ans = true;

//     setTimeout(function(){
//         if(ans){
//             console.log("Promise is SUCCEED")
//             resolve()
//         }
//         else{
//             console.log("Promise is REJECTED")
//             rejected()
//         }
//     })
// })
// p1.then(function(){
//     console.log("DONE")
// })
// p1.catch(function(){
//     console.log("NO DONE")
// })
// p1.finally(function(){
//     console.log("Promise END")
// })



//  ORDER FOOS FROM ZOMATO

// function orderFood(){
    
//     let prms =  new Promise(function(res,rej){
//         console.log("Order Confirmed....")
//         let status = false;

//         setTimeout(function(){
//             if(status){
//                 console.log("Order a gaya.....");
//                 res()
//             }
//             else{
//                 console.log("Order Cancel  ho gaya....")
//                 rej()
//             }
//         },3000)
//     })

//     prms.then(function(){
//         console.log("AHHHH Khaoonga ab too...")
//         let x =  
//     })
//     .catch(function(){
//         console.log("Mein to complain karoonga....")
//     })
//     .finally(function(){
//         console.log("Ab kuch nahi karoonga....")
//     })
// }
// orderFood()


// let response = fetch("https://jsonplaceholder.typicode.com/posts/1")
// console.log(response)
// response.then(function(data){
//     console("Data a gaya hai")
//     console.log(data)
// }).catch(function(data){
//     console.log("Data nahi  aya hai ")
//     console.log(data)
// })


// let response =  fetch("https://jsonplaceholder.typicode.com/posts/5")
// console.log(response)
// response.then(function(d){
//     console.log("response a gaya hai")
//     console.log(d.json())
//     return d.json()
// }).then(function(x){
//     console.log(x)
// })
// .catch(function(){
//     console.log("response nahi aya hai")
// })





// async function getData() {

//     let response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     console.log(response)
//     let data = await response.json();

//     console.log(data);
// }

// getData();


// let response =fetch( "https://dummyjson.com/users")
// console.log(response)
// response.then(function(data){
//     console.log(response)
//     console.log(data)
//     // console.log(data.json())
//     return data.json()
// }).then(function(finalData){
//     console.log(".........")
//     // console,log(data.json())
//     console.log(finalData)
// }).catch(function(){
//     console.log("Data is not found....")
// })





// async function getData() {

//     let response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     console.log(response)
//     let data = await response.json();

//     console.log(data);
// }

// getData();



// let a = 10
// console.log?.(a)
// console.log?.(b)


// console.log("Start");

// // Maan lo ye ek 5 second wala blocking kaam hai
// let now = Date.now();
// console.log(now)
// while (Date.now() - now < 5000) {
//   // 5 second tak kuch nahi, bas wait... browser HANG ho gaya 😵
// }

// console.log("End");

// function greet(naam, sheher) {
//   console.log(`Hi ${naam} from ${sheher}`);
// }

// setTimeout(greet("Priya", "Indore"), 1000);
// 1 second baad: Hi Priya from Indore

// let count = 1;
// let intervalId = setInterval(() => {
//   console.log("Count: " + count);
//   count++;

//   if (count > 5) {
//     clearInterval(intervalId); // 5 ke baad rok do
//     console.log("Interval band ho gaya");
//   }
// }, 1000);


// function dataLao(callback) {
//   console.log("Server se data laa raha hoon...");

//   setTimeout(() => {
//     let data = { id: 1, naam: "Aman" };
//     callback(data); // kaam complete hua, ab callback bulao
//   }, 2000);
// }
// function clbck(data){
//     console.log("Data To a gaya",data)
// }
// // dataLao((result) => {
// //   console.log("Data mil gaya:", result);
// // });

// dataLao(clbck)

// function dataLao(callback) {
//   setTimeout(() => {
//     let error = null;
//     let data = { id: 1, naam: "Aman" };

//     if (error) {
//       callback(error, null);
//     } else {
//       callback(null, data); // pehla null = koi error nahi
//     }
//   }, 1000);
// }

// dataLao(function(err, data){
//   if (err) {
//     console.log("Error aaya:", err);
//     return;
//   }
//   console.log("Success:", data);
// });

// getUser(1, (user) => {
//   getOrders(user.id, (orders) => {
//     getOrderDetails(orders[0], (details) => {
//       processPayment(details, (payment) => {
//         sendConfirmation(payment, (result) => {
//           console.log("Sab ho gaya:", result);
//           // 😵 Aur andar... aur andar... aur andar...
//         });
//       });
//     });
//   });
// });

// promise  sirf ek baar settle hota hai 

// function dataLao() {
//   return new Promise((resolve, reject) => {
//     console.log("Data laa raha hoon...");

//     setTimeout(() => {
//       let success = true;

//       if (success) {
//         resolve({ id: 1, naam: "Aman" });
//       } else {
//         reject("Server down hai!");
//       }
//     }, 2000);
//   });
// }
// dataLao()
//   .then((data) => {
//     // console.log(data)
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   })
//   .finally(() => {
//     console.log("Kaam khatam (chahe pass ho ya fail)");
//   });

// function add(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(num + 10), 1000);
//   });
// }

// add(0)
//   .then((result) => {
//     console.log(result); // 10
//     return add(result);  // naya promise return kiya
//   })
//   .then((result) => {
//     console.log(result); // 20
//     return add(result);
//   })
//   .then((result) => {
//     console.log(result); // 30
//   });

// (1s) 10
// (2s) 20
// (3s) 30
// function getOrder(id){
//     return new Promise(function(resolve, reject){
//         let ordId = { orderId: 501, product: "Laptop", price: 50000 }
//         setTimeout(function(){
//             console.log(`Order : ${ordId.product}`)
//             resolve(ordId)
//         },2000)
//     })
// }
// function makePayment(ordId){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("Payment successfull")
//             resolve("Payment Done")
//         },2000)
//     })
// }

// function getUser(){
//     return new Promise(function(resolve,reject){
//         let id = { id: 101, name: "Aman" } 
//         setTimeout(function(){
//             console.log(`User : ${id.name}`)
//             resolve(id)
//         },2000)
//     })
// }

// getUser().then(function(id){
//     return getOrder(id)
// }).then(function(ordId){
//     return makePayment(ordId)
// }).then(function(status){
//     console.log(status)
// })




// function loginUser(){
//     return new Promise(function(resolve , reject){
//         setTimeout(function(){
//             let userId ={
//                             id: 101,
//                             name: "Aman"
//                         }
//             resolve(userId)
//         },2000)
//     })
// }

// function getProfile(userId){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             let detail ={
//                             age: 21,
//                             city: "Kanpur"
//                         }
//             if (userId.id === 101) {
//                 // resolve profile
//                 resolve(detail)
//             } else {
//                 // reject
//                 reject("Profile nahi mili")
//             }
//         },2000)
//     })
// }

// function getPost(detail){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             let result =[
//                             "Learning JavaScript",
//                             "Learning Promises",
//                             "Building Projects"
//                         ]
//             resolve(result)
//         },2000)
//     })
// }


// loginUser().then(function(user){
//     console.log(`Login Successfull : ${user.name}`);
//     return getProfile(user);
// }).then(function(detail){
//     console.log(`Profile city : ${detail.city}`)
//     return getPost(detail)
// }).then(function(result){
//     console.log(`Posts : ${result.length}`)
// }).catch(function(){
//     console.log("Yaar sahi  se kro dekho kahi par error hai...")
// })



//Promise.all
//Promise.race
// function kaam(naam, time) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${naam} done`), time);
//   });
// }

// async function sequential() {
//   console.time("sequential");

//   const a = await kaam("A", 2000); // 2 sec wait
//   const b = await kaam("B", 2000); // fir 2 sec aur wait
//   const c = await kaam("C", 2000); // fir 2 sec aur wait

//   console.log(a, b, c);
//   console.timeEnd("sequential"); // ~6000 ms 😱
// }

// // sequential();

// async function parallel() {
//   console.time("parallel");

//   // Teeno turant start kar diye (await nahi laga abhi)
//   const pa = kaam("A", 2000);
//   const pb = kaam("B", 2000);
//   const pc = kaam("C", 2000);

//   // Ab sabka result ek saath wait karo
//   const [a, b, c] = await Promise.all([pa, pb, pc]);

//   console.log(a, b, c);
//   console.timeEnd("parallel"); // ~2000 ms 🚀
// }

// parallel();
// function process(item) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(item, "done");
//             resolve();
//         }, 2000);
//     });
// }
// let items = ["A","B","C"]

// // ❌ Galat — forEach await ka wait nahi karta
// async function galat(items) {
//   items.forEach((item) => {
//     await process(item); // ye sab ek saath fire ho jaayenge, order nahi rahega
//   });
//   console.log("Done"); // ye sabse pehle print ho jaayega! galat
// }
// // galat(items)

// // ✅ Sahi — for...of use karo agar sequence chahiye
// async function sahi(items) {
//   for (const item of items) {
//     await process(item); // ye sahi se ek-ek karke wait karega
//   }
//   console.log("Done"); // sahi me last me
// }
// // sahi(items)


// async function userBanao() {
//   try {
//     const response = await fetch("<https://jsonplaceholder.typicode.com/users>", {
//       method: "POST", // request type
//       headers: {
//         "Content-Type": "application/json", // bata rahe hain ki JSON bhej rahe hain
//       },
//       body: JSON.stringify({       // JS object ko JSON string me convert
//         name: "Rahul",
//         email: "rahul@example.com",
//       }),
//     });

//     const data = await response.json();
//     console.log("Ban gaya:", data);
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// userBanao();


// const user = {
//   name: "Rahul",
//   age: 25,
//   skills: ["JS", "React"],
// };

// console.log(user)
// console.log(typeof user)

// const jsonString = JSON.stringify(user);

// console.log(jsonString);
// // {"name":"Rahul","age":25,"skills":["JS","React"]}

// console.log(typeof jsonString); // string ✅
// console.log(JSON.stringify(user, null, 2));
// /*
// {
//   "name": "Rahul",
//   "age": 25,
//   "skills": [
//     "JS",
//     "React"
//   ]
// }
// */

// jsonString.stringify function aur undefined ko skip kar deta hai 


// let count = 1
// let id = setInterval(function(){
//   console.log("Tik Tik ",count++)
// },1000)

// let timer = setTimeout(()=>{
//   clearInterval(id)
//   console.log("STOP")

// },5000)


// console.log(1);
// setTimeout(() => console.log(2), 0);
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => {  console.log(4); 
// setTimeout(() => console.log(5), 0);});
// console.log(6);


// function loginUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("User logged in");
//             resolve({ userId: 101 });
//         }, 1000);
//     });
// }

// function getUserDetails(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("User details fetched");
//             resolve({ userId: userId, name: "Rahul" });
//         }, 1000);
//     });
// }

// function getOrders(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Orders fetched");
//             resolve(["Laptop", "Mobile"]);
//         }, 1000);
//     });
// }

// // Promise Chain
// loginUser()
//     .then((user) => {
//         return getUserDetails(user.userId);
//     })
//     .then((details) => {
//         console.log("Name:", details.name);
//         return getOrders(details.userId);
//     })
//     .then((orders) => {
//         console.log("Orders:", orders);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });






function first(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      // console.log("First Success")
      resolve("First Success")
    },1000)
  })
}
function second(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      // console.log("Second Success")
      resolve("Second Success")
    },2000)
  })
}
function third(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      // console.log("Third Failed")
      reject("Third Failed")
    },900)
  })
}

// Promise.allSettled([
//     first(),
//     second(),
//     third()
// ])
// .then((results) => {
//     console.log("All Results : ",results);
// })
// .catch((error) => {
//     console.log("Error:", error);
// });


// async function fetchDashboard() {
//     const results = await Promise.allSettled([
//         first(),
//         second(),
//         third()
//     ]);
//     console.log(results)
//     results.forEach((result, index) => {
//         if (result.status === "fulfilled") {
//             console.log(`Request ${index + 1}:`, result.value);
//         } else {
//             console.log(`Request ${index + 1} failed:`, result.reason);
//         }
//     });
// }

// fetchDashboard();
// Array destructuring
// const numbers = [10, 20, 30];
// const [a, b, c] = numbers;
// console.log(a, b, c); // 10 20 30

// // Object destructuring
// const user = { name: "Aman", age: 22 };
// const { name, age } = user;
// console.log(name, age); // Aman 22



// const [x = 1, y = 2, z = 3] = [10, 20];
// console.log(x, y, z); // 10 20 3

// const user = { name: "Aman", age: 22 };
// const { name: userName, age: userAge } = user;
// console.log(userName); // Aman
// // console.log(age); // ❌ Error — ab 'name' exist hi nahi karta

// let obj = {
//   sex : "Male",
//   role : "Student"
// }

// let {sex:Gender ,role: position = "Fucker" } = obj
// // console.log(sex)
// // console.log(role)
// console.log(Gender)
// console.log(position)


// const student = {
//   id: 100,
//   info: {
//     nam: "Priyaa",
//     address: {
//       city: "Bhopali",
//       pin: 4620012,
//     },
//   },
// };

// const {
//   id,
//   info: {
//     nam,
//     address: { city, pin },
//   },
// } = student;

// console.log(id)
// console.log(nam); // Priya
// console.log(city); // Bhopal
// console.log(pin);  // 462001



// const colors = ["red", ["green", "lime"], "blue"];
// const [primary, [secondary,extra],tertiary] = colors;
// console.log(primary);   // red
// console.log(secondary); // green
// console.log(tertiary)
// console.log(extra)

// let p = 1, q = 2;
// [p, q] = [q, p];
// console.log(p, q); // 2 1


// console.log([..."abc"]); // ['a', 'b', 'c']
// // Array

// const [head, ...tail] = [1, 2, 3, 4];

// console.log(head); // 1
// console.log(tail); // [2, 3, 4]

// // Object — kuch properties nikaal kar baaki ekattha karna
// const { password, ...safeUser } = {
//   name: "Aman",
//   email: "a@x.com",
//   password: "secret123",
// };
// console.log(safeUser); // { name: "Aman", email: "a@x.com" }  (password hata diya 👍)


// const user = { name: "Aman" };
// console.log(user.add?.city); // undefined  (koi error nahi ✅)

// const data = {
//   user: {
//     profile: {
//       social: { twitter: "@aman" },
//     },
//   },
// };

// console.log(data); // @aman
// console.log(data.user?.profile?.social?.twitter.name?.fuk?.fuka?.xxx?.xnxx);          // undefined (crash nahi)


// console.log(0 || "fallback");        // "fallback"
// console.log("Aman" || "Guest");      // "Aman"
// console.log(null || "sex" || 5); // 5

// function greet(name) {
//   name = name || "Guest"; // agar name khaali ho to Guest
//   console.log("Hello " + name);
// }
// greet()


// const now = new Date();              // abhi ka time
// const specific = new Date("2026-10-09"); // specific date
// const detailed = new Date(2026, 9, 8, 10, 30); // year, month(0-based!), day, hour, min

// console.log(now);
// console.log(specific)
// console.log(detailed)

// const d = new Date();

// console.log(d.getFullYear());  // 2025
// console.log(d.getMonth());     // 5  (June, kyunki 0-based)
// console.log(d.getDate());      // 4  (din of month)
// console.log(d.getDay());       // 3  (week ka din: 0=Sunday, 3=Wednesday)
// console.log(d.getHours());     // 10
// console.log(d.getMinutes());   // 30
// console.log(d.getTime());      // milliseconds (1 Jan 1970 se ab tak)


// const d = new Date();

// console.log(d.toLocaleDateString()); // 6/4/2025 (locale ke hisaab se)
// console.log(d.toLocaleTimeString()); // 10:30:00 AM
// console.log(d.toISOString());        // 2025-06-04T10:30:00.000Z (standard format)

// // Indian format
// console.log(d.toLocaleDateString("en-IN")); // 4/6/2025
// const start = new Date("2003-12-27");
// const end = new Date("2026-12-27");

// const diffMs = end - start;                 // milliseconds mein

// const diffDays = diffMs / (1000 * 60 * 60 * 24); // din mein convert

// console.log(start)
// console.log(end)
// console.log(diffMs)

// console.log(diffDays); // 30