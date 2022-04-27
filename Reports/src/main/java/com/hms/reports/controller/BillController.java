package com.hms.reports.controller;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hms.reports.generator.BillPDFGenerator;
import com.lowagie.text.DocumentException;

@RestController
public class BillController {

	@GetMapping("/pdf/students")
	public void generatePdf(HttpServletResponse response, @RequestParam String guestCode)
			throws DocumentException, IOException {
		// Cannot invoke "com.hms.reports.service.BillService.printBillById(String)"
		// because "this.billService" is null

		response.setContentType("application/pdf");
		DateFormat dateFormat = new SimpleDateFormat("YYYY-MM-DD:HH:MM:SS");
		String currentDateTime = dateFormat.format(new Date());
		String headerkey = "Content-Disposition";
		String headervalue = "attachment; filename=pdf_" + currentDateTime + ".pdf";
		response.setHeader(headerkey, headervalue);

		BillPDFGenerator generator = new BillPDFGenerator();
		generator.generate(response, guestCode);

	}

}
