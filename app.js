const newTaskForm = document.querySelector("[data-new-task-form]");
const newTaskInput = document.querySelector("[data-new-task-input]");
const taskList = document.querySelector("[data-tasks]");
const deleteButtons = document.querySelectorAll(".delete-button");

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  if (taskName === "") return;
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "task-" + (taskList.childElementCount + 1);
  checkbox.name = "task-" + (taskList.childElementCount + 1);

  const label = document.createElement("label");
  label.setAttribute("for", checkbox.id);
  label.textContent = taskName;
  label.classList.add("strikethrough");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "X";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "task-" + (taskList.childElementCount + 1) + "-due-date";

  newTask.appendChild(checkbox);
  newTask.appendChild(label);
  newTask.appendChild(dueDateInput);
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
  newTaskInput.value = "";

  const taskIndex = taskList.children.length - 1;
  dueDateInput.name = "task-" + (taskIndex + 1) + "-due-date";
});

taskList.addEventListener("click", (e) => {
  if (
    e.target.tagName.toLowerCase() === "input" &&
    e.target.type === "checkbox" &&
    e.target.checked
  ) {
    const checkbox = e.target;
    const label = checkbox.nextElementSibling;
    label.classList.toggle("strikethrough");
    const audio = new Audio("audio/success.mp3");
    audio.play();
  } else if (
    e.target.tagName.toLowerCase() === "button" &&
    e.target.classList.contains("delete")
  ) {
    const task = e.target.closest(".task");
    task.remove();
  }
});

deleteButtons.forEach((button, index) => {
  if (index < 3) {
    button.addEventListener("click", () => {
      const task = button.closest(".task");
      task.remove();
    });
  }
});
