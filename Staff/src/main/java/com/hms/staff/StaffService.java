package com.hms.staff;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StaffService {

	@Autowired
	private StaffRepository staffrep;

	public List<Staff> getAllReservation() {
		return (List<Staff>) staffrep.findAll();
	}

	public Staff addStaff(Staff staff) {
		return staffrep.save(staff);
	}

	public void deleteStaffById(String staffCode) {
		staffrep.deleteById(staffCode);
	}

	public Staff updateStaffById(Staff staffCode) {
		return staffrep.save(staffCode);
	}

	public Staff getStaffById(String staffCode) {
		return staffrep.findById(staffCode).get();
	}

}