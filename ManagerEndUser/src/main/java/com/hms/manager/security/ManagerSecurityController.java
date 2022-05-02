package com.hms.manager.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

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

	//Authenticates the manager using user name and password and returns JWT token 
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestParam String username, @RequestParam String password)
			throws Exception {

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password", e);
		}

		final UserDetails userDetails = userDetailsService.loadUserByUsername(username);

		final String jwt = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(jwt);
	}

	//Creates new user name and password for new manager
	@PostMapping("/addmanager")
	public void addManager(@RequestBody ManagerSecurityModel securityModel) {
		userDetailsService.addManagerDetails(securityModel);
	}

	//Creates new user name and password for new receptionist
	@PostMapping("/addreceptionist")
	public void addReceeptionist(@RequestBody ReceptionistSecurityModel recepmodel) {
		restTemplate.postForObject("http://ReceptionistEndUser/receptionist/addreceptionist", recepmodel,
				ReceptionistSecurityModel.class);
	}

	//Update the user name and password for existing manager
	@PutMapping("/updatemanager")
	public void updateManagerDetails(@RequestBody ManagerSecurityModel managerSecurityModel,
			@RequestParam String password) throws Exception {
		userDetailsService.updateManagerDetails(managerSecurityModel, password);

	}

}
