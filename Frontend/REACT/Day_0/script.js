// let obj = {
//     name : "divyansh Singh",
//     branch : "CSE",
//     company : "Google"
// }

// let fn = ({branch,company})=>{
//     console.log(branch,company);
// };
// fn(obj)
// console.log(obj)

// let h1 = document.createElement('h1')
// h1.textContent="I am Real DOM"
// h1.setAttribute('class','heading')

// document.body.append(h1)

// let rh1 = React.createElement('h1',
//     {class:'reactHeading'},  
//     "I am inside the React"
// )
// let rdiv = React.createElement(
//     'div',
//     {className: 'parent'},

//     React.createElement(
//         'div',
//         {className: 'child'},

//         React.createElement(
//             'h1',
//             {className: 'childHeading'},
//             'I am inside the React Child'
//         )
//     )
// );
// console.dir(h1)
// console.log(rh1)
// console.log(ReactDOM)
// console.log(rdiv)

// let reactDivHTML = document.querySelector('.reactroot')
// console.dir(reactDivHTML)
// let reactdiv = ReactDOM.createRoot(reactDivHTML)
// reactdiv.render(rdiv)



let div = React.createElement('div',
    {},
    React.createElement('h1',
        {},
        React.createElement('span',
            {},
            "I am Done \n"
        )
    )
)

let root = document.querySelector('.reactroot')
let reactroot = ReactDOM.createRoot(root).render(div)