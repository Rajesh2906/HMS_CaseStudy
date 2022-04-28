package com.hms.notification.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.notification.models.GuestNotification;
import com.hms.notification.models.ReservationNotification;
import com.hms.notification.service.GuestMailService;
import com.hms.notification.service.GuestSMSService;
import com.hms.notification.service.ReservationMailService;
import com.hms.notification.service.ReservationSMSService;

@RestController
@RequestMapping("/Notification")
public class NotificationController {

	@Autowired
	private ReservationMailService reservationMail;
	@Autowired
	private ReservationSMSService reservationSms;

	@Autowired
	private GuestMailService guestMail;
	@Autowired
	private GuestSMSService guestSms;

	@PostMapping("/reservationnotification")
	public void run(@RequestBody ReservationNotification details) throws Exception {
		reservationSms.sendSMS(details);
		reservationMail.sendmail(details);
	}

	@PostMapping("/guestnotification")
	public void guestRun(@RequestBody GuestNotification details) throws Exception {
		guestSms.sendSMS(details);
		guestMail.sendmail(details);
	}

}
