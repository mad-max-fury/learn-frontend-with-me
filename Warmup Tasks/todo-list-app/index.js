//1. reference html elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
// 2. Get the user input
addTaskBtn.addEventListener("click", (e) => {
  const taskText = taskInput.value;
  if (taskText === "") alert("Please type in a todo");
  const task = { name: taskText };
  addTaskToList(task);
  taskInput.value = "";
});

function addTaskToList(task) {
  console.log("user's task: ", task);
  const li = document.createElement("li");
  li.innerHTML = `${task.name} <button class="delete-btn">X</button>`;
  li.querySelector(".delete-btn").addEventListener("click", (e) => {
    e.stopPropagation();

    console.log("delete button clicked");
    li.remove();
  });
  taskList.appendChild(li);
}

// 3. create a new task
// 4. add the task to the list
// 5. add delete button to task
