package com.hms.owner.controller;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.hms.owner.generator.StaffPDFGenerator;
import com.hms.owner.models.Rates;
import com.hms.owner.models.Staff;
import com.lowagie.text.DocumentException;

@RestController
@Document("/owner/staff")
public class OwnerStaffController {

	@Autowired
	private RestTemplate restTemplate;

	@GetMapping("/getallstaff")
	public List<Staff> getGuestList() {
		ResponseEntity<List<Staff>> responseEntity = restTemplate.exchange("http://Staff/staff/getallstaff",
				HttpMethod.GET, null, new ParameterizedTypeReference<List<Staff>>() {
				});
		List<Staff> listOfStaff = responseEntity.getBody();
		return listOfStaff;
	}

	@PostMapping("/addstaff")
	public void setRates(@RequestBody Staff staff) {
		restTemplate.postForObject("http://Staff/staff/addstaff", staff, Rates.class);

	}

	@GetMapping("/getstaffbyid")
	public Staff getStaffById(@RequestParam String staffCode) {
		return restTemplate.getForObject("http://Staff/staff/getstaffbyid?staffCode=" + staffCode, Staff.class);
	}

	@PutMapping("/updatestaff")
	public void updateById(@RequestBody Staff staff) {
		restTemplate.put("http://Staff/staff/updatestaff", staff, Staff.class);
	}

	@DeleteMapping("/deletestaff")
	public void deleteById(@RequestParam String staffCode) {
		restTemplate.delete("http://Staff/staff/deletestaff?staffCode=" + staffCode);
	}

	@GetMapping("/printstaffreport")
	public void generatePdf(HttpServletResponse response) throws DocumentException, IOException {

		response.setContentType("application/pdf");
		DateFormat dateFormat = new SimpleDateFormat("YYYY-MM-DD:HH:MM:SS");
		String currentDateTime = dateFormat.format(new Date());
		String headerkey = "Content-Disposition";
		String headervalue = "attachment; filename=pdf_" + currentDateTime + "_Staff_list_report.pdf";

		ResponseEntity<List<Staff>> responseEntity = restTemplate.exchange("http://Staff/staff/getallstaff",
				HttpMethod.GET, null, new ParameterizedTypeReference<List<Staff>>() {
				});
		List<Staff> listOfStaff = responseEntity.getBody();

		response.setHeader(headerkey, headervalue);
		StaffPDFGenerator generator = new StaffPDFGenerator();
		generator.generate(response, listOfStaff);

	}
}
