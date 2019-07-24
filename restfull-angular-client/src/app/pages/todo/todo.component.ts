import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Todo } from 'app/domain/todo';
import { TodoDataService } from 'app/services/todo-data.service';
import { BasicAuthenticationService } from 'app/services/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
	private id: number;
	public todo: Todo;
  public today: any = new Date().toJSON().split('T')[0];

  constructor(
  	private todoDataService: TodoDataService, 
    private authenticationService: BasicAuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  	this.id = this.route.snapshot.params['id'];
  	this.todo = new Todo(this.id, '', '', false, new Date(), '', new Date());

    if(this.id != -1){
      this.todoDataService.retrieveTodo(
        this.authenticationService.getUser(),
        this.id
      ).subscribe(t=> this.todo = t);      
    }
  }

  public saveTodo(){
    if(this.id != -1){
      //UPDATE
    	this.todoDataService.updateTodo(
        this.authenticationService.getUser(),
        this.id,
        this.todo
      ).subscribe(data => {
        console.log(data);
        this.router.navigate(['todos']);
      });
    } else {
      //CREATE
      this.todoDataService.createTodo(
        this.authenticationService.getUser(),
        this.todo
      ).subscribe(data => {
        console.log(data);
        this.router.navigate(['todos']);
      });
    }
  }

}
