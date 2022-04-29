package com.hms.reservation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.hms.reservation.models.Reservation;
import com.hms.reservation.models.ReservationNotification;
import com.hms.reservation.service.ReservationService;

@RestController
@RequestMapping("/reservation")
public class ReservationController {

	@Autowired
	private ReservationService service;

	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	private ReservationNotification notificationDetails;

	@PostMapping("/addreservation")
	public void addReservations(@RequestBody Reservation reservation) {

		service.addReservation(reservation);
		notificationDetails.setPhoneNumber(reservation.getPhoneNumber());
		notificationDetails.setEmailId(reservation.getEmailId());
		notificationDetails.setName(reservation.getName());
		notificationDetails.setReservationCode(reservation.getReservationCode_());
		restTemplate.postForObject("http://Notification/Notification/reservationnotification", notificationDetails,
				ReservationNotification.class);

	}

	@GetMapping("/getallreservation")
	public List<Reservation> getAllReservations() {
		return service.getAllReservation();
	}

	@PutMapping("/updatereservation")
	public void updateReservation(@RequestBody Reservation reservation) {
		service.updateReservation(reservation);
	}

	@GetMapping("/getreservationbyid")
	public Reservation getById(@RequestParam String id) {
		return service.getreservationById(id);
	}

}