package com.hms.owner.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.hms.owner.models.Guest;

@RestController
@RequestMapping("/receptionist/guest")
public class OwnerGuestcontroller {

	@Autowired
	private RestTemplate restTemplate;

	@GetMapping("/getallguests")
	public List<Guest> getGuestList() {
		ResponseEntity<List<Guest>> responseEntity = restTemplate.exchange("http://Guest/Guest/getallguests",
				HttpMethod.GET, null, new ParameterizedTypeReference<List<Guest>>() {
				});
		List<Guest> listOfGuest = responseEntity.getBody();
		return listOfGuest;
	}

	@GetMapping("/getguestbyid")
	public Guest getGuestById(@RequestParam String guestCode) {
		return restTemplate.getForObject("http://Guest/Guest/getguestbyid?guestCode=" + guestCode, Guest.class);
	}

	@PostMapping("/addnewguest")
	public void addNewGuest(@RequestBody Guest guest) {
		restTemplate.postForObject("http://Guest/Guest/addnewguest", guest, Guest.class);
	}

	@PostMapping("/addreservedguest")
	public void addGuest(@RequestParam String reservationcode, @RequestParam String roomNo, @RequestBody Guest guest) {
		restTemplate.postForObject(
				"http://Guest/Guest/addreservedguest?reservationcode=" + reservationcode + "&roomNo=" + roomNo, guest,
				Guest.class);

	}

	@PutMapping("/updateGuest")
	public void updateGuest(@RequestBody Guest guest) {
		restTemplate.put("http://Guest/Guest/updateGuest", guest, Guest.class);
	}

	@PutMapping("/checkoutguest")
	public void updatecheckoutGuest(@RequestParam String guestCode) {
		restTemplate.put("http://Guest/Guest/checkoutguest?guestCode=" + guestCode, Guest.class);
	}

	@DeleteMapping("/deleteguest")
	public void deleteGuest(@RequestParam String guestCode) {
		restTemplate.delete("http://Guest/Guest/deleteguest?guestCode=" + guestCode);
	}

}
