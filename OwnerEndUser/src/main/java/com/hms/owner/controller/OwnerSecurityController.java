package com.hms.owner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.hms.owner.models.AuthenticationRequest;
import com.hms.owner.models.AuthenticationResponse;
import com.hms.owner.models.ManagerSecurityModel;
import com.hms.owner.models.OwnerSecurityModel;
import com.hms.owner.models.ReceptionistSecurityModel;
import com.hms.owner.service.MyUserDetailsService;
import com.hms.owner.util.JwtUtil;

@RestController
@RequestMapping("/owner")
public class OwnerSecurityController {

	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtTokenUtil;

	@Autowired
	private MyUserDetailsService userDetailsService;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
			throws Exception {

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					authenticationRequest.getUsername(), authenticationRequest.getPassword()));
		} catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password", e);
		}

		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

		final String jwt = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}

	@PostMapping("/addowner")
	public void addOwner(@RequestBody OwnerSecurityModel mod) {
		userDetailsService.addownerDetails(mod);
	}

	@PostMapping("/addreceptionist")
	public void addReceeptionist(@RequestBody ReceptionistSecurityModel recepmodel) {
		restTemplate.postForObject("http://ReceptionistEndUser/receptionist/addreceptionist", recepmodel,
				ReceptionistSecurityModel.class);
	}

	@PostMapping("/addmanager")
	public void addReceptionist(@RequestBody ManagerSecurityModel managerModel) {
		restTemplate.postForObject("http://ManagerEndUser/manager/addmanager", managerModel,
				ManagerSecurityModel.class);
	}
}
