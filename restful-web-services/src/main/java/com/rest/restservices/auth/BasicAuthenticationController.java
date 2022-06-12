package com.rest.restservices.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BasicAuthenticationController {
	
	@GetMapping("/basicauth")
	public AuthenticationBean helloWorld() {
		return new AuthenticationBean("You are authenticated");
	}
	
	
}
