package com.hms.reports.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hms.reports.ReportsRepository;
import com.hms.reports.models.Bill;

@Service
public class BillService {

	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	private ReportsRepository repo;

	public Bill printBillById(String id) {
		Bill bill = restTemplate.getForObject("http://Bill/bill/getbillbyid?billNumber=" + id, Bill.class);
		return repo.insert(bill);
	}
}