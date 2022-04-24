package com.hms.receptionist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.hms.receptionist.model.Guest;

@RestController
@RequestMapping("/receptionist/guest")
public class ReceptionistGuestcontroller {

	@Autowired
	private RestTemplate restTemplate;

	@GetMapping("/getallguests")
	public List<Guest> getGuestList() {
		ResponseEntity<List<Guest>> responseEntity = restTemplate.exchange(
				"http://host.docker.internal:8082/Guest/getallguests", HttpMethod.GET, null,
				new ParameterizedTypeReference<List<Guest>>() {
				});
		List<Guest> listOfGuest = responseEntity.getBody();
		return listOfGuest;
	}

	@GetMapping("/getguestbyid")
	public Guest getGuestById(@RequestParam String guestCode) {
		return restTemplate.getForObject("http://host.docker.internal:8082/Guest/getguestbyid?guestCode=" + guestCode,
				Guest.class);
	}

	@PostMapping("/addnewguest")
	public void addNewGuest(@RequestBody Guest guest, @RequestParam String roomNo) {
		restTemplate.postForObject("http://host.docker.internal:8082/Guest/addnewguest?roomNo=" + roomNo, guest,
				Guest.class);
	}

}
