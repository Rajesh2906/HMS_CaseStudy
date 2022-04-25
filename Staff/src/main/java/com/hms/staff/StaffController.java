package com.hms.staff;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/manager")
public class StaffController {
	@Autowired
	private StaffService staffservice;

	@RequestMapping("/getallstaff")
	public List<Staff> getAllStaff() {
		return staffservice.getAllReservation();
	}

	@RequestMapping(value = "/addstaff", method = RequestMethod.POST)
	public Staff addStaff(@RequestBody Staff staff) {
		return staffservice.addStaff(staff);
	}

	@RequestMapping(value = "/staff/{staffCode}", method = RequestMethod.DELETE)
	public void deleteById(@PathVariable("staffCode") String staffCode) {
		staffservice.deleteStaffById(staffCode);
	}

	@RequestMapping(value = "/updatestaff", method = RequestMethod.PUT)
	public Staff updateById(@RequestBody Staff staffCode) {
		return staffservice.updateStaffById(staffCode);
	}

	@RequestMapping(value = "/staff/{staffCode}", method = RequestMethod.GET)
	public Staff getStaffById(@PathVariable("staffCode") String staffCode) {
		return staffservice.getStaffById(staffCode);
	}

}