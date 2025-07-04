const addtask =document.getElementById("input-text");
const game =document.querySelector(".button");

const Newtask = () =>{
   const list =document.createElement("li");
   const tasklist =document.getElementById("tasklist");
   tasklist.appendChild(list); 
   list.textContent = addtask.value
   deletetask(list)
}

function deletetask(list){
   const dltbtn = document.createElement("button");
   dltbtn.innerText = "Delete";
   list.appendChild(dltbtn);
    dltbtn.onclick = function() {
    list.remove()}
}


game.addEventListener("click" , Newtask);