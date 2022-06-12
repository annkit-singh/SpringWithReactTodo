package com.rest.restservices.restfulwebservices.hello;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class HelloWorldController {
	
	@GetMapping("/hello")
	public String helloWorld() {
		return "Hello React from Spring";
	}
	
	@GetMapping("/helloclass")
	public HelloWorld getHelloWorldClass() {
		return new HelloWorld(101,"Jaipur");
		
	}
	
	@GetMapping("/helloclass/{city}")
	public HelloWorld getHelloWorldClass(@PathVariable String city) {
		return new HelloWorld(101,city);
	}
	
}
