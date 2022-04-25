package com.hms.rates.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hms.rates.models.Rates;
import com.hms.rates.service.RateService;

@RestController
@RequestMapping("/manager")
public class RateController {
	@Autowired
	RateService rateService;

	@PostMapping("/addrate")
	public void setRates(@RequestBody Rates rate) {
		rateService.setrates(rate);
	}

	@GetMapping("/getallrates")
	public List<Rates> getRates() {
		return rateService.getRates();
	}

	@PutMapping("/updaterates")
	public void updateRates(@RequestBody Rates rates, @RequestParam String id) {
		rateService.updateRates(rates, id);
	}

}