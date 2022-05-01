package com.hms.owner.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hms.owner.models.OwnerSecurityModel;
import com.hms.owner.repository.OwnerSecurityRepository;


@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private OwnerSecurityRepository ownerRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		OwnerSecurityModel secModel = ownerRepo.findById(username).get();
		return new User(secModel.getUserId(), secModel.getPassword(), new ArrayList<>());
	}



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

	
	
}