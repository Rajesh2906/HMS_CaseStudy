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
	private final static String ACCOUNT_SID = "ACf226aeb779bb44959cca044707a1b67a";
	private final static String AUTH_ID = "f63e7d7736c56609b158bb5d4e303aed";

	@Autowired
	private MailService mailservice;

	static {
		Twilio.init(ACCOUNT_SID, AUTH_ID);
	}

	@PostMapping("/sendnotification")
	public void run(@RequestBody NotificationDetails details) throws Exception {
		Message.creator(new PhoneNumber(details.getPhoneNumber()), new PhoneNumber("+17579934689"),
				"Thank you for registering " + details.getName()).create();
		mailservice.sendmail(details.getEmailId());

	}

}
