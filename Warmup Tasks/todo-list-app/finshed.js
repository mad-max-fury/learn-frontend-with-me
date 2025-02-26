document.addEventListener("DOMContentLoaded", loadTasks);

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const task = { text: taskText, completed: false };
    addTaskToList(task);
    saveTask(task);
    taskInput.value = "";
});

function addTaskToList(task) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
        <button class="delete-btn">X</button>
    `;

    li.addEventListener("click", function () {
        task.completed = !task.completed;
        saveAllTasks();
        li.firstChild.classList.toggle("completed");
    });

    li.querySelector(".delete-btn").addEventListener("click", function (e) {
        e.stopPropagation();
        li.remove();
        deleteTask(task.text);
    });

    taskList.appendChild(li);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function saveAllTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.firstChild.classList.contains("completed"),
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(addTaskToList);
}

function deleteTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
