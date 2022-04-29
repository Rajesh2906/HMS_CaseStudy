package com.hms.APIgateway.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hms.APIgateway.model.ReceptionistSecurityModel;

@Service
public class SecurityController {

	@Autowired
	private RestTemplate restTemplate;

	public ReceptionistSecurityModel getReceptionistDetails() {
		return restTemplate.getForObject("http://subhash:8097/receptionist/getuserdetails",
				ReceptionistSecurityModel.class);
	}

}
