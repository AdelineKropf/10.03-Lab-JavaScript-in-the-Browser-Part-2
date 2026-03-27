/* Code generated using ChatGPT and commented and edited by me */

document.addEventListener("DOMContentLoaded", domLoaded);

// register addBtnClick() as the Add button's click event handler.
function domLoaded() {
  let addBtn = document.getElementById("addBtn");
  let textbox = document.getElementById("taskInput");

  /* Makes it so the button being clicked is sensed */
  addBtn.addEventListener("click", addBtnClick);

  /* Allows you type in the box and have it recorded */
  textbox.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addBtnClick();
    }
  });

  /* Makes it so you can delete the tasks there initially */
  let buttons = document.querySelectorAll(".done-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", removeTask);
  }
}

// extract the text entered in the textbox, then call addTask() with the new task.
function addBtnClick() {
  let textbox = document.getElementById("taskInput");
  let taskText = textbox.value.trim();

  /* doesn't allow you to add blank tasks */
  if (taskText !== "") {
    addTask(taskText);

    /* Clears the textbox */
    textbox.value = "";
    textbox.focus();
  }
}

/* How you add the task */
function addTask(taskText) {
  /* Creates a list element */
  let li = document.createElement("li");
  /* sets the html in the new element */
  li.innerHTML = `<span class="task-text">${taskText}</span><button class="done-btn">&times;</button>`;
  /* appends the new element onto the list */
  let list = document.querySelector("ol");
  list.appendChild(li);

  /* Adds a remove button to the new element */
  let buttons = document.querySelectorAll(".done-btn");
  let lastBtn = buttons[buttons.length - 1];
  lastBtn.addEventListener("click", removeTask);
}

/* is called to remove the task */
function removeTask(event) {
  let li = event.target.parentNode;
  let list = li.parentNode;

  list.removeChild(li);
}