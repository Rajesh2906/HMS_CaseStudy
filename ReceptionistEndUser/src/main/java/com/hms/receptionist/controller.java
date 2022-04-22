package com.hms.receptionist;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Receptionist")
public class controller {

	@GetMapping("/rec")
	public String Rec() {
		return "Receptionist";
	}

}
