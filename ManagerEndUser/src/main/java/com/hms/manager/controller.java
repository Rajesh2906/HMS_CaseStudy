package com.hms.manager;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {

	@GetMapping("/man")
	public String man() {
		return "Manager";
	}

}
