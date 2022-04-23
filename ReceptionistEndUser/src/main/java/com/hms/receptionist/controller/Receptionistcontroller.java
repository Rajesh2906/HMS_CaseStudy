package com.hms.receptionist.controller;

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

import com.hms.receptionist.model.Reservation;

@RestController
@RequestMapping("/Receptionist")
public class Receptionistcontroller {

	@Autowired
	private RestTemplate restTemplate;

	// Receptionist Controller

	@GetMapping("/getreservationbyid")
	public Reservation reservationById(@RequestParam String id) {
		return restTemplate.getForObject("http://localhost:8081/reservation/getreservationbyid?id=" + id,
				Reservation.class);
	}

	@GetMapping("/getallreservation")
	public List<Reservation> allReservations() {
		ResponseEntity<List<Reservation>> responseEntity = restTemplate.exchange(
				"http://localhost:8081/reservation/getallreservation", HttpMethod.GET, null,
				new ParameterizedTypeReference<List<Reservation>>() {
				});
		List<Reservation> listOfReservation = responseEntity.getBody();
		return listOfReservation;
	}

	@PostMapping("/addreservation")
	public void postReservation(@RequestBody Reservation reservation) {
		restTemplate.postForObject("http://localhost:8081/reservation/addreservation", reservation, Reservation.class);
	}

	@PutMapping("/updatereservation")
	public void updateReservation(@RequestBody Reservation book) {
		restTemplate.put("http://localhost:8081/reservation/updatereservation", book, Reservation.class);
	}

	@DeleteMapping("/deletereservation")
	public void deleteReservation(@RequestParam String id) {
		restTemplate.delete("http://localhost:8081/reservation/deletereservation?id=" + id);
	}

}
