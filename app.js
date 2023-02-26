const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const taskList = document.querySelector('[data-tasks]');

newTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  if (taskName === '') return;
  const newTask = document.createElement('div');
  newTask.classList.add('task');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'task-' + (taskList.childElementCount + 1);
  checkbox.name = 'task-' + (taskList.childElementCount + 1);
  const label = document.createElement('label');
  label.setAttribute('for', checkbox.id);
  label.textContent = taskName;
  label.classList.add('strikethrough');
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.textContent = 'X';

  // Create input element for due date
  const dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.name = 'task-' + (taskList.childElementCount + 1) + '-due-date';
  
  // Add the elements to the task div
  newTask.appendChild(checkbox);
  newTask.appendChild(label);
  newTask.appendChild(dueDateInput);
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
  newTaskInput.value = '';
});

taskList.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'input' && e.target.type === 'checkbox') {
    const checkbox = e.target;
    const label = checkbox.nextElementSibling;
    label.classList.toggle('strikethrough');
  } else if (e.target.tagName.toLowerCase() === 'button' && e.target.classList.contains('delete')) {
    const task = e.target.closest('.task');
    task.remove();
  }
});


// Remove the first three tasks when their delete buttons are clicked
deleteButtons.forEach((button, index) => {
  if (index < 3) {
    button.addEventListener('click', () => {
      const task = button.closest('.task');
      task.remove();
    });
  }
});

