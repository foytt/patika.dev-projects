const taskInput = document.querySelector("#task");
const addBtn = document.querySelector("#liveToastBtn");
const ulDOM = document.querySelector("#list");
const liveToast = document.querySelector("#liveToast");
const liveToast2 = document.querySelector("#liveToast2");
const liElement = document.querySelector("li");

const TaskList = localStorage.getItem("Tasks") ? JSON.parse(localStorage.getItem("Tasks")): [];

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addBtn.click();
    };
});

window.onload = function(){
    displayTasks();
};

function displayTasks(){
    for(let i = 0; i < TaskList.length; i++) {
        let liDOM = document.createElement(`li`);
        let liDOMTxt = document.createTextNode(TaskList[i]);     
        ulDOM.appendChild(liDOM);      
        liDOM.appendChild(liDOMTxt);      
        liDOM.setAttribute(`onclick`,`addCheckedClass(event)`);     

        const delBtn = document.createElement(`span`);      
        delBtn.innerHTML= "&times;";   
        delBtn.setAttribute(`class`,`close`);
        delBtn.classList.add("btn-delete");
        delBtn.onclick = (event) => deleteElement(event);
        liDOM.appendChild(delBtn); 
        
    }
}


function newElement() {
    if (taskInput.value.trim() !== "") {
        const liDOM = document.createElement("li");
        liDOM.innerHTML = `${taskInput.value} `;
        ulDOM.appendChild(liDOM);   
        liveToast.classList.replace("hide", "show");
        TaskList.push(taskInput.value);
        localStorage.setItem(`Tasks`, JSON.stringify(TaskList));
        taskInput.value = "";

        const delBtn = document.createElement(`span`);
        delBtn.innerHTML= "&times;";   
        delBtn.setAttribute(`class`,`close`);
        delBtn.classList.add("btn-delete");
        delBtn.onclick = (event) => deleteElement(event);
        liDOM.appendChild(delBtn);     

        setTimeout(function () { 
            liveToast.classList.replace("show", "hide")
        }, 5000 )
    } else {
        liveToast2.classList.replace("hide", "show");
        taskInput.value = "";
        setTimeout(function () { 
            liveToast2.classList.replace("show", "hide")
        }, 5000 )
    }
}

function taskDone(event) {
  if (event.target.tagName === "LI") {
      const listItem = event.target;
      listItem.classList.toggle("checked");
  } else if (event.target.classList.contains("btn-delete")) {
      const listItem = event.target.closest("li");
      listItem.remove();
      let node = event.target; 
      let indexOfNodeValue = TaskList.indexOf(node.parentNode.childNodes[0].nodeValue);
      TaskList.splice(indexOfNodeValue, 1);
      localStorage.setItem(`Tasks`,JSON.stringify(TaskList));
      node.parentNode.remove();  
      
  }
}

ulDOM.addEventListener("click", taskDone);

