import React from 'react'
console.log(React)

let h1 = React.createElement('h1',
    {class:'heading'},
    "How is React going"
)

let root = document.querySelector('.react')
console.log(root)

let reactRoot = ReactDOM.createRoot(root)
reactRoot.render(h1)

console.log("hello")