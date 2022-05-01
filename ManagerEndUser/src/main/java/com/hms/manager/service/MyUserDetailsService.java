package com.hms.manager.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hms.manager.models.ManagerSecurityModel;
import com.hms.manager.repository.ManagerSecurityRepository;


@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private ManagerSecurityRepository managerSecurityRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		ManagerSecurityModel secModel = managerSecurityRepository.findById(username).get();
		return new User(secModel.getUserId(), secModel.getPassword(), new ArrayList<>());
	}

	
	public void  addManagerDetails(ManagerSecurityModel securityModel) {
		managerSecurityRepository.insert(securityModel);
	}

	// update manager details
	public void updateManagerDetails(ManagerSecurityModel securityModel) {
		if (securityModel.getPassword() == managerSecurityRepository.findById(securityModel.getUserId()).get()
				.getPassword()) {
			managerSecurityRepository.save(securityModel);
		}

	}

	

	
	
}