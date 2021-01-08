import {todosExistsCtrl, loadTodosCtrl, saveTodosCtrl} from './localStorage';
import { List } from '../model/List';
import { Dom } from '../view/Dom';

let todos = [];

export function init(){
  console.log(`controller/init`);
  // Load default todos from local storage if they exist
  if(todosExistsCtrl()){
    todos = loadTodosCtrl();
  } else {
    // otherwise create new todos and save to local storage
    todos = List.generateDefaultTodos();
    saveTodosCtrl(todos);
  }

  // Display todos on the dom
  Dom.displayTodos(todos);
  Dom.displayOptions(todos);
}
