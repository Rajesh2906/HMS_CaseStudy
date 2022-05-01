package com.hms.manager.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hms.manager.models.AuthenticationRequest;
import com.hms.manager.models.ManagerSecurityModel;
import com.hms.manager.repository.ManagerSecurityRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private ManagerSecurityRepository managerSecurityRepository;

	@Autowired
	private RestTemplate restTemplate;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		ManagerSecurityModel secModel = managerSecurityRepository.findById(username).get();
		return new User(secModel.getUserId(), secModel.getPassword(), new ArrayList<>());
	}

	public void addManagerDetails(ManagerSecurityModel securityModel) {
		managerSecurityRepository.insert(securityModel);
	}

	// update manager details
	public void updateManagerDetails(ManagerSecurityModel securityModel) {
		if (securityModel.getPassword() == managerSecurityRepository.findById(securityModel.getUserId()).get()
				.getPassword()) {
			managerSecurityRepository.save(securityModel);
		}

	}

	String authenticationResponse;

	// for creating jwt token
	public String logintoMCs() {

		AuthenticationRequest req = new AuthenticationRequest();
		req.setUsername("hello");
		req.setPassword("12345");

		// String AUTHENTICATION_URL = "http://Customer-service/user/authenticate";
//		HttpHeaders headers = new HttpHeaders();
//		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
//		MultiValueMap<String, String> map = new LinkedMultiValueMap<String, String>();
//		map.add("password", "sai");
//		map.add("username", "sai");
//		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);
		// RestTemplate restTemplate = new RestTemplate();
		authenticationResponse = restTemplate.postForObject("http://ReceptionistEndUser/receptionist/authenticate", req,
				String.class);
		if (!authenticationResponse.isBlank()) {
			String token = "Bearer " + authenticationResponse;
			System.out.println(token);
			return token;
		}

		return "Invalid credential";
	}

}