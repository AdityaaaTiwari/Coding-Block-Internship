const input = document.getElementById("task");
const list = document.getElementById("list");

function addTask(){

    let task = input.value.trim();

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let taskDiv = document.createElement("div");
    taskDiv.className = "task";

    let check = document.createElement("input");
    check.type = "checkbox";

    let text = document.createElement("span");
    text.innerText = task;

    check.addEventListener("change", function(){

        if(check.checked){
            text.classList.add("completed");
        }
        else{
            text.classList.remove("completed");
        }

    });

    taskDiv.appendChild(check);
    taskDiv.appendChild(text);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";

    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(taskDiv);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
    input.focus();

}

input.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});