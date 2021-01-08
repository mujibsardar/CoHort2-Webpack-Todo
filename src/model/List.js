import { Todo } from './Todo';
import { Category } from './Category';

const List = (() => {

    const generateDefaultTodos = () => {
      console.log(`model/List.generateDefaultTodos`);
      let todo_1 = Todo.generateSingleTodo("Pay Netflix Subscription", Category.createNew("Personal"), "Make sure to pay the bill before the end of the month", false);
      let todo_2 = Todo.generateSingleTodo("Get coffee creamer", Category.createNew("Personal"), "Make sure it's the Starbucks kind", false);
      let todo_3 = Todo.generateSingleTodo("Submit new feature", Category.createNew("Work"), "Don't forget to pull latest changes", false);
      return [todo_1, todo_2, todo_3];
    }

    const printTodos = (todos) => {
      console.log(`model/List.printTodos`);
      let returnString = "\n";

      todos.forEach((item) => {
        returnString += item.title + " \n";
      })
      return returnString;
    }



    return {generateDefaultTodos, printTodos}

})();

export  { List };
