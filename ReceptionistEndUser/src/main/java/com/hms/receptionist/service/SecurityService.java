package com.hms.receptionist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hms.receptionist.model.ReceptionistSecurityModel;
import com.hms.receptionist.repository.ReceptionistSecurityRepository;

@Service
public class SecurityService {

	@Autowired
	private ReceptionistSecurityRepository receptionistRepo;

	@Autowired
	private RestTemplate restTemplate;

	// update owner details
	@SuppressWarnings("unlikely-arg-type")
	public void updateReceptionistDetails(ReceptionistSecurityModel securityModel) {
		ResponseEntity<List<ReceptionistSecurityModel>> responseEntity = restTemplate.exchange(
				"http://subhash:8096/manager/security/getreceptionistdetails", HttpMethod.GET, null,
				new ParameterizedTypeReference<List<ReceptionistSecurityModel>>() {
				});
		List<ReceptionistSecurityModel> listOfReceptionistDetails = responseEntity.getBody();

		if ((listOfReceptionistDetails.stream().anyMatch(p -> p.equals(securityModel.getUserId())))) {
			if(listOfReceptionistDetails.stream().) {

			}receptionistRepo.save(securityModel);
		}

	}

	public List<ReceptionistSecurityModel> getUserDetails() {
		return receptionistRepo.findAll();
	}

}
