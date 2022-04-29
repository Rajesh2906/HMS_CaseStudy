package com.hms.owner.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.owner.models.OwnerSecurityModel;
import com.hms.owner.repository.OwnerSecurityRepository;

@Service
public class SecurityService {

	@Autowired
	private OwnerSecurityRepository ownerRepo;

	// add owner details
	public void addownerDetails(OwnerSecurityModel ownersecurityModel) {
		ownerRepo.insert(ownersecurityModel);
	}

	// update owner details
	public void updateOwnerDetails(OwnerSecurityModel securityModel) {
		if (securityModel.getPassword() == ownerRepo.findById(securityModel.getUserId()).get().getPassword()) {
			ownerRepo.save(securityModel);
		}

	}

	// get owner by id
	public OwnerSecurityModel getOwnerById(String userid) {
		return ownerRepo.findById(userid).get();
	}

}
