let addBtn = document.getElementById("add");
let task = document.getElementById("task");
let list = document.getElementById("toDoList");
let delBtn = document.getElementById("bin");
let delAll = document.getElementById("delAll");
let id = 0;


addBtn.addEventListener("click", function() {
    addItem(task.value);
});
document.addEventListener('keypress', function (enter) {
    if (enter.key === 'Enter') {
        addItem(task.value);
    }
});
delAll.addEventListener("click", clearAll);
window.onload = onLoadPage;





function onLoadPage(){
    let len = Object.keys(localStorage).length;
    let tasks = [];
    id = 0;

    for(let i = 0; i < len; i++){
        let keyGet = Object.keys(localStorage)[i];
        let taskGet = localStorage.getItem(keyGet);
        tasks.push(taskGet);
    }

    clearAll();

    for(let i = 0; i < tasks.length; i++){
        addItem(tasks[i]);
    }
}



function addItem(taskValue){
    if(taskValue.length===0){
        alert("Type a real task");
    } else {
        let div = document.createElement("div");
        let input = document.createElement("input");
        let li = document.createElement("li");
        let img = document.createElement("img");

        div.setAttribute("class", "item");
        div.setAttribute("id", id);
        input.setAttribute("type", "checkbox");
        li.setAttribute("class", "align");
        img.setAttribute("onclick", "removeItem(this.id)");
        img.setAttribute("class", "bin");
        img.setAttribute("id", id);
        img.setAttribute("src", "./assets/bin.png");

        div.appendChild(input);
        div.appendChild(li);

        let text = document.createTextNode(taskValue);

        

        li.appendChild(text);

        li.appendChild(img);

        list.appendChild(div);


        localStorage.setItem(id,taskValue);

        task.value = "";

        id++;
    }
    
}



function removeItem(idValue){
    
    let div = document.getElementById(idValue);    
    div.remove();
    localStorage.removeItem(idValue);

}


function clearAll(){
    let ol = document.getElementById("toDoList");
    ol.innerHTML = "";
    localStorage.clear();
    id = 0;
}