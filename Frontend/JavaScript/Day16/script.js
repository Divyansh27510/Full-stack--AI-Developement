// FOR EACH LOOP


// arr.forEach(function(val,idx){
//     console.log("Hey!",val,idx)
// })

// var prod = 1 ;
// sum=0;
// arr.forEach(function(ele,i){
//     sum += ele;
//     prod *= ele
// })
// console.log("PRODUCT",prod)
// console.log("SUM",sum)  

// console.log(arr)

/// ----------MAP---------

// var sq = arr.map(function(elem , index){
//     // console.log(index,elem)
//     return elem*elem
// })
// console.log(arr)

// console.log(sq)
// var arr =  [10,20,30,40,50]
// function square(x){
//     return x*2
// }
// // var ans = arr.map(square)
// // console.log(ans)
// var ans = arr.map(function(ele,ind){
//     console.log(ele,ind)
//     return ele*2
// })
// console.log(ans)

// var users = ['Divyansh','Diksha','Sakshi']
// var newUsers = users.map(function(ele,ind){
//     return ele.toUpperCase()
// })
// console.log(newUsers)


// users.forEach(function(ele){
//     console.log(ele)
// })

// var arr = [5,9,2,4,33,8]
// var arr2 = arr.map(function(ele,ind){
//     // console.log(ele,ind)
//     if(ele%2==0){
//         return ele
//     }
// })
// console.log(arr2)
// var arr2 = arr.filter(function(ele,ind){
//     // console.log(ele,ind)
//     if(ele%2==0){
//         return ele
//     }
// })
// console.log(arr2)


// var arr = [10,20,30,40,50]
// var ans = arr.some(function(ele,ind){
//     return ele<0
// })
// console.log(ans)
// // console.log(arr2)


// ------------REDUCE------------
// var arr =[21,110,120,230,240,50,11]
// console.log(arr)

// var sum = arr.reduce(function(acc,ele){
//     console.log(acc,ele)
//     return acc+ele
// })
// console.log(sum)
// var max = arr.reduce(function(acc,ele){
//     if(ele < acc){
//         return ele
//     }
//     return acc
// })
// console.log(max)

// var arr = [32,98,67,350,20,12]
// var ans = arr.reduce(function(acc,ele){
//     if(ele > acc){
//         return ele
//     }
//     return acc
// },0)
// console.log(ans)

//   ------- FIND --------
// var arr = [32,98,67,350,20,12]
// var ans = arr.find(function(ele,ind){
//     return ele > 0
// })
// console.log(ans)

var str = "Divyansh Singh"
var arr = [1,2,3,4,5]
console.log(...str)
console.log(...arr)