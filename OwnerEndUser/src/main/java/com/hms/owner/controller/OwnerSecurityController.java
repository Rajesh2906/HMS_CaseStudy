package com.hms.owner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.owner.models.OwnerSecurityModel;
import com.hms.owner.service.SecurityService;

@RestController
@RequestMapping("/owner")
public class OwnerSecurityController {

	@Autowired
	private SecurityService securityService;

	@PutMapping("/updateownerpassword")
	public void updateUserpassword(OwnerSecurityModel user) {
		securityService.updateOwnerDetails(user);
	}

	@PostMapping("/addownerdetails")
	public void addOwnerdetails(OwnerSecurityModel ownerModel) {
		securityService.addownerDetails(ownerModel);

	}

}
