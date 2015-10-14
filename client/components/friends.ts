import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import FriendsService from '../services/friends';

@Component({
  selector: 'friends',
  bindings: [FriendsService]
})
@View({
  directives: [NgFor, NgIf],
  template: `
    <p>My name: {{ myName }}</p>
    <p>Friends:</p>
    <ul>
      <li *ng-for="#name of names">
        {{name}}
      </li>
    </ul>
    <p *ng-if="names.length > 3">You have many friends!</p>
  `
})
class FriendsComponent {
  myName: string;
  names: Array<string>;

  constructor(friendsService: FriendsService) {
    this.myName = 'Alice';
    this.names = friendsService.names;
  }
}


export default FriendsComponent;
