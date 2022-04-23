package com.hms.owner.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Ownercontroller {

	@GetMapping("/own")
	public String own() {
		return "Owner";
	}

}
