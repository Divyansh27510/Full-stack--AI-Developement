const create_btn = document.querySelector("#create")
const formDiv = document.querySelector(".form")
create_btn.addEventListener('click',()=>{
    formDiv.style.display = 'flex'
})
const products = document.querySelector('.products')
// console.log(products)
let productArray =  JSON.parse(localStorage.getItem('products')) || [];
let lsd = localStorage.getItem("products")
let updateIndex = null;


let ui = ()=>{
    
    products.innerHTML ="";
    productArray.forEach((elem,index)=>{
        
        products.innerHTML += `<div class="product_card">
                <div class="product_img">
                    <img 
                    src="${elem.img}" alt="Img not available">
                </div>
                <div class="product_text">
                    <h3>
                        Name : <span class="prod_name">
                        ${elem.prod}</span>
                    </h3>
                    <p>
                        <strong>Description : </strong> <span class="prod_desc">
                            ${elem.desc}
                        </span>
                    </p>
                    <p>
                        <strong>Price : </strong><span class="prod_price">
                            ${elem.price}Rs.
                        </span>
                    </p>


                </div>
                <div class="buttons">
                    <button class="update" onclick="updateFunc('${elem.prod}')">
                        Update
                    </button>
                    <button
                    class="delete" onclick="deleteFunc(
                    ${index})">Delete</button>
                </div>
            </div>`
    })

}
ui()
const form = document.querySelector("form")
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    
    let prodName = event.target[0].value;
    let description = event.target[1].value;
    let price = event.target[2].value;
    let imgUrl = event.target[3].value;
    if(prodName.trim() === "" || description.trim() === "" || price.trim() === "" || imgUrl.trim() ===""){
        alert("Please fill all the Details before Submitting ...... ")
        return 
    }

    // console.log(prodName)
    let prod = {
        'prod':prodName,
        'desc':description,
        'price':price,
        'img':imgUrl
    }
    if(updateIndex !== null){

        productArray[updateIndex] = prod;
        updateIndex = null;
        localStorage.setItem('products',JSON.stringify(productArray))


    }
    else{
        productArray.push(prod);
        localStorage.setItem('products',JSON.stringify(productArray))
    }
    ui()
    // console.log(productArray);
    form.reset();
    formDiv.style 

})

const formEnd = form.querySelector(".formEnd")
// console.log(formEnd)
const formEndBtn = formEnd.querySelector("button")
// console.log(formEndBtn)
formEnd.addEventListener('click',()=>{
    formDiv.style.display='none'
})

const updateBtn = document.querySelector(".update")
// console.log(updateBtn)


const updateFunc = (name)=> {
    formDiv.style.display = 'flex'
    let product = productArray.find((elem) => {
        return elem.prod === name;
    })
    let index = productArray.findIndex((elem) => {
        return elem.prod === name;
    })
    updateIndex = index;
    // console.log(product)
    form[0].value = product.prod;
    form[1].value =product.desc;
    form[2].value = product.price;
    form[3].value = product.img;


    
}
const deleteFunc = (index)=>{
    productArray.splice(index,1)
    localStorage.setItem('products',JSON.stringify(productArray))
    ui()
}
