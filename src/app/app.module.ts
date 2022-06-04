import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './mycomponents/todo-item/todo-item.component';
import { DisplayTodoComponent } from './mycomponents/display-todo/display-todo.component';
import { AddTodoComponent } from './mycomponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    DisplayTodoComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
