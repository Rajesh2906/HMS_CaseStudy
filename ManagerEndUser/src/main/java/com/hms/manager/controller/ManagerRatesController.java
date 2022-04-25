package com.hms.manager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.hms.manager.models.Rates;

@RestController
@RequestMapping("/manager")
public class ManagerRatesController {

	@Autowired
	private RestTemplate restTemplate;

	@PostMapping("/addrate")
	public void setRates(@RequestBody Rates rate) {
		restTemplate.postForObject("http://Rates/manager/addrate", rate, Rates.class);

	}

	@GetMapping("/getallrates")
	public List<Rates> getRates() {
		ResponseEntity<List<Rates>> responseEntity = restTemplate.exchange("http://Rates/manager/getallrates",
				HttpMethod.GET, null, new ParameterizedTypeReference<List<Rates>>() {
				});
		List<Rates> listOfRates = responseEntity.getBody();
		return listOfRates;
	}

	@PutMapping("/updaterates")
	public void updateRates(@RequestBody Rates rates, @RequestParam String id) {
		restTemplate.put("http://Rates/manager/updaterates?id=" + id, rates, Rates.class);
	}

}
