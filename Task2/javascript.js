// javascript.js
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', addTodo);

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText) {
    const todoItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const label = document.createElement('label');
    label.innerText = todoText;
    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoItem.innerText = todoText;
    todoList.appendChild(todoItem);
    todoInput.value = '';
  }
}