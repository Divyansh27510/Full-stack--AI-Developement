// const main = document.querySelector("main")
// main.addEventListener('click',(event)=>{
//     console.log(event.target)

// })

const main = document.querySelector("main")
const box = document.querySelector(".box")
const button = document.querySelector("button")
const timer = document.querySelector(".timer")

let timerText = timer.querySelector("#time")

let randColor = ()=>{
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
}

let randBox = ()=>{
    let mainY = main.clientHeight;
    let mainX = main.clientWidth;
    let boxY = box.offsetHeight;
    let boxX = box.offsetWidth;

    let x = Math.ceil(Math.random()*(mainY - boxY))
    let y = Math.ceil(Math.random()*(mainX-boxX))
    box.style.top = `${x}px`;
    box.style.left = `${y}px`;
}

button.addEventListener('click',(e)=>{
    let x = Math.ceil(Math.random()*100)
    let y = Math.ceil(Math.random()*100)

    

   
    let time = 0
    const interval = setInterval(()=>{
        randBox()
        box.style.backgroundColor = randColor();
        time ++
        
        timerText.textContent = `${time}`

    },1000)

    setTimeout(() => {
        clearInterval(interval)
    },10000)
    
})