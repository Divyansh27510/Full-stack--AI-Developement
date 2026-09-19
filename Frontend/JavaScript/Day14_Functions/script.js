// -Function
// -Array
// -Object


// ---------- FUNCTION -----------
// function abc(paramters){  
//     console.log("Function working");
// }
// abc(arguments)


// function greet(a){
//     console.log("Good Morning Sir!",a)
// }
// greet(10)---




// function add(a,b){
//     console.log(a+b)
// }
// var a = 599999999999999999999999n
// var b = 1n
// add(a,b)


// FUNCTION DECLARATION

// function greater(num1 , num2){
//     console.log("We have to check whether which number is greater!")
//     console.log(num1,":",num2)
//     if(num1 > num1){
//         console.log(num1, "is greater")
//     }
//     else{
//         console.log(num2,"Is greateer")
//     }
// }
// greater(67,8)



//FUNCTION EXPRESSION
// var express = function(){
//     console.log("This is Expression Function")
// }
// express()


//ARROW FUNCTIION
// var arrowSum= (a,b) => console.log(a+b);
// arrowSum(101,202)


 
// var a = (name) => {
//     console.log("Hello ~",name )
//     console.log("This is arrow function")
    
// }
// a("Divyansh Singh")



// var sq = x => console.log(x*x)
// sq(2)


// IIFE - IMMEDIATELY INVOKED  FUNCTION EXPRESSION

// (function(){
//     console.log("This is an IIFE")
// })()

// (() => {
//     console.log("This is an also IIFE function!")
// })()


// var ifee = (function(){
//     var a=10;
//     var b = 20;
//     return a+b;
// })()
// console.log(ifee)


//PURE and IMPURE functions 
// function add(a,b){
//     return a+b
// }
// console.log(add(2,3))
// console.log(add(2,3))

// console.log(add(2,3))
// console.log(add(2,3))



// var age = 22
// function greet(){
//     return "Hey Divyansh Singh!"+ age++
// }
// console.log("Age",age)
// console.log(greet())
// console.log(greet())
// console.log(greet())
// console.log("Age",age)




// ------------CALLBACK----------

// var mul = function(a,b){
//     return a*b
// }
// function print(a,b,cb){
//     console.log("Multiplication of a and b is :", 
//         cb(a,b))
// }
//  print(2,4,mul)




// -----------  FIRSTCLASS FUNCTIONS -----------
// --------- HIGHER ORDER FUNCTIONS ----------