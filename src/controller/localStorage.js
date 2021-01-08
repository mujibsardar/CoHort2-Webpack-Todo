// Return true of todos exist in local storage
export function todosExistsCtrl(){
  console.log(`controller/localStorage.todosExists`);
  let todos = loadTodosCtrl();
  return todos != undefined && todos != null;
}

// Loads todos from local storage
export function loadTodosCtrl(){
  console.log(`controller/localStorage.loadTodos`);
  return JSON.parse(localStorage.getItem("todos"));
}

// Save todos to local storage
export function saveTodosCtrl(todos){
  console.log(`controller/localStorage.saveTodos`);
  return localStorage.setItem("todos", JSON.stringify(todos));
}

// Save todo to local storage
export function saveTodoCtrl(todo){
  console.log(`controller/localStorage.saveTodo`);
  let todos = loadTodosCtrl();
  todos.push(todo);
  saveTodosCtrl(todos);
}

// Udpate todo in local storage
export function updateTodoCtrl(updateObj){
  console.log(`controller/localStorage.updateTodo`);
  let id = updateObj.id;
  // Load todos from local storage
  let todos = loadTodosCtrl();
  // Find todo with the given id and update it
  todos.forEach((item, index) => {
    if(item.id === id){
      console.log(`controller/localStorage.updateTodo. Found a todo. Completed: ${updateObj.completed}`);
      todos[index] = updateObj;
    }
  });
  saveTodosCtrl(todos);
}
