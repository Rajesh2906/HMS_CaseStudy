package com.hms.notification.service;

import org.springframework.stereotype.Service;

import com.hms.notification.models.ReservationNotification;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class ReservationSMSService {
	private final static String ACCOUNT_SID = "ACf226aeb779bb44959cca044707a1b67a";
	private final static String AUTH_ID = "f63e7d7736c56609b158bb5d4e303aed";

	static {
		Twilio.init(ACCOUNT_SID, AUTH_ID);
	}

	public void sendSMS(ReservationNotification details) {
		Message.creator(new PhoneNumber(details.getPhoneNumber()), new PhoneNumber("+17579934689"),
				"Dear " + details.getName() + " Thank you for registering to ABC Hotel. Your Reservation Code is "
						+ details.getReservationCode())
				.create();
	}
}
