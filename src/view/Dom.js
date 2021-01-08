import {updateTodoCtrl, saveTodoCtrl} from '../controller/localStorage';
import { Todo }  from '../model/Todo';
import { Category }  from '../model/Category';

const Dom = (() => {

    const displayTodos = (todos) => {
      console.log(`view/Dom.displayTodos`);
      // Display the given todos in the right container
      let todosElemParent = $('<div></div>');
      todos.forEach((todo) => {
        let todoElemParent = $('<div></div>');
        let todoElemCategory = $('<p></p>').text(`Category: ${todo.category.title}`);
        let todoElemTitle = $('<h2></h2>').text(`Title: ${todo.title}`);
        let todoElemDescription = $('<p></p>').text(`Description: ${todo.description}`);
        let todoElemCompleted = $('<p></p>').text(`Completed?: ${todo.completed}`);
        // Create checkbox element
        let todoElemMarkComplete = todo.completed? $('<input type="checkbox" checked /> Done') : $('<input type="checkbox" /> Done')
        // Attach a change event listener
        todoElemMarkComplete.change(function () {
          todo.completed = !todo.completed;
          Todo.updateTodoCtrl(todo);
          refreshPage();
        });
        let todoElemSeperator = $('<hr>');
        todoElemParent.append(todoElemCategory, todoElemTitle, todoElemDescription, todoElemCompleted, todoElemMarkComplete, todoElemSeperator);
        todosElemParent.append(todoElemParent);
      });
      $('#content').append(todosElemParent);
    }

    const refreshPage = () => {
      console.log(`view/Dom.refreshPage`);
      // Refresh page here
       location.reload();
    }

    const displayOptions = () => {
      // Setup modal
      console.log(`view/Dom.displayOptions`);
      let optionsElemParent = $('<div></div>');
      let optionOpenNewTodo = $('<button id="openModal">Create New Todo</button>');
      let closeModal = $('#closeModal');

      // Add click event listener to open modal button
      optionOpenNewTodo.click(function () {
        console.log(`view/Dom.displayOptions button clicked`);
         $("#myModal").show();
      });

      // Make sure modal closes when we press x
      closeModal.click(function () {
        console.log(`view/Dom.displayOptions close button clicked`);
        $("#myModal").hide();
      });

      // Add open modal button to content
      optionsElemParent.append(optionOpenNewTodo);
      $('#content').append(optionsElemParent);

      // Add form fields to modal
      let htmlForm = '';
      htmlForm += '<div id="inputFormRow">';
      htmlForm += '<div class="input-group mb-3">';
      htmlForm += '<input type="text" id="newCategory" name="category" class="form-control m-input" placeholder="Enter category" autocomplete="off">';
      htmlForm += '<input type="text" id="newTitle" name="title" class="form-control m-input" placeholder="Enter title" autocomplete="off">';
      htmlForm += '<input type="text" id="newDescription" name="description" class="form-control m-input" placeholder="Enter description" autocomplete="off">';
      htmlForm += '<div id="addTodoParent" class="input-group-append">';
      htmlForm += '<button id="addTodo" type="button" class="btn btn-danger">Add</button>';
      htmlForm += '</div>';
      htmlForm += '</div>';

      let modalBody = $('#modal-body');
      modalBody.append(htmlForm);

      // Add click event listener to addTodo button
      let addTodoButton = $('#addTodo');
      addTodoButton.click(function () {
        console.log(`view/Dom.displayOptions add todo button clicked`);
        let categoryTitle = $('#newCategory').val();
        let title = $('#newTitle').val();
        let description = $('#newDescription').val();
        if(categoryTitle.length <= 2 || title.length <= 2){
          alert("Sorry category and title must be at least 2 characters long");
        }else {
          console.log(`Category: ${categoryTitle}, Title: ${title}, Description: ${description}, `);
          const completed = false;
          const category = Category.createNew(categoryTitle);
          let newTodo = Todo.generateSingleTodo(title, category, description, completed);
          saveTodoCtrl(newTodo);
        }

      });

    }

    return {displayTodos, refreshPage, displayOptions}
})();

export  { Dom };
