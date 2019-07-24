package com.danielmir.deloitte.test.controller;

import org.springframework.web.bind.annotation.CrossOrigin; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;

@CrossOrigin
@Controller
public class StaticProviderController {

    @RequestMapping(value = {"/", "/login", "deloitte"})
    public String index() {
        return "index.html";
    }

}