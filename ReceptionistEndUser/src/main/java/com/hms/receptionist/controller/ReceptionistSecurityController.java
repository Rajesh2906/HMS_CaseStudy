package com.hms.receptionist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.receptionist.model.ReceptionistSecurityModel;
import com.hms.receptionist.service.SecurityService;

@RestController
@RequestMapping("/receptionist")
public class ReceptionistSecurityController {

	@Autowired
	private SecurityService securityService;

	@PutMapping("/updateuser")
	public void updateUser(ReceptionistSecurityModel user) {
		securityService.updateReceptionistDetails(user);
	}

	@GetMapping("/getuserdetails")
	public void getUserDetails() {
		securityService.getUserDetails();
	}

}
