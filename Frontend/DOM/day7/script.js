let student = {
    name : "Divyansh Singh",
    branch : "CSE",
    roll_no : "CSJMA24001390057"
}
console.log(student)
localStorage.setItem('data',JSON.stringify(student))
let lsd = localStorage.getItem('data')
console.log(lsd)
console.log(JSON.parse(lsd))