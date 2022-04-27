package com.hms.reports.controller;

import java.io.ByteArrayInputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.hms.reports.models.Bill;
import com.hms.reports.service.ReportService;

@Controller
public class ReportController {

	@Autowired
	private ReportService reportService;

	@RequestMapping(value = "/generatebill", method = RequestMethod.GET, produces = MediaType.APPLICATION_PDF_VALUE)
	public ResponseEntity<InputStreamResource> generateBill() {
		var bills = (List<Bill>) reportService.getAllBill();

		ByteArrayInputStream bis = GenerateReport.citiesReport(bills);

		var headers = new HttpHeaders();
		headers.add("Content-Disposition", "inline; filename=citiesreport.pdf");

		return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
				.body(new InputStreamResource(bis));

	}
}
