package com.hms.notification.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.notification.models.NotificationDetails;
import com.hms.notification.service.MailService;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@RestController
@RequestMapping("/Notification")
public class Service {
	private final static String ACCOUNT_SID = "AC422ae1c14a4cfa4dcf903decf5b37059";
	private final static String AUTH_ID = "bc0b91c0e7fe44db9d4ffb3c8d92d27d";

	@Autowired
	private MailService mailservice;

	static {
		Twilio.init(ACCOUNT_SID, AUTH_ID);
	}

	@PostMapping("/sendnotification")
	public void run(@RequestBody NotificationDetails details) throws Exception {
		Message.creator(new PhoneNumber(details.getPhoneNumber()), new PhoneNumber("+17577928806"),
				"Thank you for registering " + details.getName()).create();
		mailservice.sendmail(details.getEmailId());

	}

}
