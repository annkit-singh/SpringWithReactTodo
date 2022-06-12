package com.rest.restservices.auth;


public class AuthenticationBean {
	
	
	private String message;
	
	
	public AuthenticationBean() {}
	public AuthenticationBean(String name) {
		this.message=message;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return String.format("AuthenticationBean [message=%s]", message);
	}
	
	
	
}
