package com.rest.restservices.restfulwebservices.hello;


public class HelloWorld {
	
	private Integer id;
	private String city;
	
	
	public HelloWorld() {}
	public HelloWorld(Integer id, String city) {
		super();
		this.id = id;
		this.city = city;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	
}
