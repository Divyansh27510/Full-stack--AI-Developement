// let prices = [100,250,500,150,700]
// let premium = prices.filter((ele)=>{
//     if(ele>300){
//         return ele
//     }
// })
// console.log(premium)


// let arr = [80,90,70,85,95]
// let ans = arr.reduce((acc,ele)=>{
//     return acc + ele
// },0)

// console.log(ans/arr.length)


// let numbers = [1,2,3,3,2,4,2,5,1,1,1]


// let count =  {}
// for(let i = 0;i< numbers.length ; i++){
//     let num = numbers[i]
//     if(count[num]){
//         count[num] += 1
//     }
//     else{
//         count[num] = 1
//     }
// }
// console.log(count)


// for(obj in count){
//     // console.log("obj :",obj,"->",count[obj])
//     console.log(obj)
    
// }



// let ans = numbers.reduce((acc,ele)=>{
//     if(acc[ele]){
//         acc[ele] = acc[ele] + 1
//     }
//     else{
//         acc[ele] = 1
//     }

//     return acc
// },{})
// console.log(ans)

// let user = {
//     name:"Divyansh Singh",
//     age : 23,
//     city : "Ayodhya"
// }
// console.log(user)

// for(key in user){
//     console.log(key,":",user[key])
// }


// let employee = {
//     'aman' : 25000,
//     'ritik' : 50000,
//     'priya' : 45000
// }
// console.log(employee)
// let premium = 0;
// let premName = ""
// for(emp in employee){
//     if(employee[emp] > premium){
//         premium=employee[emp]
//         premName = emp
//     }
// }

// console.log(premium,premName)

// let users = [
//     { name: "Aman", age: 21 },
//     { name: "Rahul", age: 22 },
//     { name: "Divyansh", age: 20 },
//     { name: "Priya", age: 23 },
//     { name: "Neha", age: 21 }
// ];
// let adults = users.filter((stu) =>{
//     return stu.age > 22
// })

// let adults = (users)=>{
//     let adult = users.filter((stu)=>{
//         return stu.age > 21
//     })
//     return adult
// }
// console.log(adults(users))



// let cart = [
//     { id: 1, name: "Laptop", price: 55000, quantity: 1 },
//     { id: 2, name: "Mobile", price: 20000, quantity: 2 },
//     { id: 3, name: "Headphones", price: 2500, quantity: 1 },
//     { id: 4, name: "Keyboard", price: 1500, quantity: 2 },
//     { id: 5, name: "Mouse", price: 800, quantity: 1 },
//     { id: 6, name: "Monitor", price: 12000, quantity: 1 },
//     { id: 7, name: "Smartwatch", price: 4000, quantity: 3 },
//     { id: 8, name: "USB Cable", price: 300, quantity: 2 }
// ];

// function cartTotal(cart){
//     return cart.reduce((acc,curr)=>{
//         return  acc + ((curr.price) * (curr.quantity))
//     },0)
// }

// console.log(cartTotal(cart))


let students = [
    {
        name : "Divyansh Singh",
        marks : [80,90,85]
    },
    {
        name : "Om Singh",
        marks : [50,40,60]
    },
    {
        name : "Aman",
        marks :  [20,40,60]
    }
]

function generateReport(students){
    let report = students.map((stu)=>{
        let marks = stu.marks.reduce((acc,curr)=>{
            return acc + curr;
        },0)
        let average = marks / stu.marks.length

        let grade = "";
        if(average > 80 ){
            grade = 'A';
        }
        else if(average > 70 && average < 60){
            grade = 'B'
        }
        else{
            grade = 'C'
        }

        return {
            name : stu.name,
            average : average,
            grade : grade
        }
    })
    return report
}

console.log(generateReport(students))
