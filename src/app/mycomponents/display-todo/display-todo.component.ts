import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent implements OnInit {

  @Input() todo! :Todo
  @Output() Todoelete:EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox:EventEmitter<Todo> = new EventEmitter();
  constructor() {
    
   }

  ngOnInit(): void {
  }
  onClick(todo:Todo){
    this.Todoelete.emit(todo)
    console.log("delete is presed")
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckBox.emit(todo)
  }

}
