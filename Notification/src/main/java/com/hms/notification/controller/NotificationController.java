package com.hms.notification.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.notification.models.GuestNotification;
import com.hms.notification.models.ReservationNotification;
import com.hms.notification.service.GuestMailService;
import com.hms.notification.service.ReservationMailService;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@RestController
@RequestMapping("/Notification")
public class NotificationController {

	private final static String ACCOUNT_SID = "AC7dc737df471c387e638c38bcdebba3a5";
	private final static String AUTH_ID = "852b5fbeb8d20b9225fe8ea4a2d82c8d";

	static {
		Twilio.init(ACCOUNT_SID, AUTH_ID);
	}

	@Autowired
	private ReservationMailService reservationMail;

	@Autowired
	private GuestMailService guestMail;

	@PostMapping("/reservationnotification")
	public void run(@RequestBody ReservationNotification details) throws Exception {
		Message.creator(new PhoneNumber(details.getPhoneNumber()), new PhoneNumber("+12185177445"),
				"Dear " + details.getName() + " Thank you for your reservation to ABC Hotel . Your reservation code is "
						+ details.getReservationCode())
				.create();
		reservationMail.sendmail(details);
	}

	@PostMapping("/guestnotification")
	public void guestRun(@RequestBody GuestNotification details) throws Exception {
		Message.creator(new PhoneNumber(details.getPhoneNumber()), new PhoneNumber("+12185177445"),
				"Dear " + details.getName() + " Your guest code is " + details.getGuestCode()).create();
		guestMail.sendmail(details);
	}

}
