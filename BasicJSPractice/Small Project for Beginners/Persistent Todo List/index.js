console.log("Todo list");

const storageKey = "tasks";

let tasks = ["hello world", "go to Howth"];

const inputTask = document.getElementById("inputTask");
const taskList = document.getElementById("tasks");

function addTask() {
  tasks.push(inputTask.value);
  renderTasks();
  inputTask.value = "";
  saveTask();
}

function renderTasks() {
  taskList.innerHTML = null;

  for (const [index, item] of Object.entries(tasks)) {
    const taskContainer = document.createElement("div");

    const taskText = document.createElement("p");
    taskText.textContent = item;

    const taskButton = document.createElement("button");
    taskButton.textContent = "Delete";
    taskButton.onclick = () => removeTask(index);

    taskContainer.appendChild(taskText);
    taskContainer.appendChild(taskButton);

    taskList.appendChild(taskContainer);
  }
}

function removeTask(index) {
  console.log(index);
  tasks.splice(index, 1);
  saveTask();
  renderTasks();
}

function loadTask() {
  const oldTasks = localStorage.getItem(storageKey);
  if (oldTasks) tasks = JSON.parse(oldTasks);
  renderTasks();
}
function saveTask() {
  const stringTasks = JSON.stringify(tasks);
  localStorage.setItem(storageKey, stringTasks);
}

renderTasks();
document.getElementById("btnAdd").addEventListener("click", addTask);
document.addEventListener("DOMContentLoaded", loadTask);
