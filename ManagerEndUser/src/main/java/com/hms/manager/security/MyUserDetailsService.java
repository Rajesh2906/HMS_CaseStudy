package com.hms.manager.security;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private ManagerSecurityRepository managerSecurityRepository;

	@Autowired
	private RestTemplate restTemplate;

	//Retrieving user details by giving user name from database
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		ManagerSecurityModel secModel = managerSecurityRepository.findById(username).get();
		return new User(secModel.getUserId(), secModel.getPassword(), new ArrayList<>());
	}

	//Adding manager user name and password to the database
	public void addManagerDetails(ManagerSecurityModel securityModel) {
		managerSecurityRepository.insert(securityModel);
	}

	//update manager authentication details in the database
	public void updateManagerDetails(ManagerSecurityModel securityModel, String newpassword) throws Exception {
	//Verifies the existence of the user Id in the database
		if (managerSecurityRepository.existsById(securityModel.getUserId())) {
			//Verifies the existence of the password in the database
			if (securityModel.getPassword()
					.equals(managerSecurityRepository.findById(securityModel.getUserId()).get().getPassword())) {
				securityModel.setPassword(newpassword);
				managerSecurityRepository.save(securityModel);
			} else {
				throw new Exception("Incorrect old password, please check it and try again");
			}
		} else {
			throw new Exception("User name not found");
		}

	}

}