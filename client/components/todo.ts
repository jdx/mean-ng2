import {Component, View, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';

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
  <input [(ng-model)]="newTodo" (keyup)="doneTyping($event)">
  <button (click)="addTodo()">Add Todo</button>
  `,
  directives: [NgFor, FORM_DIRECTIVES]
})
class TodoComponent {
  todos: Array<string>;
  newTodo: string;

  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }

  addTodo() {
    if (!this.newTodo) return;
    this.todos.push(this.newTodo);
    this.newTodo = "";
  }

  doneTyping($event: KeyboardEvent) {
    if ($event.which === 13) {
      this.addTodo();
    }
  }
}


export default TodoComponent;
