package com.hms.receptionist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/receptionist/payment")
public class ReceptionistPaymentController {
	@Autowired
	private RestTemplate restTemplate;

	@GetMapping("/pay")
	public void payment() {
		restTemplate.getForObject("http://Payment/pay", String.class);
	}

}
