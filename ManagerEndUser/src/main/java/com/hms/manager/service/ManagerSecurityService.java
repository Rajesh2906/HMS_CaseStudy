package com.hms.manager.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.manager.models.ManagerSecurityModel;
import com.hms.manager.models.ReceptionistSecurityModel;
import com.hms.manager.repository.ManagerSecurityRepository;
import com.hms.manager.repository.ReceptionistSecurityRepository;

@Service
public class ManagerSecurityService {

	@Autowired
	private ManagerSecurityRepository managerSecurityRepository;

	@Autowired
	private ReceptionistSecurityRepository receptionistSecurityRepository;

	// update manager details
	public void updateManagerDetails(ManagerSecurityModel securityModel) {
		if (securityModel.getPassword() == managerSecurityRepository.findById(securityModel.getUserId()).get()
				.getPassword()) {
			managerSecurityRepository.save(securityModel);
		}

	}

	public List<ManagerSecurityModel> getUserDetails() {
		return managerSecurityRepository.findAll();
	}

	public void addReceptionist(ReceptionistSecurityModel receptionist) {
		receptionistSecurityRepository.insert(receptionist);
	}

	public List<ReceptionistSecurityModel> getReceptionistDetails() {
		return receptionistSecurityRepository.findAll();
	}

}
