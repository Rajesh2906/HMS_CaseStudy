package com.hms.reservation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.reservation.models.Reservation;
import com.hms.reservation.repository.ReservationRepository;

@Service
public class ReservationService {

	@Autowired
	private ReservationRepository rep;

	public Reservation addReservation(Reservation reservation) {
		reservation.setStatus_("Confirmed");
		return rep.insert(reservation);
	}

	public List<Reservation> getAllReservation() {
		return rep.findAll();
	}

	public Reservation updateReservation(Reservation reservation) {
		return rep.save(reservation);
	}

	public void deleteReservation(String ReservationcCode) {
		rep.deleteById(ReservationcCode);
	}

	public Reservation getreservationById(String ReservationcCode) {
		return rep.findById(ReservationcCode).get();
	}

	/*
	 * public boolean findById(String code) { return
	 * rep.findById(res.getCode()).equals(code); }
	 */

}