package com.hms.staff.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.staff.models.Staff;
import com.hms.staff.service.StaffService;

@RestController
@RequestMapping("/manager")
public class StaffController {
	@Autowired
	private StaffService staffservice;

	@GetMapping("/getallstaff")
	public List<Staff> getAllStaff() {
		return staffservice.getAllReservation();
	}

	@PostMapping("/addstaff")
	public Staff addStaff(@RequestBody Staff staff) {
		return staffservice.addStaff(staff);
	}

	@DeleteMapping("/staff/{staffCode}")
	public void deleteById(@PathVariable("staffCode") String staffCode) {
		staffservice.deleteStaffById(staffCode);
	}

	@PutMapping("/updatestaff")
	public Staff updateById(@RequestBody Staff staffCode) {
		return staffservice.updateStaffById(staffCode);
	}

	@GetMapping("/staff/{staffCode}")
	public Staff getStaffById(@PathVariable("staffCode") String staffCode) {
		return staffservice.getStaffById(staffCode);
	}

}