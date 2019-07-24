import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { Todo } from 'app/domain/todo';
import { API_URL } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  public retrieveAllTodos(username){
  	return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);  
  }

  public retrieveTodo(username, id): Observable<Todo>{
  	return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);  
  }

  public deleteTodo(username, id){
  	return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);  
  }

  public updateTodo(username, id, todo){
  	return this.http.put<Todo>(`${API_URL}/users/${username}/todos/${id}`, todo);    	
  }

  public createTodo(username, todo){
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);      
  }
}
