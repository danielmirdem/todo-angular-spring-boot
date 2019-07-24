import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from 'app/domain/todo';
import { TodoDataService } from 'app/services/todo-data.service';
import { BasicAuthenticationService } from 'app/services/basic-authentication.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  public todos: Todo[]; 

  public message: string;

  constructor(
    private router: Router,
    private todoDataService: TodoDataService, 
    private authenticationService: BasicAuthenticationService) { }

  ngOnInit() {
    this.refreshTodos();
  }

  public deleteTodo(id){
    this.todoDataService.deleteTodo(this.authenticationService.getUser(), id)
       .subscribe(r => {
         console.log(r);
         this.message = `Delete of Todo ${id} successful!`;
         this.refreshTodos();
       });    
  }

  public completeTodo(todo: Todo){
      todo.done = true;
      this.todoDataService.updateTodo(
        this.authenticationService.getUser(),
        todo.id,
        todo
      ).subscribe(data => {
        console.log(data);
        this.refreshTodos();
      });
  }

  public updateTodo(id){
    this.router.navigate(['todos', id]);
  }

  public addTodo(){
    this.router.navigate(['todos', -1]);    
  }

  private refreshTodos(){
    this.todoDataService.retrieveAllTodos(this.authenticationService.getUser())
      .subscribe(a => this.todos = a); 
  }
}
