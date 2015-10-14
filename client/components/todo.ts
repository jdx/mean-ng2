import {Component, View, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import TodoService from '../services/todo';

@Component({
  selector: 'todo',
  bindings: [TodoService]
})
@View({
  templateUrl: '/templates/todo.html',
  directives: [NgFor, FORM_DIRECTIVES]
})
class TodoComponent {
  todos: Array<string>;
  newTodo: string;

  constructor(public todoService: TodoService) {
    todoService.getTodos().subscribe((todos: Array<string>) => this.todos = todos)
  }

  addTodo() {
    if (!this.newTodo) return;
    //this.todos.push(this.newTodo);
    this.newTodo = "";
  }
}


export default TodoComponent;
