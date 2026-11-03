const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");

// btn.addEventListener("click", () => {
//   const value = inp.value;

//   if (value.trim() === "") return;

//   todoBox.innerHTML += `<div class="li">
//           <h3>${value}</h3>
//           <div>
//             <button class="btn edit">Edit</button>
//             <button class="btn del">Delete</button>
//           </div>
//         </div>`;

//   inp.value = "";
// });
let value = inp.value

btn.addEventListener('click',()=>{
    let value = inp.value
    if(value.trim() == ""){
        return ;
    }
    let btnbox = document.createElement('div')
    btnbox.classList.add('li')

    let task = document.createElement('h3')
    task.textContent = value;

    let btndiv = document.createElement('div')

    let editbtn = document.createElement('button')
    editbtn.classList.add('btn', 'edit')
    editbtn.textContent = 'Edit'

    let delbtn = document.createElement('button')
    delbtn.classList.add('btn','del')
    delbtn.textContent = 'Delete'

    btndiv.append(editbtn , delbtn)
    btndiv.style.display = 'flex'
    btndiv.style.gap = '10px'

    btnbox.append(task,btndiv)

    todoBox.append(btnbox)


    editbtn.addEventListener('click',()=>{
        let editing = prompt("OHH you want to Edit your List...")
        if(editing === null || editing.trim() === ""){
            return ;
        }
        task.textContent = editing
        alert("Task Edited Successfully!");

    })

    delbtn.addEventListener('click',()=>{
        let ans = confirm("Are you sure you want to delete?");
        if(ans){
            btnbox.remove(btnbox)
            alert("Your Task Deleted Successfully....")
        }
        

    })



    
    inp.value="";
})