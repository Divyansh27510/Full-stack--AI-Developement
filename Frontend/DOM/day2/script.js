// console.log(document)

// const main =  document.querySelector('main')
// console.log(main.childNodes)
// console.log(main.children)


// console.log("Hello")

// let h1 = document.querySelector('#heading')
// console.log(h1)

// h1.textContent = "Hey i am changed"
// h1.style.backgroundColor = "Red"

// const isClass =  h1.classList.contains('headiing')
// console.log(isClass)

// h1.classList.toggle('heading')
// h1.classList.replace('heading','replaceHeading')


// let inp  = document.querySelector('input')
// console.log(inp)

// inp.classList.add('inputClass')
// let inp = document.querySelector('input')
// inp.classList.add('fuck')
// inp.classList.remove('fuck')


const bulb = document.querySelector('.bulb')
const btn = document.querySelector('button')

console.log(btn)
console.log(bulb)

// let flag = true;
// btn.addEventListener('click',()=>{
//     if(flag){
//         console.log("Bulb is ON")
//         btn.style.backgroundColor='red'
//         btn.textContent = "OFF"
//         bulb.style.backgroundColor = "yellow"
//         flag = false;
//     }
//     else{
//         console.log("Bulb is OFF")
//         btn.style.backgroundColor='black'
//         btn.textContent = "ON"
//         bulb.style.backgroundColor = "transparent"
//         flag = true;
//     }
    
// })
// btn.textContent = "Fucked"
btn.addEventListener('click',function(){
    let val = bulb.classList.toggle('lightUP');
    if(val){
        btn.textContent = "OFF"
    }
    else{
        btn.textContent= "ON"
    }

})