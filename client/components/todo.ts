import {Component, View, NgFor} from 'angular2/angular2';

@Component({
  selector: 'todo',
})
@View({
  template: `
  <ul>
    <li *ng-for="#todo of todos">
      {{ todo }}
    </li>
  </ul>
  `,
  directives: [NgFor]
})
class TodoComponent {
  todos: Array<string>;

  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }
}


export default TodoComponent;
