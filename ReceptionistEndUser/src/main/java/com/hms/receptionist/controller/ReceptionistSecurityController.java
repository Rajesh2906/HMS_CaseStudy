package com.hms.receptionist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hms.receptionist.model.ReceptionistSecurityModel;
import com.hms.receptionist.service.SecurityService;

@RestController
@RequestMapping("/receptionist/security")
public class ReceptionistSecurityController {

	@Autowired
	private SecurityService securityService;

	@PutMapping("/updateuser")
	public void updateUser(@RequestBody ReceptionistSecurityModel user, @RequestParam String newPassword) {

		securityService.updateReceptionistDetails(user, newPassword);
	}

	@GetMapping("/getuserdetails")
	public List<ReceptionistSecurityModel> getUserDetails() {
		return securityService.getUserDetails();
	}

}
