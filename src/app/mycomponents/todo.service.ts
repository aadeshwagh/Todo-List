import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "../Todo";

@Injectable({
    providedIn: 'root',
  })
export class TodoService{

    constructor(private http:HttpClient){

    }

    getAllTodos():Observable<Todo[]>{
        return  this.http.get<any>('http://localhost:8080/getAllTodos');
    }
    addTodo(todo:Todo):Observable<void>{
         return this.http.post<any>('http://localhost:8080/addTodo',todo);
    }
    deleteTodo(id:number):Observable<void>{
        return this.http.delete<any>(`http://localhost:8080/deleteTodo/${id}`);
    }


}