package com.hms.receptionist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.hms.receptionist.model.Rooms;

@RestController
@RequestMapping("/Receptionist/rooms")
public class ReceptionistRoomsController {

	@Autowired
	private RestTemplate restTemplate;

	@GetMapping("/availablerooms")
	public List<Rooms> getAvailableRooms() {
		ResponseEntity<List<Rooms>> responseEntity = restTemplate.exchange("http://Rooms/Rooms/availablerooms",
				HttpMethod.GET, null, new ParameterizedTypeReference<List<Rooms>>() {
				});
		List<Rooms> listOfRooms = responseEntity.getBody();
		return listOfRooms;
	}

}
