package com.danielmir.deloitte.test.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin; 

import com.danielmir.deloitte.test.domain.AutenticationBean;

@CrossOrigin
@RestController
public class BasicAuthRestController {


    @GetMapping("/api/auth/basicauth")
    public AutenticationBean basicAuth(){
        return new AutenticationBean("You are authenticated");
    }

	@GetMapping("/api/auth/logout")
    public AutenticationBean logout(){
        return new AutenticationBean("You are logout");
    }
}