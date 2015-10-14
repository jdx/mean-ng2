import {Component, View, bootstrap} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';
import FriendsComponent from './components/friends';
import TodoComponent from './components/todo';

// Annotation section
@Component({
  selector: 'my-app',
})
@View({
  template: `
  <div class='container'>
    <h2>Friends</h2>
    <friends></friends>

    <h2>Todo</h2>
    <todo></todo>
  </div>
  `,
  directives: [FriendsComponent, TodoComponent]
})

// Component controller
class MyAppComponent { }

bootstrap(MyAppComponent, [HTTP_BINDINGS]);
