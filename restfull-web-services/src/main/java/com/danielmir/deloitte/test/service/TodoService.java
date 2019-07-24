package com.danielmir.deloitte.test.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.danielmir.deloitte.test.domain.Todo;
import com.danielmir.deloitte.test.repository.TodoJpaRepository;

@Service
public class TodoService{

    @Autowired
    private TodoJpaRepository todoJpaRepository; 

    public List<Todo> findByUsername(String username){
        return todoJpaRepository.findByUsernameOrderByDoneAscTargetDateAsc(username);
    }

    public void deleteById(long id){
        todoJpaRepository.deleteById(id);    
    }

    public Todo findById(long id){
        return todoJpaRepository.findById(id).get();        
    }

    public Todo save(Todo todo){
        return todoJpaRepository.save(todo);
    }

}