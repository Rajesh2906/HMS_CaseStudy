package com.hms.reports.controller;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.hms.reports.generator.BillPDFGenerator;
import com.hms.reports.models.Bill;
import com.lowagie.text.DocumentException;

@RestController
public class BillController {

	@Autowired
	private RestTemplate restTemplate;

	@GetMapping("/pdf/bill")
	public void generatePdf(HttpServletResponse response, @RequestParam String BillCode)
			throws DocumentException, IOException {

		response.setContentType("application/pdf");
		DateFormat dateFormat = new SimpleDateFormat("YYYY-MM-DD:HH:MM:SS");
		String currentDateTime = dateFormat.format(new Date());
		String headerkey = "Content-Disposition";
		String headervalue = "attachment; filename=pdf_" + currentDateTime + BillCode + ".pdf";

		Bill bill = restTemplate.getForObject("http://Bill/bill/getbillbyid?billNumber=" + BillCode, Bill.class);
		response.setHeader(headerkey, headervalue);

		BillPDFGenerator generator = new BillPDFGenerator();
		generator.generate(response, bill);

	}

}
