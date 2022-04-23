package com.hms.guest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hms.guest.models.Guest;
import com.hms.guest.models.Reservation;
import com.hms.guest.repository.GuestRepository;

@Service
public class GuestService {

	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	Guest guest;

	@Autowired
	private GuestRepository guestrepo;

	public void addguest(Guest guest) {
		guest.setGuestStatus_("Checked In");
		guestrepo.insert(guest);
	}

	public List<Guest> getallguests() {
		return guestrepo.findAll();
	}

	public Guest getGuestById(String guestCode) {
		return guestrepo.findById(guestCode).get();
	}

	public void deleteguest(String guestCode) {
		guestrepo.deleteById(guestCode);
	}

	public Guest addifGuest(String reservationcode, Guest guest, String roomNo) {

		ResponseEntity<List<Reservation>> responseEntity = restTemplate.exchange(
				"http://Reservation/reservation/getallreservation", HttpMethod.GET, null,
				new ParameterizedTypeReference<List<Reservation>>() {
				});
		List<Reservation> listOfReservation = responseEntity.getBody();

		if (listOfReservation.stream().anyMatch(p -> reservationcode.equals(p.getReservationCode()))) {

			// AUTOMATE IT AFTER CREATING ROOM MICROSERVICE

//			Rooms myDocumentToUpdateactive = roomsrepo.findById(roomNo).get();
//			myDocumentToUpdateactive.setRoomStatus_("Active");
//			roomsrepo.save(myDocumentToUpdateactive);

			Reservation resobj = listOfReservation.stream().filter(p -> reservationcode.equals(p.getReservationCode()))
					.findAny().orElse(null);

			guest.setName_(resobj.getName());
			guest.setAddress_(resobj.getAddress());
			guest.setCompany_(resobj.getCompany());
			guest.setEmailId_(resobj.getEmailId());
			guest.setGender_(resobj.getGender());
			guest.setPhoneNumber_(resobj.getPhoneNumber());
			guest.setReservationCode(reservationcode);
			guest.setRoomNumber(roomNo);
			guest.setGuestStatus_("Checked In");
			return guestrepo.insert(guest);

		} else {
			return null;

		}

	}

	public void updateGuest(Guest guest) {
		guestrepo.save(guest);
	}

	public void checkoutGuest(String roomNo, String guestCode) {

//		Rooms myDocumentToUpdatenotactive = roomsrepo.findById(roomNo).get();
//		myDocumentToUpdatenotactive.setRoomStatus_("Not Active");
//		roomsrepo.save(myDocumentToUpdatenotactive);

		Guest guestinfo = guestrepo.findById(guestCode).get();
		guestinfo.setGuestStatus_("Checked Out");
		guestrepo.save(guestinfo);

	}

}