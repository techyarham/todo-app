document.getElementById('add-btn').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
      const todoList = document.getElementById('todo-list');
      const newTodo = document.createElement('li');
      newTodo.textContent = todoText;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function() {
        todoList.removeChild(newTodo);
      });
      newTodo.appendChild(deleteBtn);
      todoList.appendChild(newTodo);
      todoInput.value = '';
    }
  });
  