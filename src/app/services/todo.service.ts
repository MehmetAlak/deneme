import {Injectable} from '@angular/core';
import {Todo} from "../models/todo";

@Injectable()
export class TodoService {
  todos: Todo[] = [
    {
      police: '234234',
      zeyil: '0',
      createDate: new Date()
    },
    {
      police: '544574554',
      zeyil: '1',
      createDate: new Date()
    }
  ];

  constructor() {
  }

  getTodos(){
    return this.todos;
  }

  addTo(obj) {
    this.todos.push(obj);
  }

  removeTo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}
