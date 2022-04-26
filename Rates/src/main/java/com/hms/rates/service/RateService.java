package com.hms.rates.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.rates.models.Rates;
import com.hms.rates.repository.RateRepository;

@Service
public class RateService {

	@Autowired
	private RateRepository raterepo;

	public Rates setrates(Rates rates) {
		return raterepo.insert(rates);
	}

	public Rates updateRates(Rates rates) {
		return raterepo.save(rates);
	}

	public List<Rates> getRates() {
		return raterepo.findAll();

	}

	public Rates getRateById(String id) {
		return raterepo.findById(id).get();
	}

}