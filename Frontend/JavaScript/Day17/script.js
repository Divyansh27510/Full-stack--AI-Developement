// var name =  "Divyansh singh"
// var age = 22;
// var city = "Kanpur"


// var obj ={
//     name:"Divyansh Singh",
//     age:22,
//     city:"Ayodhya"
// }
// console.log(obj)
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.city)

// console.log(typeof(obj))


// var user ={
//     name : "Om Singh",
//     age : 20,
//     marks : 78,
//     isSingle:false,
//     batch :"Cohort 3.0"


// }
// console.log(user)
// user.city = "las anglos"

// console.log(user)
// user.isSingle = true;
// console.log(user) 
// user.name="Sarthak Goswami";
// console.log(user)
// console.log(user.name)

// delete user.marks
// console.log(user)
// console.log(user.marks)

// user.salary = 100000
// console.log(user)


// console.log(Object.keys(user))
// user.marks = 99
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.values(obj))

// console.log(Object.entries(user))

// var a = prompt("Enter your name");
// var b = prompt("Enter your age");
// var obj = {
//     a,b
// }
// console.log(obj)

// var player = {
//     name:"Virat  Kohli",
//     age:37,
//     team:"India",
//     isMarried:true,
//     skills:["Batting","Dancing","Fielding"]
// }
// console.log(player)
// console.log(player.name)
// console.log(player.skills)
// console.log(player.skills[0])

//Nested object
// var player = {
//     name:"Virat  Kohli",
//     age:37,
//     team:"India",
//     isMarried:true,
//     skills:["Batting","Dancing","Fielding"],
//     spouse:{
//         name:"Anushka sharma",
//         relation:"Wifi",
//         skills:['Acting',"Modelling","Dancing"]
//     }
// }
// console.log(player)
// console.log(player.name)
// console.log(player.skills)

// console.log(player.spouse)
// console.log(player.spouse.name)
// console.log(player.spouse.skills)

// var obj = {
//     name:"Chitti",
//     RAM:"20mb",
//     age:1,
//     isWorking:false,
//     skills:['Fights','walk','Dance'],
//     creator:{
//         name:"Vashikaran",
//         age:40,
//         isIntelligent:true
//     },
//     sayHi:function(){
//         console.log("Hello i am robot")
//     }
// }

// var obj = {
//     user:"Raja",
//     sayHi:()=>{
//         console.log("Hey GOOD Morning!")
//         return "Thanks"
//     }
// }
// console.log(obj)
// console.log(obj.sayHi)
// console.log(obj.sayHi())

// var  arr = [1,2,3,4,5]
// arr.user = "Divyansh Singh"
// console.log(arr)
// console.log(arr.user)
// console.log(arr[0])

// var student = {
//     name:"Divyansh Singh",
//     roll_no :"CSJMA24001390057"
// }
// console.log(student)

// student.roll_no=57
// console.log(student)
// student.age=22
// console.log(student)
// Object.seal(student)
// console.log(student)
// student.age=24
// student.grade=9
// console.log(student)
// Object.freeze(student)
// student.age = 33
// console.log(student)

// const arr = [10,20,30]
// Object.freeze(arr)
// arr[2]=222
// console.log(arr)
// arr[3]=99
// console.log(arr)
// arr.push(20)
// console.log(arr)


 
// var person={
//     name:"xyz",
//     age:22
// }
// console.log(person)
// var nums = [1,2,4,5,6]
// console.log(nums)
// var [a,b,...c]=nums
// console.log(a)
// console.log(b)
// console.log(c)

// var {name,age}=person
// console.log(name,age)



//------------DESTRUCTURING---------------

var employee={
    name:"Rajveer Singh",
    salary:100000,
    designation:"Software Engineer",
    skilss:['HTML','CSS',"JS"],
    college:{
        name:"CSJMU",
        grade:"NAAC A+++"
    }
}

// var arr =  [1,2,3,4,5]
// console.log(arr)
console.log(employee)
// arr.num = 10
// console.log(arr)

// delete arr.num
// console.log(arr)

// var [x,...y] =arr
// console.log(x)
// console.log(y)


// var{a,b} = employee
// console.log(a,b)


// var{designation:pos,...salary} = employee
// // console.log(designation)
// console.log(pos)
// console.log(salary) 
// var emp2 = {...employee}
// console.log(emp2)
// emp2.skilss.push("Node.js")
// console.log(emp2)
// emp2.college.name="Csjm university"
// emp2.name = "Adarsh pandey"
// employee.college.students = 20000
// console.log(emp2)
// console.log(employee)


// var temp = JSON.stringify(employee)
// console.log(temp)
// var emp3 = JSON.parse(temp)
// console.log(emp3)


// emp3.skilss.push("xyz")
// console.log(employee)

// console.log(emp2)
// console.log(emp3)




