const form = document.forms["myform"];
const input = form["task"];
const ul=document.getElementById("tasklist")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const val = input.value;

    const newLi= document.createElement("li")
    newLi.innerHTML=val + "<i onclick=\"deleteTask(this)\" class=\"fa-solid fa-xmark\" style=\"float:right\"></i>"
    ul.appendChild(newLi);
})

function deleteTask(element) {
   
    element.parentElement.remove();
    
}