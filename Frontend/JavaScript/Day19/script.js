// console.log(this)
// console.log(window )

// function abc(){
//     console.log(this)
// }
// abc()
// {let arr =  [1,2,3,4,5]}
// console.log(arr)
// console.log()
// "use strict"
// var a = 10
// console.log(a)

// var obj1 = {
//     userName : "divyansh singh",
//     age : 22,
//     greet(){
//         console.log("Hey ",this.userName)
//     }
// }
// obj1.greet()
// var obj2 = {
//     userName : "OM singh",
//     age : 22,
//     greet(){
//         console.log("Hey ",this.userName)
//     }
// }
// obj2.greet()

// var obj3 = {
//     userName : "OM singh",
//     age : 22,
//     greet : ()=>{
//         console.log(this)
//     }
// }
// obj3.greet()

// var obj4 = {
//     userName : "OM singh",
//     age : 22,
//     greet : function(){
//         var get = ()=>{
//             console.log(this)
//         }
//         get()
//     }
// }
// obj4.greet()


// var obj5 = {
//     userName : "OM singh",
//     age : 22,
//     greet : function(){
//         var get = function(){
//             console.log(this)
//         }
//         get()
//     }
// }
// obj5.greet()






// function greet(){
//     console.log("hyy ",this.firstName + " " + this.lastName)
// }
// // student1.getIntro()
// // student2.getIntro()

// student1.getIntro( )
// student1.getIntro.call(student2)

// greet.call(student1)
// greet.call(student2)


// var student1  = {
//     firstName : "Divyansh",
//     lastName:"Singh",
//     getIntro:function(city, state){
//         console.log(`${this.firstName} ${this.lastName}, ${city} ${state}`)
//     }
   
// }
// var student2 = {
//     firstName : "Om",
//     lastName:"Singh",
    
// }
// //call
// var get=function(city, state){
//         console.log(`${this.firstName} ${this.lastName}, ${city} ${state}`)
// }

// student1.getIntro('kdj',"edjk")
// student1.getIntro.call(student2,"Kanpur","UP")

// //apply
// student1.getIntro.apply(student2,["Kanpur","MP"])

// //bind
// var x =  student1.getIntro.bind(student2,"Mumbai","MH")
// console.log(x())


// get.call(student1,"dn","wlljk")
// get.apply(student1,["nhsah","bHH"])
// get.bind(student1,"jdjb","hdwjh")()


// --------PROTOTYPE-------
// var arr = [1,2,3,4,5]
// console.log(arr)

// var obj = {
//     name : "Om singh"
// }
// console.log(obj)

// function greet(){
//     console.log("Hyy")
// }
// greet()

// console.log(arr.__proto__)
// console.log(arr.__proto__.__proto__)
// console.log(obj.__proto__)
// console.log(greet.__proto__.__proto__)


// console.log(Array.prototype)
// console.log(Array.prototype.__proto__)


// console.log(Object.prototype)
// console.log(Function.prototype)
// console.log(Function.prototype.__proto__)


var college={
    name : "CSJMU",
    rating:"A+++",
    students:20000,
    slogan(){
        console.log("Padho aage bdho")
    }
}
var branch = {
    name : "CSE",
    rating : 'A+',
    students:500,
    subjects : ['TOC',"DBMS","SD"]
}

var user = {
    name :"Divyansh singh",
    age : 22,
    marks : 99
}
console.log(college.__proto__)
console.log(branch.__proto__)
console.log(user.__proto__)

// console.log(user)
// user.__proto__ = branch
// console.log(user.__proto__)
// branch.__proto__ =  college
// console.log(user)

user.__proto__ = branch
branch.__proto__ = college
console.log(user)
console.log(user.slogan())
console.log(user.name)


