import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {

  todos:Todo[];
  constructor(private todoService:TodoService) {
    this.todos = [];
        
  }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((response)=> {
      console.log(response)
      this.todos = response;
    })
  }

  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo.id).subscribe(
      ()=>{
        this.ngOnInit()
      }
    );
    
    // localStorage.setItem("todos",JSON.stringify(this.todos))
  
    
  }
  
  addTodo(todo:Todo){
    //this.todos.push(todo)
    //localStorage.setItem("todos",JSON.stringify(this.todos))

    this.todoService.addTodo(todo).subscribe(
      ()=>{
        this.ngOnInit()
      }
    );
    

  }
  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos",JSON.stringify(this.todos))

  }


}
