package com.hms.reservation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hms.reservation.models.Reservation;
import com.hms.reservation.service.ReservationService;

@RestController
@RequestMapping("/reservation")
public class ReservationController {

	@Autowired
	private ReservationService service;

	@PostMapping("/addreservation")
	public Reservation addReservations(@RequestBody Reservation reservation) {
		service.addReservation(reservation);
		return reservation;
	}

	@GetMapping("/getallreservation")
	public List<Reservation> getAllReservations() {
		return service.getAllReservation();
	}

	@PutMapping("/updatereservation")
	public void updateReservation(@RequestBody Reservation reservation) {
		service.updateReservation(reservation);
	}

	@DeleteMapping("/deletereservation")
	public void deleteReservation(@RequestParam String id) {
		service.deleteReservation(id);
	}

	@GetMapping("/getreservationbyid")
	public Reservation getById(@RequestParam String id) {
		return service.getreservationById(id);
	}

}