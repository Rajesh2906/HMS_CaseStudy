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

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		ManagerSecurityModel secModel = managerSecurityRepository.findById(username).get();
		return new User(secModel.getUserId(), secModel.getPassword(), new ArrayList<>());
	}

	public void addManagerDetails(ManagerSecurityModel securityModel) {
		managerSecurityRepository.insert(securityModel);
	}

	// update manager details
	public void updateManagerDetails(ManagerSecurityModel securityModel, String newpassword) throws Exception {
		if (managerSecurityRepository.existsById(securityModel.getUserId())) {
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