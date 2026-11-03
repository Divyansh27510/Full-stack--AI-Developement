// let prices = [100, 250, 399, 499];
// prices.forEach(function(num){
//     console.log("₹"+num)
// }) 

// let students = [
//   { name: "Anubhav", marks: 85 },
//   { name: "Rahul", marks: 42 },
//   { name: "Aman", marks: 90 },
// ];
// students.forEach(function(ele,ind){
//     if(ele.marks > 50){
//         console.log(`${ele.name} - Pass`)
//     }
//     else{
//         console.log(`${ele.name} - Fail`)
//     }
// })

// let names = ["anubhav", "rahul", "aman"];
// let namesUpper = names.map(function(ele){
//     return ele.toLocaleUpperCase();
// })
// console.log(namesUpper)
   
// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
// ];

// let prod = products.map(function(ele){
//     ele.discountPrice = ele.price - ele.price*0.1
//     return (ele)
// })
// console.log(prod)

// let nums = [1,2,3,4,5,6,7,8];
// let even = nums.filter(function(ele,idx){
//     return ele%2 == 0
// })
// console.log(even)
// let users = [
//   { name: "Anubhav", active: true },
//   { name: "Rahul", active: false },
//   { name: "Aman", active: true },
// ];

// let active = users.filter(function(obj){
//     return obj.active = true;
// })

// console.log(active)


// let nums = [10,20,30,40];

// let sum = nums.reduce(function(acc,ele){
//     return ele+acc;
// },0)
// console.log(sum)

// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// let obj={}
// fruits.forEach(function(ele){
//     if(obj[ele]){
//         obj[ele]++;
//     }
//     else{
//         obj[ele] = 1;
//     }
// })
// console.log(obj)

// let nums = [20, 35, 60, 80];
// let num =  nums.find(function(ele){
//     return ele>50
// })
// console.log(num)

// let users = [
//   { username: "rahul" },
//   { username: "admin" },
//   { username: "aman" }
// ];
// console.log(users.find(function(obj){
//     return obj.username === "admin"
// }))


// let nums = [10, 40, 90, 50];
// let index = nums.findIndex(function(ele){
//     return ele === 40
// })
// console.log(index)

// let students = [
//   { name: "A", marks: 90 },
//   { name: "B", marks: 30 },
//   { name: "C", marks: 70 },
// ];
// console.log(students.findIndex(function(obj){
//     return obj.marks > 40
// }))

// let nums = [10, 20, -5, 40];
// console.log(nums.some(function(ele){
//     return ele<0
// }))
// let products = [
//   { name: "Laptop", stock: 5 },
//   { name: "Phone", stock: 0 },
// ];

// console.log(products.some(function(obj){
//     return obj.stock === 0
// }))

// let nums = [10, 20, 30, 40];
// console.log(nums.every(function(ele){
//     return ele > 0
// }))


// let students = [
//   { name: "A", marks: 80 },
//   { name: "B", marks: 45 },
//   { name: "C", marks: 60 },
// ];

// console.log(students.every(function(ele){
//     return ele.marks>40
// }))
// "use strict"
// function showThis(){
//   console.log(this)
// }
// showThis()


// const user ={
//   name : "Divyansh singh",
//   print1 : function(){
//     console.log(`Hello ${this.name}`)
//   },
//   print2 :()=>{
//     console.log(`Hello ${this.name}`)
//   }

// };
// // console.log(user.print())
// // user.print()
// user.print1()
// user.print2()

// const obj = {

//   name :"Rahul",
//   hobbbies : ['Coding',"Gaming","Reading"],
//   func : function(){
//    (this.hobbbies.forEach((hobby)=>{
//       console.log(`${this.name} likes ${hobby}`)
//     }))
//   }
// }
// obj.func()


const person1 = {
  name  : "Anubhav",
  introduce : function(){
    console.log(`Hi, I am ${this.name}`)
  }

}
const person2 = {
  name : "Rahul"
}

function intro(city,country){
  console.log(`I am ${this.name } from ${city}, ${country}`)
}


const ans =intro.bind(person1,['Indore',"India"])


// person1.introduce.call(person2)
