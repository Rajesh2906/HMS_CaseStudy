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
		reservation.setReservationCode_("RS" + (rep.count() + 1));

		return rep.insert(reservation);
	}

	public List<Reservation> getAllReservation() {
		return rep.findAll();
	}

	public Reservation updateReservation(Reservation reservation) {
		return rep.save(reservation);
	}

	public Reservation getreservationById(String ReservationcCode) {
		return rep.findById(ReservationcCode).get();
	}

}