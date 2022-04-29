package com.hms.APIgateway.model;

import org.springframework.stereotype.Component;

@Component
public class ReceptionistSecurityModel {

	private String userId;
	private String password;

	public ReceptionistSecurityModel() {

	}

	public ReceptionistSecurityModel(String userId, String password) {
		super();
		this.userId = userId;
		this.password = password;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
