import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './mycomponents/about/about.component';
import { TodoItemComponent } from './mycomponents/todo-item/todo-item.component';

const routes: Routes = [
  {path : "" ,component : TodoItemComponent},
  {path : "about" ,component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
