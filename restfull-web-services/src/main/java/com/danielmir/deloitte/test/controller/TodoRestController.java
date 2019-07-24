package com.danielmir.deloitte.test.controller;

import java.util.List;
import java.util.Date; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin; 
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.net.URI;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.danielmir.deloitte.test.domain.Todo;
import com.danielmir.deloitte.test.service.TodoService;

@CrossOrigin
@RestController
public class TodoRestController {

    @Autowired
    private TodoService todoService;

    @GetMapping("/api/users/{username}/todos")
    public List<Todo> getAllTodo(@PathVariable String username){
        return todoService.findByUsername(username);
    }

    @GetMapping("/api/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id){
        return todoService.findById(id);
    }

    @DeleteMapping("/api/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){    	
        todoService.deleteById(id);
    	return ResponseEntity.noContent().build();
    }

    @PutMapping("/api/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, 
        @PathVariable long id, @RequestBody Todo todo){
        
        todo.setLastUpdate(new Date());
        Todo updatedTodo = todoService.save(todo);

        return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);       
    }

    @PostMapping("/api/users/{username}/todos")
    public ResponseEntity<Void> updateTodo(@PathVariable String username, 
        @RequestBody Todo todo){

        todo.setUsername(username);
        todo.setLastUpdate(new Date());
        Todo createdTodo = todoService.save(todo);

        //Location
        //Get current resource url
        //{id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().
            path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();       
    }

}