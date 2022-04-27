package com.hms.reports.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hms.reports.models.Bill;

@Service
public class ReportService {

	@Autowired
	private RestTemplate restTemplate;

	public List<Bill> getAllBill() {
		ResponseEntity<List<Bill>> responseEntity = restTemplate.exchange(
				"http://host.docker.internal:8083/bill/getallbills", HttpMethod.GET, null,
				new ParameterizedTypeReference<List<Bill>>() {
				});
		List<Bill> listOfBills = responseEntity.getBody();
		return listOfBills;
	}

}
