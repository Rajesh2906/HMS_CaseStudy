package com.hms.manager.controller;

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

import com.hms.manager.models.AuthenticationRequest;
import com.hms.manager.models.AuthenticationResponse;
import com.hms.manager.models.ManagerSecurityModel;
import com.hms.manager.models.ReceptionistSecurityModel;
import com.hms.manager.service.MyUserDetailsService;
import com.hms.manager.util.JwtUtil;

@RestController
@RequestMapping("/manager")
public class ManagerSecurityController {

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

	@PostMapping("/addmanager")
	public void addManager(@RequestBody ManagerSecurityModel securityModel) {
		userDetailsService.addManagerDetails(securityModel);
	}

	@PostMapping("/addreceptionist")
	public void addReceeptionist(@RequestBody ReceptionistSecurityModel recepmodel) {
		restTemplate.postForObject("http://ReceptionistEndUser/receptionist/addreceptionist", recepmodel,
				ReceptionistSecurityModel.class);
	}

}
