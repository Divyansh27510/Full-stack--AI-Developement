const body = document.body
const timeScore = document.querySelector(".timeScore")
const timer = timeScore.querySelector("#timer")
const scorer = timeScore.querySelector("#score")
const main = document.querySelector("main")
const box = document.querySelector(".box")
const button = document.querySelector("button")
const gameOver = document.querySelector(".gameOver")
const finalScore  =  gameOver.querySelector("#finalScore")
// console.log(timer)


let time = 0;
let score = 0;
let scoreFlag = false;
let isclicked = false;
let over  =  0;
let overlay = ()=>{
    let stop = setInterval(()=>{
        over++;
    },1000)
    setTimeout(()=>{
        gameOver.style.display="none"
    },3000)
    

}
let randomColor = ()=>{
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)

    let b = Math.floor(Math.random()*256)

    return `rgb(${r},${g},${b})`

}
let randomBox = ()=>{
    let mainX = main.clientWidth
    let mainY = main.clientHeight
    let boxX = box.offsetWidth;
    let boxY = box.offsetHeight;

    let x = Math.random() * (main.clientWidth - boxX);
    let y = Math.random() * (main.clientHeight - boxY);

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
}
button.addEventListener('click', ()=>{
    button.disabled = true;
    scoreFlag =  true;
    let interval = setInterval(()=>{
        time++;
        isclicked = false;
        randomBox()
        box.style.backgroundColor = randomColor()

        timer.textContent = time
        
    },1000)

    setTimeout(()=>{
        scoreFlag  = false;
        clearInterval(interval)
        gameOver.style.display="flex"

        overlay()

    },10000)


})

box.addEventListener("click", () => {
    
    if (scoreFlag && !isclicked) {
        score++;
        isclicked = true;
        scorer.textContent = score;
    }

});
