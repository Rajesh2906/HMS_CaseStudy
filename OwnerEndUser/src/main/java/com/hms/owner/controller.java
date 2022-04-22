package com.hms.owner;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {

	@GetMapping("/own")
	public String own() {
		return "Owner";
	}

}
