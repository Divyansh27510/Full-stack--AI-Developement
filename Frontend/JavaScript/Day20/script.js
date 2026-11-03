// console.log(this)

// let department = {
//     name:"UIET",
//     num : 4,
//     intro(){
//         console.log(this)
//         console.log(`Hey in department ${this.name} there are ${this.num} Branches`)
//         let branch1 = {
//             name : "CSE",
//             student:500,
//             intro(){
//                 console.log(this)
//                 console.log(`Hey in department ${this.name} there are ${this.student} Students`)
                
//             }
//         }
//         branch1.intro()
//     }
// }
// department.intro()


// console.log('\n')
// let department2 = {
//     name:"UIET",
//     num : 4,
//     intro(){
//         console.log(this)
//         console.log(`Hey in department ${this.name} there are ${this.num} Branches`)
//         let branch1 = {
//             name : "CSE",
//             student:500,
//             intro:()=>{
//                 console.log(this)
//                 console.log(`Hey in department ${this.name} there are ${this.student} Students`)
                
//             }
//         }
//         branch1.intro()
//     }
// }
// department2.intro()


//-----------OOPS-----------
//constructor function 
// function CreateBook(){
//     this.name = "Harry Potter",
//     this.authorName = "Jk rowling",
//     this.pages = 560
// }
// let book1 = new CreateBook()
// console.log(book1)


// function Books(name,author,pages){
//     this.bookName = name;
//     this.authorName = author;
//     this.pagecount= pages;
// }

// let book1 = new Books("Enginerring Mathematics","H.k. Dass",1000)
// console.log(book1)

// function SongPlaylist(naam,gayak,year,rate){
//     this.songName = naam;
//     this.singerName = gayak;
//     this.yearOfRelease =  year
//     this.rating = rate
// }
// let song1 = new SongPlaylist("Tum hi ho","Arijit singh",2007,9.6)
// let song2 = new SongPlaylist("Sex hi ho","Divyansh singh",2026,8.6) 


// console.log(song1)
// console.log(song2)

// function CreateBook(bookName,authorName,pages){
//     this.bookName = bookName;
//     this.authorName = authorName;
//     this.pages = pages
//     this.summary = function(){
//         console.log("Book name ", this.bookName)
//         console.log('Author name',this.authorName)
//         console.log('Pages',this.pages)
//     }
// }
// let book1 = new CreateBook("xyz","abc",897)
// let book2 = new CreateBook("msdfaj","nfewka",54)
// let book3 = new CreateBook("jfj","ekn",87234)

// console.log(book1)
// console.log(book1.summary())

// console.log("\n")
// console.log(book2)
// console.log(book2.summary())

// console.log("\n")
// console.log(book3)
// console.log(book3.summary())


// function Makestudents(fname,lname,contact,verified){
//     this.fname = fname;
//     this.lname = lname ;
//     this.contact = contact;
//     this.isVerified = verified;
    
// }

// let stu1 = new Makestudents("Divyansh","singh",8795969171)
// console.log(stu1)


//---------CLASS-----------

// class Makestudents{
//     constructor(fname,lname ,contact,verified){
//         this.fname = fname;
//         this.lname = lname;
//         this.contact = contact;
//         this.isVerified = verified;
//         this.check = function(){
//             if(this.isVerified){
//                 console.log("Students ids is Verified")
//             }
//             else{
//                 console.log("NOOOOOOOOO")
//             }
//         }

//     }
    
// }
// let stu1 = new Makestudents("Om","singh",8327894,true)
// let stu2 = new Makestudents("Oejkahm","sijkhngh",8902394,true)
// let stu3 = new Makestudents("Omwef","siqwdngh",83223494,true)
// let stu4 = new Makestudents("Oawem","singh",3251894,false)

// console.log(stu1)
// console.log(stu1.check())

// console.log(stu2)
// console.log(stu2.check())


// console.log(stu3)
// console.log(stu3.check())

// console.log(stu4)
// console.log(stu4.check())


// class Person{
//     constructor(name , age, work){
//         this.name = name;
//         this.age = age;
//         this.work = work;
        

//     }
//     summary = function(){
//             if(this.age>18){
//                 console.log(`${this.name} is ADULT`)
//             }
//             else{
//                 console.log(`${this.name} is MINOR`)
//             }
//     }

// }

// let p1 = new Person("Divyansh Singh",22,"Student")
// console.log(p1)
// console.log(p1.summary())

// let p2 = new Person("Om Singh",12,"Student")
// console.log(p2)
// console.log(p2.summary())

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHello() {
//         console.log("Hello " + this.name);
//     }
// }
// let p1 = new Person("Divyansh", 20);
// let p2 = new Person("Rahul", 21);
// console.log(p1.name); // Divyansh
// console.log(p2.name); // Rahul

// p1.sayHello(); // Hello Divyansh
// p2.sayHello(); // Hello Rahul


//   -------------PROTOTYPE UNDERSTANDING ----------------
// prototype chaining 

// prototypal inheritance
// let father = {
//     name :"Dilip Kumar Singh",
//     home:"Ayodhya"
// }
// let son = {
//     name :"Divyansh Singh"
// }

// console.log(father);
// console.log(son);
// console.log(son.name)
// console.log(father.name)
// console.log(father.home)
// console.log(son.home)

// son.__proto__ = father
// console.log(son)
// console.log(son.home)

// class Person{
//     constructor(name , age, work){
//         this.name = name;
//         this.age = age;
//         this.work = work;
        

//     }
//     let summary = function(){
//             if(this.age>18){
//                 console.log(`${this.name} is ADULT`)
//             }
//             else{
//                 console.log(`${this.name} is MINOR`)
//             }
//     }

// }

// ---------- INHERITANCE ----------
// class User {
//     constructor(fname,lname,contact){
//         this.fname = fname
//         this.lname = lname
//         this.contact = contact
//     }
//     greetUser(){
//         console.log(`Welcome ${this.fname} ${this.lname}`)
//     }
// }

// let u1 = new User("Om","singh",734888978)

// console.log(u1)
// console.log(u1.greetUser())

// class Admin extends User{
//     constructor(fname,lname,contact){
//         super(fname,lname,contact)

//     }

// }
// let u2 = new User("Abhishek","singh",87821)
// console.log(u2)
// console.log(u2.greetUser())


// let a1= new Admin("Sakshi","Yadav",98498)
// console.log(a1)







class User {
    constructor(fname,lname,cont){
        this.fname = fname;
        this.lname = lname;
        this.contact= cont;

    }
    
}
let greetUser  = function(){
        console.log(`Welcome ${this.fname} ${this.lname}`)

}
User.prototype.greetUser = greetUser
let u1 = new User("Rsj","agarwal",983798289)
console.log(u1)
console.log(u1.fname + u1.lname)
console.log(u1.greetUser())

class Admin extends User{
    constructor(fname,lname,contact){
        super(fname,lname,contact)
        this.accessPanel = true;
    }
    addCourse(){
        console.log("New course is added")
    }
}

let a1 = new Admin("GK","Sharma",9938237865)
console.log(a1)
console.log(a1.greetUser())


class Person{
    constructor(name , age, work){
        this.name = name;
        this.age = age;
        this.work = work;
        

    }
    summary(){
            if(this.age>18){
                console.log(`${this.name} is ADULT`)
            }
            else{
                console.log(`${this.name} is MINOR`)
            }
    }

}

let p1 =  new Person("djhdj",65,"xyz")
console.log(p1)



