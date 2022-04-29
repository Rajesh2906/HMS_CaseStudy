package com.hms.receptionist.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.receptionist.model.ReceptionistSecurityModel;
import com.hms.receptionist.repository.ReceptionistSecurityRepository;

@Service
public class SecurityService {

	@Autowired
	private ReceptionistSecurityRepository receptionistRepo;

	// update owner details
	public void updateOwnerDetails(ReceptionistSecurityModel securityModel) {
		if (securityModel.getPassword() == receptionistRepo.findById(securityModel.getUserId()).get().getPassword()) {
			receptionistRepo.save(securityModel);
		}

	}

}
