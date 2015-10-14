import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/angular2';

@Injectable()
class TodoService {
  result: Array<string>;

  constructor(public http: Http) {
  }

  getTodos() {
    return this.http.get('/api/todos')
    .map((res: Response) => res.json());
  }
}

export default TodoService;
