package com.hms.manager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.manager.models.ManagerSecurityModel;
import com.hms.manager.models.ReceptionistSecurityModel;
import com.hms.manager.service.ManagerSecurityService;

@RestController
@RequestMapping("/manager/security")
public class ManagerSecurityController {

	@Autowired
	private ManagerSecurityService managerSecurityService;

	@PostMapping("/addreceptionist")
	public void addReceptionist(@RequestBody ReceptionistSecurityModel receptionistSecurityModel) {
		managerSecurityService.addReceptionist(receptionistSecurityModel);
	}

	@GetMapping("/getmanagerdetails")
	public List<ManagerSecurityModel> getManagerUserDetails() {
		return managerSecurityService.getUserDetails();
	}

	@PutMapping("/updatemanager")
	public void updateManagerDetailsById(@RequestBody ManagerSecurityModel managerDetails) {
		managerSecurityService.updateManagerDetails(managerDetails);
	}

	@GetMapping("/getreceptionistdetails")
	public List<ReceptionistSecurityModel> getReceptionistDetails() {
		return managerSecurityService.getReceptionistDetails();
	}

}
