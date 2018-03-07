import {Component, OnInit} from '@angular/core';
import {Todo} from "../../models/todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  constructor(private todoService: TodoService) {
  }

  todos: Todo[];

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addToDo(policeDeger: HTMLInputElement, zeylDeger: HTMLInputElement) {
    console.log(policeDeger.value);
    console.log(zeylDeger.value);
    const obj = {
      police: policeDeger.value,
      zeyil: zeylDeger.value,
      createDate: new Date()
    };
    this.todoService.addTo(obj);
    policeDeger.value = '';
    zeylDeger.value = '';
  }

  removeToDo(toDo: Todo) {
    this.todoService.removeTo(toDo);
  }

}
