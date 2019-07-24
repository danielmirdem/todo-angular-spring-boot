package com.danielmir.deloitte.test.domain;

public class AutenticationBean{
	
	private String message;

	public AutenticationBean(String message){
		this.message = message;
	}

	public String getMessage(){
		return message;
	}

	public void setMessage(String message){
		this.message = message;
	}

	@Override
	public String toString() {
		return String.format("AutenticationBean [message= %s]", message);
	}

}