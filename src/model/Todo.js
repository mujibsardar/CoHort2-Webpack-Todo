
import { v4 as uuidv4 } from 'uuid';
import {updateTodoCtrl} from '../controller/localStorage';

const Todo = (() => {

    const generateSingleTodo = (title, category, description, completed) => {
      // TODO Remove category later
      console.log(`model/List.generateSingleTodo ${category}`);
      return {
        id: uuidv4(),
        title: title,
        category: category,
        description: description,
        completed: completed
      }
    }

    const updateTodo = (todo) => {
      console.log(`single todo being updated in model/Todo ${JSON.stringify(todo)}`);
      updateTodoCtrl(todo);
    }

    return {generateSingleTodo, updateTodo}

})();

export  { Todo };
