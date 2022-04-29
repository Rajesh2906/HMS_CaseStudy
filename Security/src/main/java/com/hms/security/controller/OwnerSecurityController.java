package com.hms.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.security.models.OwnerSecurityModel;
import com.hms.security.service.SecurityService;

@RestController
@RequestMapping("/owner")
public class OwnerSecurityController {

	@Autowired
	private SecurityService securityService;

	@PostMapping("/adduser")
	public void addUser(OwnerSecurityModel user) {
		securityService.addownerDetails(user);
	}

	@PutMapping("/updateuser")
	public void updateUser(OwnerSecurityModel user) {
		securityService.updateOwnerDetails(user);
	}

	@GetMapping("/getuserbyid")
	public OwnerSecurityModel getuser(String userId) {
		return securityService.getOwnerById(userId);
	}

}
