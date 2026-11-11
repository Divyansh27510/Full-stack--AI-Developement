let clicked = false

let products = document.querySelector(".products")
console.log(products)

let product_overlay = document.querySelector(".product-overlay")
console.log(product_overlay)


let prod_open = false
products.addEventListener('click',()=>{
    if(!prod_open){
        product_overlay.style.display = "flex";
        prod_open = true;
    }
    else{
        product_overlay.style.display = "none";
        prod_open = false;
    }
})

let solutions = document.querySelector(".solutions")
console.log(solutions)


let solution_overlay = document.querySelector(".solutions-overlay")
console.log(solution_overlay)

let solution_open = false;
solutions.addEventListener('click',()=>{
    if(solution_open){
        solution_overlay.style.display = 'none'
        solution_open = false
    }
    else{
        solution_overlay.style.display = 'flex'
        solution_open = true;
    }
})

let resource = document.querySelector(".resources")
console.log(resource)
let resource_overlay = document.querySelector('.resource-overlay')
console.log(resource_overlay)
let resource_open = false;


resource.addEventListener("click",()=>{
    if(resource_open){
        resource_overlay.style.display = 'none'
        resource_open = false

    }
    else{
        resource_overlay.style.display = 'flex'
        resource_open =  true

    }
})




let signin = document.querySelector("#sign_in")
console.log(signin)

let signin_overlay = document.querySelector(".sign-in-overlay")
console.log(signin_overlay)

let sign_open = false

signin.addEventListener("click",()=>{
    if(sign_open){
        signin_overlay.style.display = 'none'
        sign_open = false
    }
    else{
        signin_overlay.style.display = 'flex'
        sign_open = true
    }
})
