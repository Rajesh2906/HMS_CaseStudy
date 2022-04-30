package com.hms.receptionist.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hms.receptionist.model.ReceptionistSecurityModel;
import com.hms.receptionist.repository.ReceptionistSecurityRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private ReceptionistSecurityRepository repo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		ReceptionistSecurityModel secModel = repo.findById(username).get();
		return new User(secModel.getUserId(), secModel.getPassword(), new ArrayList<>());
	}

	public void addUserdetails(ReceptionistSecurityModel mod) {
		repo.insert(mod);
	}
}