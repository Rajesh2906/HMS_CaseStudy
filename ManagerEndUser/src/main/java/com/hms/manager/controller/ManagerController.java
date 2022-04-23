package com.hms.manager.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ManagerController {

	@GetMapping("/man")
	public String man() {
		return "Manager";
	}

}
